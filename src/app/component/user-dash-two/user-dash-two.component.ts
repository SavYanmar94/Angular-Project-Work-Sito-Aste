import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/model/item';
import { Offer } from 'src/app/model/offer';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-dash-two',
  templateUrl: './user-dash-two.component.html',
  styleUrls: ['./user-dash-two.component.css']
})
export class UserDashTwoComponent {

  itemFormVisibility:boolean = false;
  itemDetailsVisibility:boolean = false;
  items:Item[] | undefined;
  offers:Offer[] | undefined;
  @Input() user:User | undefined;
  @Input() child_lander:String = "main";
  @Output() lander_main = new EventEmitter();

  ngOnInit() {
    console.log("ccccccccccccccccc");
    console.log(this.user);
    this.items = this.user?.items;
    this.dannazione();
  }

  dannazione():void {
    this.items = this.user?.items;
    this.offers = this.user?.offers;
    console.log("**********");
    console.log(this.user);
    console.log(this.items);
    console.log(this.offers);
    if(this.items !== undefined) {
      console.log(this.items.length)
    };
  }

  ritorna_al_profilo():void {
    this.lander_main.emit();
    this.child_lander = "main";
  }

  addNewItem():void {
    this.itemFormVisibility = true;
  }

  itemDetails():void {
    this.itemDetailsVisibility = true;
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
}
