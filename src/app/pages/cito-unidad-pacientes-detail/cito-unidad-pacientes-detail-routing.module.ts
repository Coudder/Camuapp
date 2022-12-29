import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitoUnidadPacientesDetailPage } from './cito-unidad-pacientes-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CitoUnidadPacientesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitoUnidadPacientesDetailPageRoutingModule {}
