import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetecmamaPacArchivoDetailPage } from './detecmama-pac-archivo-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DetecmamaPacArchivoDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetecmamaPacArchivoDetailPageRoutingModule {}
