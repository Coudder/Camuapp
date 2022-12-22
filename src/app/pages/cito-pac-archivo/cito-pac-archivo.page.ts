import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-cito-pac-archivo',
  templateUrl: './cito-pac-archivo.page.html',
  styleUrls: ['./cito-pac-archivo.page.scss'],
  providers:[AdminService,DataService]
})
export class CitoPacArchivoPage implements OnInit {

  public title:string;
  public identity:any;
  public token:any;
  public id:any;
  public mensaje:boolean;
  public unidad:any;
  public pacientes:any;
  public busqueda:string="";
  public numCito:any;
  public numCitoUnidad:any;
  public numFilas:any;

 
  public celda:any;
  public fila:any;
  public datos:any =[];
 
  
  public campos:any=[];
  public loading : boolean;

  public year;
  public yearSelected:any;

  public yearFiltrado:any;

  public numData:any; //ALL
 


  public showData:boolean

  public anio2019:boolean;
  public anio2020:boolean;
  public anio2021:boolean;
  public anio2022:boolean;
  public anio2023:boolean;
  public anio2024:boolean;
  public anio2025:boolean;
  public anio2026:boolean;
  public anio2027:boolean;
  public anio2028:boolean;
  public anio2029:boolean;
  public anio2030:boolean;
  public allyears:boolean;
  
  public errorMensaje:any;

  
  


  constructor(
    private _adminService:AdminService,
    private _dataService:DataService

  ) {
    this.title = "ARCHIVO PACIENTES CITOLOGIAS"
    this.loading = true;

    this.year = [{years: ''},{years:'All'},{years:'2019'},{years:'2020'},{years:'2021'},{years:'2022'},{years:'2023'},{years:'2024'},
    {years:'2025'},{years:'2026'},{years:'2027'},{years:'2028'},{years:'2029'},{years:'2030'} ]

    this.showData = false;
    
    this.anio2019 = false;
    this.anio2020 = false;
    this.anio2021 = false;
    this.anio2022 = false;
    this.anio2023 = false;
    this.anio2024 = false;
    this.anio2025 = false;
    this.anio2026 = false;
    this.anio2027 = false;
    this.anio2028 = false;
    this.anio2029 = false;
    this.anio2030 = false;
    this.allyears = false;

    this.mensaje = false;
   

   }

   filterYear = '';

  ngOnInit() {
    this.getcitoarchivoPac();
  }


