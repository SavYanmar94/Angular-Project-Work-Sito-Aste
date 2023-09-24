import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent {

  //attributi
  @Input() userLogged:boolean = false;
  @Input() item:Item | undefined;
  @Output() detail = new EventEmitter<Item>();
  @Output() notLoggedInOffer = new EventEmitter();
  itemDetailsVisibility:boolean = false;
  offerPopupVisibility:boolean = false;
  itemDetails:Item | undefined;

  details(item:Item):void {
    this.itemDetails = item;
    this.itemDetailsVisibility = true;
  }

  notLoggedOffer():void {
    this.notLoggedInOffer.emit();
  }

  activateOfferPopup():void {
    this.offerPopupVisibility = true;
  }

}
