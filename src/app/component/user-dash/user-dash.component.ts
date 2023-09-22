import { OfferService } from './../../service/offer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { User } from 'src/app/model/user';
import { UserItem } from 'src/app/model/userItem';
import { UserItemOffer } from 'src/app/model/userItemOffer';
import { UserOffer } from 'src/app/model/userOffer';
import { ItemService } from 'src/app/service/item.service';
import { UserDashService } from 'src/app/service/user-dash.service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})

export class UserDashComponent implements OnInit {

  user: User | undefined;
  offers: UserOffer[] | undefined;
  items: UserItem[] | undefined;

  serverError: any;
  isVisible: boolean = false;
  lander: String = "main";
  child_lander: String = "main";
  itemFormVisibility: boolean = false;
  userType: String = "";
  

  constructor(
    private router: Router,
    private userService: UserService,
    private userDashService: UserDashService
  ) { }

  // inizializzazione
  ngOnInit(): void {

    this.userService.getUserData()
    .subscribe({next: response => {this.user = response; this.offers = response.offers; this.items = response.items;
    }, error: e => console.log(e) });



  }

  btnClick(): void {
    this.router.navigate(["c_dash_two"]);
  }

  user_profile_update(): void {
    window.scroll(0, 0);
    this.lander = "no";
    this.child_lander = "update";
  }

  info_btnClick(): void {
    this.isVisible = !this.isVisible;
  }

  addNewItem(): void {
    this.itemFormVisibility = true;

  }

  yourOffers(): void {
    this.userDashService.setLander("offer");
    this.router.navigate(['user/dash']);
  }

  yourAuctionItems(): void {
    this.userDashService.setLander("auction");
    this.router.navigate(['user/dash']);
  }

  yourSoldItems(): void {
    this.userDashService.setLander("soldItems");
    this.router.navigate(['user/dash']);
  }

  return_to_profile(): void {
    this.lander = "main";
    this.child_lander = "main";
  }

  leaveItemForm(): void {
    this.itemFormVisibility = false;
  }

  userLogoutManager(): void {
    this.userService.userLogout()
      .subscribe({
        next: response => {
          if (response.code == 202) {
            this.userService.removeUserCredential();
            this.router.navigate([""]);
          }
        },
        error: e => console.log(e)
      });
  }

}
