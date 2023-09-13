import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CustomerDashComponent } from './component/customer-dash/customer-dash.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "customer", component:CustomerDashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
