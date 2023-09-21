import { itemOffers } from './../../model/itemOffers';
import { OfferService } from './../../service/offer.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router"
import { Item } from 'src/app/model/item';
import { Offer } from 'src/app/model/offer';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})

export class UserDashComponent implements OnInit {

  user: User | undefined;
  serverError: any;
  isVisible: boolean = false;
  lander: String = "main";
  child_lander: String = "main";
  itemFormVisibility: boolean = false;
  userOffers: Offer[] | undefined;
  items: Item[] | undefined;
  // itemOffers: itemOffers[] | undefined;
  offersOfItems:number[] = [];
  userType: String = "";
  

  constructor(
    private router: Router,
    private userService: UserService,
    private offerService: OfferService
  ) { }

  // inizializzazione
  ngOnInit(): void {

    this.userService.getUserData()
    .subscribe({next: response => {this.user = response; this.items = response.items; this.userOffers = response.offers;

    
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
    this.lander = "no";
    this.child_lander = "offer";
  }

  yourAuctionItems(): void {
    this.lander = "no";
    this.child_lander = "auction";
  }

  yourSoldItems(): void {
    this.lander = "no";
    this.child_lander = "soldItems";
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
