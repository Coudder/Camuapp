import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import SwiperCore, {Pagination, EffectCoverflow} from 'swiper';

import { DataService } from '../../services/data.service';
import { AdminService } from '../../services/admin.service';
import { Vph } from '../../models/vph';

SwiperCore.use([Pagination,EffectCoverflow]);

@Component({
  selector: 'app-vphs',
  templateUrl: './vphs.page.html',
  styleUrls: ['./vphs.page.scss'],
  providers: [DataService,AdminService],
})
export class VphsPage implements OnInit {

  public swiperConfig: SwiperOptions = {
    pagination: true,
    //slidesPerView: 'auto',
    effect: 'coverflow',  
};

  public title;
  public identity;
  public token;
  public vph:Vph;
  public id;
  public mensaje
  public loading:boolean;

  public numVph;
  public numVphUnidad;
  public numFilas;

   
  public celda;
  public fila;
  public datos =[];
 
  public campos=[];

  public metaVph;
  public vphindiEdad;
  public vphindiedadTotal;
  public totalTomas;
  public metaVphShow;
  public valor1;
  public valor2;

  //DATA PARA MESES
  public ene:string;
  public eneData;
  public eneTotal;

  public feb:string;
  public febData;
  public febTotal;

  public mar:string;
  public marData;
  public marTotal;

  public abr:string;
  public abrData;
  public abrTotal;

  public may:string;
  public mayData;
  public mayTotal;

  public jun:string;
  public junData;
  public junTotal;

  public jul:string;
  public julData;
  public julTotal;

  public ago:string;
  public agoData;
  public agoTotal;

  public sep:string;
  public sepData;
  public sepTotal;

  public oct:string;
  public octData;
  public octTotal;

  public nov:string;
  public novData;
  public novTotal;

  public dic:string;
  public dicData;
  public dicTotal;

  public vphPrimeravez
  public vphprimeravezTotal;
  public vphSubsecuente;
  public vphsubsecuenteTotal;
  public vphprimeraCinco;
  public vphprimeracincoTotal;
  public vphSinresultado;
  public vphsinresultadoTotal;
  public vphprimeravezGeneral;
  public vphprimeravezgenerarTotal;
  public vphsubsecuenteGeneral;
  public vphsubsecuentegeneralTotal;
  public vphprimeracincogeneral;
  public vphprimeracincogeneralTotal;

  public vphNegativos: any;
  public vphnegaTotal;
  public vphnegaGeneral;
  public vphnegageneralTotal;

  public vphPositivos;
  public vphpositivosTotal;
  public vphpositivosGeneral;
  public vphpositivosgeneralTotal;

  public vphInvalidas;
  public vphinvalidasTotla;
  public vphinvalidasGeneral;
  public vphinvalidasGeneralTotal;

  public vphCbl;
  public vphcbltotal;
  public vphcblGeneral;
  public vphcblgeneralTotal;
  public vphcblFalta;
  public vphcblfaltaTotal;
  public vphcblfaltaGeneral;
  public vphcblfaltageneralTotal

  public vphcblNegativas;
  public vphcblnegativasTotal;
  public vphcblnegativasGeneral;
  public vphcblnegativasgeneralTotal;
  public vphcblLibg;
  public vphcbllibgTotal;
  public vphcbllibgGeneral;
  public vphcbllibggeneraltotal;
  public vphcblLiag;
  public vphcblliagTotal;
  public vphcblliagGeneral;
  public vphcblliaggeneraltotal;
  public vphSr;
  public vphsrTotal;



  public tipoVph = {
    primera:      '1. PRIMERA VEZ EN LA VIDA',
    subsecuente:  '2. SUBSECUENTE',
    primeraCinco: '3. PRIMERA VEZ DESPUES DE 5 AÑOS'
  }

  public dxVph = {
    negativo: '1. NEGATIVO',
    positivo: '2. POSITIVO',
    invalida: '3. INVALIDA POR NULA PRESENCIA  DE BETA-GLOBINA',
    sr:       ''
  }

  public dxCbl = {
    dxcblNegativa : '1. Negativa para lesión intraepitelial o malignidad',
    dxcblAscus    : '2. Células escamosas atípicas de significado indeterminado (ASC-US)',
    dxcblAsch     : '3. Células escamosas atípicas, no se puede descartar lesión intraepitelial escamosa de alto grado (ASC-H)',
    dxcblLibg     : '4. Lesión escamosa intraepitelial de bajo grado (VPH, displasia leve, NIC 1)',
    dxcblLiag     : '5. Lesión escamosa intraepitelial de alto grado (displasia moderada, displasia severa, carcicoma in Situ, NIC 2, NIC 3)',
    dxcblCarcinoma: '6. Carcinoma epidermoide',
    dxcblEndocervicales: '7. Células glandulares endocervicales atípicas (AGC)',
    dxcblEndometriales : '8. Células glandulares endometriales atípicas (AGC)',
    dxcblGlanatipicas  : '9. Células glandulares atípicas (AGC)',
    dxcblAdenocarinsitu: '10. Adenocarcinoma endocervical in situ',
    dxcblAdenocarextra : '11. Adenocarcinoma (endocervical, endometrial o extrauterino)',
    dxcblInadecuada    : '12. Inadecuada'
  }

