import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { UserDashComponent } from './component/user-dash/user-dash.component';
import { UserDashTwoComponent } from './component/user-dash-two/user-dash-two.component';
import { USER_GUARD } from './auth/user-auth';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "user", component:UserDashComponent, canActivate:[USER_GUARD]},
  {path: "user/dash", component:UserDashTwoComponent, canActivate:[USER_GUARD]},
  {path: "**", redirectTo: ""}, //se l'url non esiste rimanda alla home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
