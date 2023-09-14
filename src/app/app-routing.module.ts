import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { UserDashComponent } from './component/user-dash/user-dash.component';
import { UserDashTwoComponent } from './component/user-dash-two/user-dash-two.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "customer", component:UserDashComponent},
  {path: "c_dash_two", component:UserDashTwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
