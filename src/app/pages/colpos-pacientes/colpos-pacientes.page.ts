import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-colpos-pacientes',
  templateUrl: './colpos-pacientes.page.html',
  styleUrls: ['./colpos-pacientes.page.scss'],
  providers: [AdminService,DataService]
})
export class ColposPacientesPage implements OnInit {

  public title:string;
  public paciente:any;
  public token;
  public identity;
  public mensaje:any
  public numColpos:any;

  public numFilas:any;
  public numCitos:any;
  public celda:any
  public fila:any;

  public campos:any =[];
  public datos:any = [];

  public loading:boolean;
  public busqueda:string="";

  constructor(
    private _adminService:AdminService,
    private _dataService:DataService
  ) 
  {
    this.title = 'PACIENTES COLPOSCOPIA';
    this.token = this._adminService.getToken();
    this.identity = this._adminService.getIdentity();
    this.loading = true;
   }

   filterPaciente = ''

  ngOnInit() {
    this.getcolposPacientes();
  }

  getcolposPacientes(){
    this._dataService.getcolposData().subscribe(
      response => {
        let entries = response.values;
        let numFilas = entries.length;
       // console.log('Numero de Filas:' + numFilas);

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
        
        this.numColpos = this.datos.length;

        //console.log(this.datos);
        if(!this.datos){
          console.log('Error en el Servidor de Datos');
          this.mensaje = "Error en el Servidor de Datos"  
        }else{
          this.loading = false;
        }

      },
      error => {
        console.log(<any>error);
        this.mensaje = "Error en el Servidor de Datos";
        
      }
    );
  }

  onSearchChange(event:any){
    this.busqueda = event.detail.value;
  }



}
