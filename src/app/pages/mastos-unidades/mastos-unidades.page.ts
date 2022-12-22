import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-mastos-unidades',
  templateUrl: './mastos-unidades.page.html',
  styleUrls: ['./mastos-unidades.page.scss'],
  providers: [DataService,AdminService]
})
export class MastosUnidadesPage implements OnInit {
  public title:string;
  public unidades:[];
  public token;
  public identity
  public url;
  public mensaje;
  public loading:boolean;
  public id;
  public busqueda:string = "";



  constructor(
    private _adminService:AdminService,
    private _dataService:DataService
  ) 
  {
    this.title = 'INFORMACION POR UNIDAD';
    this.token = this._adminService.getToken();
    this.identity = this._adminService.getIdentity();
    this.loading = true;
   }

  ngOnInit() {
    this.getUnidades();
  }

  getUnidades(){
    this._dataService.getUnidades().subscribe(
      response => {
          if(response.status == 'success'){
            this.unidades = response.unidades;
          }
          if(!this.unidades){
            console.log('Error en el Servidor');
            
          }else{
            this.loading = false;
          }

      },
      error => {
        console.log(<any>error);
        
      }
    );
  }

  onSearchChange(event){
    this.busqueda = event.detail.value;
  }

}
