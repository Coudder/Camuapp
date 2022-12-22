import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetecmamaPacientesDetailPage } from './detecmama-pacientes-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DetecmamaPacientesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetecmamaPacientesDetailPageRoutingModule {}
