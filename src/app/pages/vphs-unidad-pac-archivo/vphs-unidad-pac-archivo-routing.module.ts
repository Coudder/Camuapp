import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VphsUnidadPacArchivoPage } from './vphs-unidad-pac-archivo.page';

const routes: Routes = [
  {
    path: '',
    component: VphsUnidadPacArchivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VphsUnidadPacArchivoPageRoutingModule {}
