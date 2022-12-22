import { Component, OnInit, DoCheck, ViewChild, AfterContentChecked } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { DataService } from '../../services/data.service';
import { unidadesSalud } from '../../services/unimedicas';
import { SwiperOptions } from 'swiper';
import SwiperCore, { Pagination, EffectCoverflow  } from 'swiper';
import { SwiperComponent } from 'swiper/angular';


SwiperCore.use([Pagination,EffectCoverflow]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [AdminService, DataService]
})
export class HomePage implements OnInit, DoCheck {

 

  public swiperConfig: SwiperOptions = {
    pagination: true,
    //slidesPerView: 'auto',
    effect: 'coverflow',  
};

  public title:string;
  public identity;
  public token;
  public id;
  public mensaje:string;
  public loading:boolean;
  public loadingAll:boolean;

  public numCito;
  public numVph;
  public numDet;
  public numMasto;
  public numColpos;
  public unidadFiltrada;
  public toptomascitoCount;
  public mivariable
  public claves

  public numFilas;
  public totalUnidades;

  public celda;
  public fila;
  public datosCito =[];
  public camposCito=[];
  public datosVph=[];
  public camposVph =[];
  public datosDet=[];
  public camposDet=[];
  public datosMasto=[];
  public camposMasto=[];
  public datosColpos=[];
  public camposColpos=[];

  public citoplus = [];
  public values=[];
  public unidadesCitos;

  public unidades = unidadesSalud;
  public toptomasCito = [];
  public map;
  public newObj


  //UNIDADES CON MENOS CITOLOGIAS:
  public citounidadesmenosTomas;
  public citounidadesmenostomasContador
  public citounimenosTomas;

  //UNIDADES CON MAS TOMAS CITOLOGIAS
  public citounidadesmasTomas;
  public citounidadesmastomasContador;
  public citounimasTomas;

  //UNIDADES CON MAS TOMAS VPHS
  public unidadesVph = [];
  public vphunidadesmasTomas=[];
  public vphunidadesmastomasContador;
  public vphunimasTomas = {}; 

  //UNIDADES MENOS TOMAS VPH
  public vphunidadesmenosTomas=[];
  public vphunidadesmenostomasContador;
  public vphunimenosTomas = {};

  //UNIDADES MAS TOMAS DETECCIONES
  public detUnidades = [];
  public detunidadesmasTomas=[];
  public detunidadesmastomasContador;
  public detunimasTomas = {};

  //UNIDADES MENOS TOMAS DETECCIONES
  public detunidadesmenosTomas = [];
  public detunidadesmenostomasContador;
  public detunimenosTomas = {};

  //UNIDADES MAS TOMAS MASTOS
  public unidadesMastos = []
  public mastosunidadesmasTomas=[];
  public mastosunidadesmastomasContador;
  public mastosunimasTomas = {};

  //UNIDADES  MENOS TOMAS MASTOS
  public mastosunidadesmenosTomas = [];
  public mastosunidadesmenostomasContador;
  public mastosunimenosTomas = {}

  //año de info
  public year = [];

  constructor(
    private _adminService:AdminService,
    private _dataService:DataService

  ) {
    this.title = 'CANCER DE LA MUJER';
    this.identity = this._adminService.getIdentity();
    this.token = this._adminService.getToken();
    this.loading = true;

  }

  ngOnInit()  {
      //this.checkLoading();
       this.getcitoData();
       this.getvphData();
       this.getdetData();
       this.getmastoData();
       this.getcolposData();
       this.getyeardata();
       //this.loadUser();
    }

  ngDoCheck() {
    this.loadUser();

  }


  loadUser() {
    this.identity = this._adminService.getIdentity();
    this.token = this._adminService.getToken();
    //console.log(this.identity);

  }

  

//creamos esta funcion para que puieda acceder a los datos de los nuevos objetos creados
  objectKeys(obj) {
    if (obj) {
      return Object.keys(obj);
    }
    return [];
  }


  getcitoData(){
    this._dataService.getcitoData().subscribe(
      response => {
        let entries = response.values;
        let numFilas = entries.length;
      //  console.log('Numero de Filas:' + numFilas);

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
                this.camposCito.push(this.celda);
            }else{
              obj[this.camposCito[c]] = this.celda;
            }
          }
          if(f>0) this.datosCito.push(obj);
        }
        //console.log(this.datosCito);

