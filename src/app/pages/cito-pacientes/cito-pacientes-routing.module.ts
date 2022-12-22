import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitoPacientesPage } from './cito-pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: CitoPacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitoPacientesPageRoutingModule {}
