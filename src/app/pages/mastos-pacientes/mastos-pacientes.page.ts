import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-mastos-pacientes',
  templateUrl: './mastos-pacientes.page.html',
  styleUrls: ['./mastos-pacientes.page.scss'],
  providers:[AdminService,DataService]
})
export class MastosPacientesPage implements OnInit {


  public title:string;
  public paciente;
  public token;
  public identity;

  
  public numFilas;
  public numMastos;
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
    this.title = 'PACIENTES MASTOGRAFIAS';
    this.token = this._adminService.getToken();
    this.identity = this._adminService.getIdentity();
    this.loading = true;
   }

   filterPaciente = '';

  ngOnInit() {
    this.getmastosPacientes();
  }

  getmastosPacientes(){
    this._dataService.getmastosData().subscribe(
      response =>{
        let entries = response.values;
        let numFilas = entries.length;
       // console.log('Numero de Filas:' + numFilas);

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
        
       // console.log(this.datos);    
        this.numMastos = this.datos.length;    

        if(!this.datos){
          console.log('Error en el servidor de datos')
            //mensaje
        }else{
          this.loading= false;
        }
      },
      error =>{
        console.log(<any>error);
        
      }
    );
  }

  onSearchChange(event){
    this.busqueda = event.detail.value;
  }

}
