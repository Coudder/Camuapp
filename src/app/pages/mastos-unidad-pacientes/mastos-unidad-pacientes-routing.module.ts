import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastosUnidadPacientesPage } from './mastos-unidad-pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: MastosUnidadPacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastosUnidadPacientesPageRoutingModule {}
