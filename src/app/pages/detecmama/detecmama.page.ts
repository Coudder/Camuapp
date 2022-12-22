import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import SwiperCore, {Pagination, EffectCoverflow} from 'swiper';

import { DataService } from '../../services/data.service';
import { AdminService } from '../../services/admin.service';

SwiperCore.use([Pagination,EffectCoverflow]);

@Component({
  selector: 'app-detecmama',
  templateUrl: './detecmama.page.html',
  styleUrls: ['./detecmama.page.scss'],
  providers: [DataService,AdminService]
})
export class DetecmamaPage implements OnInit {

  public swiperConfig: SwiperOptions = {
    pagination: true,
    //slidesPerView: 'auto',
    effect: 'coverflow',  
};

  public title:string;
  public identity;
  public token;
  public id:any;
  public mensaje:any
  public loading:boolean;

  public numDet:any;
  public numFilas:any;
  public celda:any;
  public fila:any;
  public datos:any =[];
  public unidadFiltrada:any
  public campos:any=[];
  //DATA PARA METAS
  public metaDet:any;
  public totalTomas:any;
  public metaDetshow:any
  public valor1:any
  public valor2:any

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

  public det4069:any;
  public det4069Total:any;
  public valor3:any;
  public valor4:any;

  //new indidcador menores a 25 y mayores a 69
  public men25:any;
  public totalMen25:any;
  public mayor69:any;
  public totalMayor69:any;
  public eneDet:any
  public enedetTotal:any;
  public febDet:any
  public febdetTotal:any;
  public marDet:any
  public mardetTotal:any;
  public abrDet:any
  public abrdetTotal:any;
  public mayDet:any
  public maydetTotal:any;
  public junDet:any
  public jundetTotal:any;
  public julDet:any
  public juldetTotal:any;
  public agoDet:any
  public agodetTotal:any;
  public sepDet:any
  public sepdetTotal:any;
  public octDet:any
  public octdetTotal:any;
  public novDet:any
  public novdetTotal:any;
  public dicDet:any
  public dicdetTotal:any;

  public edadMasto:any;
  public toMasto:any;
  public detRutina:any;
  public detrutinaShow:any;
  public detMasto:any;
  public detmastoShow:any;
  public detUsm:any;
  public detusmShow:any;

  public detConducta = {
    rutina   : '1. Detección de rutina en un año',
    refMasto : '2. Mastografía de tamizaje',
    refUsm   : '3. Referencia a evaluación con imagen complementaria ( Masto. diagnóstica o USG)'
  }

   //reportes mensuales
   public ene2539:any
   public ene4069:any
   public ene2539Total:any
   public ene4069Total:any
 
   public feb2539:any
   public feb4069:any
   public feb2539Total:any
   public feb4069Total:any
 
   public mar2539:any
   public mar4069:any
   public mar2539Total:any
   public mar4069Total:any
 
   public abr2539:any
   public abr4069:any
   public abr2539Total:any
   public abr4069Total:any
 
   public may2539:any
   public may4069:any
   public may2539Total:any
   public may4069Total:any
 
   public jun2539:any
   public jun4069:any
   public jun2539Total:any
   public jun4069Total:any
 
   public jul2539:any
   public jul4069:any
   public jul2539Total:any
   public jul4069Total:any
 
   public ago2539:any
   public ago4069:any
   public ago2539Total:any
   public ago4069Total:any
 
   public sep2539:any
   public sep4069:any
   public sep2539Total:any
   public sep4069Total:any
 
   public oct2539:any
   public oct4069:any
   public oct2539Total:any
   public oct4069Total:any
 
   public nov2539:any
   public nov4069:any
   public nov2539Total:any
   public nov4069Total:any
 
   public dic2539:any
   public dic4069:any
   public dic2539Total:any
   public dic4069Total:any
 
   public enedetAnormal:any
   public enedetanormalTotal:any
 
   public febdetAnormal:any
   public febdetanormalTotal:any
 
   public mardetAnormal:any
   public mardetanormalTotal:any
 
