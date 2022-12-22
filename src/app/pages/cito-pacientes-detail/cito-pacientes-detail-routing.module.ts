import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitoPacientesDetailPage } from './cito-pacientes-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CitoPacientesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitoPacientesDetailPageRoutingModule {}
