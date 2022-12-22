import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detecmama-pac-archivo-detail',
  templateUrl: './detecmama-pac-archivo-detail.page.html',
  styleUrls: ['./detecmama-pac-archivo-detail.page.scss'],
})
export class DetecmamaPacArchivoDetailPage implements OnInit {

  public title:string;
  public identity;
  public token;
  public id:any;
  public paciente:any;
  public mensaje:any;

  public numDet:any;
  public numFilas:any;

  public celda:any;
  public fila:any;
  public datos:any =[];

  public campos:any=[];
  public loading: boolean;

  constructor(
    private _adminService:AdminService,
    private _dataService:DataService,
    private _route:ActivatedRoute,
    private _router:Router

  ) {
    this.title = "INFORMACION DEL PACIENTE";
    this.identity = this._adminService.getIdentity();
    this.token = this._adminService.getToken();
    this.loading = true;
   }

  ngOnInit() {
    this.getarchivodetPaciente();
  }

  getarchivodetPaciente(){
    this._route.params.subscribe(params =>{
      this.id = +params['id'];

      this._dataService.getdetmamaArchivo().subscribe(
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

          //console.log(this.datos);
          this.paciente = this.datos.filter((data:any)=>{
            if(data.no == this.id){ return data}
          });
         // console.log(this.paciente);
          
          if(!this.paciente)
          {
            console.log('Error en servidor de datos');
            this.mensaje = "Error en el Servidor de Datos"
          }else{
            this.loading=false;
          }

        },
        error => {
          console.log(<any>error);
          this.mensaje = "Error en el Servidor de Datos"
          
        }
      );

    });
  }

}
