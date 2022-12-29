import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColposUnidadPacientesPage } from './colpos-unidad-pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: ColposUnidadPacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColposUnidadPacientesPageRoutingModule {}
