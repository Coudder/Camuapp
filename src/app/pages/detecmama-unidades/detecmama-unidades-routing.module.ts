import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetecmamaUnidadesPage } from './detecmama-unidades.page';

const routes: Routes = [
  {
    path: '',
    component: DetecmamaUnidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetecmamaUnidadesPageRoutingModule {}
