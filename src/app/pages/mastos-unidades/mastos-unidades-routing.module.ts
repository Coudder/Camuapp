import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastosUnidadesPage } from './mastos-unidades.page';

const routes: Routes = [
  {
    path: '',
    component: MastosUnidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastosUnidadesPageRoutingModule {}
