import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cito-pac-archivo-detail',
  templateUrl: './cito-pac-archivo-detail.page.html',
  styleUrls: ['./cito-pac-archivo-detail.page.scss'],
  providers: [DataService,AdminService]
})
export class CitoPacArchivoDetailPage implements OnInit {

  public title:string;
  public identity;
  public token;
  public id:any;
  public paciente:any;

  public numCito:any;
  public numFilas:any;

  
  public celda:any;
  public fila:any;
  public datos:any =[];

  

  public campos:any=[];
  public loading : boolean;

  constructor(
    private _adminService:AdminService,
    private _dataService:DataService,
    private _route:ActivatedRoute,
    private _router:Router

  ) { 

    this.title ="INFORMACION DEL PACIENTE"
    this.token = this._adminService.getToken();
    this.identity = this._adminService.getIdentity();
    this.loading = true;
    

  }

  ngOnInit() {
    this.getarcpacDetail();
  }


  getarcpacDetail(){

    this._route.params.subscribe(params=> {
      let id = +params['id'];
      //console.log(id);

      this._dataService.getcitoArchivo().subscribe(
        response => {

          let entries = response.values;
          let numFilas = entries.length;
          //console.log('Numero de Filas:' + numFilas);

          //procesar datos

          for(var f=0; f<numFilas; f++)
          {
            let fila:any = entries[f];

            let obj:any = {}

            for(var c=0; c<fila.length; c++)
            {
              this.celda = fila[c];

              if(f == 0)
              {
                  this.campos.push(this.celda);
              }else{
                obj[this.campos[c]] = this.celda;
              }
            }

            if(f>0) this.datos.push(obj);
          }

          this.paciente = this.datos.filter((data:any)=>{
              if(data.no == id){return data}
          });
          //console.log(this.paciente);
          
          
          if(!this.paciente)
          {
            console.log('Error en servidor de datos');
          }else{
            this.loading=false;
          }


        },
        error => {
          console.log(<any>error);
          
        }
      );
      
    });

  }

}
