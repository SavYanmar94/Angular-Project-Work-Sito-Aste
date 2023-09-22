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
  @Input() items:Item[] | undefined;
  @Input() userOffers:Offer[] | undefined;
  @Input() user:User | undefined;
  @Input() child_lander:String = "main";
  @Output() lander_main = new EventEmitter();

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
