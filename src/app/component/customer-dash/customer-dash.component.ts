import { Component } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-customer-dash',
  templateUrl: './customer-dash.component.html',
  styleUrls: ['./customer-dash.component.css']
})
export class CustomerDashComponent {

  constructor(
    private router:Router
  ) {}

  btnClick():void {
    this.router.navigate(["c_dash_two"]);
  }
}
