import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetecmamaUnidadPacientesDetailPage } from './detecmama-unidad-pacientes-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DetecmamaUnidadPacientesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetecmamaUnidadPacientesDetailPageRoutingModule {}
