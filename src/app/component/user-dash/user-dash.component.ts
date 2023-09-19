import { OfferService } from './../../service/offer.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from "@angular/router"
import { Item } from 'src/app/model/item';
import { Offer } from 'src/app/model/offer';
import { User } from 'src/app/model/user';
import { ItemService } from 'src/app/service/item.service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})

export class UserDashComponent {

  user:User|undefined;
  serverError: any;
  isVisible: boolean = false;
  lander: String = "main";
  child_lander: String = "main";
  itemFormVisibility: boolean = false;
  offers: Offer[] | undefined;
  items: Item[] | undefined;
  userType: String = "";

  constructor(
    private router: Router,
    private userService: UserService,
    private itemService: ItemService,
    private offerService: OfferService
  ) { }

  // inizializzazione
  ngOnInit(): void {
    this.callAPI();
  }

  // metodo invocabile per invocazione API dati
  callAPI(): void {
    this.userService.getUserData()
      .subscribe({
        next: response => {
          this.user = response;
          if (this.user && this.user.id != 0) {
            
            this.itemService.getItems()
              .subscribe({
                next: response => {
                  if (response) {
                    this.items = response;
                  }
                },
                error: e => console.log(e)
              })

            this.offerService.getOffers().subscribe({
              next: response => {
                if (response) {
                  this.offers = response;
                }
              },
              error: e => console.log(e)
            })

            console.log("------------");
            console.log(this.items);
          }
        },
        error: e => {console.log(e), console.log("damn")}
        
      });
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