  //reportes mensuales
  public ene1Vez3564
  public eneSubs3564
  public ene1vez5
  public ene1Vez3564Total
  public eneSubs3564Total
  public ene1vez5Total

  public feb1Vez3564
  public febSubs3564
  public feb1vez5
  public feb1Vez3564Total
  public febSubs3564Total
  public feb1vez5Total


  public mar1Vez3564
  public marSubs3564
  public mar1vez5
  public mar1Vez3564Total
  public marSubs3564Total
  public mar1vez5Total

  public abr1Vez3564
  public abrSubs3564
  public abr1vez5
  public abr1Vez3564Total
  public abrSubs3564Total
  public abr1vez5Total

  public may1Vez3564
  public maySubs3564
  public may1vez5
  public may1Vez3564Total
  public maySubs3564Total
  public may1vez5Total

  public jun1Vez3564
  public junSubs3564
  public jun1vez5
  public jun1Vez3564Total
  public junSubs3564Total
  public jun1vez5Total

  public jul1Vez3564
  public julSubs3564
  public jul1vez5
  public jul1Vez3564Total
  public julSubs3564Total
  public jul1vez5Total

  public ago1Vez3564
  public agoSubs3564
  public ago1vez5
  public ago1Vez3564Total
  public agoSubs3564Total
  public ago1vez5Total

  public sep1Vez3564
  public sepSubs3564
  public sep1vez5
  public sep1Vez3564Total
  public sepSubs3564Total
  public sep1vez5Total

  public oct1Vez3564
  public octSubs3564
  public oct1vez5
  public oct1Vez3564Total
  public octSubs3564Total
  public oct1vez5Total

  public nov1Vez3564
  public novSubs3564
  public nov1vez5
  public nov1Vez3564Total
  public novSubs3564Total
  public nov1vez5Total

  public dic1Vez3564
  public dicSubs3564
  public dic1vez5
  public dic1Vez3564Total
  public dicSubs3564Total
  public dic1vez5Total

   //ADD 19/12/2021
   public enevph;
   public enevphTotal;
   public febvph;
   public febvphTotal;
   public marvph;
   public marvphTotal;
   public abrvph;
   public abrvphTotal;
   public mayvph;
   public mayvphTotal;
   public junvph;
   public junvphTotal;
   public julvph;
   public julvphTotal;
   public agovph;
   public agovphTotal;
   public sepvph;
   public sepvphTotal;
   public octvph;
   public octvphTotal;
   public novvph;
   public novvphTotal;
   public dicvph;
   public dicvphTotal;
 
   public enemenor35
   public enemenor35Total
   public febmenor35
   public febmenor35Total
   public marmenor35
   public marmenor35Total
   public abrmenor35
   public abrmenor35Total
   public maymenor35
   public maymenor35Total
   public junmenor35
   public junmenor35Total
   public julmenor35
   public julmenor35Total
   public agomenor35
   public agomenor35Total
   public sepmenor35
   public sepmenor35Total
   public octmenor35
   public octmenor35Total
   public novmenor35
   public novmenor35Total
   public dicmenor35
   public dicmenor35Total
 
   public enemayor64
   public enemayor64Total
   public febmayor64
   public febmayor64Total
   public marmayor64
   public marmayor64Total
   public abrmayor64
   public abrmayor64Total
   public maymayor64
   public maymayor64Total
   public junmayor64
   public junmayor64Total
   public julmayor64
   public julmayor64Total
   public agomayor64
   public agomayor64Total
   public sepmayor64
   public sepmayor64Total
   public octmayor64
   public octmayor64Total
   public novmayor64
   public novmayor64Total
   public dicmayor64
   public dicmayor64Total

   public ene3564Total;
    public feb3564Total;
    public mar3564Total;
    public abr3564Total;
    public may3564Total;
    public jun3564Total;
    public jul3564Total;
    public ago3564Total;
    public sep3564Total;
    public oct3564Total;
    public nov3564Total;
    public dic3564Total;
 
   ///////////////////////////

   /* LOGICA OPCIONES MESES X INDICADORES */
    public opcionIndicadores = [];
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

    public eventSelected:string;
    public selectedOption;



