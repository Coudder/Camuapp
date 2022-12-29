import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetecmamaUnidadPacientesPage } from './detecmama-unidad-pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: DetecmamaUnidadPacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetecmamaUnidadPacientesPageRoutingModule {}
