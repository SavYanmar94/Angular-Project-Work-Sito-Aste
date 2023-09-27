import { HomeAddress } from '../../model/home-address';
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
  @Input() profileImage:any;
  profileType:string = '';
  formValid:boolean = true;
  formSubmitted:boolean = false;
  radioButtonSelected: boolean = false;
  showRadioButtonError: boolean = false;
  allFieldsValid: boolean = true;




  // costruttore
  constructor(private userService:UserService) { }

  // abbandono procedura di registrazione
  leaveRegistration(form:NgForm):void
  {
    form.reset();
    this.serverError = undefined;
    this.duplicate = undefined;
    this.leave.emit();
    this.formValid = true;
    this.formSubmitted = false;
    this.showRadioButtonError =false;
    this.radioButtonSelected = false;
  }

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
    
    let img = this.profileImage ? this.profileImage : null;
    let user:User = {
      name:form.value["name"],
      lastname:form.value["lastname"],
      mail:form.value["mail"],
      taxcode:form.value["taxCode"],
      nickname:form.value["nickname"],
      password:form.value["password"],
      profileImage:img,
      profileType:form.value["profileType"],
      homeAddress:homeAddress,
      shippingAddress:shippingAddress
    };

    this.formSubmitted = true;

    
     // Verifica se il modulo è valido
     if (form.valid) {
      this.allFieldsValid = true;
      this.formSubmitted = true; 
    this.userService.userRegistration(user)
      .subscribe({
        next: response => {
          console.log(response);
          if(response.code == 201)
          {
            form.reset();
            this.serverError = undefined;
            this.duplicate = undefined;
            this.register.emit();
            //window.alert("Registrazione avvenuta con successo!");
          }
          this.formSubmitted = false;
        },
        error: e => {
          console.log(e);
          if(e.status == 406)
            this.duplicate = "Nickname Occupato";
          else
            this.serverError = "Problemi con il server";
            this.formSubmitted = false;
        }
      });
  }else {
    // Il modulo non è valido, imposta formValid a false
    this.formValid = false;
    this.allFieldsValid = false; // Imposta la variabile allFieldsValid su false

  }

  // Verifica se nessun radio button è selezionato e mostra il messaggio di avviso
  if (!this.radioButtonSelected) {
    this.showRadioButtonError = true;
} else {
    this.showRadioButtonError = false;
}
}

  uploadImage(event:any):void {

    let file:File = event.target.files[0];
    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      this.profileImage = reader.result as string;
      event.target.value = "";
    }
  }
  onRadioButtonChange(profileType: string): void {
  this.profileType = profileType; // Aggiorna il valore di profileType
  this.radioButtonSelected = true; // Imposta radioButtonSelected su true quando viene selezionato un radio button
}

}
