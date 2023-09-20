import { Injectable } from '@angular/core';
import { Offer } from '../model/offer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceResponse } from '../model/service-response';
import { UserService } from './user.service';

//API endpoints
const OFFERS_GET_API = "http://localhost:8080/auctions/offer/get";
const OFFERS_POST_API = "http://localhost:8080/auctions/offer/reg";
const OFFERS_PUT_API = "http://localhost:8080/auctions/offer/update";
const OFFERS_DELETE_API = "http://localhost:8080/auctions/offer/delete";

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(
    private http:HttpClient,
    private userService:UserService) { }


    //metodo per ottenere l'elenco delle offerte (dovrebbe essere degli items)
    public getOffers():Observable<Offer[]>{
      return this.http.get<Offer[]>(OFFERS_GET_API);
    }

    //metodo per registrare un nuovo offer
    public offerRegistration(offer:Offer):Observable<ServiceResponse>{
      return this.http.post<ServiceResponse>(`${OFFERS_POST_API}/${this.userService.getUserToken()}`, offer);
    }

    //metodo per modificare i dati di un offer
    public offerDataUpdate(offer:Offer):Observable<ServiceResponse>{
      return this.http.put<ServiceResponse>(`${OFFERS_PUT_API}/${this.userService.getUserToken()}`, offer);
    }

    //metodo per cancellare un offer
    public deleteOffer(offerId:number):Observable<ServiceResponse>{
      return this.http.delete<ServiceResponse>(`${OFFERS_DELETE_API}/${offerId}/${this.userService.getUserToken()}`);
    }


}
