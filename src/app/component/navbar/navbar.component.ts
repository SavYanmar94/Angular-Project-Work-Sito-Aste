import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router:Router) {}

  //attributi
  @Input() userLogged:boolean = false;
  @Output() userLoginFormPopup = new EventEmitter();
  @Output() userRegFormPopup = new EventEmitter();
  @Output() search = new EventEmitter<string>();
  @Output() userLogout = new EventEmitter();

  //attivazione popup form login user
  activateUserLoginFormPopup():void{
    this.userLoginFormPopup.emit();
  }

  activateUserRegFormPopup():void{
    this.userRegFormPopup.emit();
  }

  //emissione evento ricerca
  searcherEmitter(form:NgForm):void{
    this.search.emit(form.value["search"]);
    form.reset();
  }

  goUser():void{
    this.router.navigate(["user"]);
  }

  userLogoutEvent():void{
    this.userLogout.emit();
  }

}