        this.numCito = this.datosCito.length;
        //console.log('Citologias: '+this.numCito);


        //AQUI CREAMOS UN OBJETO PARA OBTENER CUANTAS TOMAS DE CITOLOGIA TIENE
        /**CADA UNIDAD, QUE DE CIRTA MANERA LO QUE HACEMOS ES CHECAR CUANTAS VECES
         * SE REPITE CADA UNIDAD DE SALUD X CONSECUENTE ES EL NUMERO DE CITOLOGIAS QUE TIENE
         * CADA UNIDAD
         */

         //this.unidadesCitos = {};

         this.unidadesCitos = [];

            this.datosCito.forEach(uni => {
              if (!this.unidadesCitos[uni.unidadMedica]) {
                this.unidadesCitos[uni.unidadMedica] = 1;
              } else {
                this.unidadesCitos[uni.unidadMedica]++;
              }
            });
            //console.log( this.unidadesCitos);



          /**OBTENEMOS LAS UNIDADES QUE TIENEN MENOS DE 10 TOMAS DE CITOLOGIAS Y LAS ORDENAMOS */
         const citosuniadesmenosTomas = Object.entries(this.unidadesCitos)
         .filter(entry => entry[1]<10) //Tienen menos de 10tomas
       .sort((a, b) => {
         const aCount = typeof a[1] === 'string' ? parseInt(a[1]) : 0;
         const bCount = typeof b[1] === 'string' ? parseInt(b[1]) : 0;
         return bCount - aCount;
       })
       .slice(0, 5)
       .map(entry => entry[0]);

      // console.log(citosuniadesmenosTomas);


     /**aAQUI ORDENAMOS LAS UNIDADES CON MENOS DE 10 TOMAS Y LAS ORDENAMOS DE MAYOR A MENOR DEACUERDO DE A LAS TOMAS
      * y LAS ORDENAMOS DE MAYOR A MENOR */

      this.citounidadesmenostomasContador  = citosuniadesmenosTomas.map(unic => ({ [unic]:
        this.unidadesCitos[unic]}))
         .sort((a, b) => {
           const aCount = Object.values(a)[0];
           const bCount = Object.values(b)[0];
           return aCount - bCount;

         });
         //console.log(this.citounidadesmenostomasContador);


         this.citounimenosTomas = {}; //CREAMOS EL OBJETO EL CUAL VAMOS A ITERAR EN EL FRONT

         this.citounidadesmenostomasContador.forEach(item => {
            const [key, value]= Object.entries(item)[0];
            this.citounimenosTomas[key] = value;
          });

         // console.log(this.citounimenosTomas);

   //////////////////////////////////////////////////TERMINA LAS UNIDADES CON MENOS TOMAS DE CITOLOGIAS SE MUESTRA UN SAMPLE SOLAMENTE   


        /**AHORA OBTENDREMOS LAS  UNIDADES QUE TIENE MAS TOMAS */

            /**
             *  se verifica si el valor de a[1] o b[1] es una cadena de texto válida usando la función typeof. Si el valor es una cadena de texto, se convierte en un número usando parseInt. Si el valor no es una cadena de texto, se asigna
             *  el valor 0 para que no haya problemas al realizar la operación aritmética.
             */

             this.toptomasCito = Object.entries(this.unidadesCitos)
             //.filter(entry => entry[1]>50) //QUE TIENEN MAS DE 50 TOMAS
            .sort((a, b) => {
              const aCount = typeof a[1] === 'string' ? parseInt(a[1]) : 0;
              const bCount = typeof b[1] === 'string' ? parseInt(b[1]) : 0;
              return bCount - aCount;
            })
            .slice(0, 5)
            .map(entry => entry[0]);

           // console.log(this.toptomasCito);


          /**OBTENEMOS CUANTAS TOMAS TIENEN ESAS UNIDADES QUE SON LAS QUE MAS TIENEN
           * y LAS ORDENAMOS DE MAYOR A MENOR */

           this.toptomascitoCount = this.toptomasCito.map(unic => ({ [unic]:
             this.unidadesCitos[unic]}))
              .sort((a, b) => {
                const aCount = Object.values(a)[0];
                const bCount = Object.values(b)[0];
                return bCount - aCount;

              });
              //console.log(this.toptomascitoCount);



              this.citounidadesmasTomas = {};

              this.toptomascitoCount.forEach(item => {
                const [key, value]= Object.entries(item)[0];
                this.citounidadesmasTomas[key] = value;
              });

