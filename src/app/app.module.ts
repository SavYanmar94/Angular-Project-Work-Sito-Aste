import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDashComponent } from './component/user-dash/user-dash.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { UserRegComponent } from './component/user-reg/user-reg.component';
import { HomeCardComponent } from './component/home-card/home-card.component';
import { UserDashTwoComponent } from './component/user-dash-two/user-dash-two.component';
import { ItemFormComponent } from './component/item-form/item-form.component';
import { UserProfileDetailsComponent } from './component/user-profile-details/user-profile-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    UserDashComponent,
    UserLoginComponent,
    UserRegComponent,
    HomeCardComponent,
    ItemFormComponent,
    UserDashTwoComponent,
    UserProfileDetailsComponent,
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
