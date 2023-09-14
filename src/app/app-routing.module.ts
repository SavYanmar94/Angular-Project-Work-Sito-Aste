import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CustomerDashComponent } from './component/customer-dash/customer-dash.component';
import { CustomerDashTwoComponent } from './component/customer-dash-two/customer-dash-two.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "customer", component:CustomerDashComponent},
  {path: "c_dash_two", component:CustomerDashTwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
