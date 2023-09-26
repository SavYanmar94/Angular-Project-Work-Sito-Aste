import { OfferService } from './../../service/offer.service';
import { UserService } from 'src/app/service/user.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/model/item';
import { Offer } from 'src/app/model/offer';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-offer-popup',
  templateUrl: './offer-popup.component.html',
  styleUrls: ['./offer-popup.component.css']
})
export class OfferPopupComponent {

  constructor(private userService:UserService,
    private OfferService:OfferService) {
  }

  user: User | undefined;
  serverError:any;
  duplicate:any;
  inputValue:number = 0;
  inputError:boolean = false;
  @Input() minOffer:number = 0;
  @Input() item: Item | undefined;
  @Input() isVisible:boolean = false;
  @Output() isVisibleChange = new EventEmitter();
  @Output() registered = new EventEmitter();

  leaveOfferPopup(form:NgForm):void {
    form.reset();
    this.inputError = false;
    this.isVisibleChange.emit();
  }

  formManager(form:NgForm):void {

    let date = new Date();

    let offer:Offer = {
      timing:date,
      amount:form.value["offerAmount"],
      state: undefined,
      offerer: {id:this.userService.getUserId()},
      item:this.item
    }

    this.OfferService.offerRegistration(offer).subscribe({
      next: response => {
        if(response.code == 201)
        {
          form.reset();
          this.serverError = undefined;
          this.duplicate = undefined;
          this.registered.emit();
        }
      },
      error: e => {
        if(e.status == 406)
          this.duplicate = "";
        else
          this.serverError = "Problemi con il server";    
      }
    });;
  }

  checkOfferValue():void {
    if(this.item?.majorOffer !== undefined && this.item?.auctionBase !== undefined) {

      if(this.inputValue == this.item?.majorOffer || this.inputValue <= this.item.auctionBase) {
        this.inputError = true;
      }
      else {
        this.inputError = false;
      }
    }
  }

}
