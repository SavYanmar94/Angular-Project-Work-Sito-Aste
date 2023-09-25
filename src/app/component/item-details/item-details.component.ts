import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/model/item';
import { UserItem } from 'src/app/model/userItem';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {

  @Input() isVisible:boolean = false;
  @Input() userItem:UserItem | undefined;
  @Input() item:Item | undefined;
  @Output() userItemChange = new EventEmitter();
  @Output() itemChange = new EventEmitter();
  @Output() isVisibleChange = new EventEmitter<boolean>();

  leaveItemDetails():void {
    this.userItem = undefined;
    this.item = undefined;
    this.userItemChange.emit();
    this.itemChange.emit();
    this.isVisibleChange.emit(false);
  }

}
