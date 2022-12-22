import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VphsUnidadesDetailPage } from './vphs-unidades-detail.page';

const routes: Routes = [
  {
    path: '',
    component: VphsUnidadesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VphsUnidadesDetailPageRoutingModule {}
