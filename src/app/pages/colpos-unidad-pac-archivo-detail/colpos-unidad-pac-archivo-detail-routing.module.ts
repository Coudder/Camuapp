import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColposUnidadPacArchivoDetailPage } from './colpos-unidad-pac-archivo-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ColposUnidadPacArchivoDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColposUnidadPacArchivoDetailPageRoutingModule {}
