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
  @Input() loggedUserID:number=0;
  @Output() detail = new EventEmitter<Item>();
  @Output() notLoggedInOffer = new EventEmitter();
  @Output() goToItems = new EventEmitter();
  @Output() refresh = new EventEmitter();

  itemDetailsVisibility:boolean = false;
  offerPopupVisibility:boolean = false;
  itemDetails:Item | undefined;
  itemMinOffer:number = 0;

  details(item:Item):void {
    this.itemDetails = item;
    this.itemDetailsVisibility = true;
  }

  notLoggedOffer():void {
    window.alert("Effettua il Login per fare la tua offerta")
    this.notLoggedInOffer.emit();
  }

  manageItems():void{
    this.goToItems.emit();
  }

  activateOfferPopup():void {
    this.offerPopupVisibility = true;
    if(this.item?.majorOffer !== undefined && this.item.auctionBase !== undefined) {
      if(this.item?.majorOffer > this.item?.auctionBase) {
        this.itemMinOffer = this.item.majorOffer;
      }
      else {
        this.itemMinOffer = this.item.auctionBase;
      }
    }  
  }

  deactivateOfferPopup():void {
    this.offerPopupVisibility = false;
    this.refresh.emit();
  }

}
