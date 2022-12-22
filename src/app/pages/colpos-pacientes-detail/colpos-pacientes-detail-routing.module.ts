import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColposPacientesDetailPage } from './colpos-pacientes-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ColposPacientesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColposPacientesDetailPageRoutingModule {}
