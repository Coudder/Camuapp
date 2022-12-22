import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetecmamaPacArchivoPage } from './detecmama-pac-archivo.page';

const routes: Routes = [
  {
    path: '',
    component: DetecmamaPacArchivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetecmamaPacArchivoPageRoutingModule {}
