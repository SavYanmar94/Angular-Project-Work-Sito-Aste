import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HomeAddress } from 'src/app/model/home-address';
import { ShippingAddress } from 'src/app/model/shipping-address';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent {

  @Input() update_lander:String = "main";
  serverError:any;
  duplicate:any;
  @Output() leave = new EventEmitter();
  @Output() update = new EventEmitter();


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
        password:form.value["password"],
        profileImage:form.value["profileImage"],
        authToken:form.value["authToken"],
        homeAddress:homeAddress,
        shippingAddress:shippingAddress
      };
      this.userService.userRegistration(user)
        .subscribe({
          next: response => {
            // da vedere
            if(response.code == 201)
            {
              form.reset();
              this.serverError = undefined;
              this.duplicate = undefined;
              this.update.emit();
            }
          },
          error: e => {
            if(e.status == 406)
              this.duplicate = "Nickname Occupato"; //TODO
            else
              this.serverError = "Problemi con il server";
          }
        });
    }
    

}