   public abrdetAnormal:any
   public abrdetanormalTotal:any
 
   public maydetAnormal:any
   public maydetanormalTotal:any
 
   public jundetAnormal:any
   public jundetanormalTotal:any
 
   public juldetAnormal:any
   public juldetanormalTotal:any
 
   public agodetAnormal:any
   public agodetanormalTotal:any
 
   public sepdetAnormal:any
   public sepdetanormalTotal:any
 
   public octdetAnormal:any
   public octdetanormalTotal:any
 
   public novdetAnormal:any
   public novdetanormalTotal:any
 
   public dicdetAnormal:any
   public dicdetanormalTotal:any
 
   //new 09/01/2022
 
   public eneMenor25:any;
   public enemenorTotal25:any;
   public eneMayor69:any;
   public enemayorTotal69:any;
 
   public febMenor25:any;
   public febmenorTotal25:any;
   public febMayor69:any;
   public febmayorTotal69:any;
 
   public marMenor25:any;
   public marmenorTotal25:any;
   public marMayor69:any;
   public marmayorTotal69:any;
 
   public abrMenor25:any;
   public abrmenorTotal25:any;
   public abrMayor69:any;
   public abrmayorTotal69:any;
 
   public mayMenor25:any;
   public maymenorTotal25:any;
   public mayMayor69:any;
   public maymayorTotal69:any;
 
   public junMenor25:any;
   public junmenorTotal25:any;
   public junMayor69:any;
   public junmayorTotal69:any;
 
   public julMenor25:any;
   public julmenorTotal25:any;
   public julMayor69:any;
   public julmayorTotal69:any;
 
   public agoMenor25:any;
   public agomenorTotal25:any;
   public agoMayor69:any;
   public agomayorTotal69:any;
 
   public sepMenor25:any;
   public sepmenorTotal25:any;
   public sepMayor69:any;
   public sepmayorTotal69:any;
 
   public octMenor25:any;
   public octmenorTotal25:any;
   public octMayor69:any;
   public octmayorTotal69:any;
 
   public novMenor25:any;
   public novmenorTotal25:any;
   public novMayor69:any;
   public novmayorTotal69:any;
 
   public dicMenor25:any;
   public dicmenorTotal25:any;
   public dicMayor69:any;
   public dicmayorTotal69:any;

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



  constructor(
    private _dataService:DataService,
    private _adminService:AdminService
  ) 
  
  {
    this.title = 'EXPL. MAMA'
    this.token = this._adminService.getToken();
    this.identity = this._adminService.getIdentity();
    this.loading = true;

    this.valor1 = 25;
    this.valor2 = 39;
    this.valor3 = 40;
    this.valor4 = 69;

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
    this.getdetData();
  }

