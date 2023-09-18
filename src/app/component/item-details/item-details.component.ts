import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {

  @Input() isVisible:boolean = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  leaveItemDetails():void {
    this.isVisibleChange.emit(false);
  }
}
