import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NavController } from '@ionic/angular';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [AdminService]
})
export class LoginPage implements OnInit {

  public title:string;
  public subtitle:string
  public admin: User;
  public status: any;
   public token:any;
   public identity:any;
   public mensaje:any;


  constructor(
    private _adminService:AdminService,
    private _router:Router,
    private _route:ActivatedRoute,
    private navCtrl:NavController

  ) {
    this.title = 'BIENVENIDOS A CAMU';
    this.subtitle = 'INFORMACION CANCER DE LA MUJER';
    this.admin = new User(1,'','','','','');
   }

  ngOnInit() {
    //se ejecuta siempre y cierra sesion solo cuando le llega el parametro requerido sure x la url:
    this.logout();
  }


  onSubmit(form:any){
     
    this._adminService.signup(this.admin).subscribe(

      response => {
          //aqui nos devuelve el token
          console.log(response);
          if(response.status != 'error'){
            this.status = 'success'
            this.token = response ; //aqui obtenemos el token

            //OBJETO USUARIO IDENTIFICADO
            this._adminService.signup(this.admin, true).subscribe( //se le pasa el parametro true para obtener al usuario
                  response => {
                    this.identity = response; 
                   // console.log(this.token); //mostramos el token del usuario
                    //console.log(this.identity); //mandamos por consola al usuario que se identifico

                    localStorage.setItem('token', this.token);
                    localStorage.setItem('identity',JSON.stringify(this.identity));

                    this._router.navigate(['/home']);

                  },
                  error => {
                    this.status = 'error';
                    console.log(<any>error);
                  }
            );            

          }else{
            this.mensaje = response.message
            console.log(this.mensaje);
            
          }
      },
      error => {

          this.status = 'error';
          console.log(<any>error);
      }

  );

    // this._adminService.signup(this.admin, true).subscribe(
    //   (response: any) => { // especifica el tipo de valor devuelto aquí
    //     this.identity = response; 
    //     console.log(this.token);
    //     console.log(this.identity);
    
    //     localStorage.setItem('token', this.token);
    //     localStorage.setItem('identity', JSON.stringify(this.identity));
    
    //     this._router.navigate(['/home']);
    //   },
    //   error => {
    //     this.status = 'error';
    //     console.log(<any>error);
    //   }
    // );


  //   this._adminService.signup(this.admin).subscribe(

  //     response => {
  //         //aqui nos devuelve el token
  //         console.log(response);
  //         if(response.status != 'error'){
  //           this.status = 'success'
  //           this.token = response ; //aqui obtenemos el token

  //           //OBJETO USUARIO IDENTIFICADO
  //           this._adminService.signup(this.admin, true).subscribe( //se le pasa el parametro true para obtener al usuario
  //                 (response:any): => {
  //                   this.identity = response; 
  //                   console.log(this.token); //mostramos el token del usuario
  //                   console.log(this.identity); //mandamos por consola al usuario que se identifico

  //                   localStorage.setItem('token', this.token);
  //                   localStorage.setItem('identity',JSON.stringify(this.identity));

  //                   this._router.navigate(['/home']);

  //                 },
  //                 error => {
  //                   this.status = 'error';
  //                   console.log(<any>error);
  //                 }
  //           );            

  //         }else{
  //           this.mensaje = response.message
  //           console.log(this.mensaje);
            
  //         }
  //     },
  //     error => {

  //         this.status = 'error';
  //         console.log(<any>error);
  //     }

  // );

  }

  logout(){
    this._route.params.subscribe(params =>{
        let logout = +params['sure']; //se convierte a numero con el signo +
        if(logout == 1){
          localStorage.removeItem('identity');
          localStorage.removeItem('token');

          this.identity = null;
          this.token = null;
          

          //REDIRECCION A PAGINA PRICNIPAL INICIO
         // this._router.navigate(['/login']);
         //esta fue la solucion para que cargue los datos bien en
          this.navCtrl.navigateRoot('/login', {animated:true})

        }
    });
  }


}
