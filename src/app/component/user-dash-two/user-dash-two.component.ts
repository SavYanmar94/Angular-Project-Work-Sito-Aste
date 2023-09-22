import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/model/item';
import { User } from 'src/app/model/user';
import { UserItem } from 'src/app/model/userItem';
import { UserItemOffer } from 'src/app/model/userItemOffer';
import { UserOffer } from 'src/app/model/userOffer';

@Component({
  selector: 'app-user-dash-two',
  templateUrl: './user-dash-two.component.html',
  styleUrls: ['./user-dash-two.component.css']
})
export class UserDashTwoComponent {

  itemFormVisibility:boolean = false;
  itemDetailsVisibility:boolean = false;
  @Input() user:User | undefined;
  @Input() offers: UserOffer[] | undefined;
  @Input() items: UserItem[] | undefined;
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
