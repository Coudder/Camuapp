import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetecmamaUnidadPacArchivoDetailPage } from './detecmama-unidad-pac-archivo-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DetecmamaUnidadPacArchivoDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetecmamaUnidadPacArchivoDetailPageRoutingModule {}