  constructor(
    private _adminService:AdminService,
    private _dataService:DataService
  ) {
    this.title ='VPHS'
    this.token = _adminService.getToken();
    this.identity = _adminService.getIdentity();
    this.loading = true;

    this.valor1 = 35;
    this.valor2 = 64;

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
    this.getvphData();
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
                this.campos.push(this.celda);
            }else{
              obj[this.campos[c]] = this.celda;
            }
          }
          if(f>0) this.datos.push(obj);
        }
       // console.log(this.datos);

          //OBTENEMOS INFORMACION GENERAL
          //TOTAL DE TOMAS
          this.numVph = this.datos.length;
         // console.log(this.numVph);

        //primera vez general
         this.vphprimeravezGeneral = this.datos.filter((data)=>{
          if( data.visita == this.tipoVph.primera){
            return data;
          }
        });
        this.vphprimeravezgenerarTotal = this.vphprimeravezGeneral.length;

        this.vphsubsecuenteGeneral = this.datos.filter((data)=>{
          if(data.visita == this.tipoVph.subsecuente){
            return data
          }
        });
        this.vphsubsecuentegeneralTotal = this.vphsubsecuenteGeneral.length;

        this.vphprimeracincogeneral = this.datos.filter((data)=>{
          if(data.visita == this.tipoVph.primeraCinco){
            return data
          }
        });
        this.vphprimeracincogeneralTotal = this.vphprimeracincogeneral.length;


         //TOTAL TOMAS 35-64
         this.vphindiEdad = this.datos.filter((data)=>{
          if(data.edad >= this.valor1 && data.edad <= this.valor2){
            return data;
          }
         });
         this.vphindiedadTotal = this.vphindiEdad.length;
         //console.log(this.vphindiedadTotal);
         
          //vphs de  35-64 años primera vez
        this.vphPrimeravez = this.datos.filter((data)=>{
          if(data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.primera){
            return data;
          }
        });
        this.vphprimeravezTotal = this.vphPrimeravez.length;

         //vphs de  35-64 años psubsecuentes
         this.vphSubsecuente = this.datos.filter((data)=>{
          if(data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.subsecuente){
            return data;
          }
        });
        this.vphsubsecuenteTotal = this.vphSubsecuente.length;

          //vphs de  35-64 años 1 vez desp de 5 años
          this.vphprimeraCinco = this.datos.filter((data)=>{
            if(data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.primeraCinco){
              return data;
            }
          });
          this.vphprimeracincoTotal = this.vphprimeraCinco.length;
         
           //pendientes de resultado
        this.vphSinresultado = this.datos.filter((data)=>{
          if(data.rVph == ''){
            return data;
          }
        });        
        this.vphsinresultadoTotal = this.vphSinresultado.length;

        /////////////////////////////////////////////////////////////////////
        //INFO X MESES GENERAL
        this.eneData =  this.datos.filter((enero) =>{
          if(enero.mes == this.ene){return enero}
        });
        this.eneTotal = this.eneData.length;
        //console.log('tomas en enero :' + this.eneTotal );
/////////////////////////////////////////////////////////////
        this.febData =  this.datos.filter((febrero) =>{
          if(febrero.mes == this.feb){return febrero}
        });
        this.febTotal = this.febData.length;
        //console.log('Tomas en Febrero :' + this.febTotal );
////////////////////////////////////////////////////////////////
         this.marData =  this.datos.filter((marzo) =>{
          if(marzo.mes == this.mar){return marzo}
        });
        this.marTotal = this.marData.length;
        //console.log('Tomas en Marzo :' + this.marTotal );
//////////////////////////////////////////////////////////////////
        this.abrData =  this.datos.filter((abril) =>{
          if(abril.mes == this.abr){return abril}
        });
        this.abrTotal = this.abrData.length;
        //console.log('Tomas en Abril :' + this.abrTotal );
  ///////////////////////////////////////////////////////////////
        
        this.mayData =  this.datos.filter((mayo) =>{
          if(mayo.mes == this.may) {return mayo}
        });
        this.mayTotal = this.mayData.length;
        //console.log('Tomas en Mayo :' + this.mayTotal );
  /////////////////////////////////////////////////////////////////
        this.junData =  this.datos.filter((junio) =>{
          if(junio.mes == this.jun){return junio}
        });
        this.junTotal = this.junData.length;
        //console.log('Tomas en Junio :' + this.junTotal );
  /////////////////////////////////////////////////////////////////
        this.julData =  this.datos.filter((julio) =>{
          if(julio.mes == this.jul){return julio}
        });
        this.julTotal = this.julData.length;
        //console.log('Tomas en Julio :' + this.julTotal );
  /////////////////////////////////////////////////////////////////
        this.agoData =  this.datos.filter((agosto) =>{
          if(agosto.mes == this.ago){return agosto}
        });
        this.agoTotal = this.agoData.length;
        //console.log('Tomas en Agosto :' + this.agoTotal );
  ////////////////////////////////////////////////////////////////////
        this.sepData =  this.datos.filter((septiembre) =>{
          if(septiembre.mes == this.sep){return septiembre}
        });
        this.sepTotal = this.sepData.length;
        //console.log('Tomas en Septiembre :' + this.sepTotal );
  /////////////////////////////////////////////////////////////////////////
        this.octData =  this.datos.filter((octubre) =>{
          if(octubre.mes == this.oct){return octubre}
        });
        this.octTotal = this.octData.length;
        //console.log('Tomas en Octubre :' + this.octTotal );
  //////////////////////////////////////////////////////////////////////////
        this.novData =  this.datos.filter((noviembre) =>{
          if(noviembre.mes == this.nov){return noviembre}
        });
        this.novTotal = this.novData.length;
        //console.log('Tomas en  Noviembre :' + this.novTotal );
   ///////////////////////////////////////////////////////////////////////////
        this.dicData =  this.datos.filter((diciembre) =>{
          if(diciembre.mes == this.dic){return  diciembre}
        });
        this.dicTotal = this.dicData.length;
        //console.log('Tomas en  Diciembre :' + this.dicTotal ); 
