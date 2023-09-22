import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { User } from 'src/app/model/user';
import { UserItem } from 'src/app/model/userItem';
import { UserOffer } from 'src/app/model/userOffer';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})

export class UserDashComponent implements OnInit {

  user: User | undefined;
  offers: UserOffer[] | undefined;
  items: UserItem[] | undefined;

  serverError: any;
  isVisible: boolean = false;
  lander: String = "main";
  child_lander: String = "main";
  itemFormVisibility: boolean = false;
  userType: String = "";
  //attributi per update
  userUpdatePopupVisible: boolean= false;
  userToUpdateImage: any;
  

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  // inizializzazione : il metodo richiama callReadAPI ogni volta che serve aggiornare i dati
  ngOnInit(): void {
    this.callReadAPI();   

  }

  //callReadAPI per update 
  callReadAPI():void{
    this.userService.getUserData()
//AAA PUSH DI VALERIA NON SO SE FUNZIONA COSI IO IN CASO NON HO CANCELLATO
     .subscribe({next: response => {this.user = response; this.offers = response.offers; this.items = response.items;
     }, error: e => console.log(e) });


    // .subscribe({next: response => {this.user = response; this.items = response.items; this.userOffers = response.offers;

    // }, error: e => console.log(e) });

  }


  btnClick(): void {
    this.router.navigate(["c_dash_two"]);
  }

  //metodi per update
 activateAndUpdatePopup(): void {
    if(this.user && this.user.profileImage)
      this.userToUpdateImage=this.user.profileImage;
    this.userUpdatePopupVisible=true;
    alert("ciaone");
  }

  deactivateUpdatePopup():void{
    this.userUpdatePopupVisible=false;
    this.userToUpdateImage=undefined;
  }

  info_btnClick(): void {
    this.isVisible = !this.isVisible;
  }

  addNewItem(): void {
    this.itemFormVisibility = true;

  }

  yourOffers(): void {
    this.lander = "no";
    this.child_lander = "offer";
  }

  yourAuctionItems(): void {
    this.lander = "no";
    this.child_lander = "auction";
  }

  yourSoldItems(): void {
    this.lander = "no";
    this.child_lander = "soldItems";
  }

  return_to_profile(): void {
    this.lander = "main";
    this.child_lander = "main";
  }

  leaveItemForm(): void {
    this.itemFormVisibility = false;
  }

  userLogoutManager(): void {
    this.userService.userLogout()
      .subscribe({
        next: response => {
          if (response.code == 202) {
            this.userService.removeUserCredential();
            this.router.navigate([""]);
          }
        },
        error: e => console.log(e)
      });
  }

}
