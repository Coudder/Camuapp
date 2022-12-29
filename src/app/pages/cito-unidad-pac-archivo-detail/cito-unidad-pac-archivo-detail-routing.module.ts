import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitoUnidadPacArchivoDetailPage } from './cito-unidad-pac-archivo-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CitoUnidadPacArchivoDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitoUnidadPacArchivoDetailPageRoutingModule {}
