import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitoUnidadPacientesPage } from './cito-unidad-pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: CitoUnidadPacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitoUnidadPacientesPageRoutingModule {}
