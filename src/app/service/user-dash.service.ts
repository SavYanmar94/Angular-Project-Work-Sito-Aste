import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDashService {

  constructor() { }

  private lander:String = "";

  // getters e setters generati automaticamente

	public getLander(): String  {
		return this.lander;
	}

	public setLander(value: String ) {
		this.lander = value;
	}

}
