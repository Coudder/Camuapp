import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import SwiperCore, {Pagination, EffectCoverflow} from 'swiper';
import { DataService } from '../../services/data.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-mastos',
  templateUrl: './mastos.page.html',
  styleUrls: ['./mastos.page.scss'],
  providers: [DataService,AdminService]
})
export class MastosPage implements OnInit {

  public swiperConfig: SwiperOptions = {
    pagination: true,
    //slidesPerView: 'auto',
    effect: 'coverflow',  
};

  public title;
  public token;
  public identity;
  public url;

  public numMasto;
  public numMastoUnidad;
  public numFilas;
  public unidadBackend;
  

  public celda;
  public fila;
  public datos = [];

  public unidadFiltrada;
  public valor1
  public valor2
  public metaMasto;
  public metaMastoShow;
  public totalTomas;

  public campos = [];
  public id;
  public metaBackend;
  public mensaje;
  public show:boolean;

  public birads0;
  public biradstotal0;
  public birads0General;
  public birdas0generalTotal;
  public birads1;
  public biradstotal1;
  public birads1General;
  public birdas1generalTotal;
  public birads2;
  public biradstotal2;
  public birads2General;
  public birdas2generalTotal;
  public birads3;
  public biradstotal3;
  public birads3General;
  public birdas3generalTotal;
  public birads4;
  public biradstotal4;
  public birads4General;
  public birdas4generalTotal;
  public birads4a;
  public biradstotal4a;
  public birads4aGeneral;
  public birdas4ageneralTotal;
  public birads4b;
  public biradstotal4b;
  public birads4bGeneral;
  public birdas4bgeneralTotal;
  public birads4c;
  public biradstotal4c;
  public birads4cGeneral;
  public birdas4cgeneralTotal;
  public birads5;
  public biradstotal5;
  public birads5General;
  public birdas5generalTotal;
  public birads6;
  public biradstotal6;
  public birads6General;
  public birdas6generalTotal;

  public biradsNull;
  public biradsnullTotal

  public refUsm;
  public refusmTotal;

  public tomaUsm;
  public tomausmTotal;

  public rxBirdas = {
    rBirdas0:  '0',
    rBirads1:  '1',
    rBirads2:  '2',
    rBirads3:  '3',
    rBirads4:  '4',
    rBirads4A: '4A',
    rBirads4B: '4B',
    rBirads4C: '4C',
    rBirads5:  '5',
    rBirads6:  '6',
    rBirdasn:   ''
  }

  

  public loading: boolean;

  //reportes mensuales 
  public ene4069;
  public ene4069total;
  public eneMastos;
  public enemastosTotal;

  public feb4069;
  public feb4069total;
  public febMastos;
  public febmastosTotal;

  public mar4069;
  public mar4069total;
  public marMastos;
  public marmastosTotal;

  public abr4069;
  public abr4069total;
  public abrMastos;
  public abrmastosTotal;

  public may4069;
  public may4069total;
  public mayMastos;
  public maymastosTotal;

  public jun4069;
  public jun4069total;
  public junMastos;
  public junmastosTotal;

  public jul4069;
  public jul4069total;
  public julMastos;
  public julmastosTotal;

  public ago4069;
  public ago4069total;
  public agoMastos;
  public agomastosTotal;

  public sep4069;
  public sep4069total;
  public sepMastos;
  public sepmastosTotal;

  public oct4069;
  public oct4069total;
  public octMastos;
  public octmastosTotal;

  public nov4069;
  public nov4069total;
  public novMastos;
  public novmastosTotal;

  public dic4069;
  public dic4069total;
  public dicMastos;
  public dicmastosTotal;

  //add 19/12/2021///////upgrade
  public enemastomenor40
  public enemastomenor40Total
  public febmastomenor40
  public febmastomenor40Total
  public marmastomenor40
  public marmastomenor40Total
  public abrmastomenor40
  public abrmastomenor40Total
  public maymastomenor40
  public maymastomenor40Total
  public junmastomenor40
  public junmastomenor40Total
  public julmastomenor40
  public julmastomenor40Total
  public agomastomenor40
  public agomastomenor40Total
  public sepmastomenor40
  public sepmastomenor40Total
  public octmastomenor40
  public octmastomenor40Total
  public novmastomenor40
  public novmastomenor40Total
  public dicmastomenor40
  public dicmastomenor40Total

