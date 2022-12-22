import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroUni'
})
export class FiltroUniPipe implements PipeTransform {

  transform(arreglo: any, texto:string=''): any {

    if(texto === '')
    {
      return arreglo;
    }

    if(!arreglo){
      return arreglo
    }

    texto = texto.toLocaleLowerCase();

    return arreglo.filter(
      (      item: { nombre_unidad: string; }) => item.nombre_unidad.toLocaleLowerCase().includes(texto)
    );
  }

}
