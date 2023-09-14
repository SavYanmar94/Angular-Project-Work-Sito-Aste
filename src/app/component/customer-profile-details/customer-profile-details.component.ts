import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-profile-details',
  templateUrl: './customer-profile-details.component.html',
  styleUrls: ['./customer-profile-details.component.css']
})
export class CustomerProfileDetailsComponent {

  @Input() isVisible:boolean = false;
}