             //console.log(this.citounidadesmasTomas);
              //////////////////////////////////////TERMINA LAS UNIDADES CON MAS CITOLOFIAS TOMADAS ALGUNAS DE ELLAS PARA MUESTREO 


        if(!this.datosCito){
          console.log("Error en el Servidor de Datos");
        }else {
          this.loading = false;
        }


      },
      error => {
        console.log(<any>error);
        this.mensaje = "Error en el Servidor de Datos"

      }
    );
  }

  getvphData(){
    this._dataService.getVphData().subscribe(
      response => {
        let entries = response.values;
        let numFilas = entries.length;
      //  console.log('Numero de Filas:' + numFilas);

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
                this.camposVph.push(this.celda);
            }else{
              obj[this.camposVph[c]] = this.celda;
            }
          }
          if(f>0) this.datosVph.push(obj);
        }

        this.numVph = this.datosVph.length;
       // console.log( "Vphs: "+this.numVph);

        //OBTENEMOS CUANTAS TOMAS TIENE CADA UNIDAD

      

        this.datosVph.forEach(uni => {
          if (!this.unidadesVph[uni.unidadMedica]) {
            this.unidadesVph[uni.unidadMedica] = 1;
          } else {
            this.unidadesVph[uni.unidadMedica]++;
          }
        });
        //console.log( this.unidadesVph);

        //OBTENEMOS LAS 5 UNIDAEDS QUE TIENEN MAS TOMAS DE VPH
        
        this.vphunidadesmasTomas = Object.entries(this.unidadesVph)
        //.filter(entry => entry[1]>50) //QUE TIENEN MAS DE 50 TOMAS
       .sort((a, b) => {
         const aCount = typeof a[1] === 'string' ? parseInt(a[1]) : 0;
         const bCount = typeof b[1] === 'string' ? parseInt(b[1]) : 0;
         return bCount - aCount;
       })
       .slice(0, 5)
       .map(entry => entry[0]);

       //console.log(this.vphunidadesmasTomas);

       //obtenemos cuantas tomas y ordenamos de mayor a menor
         /**OBTENEMOS CUANTAS TOMAS TIENEN ESAS UNIDADES QUE SON LAS QUE MAS TIENEN
           * y LAS ORDENAMOS DE MAYOR A MENOR */

         this.vphunidadesmastomasContador = this.vphunidadesmasTomas.map(unic => ({ [unic]:
          this.unidadesVph[unic]}))
           .sort((a, b) => {
             const aCount = Object.values(a)[0];
             const bCount = Object.values(b)[0];
             return bCount - aCount;

           });
           //console.log(this.vphunidadesmastomasContador);

           
           //this.vphunimasTomas = {};
          //creamos el objeto para poder iterar y pintar los valores en el front  
           this.vphunidadesmastomasContador.forEach(item => {
             const [key, value]= Object.entries(item)[0];
             this.vphunimasTomas[key] = value;
           });

          // console.log(this.vphunimasTomas);
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////           
             /**OBTENEMOS LAS UNIDADES QUE TIENEN MENOS DE 10 TOMAS DE CITOLOGIAS Y LAS ORDENAMOS */
             this.vphunidadesmenosTomas = Object.entries(this.unidadesVph)
             .filter(entry => entry[1]<10) //Tienen menos de 10tomas
             .sort((a, b) => {
              const aCount = typeof a[1] === 'string' ? parseInt(a[1]) : 0;
              const bCount = typeof b[1] === 'string' ? parseInt(b[1]) : 0;
              return bCount - aCount;
           })
           .slice(0, 5)
           .map(entry => entry[0]);
    
          //console.log(this.vphunidadesmenosTomas);
    
          this.vphunidadesmenostomasContador  = this.vphunidadesmenosTomas.map(unic => ({ [unic]:
            this.unidadesVph[unic]}))
             .sort((a, b) => {
               const aCount = Object.values(a)[0];
               const bCount = Object.values(b)[0];
               return aCount - bCount;
    
             });
            // console.log(this.vphunidadesmenostomasContador);
    
             this.vphunidadesmenostomasContador.forEach(item => {
              const [key, value]= Object.entries(item)[0];
              this.vphunimenosTomas[key] = value;
            });
 
           // console.log(this.vphunimenosTomas);   


        if(!this.datosVph){
          console.log("Error en el Servidor de Datos");
        }else {
          this.loading = false;
        }

      },
      error => {
        console.log(<any>error);

      }

    );
  }

  getdetData(){
    this._dataService.getdetmamaData().subscribe(
      response => {
        let entries = response.values;
        let numFilas = entries.length;
      //  console.log('Numero de Filas:' + numFilas);

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
                this.camposDet.push(this.celda);
            }else{
              obj[this.camposDet[c]] = this.celda;
            }
          }
          if(f>0) this.datosDet.push(obj);
        }
        //console.log(this.datosCito);

        this.numDet = this.datosDet.length;
        //console.log("Detecciones: "+this.numDet);

         //OBTENEMOS CUANTAS TOMAS TIENE CADA UNIDAD
         
         this.datosDet.forEach(uni => {
          if(!this.detUnidades[uni.unidadMedica]){
            this.detUnidades[uni.unidadMedica] = 1;
          }else{
            this.detUnidades[uni.unidadMedica]++;
          }
         });
        // console.log(this.detUnidades);
        
         //OBTENEMOS LAS 5 UNIDADES QUE TIENEN MAS TOMAS 
         this.detunidadesmasTomas = Object.entries(this.detUnidades)
         .sort((a, b) => {
          const aCount = typeof a[1] === 'string' ? parseInt(a[1]) : 0;
          const bCount = typeof b[1] === 'string' ? parseInt(b[1]) : 0;
          return bCount - aCount;
        })
        .slice(0,5)
        .map(entry =>entry[0]);
        
       // console.log(this.detunidadesmasTomas);

        //OBTENEMOS CUANTAS TOMAS TIENE CADA UNIDAD Y LAS ORDENAMOS DE MAYOR A MENOR
        this.detunidadesmastomasContador = this.detunidadesmasTomas.map(unic=> ({[unic]:
        this.detUnidades[unic]}))
          .sort((a,b)=>{
            const aCount = Object.values(a)[0];
            const bCount = Object.values(b)[0];
            return bCount - aCount;
          });
         // console.log(this.detunidadesmastomasContador);
          
          //CREAMOS EL OBJETO IRERABLE PARA PODERLO PINTAR EN EL FRONT
        this.detunidadesmastomasContador.forEach(item => {
            const [key, value] = Object.entries(item)[0];
            this.detunimasTomas[key] = value;
        });
        //console.log(this.detunimasTomas);
        //////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////
        //OBTENEMOS LAS 5 UNIDAES CON MENOS DETECCIONES
        this.detunidadesmenosTomas = Object.entries(this.detUnidades)
        .filter(entry => entry[1]<10) //menos de 10 tomas
        .sort((a,b)=> {
          const aCount = typeof a[1] === 'string' ? parseInt(a[1]) : 0;
          const bCount = typeof b[1] === 'string' ? parseInt(b[1]) : 0;
          return bCount - aCount;
        })
        .slice(0,5)
        .map(entry => entry[0]);
        //console.log(this.detunidadesmenosTomas);
        

        //obtenemos cuantas tomass tienen las unidades obtenidas anteriormente y las ordenamos de menor a mayor
        this.detunidadesmenostomasContador = this.detunidadesmenosTomas.map(unic => ({[unic]:
        this.detUnidades[unic]}))
        .sort((a, b) => {
          const aCount = Object.values(a)[0];
          const bCount = Object.values(b)[0];
          return aCount - bCount;

        });
        //console.log(this.detunidadesmenostomasContador);
        
        this.detunidadesmenostomasContador.forEach(item => {
            const [key, value] = Object.entries(item)[0];
            this.detunimenosTomas[key] = value;
        });        
       // console.log(this.detunimenosTomas);
        

        if(!this.datosDet){
          console.log("Error en el Servidor de Datos");
        }else {
          this.loading = false;
        }
      },
      error => {
        console.log(<any>error);

      }
    );


  }

  getmastoData(){
    this._dataService.getmastosData().subscribe(
      response => {
        let entries = response.values;
        let numFilas = entries.length;
      //  console.log('Numero de Filas:' + numFilas);

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
                this.camposMasto.push(this.celda);
            }else{
              obj[this.camposMasto[c]] = this.celda;
            }
          }
          if(f>0) this.datosMasto.push(obj);
        }
        //console.log(this.datosCito);

        this.numMasto = this.datosMasto.length;
       // console.log('mastos: '+this.numMasto);

        //OBTENEMOS LAS UNIDADES Y CUANTAS TOMAS TIENE CADA UNO
        this.datosMasto.forEach(uni=> {
          if(!this.unidadesMastos[uni.unidadMedica]){
            this.unidadesMastos[uni.unidadMedica] = 1;
          }else{
            this.unidadesMastos[uni.unidadMedica]++;
          }
        });
        //console.log(this.unidadesMastos);
        
        //OBTENEMOS LAS 5 UNIDADES CON MAS TOMAS DE MASTOS
        this.mastosunidadesmasTomas = Object.entries(this.unidadesMastos)
        .sort((a, b) => {
          const aCount = typeof a[1] === 'string' ? parseInt(a[1]) : 0;
          const bCount = typeof b[1] === 'string' ? parseInt(b[1]) : 0;
          return bCount - aCount;
        })
        .slice(0, 5)
        .map(entry => entry[0]);

        //console.log(this.mastosunidadesmasTomas);

        //MOSTRAMOS CUANTTAS TOMAS TIENEN LAS MASTOS ANTERIORES Y LAS ORDENAMOS
        this.mastosunidadesmastomasContador = this.mastosunidadesmasTomas.map(unic => ({[unic]:
        this.unidadesMastos[unic]}))
        .sort((a, b) => {
          const aCount = Object.values(a)[0];
          const bCount = Object.values(b)[0];
          return bCount - aCount;

        });

        //console.log(this.mastosunidadesmastomasContador);

        //creamos el objeto a iterar en el front
        this.mastosunidadesmastomasContador.forEach(item => {
           const [key, value] = Object.entries(item)[0];
           this.mastosunimasTomas[key] = value ;
        });
        //console.log(this.mastosunimasTomas);
        ////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////
        //MENOS TOMAS DE MASTOFRAFIAS 
        this.mastosunidadesmenosTomas = Object.entries(this.unidadesMastos)
        .filter(entry => entry[1]<10) //Tienen menos de 10tomas
        .sort((a, b) => {
         const aCount = typeof a[1] === 'string' ? parseInt(a[1]) : 0;
         const bCount = typeof b[1] === 'string' ? parseInt(b[1]) : 0;
         return bCount - aCount;
      })
      .slice(0, 5)
      .map(entry => entry[0]);

      //console.log(this.mastosunidadesmenosTomas);
      
       this.mastosunidadesmenostomasContador = this.mastosunidadesmenosTomas.map(unic=> ({[unic]:
      this.unidadesMastos[unic]}))
      .sort((a, b) => {
        const aCount = Object.values(a)[0];
        const bCount = Object.values(b)[0];
        return aCount - bCount;
      });

      //console.log(this.mastosunidadesmenostomasContador);
      
       //creamos nuestro objeto a iterar en el front
       this.mastosunidadesmenostomasContador.forEach(item => {
          const [key, value] = Object.entries(item)[0];
          this.mastosunimenosTomas[key] = value;
       }); 

      // console.log(this.mastosunimenosTomas);
       


        if(!this.datosMasto){
          console.log("Error en el Servidor de Datos");
        }else {
          this.loading = false;
        }
      },
      error => {
        console.log(<any>error);

      }
    );
  }

  getcolposData(){
    this._dataService.getcolposData().subscribe(
      response => {
        let entries = response.values;
        let numFilas = entries.length;
      //  console.log('Numero de Filas:' + numFilas);

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
                this.camposColpos.push(this.celda);
            }else{
              obj[this.camposColpos[c]] = this.celda;
            }
          }
          if(f>0) this.datosColpos.push(obj);
        }
        //console.log(this.datosCito);

        this.numColpos = this.datosColpos.length;
        //console.log('Colpos: '+this.numColpos);

        if(!this.datosColpos){
          console.log("Error en el Servidor de Datos");
        }else {
          this.loading = false;
        }
      },
      error => {
        console.log(<any>error);

      }
    );
  }

  getyeardata(){
    //utilizamos el servicio de citos by unidad solo para obtener el año ya que no es el menos pesado para obtener el puro año!  y mostrarlo solo por informacion

    this._dataService.getCitoByUnidad(19).subscribe(
      response => {
        if(response.status == 'success'){
          this.year = response.infoxunidad 
         // console.log(this.year);
        }

        if(!this.year){
          console.log('Error al obtener los datos');
          
        }

      },
      error => {
        console.log(<any>error);
        
      }
    );
  }

}
