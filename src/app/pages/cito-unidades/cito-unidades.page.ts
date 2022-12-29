import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { DataService } from '../../services/data.service';
import { Citologia } from '../../models/citologia';
import { Unidad } from '../../models/unidad';

@Component({
  selector: 'app-cito-unidades',
  templateUrl: './cito-unidades.page.html',
  styleUrls: ['./cito-unidades.page.scss'],
  providers: [DataService, AdminService]
})
export class CitoUnidadesPage implements OnInit {

  public title : string;
  public unidades:[] = [];
  public citologias:any;
  public token;
  public identity;
  public url:any;
  public mensaje:any;
  public loading:boolean;
  public id:any;
  public busqueda:string = "";

  constructor(
    private _dataService:DataService,
    private _adminService:AdminService

  ) {
    this.title = 'INFORMACION POR UNIDAD'
    this.token = _adminService.getToken();
    this.identity = _adminService.getIdentity();
    this.loading = true;

   }

  ngOnInit() {
    this.getUnidades();
  }

  getUnidades(){
    
      this._dataService.getUnidades().subscribe(
        response => {
          if(response.status ='success'){
            this.unidades = response.unidades;
            //console.log(this.unidades);
            
          }

          if(!this.unidades){
            console.log('error en el servidor');
            
          }else{
            this.loading = false;
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