  getdetData(){
    this._dataService.getdetmamaData().subscribe(
      response =>{
        let entries = response.values;
        let numFilas = entries.length;
      //  console.log('Numero de Filas:' + numFilas);

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
         // console.log(this.datos); 
         this.numDet = this.datos.length;

          //INDICADORES GENERALES DE DET FDE MAMMA
        this.metaDet = this.datos.filter((meta:any)=>{
          if(meta.edad >= this.valor1 && meta.edad <= this.valor2)
          {
            return meta
       
          }
        });
        this.metaDetshow = this.metaDet.length;

        this.edadMasto = this.datos.filter((data:any)=>{
          if(data.edad >= this.valor3 && data.edad <= this.valor4){
            return data
          }
        });

        this.detRutina = this.datos.filter((data:any)=>{
          if(data.conducta == this.detConducta.rutina){
            return data
          }
        });

        this.detMasto = this.datos.filter((data:any)=>{
          if(data.conducta == this.detConducta.refMasto){
            return data
          }
        });

        this.detUsm = this.datos.filter((data:any)=>{
          if(data.conducta == this.detConducta.refUsm){
            return data
          }
        });

        this.men25 = this.datos.filter((data:any)=>{
          if(data.edad < this.valor1){
            return data
          }
        });
        this.totalMen25 = this.men25.length;

        this.mayor69 = this.datos.filter((data:any)=>{
          if(data.edad > this.valor4){
            return data;
          }
        });
        this.totalMayor69 = this.mayor69.length


         //reportes por meses
         this.ene2539 = this.datos.filter((data:any)=>{
          if(data.mes == this.ene && data.edad >= this.valor1 && data.edad <= this.valor2 ){
            return data
          }
        });
        this.ene4069 = this.datos.filter((data:any)=>{
          if(data.mes == this.ene && data.edad >= this.valor3 && data.edad <= this.valor4 ){
            return data
          }
        });

        this.ene2539Total = this.ene2539.length;
        this.ene4069Total = this.ene4069.length;

        //reportes por meses
        this.feb2539 = this.datos.filter((data:any)=>{
          if(data.mes == this.feb && data.edad >= this.valor1 && data.edad <= this.valor2 ){
            return data
          }
        });
        this.feb4069 = this.datos.filter((data:any)=>{
          if(data.mes == this.feb && data.edad >= this.valor3 && data.edad <= this.valor4 ){
            return data
          }
        });

        this.feb2539Total = this.feb2539.length;
        this.feb4069Total = this.feb4069.length;
         //reportes por meses marzo
         this.mar2539 = this.datos.filter((data:any)=>{
          if(data.mes == this.mar && data.edad >= this.valor1 && data.edad <= this.valor2 ){
            return data
          }
        });
        this.mar4069 = this.datos.filter((data:any)=>{
          if(data.mes == this.mar && data.edad >= this.valor3 && data.edad <= this.valor4 ){
            return data
          }
        });

        this.mar2539Total = this.mar2539.length;
        this.mar4069Total = this.mar4069.length;

         //reportes por meses
         this.abr2539 = this.datos.filter((data:any)=>{
          if(data.mes == this.abr && data.edad >= this.valor1 && data.edad <= this.valor2 ){
            return data
          }
        });
        this.abr4069 = this.datos.filter((data:any)=>{
          if(data.mes == this.abr && data.edad >= this.valor3 && data.edad <= this.valor4 ){
            return data
          }
        });

        this.abr2539Total = this.abr2539.length;
        this.abr4069Total = this.abr4069.length;

         //reportes por meses
         this.may2539 = this.datos.filter((data:any)=>{
          if(data.mes == this.may && data.edad >= this.valor1 && data.edad <= this.valor2 ){
            return data
          }
        });
        this.may4069 = this.datos.filter((data:any)=>{
          if(data.mes == this.may && data.edad >= this.valor3 && data.edad <= this.valor4 ){
            return data
          }
        });

        this.may2539Total = this.may2539.length;
        this.may4069Total = this.may4069.length;

         //reportes por meses
         this.jun2539 = this.datos.filter((data:any)=>{
          if(data.mes == this.jun && data.edad >= this.valor1 && data.edad <= this.valor2 ){
            return data
          }
        });
        this.jun4069 = this.datos.filter((data:any)=>{
          if(data.mes == this.jun && data.edad >= this.valor3 && data.edad <= this.valor4 ){
            return data
          }
        });

        this.jun2539Total = this.jun2539.length;
        this.jun4069Total = this.jun4069.length;

         //reportes por meses
         this.jul2539 = this.datos.filter((data:any)=>{
          if(data.mes == this.jul && data.edad >= this.valor1 && data.edad <= this.valor2 ){
            return data
          }
        });
        this.jul4069 = this.datos.filter((data:any)=>{
          if(data.mes == this.jul && data.edad >= this.valor3 && data.edad <= this.valor4 ){
            return data
          }
        });

        this.jul2539Total = this.jul2539.length;
        this.jul4069Total = this.jul4069.length;

         //reportes por meses
         this.ago2539 = this.datos.filter((data:any)=>{
          if(data.mes == this.ago && data.edad >= this.valor1 && data.edad <= this.valor2 ){
            return data
          }
        });
        this.ago4069 = this.datos.filter((data:any)=>{
          if(data.mes == this.ago && data.edad >= this.valor3 && data.edad <= this.valor4 ){
            return data
          }
        });

        this.ago2539Total = this.ago2539.length;
        this.ago4069Total = this.ago4069.length;

         //reportes por meses
         this.sep2539 = this.datos.filter((data:any)=>{
          if(data.mes == this.sep && data.edad >= this.valor1 && data.edad <= this.valor2 ){
            return data
          }
        });
        this.sep4069 = this.datos.filter((data:any)=>{
          if(data.mes == this.sep && data.edad >= this.valor3 && data.edad <= this.valor4 ){
            return data
          }
        });

        this.sep2539Total = this.sep2539.length;
        this.sep4069Total = this.sep4069.length;

         //reportes por meses
         this.oct2539 = this.datos.filter((data:any)=>{
          if(data.mes == this.oct && data.edad >= this.valor1 && data.edad <= this.valor2 ){
            return data
          }
        });
        this.oct4069 = this.datos.filter((data:any)=>{
          if(data.mes == this.oct && data.edad >= this.valor3 && data.edad <= this.valor4 ){
            return data
          }
        });

        this.oct2539Total = this.oct2539.length;
        this.oct4069Total = this.oct4069.length;

         //reportes por meses
         this.nov2539 = this.datos.filter((data:any)=>{
          if(data.mes == this.nov && data.edad >= this.valor1 && data.edad <= this.valor2 ){
            return data
          }
        });
        this.nov4069 = this.datos.filter((data:any)=>{
          if(data.mes == this.nov && data.edad >= this.valor3 && data.edad <= this.valor4 ){
            return data
          }
        });

        this.nov2539Total = this.nov2539.length;
        this.nov4069Total = this.nov4069.length;

         //reportes por meses
         this.dic2539 = this.datos.filter((data:any)=>{
          if(data.mes == this.dic && data.edad >= this.valor1 && data.edad <= this.valor2 ){
            return data
          }
        });
        this.dic4069 = this.datos.filter((data:any)=>{
          if(data.mes == this.dic && data.edad >= this.valor3 && data.edad <= this.valor4 ){
            return data
          }
        });

        this.dic2539Total = this.dic2539.length;
        this.dic4069Total = this.dic4069.length;

         //anormales por mes todas edades
         this.enedetAnormal = this.datos.filter((data:any)=>{
          if(data.mes == this.ene && data.conducta == this.detConducta.refUsm){
            return data
          }
        });

        this.enedetanormalTotal = this.enedetAnormal.length;
         //anormales por mes todas edades
         this.febdetAnormal = this.datos.filter((data:any)=>{
          if(data.mes == this.feb && data.conducta == this.detConducta.refUsm){
            return data
          }
        });

        this.febdetanormalTotal = this.febdetAnormal.length;
         //anormales por mes todas edades
         this.mardetAnormal = this.datos.filter((data:any)=>{
          if(data.mes == this.mar && data.conducta == this.detConducta.refUsm){
            return data
          }
        });

        this.mardetanormalTotal = this.mardetAnormal.length;
         //anormales por mes todas edades
         this.abrdetAnormal = this.datos.filter((data:any)=>{
          if(data.mes == this.abr && data.conducta == this.detConducta.refUsm){
            return data
          }
        });

        this.abrdetanormalTotal = this.abrdetAnormal.length;
         //anormales por mes todas edades
         this.maydetAnormal = this.datos.filter((data:any)=>{
          if(data.mes == this.may && data.conducta == this.detConducta.refUsm){
            return data
          }
        });

        this.maydetanormalTotal = this.maydetAnormal.length;
         //anormales por mes todas edades
         this.jundetAnormal = this.datos.filter((data:any)=>{
          if(data.mes == this.jun && data.conducta == this.detConducta.refUsm){
            return data
          }
        });

        this.jundetanormalTotal = this.jundetAnormal.length;
         //anormales por mes todas edades
         this.juldetAnormal = this.datos.filter((data:any)=>{
          if(data.mes == this.jul && data.conducta == this.detConducta.refUsm){
            return data
          }
        });

        this.juldetanormalTotal = this.juldetAnormal.length;
         //anormales por mes todas edades
         this.agodetAnormal = this.datos.filter((data:any)=>{
          if(data.mes == this.ago && data.conducta == this.detConducta.refUsm){
            return data
          }
        });

        this.agodetanormalTotal = this.agodetAnormal.length;
         //anormales por mes todas edades
         this.sepdetAnormal = this.datos.filter((data:any)=>{
          if(data.mes == this.sep && data.conducta == this.detConducta.refUsm){
            return data
          }
        });

        this.sepdetanormalTotal = this.sepdetAnormal.length;
         //anormales por mes todas edades
         this.octdetAnormal = this.datos.filter((data:any)=>{
          if(data.mes == this.oct && data.conducta == this.detConducta.refUsm){
            return data
          }
        });

        this.octdetanormalTotal = this.octdetAnormal.length;
         //anormales por mes todas edades
         this.novdetAnormal = this.datos.filter((data:any)=>{
          if(data.mes == this.nov && data.conducta == this.detConducta.refUsm){
            return data
          }
        });

        this.novdetanormalTotal = this.novdetAnormal.length;
         //anormales por mes todas edades
         this.dicdetAnormal = this.datos.filter((data:any)=>{
          if(data.mes == this.dic && data.conducta == this.detConducta.refUsm){
            return data
          }
        });

        this.dicdetanormalTotal = this.dicdetAnormal.length;

        //new data info 09/01/2022
        this.eneMenor25 = this.datos.filter((data:any)=>{
          if(data.mes == this.ene && data.edad < this.valor1){
            return data;
          }
        });
        this.enemenorTotal25 = this.eneMenor25.length;

        this.febMenor25 = this.datos.filter((data:any)=>{
          if(data.mes == this.feb && data.edad < this.valor1){
            return data;
          }
        });
        this.febmenorTotal25 = this.febMenor25.length;

        this.marMenor25 = this.datos.filter((data:any)=>{
          if(data.mes == this.mar && data.edad < this.valor1){
            return data;
          }
        });
        this.marmenorTotal25 = this.marMenor25.length;

        this.abrMenor25 = this.datos.filter((data:any)=>{
          if(data.mes == this.abr && data.edad < this.valor1){
            return data;
          }
        });
        this.abrmenorTotal25 = this.abrMenor25.length;

        this.mayMenor25 = this.datos.filter((data:any)=>{
          if(data.mes == this.may && data.edad < this.valor1){
            return data;
          }
        });
        this.maymenorTotal25 = this.mayMenor25.length;

        this.junMenor25 = this.datos.filter((data:any)=>{
          if(data.mes == this.jun && data.edad < this.valor1){
            return data;
          }
        });
        this.junmenorTotal25 = this.junMenor25.length;

        this.julMenor25 = this.datos.filter((data:any)=>{
          if(data.mes == this.jul && data.edad < this.valor1){
            return data;
          }
        });
        this.julmenorTotal25 = this.julMenor25.length;

        this.agoMenor25 = this.datos.filter((data:any)=>{
          if(data.mes == this.ago && data.edad < this.valor1){
            return data;
          }
        });
        this.agomenorTotal25 = this.agoMenor25.length;

        this.sepMenor25 = this.datos.filter((data:any)=>{
          if(data.mes == this.sep && data.edad < this.valor1){
            return data;
          }
        });
        this.sepmenorTotal25 = this.sepMenor25.length;

        this.octMenor25 = this.datos.filter((data:any)=>{
          if(data.mes == this.oct && data.edad < this.valor1){
            return data;
          }
        });
        this.octmenorTotal25 = this.octMenor25.length;

        this.novMenor25 = this.datos.filter((data:any)=>{
          if(data.mes == this.nov && data.edad < this.valor1){
            return data;
          }
        });
        this.novmenorTotal25 = this.novMenor25.length;

        this.dicMenor25 = this.datos.filter((data:any)=>{
          if(data.mes == this.dic && data.edad < this.valor1){
            return data;
          }
        });
        this.dicmenorTotal25 = this.dicMenor25.length;

        //mayores a 69
        this.eneMayor69 = this.datos.filter((data:any)=>{
          if(data.mes == this.ene && data.edad > this.valor4){
            return data;
          }
        });
        this.enemayorTotal69 = this.eneMayor69.length;

        this.febMayor69 = this.datos.filter((data:any)=>{
          if(data.mes == this.feb && data.edad > this.valor4){
            return data;
          }
        });
        this.febmayorTotal69 = this.febMayor69.length;

        this.marMayor69 = this.datos.filter((data:any)=>{
          if(data.mes == this.mar && data.edad > this.valor4){
            return data;
          }
        });
        this.marmayorTotal69 = this.marMayor69.length;

        this.abrMayor69 = this.datos.filter((data:any)=>{
          if(data.mes == this.abr && data.edad > this.valor4){
            return data;
          }
        });
        this.abrmayorTotal69 = this.abrMayor69.length;

        this.mayMayor69 = this.datos.filter((data:any)=>{
          if(data.mes == this.may && data.edad > this.valor4){
            return data;
          }
        });
        this.maymayorTotal69 = this.mayMayor69.length;

        this.junMayor69 = this.datos.filter((data:any)=>{
          if(data.mes == this.jun && data.edad > this.valor4){
            return data;
          }
        });
        this.junmayorTotal69 = this.junMayor69.length;

        this.julMayor69 = this.datos.filter((data:any)=>{
          if(data.mes == this.jul && data.edad > this.valor4){
            return data;
          }
        });
        this.julmayorTotal69 = this.julMayor69.length;

        this.agoMayor69 = this.datos.filter((data:any)=>{
          if(data.mes == this.ago && data.edad > this.valor4){
            return data;
          }
        });
        this.agomayorTotal69 = this.agoMayor69.length;

        this.sepMayor69 = this.datos.filter((data:any)=>{
          if(data.mes == this.sep && data.edad > this.valor4){
            return data;
          }
        });
        this.sepmayorTotal69 = this.sepMayor69.length;

        this.octMayor69 = this.datos.filter((data:any)=>{
          if(data.mes == this.oct && data.edad > this.valor4){
            return data;
          }
        });
        this.octmayorTotal69 = this.octMayor69.length;

        this.novMayor69 = this.datos.filter((data:any)=>{
          if(data.mes == this.nov && data.edad > this.valor4){
            return data;
          }
        });
        this.novmayorTotal69 = this.novMayor69.length;

        this.dicMayor69 = this.datos.filter((data:any)=>{
          if(data.mes == this.dic && data.edad > this.valor4){
            return data;
          }
        });
        this.dicmayorTotal69 = this.dicMayor69.length;

        //tTOTALES DETECCIONES POR MES

        this.eneDet = this.datos.filter((data:any)=>{
          if(data.mes == this.ene){
            return data;
          }
        });
        this.enedetTotal = this.eneDet.length;

        this.febDet = this.datos.filter((data:any)=>{
          if(data.mes == this.feb){
            return data;
          }
        });
        this.febdetTotal = this.febDet.length;

        this.marDet = this.datos.filter((data:any)=>{
          if(data.mes == this.mar){
            return data;
          }
        });
        this.mardetTotal = this.marDet.length;

        this.abrDet = this.datos.filter((data:any)=>{
          if(data.mes == this.abr){
            return data;
          }
        });
        this.abrdetTotal = this.abrDet.length;

        this.mayDet = this.datos.filter((data:any)=>{
          if(data.mes == this.may){
            return data;
          }
        });
        this.maydetTotal = this.mayDet.length;

        this.junDet = this.datos.filter((data:any)=>{
          if(data.mes == this.jun){
            return data;
          }
        });
        this.jundetTotal = this.junDet.length;

        this.julDet = this.datos.filter((data:any)=>{
          if(data.mes == this.jul){
            return data;
          }
        });
        this.juldetTotal = this.julDet.length;

        this.agoDet = this.datos.filter((data:any)=>{
          if(data.mes == this.ago){
            return data;
          }
        });
        this.agodetTotal = this.agoDet.length;

        this.sepDet = this.datos.filter((data:any)=>{
          if(data.mes == this.sep){
            return data;
          }
        });
        this.sepdetTotal = this.sepDet.length;

        this.octDet = this.datos.filter((data:any)=>{
          if(data.mes == this.oct){
            return data;
          }
        });
        this.octdetTotal = this.octDet.length;

        this.novDet = this.datos.filter((data:any)=>{
          if(data.mes == this.nov){
            return data;
          }
        });
        this.novdetTotal = this.novDet.length;

        this.dicDet = this.datos.filter((data:any)=>{
          if(data.mes == this.dic){
            return data;
          }
        });
        this.dicdetTotal = this.dicDet.length;

        this.toMasto = this.edadMasto.length;
        this.totalTomas = this.datos.length;
        this.detrutinaShow = this.detRutina.length;
        this.detmastoShow = this.detMasto.length;
        this.detusmShow = this.detUsm.length;


        this.eneData =  this.datos.filter((enero:any) =>{
          if(enero.mes == this.ene){return enero}
        });

        this.eneTotal = this.eneData.length;
/////////////////////////////////////////////////////////////
        this.febData =  this.datos.filter((febrero:any) =>{

          if(febrero.mes == this.feb)
          {
            return febrero
          }

        });

        this.febTotal = this.febData.length;
////////////////////////////////////////////////////////////////
         this.marData =  this.datos.filter((marzo:any) =>{

          if(marzo.mes == this.mar)
          {
            return marzo
          }

        });

        this.marTotal = this.marData.length;
//////////////////////////////////////////////////////////////////
        this.abrData =  this.datos.filter((abril:any) =>{

          if(abril.mes == this.abr)
          {
            return abril
          }

        });

        this.abrTotal = this.abrData.length;
  ///////////////////////////////////////////////////////////////
        
        this.mayData =  this.datos.filter((mayo:any) =>{

          if(mayo.mes == this.may)
          {
            return mayo
          }

        });

        this.mayTotal = this.mayData.length;
  /////////////////////////////////////////////////////////////////
        this.junData =  this.datos.filter((junio:any) =>{

          if(junio.mes == this.jun)
          {
            return junio
          }

        });

        this.junTotal = this.junData.length;
  /////////////////////////////////////////////////////////////////
        this.julData =  this.datos.filter((julio:any) =>{

          if(julio.mes == this.jul)
          {
            return julio
          }

        });

        this.julTotal = this.julData.length;
  /////////////////////////////////////////////////////////////////
        this.agoData =  this.datos.filter((agosto:any) =>{

          if(agosto.mes == this.ago)
          {
            return agosto
          }

        });

        this.agoTotal = this.agoData.length;
  ////////////////////////////////////////////////////////////////////
        this.sepData =  this.datos.filter((septiembre:any) =>{

          if(septiembre.mes == this.sep)
          {
            return septiembre
          }

        });

        this.sepTotal = this.sepData.length;
  /////////////////////////////////////////////////////////////////////////
        this.octData =  this.datos.filter((octubre:any) =>{

          if(octubre.mes == this.oct)
          {
            return octubre
          }

        });

        this.octTotal = this.octData.length;
  //////////////////////////////////////////////////////////////////////////
        this.novData =  this.datos.filter((noviembre:any) =>{

          if(noviembre.mes == this.nov)
          {
            return noviembre
          }

        });

        this.novTotal = this.novData.length;
   ///////////////////////////////////////////////////////////////////////////
        this.dicData =  this.datos.filter((diciembre:any) =>{

          if(diciembre.mes == this.dic)
          {
            return  diciembre
          }

        });

        this.dicTotal = this.dicData.length;

        if (!this.datos) {
          console.log("Error en el Servidor");
        } else {
          this.loading = false;
        }

        

      },
      error =>{
        console.log(<any>error);
        
      }
    );
  }

  indiSelected(event:any){
    this.eventSelected = event.detail.value;

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

}
