import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastosPacArchivoPage } from './mastos-pac-archivo.page';

const routes: Routes = [
  {
    path: '',
    component: MastosPacArchivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastosPacArchivoPageRoutingModule {}
