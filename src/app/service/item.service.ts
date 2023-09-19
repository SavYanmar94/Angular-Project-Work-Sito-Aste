import { Injectable } from '@angular/core';
import { Item } from '../model/item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceResponse } from '../model/service-response';
import { UserService } from './user.service';

//API endpoints
const ITEMS_GET_API = "http://localhost:8080/auctions/item/get";
const ITEMS_POST_API = "http://localhost:8080/auctions/item/reg";
const ITEMS_DELETE_API = "http://localhost:8080/auctions/item/delete";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private http:HttpClient,
    private userService:UserService) { }


    //metodo per ottenere l'elenco dei prodotti
    public getItems():Observable<Item[]>{
      return this.http.get<Item[]>(ITEMS_GET_API);
    }

    //metodo per registrare un nuovo item
    public itemRegistration(item:Item):Observable<ServiceResponse>{
      return this.http.post<ServiceResponse>(`${ITEMS_POST_API}/${this.userService.getUserToken()}`, item);
    }

    //metodo per cancellare un item
    public deleteItem(itemId:number):Observable<ServiceResponse>{
      return this.http.delete<ServiceResponse>(`${ITEMS_DELETE_API}/${itemId}/${this.userService.getUserToken()}`);
    }


}
