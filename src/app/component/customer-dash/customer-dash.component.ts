import { Component } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-customer-dash',
  templateUrl: './customer-dash.component.html',
  styleUrls: ['./customer-dash.component.css']
})
export class CustomerDashComponent {

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
