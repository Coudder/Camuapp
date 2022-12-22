import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastosPacArchivoDetailPage } from './mastos-pac-archivo-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MastosPacArchivoDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastosPacArchivoDetailPageRoutingModule {}
