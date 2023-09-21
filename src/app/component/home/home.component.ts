import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //attributi
  userLoginPopupVisible:boolean = false;
  userLogged:boolean = false;
  userRegPopupVisible:boolean = false;
  items:Item[]|undefined;
  serverError:any;


  //costruttore
  constructor(
    private userService:UserService,
    private router:Router,
    private itemService:ItemService
    ) { } 
  
  //inizializzazione
  ngOnInit(): void {
    this.userLogged = this.userService.checkUserLoginState();
    this.itemService.getItems()
      .subscribe({
        next: response => this.items = response,
        error: e => console.log(e.message)
      })
  }

  //visualizzazione popup form login user
  activateUserLoginFormPopup():void{

    if(this.userService.checkUserLoginState())
        this.router.navigate(["user"])
    this.userLoginPopupVisible = true;
  }


  //disattivazione popup form login cliente
  deactivateUserLoginFormPopup():void{
    this.userLoginPopupVisible = false;
  }


  //gestione login user
  userLoginManager():void{
    this.userLoginPopupVisible = false;
    this.router.navigate(["user"]); 
  }

  // visualizzazione popup form registrazione cliente
  activateUserRegFormPopup():void
  {
    this.userRegPopupVisible = true;
  }
  
  // disattivazione popup form registrazione cliente
  deactivateUserRegFormPopup():void
  {
    this.userRegPopupVisible = false;
  }
   // gestione registrazione profilo cliente
   userRegistrationManager():void
   {
     this.userRegPopupVisible = false;
   }

   //invocazione API per lettura prodotti (barra di ricerca)
   getItemAPI(search:string=""):void{
    this.itemService.getItems()
      .subscribe({
        next: response => {
          this.items = response;
          if(search)
            this.items = this.items?.filter(item =>
              item.name?.toLowerCase().includes(search.toLowerCase()));
        },
        error: e => this.serverError = e.message
      })
   }

   userLogoutManager():void
   {
     this.userService.userLogout()
       .subscribe({
         next: response => {
           if(response.code == 202)
           {
             this.userService.removeUserCredential();
             this.userLogged = false;
             window.alert("Logout effettuato con successo!")
           }
         },
         error: e => console.log(e)
       });
   }

   openRegistrationPopup(){
    this.userLoginPopupVisible = false;
    this.userRegPopupVisible = true;
   }
}
