import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //attributi
  userLoginPopupVisible:boolean = false;
  userLogged:boolean = false;

  //costruttore
  constructor(
    private userService:UserService,
    private router:Router) { } 
  
  //inizializzazione
  ngOnInit(): void {
    this.userLogged = this.userService.checkUserLoginState();
  }

  //visualizzazione popup form login user
  activateUserLoginFormPopup():void{
    if(this.userService.checkUserLoginState())
      this.router.navigate(["customer"]) //DA MODIFICARE PER AGGIUNGERE LA DASH DEI VENDITORI
    else
      this.userLoginPopupVisible = true;
  }


  //disattivazione popup form login cliente
  deactivateUserLoginFormPopup():void{
    this.userLoginPopupVisible = false;
  }


  //gestione login cliente
  userLoginManager():void{
    this.userLoginPopupVisible = false;
    this.router.navigate(["customer"]); //DA MODIFICARE PER AGGIUNGERE LA DASH DEI VENDITORI
  }
  
}