//////////////////////////////////////////INFROMACION  GENERAL ENDS PRIMER SLIDE
           

/////////////////////////////SEGUNDO SLIDE INDICADORES VPH///////////////////
//vphs negativos

           this.vphNegativos = this.datos.filter((data)=>{
            if(data.edad >= this.valor1 && data.edad <= this.valor2 && data.rVph == this.dxVph.negativo ){
              return data 
            }
          });
          this.vphnegaTotal = this.vphNegativos.length

          this.vphnegaGeneral = this.datos.filter((data)=>{
            if(data.rVph == this.dxVph.negativo ){
              return data 
            }
          });
          this.vphnegageneralTotal = this.vphnegaGeneral.length;


          //positiovos
          this.vphPositivos = this.datos.filter((data)=>{
            if(data.edad >= this.valor1 && data.edad <= this.valor2 && data.rVph == this.dxVph.positivo ){
              return data 
            }
          });
          this.vphpositivosTotal = this.vphPositivos.length

          this.vphpositivosGeneral = this.datos.filter((data)=>{
            if(data.rVph == this.dxVph.positivo ){
              return data 
            }
          });
          this.vphpositivosgeneralTotal = this.vphpositivosGeneral.length;


          this.vphInvalidas = this.datos.filter((data)=>{
            if(data.visita == this.dxVph.invalida){
              return data
            }
          });
          this.vphinvalidasTotla = this.vphInvalidas.length;

          this.vphinvalidasGeneral = this.datos.filter((data)=>{
            if(data.rVph == this.dxVph.invalida ){
              return data 
            }
          });
          this.vphinvalidasGeneralTotal = this.vphinvalidasGeneral.length


/////////////////////////////////////////INDICADORES VPH SLIDE

///////////////////indivadores vph CON CBL TERCER SLIDE////////////////////////

               //positivos con citologia cbl general

          this.vphCbl = this.datos.filter((data)=>{
            if(data.edad >= this.valor1 && data.edad <= this.valor2 && data.rVph == this.dxVph.positivo && data.rCbl ){
              return data 
            }
          });
          this.vphcbltotal = this.vphCbl.length

          this.vphcblGeneral = this.datos.filter((data)=>{
            if(data.rVph == this.dxVph.positivo && data.rCbl ){
              return data 
            }
          });
          this.vphcblgeneralTotal= this.vphcblGeneral.length;

           //positivos con citologia sin resultado de citologia liquida cbl

           this.vphcblFalta = this.datos.filter((data)=>{
            if(data.edad >= this.valor1 && data.edad <= this.valor2 && data.rVph == this.dxVph.positivo && !data.rCbl ){
              return data 
            }
          });
          this.vphcblfaltaTotal = this.vphcblFalta.length

          this.vphcblfaltaGeneral = this.datos.filter((data)=>{
            if(data.rVph == this.dxVph.positivo && !data.rCbl ){
              return data 
            }
          });
          this.vphcblfaltageneralTotal = this.vphcblfaltaGeneral.length;

          //vphs con cbl negativa //todas edades
          this.vphcblNegativas = this.datos.filter((data)=>{
            if(data.edad >= this.valor1 && data.edad <= this.valor2 && data.rCbl == this.dxCbl.dxcblNegativa){
              return data;
            }
          });
          this.vphcblnegativasTotal = this.vphcblNegativas.length

          this.vphcblnegativasGeneral = this.datos.filter((data)=>{
            if( data.rCbl == this.dxCbl.dxcblNegativa){
              return data;
            }
          });
          this.vphcblnegativasgeneralTotal = this.vphcblnegativasGeneral.length

         

          //vphs con cbl libg
          this.vphcblLibg = this.datos.filter((data)=>{
            if(data.edad >= this.valor1 && data.edad <= this.valor2 && data.rCbl == this.dxCbl.dxcblLibg){
              return data;
            }
          });
          this.vphcbllibgTotal = this.vphcblLibg.length;

          this.vphcbllibgGeneral = this.datos.filter((data)=>{
            if( data.rCbl == this.dxCbl.dxcblLibg){
              return data;
            }
          });
          this.vphcbllibggeneraltotal = this.vphcbllibgGeneral.length;

          
          //vphs con cbl liag
          this.vphcblLiag = this.datos.filter((data)=>{
            if(data.edad >= this.valor1 && data.edad <= this.valor2 && data.rCbl == this.dxCbl.dxcblLiag){
              return data;
            }
          });
          this.vphcblliagTotal = this.vphcblLiag.length;

          this.vphcblliagGeneral = this.datos.filter((data)=>{
            if( data.rCbl == this.dxCbl.dxcblLiag){
              return data;
            }
          });
          this.vphcblliaggeneraltotal = this.vphcblliagGeneral.length;

          this.vphSr = this.datos.filter((data)=>{
            if(data.rVph == this.dxVph.sr){
              return data
            }
          });
          this.vphsrTotal = this.vphSr.length;

