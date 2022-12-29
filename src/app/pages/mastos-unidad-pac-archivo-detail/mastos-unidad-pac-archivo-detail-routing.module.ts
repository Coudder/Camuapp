import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastosUnidadPacArchivoDetailPage } from './mastos-unidad-pac-archivo-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MastosUnidadPacArchivoDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastosUnidadPacArchivoDetailPageRoutingModule {}
