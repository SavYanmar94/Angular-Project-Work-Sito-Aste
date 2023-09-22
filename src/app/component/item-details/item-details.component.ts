import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserItem } from 'src/app/model/userItem';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {

  @Input() isVisible:boolean = false;
  @Input() item:UserItem | undefined;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  leaveItemDetails():void {
    this.isVisibleChange.emit(false);
  }
}
