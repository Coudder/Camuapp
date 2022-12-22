import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetecmamaPacientesPage } from './detecmama-pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: DetecmamaPacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetecmamaPacientesPageRoutingModule {}
