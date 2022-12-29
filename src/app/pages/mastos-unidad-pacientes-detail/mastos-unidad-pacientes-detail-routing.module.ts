import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastosUnidadPacientesDetailPage } from './mastos-unidad-pacientes-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MastosUnidadPacientesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastosUnidadPacientesDetailPageRoutingModule {}
