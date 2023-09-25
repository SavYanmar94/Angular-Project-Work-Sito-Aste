import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-offer-popup',
  templateUrl: './offer-popup.component.html',
  styleUrls: ['./offer-popup.component.css']
})
export class OfferPopupComponent {

  @Input() isVisible:boolean = false;
  @Output() isVisibleChange = new EventEmitter();

  leaveOfferPopup():void {
    this.isVisibleChange.emit();
  }

  formManager(form:NgForm):void {
  }

}
