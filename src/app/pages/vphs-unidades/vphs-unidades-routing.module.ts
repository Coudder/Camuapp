import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VphsUnidadesPage } from './vphs-unidades.page';

const routes: Routes = [
  {
    path: '',
    component: VphsUnidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VphsUnidadesPageRoutingModule {}