  public enemastomayor69
  public enemastomayor69Total
  public febmastomayor69
  public febmastomayor69Total
  public marmastomayor69
  public marmastomayor69Total
  public abrmastomayor69
  public abrmastomayor69Total
  public maymastomayor69
  public maymastomayor69Total
  public junmastomayor69
  public junmastomayor69Total
  public julmastomayor69
  public julmastomayor69Total
  public agomastomayor69
  public agomastomayor69Total
  public sepmastomayor69
  public sepmastomayor69Total
  public octmastomayor69
  public octmastomayor69Total
  public novmastomayor69
  public novmastomayor69Total
  public dicmastomayor69
  public dicmastomayor69Total

  //////////////////////

   //DATA PARA MESES
   
   


  public ene = "enero";
  public feb = "febrero";
  public mar = "marzo";
  public abr = "abril";
  public may = "mayo";
  public jun = "junio";
  public jul = "julio";
  public ago = "agosto";
  public sep = "septiembre";
  public oct = "octubre";
  public nov = "noviembre";
  public dic = "diciembre";

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
  ) 
  {
    this.title = 'MASTOGRAFIAS'
    this.identity = this._adminService.getIdentity();
    this.token = this._adminService.getToken();
    this.loading = true;
    this.valor1 = 40;
    this.valor2 = 69;
    this.show = false;

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
  this.getmastografiasData();
  }


  getmastografiasData(){

    this._dataService.getmastosData().subscribe(
      response => {
        let entries = response.values;
        let numFilas = entries.length;
        //  console.log('Numero de Filas:' + numFilas);
    
        //procesar datos
    
        for (var f = 0; f < numFilas; f++) {
          let fila = entries[f];
    
          let obj = {};
    
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
          this.numMasto = this.datos.length;
        
            //INDICADORES MASTOGRAFIAS CUANTOS BIRADS 0,1,2,3,4,4A,4B,4C,5,6
                  //CUANTAS MASTOGRAFIAS DE 40-69 BIRDAS 0,1,2,3,4,4A ETC

                  this.metaMasto = this.datos.filter((meta)=>{
                    if(meta.edad >= this.valor1 && meta.edad <= this.valor2)
                    {
                      return meta
                      
                    }
                  });

                  //mastografias 40-69 birads 0
                  this.birads0 = this.datos.filter((data)=>{
                    if(data.edad >= this.valor1 && data.edad <= this.valor2 && data.birads ==  this.rxBirdas.rBirdas0){
                      return data
                    }
                  });
                    //mastografias birads 0
                  this.birads0General = this.datos.filter((data)=>{
                    if( data.birads ==  this.rxBirdas.rBirdas0){
                        return data
                    }
                  });
                   //mastografias 40-69 birads 1
                   this.birads1 = this.datos.filter((data)=>{
                    if(data.edad >= this.valor1 && data.edad <= this.valor2 && data.birads ==  this.rxBirdas.rBirads1){
                      return data
                    }
                  });
                    //mastografias birads 1
                  this.birads1General = this.datos.filter((data)=>{
                    if( data.birads ==  this.rxBirdas.rBirads1){
                        return data
                    }
                  });
                   //mastografias 40-69 birads 2
                   this.birads2 = this.datos.filter((data)=>{
                    if(data.edad >= this.valor1 && data.edad <= this.valor2 && data.birads ==  this.rxBirdas.rBirads2){
                      return data
                    }
                  });
                    //mastografias birads 2
                  this.birads2General = this.datos.filter((data)=>{
                    if( data.birads ==  this.rxBirdas.rBirads2){
                        return data
                    }
                  });

                   //mastografias 40-69 birads 3
                   this.birads3 = this.datos.filter((data)=>{
                    if(data.edad >= this.valor1 && data.edad <= this.valor2 && data.birads ==  this.rxBirdas.rBirads3){
                      return data
                    }
                  });
                    //mastografias birads 3
                  this.birads3General = this.datos.filter((data)=>{
                    if( data.birads ==  this.rxBirdas.rBirads3){
                        return data
                    }
                  });
                   //mastografias 40-69 birads 4
                   this.birads4 = this.datos.filter((data)=>{
                    if(data.edad >= this.valor1 && data.edad <= this.valor2 && data.birads ==  this.rxBirdas.rBirads4){
                      return data
                    }
                  });
                    //mastografias birads 4
                  this.birads4General = this.datos.filter((data)=>{
                    if( data.birads ==  this.rxBirdas.rBirads4){
                        return data
                    }
                  });
                   //mastografias 40-69 birads 4A
                   this.birads4a = this.datos.filter((data)=>{
                    if(data.edad >= this.valor1 && data.edad <= this.valor2 && data.birads ==  this.rxBirdas.rBirads4A){
                      return data
                    }
                  });
                    //mastografias birads 4a
                  this.birads4aGeneral = this.datos.filter((data)=>{
                    if( data.birads ==  this.rxBirdas.rBirads4A){
                        return data
                    }
                  });
                  //mastografias 40-69 birads 4B
                  this.birads4b = this.datos.filter((data)=>{
                    if(data.edad >= this.valor1 && data.edad <= this.valor2 && data.birads ==  this.rxBirdas.rBirads4B){
                      return data
                    }
                  });
                    //mastografias birads 4b
                  this.birads4bGeneral = this.datos.filter((data)=>{
                    if( data.birads ==  this.rxBirdas.rBirads4B){
                        return data
                    }
                  });
                  //mastografias 40-69 birads 4C
                  this.birads4c = this.datos.filter((data)=>{
                    if(data.edad >= this.valor1 && data.edad <= this.valor2 && data.birads ==  this.rxBirdas.rBirads4C){
                      return data
                    }
                  });
                    //mastografias birads 4c
                  this.birads4cGeneral = this.datos.filter((data)=>{
                    if( data.birads ==  this.rxBirdas.rBirads4C){
                        return data
                    }
                  });
                    //mastografias 40-69 birads 5
                    this.birads5 = this.datos.filter((data)=>{
                      if(data.edad >= this.valor1 && data.edad <= this.valor2 && data.birads ==  this.rxBirdas.rBirads5){
                        return data
                      }
                    });
                      //mastografias birads 5
                    this.birads5General = this.datos.filter((data)=>{
                      if( data.birads ==  this.rxBirdas.rBirads5){
                          return data
                      }
                    });
                     //mastografias 40-69 birads 6
                     this.birads6 = this.datos.filter((data)=>{
                      if(data.edad >= this.valor1 && data.edad <= this.valor2 && data.birads ==  this.rxBirdas.rBirads6){
                        return data
                      }
                    });
                      //mastografias birads 6
                    this.birads6General = this.datos.filter((data)=>{
                      if( data.birads ==  this.rxBirdas.rBirads6){
                          return data
                      }
                    });

                    this.biradsNull = this.datos.filter((data)=>{
                      if(data.birads == this.rxBirdas.rBirdasn){
                        return data
                      }
                    });

                    this.refUsm = this.datos.filter((data)=>{ //obtenemos cuantas mastos han sido referidas a usm
                      if(data.birads == this.rxBirdas.rBirdas0 || data.birads == this.rxBirdas.rBirads3 || data.birads == this.rxBirdas.rBirads4 || data.birads == this.rxBirdas.rBirads4A
                        || data.birads == this.rxBirdas.rBirads4B || data.birads == this.rxBirdas.rBirads4C || data.birads == this.rxBirdas.rBirads5 || data.birads == this.rxBirdas.rBirads6){
                          return data
                      }
                    });

                    this.tomaUsm = this.datos.filter((data)=>{ //obtenemos cuantos usm se han realizado
                      if(data.biradsUsm){
                          return data
                      }
                    });

                    
                     //reportes mensuales
                    
                     this.ene4069 = this.datos.filter((data)=>{
                      if(data.mes == this.ene && data.edad >= this.valor1 && data.edad <= this.valor2){
                        return data
                      }
                    });

                    this.ene4069total = this.ene4069.length;

                    this.eneMastos = this.datos.filter((data)=>{
                      if(data.mes == this.ene){
                        return data
                      }
                    });
                    this.enemastosTotal = this.eneMastos.length;

                    //reportes mensuales
                    
                    this.feb4069 = this.datos.filter((data)=>{
                      if(data.mes == this.feb && data.edad >= this.valor1 && data.edad <= this.valor2){
                        return data
                      }
                    });

                    this.feb4069total = this.feb4069.length;

                    this.febMastos = this.datos.filter((data)=>{
                      if(data.mes == this.feb){
                        return data
                      }
                    });
                    this.febmastosTotal = this.febMastos.length;
                    //reportes mensuales
                    
                    this.mar4069 = this.datos.filter((data)=>{
                      if(data.mes == this.mar && data.edad >= this.valor1 && data.edad <= this.valor2){
                        return data
                      }
                    });

                    this.mar4069total = this.mar4069.length;

                    this.marMastos = this.datos.filter((data)=>{
                      if(data.mes == this.mar){
                        return data
                      }
                    });
                    this.marmastosTotal = this.marMastos.length;
                    //reportes mensuales
                    
                    this.abr4069 = this.datos.filter((data)=>{
                      if(data.mes == this.abr && data.edad >= this.valor1 && data.edad <= this.valor2){
                        return data
                      }
                    });

                    this.abr4069total = this.abr4069.length;

                    this.abrMastos = this.datos.filter((data)=>{
                      if(data.mes == this.abr){
                        return data
                      }
                    });
                    this.abrmastosTotal = this.abrMastos.length;
                    //reportes mensuales
                    
                    this.may4069 = this.datos.filter((data)=>{
                      if(data.mes == this.may && data.edad >= this.valor1 && data.edad <= this.valor2){
                        return data
                      }
                    });

                    this.may4069total = this.may4069.length;

                    this.mayMastos = this.datos.filter((data)=>{
                      if(data.mes == this.may){
                        return data
                      }
                    });
                    this.maymastosTotal = this.mayMastos.length;
                    //reportes mensuales
                    
                    this.jun4069 = this.datos.filter((data)=>{
                      if(data.mes == this.jun && data.edad >= this.valor1 && data.edad <= this.valor2){
                        return data
                      }
                    });

                    this.jun4069total = this.jun4069.length;

                    this.junMastos = this.datos.filter((data)=>{
                      if(data.mes == this.jun){
                        return data
                      }
                    });
                    this.junmastosTotal = this.junMastos.length;

                    //reportes mensuales
                    
                    this.jul4069 = this.datos.filter((data)=>{
                      if(data.mes == this.jul && data.edad >= this.valor1 && data.edad <= this.valor2){
                        return data
                      }
                    });

                    this.jul4069total = this.jul4069.length;

                    this.julMastos = this.datos.filter((data)=>{
                      if(data.mes == this.jul){
                        return data
                      }
                    });
                    this.julmastosTotal = this.julMastos.length;

                    //reportes mensuales
                    
                    this.ago4069 = this.datos.filter((data)=>{
                      if(data.mes == this.ago && data.edad >= this.valor1 && data.edad <= this.valor2){
                        return data
                      }
                    });

                    this.ago4069total = this.ago4069.length;

                    this.agoMastos = this.datos.filter((data)=>{
                      if(data.mes == this.ago){
                        return data
                      }
                    });
                    this.agomastosTotal = this.agoMastos.length;

                    //reportes mensuales
                    
                    this.sep4069 = this.datos.filter((data)=>{
                      if(data.mes == this.sep && data.edad >= this.valor1 && data.edad <= this.valor2){
                        return data
                      }
                    });

                    this.sep4069total = this.sep4069.length;

                    this.sepMastos = this.datos.filter((data)=>{
                      if(data.mes == this.sep){
                        return data
                      }
                    });
                    this.sepmastosTotal = this.sepMastos.length;

                    //reportes mensuales
                    
                    this.oct4069 = this.datos.filter((data)=>{
                      if(data.mes == this.oct && data.edad >= this.valor1 && data.edad <= this.valor2){
                        return data
                      }
                    });

                    this.oct4069total = this.oct4069.length;

                    this.octMastos = this.datos.filter((data)=>{
                      if(data.mes == this.oct){
                        return data
                      }
                    });
                    this.octmastosTotal = this.octMastos.length;

                    //reportes mensuales
                    
                    this.nov4069 = this.datos.filter((data)=>{
                      if(data.mes == this.nov && data.edad >= this.valor1 && data.edad <= this.valor2){
                        return data
                      }
                    });

                    this.nov4069total = this.nov4069.length;

                    this.novMastos = this.datos.filter((data)=>{
                      if(data.mes == this.nov){
                        return data
                      }
                    });
                    this.novmastosTotal = this.novMastos.length;

                    //reportes mensuales
                    
                    this.dic4069 = this.datos.filter((data)=>{
                      if(data.mes == this.dic && data.edad >= this.valor1 && data.edad <= this.valor2){
                        return data
                      }
                    });

                    this.dic4069total = this.dic4069.length;

                    this.dicMastos = this.datos.filter((data)=>{
                      if(data.mes == this.dic){
                        return data
                      }
                    });
                    this.dicmastosTotal = this.dicMastos.length;
                    



                     //add 19/12/2021/////////
                    //MASTOS MENORES A 40 AÑOS

                    this.enemastomenor40 = this.datos.filter((data)=>{
                      if(data.mes == this.ene && data.edad < this.valor1){
                        return data;
                      }
                    });
                    this.enemastomenor40Total = this.enemastomenor40.length;

                    this.febmastomenor40 = this.datos.filter((data)=>{
                      if(data.mes == this.feb && data.edad < this.valor1){
                        return data;
                      }
                    });
                    this.febmastomenor40Total = this.febmastomenor40.length;

                    this.marmastomenor40 = this.datos.filter((data)=>{
                      if(data.mes == this.mar && data.edad < this.valor1){
                        return data;
                      }
                    });
                    this.marmastomenor40Total = this.marmastomenor40.length;

                    this.abrmastomenor40 = this.datos.filter((data)=>{
                      if(data.mes == this.abr && data.edad < this.valor1){
                        return data;
                      }
                    });
                    this.abrmastomenor40Total = this.abrmastomenor40.length;

                    this.maymastomenor40 = this.datos.filter((data)=>{
                      if(data.mes == this.may && data.edad < this.valor1){
                        return data;
                      }
                    });
                    this.maymastomenor40Total = this.maymastomenor40.length;

                    this.junmastomenor40 = this.datos.filter((data)=>{
                      if(data.mes == this.jun && data.edad < this.valor1){
                        return data;
                      }
                    });
                    this.junmastomenor40Total = this.junmastomenor40.length;

                    this.julmastomenor40 = this.datos.filter((data)=>{
                      if(data.mes == this.jul && data.edad < this.valor1){
                        return data;
                      }
                    });
                    this.julmastomenor40Total = this.julmastomenor40.length;

                    this.agomastomenor40 = this.datos.filter((data)=>{
                      if(data.mes == this.ago && data.edad < this.valor1){
                        return data;
                      }
                    });
                    this.agomastomenor40Total = this.agomastomenor40.length;

                    this.sepmastomenor40 = this.datos.filter((data)=>{
                      if(data.mes == this.sep && data.edad < this.valor1){
                        return data;
                      }
                    });
                    this.sepmastomenor40Total = this.sepmastomenor40.length;

                    this.octmastomenor40 = this.datos.filter((data)=>{
                      if(data.mes == this.oct && data.edad < this.valor1){
                        return data;
                      }
                    });
                    this.octmastomenor40Total = this.octmastomenor40.length;

                    this.novmastomenor40 = this.datos.filter((data)=>{
                      if(data.mes == this.nov && data.edad < this.valor1){
                        return data;
                      }
                    });
                    this.novmastomenor40Total = this.novmastomenor40.length;

                    this.dicmastomenor40 = this.datos.filter((data)=>{
                      if(data.mes == this.dic && data.edad < this.valor1){
                        return data;
                      }
                    });
                    this.dicmastomenor40Total = this.dicmastomenor40.length;


                    ///mastos mayores de 69 años

                    this.enemastomayor69 = this.datos.filter((data)=>{
                      if(data.mes == this.ene && data.edad > this.valor2){
                        return data;
                      }
                    });
                    this.enemastomayor69Total = this.enemastomayor69.length;

                    this.febmastomayor69 = this.datos.filter((data)=>{
                      if(data.mes == this.feb && data.edad > this.valor2){
                        return data;
                      }
                    });
                    this.febmastomayor69Total = this.febmastomayor69.length;

                    this.marmastomayor69 = this.datos.filter((data)=>{
                      if(data.mes == this.mar && data.edad > this.valor2){
                        return data;
                      }
                    });
                    this.marmastomayor69Total = this.marmastomayor69.length;

                    this.abrmastomayor69 = this.datos.filter((data)=>{
                      if(data.mes == this.abr && data.edad > this.valor2){
                        return data;
                      }
                    });
                    this.abrmastomayor69Total = this.abrmastomayor69.length;

                    this.maymastomayor69 = this.datos.filter((data)=>{
                      if(data.mes == this.may && data.edad > this.valor2){
                        return data;
                      }
                    });
                    this.maymastomayor69Total = this.maymastomayor69.length;

                    this.junmastomayor69 = this.datos.filter((data)=>{
                      if(data.mes == this.jun && data.edad > this.valor2){
                        return data;
                      }
                    });
                    this.junmastomayor69Total = this.junmastomayor69.length;

                    this.julmastomayor69 = this.datos.filter((data)=>{
                      if(data.mes == this.jul && data.edad > this.valor2){
                        return data;
                      }
                    });
                    this.julmastomayor69Total = this.julmastomayor69.length;

                    this.agomastomayor69 = this.datos.filter((data)=>{
                      if(data.mes == this.ago && data.edad > this.valor2){
                        return data;
                      }
                    });
                    this.agomastomayor69Total = this.agomastomayor69.length;

                    this.sepmastomayor69 = this.datos.filter((data)=>{
                      if(data.mes == this.sep && data.edad > this.valor2){
                        return data;
                      }
                    });
                    this.sepmastomayor69Total = this.sepmastomayor69.length;

                    this.octmastomayor69 = this.datos.filter((data)=>{
                      if(data.mes == this.oct && data.edad > this.valor2){
                        return data;
                      }
                    });
                    this.octmastomayor69Total = this.octmastomayor69.length;

                    this.novmastomayor69 = this.datos.filter((data)=>{
                      if(data.mes == this.nov && data.edad > this.valor2){
                        return data;
                      }
                    });
                    this.novmastomayor69Total = this.novmastomayor69.length;

                    this.dicmastomayor69 = this.datos.filter((data)=>{
                      if(data.mes == this.dic && data.edad > this.valor2){
                        return data;
                      }
                    });
                    this.dicmastomayor69Total = this.dicmastomayor69.length;



                    //////////////////////////




                    if (!this.datos) {
                      console.log("Error en el Servidor");
                    } else {
                      this.loading = false;
                    }




                  this.biradstotal0 = this.birads0.length;
                  this,this.birdas0generalTotal = this.birads0General.length;  
                  this.biradstotal1 = this.birads1.length;
                  this,this.birdas1generalTotal = this.birads1General.length;  
                  this.biradstotal2 = this.birads2.length;
                  this,this.birdas2generalTotal = this.birads2General.length;  
                  this.biradstotal3 = this.birads3.length;
                  this,this.birdas3generalTotal = this.birads3General.length;  
                  this.biradstotal4 = this.birads4.length;
                  this,this.birdas4generalTotal = this.birads4General.length;  
                  this.biradstotal4a = this.birads4a.length;
                  this,this.birdas4ageneralTotal = this.birads4aGeneral.length;  
                  this.biradstotal4b = this.birads4b.length;
                  this,this.birdas4bgeneralTotal = this.birads4bGeneral.length;  
                  this.biradstotal4c = this.birads4c.length;
                  this,this.birdas4cgeneralTotal = this.birads4cGeneral.length;  
                  this.biradstotal5 = this.birads5.length;
                  this,this.birdas5generalTotal = this.birads5General.length;  
                  this.biradstotal6 = this.birads6.length;
                  this.birdas6generalTotal = this.birads6General.length;  
                  this.biradsnullTotal = this.biradsNull.length;
                  this.refusmTotal = this.refUsm.length;
                  this.tomausmTotal = this.tomaUsm.length;
                  
                  this.metaMastoShow = this.metaMasto.length;
                  this.totalTomas = this.datos.length;


                 
          

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

  indiSelected(event){
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
