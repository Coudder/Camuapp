import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from '../services/global';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public url: string;
  public citoURL:string;
  public citoarchivoURL:string;
  public vphURL:string;
  public vpharchivoURL:string; 
  public mastoURL:string;
  public mastoarchivoURL:string;
  public detURL:string;
  public detarchivoURL:string;
  public colposUrl:string;


  public numFilas;

   
  public celda;
  public fila;
  public datos =[];
 
  public campos=[];



  constructor(private _http:HttpClient) {

    this.url = global.url;
    this.citoURL = global.citoURL;
    this.citoarchivoURL = global.citoarchivoURL;

    this.vphURL = global.vphURL;
    this.vpharchivoURL = global.vpharchivoURL

    this.mastoURL = global.mastoURL;
    this.mastoarchivoURL = global.mastoarchivoURL;

    this.detURL = global.detURL;
    this.detarchivoURL = global.detarchivoURL;
    this.colposUrl = global.apicolposURL;
   }


    //obtenemos las unidades
    getUnidades():Observable<any> {
      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.url + 'unidades', {headers:headers});
    }
  
    //obtenemos unidad por id
    getUnidadDetail(id):Observable<any>{
      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.url + 'unidades/' + id, {headers:headers});
    }


    getCitologias():Observable<any>{     
     let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
     return this._http.get(this.url + 'citologias', {headers:headers});
     
    }
    //citologias por unidad de salud
    getCitoByUnidad(id):Observable<any>{
      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.url + 'citologias/unidades/' + id, {headers:headers});
    }

    //data from backend vphs
    getVphBack():Observable<any>{
      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.url + 'vphs', {headers});
    }

    getVphByUnidad(id):Observable<any>{
      let headers  = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.url + 'vphs/unidades/' + id, {headers});
    }
    
    getdetBack():Observable<any> {
      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.url + 'detecciones', {headers});
    }
    getdetByUnidad(id):Observable<any>{
      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.url + 'detecciones/unidades/' + id, {headers});
    }
    getmastosBack():Observable<any> {
      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.url + 'mastografias', {headers});
    }

    getmastosByUnidad(id):Observable<any> {
      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.url + 'mastografias/unidades/' + id, {headers});
    }

   
//informacion del backend laravel


  //paralelo citologias
   getcitoData():Observable<any>
   {
       return this._http.get(this.citoURL);
   }

   //paralelo archivo citologias
   getcitoArchivo():Observable<any>{
    return this._http.get(this.citoarchivoURL);
   }

   //paralelos vphs from gooogl sheets

   getVphData():Observable<any>{
    return this._http.get(this.vphURL);
   }
   getvphArchivo():Observable<any> {
    return this._http.get(this.vpharchivoURL);
   }

   //paralelos detecciones de mama from google sheets
   getdetmamaData():Observable<any>{
    return this._http.get(this.detURL);
   }

   getdetmamaArchivo():Observable<any> {
    return this._http.get(this.detarchivoURL);
   }

   getmastosData():Observable<any>{
    return this._http.get(this.mastoURL);
   }

   getmastosArchivo():Observable<any>{
    return this._http.get(this.mastoarchivoURL);
   }

   getcolposData():Observable<any>{
    return this._http.get(this.colposUrl);
  }


}
