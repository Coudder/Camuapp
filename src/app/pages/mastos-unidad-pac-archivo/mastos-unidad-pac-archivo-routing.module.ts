import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastosUnidadPacArchivoPage } from './mastos-unidad-pac-archivo.page';

const routes: Routes = [
  {
    path: '',
    component: MastosUnidadPacArchivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastosUnidadPacArchivoPageRoutingModule {}
