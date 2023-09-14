import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/model/item';
import { NgForm } from '@angular/forms';
import { ItemService } from 'src/app/service/item.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent {

  //attributi
  @Input() isVisible:boolean = false;
  @Input() itemImage:any;
  @Input() item:Item|undefined;
  @Output() leave = new EventEmitter();

  //costruttore
  constructor(private itemService:ItemService) { }

  //metodo per abbandonare e chiudere il popup
  leaveItemForm(form:NgForm):void{
    form.reset();
    this.itemImage = undefined;
    this.leave.emit;
  }

  //metodo per la gestione del form
  formManager(form:NgForm):void{
    if(!this.item)
      this.createItem(form);
    //AGGIUNGERE METODO SULL'UPDATE
  }

  createItem(form:NgForm):void{
    let image = this.itemImage ? this.itemImage : null;
    let item:Item = {
      //QUA SI RECUPERA LA DATA?
      name:form.value["name"],
      description:form.value["description"],
      auctionBase:form.value["auctionBase"],
      //QUA SI METTE LO STATUS?
      //IL VENDITORE?
      image:image
    };
    this.itemService.itemRegistration(item)
      .subscribe({
        next: response => {
          if(response.code == 201){ //CHECK SE IL CODICE È GIUSTO IN BACKEND
            form.reset();
            this.itemImage = undefined;
            this.leave.emit();
          }
        },
        error: e => console.log(e.message)
      })
  }
}
