import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-cito-pacientes',
  templateUrl: './cito-pacientes.page.html',
  styleUrls: ['./cito-pacientes.page.scss'],
  providers: [AdminService,DataService]
})
export class CitoPacientesPage implements OnInit {

  public title:string;
  public paciente;
  public token;
  public identity;

  public numFilas;
  public numCitos;
  public celda
  public fila;

  public campos =[];
  public datos = [];

  public loading:boolean;
  public busqueda:string="";

  constructor(
    private _adminService:AdminService,
    private _dataService:DataService
  ) 
  { 
    this.title = "PACIENTES CITOLOGIA";
    this.token = this._adminService.getToken();
    this.identity = this,_adminService.getIdentity();
    this.loading = true;
  }

filterPaciente = '';

  ngOnInit() {
    this.getcitoPacientes();
  }


  //obtenemos a los pacientes de citologias
  getcitoPacientes(){
    // this._dataService.getcitoData().subscribe(
    //   response => {

    //     let entries = response.values;
    //     let numFilas = entries.length;
    //     //console.log('Numero de Filas:' + numFilas);

    //     //procesar datos

    //     for(var f=0; f<numFilas; f++)
    //     {
    //       let fila = entries[f];

    //       let obj = {}

    //       for(var c=0; c<fila.length; c++)
    //       {
    //         this.celda = fila[c];

    //         if(f == 0)
    //         {
    //             this.campos.push(this.celda);
    //         }else{
    //           obj[this.campos[c]] = this.celda;
    //         }
    //       }

    //       if(f>0) this.datos.push(obj);
    //     }
        
    //     //console.log(this.datos);

    //     this.numCitos = this.datos.length;


    //     if(!this.datos){
    //       console.log('Error en el servidor de datos')
    //         //mensaje
    //     }else{
    //       this.loading= false;
    //     }




    //   },
    //   error => {
    //     console.log(<any>error);
        
    //   }
    // );


    this._dataService.getcitoData().subscribe(response => {
      const entries = response.values;
      let campos = [];
      let datos = [];
      entries.forEach((fila, f) => {
        let obj = {};
        fila.forEach((celda, c) => {
          if (f === 0) {
            campos.push(celda);
          } else {
            obj[campos[c]] = celda;
          }
        });
        if (f > 0) {
          datos.push(obj);
        }
      });
      this.datos = datos;
      console.log(this.datos);
      this.numCitos = this.datos.length; 

      this.loading = false;
    }, error => {
      console.log(<any>error);
    });

  }




  onSearchChange(event){
    this.busqueda = event.detail.value;
  }

}
