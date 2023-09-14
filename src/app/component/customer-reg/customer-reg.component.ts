import { HomeAddress } from './../../model/home-address';
import { outputAst } from '@angular/compiler';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShippingAddress } from 'src/app/model/shipping-address';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-customer-reg',
  templateUrl: './customer-reg.component.html',
  styleUrls: ['./customer-reg.component.css']
})
export class CustomerRegComponent 
{
  // attributi
  @Input() isVisible:boolean = false;
  serverError:any;
  duplicate:any;
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

  // gestione del form
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
      street:form.value["street"],
      civic:form.value["civic"],
      cap:form.value["cap"],
      town:form.value["town"],
      province:form.value["province"]
    };
    let user:User = {
      entryDate:form.value["entryDate"],
      name:form.value["name"],
      lastname:form.value["lastname"],
      mail:form.value["mail"],
      taxCode:form.value["taxCode"],
      nickname:form.value["nikname"],
      password:form.value["password"],
      profileImage:form.value["profileImage"],
      profileType:form.value["profileType"],
      authToken:form.value["authToken"],
      homeAddress:homeAddress,
      shippingAddress:shippingAddress
    };
    this.userService.userRegistration(user)
      .subscribe({
        next: response => {
          if(response.code == 201)
          {
            form.reset();
            this.serverError = undefined;
            this.duplicate = undefined;
            this.register.emit();
          }
        },
        error: e => {
          if(e.status == 406)
            this.duplicate = "Nickname Occupato";
          else
            this.serverError = "Problemi con il server";
        }
      });
  }
}
