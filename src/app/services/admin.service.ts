import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { global } from '../services/global';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public url: string;
  public identity;
  public token;

  constructor(
    public _http: HttpClient
    ) {
      this.url = global.url;
     }



     signup(admin, gettoken = null):Observable<any>{

        if(gettoken != null){

        admin.gettoken = 'true';

        }

        let json = JSON.stringify(admin);
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.url+'login', params, {headers:headers});
     }

     getIdentity(){ //metodo para obtener los datos del usuario del localstorage
        let identity = JSON.parse(localStorage.getItem('identity')); //obtenemos el identity del localstorage

        if(identity && identity != "undefined"){
            this.identity = identity;
        }else{
            this.identity = null;
        }
        return this.identity;
      } 

    getToken(){ //metodo para obtener el token del usuario logeado
        let token = localStorage.getItem('token');

        if(token && token != "undefined"){
            this.token = token;
        }else{
            this.token = null;
        }

        return this.token;
    }

}
