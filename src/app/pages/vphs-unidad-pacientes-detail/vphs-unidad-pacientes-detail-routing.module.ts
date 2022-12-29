import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VphsUnidadPacientesDetailPage } from './vphs-unidad-pacientes-detail.page';

const routes: Routes = [
  {
    path: '',
    component: VphsUnidadPacientesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VphsUnidadPacientesDetailPageRoutingModule {}
