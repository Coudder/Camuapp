import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  providers: [AdminService]
})
export class PerfilPage implements OnInit {

  public title: string;
  public token;
  public identity;
  public  url;

  constructor(private _adminService:AdminService) {

    this.title = 'Mi Perfil',
    this.url = global.url;
    this.token = this._adminService.getToken();
    this.identity = this._adminService.getIdentity();
   }

  ngOnInit() {
    //console.log(this.identity);
    
  }


  
}
