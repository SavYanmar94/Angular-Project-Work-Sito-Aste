import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from "@angular/router"
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent {

  constructor(
    private router:Router,
    private userService:UserService
  ) {}

  isVisible:boolean = false;
  lander:String = "main";
  child_lander:String = "main";
  itemFormVisibility:boolean = false;

  btnClick():void {
    this.router.navigate(["c_dash_two"]);
  }

  user_profile_update():void {
    window.scroll(0, 0);
    this.lander = "no";
    this.child_lander = "update";
  }

  info_btnClick():void {
    this.isVisible = !this.isVisible;
  }

  addNewItem():void {
    this.itemFormVisibility = true;
  }

  yourOffers():void {
    this.lander = "no";
    this.child_lander = "offer";
  }

  yourAuctionItems():void {
    this.lander = "no";
    this.child_lander = "auction";
  }

  yourSoldItems():void {
    this.lander = "no";
    this.child_lander = "soldItems";
  }

  return_to_profile():void {
    this.lander = "main";
    this.child_lander = "main";
  }

  leaveItemForm():void {
    this.itemFormVisibility = false;
  }

  userLogoutManager():void
  {
    this.userService.userLogout()
      .subscribe({
        next: response => {
          if(response.code == 202)
          {
            this.userService.removeUserCredential();
            this.router.navigate([""]);
          }
        },
        error: e => console.log(e)
      });
  }

}
