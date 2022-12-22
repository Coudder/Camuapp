import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-detecmama-pacientes',
  templateUrl: './detecmama-pacientes.page.html',
  styleUrls: ['./detecmama-pacientes.page.scss'],
  providers: [AdminService,DataService]
})
export class DetecmamaPacientesPage implements OnInit {
  
  public title:string;
  public paciente:any;
  public token;
  public identity;

  
  public numFilas:any;
  public numDet:any;
  public celda:any
  public fila:any;

  public campos:any =[];
  public datos:any = [];

  public loading:boolean;
  public busqueda:string="";



  constructor(
    private _adminService:AdminService,
    private _dataService: DataService
  ) 
  
  {
    this.title = 'PACIENTES EXPL. MAMA';
    this.token = this._adminService.getToken();
    this.identity = this._adminService.getIdentity();
    this.loading = true;
   }

   filterPaciente = '';

  ngOnInit() {
    this.getdetPacientes();
  }


  getdetPacientes(){
    this._dataService.getdetmamaData().subscribe(
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
        
        //console.log(this.datos);    
        this.numDet = this.datos.length;    

        if(!this.datos){
          console.log('Error en el servidor de datos')
            //mensaje
        }else{
          this.loading= false;
        }


      },
      error => {
        console.log(<any>error);
        
      }
    );
  }


  onSearchChange(event:any){
    this.busqueda = event.detail.value;
  }

}
