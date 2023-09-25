import { Component, Input } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent {

  //attributi
  @Input() item:Item|undefined;

}
