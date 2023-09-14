import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerDashComponent } from './component/customer-dash/customer-dash.component';
import { CustomerLoginComponent } from './component/customer-login/customer-login.component';
import { CustomerRegComponent } from './component/customer-reg/customer-reg.component';
import { HomeCardComponent } from './component/home-card/home-card.component';
import { CustomerDashTwoComponent } from './customer-dash-two/customer-dash-two.component';
import { ItemFormComponent } from './component/item-form/item-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CustomerDashComponent,
    CustomerLoginComponent,
    CustomerRegComponent,
    HomeCardComponent,
    ItemFormComponent,
    CustomerDashTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
