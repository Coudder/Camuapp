import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastosPacientesPage } from './mastos-pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: MastosPacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastosPacientesPageRoutingModule {}
