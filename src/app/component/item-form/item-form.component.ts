import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/model/item';
import { NgForm } from '@angular/forms';
import { ItemService } from 'src/app/service/item.service';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent {

  //attributi
  @Input() isVisible:boolean = false;
  itemImage:any;  //ho tolto @input perché l'immagine non può essere cambiata
  @Output() isVisibleChange = new EventEmitter<boolean>();
  

  //costruttore
  constructor(private itemService:ItemService, private userService:UserService) { }

  //metodo per abbandonare e chiudere il popup
  leaveItemForm(form:NgForm):void{
    form.reset();
    this.itemImage = undefined;
    this.isVisibleChange.emit(false);
  }

  //metodo per la gestione del form
  formManager(form:NgForm):void{
    this.createItem(form);
  }

  createItem(form:NgForm):void{

    // CREO DATA 
    let date = new Date();
    // CREO USER
    let user:User|undefined;
    this.userService.getUserData().subscribe({next: response => user = response, error: e => console.log(e)})
    
    let image = this.itemImage ? this.itemImage : null;
    let item:Item = {
      placementDate:date,
      saleDate:undefined,
      name:form.value["name"],
      description:form.value["description"],
      auctionBase:form.value["auctionBase"],
      image:image,
      state:"n", //stato n per non venduto, v per venduto
      seller:user
      
    };
    console.log(item);
    console.log("*********");
    this.itemService.itemRegistration(item)
      .subscribe({
        next: response => {
          if(response.code == 201){ //CHECK SE IL CODICE È GIUSTO IN BACKEND
            form.reset();
            this.itemImage = undefined;
            this.isVisibleChange.emit(); //da controllare 
          }
        },
        error: e => console.log(e.message)
      })
  }

  uploadImage(event:any):void {
    let file:File = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.itemImage = reader.result as string;
      event.target.value = "";
    }
  }

}
