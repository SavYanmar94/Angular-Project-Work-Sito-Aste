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

  btnClick():void {
    this.router.navigate(["c_dash_two"]);
  }

  info_btnClick():void {
    this.isVisible = !this.isVisible;
  }
}
