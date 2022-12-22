import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastosPacientesDetailPage } from './mastos-pacientes-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MastosPacientesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastosPacientesDetailPageRoutingModule {}
