import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VphsPacientesPage } from './vphs-pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: VphsPacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VphsPacientesPageRoutingModule {}
