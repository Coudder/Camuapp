import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitoPacArchivoDetailPage } from './cito-pac-archivo-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CitoPacArchivoDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitoPacArchivoDetailPageRoutingModule {}
