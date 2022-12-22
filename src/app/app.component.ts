import { Component } from '@angular/core';
import { AdminService } from './services/admin.service';

// interface Pages {
//   icon:string;
//   title:string;
//   redirecTo:string;
// }

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers:[AdminService]
})
export class AppComponent {

  public open=false;
  
  public identity;
  public token;

  public pages:any[] = [

    {
      icon: 'home',
      title: 'Inicio',
      redirecTo: '/home'
    },
    {
      icon: 'person',
      title: 'Perfil',
      redirecTo: '/perfil'
    },
    {
      icon: 'chevron-forward-outline',
      title: 'Ca Mujer',
      children: [
        {
          icon: 'medkit',
          title: 'Citologias',
          reditecTo: '/citologias'
        },
        {
          icon: 'medkit',
          title: 'Vphs',
          reditecTo: '/vphs'
        },
        {
          icon: 'medkit',
          title: 'Expl. Clinic. Mama',
          reditecTo: '/detecmama'
        },
        {
          icon: 'medkit',
          title: 'Mastografias',
          reditecTo: '/mastos'
        },
        {
          icon: 'medkit',
          title: 'Colposcopia',
          reditecTo: '/colpos'
        },
        
       
      ]
    },
    // {
    //    icon: 'power',
    //    title: 'Cerrar Sesión',
    //    redirecTo: '/logout/1',
    //  },
  ];


 

  constructor(
    private _adminService:AdminService

  ) {
    this.identity = this._adminService.getIdentity();
    this.token = this._adminService.getToken();
  }
}

