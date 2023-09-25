import { HomeAddress } from '../../model/home-address';
import { outputAst } from '@angular/compiler';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShippingAddress } from 'src/app/model/shipping-address';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent 
{
  // attributi
  @Input() isVisible:boolean = false;
  serverError:any;
  duplicate:any;
  userImage: any;
  @Output() leave = new EventEmitter();
  @Output() register = new EventEmitter();
  



  // costruttore
  constructor(private userService:UserService) { }

  // abbandono procedura di registrazione
  leaveRegistration(form:NgForm):void
  {
    form.reset();
    this.serverError = undefined;
    this.duplicate = undefined;
    this.leave.emit();
  }

  // gestione del form forse serve dopo da inserire per l update

  //metodo per creare e registrare nuovo user
  formManager(form:NgForm):void
  {
    let homeAddress:HomeAddress = {
      street:form.value["street"],
      civic:form.value["civic"],
      cap:form.value["cap"],
      town:form.value["town"],
      province:form.value["province"]
    };

    let shippingAddress:ShippingAddress = {
      street:form.value["shipping_street"],
      civic:form.value["shipping_civic"],
      cap:form.value["shipping_cap"],
      town:form.value["shipping_town"],
      province:form.value["shipping_province"]
    };
    
    let user:User = {
      name:form.value["name"],
      lastname:form.value["lastname"],
      mail:form.value["mail"],
      taxcode:form.value["taxCode"],
      nickname:form.value["nickname"],
      password:form.value["password"],
      profileImage:this.userImage,
      profileType:form.value["profileType"],
      homeAddress:homeAddress,
      shippingAddress:shippingAddress
    };

    this.userService.userRegistration(user)
      .subscribe({
        next: response => {
          console.log(response);
          // da vedere
          if(response.code == 201)
          {
            form.reset();
            this.serverError = undefined;
            this.duplicate = undefined;
            this.register.emit();
          }
        },
        error: e => {
          console.log(e);
          if(e.status == 406)
            this.duplicate = "Nickname Occupato";
          else
            this.serverError = "Problemi con il server";
            
        }
      });
  }

  uploadImage(event:any):void {
    let file:File = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.userImage = reader.result as string;
      event.target.value = "";
    }
  }
}
