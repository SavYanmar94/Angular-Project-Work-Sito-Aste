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
  @Input() item: Item | undefined;
  @Input() isVisible:boolean = false;
  @Output() isVisibleChange = new EventEmitter();
  @Output() registered = new EventEmitter();

  leaveOfferPopup():void {
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
        console.log(response);
        if(response.code == 201)
        {
          form.reset();
          this.serverError = undefined;
          this.duplicate = undefined;
          this.registered.emit();
        }
      },
      error: e => {
        console.log(e);
        console.log("-------------------");
        console.log(offer);
        console.log(this.user?.name);
        if(e.status == 406)
          this.duplicate = "";
        else
          this.serverError = "Problemi con il server";    
      }
    });;
  }

}
