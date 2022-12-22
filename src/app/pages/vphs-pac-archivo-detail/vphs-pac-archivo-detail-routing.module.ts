import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VphsPacArchivoDetailPage } from './vphs-pac-archivo-detail.page';

const routes: Routes = [
  {
    path: '',
    component: VphsPacArchivoDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VphsPacArchivoDetailPageRoutingModule {}
