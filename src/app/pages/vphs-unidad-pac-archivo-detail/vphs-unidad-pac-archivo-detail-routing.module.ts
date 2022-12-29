import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VphsUnidadPacArchivoDetailPage } from './vphs-unidad-pac-archivo-detail.page';

const routes: Routes = [
  {
    path: '',
    component: VphsUnidadPacArchivoDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VphsUnidadPacArchivoDetailPageRoutingModule {}
