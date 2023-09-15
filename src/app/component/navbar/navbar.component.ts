import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  //attributi
  @Input() position:any;
  @Output() userLoginFormPopup = new EventEmitter();
  @Output() userRegFormPopup = new EventEmitter();
  @Output() search = new EventEmitter<string>();

  //attivazione popup form login user
  activateUserLoginFormPopup():void{
    this.userLoginFormPopup.emit();
  }

  activateUserRegFormPopup():void{
    this.userRegFormPopup.emit();
  }

  //emissione evento ricerca
  searcherEmitter(form:NgForm):void{
    this.search.emit(form.value["search"]);
    form.reset();
  }

}
