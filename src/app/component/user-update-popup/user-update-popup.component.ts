import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { NgForm } from '@angular/forms';
import { HomeAddress } from 'src/app/model/home-address';
import { ShippingAddress } from 'src/app/model/shipping-address';

@Component({
  selector: 'app-user-update-popup',
  templateUrl: './user-update-popup.component.html',
  styleUrls: ['./user-update-popup.component.css']
})
export class UserUpdatePopupComponent {

  //attributi
  @Input() isVisible:boolean=false;
  @Input() user:User|undefined;
  @Output() leave=new EventEmitter();
  @Input() profileImage:any;


  constructor(private userService:UserService ){}

  //metodi

  formManager(form:NgForm):void{
    this.updateUser(form);
  }

  updateUser(form:NgForm):void{
    if(this.user && this.user.homeAddress && this.user.shippingAddress) {
      
      let image=this.profileImage ? this.profileImage : null;
        
        this.user.homeAddress.street=form.value["street"];
        this.user.homeAddress.civic=form.value["civic"];
        this.user.homeAddress.cap=form.value["cap"];
        this.user.homeAddress.town=form.value["town"];
        this.user.homeAddress.province=form.value["province"];
      
        this.user.shippingAddress.street=form.value["shipping_street"];
        this.user.shippingAddress.civic=form.value["shipping_civic"];
        this.user.shippingAddress.cap=form.value["shipping_cap"];
        this.user.shippingAddress.town=form.value["shipping_town"];
        this.user.shippingAddress.province=form.value["shipping_province"];
     
        this.user.name=form.value["name"];
        this.user.lastname=form.value["lastname"];
        this.user.mail=form.value["mail"];
        this.user.taxcode=form.value["taxCode"];
        this.user.password=form.value["password"];
        this.user.profileImage=image;
      
      this.userService.userUpdate(this.user)
        .subscribe({
          next:response => {
            if(response.code==202){
              form.reset();
              this.profileImage=undefined;
              this.leave.emit();
            }
          },
          error:e => console.log(e.message)

        })
    }
  }

  leaveUserUpdatePopup(form:NgForm){
    form.reset();
    this.profileImage=undefined;
    this.leave.emit();
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


}
