import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-colpos-unidades',
  templateUrl: './colpos-unidades.page.html',
  styleUrls: ['./colpos-unidades.page.scss'],
  providers:[AdminService,DataService]
})
export class ColposUnidadesPage implements OnInit {

  public title:string;
  public unidades:[]=[];
  public token;
  public identity;
  public mensaje:any;
  public loading:boolean;
  public busqueda:string ="";

  constructor(
    private _adminService:AdminService,
    private _dataService:DataService

  ) {
    this.title = 'INFORMACION POR UNIDAD';
    this.token = _adminService.getToken();
    this.identity = _adminService.getIdentity();
    this.loading = true;
   }

  ngOnInit() {
    this.getcolposUnidades();
  }

  getcolposUnidades(){
    this._dataService.getUnidades().subscribe(
      response =>{
        if(response.status = 'success'){
          this.unidades = response.unidades;
          //console.log(this.unidades);
          
        }
        if(!this.unidades){
          console.log('Error en el Servidor');
          this.mensaje = "Error en el Servidor de Datos";
        }else{
          this.loading = false;
        }
      },
      error =>{
        console.log(<any>error);
        this.mensaje = "Erro en el Servidor de Datos";
      }
    );
  }

  onSearchChange(event:any){
    this.busqueda = event.detail.value;
  }
}