//////////////////////////////////////////////////////////////////

          ///////////////////DATOS DE TOMAS X MES GENERALES
          this.enevph = this.datos.filter((data)=> {
            if(data.mes == this.ene){
              return data
            }
          });
          
          this.enevphTotal = this.enevph.length;

          this.febvph = this.datos.filter((data)=> {
            if(data.mes == this.feb){
              return data
            }
          });
          
          this.febvphTotal = this.febvph.length;

          this.marvph = this.datos.filter((data)=> {
            if(data.mes == this.mar){
              return data
            }
          });
          
          this.marvphTotal = this.marvph.length;

          this.abrvph = this.datos.filter((data)=> {
            if(data.mes == this.abr){
              return data
            }
          });
          
          this.abrvphTotal = this.abrvph.length;

          this.mayvph = this.datos.filter((data)=> {
            if(data.mes == this.may){
              return data
            }
          });
          
          this.mayvphTotal = this.mayvph.length;

          this.junvph = this.datos.filter((data)=> {
            if(data.mes == this.jun){
              return data
            }
          });
          
          this.junvphTotal = this.junvph.length;

          this.julvph = this.datos.filter((data)=> {
            if(data.mes == this.jul){
              return data
            }
          });
          
          this.julvphTotal = this.julvph.length;

          this.agovph = this.datos.filter((data)=> {
            if(data.mes == this.ago){
              return data
            }
          });
          
          this.agovphTotal = this.agovph.length;

          this.sepvph = this.datos.filter((data)=> {
            if(data.mes == this.sep){
              return data
            }
          });
          
          this.sepvphTotal = this.sepvph.length;

          this.octvph = this.datos.filter((data)=> {
            if(data.mes == this.oct){
              return data
            }
          });
          
          this.octvphTotal = this.octvph.length;

          this.novvph = this.datos.filter((data)=> {
            if(data.mes == this.nov){
              return data
            }
          });
          
          this.novvphTotal = this.novvph.length;

          this.dicvph = this.datos.filter((data)=> {
            if(data.mes == this.dic){
              return data
            }
          });
          
          this.dicvphTotal = this.dicvph.length;

          ///////////////////////////////////////////////

          //INDICADORES X MES DETALLADO 
            /////////////////////////////
             //reportes mensuales  enero

          this.ene1Vez3564 = this.datos.filter((data)=> {
            if(data.mes == this.ene && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.primera ){
              return data
            }
          });
          this.eneSubs3564 = this.datos.filter((data)=> {
            if(data.mes == this.ene && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.subsecuente ){
              return data
            }
          });
          this.ene1vez5 = this.datos.filter((data)=> {
            if(data.mes == this.ene && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.primeraCinco ){
              return data
            }
          });


          this.ene1Vez3564Total = this.ene1Vez3564.length;
          this.eneSubs3564Total = this.eneSubs3564.length;
          this.ene1vez5Total    = this.ene1vez5.length;

          //reportes mensuales  febrero

          this.feb1Vez3564 = this.datos.filter((data)=> {
            if(data.mes == this.feb && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.primera ){
              return data
            }
          });
          this.febSubs3564 = this.datos.filter((data)=> {
            if(data.mes == this.feb && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.subsecuente ){
              return data
            }
          });
          this.feb1vez5 = this.datos.filter((data)=> {
            if(data.mes == this.feb && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.primeraCinco ){
              return data
            }
          });


          this.feb1Vez3564Total = this.feb1Vez3564.length
          this.febSubs3564Total = this.febSubs3564.length;
          this.feb1vez5Total    = this.feb1vez5.length

           //reportes mensuales  martzo

           this.mar1Vez3564 = this.datos.filter((data)=> {
            if(data.mes == this.mar && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.primera ){
              return data
            }
          });
          this.marSubs3564 = this.datos.filter((data)=> {
            if(data.mes == this.mar && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.subsecuente ){
              return data
            }
          });
          this.mar1vez5 = this.datos.filter((data)=> {
            if(data.mes == this.mar && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.primeraCinco ){
              return data
            }
          });


          this.mar1Vez3564Total = this.mar1Vez3564.length
          this.marSubs3564Total = this.marSubs3564.length;
          this.mar1vez5Total    = this.mar1vez5.length

            //reportes mensuales  abril

            this.abr1Vez3564 = this.datos.filter((data)=> {
              if(data.mes == this.abr && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.primera ){
                return data
              }
            });
            this.abrSubs3564 = this.datos.filter((data)=> {
              if(data.mes == this.abr && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.subsecuente ){
                return data
              }
            });
            this.abr1vez5 = this.datos.filter((data)=> {
              if(data.mes == this.abr && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.primeraCinco ){
                return data
              }
            });


            this.abr1Vez3564Total = this.abr1Vez3564.length
            this.abrSubs3564Total = this.abrSubs3564.length;
            this.abr1vez5Total    = this.abr1vez5.length

              //reportes mensuales  mayo

              this.may1Vez3564 = this.datos.filter((data)=> {
                if(data.mes == this.may && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.primera ){
                  return data
                }
              });
              this.maySubs3564 = this.datos.filter((data)=> {
                if(data.mes == this.may && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.subsecuente ){
                  return data
                }
              });
              this.may1vez5 = this.datos.filter((data)=> {
                if(data.mes == this.may && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.primeraCinco ){
                  return data
                }
              });


              this.may1Vez3564Total = this.may1Vez3564.length
              this.maySubs3564Total = this.maySubs3564.length;
              this.may1vez5Total    = this.may1vez5.length

                //reportes mensuales  jun

                this.jun1Vez3564 = this.datos.filter((data)=> {
                  if(data.mes == this.jun && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.primera ){
                    return data
                  }
                });
                this.junSubs3564 = this.datos.filter((data)=> {
                  if(data.mes == this.jun && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.subsecuente ){
                    return data
                  }
                });
                this.jun1vez5 = this.datos.filter((data)=> {
                  if(data.mes == this.jun && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.primeraCinco ){
                    return data
                  }
                });


                this.jun1Vez3564Total = this.jun1Vez3564.length
                this.junSubs3564Total = this.junSubs3564.length;
                this.jun1vez5Total    = this.jun1vez5.length

                 //reportes mensuales  julio

                 this.jul1Vez3564 = this.datos.filter((data)=> {
                  if(data.mes == this.jul && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.primera ){
                    return data
                  }
                });
                this.julSubs3564 = this.datos.filter((data)=> {
                  if(data.mes == this.jul && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.subsecuente ){
                    return data
                  }
                });
                this.jul1vez5 = this.datos.filter((data)=> {
                  if(data.mes == this.jul && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.primeraCinco ){
                    return data
                  }
                });


                this.jul1Vez3564Total = this.jul1Vez3564.length
                this.julSubs3564Total = this.julSubs3564.length;
                this.jul1vez5Total    = this.jul1vez5.length

                //reportes mensuales  agosto

                this.ago1Vez3564 = this.datos.filter((data)=> {
                  if(data.mes == this.ago && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.primera ){
                    return data
                  }
                });
                this.agoSubs3564 = this.datos.filter((data)=> {
                  if(data.mes == this.ago && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.subsecuente ){
                    return data
                  }
                });
                this.ago1vez5 = this.datos.filter((data)=> {
                  if(data.mes == this.ago && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.primeraCinco ){
                    return data
                  }
                });


                this.ago1Vez3564Total = this.ago1Vez3564.length
                this.agoSubs3564Total = this.agoSubs3564.length;
                this.ago1vez5Total    = this.ago1vez5.length

                  //reportes mensuales  septiembre

                  this.sep1Vez3564 = this.datos.filter((data)=> {
                    if(data.mes == this.sep && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.primera ){
                      return data
                    }
                  });
                  this.sepSubs3564 = this.datos.filter((data)=> {
                    if(data.mes == this.sep && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.subsecuente ){
                      return data
                    }
                  });
                  this.sep1vez5 = this.datos.filter((data)=> {
                    if(data.mes == this.sep && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.primeraCinco ){
                      return data
                    }
                  });


                  this.sep1Vez3564Total = this.sep1Vez3564.length
                  this.sepSubs3564Total = this.sepSubs3564.length;
                  this.sep1vez5Total    = this.sep1vez5.length

                  
                  //reportes mensuales  octubre

                  this.oct1Vez3564 = this.datos.filter((data)=> {
                    if(data.mes == this.oct && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.primera ){
                      return data
                    }
                  });
                  this.octSubs3564 = this.datos.filter((data)=> {
                    if(data.mes == this.oct && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.subsecuente ){
                      return data
                    }
                  });
                  this.oct1vez5 = this.datos.filter((data)=> {
                    if(data.mes == this.oct && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.primeraCinco ){
                      return data
                    }
                  });


                  this.oct1Vez3564Total = this.oct1Vez3564.length
                  this.octSubs3564Total = this.octSubs3564.length;
                  this.oct1vez5Total    = this.oct1vez5.length

                   
                  //reportes mensuales  novienbre

                  this.nov1Vez3564 = this.datos.filter((data)=> {
                    if(data.mes == this.nov && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.primera ){
                      return data
                    }
                  });
                  this.novSubs3564 = this.datos.filter((data)=> {
                    if(data.mes == this.nov && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.subsecuente ){
                      return data
                    }
                  });
                  this.nov1vez5 = this.datos.filter((data)=> {
                    if(data.mes == this.nov && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.primeraCinco ){
                      return data
                    }
                  });


                  this.nov1Vez3564Total = this.nov1Vez3564.length
                  this.novSubs3564Total = this.novSubs3564.length;
                  this.nov1vez5Total    = this.nov1vez5.length

                  //reportes mensuales  diciembre

                  this.dic1Vez3564 = this.datos.filter((data)=> {
                    if(data.mes == this.dic && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.primera ){
                      return data
                    }
                  });
                  this.dicSubs3564 = this.datos.filter((data)=> {
                    if(data.mes == this.dic && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.subsecuente ){
                      return data
                    }
                  });
                  this.dic1vez5 = this.datos.filter((data)=> {
                    if(data.mes == this.dic && data.edad >= this.valor1 && data.edad <= this.valor2 && data.visita == this.tipoVph.primeraCinco ){
                      return data
                    }
                  });


                  this.dic1Vez3564Total = this.dic1Vez3564.length
                  this.dicSubs3564Total = this.dicSubs3564.length;
                  this.dic1vez5Total    = this.dic1vez5.length


                   //obtenemos los vphs que sean sean menores a 35 años por mes

                   this.enemenor35 = this.datos.filter((data)=>{
                    if(data.mes == this.ene && data.edad < this.valor1) {
                      return data
                    }
                  });
                  this.enemenor35Total = this.enemenor35.length;

                  this.febmenor35 = this.datos.filter((data)=>{
                    if(data.mes == this.feb && data.edad < this.valor1) {
                      return data
                    }
                  });
                  this.febmenor35Total = this.febmenor35.length;

                  this.marmenor35 = this.datos.filter((data)=>{
                    if(data.mes == this.mar && data.edad < this.valor1) {
                      return data
                    }
                  });
                  this.marmenor35Total = this.marmenor35.length;

                  this.abrmenor35 = this.datos.filter((data)=>{
                    if(data.mes == this.abr && data.edad < this.valor1) {
                      return data
                    }
                  });
                  this.abrmenor35Total = this.abrmenor35.length;

                  this.maymenor35 = this.datos.filter((data)=>{
                    if(data.mes == this.may && data.edad < this.valor1) {
                      return data
                    }
                  });
                  this.maymenor35Total = this.maymenor35.length;

                  this.junmenor35 = this.datos.filter((data)=>{
                    if(data.mes == this.jun && data.edad < this.valor1) {
                      return data
                    }
                  });
                  this.junmenor35Total = this.junmenor35.length;

                  this.julmenor35 = this.datos.filter((data)=>{
                    if(data.mes == this.jul && data.edad < this.valor1) {
                      return data
                    }
                  });
                  this.julmenor35Total = this.julmenor35.length;

                  this.agomenor35 = this.datos.filter((data)=>{
                    if(data.mes == this.ago && data.edad < this.valor1) {
                      return data
                    }
                  });
                  this.agomenor35Total = this.agomenor35.length;

                  this.sepmenor35 = this.datos.filter((data)=>{
                    if(data.mes == this.sep && data.edad < this.valor1) {
                      return data
                    }
                  });
                  this.sepmenor35Total = this.sepmenor35.length;

                  this.octmenor35 = this.datos.filter((data)=>{
                    if(data.mes == this.oct && data.edad < this.valor1) {
                      return data
                    }
                  });
                  this.octmenor35Total = this.octmenor35.length;

                  this.novmenor35 = this.datos.filter((data)=>{
                    if(data.mes == this.nov && data.edad < this.valor1) {
                      return data
                    }
                  });
                  this.novmenor35Total = this.novmenor35.length;

                  this.dicmenor35 = this.datos.filter((data)=>{
                    if(data.mes == this.dic && data.edad < this.valor1) {
                      return data
                    }
                  });
                  this.dicmenor35Total = this.dicmenor35.length;



                    //obtenemos los vphs que sean sean mmayores a 64 años por mes

                    this.enemayor64 = this.datos.filter((data)=>{
                      if(data.mes == this.ene && data.edad > this.valor2) {
                        return data
                      }
                    });
                    this.enemayor64Total = this.enemayor64.length;

                    this.febmayor64 = this.datos.filter((data)=>{
                      if(data.mes == this.feb && data.edad > this.valor2) {
                        return data
                      }
                    });
                    this.febmayor64Total = this.febmayor64.length;

                    this.marmayor64 = this.datos.filter((data)=>{
                      if(data.mes == this.mar && data.edad > this.valor2) {
                        return data
                      }
                    });
                    this.marmayor64Total = this.marmayor64.length;

                    this.abrmayor64 = this.datos.filter((data)=>{
                      if(data.mes == this.abr && data.edad > this.valor2) {
                        return data
                      }
                    });
                    this.abrmayor64Total = this.abrmayor64.length;

                    this.maymayor64 = this.datos.filter((data)=>{
                      if(data.mes == this.may && data.edad > this.valor2) {
                        return data
                      }
                    });
                    this.maymayor64Total = this.maymayor64.length;

                    this.junmayor64 = this.datos.filter((data)=>{
                      if(data.mes == this.jun && data.edad > this.valor2) {
                        return data
                      }
                    });
                    this.junmayor64Total = this.junmayor64.length;

                    this.julmayor64 = this.datos.filter((data)=>{
                      if(data.mes == this.jul && data.edad > this.valor2) {
                        return data
                      }
                    });
                    this.julmayor64Total = this.julmayor64.length;

                    this.agomayor64 = this.datos.filter((data)=>{
                      if(data.mes == this.ago && data.edad > this.valor2) {
                        return data
                      }
                    });
                    this.agomayor64Total = this.agomayor64.length;

                    this.sepmayor64 = this.datos.filter((data)=>{
                      if(data.mes == this.sep && data.edad > this.valor2) {
                        return data
                      }
                    });
                    this.sepmayor64Total = this.sepmayor64.length;

                    this.octmayor64 = this.datos.filter((data)=>{
                      if(data.mes == this.oct && data.edad > this.valor2) {
                        return data
                      }
                    });
                    this.octmayor64Total = this.octmayor64.length;

                    this.novmayor64 = this.datos.filter((data)=>{
                      if(data.mes == this.nov && data.edad > this.valor2) {
                        return data
                      }
                    });
                    this.novmayor64Total = this.novmayor64.length;

                    this.dicmayor64 = this.datos.filter((data)=>{
                      if(data.mes == this.dic && data.edad > this.valor2) {
                        return data
                      }
                    });
                    this.dicmayor64Total = this.dicmayor64.length;




                  /////////////////////////////////////////
                      //OBTENIDO 13/01/2022 TOTALES POR MESES 35-64 PARA INDI
                      let ene3564 = this.datos.filter((data)=>{
                        if(data.mes == this.ene && data.edad >= this.valor1 && data.edad <= this.valor2 )
                        {
                          return data  
                        }
                      });
                      this.ene3564Total = ene3564.length;

                      let feb3564 = this.datos.filter((data)=>{
                        if(data.mes == this.feb && data.edad >= this.valor1 && data.edad <= this.valor2 )
                        {
                          return data  
                        }
                      });
                      this.feb3564Total = feb3564.length;

                      let mar3564 = this.datos.filter((data)=>{
                        if(data.mes == this.mar && data.edad >= this.valor1 && data.edad <= this.valor2 )
                        {
                          return data  
                        }
                      });
                      this.mar3564Total = mar3564.length;

                      let abr3564 = this.datos.filter((data)=>{
                        if(data.mes == this.abr && data.edad >= this.valor1 && data.edad <= this.valor2 )
                        {
                          return data  
                        }
                      });
                      this.abr3564Total = abr3564.length;

                      let may3564 = this.datos.filter((data)=>{
                        if(data.mes == this.may && data.edad >= this.valor1 && data.edad <= this.valor2 )
                        {
                          return data  
                        }
                      });
                      this.may3564Total = may3564.length;

                      let jun3564 = this.datos.filter((data)=>{
                        if(data.mes == this.jun && data.edad >= this.valor1 && data.edad <= this.valor2 )
                        {
                          return data  
                        }
                      });
                      this.jun3564Total = jun3564.length;

                      let jul3564 = this.datos.filter((data)=>{
                        if(data.mes == this.jul && data.edad >= this.valor1 && data.edad <= this.valor2 )
                        {
                          return data  
                        }
                      });
                      this.jul3564Total = jul3564.length;

                      let ago3564 = this.datos.filter((data)=>{
                        if(data.mes == this.ago && data.edad >= this.valor1 && data.edad <= this.valor2 )
                        {
                          return data  
                        }
                      });
                      this.ago3564Total = ago3564.length;

                      let sep3564 = this.datos.filter((data)=>{
                        if(data.mes == this.sep && data.edad >= this.valor1 && data.edad <= this.valor2 )
                        {
                          return data  
                        }
                      });
                      this.sep3564Total = sep3564.length;

                      let oct3564 = this.datos.filter((data)=>{
                        if(data.mes == this.oct && data.edad >= this.valor1 && data.edad <= this.valor2 )
                        {
                          return data  
                        }
                      });
                      this.oct3564Total = oct3564.length;

                      let nov3564 = this.datos.filter((data)=>{
                        if(data.mes == this.nov && data.edad >= this.valor1 && data.edad <= this.valor2 )
                        {
                          return data  
                        }
                      });
                      this.nov3564Total = nov3564.length;

                      let dic3564 = this.datos.filter((data)=>{
                        if(data.mes == this.dic && data.edad >= this.valor1 && data.edad <= this.valor2 )
                        {
                          return data  
                        }
                      });
                      this.dic3564Total = dic3564.length;

//////////////////////////////////////////////////////////////////




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


  indiSelected(event){ 

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

}
