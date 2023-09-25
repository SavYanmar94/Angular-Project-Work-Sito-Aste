import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/model/item';
import { Offer } from 'src/app/model/offer';
import { OfferUser } from 'src/app/model/offerUser';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-offer-popup',
  templateUrl: './offer-popup.component.html',
  styleUrls: ['./offer-popup.component.css']
})
export class OfferPopupComponent {

  user: User | undefined;
  @Input() item: Item | undefined;
  @Input() isVisible:boolean = false;
  @Output() isVisibleChange = new EventEmitter();

  leaveOfferPopup():void {
    this.isVisibleChange.emit();
  }

  formManager(form:NgForm):void {



    let date = new Date();

    let offer:Offer = {
      timing:date,
      amount:form.value["offerAmount"],
      state: undefined,
      
      items:this.item
    }
  }

  /*	    private LocalDate timing;
  private double amount;
  private String state;
  private OfferUserDto user;
  private ItemDto items; */
}
