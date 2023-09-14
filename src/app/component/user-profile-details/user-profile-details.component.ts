import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile-details',
  templateUrl: './user-profile-details.component.html',
  styleUrls: ['./user-profile-details.component.css']
})
export class UserProfileDetailsComponent {

  @Input() isVisible:boolean = false;
}
