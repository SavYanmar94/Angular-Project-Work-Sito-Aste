import { UserDashService } from 'src/app/service/user-dash.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserItem } from 'src/app/model/userItem';
import { UserOffer } from 'src/app/model/userOffer';
import { ItemService } from 'src/app/service/item.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-dash-two',
  templateUrl: './user-dash-two.component.html',
  styleUrls: ['./user-dash-two.component.css']
})

export class UserDashTwoComponent implements OnInit {

  userType?: String = "";
  itemFormVisibility:boolean = false;
  itemDetailsVisibility:boolean = false;
  item:UserItem | undefined;
  user:User | undefined;
  offers: UserOffer[] | undefined;
  items: UserItem[] | undefined;
  lander:string = "";
  offerReceived:boolean = false;

  constructor(private itemService:ItemService,
              private router:Router,
              private userService:UserService,
              private userDashService:UserDashService
              ) {}

  ngOnInit(): void {
    this.lander = this.userDashService.getLander().toString();
    if (this.lander == "") {
      this.lander = "sentOffers";
    }
    this.userService.getUserData().subscribe({
      next: response => {this.user = response, this.items = response.items, this.offers = response.offers, this.userType = response.profileType?.toString()},
      error: e => console.log(e)
    });

    //per vedere se c'è almeno un'offerta nella lista degli articoli dell'utente
    if(this.items !== undefined) {
      for(let item of this.items) {
        if(item.offers !== undefined) {
          this.offerReceived = true;
        }
      }
    }
  }

  //metodi navbar
  ritorna_al_profilo():void {
    this.router.navigate(['user']);
  }

  addNewItem():void {
    this.itemFormVisibility = true;
  }

  sentOffers():void {
    this.lander = "sentOffers";
  }

  receivedOffers():void {
    this.lander = "receivedOffers";
  }

  articoliAsta():void {
    this.lander = "auction";
  }

  articoliVenduti():void {
    this.lander = "soldItems";
  }
  
  //metodo per aggiornare la pagina all'aggiunta o rimozione di articoli
  refresh():void {    
    this.userService.getUserData().subscribe({
      next: response => { this.items = response.items },
      error: e => console.log(e)
    });
  }

  itemDetails(item:UserItem):void {
    this.itemDetailsVisibility = true;
    this.item = item;
  }

  removeItem(item:UserItem):void {
    this.itemService.deleteItem(item.id).subscribe(
      {
        next: response => { if(response.code == 202) {
          this.refresh();
        } },
        error: e => console.log(e.message)
      }
    );
  }

  changeLander(lander:string) {
    this.lander = lander;
  }
}
