import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-vphs-pac-archivo',
  templateUrl: './vphs-pac-archivo.page.html',
  styleUrls: ['./vphs-pac-archivo.page.scss'],
  providers:[AdminService,DataService]
})
export class VphsPacArchivoPage implements OnInit {

  public title:string;
  public identity;
  public token;
  public id;
  public mensaje:boolean;
  public unidad:string
  public pacientes;
  public busqueda:string="";
  public numVph;
  public numCitoUnidad;
  public numFilas;

 
  public celda;
  public fila;
  public datos =[];
 
  
  public campos=[];
  public loading : boolean;

  public year;
  public yearSelected;

  public yearFiltrado;

  public numData; //ALL
 
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
  
  public errorMensaje;
  public mensajeConexion:boolean
  public cargadatosFail;

  constructor(
    private _adminService:AdminService,
    private _dataService:DataService
  ) 
  {
    this.title = 'ARCHIVO PACIENTES VPH';
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
    this.mensajeConexion =false;

   }

   filterYear = '';

  ngOnInit() {
    this.getvphpacArchivo();
  }

  getvphpacArchivo(){
      this._dataService.getvphArchivo().subscribe(
        response =>{

          let entries = response.values;
        let numFilas = entries.length;
       //console.log('Numero de Filas:' + numFilas);

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

        //console.log(this.datos);
        this.numVph = this.datos.length;

        if(!this.datos)
        {
          console.log('Error en el servidor de datos');
          //implementar mensaje de error que aparezca en interfaz
          this.cargadatosFail = 'Error al cargar Informaci??n'
        }else{
          this.loading = false;
        }
        },
        error =>{
          console.log(<any>error);
          console.log(error.message);
          
          console.log('Error en el servidor de datos');
          //implementar mensaje de error que aparezca en interfaz
          this.cargadatosFail = 'Error al cargar Informaci??n'
          this.mensajeConexion = true;
        }
      );
  }

  onSearchChange(event){

    this.busqueda = event.detail.value;
  }

  getYear(event){
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

  years(){

   
      if(this.numVph == 0){
        this.errorMensaje = 'No hay informaci??n para mostrar';
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

    
    this.yearFiltrado = this.datos.filter((data)=>{
      if(data.ano == '2019'){return data}});
        this.numData = this.yearFiltrado.length;    

        if(this.numData == 0){
          this.errorMensaje = 'No hay informaci??n para mostrar'
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
    this.yearFiltrado = this.datos.filter((data)=>{
      if(data.ano == '2020'){return data}});
        this.numData = this.yearFiltrado.length;    

        if(this.numData == 0){
          this.errorMensaje = 'No hay informaci??n para mostrar'
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
    this.yearFiltrado = this.datos.filter((data)=>{
      if(data.ano == '2021'){return data}});
        this.numData = this.yearFiltrado.length;    

        if(this.numData == 0){
          this.errorMensaje = 'No hay informaci??n para mostrar'
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
    this.yearFiltrado = this.datos.filter((data)=>{
      if(data.ano == '2022'){
        return data
      }
    });
        this.numData = this.yearFiltrado.length;    

        if(this.numData == 0){
          this.errorMensaje = 'No hay informaci??n para mostrar'
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
    this.yearFiltrado = this.datos.filter((data)=>{
      if(data.ano == '2023'){
        return data
      }
    });
        this.numData = this.yearFiltrado.length;    

        if(this.numData == 0){
          this.errorMensaje = 'No hay informaci??n para mostrar'
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
    this.yearFiltrado = this.datos.filter((data)=>{
      if(data.ano == '2024'){
        return data
      }
    });
        this.numData = this.yearFiltrado.length;    

        if(this.numData == 0){
          this.errorMensaje = 'No hay informaci??n para mostrar'
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
    this.yearFiltrado = this.datos.filter((data)=>{
      if(data.ano == '2025'){
        return data
      }
    });
        this.numData = this.yearFiltrado.length;    

        if(this.numData == 0){
          this.errorMensaje = 'No hay informaci??n para mostrar'
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
    this.yearFiltrado = this.datos.filter((data)=>{
      if(data.ano == '2026'){
        return data
      }
    });
        this.numData = this.yearFiltrado.length;    

        if(this.numData == 0){
          this.errorMensaje = 'No hay informaci??n para mostrar'
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
    this.yearFiltrado = this.datos.filter((data)=>{
      if(data.ano == '2027'){
        return data
      }
    });
        this.numData = this.yearFiltrado.length;    

        if(this.numData == 0){
          this.errorMensaje = 'No hay informaci??n para mostrar'
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
    this.yearFiltrado = this.datos.filter((data)=>{
      if(data.ano == '2028'){
        return data
      }
    });
        this.numData = this.yearFiltrado.length;    

        if(this.numData == 0){
          this.errorMensaje = 'No hay informaci??n para mostrar'
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
    this.yearFiltrado = this.datos.filter((data)=>{
      if(data.ano == '2029'){
        return data
      }
    });
        this.numData = this.yearFiltrado.length;    

        if(this.numData == 0){
          this.errorMensaje = 'No hay informaci??n para mostrar'
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
    this.yearFiltrado = this.datos.filter((data)=>{
      if(data.ano == '2030'){
        return data
      }
    });
        this.numData = this.yearFiltrado.length;    

        if(this.numData == 0){
          this.errorMensaje = 'No hay informaci??n para mostrar'
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
