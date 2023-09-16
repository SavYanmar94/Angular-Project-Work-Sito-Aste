import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-dash-two',
  templateUrl: './user-dash-two.component.html',
  styleUrls: ['./user-dash-two.component.css']
})
export class UserDashTwoComponent {

  itemFormVisibility:boolean = false;
  @Input() child_lander:String = "main";
  @Output() lander_main = new EventEmitter();

  ritorna_al_profilo():void {
    this.lander_main.emit();
    this.child_lander = "main";
  }

  addNewItem():void {
    this.itemFormVisibility = true;
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
