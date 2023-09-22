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

  itemFormVisibility:boolean = false;
  itemDetailsVisibility:boolean = false;
  item:UserItem | undefined;
  user:User | undefined;
  offers: UserOffer[] | undefined;
  items: UserItem[] | undefined;
  child_lander:String = "";
  @Output() child_landerChange = new EventEmitter();

  constructor(private itemService:ItemService,
              private router:Router,
              private userService:UserService,
              private userDashService:UserDashService
              ) {}

  ngOnInit(): void {
    this.child_lander = this.userDashService.getLander();
    if (this.child_lander == "") {
      this.child_lander = "offer";
    }
    this.userService.getUserData().subscribe({
      next: response => { this.user = response, this.items = response.items, this.offers = response.offers },
      error: e => console.log(e)
    });
  }
  

  //metodo per aggiornare la pagina all'aggiunta o rimozione di articoli
  refresh():void {    
    this.userService.getUserData().subscribe({
      next: response => { this.items = response.items },
      error: e => console.log(e)
    });
  }

  ritorna_al_profilo():void {
    this.router.navigate(['user']);
  }

  addNewItem():void {
    this.itemFormVisibility = true;
  }

  itemDetails(item:UserItem):void {
    this.itemDetailsVisibility = true;
    this.item = item;
  }

  offerte():void {
    this.child_lander = "offer";
  }

  articoliAsta():void {
    this.child_lander = "auction";
  }

  articoliVenduti():void {
    this.child_lander = "soldItems";
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
}
