
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { ServiceResponse } from '../model/service-response';

//API endpoints
const USER_REG_API:string = "http://localhost:8080/auctions/user/reg";
const USER_LOGIN_API:string = "http://localhost:8080/auctions/user/login";
const USER_LOGOUT_API:string = "http://localhost:8080/auctions/user/logout";


//chiavi local storage
const USER_STORAGE_ID:string = "uid";
const USER_STORAGE_TKN:string = "utkn";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  //INVOCAZIONE ENDPOINT
  
  //registrazione user
  public userRegistration(user:User):Observable<ServiceResponse>{
    return this.http.post<ServiceResponse>(USER_REG_API, user);
  }

  //login user
  public userLogin(user:User):Observable<ServiceResponse>{
    return this.http.put<ServiceResponse>(USER_LOGIN_API, user);
  }

  //logout user
  public userLogout():Observable<ServiceResponse>{
    return this.http.get<ServiceResponse>(`${USER_LOGOUT_API}/${this.getUserToken()}`);
  }


  //METODI DI SERVIZIO INTERNI

  //salvataggio dati user nel Local Storage
  public saveUserData(id:any, token:string){
    localStorage.setItem(USER_STORAGE_ID, id);
    localStorage.setItem(USER_STORAGE_TKN, token);
  }

  //ottenimento token user
  public getUserToken():string{
    if(localStorage.getItem(USER_STORAGE_TKN))
      return localStorage.getItem(USER_STORAGE_TKN) as string;
    return "_";
  }

  //controllo stato di login del cliente
  public checkUserLoginState():boolean{
    return localStorage.getItem(USER_STORAGE_TKN) != null;
  }

  //rimozione token dal Local storage dopo logout
  public removeUserToken():void{
    if(localStorage.getItem(USER_STORAGE_TKN))
      localStorage.removeItem(USER_STORAGE_TKN);
  }
}
