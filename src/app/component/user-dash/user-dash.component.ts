import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { User } from 'src/app/model/user';
import { UserItem } from 'src/app/model/userItem';
import { UserOffer } from 'src/app/model/userOffer';
import { UserDashService } from 'src/app/service/user-dash.service';
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

  profileImg?:string = "";
  serverError: any;
  isVisible: boolean = false;
  lander: string = "main";
  child_lander: string = "main";
  itemFormVisibility: boolean = false;
  userType?: string = "";
  //attributi per update
  userUpdatePopupVisible: boolean= false;
  userToUpdateImage: any;
  

  constructor(
    private router: Router,
    private userService: UserService,
    private userDashService: UserDashService
  ) { }

  // inizializzazione : il metodo richiama callReadAPI ogni volta che serve aggiornare i dati
  ngOnInit(): void {
    this.callReadAPI();
  }

  //callReadAPI per update 
  callReadAPI():void{
    this.userService.getUserData()
     .subscribe({next: response => {this.user = response; this.offers = response.offers; this.items = response.items; this.userType = response.profileType; this.profileImg = response.profileImage}, error: e => console.log(e) });
  }


  btnClick(): void {
    this.router.navigate(["c_dash_two"]);
  }

  //metodi per update
 activateAndUpdatePopup(): void {
    if(this.user && this.user.profileImage)
      this.userToUpdateImage=this.user.profileImage;
    this.userUpdatePopupVisible=true;
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
    this.userDashService.setLander("sentOffers");
    this.router.navigate(['user/dash']);
  }

  yourAuctionItems(): void {
    this.userDashService.setLander("auction");
    this.router.navigate(['user/dash']);
  }

  yourSoldItems(): void {
    this.userDashService.setLander("soldItems");
    this.router.navigate(['user/dash']);
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
            //window.alert("Logout effettuato con successo! A presto!")
          }
        },
        error: e => console.log(e)
      });
  }

}
