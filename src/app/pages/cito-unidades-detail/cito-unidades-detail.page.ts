import { Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';
import SwiperCore, {Pagination, EffectCoverflow } from 'swiper'

import { DataService } from '../../services/data.service';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

SwiperCore.use([
  Pagination,
  EffectCoverflow,
])

@Component({
  selector: 'app-cito-unidades-detail',
  templateUrl: './cito-unidades-detail.page.html',
  styleUrls: ['./cito-unidades-detail.page.scss'],
  providers: [DataService,AdminService]
})
export class CitoUnidadesDetailPage implements OnInit {

  public swiperConfig: SwiperOptions = {
    pagination: true,
    slidesPerView: 'auto',
    effect: 'coverflow'
  };

  public title:any;
  public identity;
  public token;
  public id:any;
  public paciente:any;
  public unidadBackend:any;
  public metabackend:any;
  public metacitoAnual:any;
 

  public numCito:any;
  public numFilas:any;

  public unidadM:any
  public celda:any;
  public fila:any;
  public datos:any =[];

  public unidadFiltrada:any

  public campos:any=[];
  public loading : boolean;

  public valor1
  public valor2
  public valor3
  public metaCito:any;
  public metaCitoShow:any;
  public totalTomas:any;

  //DATA PARA MESES
  public ene:string;
  public eneData:any;
  public eneTotal:any;

  public feb:string;
  public febData:any;
  public febTotal:any;

  public mar:string;
  public marData:any;
  public marTotal:any;

  public abr:string;
  public abrData:any;
  public abrTotal:any;

  public may:string;
  public mayData:any;
  public mayTotal:any;

  public jun:string;
  public junData:any;
  public junTotal:any;

  public jul:string;
  public julData:any;
  public julTotal:any;

  public ago:string;
  public agoData:any;
  public agoTotal:any;

  public sep:string;
  public sepData:any;
  public sepTotal:any;

  public oct:string;
  public octData:any;
  public octTotal:any;

  public nov:string;
  public novData:any;
  public novTotal:any;

  public dic:string;
  public dicData:any;
  public dicTotal:any;

  public metacitoPrimera:any;
  public metacitoprimeraTotal:any;
  public metacitoSegunda:any;
  public metacitosegundatotal:any;
  public metacitoSubsecuente:any;
  public metacitosubsecuenteTotal:any;
  public citosinResultado:any;
  public citosinresultadoTotal:any;

  public libgEdad:any
  public libgedadTotal:any;
  public liagEdad:any
  public liagedadTotal:any;

  public metacitoShow:any
  public metaCitoprimera:any;
  public primeravezmeta:any;
  public segundavezmeta:any;
  public citoSubsecuente:any;
  public metacitoLibg:any
  public metacitopatoLibg:any
  public citopatoLibg:any
  public citoLibg:any;
  public metacitoLiag:any;
  public metacitopatoLiag:any
  public citopatoLiag:any;
  public citoLiag:any;
  public metacitoCarcinoma:any;
  public metacitopatoCarcinoma:any;
  public citoCarcinoma:any;
  public citopatoCarcinoma:any;
  public metacitoInadecuadas:any;
  public metacitopatoInadecuadas:any;
  public citopatoInadecuadas:any;
  public citoInadecuadas:any;
  public metacitoNegativas:any;
  public metacitopatoNegativas:any;
  public citoNegativas:any;
  public citopatoNegativas:any;
  public citoNull:any;
  public citonullTotal:any;
  


  public tipoCito = {
    primera : '1. PRIMERA VEZ EN LA VIDA',
    segunda:  '2. PRIMERA VEZ DESPUÉS DE 3 AÑOS',
    subsecuente:'3. SUBSECUENTE'    ,
    dxCito: '',
    dxPato: ''
 }

 public dxCitologico = {
  dxcitoNegativa : 'Negativa para lesión intraepitelial',
  dxcitoAscus    : 'ASC-US',
  dxcitoAsch     : 'ASC-H',
  dxcitoLibg     : 'VPH, displasia leve, NIC 1',
  dxcitoLiag     : 'Displasia moderada, displasia severa, carcicoma in Situ, NIC 2, NIC 3',
  dxcitoCarcinoma: 'Carcinoma epidermoide',
  dxcitoEndocervicales: 'Células glandulares endocervicales atípicas (AGC)',
  dxcitoEndometriales : 'Células glandulares endometriales atípicas (AGC)',
  dxcitoGlanatipicas  : 'Células glandulares atípicas (AGC)',
  dxcitoAdenocarinsitu: 'Adenocarcinoma endocervical in situ',
  dxcitoAdenocarextra : 'Adenocarcinoma (endocervical, endometrial o extrauterino)',
  dxcitoInadecuada    : 'Inadecuada',
  dxpatoNegativa : 'Negativa para lesión intraepitelial',
  dxpatoAscus    : 'ASC-US',
  dxpatoAsch     : 'ASC-H',
  dxpatoLibg     : 'VPH, displasia leve, NIC 1',
  dxpatoLiag     : 'Displasia moderada, displasia severa, carcicoma in Situ, NIC 2, NIC 3',
  dxpatoCarcinoma: 'Carcinoma epidermoide',
  dxpatoEndocervicales: 'Células glandulares endocervicales atípicas (AGC)',
  dxpatoEndometriales : 'Células glandulares endometriales atípicas (AGC)',
  dxpatoGlanatipicas  : 'Células glandulares atípicas (AGC)',
  dxpatoAdenocarinsitu: 'Adenocarcinoma endocervical in situ',
  dxpatoAdenocarextra : 'Adenocarcinoma (endocervical, endometrial o extrauterino)',
  dxpatoInadecuada    : 'Inadecuada',
  dxFalta : ''  
} 
 /* LOGICA OPCIONES MESES X INDICADORES */
  public opcionIndicadores:any = [];
  public indiEne:boolean;
  public indiFeb:boolean;
  public indiMar:boolean;
  public indiAbr:boolean;
  public indiMay:boolean;
  public indiJun:boolean;
  public indiJul:boolean;
  public indiAgo:boolean;
  public indiSep:boolean;
  public indiOct:boolean;
  public indiNov:boolean;
  public indiDic:boolean;

  public eventSelected:any;
  public selectedOption:any;


   //reportes mensuales 

 public ene1Vez25:any;
 public eneSubs25:any;
 public ene1Vez2534:any;
 public ene1VezD3:any;
 public eneSubs2534:any;
 public ene1vez3564:any;
 public eneSubs3564:any;
 public ene1Vez25Total:any;
 public eneSubs25Total:any;
 public ene1Vez2534Total:any;
 public ene1VezD3Total:any;
 public eneSubs2534Total:any;
 public ene1vez3564Total:any;
 public eneSubs3564Total:any;
 public eneCito:any;
 public enecitoTotal:any; 

 



 public feb1Vez25:any;
 public febSubs25:any;
 public feb1Vez2534:any;
 public feb1VezD3:any;
 public febSubs2534:any;
 public feb1vez3564:any;
 public febSubs3564:any;
 public feb1Vez25Total:any;
 public febSubs25Total:any;
 public feb1Vez2534Total:any;
 public feb1VezD3Total:any;
 public febSubs2534Total:any;
 public feb1vez3564Total:any;
 public febSubs3564Total:any;
 public febCito:any;
 public febcitoTotal:any; 

 public mar1Vez25:any;
 public marSubs25:any;
 public mar1Vez2534:any;
 public mar1VezD3:any;
 public marSubs2534:any;
 public mar1vez3564:any;
 public marSubs3564:any;
 public mar1Vez25Total:any;
 public marSubs25Total:any;
 public mar1Vez2534Total:any;
 public mar1VezD3Total:any;
 public marSubs2534Total:any;
 public mar1vez3564Total:any;
 public marSubs3564Total:any;
 public marCito:any;
 public marcitoTotal:any; 

 public abr1Vez25:any;
 public abrSubs25:any;
 public abr1Vez2534:any;
 public abr1VezD3:any;
 public abrSubs2534:any;
 public abr1vez3564:any;
 public abrSubs3564:any;
 public abr1Vez25Total:any;
 public abrSubs25Total:any;
 public abr1Vez2534Total:any;
 public abr1VezD3Total:any;
 public abrSubs2534Total:any;
 public abr1vez3564Total:any;
 public abrSubs3564Total:any;
 public abrCito:any;
 public abrcitoTotal:any; 

 public may1Vez25:any;
 public maySubs25:any;
 public may1Vez2534:any;
 public may1VezD3:any;
 public maySubs2534:any;
 public may1vez3564:any;
 public maySubs3564:any;
 public may1Vez25Total:any;
 public maySubs25Total:any;
 public may1Vez2534Total:any;
 public may1VezD3Total:any;
 public maySubs2534Total:any;
 public may1vez3564Total:any;
 public maySubs3564Total:any;
 public mayCito:any;
 public maycitoTotal:any; 

 public jun1Vez25:any;
 public junSubs25:any;
 public jun1Vez2534:any;
 public jun1VezD3:any;
 public junSubs2534:any;
 public jun1vez3564:any;
 public junSubs3564:any;
 public jun1Vez25Total:any;
 public junSubs25Total:any;
 public jun1Vez2534Total:any;
 public jun1VezD3Total:any;
 public junSubs2534Total:any;
 public jun1vez3564Total:any;
 public junSubs3564Total:any;
 public junCito:any;
 public juncitoTotal:any; 

 public jul1Vez25:any;
 public julSubs25:any;
 public jul1Vez2534:any;
 public jul1VezD3:any;
 public julSubs2534:any;
 public jul1vez3564:any;
 public julSubs3564:any;
 public jul1Vez25Total:any;
 public julSubs25Total:any;
 public jul1Vez2534Total:any;
 public jul1VezD3Total:any;
 public julSubs2534Total:any;
 public jul1vez3564Total:any;
 public julSubs3564Total:any;
 public julCito:any;
 public julcitoTotal:any; 

 public ago1Vez25:any;
 public agoSubs25:any;
 public ago1Vez2534:any;
 public ago1VezD3:any;
 public agoSubs2534:any;
 public ago1vez3564:any;
 public agoSubs3564:any;
 public ago1Vez25Total:any;
 public agoSubs25Total:any;
 public ago1Vez2534Total:any;
 public ago1VezD3Total:any;
 public agoSubs2534Total:any;
 public ago1vez3564Total:any;
 public agoSubs3564Total:any;
 public agoCito:any;
 public agocitoTotal:any; 

 public sep1Vez25:any;
 public sepSubs25:any;
 public sep1Vez2534:any;
 public sep1VezD3:any;
 public sepSubs2534:any;
 public sep1vez3564:any;
 public sepSubs3564:any;
 public sep1Vez25Total:any;
 public sepSubs25Total:any;
 public sep1Vez2534Total:any;
 public sep1VezD3Total:any;
 public sepSubs2534Total:any;
 public sep1vez3564Total:any;
 public sepSubs3564Total:any;
 public sepCito:any;
 public sepcitoTotal:any; 

 public oct1Vez25:any;
 public octSubs25:any;
 public oct1Vez2534:any;
 public oct1VezD3:any;
 public octSubs2534:any;
 public oct1vez3564:any;
 public octSubs3564:any;
 public oct1Vez25Total:any;
 public octSubs25Total:any;
 public oct1Vez2534Total:any;
 public oct1VezD3Total:any;
 public octSubs2534Total:any;
 public oct1vez3564Total:any;
 public octSubs3564Total:any;
 public octCito:any;
 public octcitoTotal:any; 

 public nov1Vez25:any;
 public novSubs25:any;
 public nov1Vez2534:any;
 public nov1VezD3:any;
 public novSubs2534:any;
 public nov1vez3564:any;
 public novSubs3564:any;
 public nov1Vez25Total:any;
 public novSubs25Total:any;
 public nov1Vez2534Total:any;
 public nov1VezD3Total:any;
 public novSubs2534Total:any;
 public nov1vez3564Total:any;
 public novSubs3564Total:any;
 public novCito:any;
 public novcitoTotal:any; 

 public dic1Vez25:any;
 public dicSubs25:any;
 public dic1Vez2534:any;
 public dic1VezD3:any;
 public dicSubs2534:any;
 public dic1vez3564:any;
 public dicSubs3564:any;
 public dic1Vez25Total:any;
 public dicSubs25Total:any;
 public dic1Vez2534Total:any;
 public dic1VezD3Total:any;
 public dicSubs2534Total:any;
 public dic1vez3564Total:any;
 public dicSubs3564Total:any;
 public dicCito:any;
 public diccitoTotal:any; 


 //add 19/12/2021//
 public ene1vezd3d3564:any;
 public ene1vezd3d3564Total:any;
 public feb1vezd3d3564:any;
 public feb1vezd3d3564Total:any;
 public mar1vezd3d3564:any;
 public mar1vezd3d3564Total:any;
 public abr1vezd3d3564:any;
 public abr1vezd3d3564Total:any;
 public may1vezd3d3564:any;
 public may1vezd3d3564Total:any;
 public jun1vezd3d3564:any;
 public jun1vezd3d3564Total:any;
 public jul1vezd3d3564:any;
 public jul1vezd3d3564Total:any;
 public ago1vezd3d3564:any;
 public ago1vezd3d3564Total:any;
 public sep1vezd3d3564:any;
 public sep1vezd3d3564Total:any;
 public oct1vezd3d3564:any;
 public oct1vezd3d3564Total:any;
 public nov1vezd3d3564:any;
 public nov1vezd3d3564Total:any;
 public dic1vezd3d3564:any;
 public dic1vezd3d3564Total:any;

 public enemayores64:any
 public enemayores64Total:any
 public febmayores64:any
 public febmayores64Total:any
 public marmayores64:any
 public marmayores64Total:any
 public abrmayores64:any
 public abrmayores64Total:any
 public maymayores64:any
 public maymayores64Total:any
 public junmayores64:any
 public junmayores64Total:any
 public julmayores64:any
 public julmayores64Total:any
 public agomayores64:any
 public agomayores64Total:any
 public sepmayores64:any
 public sepmayores64Total:any
 public octmayores64:any
 public octmayores64Total:any
 public novmayores64:any
 public novmayores64Total:any
 public dicmayores64:any
 public dicmayores64Total:any

 public ene1vezD3menor25:any;
 public ene1vezd3menor25Total:any;
 public feb1vezD3menor25:any;
 public feb1vezd3menor25Total:any;
 public mar1vezD3menor25:any;
 public mar1vezd3menor25Total:any;
 public abr1vezD3menor25:any;
 public abr1vezd3menor25Total:any;
 public may1vezD3menor25:any;
 public may1vezd3menor25Total:any;
 public jun1vezD3menor25:any;
 public jun1vezd3menor25Total:any;
 public jul1vezD3menor25:any;
 public jul1vezd3menor25Total:any;
 public ago1vezD3menor25:any;
 public ago1vezd3menor25Total:any;
 public sep1vezD3menor25:any;
 public sep1vezd3menor25Total:any;
 public oct1vezD3menor25:any;
 public oct1vezd3menor25Total:any;
 public nov1vezD3menor25:any;
 public nov1vezd3menor25Total:any;
 public dic1vezD3menor25:any;
 public dic1vezd3menor25Total:any;
 //////////////
 public enecitoTotal2534:any
 public febcitoTotal2534:any
 public marcitoTotal2534:any
 public abrcitoTotal2534:any
 public maycitoTotal2534:any
 public juncitoTotal2534:any
 public julcitoTotal2534:any
 public agocitoTotal2534:any
 public sepcitoTotal2534:any
 public octcitoTotal2534:any
 public novcitoTotal2534:any
 public diccitoTotal2534:any
 
 public enecitoTotal3564:any;
 public febcitoTotal3564:any;
 public marcitoTotal3564:any;
 public abrcitoTotal3564:any;
 public maycitoTotal3564:any;
 public juncitoTotal3564:any;
 public julcitoTotal3564:any;
 public agocitoTotal3564:any;
 public sepcitoTotal3564:any;
 public octcitoTotal3564:any;
 public novcitoTotal3564:any;
 public diccitoTotal3564:any;
  

  constructor(

    private _dataService:DataService,
    private _adminService:AdminService,
    private _route:ActivatedRoute,
    private _router:Router

  ) {
    this.token = _adminService.getToken();
    this.identity = _adminService.getIdentity();
    this.loading = true;

    this.valor1 = 25;
    this.valor2 = 34;
    this.valor3 = 64;

    this.ene = 'enero';
    this.feb = 'febrero';
    this.mar = 'marzo';
    this.abr = 'abril';
    this.may = 'mayo';
    this.jun = 'junio';
    this.jul = 'julio';
    this.ago = 'agosto';
    this.sep = 'septiembre'
    this.oct = 'octubre';
    this.nov = 'noviembre';
    this.dic = 'diciembre';

    this.indiEne = false;
    this.indiFeb = false;
    this.indiMar = false;
    this.indiAbr = false;
    this.indiMay = false;
    this.indiJun = false;
    this.indiJul = false;
    this.indiAgo = false;
    this.indiSep = false;
    this.indiOct = false;
    this.indiNov = false;
    this.indiDic = false;

    this.opcionIndicadores = [
      'Default',
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    ]
   }
 
  ngOnInit() {
    Swiper.use([Pagination]);
    this.getUnidad();
    this.getcitometaBackend();
  }

  getUnidad(){
    //obtenemos el id de de la url
    this._route.params.subscribe(params => {
      this.id = +params['id'];
      //console.log(id);

      //obtenemos la informacion de la unidad seleccionada con el servicio
      this._dataService.getUnidadDetail(this.id).subscribe(
        response => {

          if(response.status == 'success'){
              //obtenemos info de la unidad seleccionada del backend
            this.unidadBackend = response.unidad;
            //console.log(this.unidadBackend);
            //console.log(this.unidadBackend.nombre_unidad);
            this.title = this.unidadBackend.nombre_unidad;
           // console.log(this.title);
            
            
            

            //obtenemos la data de los paralelos de citologia general
            this._dataService.getcitoData().subscribe(
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

                  ///filtramos solo la unidad que seleccionamos para indicadores

                  this.unidadFiltrada = this.datos.filter((data:any)=>{
                    if(data.unidadMedica == this.unidadBackend.nombre_unidad){
                      return data
                    }
                  });
                 // console.log(this.unidadFiltrada);
                  this.numCito = this.unidadFiltrada.length;
                  
                  
                  
                  //INDICADORES GENERALES//
                  //Tomas de 25-34 años totales
      this.metaCito = this.unidadFiltrada.filter((meta:any)=>{
        if( meta.edad >=this.valor1 && meta.edad <= this.valor2){
          return meta;
        }
      }); 
      this.metaCitoShow = this.metaCito.length;
     // console.log(this.metaCitoShow);
      

      //obtener citologias 1 vez de 25  a 34 años
      this.metacitoPrimera = this.unidadFiltrada.filter((data:any)=>{
        if(data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia == this.tipoCito.primera){
          return data;
        }
      });
      this.metacitoprimeraTotal = this.metacitoPrimera.length;
      
       //obtener citologias 1 vez desp de 3 años de 25  a 34 años
       this.metacitoSegunda = this.unidadFiltrada.filter((data:any)=>{
        if(data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia == this.tipoCito.segunda){
          return data;
        }
      });
      this.metacitosegundatotal = this.metacitoSegunda.length;

      //obtener citologias subsecuentes de 25  a 34 años
      this.metacitoSubsecuente = this.unidadFiltrada.filter((data:any)=>{
        if(data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia == this.tipoCito.subsecuente){
          return data;
        }
      });
      this.metacitosubsecuenteTotal = this.metacitoSubsecuente.length;

      this.citosinResultado = this.unidadFiltrada.filter((data:any)=> {
          
        if(data.dxCito == this.tipoCito.dxCito && data.dxPato == this.tipoCito.dxPato){ 
          return data
        }
      });    
      this.citosinresultadoTotal = this.citosinResultado.length;


      this.libgEdad = this.unidadFiltrada.filter((data:any)=>{ //libg de 25-34 años
        if(data.edad >= this.valor1 && data.edad <= this.valor2 &&  data.refdxPato == this.dxCitologico.dxpatoLibg){
          return data
        }
      });
      this.libgedadTotal = this.libgEdad.length;

      this.liagEdad = this.unidadFiltrada.filter((data:any)=>{ //libg de 25-34 años
        if(data.edad >= this.valor1 && data.edad <= this.valor2 &&  data.refdxPato == this.dxCitologico.dxpatoLiag){
          return data
        }
      });
      this.liagedadTotal = this.liagEdad.length;


      /* INDICADORES DX CITOLOGICO GENERAL */
               //obtener total de libg de todas las edades citologo
        this.metacitoLibg = this.unidadFiltrada.filter((libg:any)=>{
          if(libg.refdxCito == this.dxCitologico.dxcitoLibg  ){
            return libg
          }
        });
        //obtener total libg  patologo
        this.metacitopatoLibg = this.unidadFiltrada.filter((data:any) =>{
          if( data.refdxPato == this.dxCitologico.dxpatoLibg){
            return data
          }
        });

        //obtener total de liag de todas las edades citologo
        this.metacitoLiag = this.unidadFiltrada.filter((liag:any)=>{
          if(liag.refdxCito == this.dxCitologico.dxcitoLiag ){
            return liag
          }
        });
        //liag de patologo
        this.metacitopatoLiag = this.unidadFiltrada.filter((data:any)=>{
          if(data.refdxPato == this.dxCitologico.dxpatoLiag){
            return data
          }
        });

        //obtener total de carcinomas todas edades citologos
        this.metacitoCarcinoma = this.unidadFiltrada.filter((data:any)=>{
          if(data.refdxCito == this.dxCitologico.dxcitoCarcinoma){
            return data
          }
        });
        //carcionomas patologo
        this.metacitopatoCarcinoma = this.unidadFiltrada.filter((data:any)=>{
          if(data.refdxPato == this.dxCitologico.dxpatoCarcinoma){
            return data
          }
        });
        //inadecuadass
        this.metacitoInadecuadas = this.unidadFiltrada.filter((data:any)=>{
          if(data.refdxCito == this.dxCitologico.dxcitoInadecuada){
            return data
          }
        });

        //inadecuadas patologo
        this.metacitopatoInadecuadas = this.unidadFiltrada.filter((data:any)=>{
          if(data.refdxPato == this.dxCitologico.dxpatoInadecuada){
            return data
          }
        });

        this.metacitoNegativas = this.unidadFiltrada.filter((data:any)=>{
          if(data.refdxCito == this.dxCitologico.dxcitoNegativa){
            return data
          }
        });

        this.metacitopatoNegativas = this.unidadFiltrada.filter((data:any)=>{
          if(data.refdxPato == this.dxCitologico.dxpatoNegativa){
            return data
          }
        });

        this.citoNull = this.unidadFiltrada.filter((data:any)=>{
          if(data.refdxCito  == this.dxCitologico.dxFalta && data.refdxPato == this.dxCitologico.dxFalta){
            return data

          }
        });


        this.citoLibg = this.metacitoLibg.length;
        this.citopatoLibg = this.metacitopatoLibg.length;
        this.citoLiag = this.metacitoLiag.length;
        this.citopatoLiag = this.metacitopatoLiag.length;
        this.citoCarcinoma = this.metacitoCarcinoma.length;
        this.citopatoCarcinoma = this.metacitopatoCarcinoma.length;
        this.citoInadecuadas = this.metacitoInadecuadas.length;
        this.citopatoInadecuadas = this.metacitopatoInadecuadas.length;
        this.citoNegativas = this.metacitoNegativas.length;
        this.citopatoNegativas = this.metacitopatoNegativas.length;
        this.citonullTotal = this.citoNull.length;

        this.libgedadTotal = this.libgEdad.length;
        this.liagedadTotal = this.liagEdad.length;

        //////////////////////////////////////////////////

                    /*DATOS GENERALES X MESES TOTALES DE TOMAS X MESES*/
                  this.eneData =  this.unidadFiltrada.filter((enero:any) =>{
                    if(enero.mes == this.ene){return enero}
                  });
                  this.eneTotal = this.eneData.length;

                  this.febData =  this.unidadFiltrada.filter((data:any) =>{
                    if(data.mes == this.feb){return data}
                  });
                  this.febTotal = this.febData.length;

                  this.marData =  this.unidadFiltrada.filter((data:any) =>{
                    if(data.mes == this.mar){return data}
                  });
                  this.marTotal = this.marData.length;

                  this.abrData =  this.unidadFiltrada.filter((data:any) =>{
                    if(data.mes == this.abr){return data}
                  });
                  this.abrTotal = this.abrData.length;

                  this.mayData =  this.unidadFiltrada.filter((data:any) =>{
                    if(data.mes == this.may){return data}
                  });
                  this.mayTotal = this.mayData.length;

                  this.junData =  this.unidadFiltrada.filter((data:any) =>{
                    if(data.mes == this.jun){return data}
                  });
                  this.junTotal = this.junData.length;

                  this.julData =  this.unidadFiltrada.filter((data:any) =>{
                    if(data.mes == this.jul){return data}
                  });
                  this.julTotal = this.julData.length;

                  this.agoData =  this.unidadFiltrada.filter((data:any) =>{
                    if(data.mes == this.ago){return data}
                  });
                  this.agoTotal = this.agoData.length;

                  this.sepData =  this.unidadFiltrada.filter((data:any) =>{
                    if(data.mes == this.sep){return data}
                  });
                  this.sepTotal = this.sepData.length;

                  this.octData =  this.unidadFiltrada.filter((data:any) =>{
                    if(data.mes == this.oct){return data}
                  });
                  this.octTotal = this.octData.length;

                  this.novData =  this.unidadFiltrada.filter((data:any) =>{
                    if(data.mes == this.nov){return data}
                  });
                  this.novTotal = this.novData.length;

                  this.dicData =  this.unidadFiltrada.filter((data:any) =>{
                    if(data.mes == this.dic){return data}
                  });
                  this.dicTotal = this.dicData.length;

                    /////////////////////////////////////////////////////////


                      /**INDICADORES X MES DEACUERDO A LA HOJA DE REGISTRO GENERAL */
TODO: //indicadores x mes generales 

//obtener unidadFiltrada por mes y deacuerdo a reportes mensuales ENERO

this.ene1Vez25 = this.unidadFiltrada.filter((data:any)=>{
  if(data.mes == this.ene && data.edad < this.valor1 && data.citologia ==  this.tipoCito.primera  ){
    return data
    
  }
});
this.eneSubs25 = this.unidadFiltrada.filter((data:any)=>{
  if(data.mes == this.ene && data.edad < this.valor1 && data.citologia ==  this.tipoCito.subsecuente  ){
    return data
    
  }
});
this.ene1Vez2534 = this.unidadFiltrada.filter((data:any)=>{
  if(data.mes == this.ene && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.primera  ){
    return data
    
  }
});
this.ene1VezD3 = this.unidadFiltrada.filter((data:any)=>{
  if(data.mes == this.ene && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.segunda  ){
    return data
    
  }
});
this.eneSubs2534 = this.unidadFiltrada.filter((data:any)=>{
  if(data.mes == this.ene && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.subsecuente  ){
    return data
    
  }
});
this.ene1vez3564 = this.unidadFiltrada.filter((data:any)=>{
  if(data.mes == this.ene && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia ==  this.tipoCito.primera  ){
    return data
    
  }
});
this.eneSubs3564 = this.unidadFiltrada.filter((data:any)=>{
  if(data.mes == this.ene && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia ==  this.tipoCito.subsecuente  ){
    return data
    
  }
});


this.ene1vezD3menor25 = this.unidadFiltrada.filter((data:any)=>{
  if(data.mes == this.ene && data.edad < this.valor1  && data.citologia ==  this.tipoCito.segunda  ){
    return data
    
  }
});
this.ene1vezd3menor25Total = this.ene1vezD3menor25.length;


this.ene1vezd3d3564 = this.unidadFiltrada.filter((data:any)=>{
  if(data.mes == this.ene && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia == this.tipoCito.segunda){
    return data
  }
});
this.ene1vezd3d3564Total = this.ene1vezd3d3564.length;

 ////////////////mayores a 64
 this.enemayores64 = this.unidadFiltrada.filter((data:any)=>{
  if(data.mes == this.ene && data.edad > this.valor3){
    return data;
  } 
})
this.enemayores64Total = this.enemayores64.length;


this.ene1Vez25Total = this.ene1Vez25.length;
this.eneSubs25Total = this.eneSubs25.length;
this.ene1Vez2534Total = this.ene1Vez2534.length;
this.ene1VezD3Total = this.ene1VezD3.length;
this.eneSubs2534Total = this.eneSubs2534.length;
this.ene1vez3564Total = this.ene1vez3564.length;
this.eneSubs3564Total = this.eneSubs3564.length;


  //obtener unidadFiltrada por mes y deacuerdo a reportes mensuales FEBRERO

  this.feb1Vez25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.feb && data.edad < this.valor1 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.febSubs25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.feb && data.edad < this.valor1 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });
  this.feb1Vez2534 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.feb && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.feb1VezD3 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.feb && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.segunda  ){
      return data
      
    }
  });
  this.febSubs2534 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.feb && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });
  this.feb1vez3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.feb && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.febSubs3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.feb && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });

  
  this.feb1vezD3menor25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.feb && data.edad < this.valor1  && data.citologia ==  this.tipoCito.segunda  ){
      return data
      
    }
  });
 


  this.feb1vezd3d3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.feb && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia == this.tipoCito.segunda){
      return data
    }
  });


   ////////////////mayores a 64
   this.febmayores64 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.feb && data.edad > this.valor3){
      return data;
    } 
  })
  


  this.feb1Vez25Total         = this.feb1Vez25.length;
  this.febSubs25Total         = this.febSubs25.length;
  this.feb1Vez2534Total       = this.feb1Vez2534.length;
  this.feb1VezD3Total         = this.feb1VezD3.length;
  this.febSubs2534Total       = this.febSubs2534.length;
  this.feb1vez3564Total       = this.feb1vez3564.length;
  this.febSubs3564Total       = this.febSubs3564.length;
  this.feb1vezd3menor25Total  = this.feb1vezD3menor25.length;
  this.feb1vezd3d3564Total    = this.feb1vezd3d3564.length;
  this.febmayores64Total      = this.febmayores64.length;

  //obtener unidadFiltrada por mes y deacuerdo a reportes mensuales MARZO

  this.mar1Vez25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.mar && data.edad < this.valor1 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.marSubs25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.mar && data.edad < this.valor1 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });
  this.mar1Vez2534 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.mar && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.mar1VezD3 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.mar && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.segunda  ){
      return data
      
    }
  });
  this.marSubs2534 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.mar && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });
  this.mar1vez3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.mar && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.marSubs3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.mar && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });

  
  this.mar1vezD3menor25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.mar && data.edad < this.valor1  && data.citologia ==  this.tipoCito.segunda  ){
      return data
      
    }
  });
 


  this.mar1vezd3d3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.mar && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia == this.tipoCito.segunda){
      return data
    }
  });


   ////////////////mayores a 64
   this.marmayores64 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.mar && data.edad > this.valor3){
      return data;
    } 
  })
  


  this.mar1Vez25Total         = this.mar1Vez25.length;
  this.marSubs25Total         = this.marSubs25.length;
  this.mar1Vez2534Total       = this.mar1Vez2534.length;
  this.mar1VezD3Total         = this.mar1VezD3.length;
  this.marSubs2534Total       = this.marSubs2534.length;
  this.mar1vez3564Total       = this.mar1vez3564.length;
  this.marSubs3564Total       = this.marSubs3564.length;
  this.mar1vezd3menor25Total  = this.mar1vezD3menor25.length;
  this.mar1vezd3d3564Total    = this.mar1vezd3d3564.length;
  this.marmayores64Total      = this.marmayores64.length;


  //obtener unidadFiltrada por mes y deacuerdo a reportes mensuales  abril

  this.abr1Vez25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.abr && data.edad < this.valor1 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.abrSubs25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.abr && data.edad < this.valor1 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });
  this.abr1Vez2534 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.abr && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.abr1VezD3 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.abr && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.segunda  ){
      return data
      
    }
  });
  this.abrSubs2534 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.abr && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });
  this.abr1vez3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.abr && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.abrSubs3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.abr && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });

  
  this.abr1vezD3menor25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.abr && data.edad < this.valor1  && data.citologia ==  this.tipoCito.segunda  ){
      return data
      
    }
  });
 


  this.abr1vezd3d3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.abr && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia == this.tipoCito.segunda){
      return data
    }
  });


   ////////////////mayores a 64
   this.abrmayores64 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.abr && data.edad > this.valor3){
      return data;
    } 
  })
  


  this.abr1Vez25Total         = this.abr1Vez25.length;
  this.abrSubs25Total         = this.abrSubs25.length;
  this.abr1Vez2534Total       = this.abr1Vez2534.length;
  this.abr1VezD3Total         = this.abr1VezD3.length;
  this.abrSubs2534Total       = this.abrSubs2534.length;
  this.abr1vez3564Total       = this.abr1vez3564.length;
  this.abrSubs3564Total       = this.abrSubs3564.length;
  this.abr1vezd3menor25Total  = this.abr1vezD3menor25.length;
  this.abr1vezd3d3564Total    = this.abr1vezd3d3564.length;
  this.abrmayores64Total      = this.abrmayores64.length;

  //obtener unidadFiltrada por mes y deacuerdo a reportes mensuales mayo

  this.may1Vez25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.may && data.edad < this.valor1 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.maySubs25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.may && data.edad < this.valor1 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });
  this.may1Vez2534 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.may && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.may1VezD3 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.may && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.segunda  ){
      return data
      
    }
  });
  this.maySubs2534 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.may && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });
  this.may1vez3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.may && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.maySubs3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.may && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });

  
  this.may1vezD3menor25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.may && data.edad < this.valor1  && data.citologia ==  this.tipoCito.segunda  ){
      return data
      
    }
  });
 


  this.may1vezd3d3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.may && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia == this.tipoCito.segunda){
      return data
    }
  });


   ////////////////mayores a 64
   this.maymayores64 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.may && data.edad > this.valor3){
      return data;
    } 
  })
  


  this.may1Vez25Total         = this.may1Vez25.length;
  this.maySubs25Total         = this.maySubs25.length;
  this.may1Vez2534Total       = this.may1Vez2534.length;
  this.may1VezD3Total         = this.may1VezD3.length;
  this.maySubs2534Total       = this.maySubs2534.length;
  this.may1vez3564Total       = this.may1vez3564.length;
  this.maySubs3564Total       = this.maySubs3564.length;
  this.may1vezd3menor25Total  = this.may1vezD3menor25.length;
  this.may1vezd3d3564Total    = this.may1vezd3d3564.length;
  this.maymayores64Total      = this.maymayores64.length;


  //obtener unidadFiltrada por mes y deacuerdo a reportes mensuales junio

  this.jun1Vez25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.jun && data.edad < this.valor1 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.junSubs25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.jun && data.edad < this.valor1 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });
  this.jun1Vez2534 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.jun && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.jun1VezD3 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.jun && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.segunda  ){
      return data
      
    }
  });
  this.junSubs2534 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.jun && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });
  this.jun1vez3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.jun && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.junSubs3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.jun && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });

  
  this.jun1vezD3menor25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.jun && data.edad < this.valor1  && data.citologia ==  this.tipoCito.segunda  ){
      return data
      
    }
  });
 


  this.jun1vezd3d3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.jun && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia == this.tipoCito.segunda){
      return data
    }
  });


   ////////////////mayores a 64
   this.junmayores64 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.jun && data.edad > this.valor3){
      return data;
    } 
  })
  


  this.jun1Vez25Total         = this.jun1Vez25.length;
  this.junSubs25Total         = this.junSubs25.length;
  this.jun1Vez2534Total       = this.jun1Vez2534.length;
  this.jun1VezD3Total         = this.jun1VezD3.length;
  this.junSubs2534Total       = this.junSubs2534.length;
  this.jun1vez3564Total       = this.jun1vez3564.length;
  this.junSubs3564Total       = this.junSubs3564.length;
  this.jun1vezd3menor25Total  = this.jun1vezD3menor25.length;
  this.jun1vezd3d3564Total    = this.jun1vezd3d3564.length;
  this.junmayores64Total      = this.junmayores64.length;


  //obtener unidadFiltrada por mes y deacuerdo a reportes mensuales julio

  this.jul1Vez25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.jul && data.edad < this.valor1 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.julSubs25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.jul && data.edad < this.valor1 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });
  this.jul1Vez2534 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.jul && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.jul1VezD3 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.jul && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.segunda  ){
      return data
      
    }
  });
  this.julSubs2534 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.jul && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });
  this.jul1vez3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.jul && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.julSubs3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.jul && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });

  
  this.jul1vezD3menor25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.jul && data.edad < this.valor1  && data.citologia ==  this.tipoCito.segunda  ){
      return data
      
    }
  });
 


  this.jul1vezd3d3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.jul && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia == this.tipoCito.segunda){
      return data
    }
  });


   ////////////////mayores a 64
   this.julmayores64 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.jul && data.edad > this.valor3){
      return data;
    } 
  })
  


  this.jul1Vez25Total         = this.jul1Vez25.length;
  this.julSubs25Total         = this.julSubs25.length;
  this.jul1Vez2534Total       = this.jul1Vez2534.length;
  this.jul1VezD3Total         = this.jul1VezD3.length;
  this.julSubs2534Total       = this.julSubs2534.length;
  this.jul1vez3564Total       = this.jul1vez3564.length;
  this.julSubs3564Total       = this.julSubs3564.length;
  this.jul1vezd3menor25Total  = this.jul1vezD3menor25.length;
  this.jul1vezd3d3564Total    = this.jul1vezd3d3564.length;
  this.julmayores64Total      = this.julmayores64.length;

  //obtener unidadFiltrada por mes y deacuerdo a reportes mensuales agosto

  this.ago1Vez25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.ago && data.edad < this.valor1 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.agoSubs25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.ago && data.edad < this.valor1 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });
  this.ago1Vez2534 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.ago && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.ago1VezD3 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.ago && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.segunda  ){
      return data
      
    }
  });
  this.agoSubs2534 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.ago && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });
  this.ago1vez3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.ago && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.agoSubs3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.ago && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });

  
  this.ago1vezD3menor25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.ago && data.edad < this.valor1  && data.citologia ==  this.tipoCito.segunda  ){
      return data
      
    }
  });
 


  this.ago1vezd3d3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.ago && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia == this.tipoCito.segunda){
      return data
    }
  });


   ////////////////mayores a 64
   this.agomayores64 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.ago && data.edad > this.valor3){
      return data;
    } 
  })
  


  this.ago1Vez25Total         = this.ago1Vez25.length;
  this.agoSubs25Total         = this.agoSubs25.length;
  this.ago1Vez2534Total       = this.ago1Vez2534.length;
  this.ago1VezD3Total         = this.ago1VezD3.length;
  this.agoSubs2534Total       = this.agoSubs2534.length;
  this.ago1vez3564Total       = this.ago1vez3564.length;
  this.agoSubs3564Total       = this.agoSubs3564.length;
  this.ago1vezd3menor25Total  = this.ago1vezD3menor25.length;
  this.ago1vezd3d3564Total    = this.ago1vezd3d3564.length;
  this.agomayores64Total      = this.agomayores64.length;


  //obtener unidadFiltrada por mes y deacuerdo a reportes mensuales septiembre

  this.sep1Vez25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.sep && data.edad < this.valor1 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.sepSubs25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.sep && data.edad < this.valor1 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });
  this.sep1Vez2534 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.sep && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.sep1VezD3 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.sep && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.segunda  ){
      return data
      
    }
  });
  this.sepSubs2534 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.sep && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });
  this.sep1vez3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.sep && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.sepSubs3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.sep && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });

  
  this.sep1vezD3menor25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.sep && data.edad < this.valor1  && data.citologia ==  this.tipoCito.segunda  ){
      return data
      
    }
  });
 


  this.sep1vezd3d3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.sep && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia == this.tipoCito.segunda){
      return data
    }
  });


   ////////////////mayores a 64
   this.sepmayores64 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.sep && data.edad > this.valor3){
      return data;
    } 
  })
  


  this.sep1Vez25Total         = this.sep1Vez25.length;
  this.sepSubs25Total         = this.sepSubs25.length;
  this.sep1Vez2534Total       = this.sep1Vez2534.length;
  this.sep1VezD3Total         = this.sep1VezD3.length;
  this.sepSubs2534Total       = this.sepSubs2534.length;
  this.sep1vez3564Total       = this.sep1vez3564.length;
  this.sepSubs3564Total       = this.sepSubs3564.length;
  this.sep1vezd3menor25Total  = this.sep1vezD3menor25.length;
  this.sep1vezd3d3564Total    = this.sep1vezd3d3564.length;
  this.sepmayores64Total      = this.sepmayores64.length;

  //obtener unidadFiltrada por mes y deacuerdo a reportes mensuales octubre

  this.oct1Vez25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.oct && data.edad < this.valor1 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.octSubs25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.oct && data.edad < this.valor1 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });
  this.oct1Vez2534 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.oct && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.oct1VezD3 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.oct && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.segunda  ){
      return data
      
    }
  });
  this.octSubs2534 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.oct && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });
  this.oct1vez3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.oct && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.octSubs3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.oct && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });

  
  this.oct1vezD3menor25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.oct && data.edad < this.valor1  && data.citologia ==  this.tipoCito.segunda  ){
      return data
      
    }
  });
 


  this.oct1vezd3d3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.oct && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia == this.tipoCito.segunda){
      return data
    }
  });


   ////////////////mayores a 64
   this.octmayores64 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.oct && data.edad > this.valor3){
      return data;
    } 
  })
  


  this.oct1Vez25Total         = this.oct1Vez25.length;
  this.octSubs25Total         = this.octSubs25.length;
  this.oct1Vez2534Total       = this.oct1Vez2534.length;
  this.oct1VezD3Total         = this.oct1VezD3.length;
  this.octSubs2534Total       = this.octSubs2534.length;
  this.oct1vez3564Total       = this.oct1vez3564.length;
  this.octSubs3564Total       = this.octSubs3564.length;
  this.oct1vezd3menor25Total  = this.oct1vezD3menor25.length;
  this.oct1vezd3d3564Total    = this.oct1vezd3d3564.length;
  this.octmayores64Total      = this.octmayores64.length;


  //obtener unidadFiltrada por mes y deacuerdo a reportes mensuales noviembre

  this.nov1Vez25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.nov && data.edad < this.valor1 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.novSubs25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.nov && data.edad < this.valor1 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });
  this.nov1Vez2534 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.nov && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.nov1VezD3 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.nov && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.segunda  ){
      return data
      
    }
  });
  this.novSubs2534 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.nov && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });
  this.nov1vez3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.nov && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.novSubs3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.nov && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });

  
  this.nov1vezD3menor25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.nov && data.edad < this.valor1  && data.citologia ==  this.tipoCito.segunda  ){
      return data
      
    }
  });
 


  this.nov1vezd3d3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.nov && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia == this.tipoCito.segunda){
      return data
    }
  });


   ////////////////mayores a 64
   this.novmayores64 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.nov && data.edad > this.valor3){
      return data;
    } 
  })
  


  this.nov1Vez25Total         = this.nov1Vez25.length;
  this.novSubs25Total         = this.novSubs25.length;
  this.nov1Vez2534Total       = this.nov1Vez2534.length;
  this.nov1VezD3Total         = this.nov1VezD3.length;
  this.novSubs2534Total       = this.novSubs2534.length;
  this.nov1vez3564Total       = this.nov1vez3564.length;
  this.novSubs3564Total       = this.novSubs3564.length;
  this.nov1vezd3menor25Total  = this.nov1vezD3menor25.length;
  this.nov1vezd3d3564Total    = this.nov1vezd3d3564.length;
  this.novmayores64Total      = this.novmayores64.length;


  //obtener unidadFiltrada por mes y deacuerdo a reportes mensuales diciembre

  this.dic1Vez25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.dic && data.edad < this.valor1 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.dicSubs25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.dic && data.edad < this.valor1 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });
  this.dic1Vez2534 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.dic && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.dic1VezD3 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.dic && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.segunda  ){
      return data
      
    }
  });
  this.dicSubs2534 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.dic && data.edad >= this.valor1 && data.edad <= this.valor2 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });
  this.dic1vez3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.dic && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia ==  this.tipoCito.primera  ){
      return data
      
    }
  });
  this.dicSubs3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.dic && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia ==  this.tipoCito.subsecuente  ){
      return data
      
    }
  });

  
  this.dic1vezD3menor25 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.dic && data.edad < this.valor1  && data.citologia ==  this.tipoCito.segunda  ){
      return data
      
    }
  });
 


  this.dic1vezd3d3564 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.dic && data.edad > this.valor2 && data.edad <= this.valor3 && data.citologia == this.tipoCito.segunda){
      return data
    }
  });


   ////////////////mayores a 64
   this.dicmayores64 = this.unidadFiltrada.filter((data:any)=>{
    if(data.mes == this.dic && data.edad > this.valor3){
      return data;
    } 
  })
  


  this.dic1Vez25Total         = this.dic1Vez25.length;
  this.dicSubs25Total         = this.dicSubs25.length;
  this.dic1Vez2534Total       = this.dic1Vez2534.length;
  this.dic1VezD3Total         = this.dic1VezD3.length;
  this.dicSubs2534Total       = this.dicSubs2534.length;
  this.dic1vez3564Total       = this.dic1vez3564.length;
  this.dicSubs3564Total       = this.dicSubs3564.length;
  this.dic1vezd3menor25Total  = this.dic1vezD3menor25.length;
  this.dic1vezd3d3564Total    = this.dic1vezd3d3564.length;
  this.dicmayores64Total      = this.dicmayores64.length;










