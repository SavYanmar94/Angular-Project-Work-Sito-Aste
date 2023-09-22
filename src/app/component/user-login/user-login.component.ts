import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({

    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  //attributi
  @Input() isVisible:boolean = false;
  serverError:any;
  @Output() leave = new EventEmitter();
  @Output() login = new EventEmitter();
  @Output() openRegistration = new EventEmitter();

  //costruttore
  constructor(private userService:UserService){  }

  //abbandono procedura di login 
  leaveLogin(form:NgForm):void{
    form.reset();
    this.serverError = undefined;
    this.leave.emit();
  }

  //gestione form di login
  formManager(form:NgForm):void
  {
    let user:User = {
      nickname:form.value["nickname"],
      password:form.value["password"]
    };
    console.log(user.nickname);
    console.log(user.password);
    this.userService.userLogin(user)
       .subscribe({
         next: response => {
           this.userService.saveUserData(response.code, response.message);
           this.serverError = undefined;
           this.login.emit();

         },
         error: e => {
           if(e.status == 401) //CONTROLLARE I CODICI CHE ARRIVANO DA BACKEND
{           console.log(e);
             this.serverError = "Accesso Negato";}
           else
             this.serverError = e.message;
         }
       })
  }

  //Metodo per aprire la registrazione
  openRegistrationPopup(){
    this.openRegistration.emit();
  }
}

