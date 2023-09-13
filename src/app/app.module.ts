import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';

import { CustomerDashComponent } from './component/customer-dash/customer-dash.component';
import { CustomerLoginComponent } from './component/customer-login/customer-login.component';
import { CustomerRegComponent } from './component/customer-reg/customer-reg.component';
import { HomeCardComponent } from './component/home-card/home-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CustomerDashComponent,
    CustomerLoginComponent,
    CustomerRegComponent,
    HomeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
