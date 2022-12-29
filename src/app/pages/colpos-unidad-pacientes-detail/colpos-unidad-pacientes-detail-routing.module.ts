import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColposUnidadPacientesDetailPage } from './colpos-unidad-pacientes-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ColposUnidadPacientesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColposUnidadPacientesDetailPageRoutingModule {}
