import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColposUnidadPacArchivoPage } from './colpos-unidad-pac-archivo.page';

const routes: Routes = [
  {
    path: '',
    component: ColposUnidadPacArchivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColposUnidadPacArchivoPageRoutingModule {}
