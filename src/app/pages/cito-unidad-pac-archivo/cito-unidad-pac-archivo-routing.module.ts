import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitoUnidadPacArchivoPage } from './cito-unidad-pac-archivo.page';

const routes: Routes = [
  {
    path: '',
    component: CitoUnidadPacArchivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitoUnidadPacArchivoPageRoutingModule {}
