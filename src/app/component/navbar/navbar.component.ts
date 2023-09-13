import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  //attributi
  @Input() position:any;
  @Output() userLoginFormPopup = new EventEmitter();

  //attivazione popup form login user
  activateUserLoginFormPopup():void{
    this.userLoginFormPopup.emit();
  }

}