/////////////////////TERMINAN INDICADORES X MES ///////////////



                  if(!this.datos)
                  {
                    console.log("Error en el Servidor")
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

  indiSelected(event:any){

    this.eventSelected = (event.detail.value);

    //WORKS WORKS espacio al empezar y al terminar " 4 "

    switch(this.eventSelected){

      case ' Default ' :
        this.indiEne = false;
        this.indiFeb = false;
        this.indiMar = false;
        this.indiAbr = false;
        this.indiMay = false;
        this.indiJun = false;
        this.indiJul = false;
        this.indiAgo = false;
        this.indiSep = false;
        this.indiOct = false;
        this.indiNov = false;
        this.indiDic = false;
      break;


      case ' Enero ' :
        this.indiEne = true;
        this.indiFeb = false;
        this.indiMar = false;
        this.indiAbr = false;
        this.indiMay = false;
        this.indiJun = false;
        this.indiJul = false;
        this.indiAgo = false;
        this.indiSep = false;
        this.indiOct = false;
        this.indiNov = false;
        this.indiDic = false;
        break;
      case ' Febrero ' :
        this.indiFeb = true;
        this.indiEne = false;
        this.indiMar = false;
        this.indiAbr = false;
        this.indiMay = false;
        this.indiJun = false;
        this.indiJul = false;
        this.indiAgo = false;
        this.indiSep = false;
        this.indiOct = false;
        this.indiNov = false;
        this.indiDic = false;
        break;
      case ' Marzo ' :
        this.indiMar = true;
        this.indiEne = false;
        this.indiFeb = false;
        this.indiAbr = false;
        this.indiMay = false;
        this.indiJun = false;
        this.indiJul = false;
        this.indiAgo = false;
        this.indiSep = false;
        this.indiOct = false;
        this.indiNov = false;
        this.indiDic = false;
        break;
      case ' Abril ' :
        this.indiAbr = true
        this.indiMar = false;
        this.indiEne = false;
        this.indiFeb = false;
        this.indiMay = false;
        this.indiJun = false;
        this.indiJul = false;
        this.indiAgo = false;
        this.indiSep = false;
        this.indiOct = false;
        this.indiNov = false;
        this.indiDic = false;
        break;  
      case ' Mayo ' :
        this.indiMay = true;
        this.indiAbr = false;
        this.indiMar = false;
        this.indiEne = false;
        this.indiFeb = false;
        this.indiJun = false;
        this.indiJul = false;
        this.indiAgo = false;
        this.indiSep = false;
        this.indiOct = false;
        this.indiNov = false;
        this.indiDic = false;
        break;  
      case ' Junio ' :
        this.indiJun = true
        this.indiAbr = false;
        this.indiMar = false;
        this.indiEne = false;
        this.indiFeb = false;
        this.indiMay = false;
        this.indiJul = false;
        this.indiAgo = false;
        this.indiSep = false;
        this.indiOct = false;
        this.indiNov = false;
        this.indiDic = false;
        break;  
      case ' Julio ' :
        this.indiJul = true;
        this.indiAbr = false;
        this.indiMar = false;
        this.indiEne = false;
        this.indiFeb = false;
        this.indiMay = false;
        this.indiJun = false;
        this.indiAgo = false;
        this.indiSep = false;
        this.indiOct = false;
        this.indiNov = false;
        this.indiDic = false;
        break;  
      case ' Agosto ' :
        this.indiAgo = true
        this.indiAbr = false;
        this.indiMar = false;
        this.indiEne = false;
        this.indiFeb = false;
        this.indiMay = false;
        this.indiJun = false;
        this.indiJul = false;
        this.indiSep = false;
        this.indiOct = false;
        this.indiNov = false;
        this.indiDic = false;
        break;  
      case ' Septiembre ' :
        this.indiSep = true;
        this.indiAbr = false;
        this.indiMar = false;
        this.indiEne = false;
        this.indiFeb = false;
        this.indiMay = false;
        this.indiJun = false;
        this.indiJul = false;
        this.indiAgo = false;
        this.indiOct = false;
        this.indiNov = false;
        this.indiDic = false;
        break;  
      case ' Octubre ' :
        this.indiOct = true;
        this.indiAbr = false;
        this.indiMar = false;
        this.indiEne = false;
        this.indiFeb = false;
        this.indiMay = false;
        this.indiJun = false;
        this.indiJul = false;
        this.indiAgo = false;
        this.indiSep = false;
        this.indiNov = false;
        this.indiDic = false;
        break; 
      case ' Noviembre ' :
        this.indiNov = true
        this.indiAbr = false
        this.indiMar = false;
        this.indiEne = false;
        this.indiFeb = false;
        this.indiMay = false;
        this.indiJun = false;
        this.indiJul = false;
        this.indiAgo = false;
        this.indiSep = false;
        this.indiOct = false;
        this.indiDic = false;
        break;
      case ' Diciembre ' :
        this.indiDic = true
        this.indiAbr = false;
        this.indiMar = false;
        this.indiEne = false;
        this.indiFeb = false;
        this.indiMay = false;
        this.indiJun = false;
        this.indiJul = false;
        this.indiAgo = false;
        this.indiSep = false;
        this.indiOct = false;
        this.indiNov = false;
        break;    

        
    }
  

       
  }


  //se hizo solo par aobtener la meta de la unidad seleccionada
  getcitometaBackend(){
    this._dataService.getCitoByUnidad(this.id).subscribe(
      response => {
        if(response.status = 'success'){
          this.metabackend = response.infoxunidad;
          //console.log(this.metabackend);
       
        
          
          
        }
      },
      error => {
        console.log(<any>error);
        console.log(error.error.meessage);

        
        
      }
    );
  }
}
