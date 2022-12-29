import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { DataService } from '../../services/data.service';
import { ViewDidEnter,ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-vphs-unidad-pacientes-detail',
  templateUrl: './vphs-unidad-pacientes-detail.page.html',
  styleUrls: ['./vphs-unidad-pacientes-detail.page.scss'],
  providers:[AdminService,DataService]

})
export class VphsUnidadPacientesDetailPage implements OnInit  {

  
  public title:string;
  public identity;
  public token;
  public id;
  public paciente;

  public numCito;
  public numFilas;

  public unidadM
  public celda;
  public fila;
  public datos =[];

  public unidadFiltrada

  public campos=[];
  public loading : boolean;

  constructor(
    private _adminService:AdminService,
    private _dataService:DataService,
    private _route:ActivatedRoute,
    private _router:Router

  ) {
    this.title = "INFORMACION DEL PACIENTE";
    this.identity = this._adminService.getIdentity();
    this.token =  this._adminService.getToken();
    this.loading = true;
   }


  ngOnInit() {
    this.getPaciente();
  }




  getPaciente(){
    this._route.params.subscribe(params => {
      this.id = +params['id'];

      this._dataService.getVphData().subscribe(
        response => {
          let entries = response.values;
          let numFilas = entries.length;
          //console.log('Numero de Filas:' + numFilas);

          //procesar datos

          for(var f=0; f<numFilas; f++)
          {
            let fila = entries[f];

            let obj = {}

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
          this.paciente = this.datos.filter((data)=>{
            if(data.no == this.id){return data}
          });
        //  console.log(this.paciente);
          
          if(!this.datos){
            console.log('Error en el servidor de datos');
          }else{
            this.loading = false;
          }

        },
        error => {
          console.log(<any>error);
          
        }
      );
    });

  }
}
