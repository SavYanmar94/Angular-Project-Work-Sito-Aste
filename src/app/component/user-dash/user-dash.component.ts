import { Component } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent {

  constructor(
    private router:Router,
    
  ) {}

  isVisible:boolean = false;
  lander:String = "main";
  child_lander:String = "main";

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

  }

  return_to_profile():void {
    this.lander = "main";
    this.child_lander = "main";
  }

}
