import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastosUnidadesDetailPage } from './mastos-unidades-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MastosUnidadesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastosUnidadesDetailPageRoutingModule {}
