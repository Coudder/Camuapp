import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VphsUnidadPacientesPage } from './vphs-unidad-pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: VphsUnidadPacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VphsUnidadPacientesPageRoutingModule {}