  getcitoarchivoPac(){
    this._dataService.getcitoArchivo().subscribe(
      response => {

        let entries = response.values;
        let numFilas = entries.length;
       // console.log('Numero de Filas:' + numFilas);

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

        //console.log(this.datos);

        this.numCito = this.datos.length;

        if(!this.datos)
        {
          console.log('Error en el servidor de datos');
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

  getYear(event:any){
    //console.log(event);
    //this.yearSelected = event.detail.value;
    this.yearSelected = event.detail.value;
  
    //console.log(this.yearSelected);


    switch(this.yearSelected){

      case '  ':
        this.allyears = false;
        this.anio2019 = false;
        this.anio2020 = false;
        this.anio2021 = false;
        this.anio2022 = false;
        this.anio2023 = false;
        this.anio2024 = false;
        this.anio2025 = false;
        this.anio2026 = false;
        this.anio2027 = false;
        this.anio2028 = false;
        this.anio2029 = false;
        this.anio2030 = false;
        this.mensaje = false;
        break;
      
      case ' All ':
          this.allyears = true;
          this.anio2019 = false;
          this.anio2020 = false;
          this.anio2021 = false;
          this.anio2022 = false;
          this.anio2023 = false;
          this.anio2024 = false;
          this.anio2025 = false;
          this.anio2026 = false;
          this.anio2027 = false;
          this.anio2028 = false;
          this.anio2029 = false;
          this.anio2030 = false;
          this.years();
        break;
      
      case ' 2019 ':
          this.allyears = false;
          this.anio2019 = true;
          this.anio2020 = false;
          this.anio2021 = false;
          this.anio2022 = false;
          this.anio2023 = false;
          this.anio2024 = false;
          this.anio2025 = false;
          this.anio2026 = false;
          this.anio2027 = false;
          this.anio2028 = false;
          this.anio2029 = false;
          this.anio2030 = false;
          this.year2019();
        
        break;

      case ' 2020 ':
          this.allyears = false;
          this.anio2019 = false;
          this.anio2020 = true;
          this.anio2021 = false;
          this.anio2022 = false;
          this.anio2023 = false;
          this.anio2024 = false;
          this.anio2025 = false;
          this.anio2026 = false;
          this.anio2027 = false;
          this.anio2028 = false;
          this.anio2029 = false;
          this.anio2030 = false;
          this.year2020();
        break;
      
        case ' 2021 ':
          this.allyears = false;
          this.anio2019 = false;
          this.anio2020 = false;
          this.anio2021 = true;
          this.anio2022 = false;
          this.anio2023 = false;
          this.anio2024 = false;
          this.anio2025 = false;
          this.anio2026 = false;
          this.anio2027 = false;
          this.anio2028 = false;
          this.anio2029 = false;
          this.anio2030 = false;
          this.year2021();
        break; 

        case ' 2022 ':
          this.allyears = false;
          this.anio2019 = false;
          this.anio2020 = false;
          this.anio2021 = false;
          this.anio2022 = true;
          this.anio2023 = false;
          this.anio2024 = false;
          this.anio2025 = false;
          this.anio2026 = false;
          this.anio2027 = false;
          this.anio2028 = false;
          this.anio2029 = false;
          this.anio2030 = false;
          this.year2022();
        break;
        case ' 2023 ':
          this.allyears = false;
          this.anio2019 = false;
          this.anio2020 = false;
          this.anio2021 = false;
          this.anio2022 = false;
          this.anio2023 = true;
          this.anio2024 = false;
          this.anio2025 = false;
          this.anio2026 = false;
          this.anio2027 = false;
          this.anio2028 = false;
          this.anio2029 = false;
          this.anio2030 = false;
          this.year2023();
        break;
        case ' 2024 ':
          this.allyears = false;
          this.anio2019 = false;
          this.anio2020 = false;
          this.anio2021 = false;
          this.anio2022 = false;
          this.anio2023 = false;
          this.anio2024 = true;
          this.anio2025 = false;
          this.anio2026 = false;
          this.anio2027 = false;
          this.anio2028 = false;
          this.anio2029 = false;
          this.anio2030 = false;
          this.year2024();
        break;
        case ' 2025 ':
          this.allyears = false;
          this.anio2019 = false;
          this.anio2020 = false;
          this.anio2021 = false;
          this.anio2022 = false;
          this.anio2023 = false;
          this.anio2024 = false;
          this.anio2025 = true;
          this.anio2026 = false;
          this.anio2027 = false;
          this.anio2028 = false;
          this.anio2029 = false;
          this.anio2030 = false;
          this.year2025();
        break;
        case ' 2026 ':
          this.allyears = false;
          this.anio2019 = false;
          this.anio2020 = false;
          this.anio2021 = false;
          this.anio2022 = false;
          this.anio2023 = false;
          this.anio2024 = false;
          this.anio2025 = false;
          this.anio2026 = true;
          this.anio2027 = false;
          this.anio2028 = false;
          this.anio2029 = false;
          this.anio2030 = false;
          this.year2026();
        break;
        case ' 2027 ':
          this.allyears = false;
          this.anio2019 = false;
          this.anio2020 = false;
          this.anio2021 = false;
          this.anio2022 = false;
          this.anio2023 = false;
          this.anio2024 = false;
          this.anio2025 = false;
          this.anio2026 = false;
          this.anio2027 = true;
          this.anio2028 = false;
          this.anio2029 = false;
          this.anio2030 = false;
          this.year2027();
        break;
        case ' 2028 ':
          this.allyears = false;
          this.anio2019 = false;
          this.anio2020 = false;
          this.anio2021 = false;
          this.anio2022 = false;
          this.anio2023 = false;
          this.anio2024 = false;
          this.anio2025 = false;
          this.anio2026 = false;
          this.anio2027 = false;
          this.anio2028 = true;
          this.anio2029 = false;
          this.anio2030 = false;
          this.year2028();
        break;
        case ' 2029 ':
          this.allyears = false;
          this.anio2019 = false;
          this.anio2020 = false;
          this.anio2021 = false;
          this.anio2022 = false;
          this.anio2023 = false;
          this.anio2024 = false;
          this.anio2025 = false;
          this.anio2026 = false;
          this.anio2027 = false;
          this.anio2028 = false;
          this.anio2029 = true;
          this.anio2030 = false;
          this.year2029();
        break;
        case ' 2030 ':
          this.allyears = false;
          this.anio2019 = false;
          this.anio2020 = false;
          this.anio2021 = false;
          this.anio2022 = false;
          this.anio2023 = false;
          this.anio2024 = false;
          this.anio2025 = false;
          this.anio2026 = false;
          this.anio2027 = false;
          this.anio2028 = false;
          this.anio2029 = false;
          this.anio2030 = true;
          this.year2030();
        break;
    }
    
  }

  none(){
    
  }

  years(){

  // this.getcitoarchivoPac();

     // console.log(this.datos);

    //  this._dataService.getcitoArchivo().subscribe(
    //   response => {

    //     let entries = response.values;
    //     let numFilas = entries.length;
    //    // console.log('Numero de Filas:' + numFilas);

    //     //procesar datos

    //     for(var f=0; f<numFilas; f++)
    //     {
    //       let fila = entries[f];

    //       let obj = {}

    //       for(var c=0; c<fila.length; c++)
    //       {
    //         this.celda = fila[c];

    //         if(f == 0)
    //         {
    //             this.campos.push(this.celda);
    //         }else{
    //           obj[this.campos[c]] = this.celda;
    //         }
    //       }

    //       if(f>0) this.datos.push(obj);
    //     }

    //     //console.log(this.datos);

    //     this.numCito = this.datos.length;

    //     if(!this.datos)
    //     {
    //       console.log('Error en el servidor de datos');
    //     }else{
    //       this.loading = false;
    //     }

      

    //   },
    //   error => {
    //     console.log(<any>error);
        
    //   }
    // );

    if(this.numCito == 0){
      this.errorMensaje = 'No hay información para mostrar';
      this.mensaje = true;
      this.anio2019 = false;
      this.anio2020 = false;
      this.anio2021 = false;
      this.anio2022 = false;
      this.anio2023 = false;
      this.anio2024 = false;
      this.anio2025 = false;
      this.anio2026 = false;
      this.anio2027 = false;
      this.anio2028 = false;
      this.anio2029 = false;
      this.anio2030 = false;
    }else{
      this.mensaje = false;
    }
    
  }

  year2019(){

    //datos generales
    // this._dataService.getcitoArchivo().subscribe(
    //   response => {

    //     let entries = response.values;
    //     let numFilas = entries.length;
    //    // console.log('Numero de Filas:' + numFilas);

    //     //procesar datos

    //     for(var f=0; f<numFilas; f++)
    //     {
    //       let fila = entries[f];

    //       let obj = {}

    //       for(var c=0; c<fila.length; c++)
    //       {
    //         this.celda = fila[c];

    //         if(f == 0)
    //         {
    //             this.campos.push(this.celda);
    //         }else{
    //           obj[this.campos[c]] = this.celda;
    //         }
    //       }

    //       if(f>0) this.datosA.push(obj);
    //     }

    //     console.log(this.datosA);

    //    // this.numCito = this.datos.length;

    //     if(!this.datosA)
    //     {
    //       console.log('Error en el servidor de datos');
    //     }else{
    //       this.loading = false;
    //     }


        
     


    //   },
    //   error => {
    //     console.log(<any>error);
        
    //   }
    // );
   

    this.yearFiltrado = this.datos.filter((data:any)=>{
      if(data.ano == '2019'){return data}});
        this.numData = this.yearFiltrado.length;    

        if(this.numData == 0){
          this.errorMensaje = 'No hay información para mostrar'
          this.mensaje = true;
          this.anio2019 = false;
          this.anio2020 = false;
          this.anio2021 = false;
          this.anio2022 = false;
          this.anio2023 = false;
          this.anio2024 = false;
          this.anio2025 = false;
          this.anio2026 = false;
          this.anio2027 = false;
          this.anio2028 = false;
          this.anio2029 = false;
          this.anio2030 = false;
        }else{
          this.mensaje = false;
         
        }


  }

  year2020(){

    // this._dataService.getcitoArchivo().subscribe(
    //   response => {

    //     let entries = response.values;
    //     let numFilas = entries.length;
    //    // console.log('Numero de Filas:' + numFilas);

    //     //procesar datos

    //     for(var f=0; f<numFilas; f++)
    //     {
    //       let fila = entries[f];

    //       let obj = {}

    //       for(var c=0; c<fila.length; c++)
    //       {
    //         this.celda = fila[c];

    //         if(f == 0)
    //         {
    //             this.campos.push(this.celda);
    //         }else{
    //           obj[this.campos[c]] = this.celda;
    //         }
    //       }

    //       if(f>0) this.datosB.push(obj);
    //     }

    //     //console.log(this.datos);

    //     //this.numCito = this.datos.length;

    //     if(!this.datosB)
    //     {
    //       console.log('Error en el servidor de datos');
    //     }else{
    //       this.loading = false;
    //     }

        
    //   },
    //   error => {
    //     console.log(<any>error);
        
    //   }
    // );

    this.yearFiltrado = this.datos.filter((data:any)=>{
      if(data.ano == '2020'){return data}});
        this.numData = this.yearFiltrado.length;    

        if(this.numData == 0){
          this.errorMensaje = 'No hay información para mostrar'
          this.mensaje = true;
          this.anio2019 = false;
          this.anio2020 = false;
          this.anio2021 = false;
          this.anio2022 = false;
          this.anio2023 = false;
          this.anio2024 = false;
          this.anio2025 = false;
          this.anio2026 = false;
          this.anio2027 = false;
          this.anio2028 = false;
          this.anio2029 = false;
          this.anio2030 = false;
        }else{
          this.mensaje = false
        }



  }

  year2021(){
    this.yearFiltrado = this.datos.filter((data:any)=>{
      if(data.ano == '2021'){return data}});
        this.numData = this.yearFiltrado.length;    

        if(this.numData == 0){
          this.errorMensaje = 'No hay información para mostrar'
          this.mensaje = true;
          this.anio2019 = false;
          this.anio2020 = false;
          this.anio2021 = false;
          this.anio2022 = false;
          this.anio2023 = false;
          this.anio2024 = false;
          this.anio2025 = false;
          this.anio2026 = false;
          this.anio2027 = false;
          this.anio2028 = false;
          this.anio2029 = false;
          this.anio2030 = false;
        }else{
          this.mensaje=false;
        }

  }
  year2022(){
    this.yearFiltrado = this.datos.filter((data:any)=>{
      if(data.ano == '2022'){
        return data
      }
    });
        this.numData = this.yearFiltrado.length;    

        if(this.numData == 0){
          this.errorMensaje = 'No hay información para mostrar'
          this.mensaje = true;
          this.anio2019 = false;
          this.anio2020 = false;
          this.anio2021 = false;
          this.anio2022 = false;
          this.anio2023 = false;
          this.anio2024 = false;
          this.anio2025 = false;
          this.anio2026 = false;
          this.anio2027 = false;
          this.anio2028 = false;
          this.anio2029 = false;
          this.anio2030 = false;
        }else{
          this.mensaje = false;
        }
  }
  year2023(){
    this.yearFiltrado = this.datos.filter((data:any)=>{
      if(data.ano == '2023'){
        return data
      }
    });
        this.numData = this.yearFiltrado.length;    

        if(this.numData == 0){
          this.errorMensaje = 'No hay información para mostrar'
          this.mensaje = true;
          this.anio2019 = false;
          this.anio2020 = false;
          this.anio2021 = false;
          this.anio2022 = false;
          this.anio2023 = false;
          this.anio2024 = false;
          this.anio2025 = false;
          this.anio2026 = false;
          this.anio2027 = false;
          this.anio2028 = false;
          this.anio2029 = false;
          this.anio2030 = false;
        }else{
          this.mensaje = false;
        }

  }
  year2024(){
    this.yearFiltrado = this.datos.filter((data:any)=>{
      if(data.ano == '2024'){
        return data
      }
    });
        this.numData = this.yearFiltrado.length;    

        if(this.numData == 0){
          this.errorMensaje = 'No hay información para mostrar'
          this.mensaje = true;
          this.anio2019 = false;
          this.anio2020 = false;
          this.anio2021 = false;
          this.anio2022 = false;
          this.anio2023 = false;
          this.anio2024 = false;
          this.anio2025 = false;
          this.anio2026 = false;
          this.anio2027 = false;
          this.anio2028 = false;
          this.anio2029 = false;
          this.anio2030 = false;
        }else{
          this.mensaje = false;
        }

  }
  year2025(){
    this.yearFiltrado = this.datos.filter((data:any)=>{
      if(data.ano == '2025'){
        return data
      }
    });
        this.numData = this.yearFiltrado.length;    

        if(this.numData == 0){
          this.errorMensaje = 'No hay información para mostrar'
          this.mensaje = true;
          this.anio2019 = false;
          this.anio2020 = false;
          this.anio2021 = false;
          this.anio2022 = false;
          this.anio2023 = false;
          this.anio2024 = false;
          this.anio2025 = false;
          this.anio2026 = false;
          this.anio2027 = false;
          this.anio2028 = false;
          this.anio2029 = false;
          this.anio2030 = false;
        }else{
          this.mensaje = false;
        }

  }
  year2026(){
    this.yearFiltrado = this.datos.filter((data:any)=>{
      if(data.ano == '2026'){
        return data
      }
    });
        this.numData = this.yearFiltrado.length;    

        if(this.numData == 0){
          this.errorMensaje = 'No hay información para mostrar'
          this.mensaje = true;
          this.anio2019 = false;
          this.anio2020 = false;
          this.anio2021 = false;
          this.anio2022 = false;
          this.anio2023 = false;
          this.anio2024 = false;
          this.anio2025 = false;
          this.anio2026 = false;
          this.anio2027 = false;
          this.anio2028 = false;
          this.anio2029 = false;
          this.anio2030 = false;
        }else{
          this.mensaje = false;
        }

  }
  year2027(){
    this.yearFiltrado = this.datos.filter((data:any)=>{
      if(data.ano == '2027'){
        return data
      }
    });
        this.numData = this.yearFiltrado.length;    

        if(this.numData == 0){
          this.errorMensaje = 'No hay información para mostrar'
          this.mensaje = true;
          this.anio2019 = false;
          this.anio2020 = false;
          this.anio2021 = false;
          this.anio2022 = false;
          this.anio2023 = false;
          this.anio2024 = false;
          this.anio2025 = false;
          this.anio2026 = false;
          this.anio2027 = false;
          this.anio2028 = false;
          this.anio2029 = false;
          this.anio2030 = false;
        }else{
          this.mensaje = false;
        }

  }
  year2028(){
    this.yearFiltrado = this.datos.filter((data:any)=>{
      if(data.ano == '2028'){
        return data
      }
    });
        this.numData = this.yearFiltrado.length;    

        if(this.numData == 0){
          this.errorMensaje = 'No hay información para mostrar'
          this.mensaje = true;
          this.anio2019 = false;
          this.anio2020 = false;
          this.anio2021 = false;
          this.anio2022 = false;
          this.anio2023 = false;
          this.anio2024 = false;
          this.anio2025 = false;
          this.anio2026 = false;
          this.anio2027 = false;
          this.anio2028 = false;
          this.anio2029 = false;
          this.anio2030 = false;
        }else{
          this.mensaje = false;
        }

  }
  year2029(){
    this.yearFiltrado = this.datos.filter((data:any)=>{
      if(data.ano == '2029'){
        return data
      }
    });
        this.numData = this.yearFiltrado.length;    

        if(this.numData == 0){
          this.errorMensaje = 'No hay información para mostrar'
          this.mensaje = true;
          this.anio2019 = false;
          this.anio2020 = false;
          this.anio2021 = false;
          this.anio2022 = false;
          this.anio2023 = false;
          this.anio2024 = false;
          this.anio2025 = false;
          this.anio2026 = false;
          this.anio2027 = false;
          this.anio2028 = false;
          this.anio2029 = false;
          this.anio2030 = false;
        }else{
          this.mensaje = false;
        }

  }
  year2030(){
    this.yearFiltrado = this.datos.filter((data:any)=>{
      if(data.ano == '2030'){
        return data
      }
    });
        this.numData = this.yearFiltrado.length;    

        if(this.numData == 0){
          this.errorMensaje = 'No hay información para mostrar'
          this.mensaje = true;
          this.anio2019 = false;
          this.anio2020 = false;
          this.anio2021 = false;
          this.anio2022 = false;
          this.anio2023 = false;
          this.anio2024 = false;
          this.anio2025 = false;
          this.anio2026 = false;
          this.anio2027 = false;
          this.anio2028 = false;
          this.anio2029 = false;
          this.anio2030 = false;
        }else{
          this.mensaje = false;
        }

  }

}
