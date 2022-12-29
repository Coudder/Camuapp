import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cito-unidad-pac-archivo',
  templateUrl: './cito-unidad-pac-archivo.page.html',
  styleUrls: ['./cito-unidad-pac-archivo.page.scss'],
  providers:[AdminService, DataService]

})
export class CitoUnidadPacArchivoPage implements OnInit {


  public title:string;
  public paciente;
  public token;
  public identity;
  public unidadFiltrada;
  public numPacientes;

  public numFilas;
  public numCitos;
  public celda
  public fila;

  public campos =[];
  public datos = [];

  public loading:boolean;
  public busqueda:string="";
  public id;
  public unidadBackend;

  constructor(
    private _adminService:AdminService,
    private _dataService:DataService,
    private _route:ActivatedRoute,
    private _router:Router,
  ) 
  {
    this.title = 'ARCHIVO PAC. CITOLOGIA';
    this.token = this._adminService.getToken();
    this.identity = this._adminService.getIdentity();
    this.loading = true;
   }

   filterPaciente = '';

  


  ngOnInit() {
    this.getPacientes();
  }

 

  getPacientes(){
    this._route.params.subscribe(params => {
      this.id = +params['id'];
//      console.log(this.id);

      this._dataService.getUnidadDetail(this.id).subscribe(
        response => {
          if(response.status == 'success'){
            this.unidadBackend = response.unidad;
            //console.log(this.unidadBackend);

           this._dataService.getcitoArchivo().subscribe(
            response => {
              let entries = response.values;
              let numFilas = entries.length;
              //  console.log('Numero de Filas:' + numFilas);
      
              //procesar datos
      
              for (var f = 0; f < numFilas; f++) {
                let fila:any = entries[f];
      
                let obj:any = {};
      
                for (var c = 0; c < fila.length; c++) {
                  this.celda = fila[c];
      
                  if (f == 0) {
                    this.campos.push(this.celda);
                  } else {
                    obj[this.campos[c]] = this.celda;
                  }
                }
      
                if (f > 0) this.datos.push(obj);
              }
      
                  //console.log(this.datos);
              //  this.numCito = this.datos.length;

                /////////////////////////////////////////

                ///filtramos solo la unidad que seleccionamos para para sus pacientes

                this.unidadFiltrada = this.datos.filter((data:any)=>{
                  if(data.unidadMedica == this.unidadBackend.nombre_unidad){
                    return data
                  }
                });
                this.numPacientes = this.unidadFiltrada.length;

              //  console.log(this.unidadFiltrada);

                if(!this.datos ){
                  console.log("Error en el servidor de datos");
                  
                }else{
                  this.loading = false;
                }

            },
            error => {
              console.log(<any>error);
              
            }
           ); 
            
          }
        },
        error => {
          console.log(<any>error);
          
        }
      );
      
    });

  

  }

  onSearchChange(event){
    this.busqueda = event.detail.value;
  }

  // goToBack(){
  //   this._router.navigate(['/cito-unidad-pacientes',this.id]);

  // }
}
