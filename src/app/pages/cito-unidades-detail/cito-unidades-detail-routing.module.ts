import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitoUnidadesDetailPage } from './cito-unidades-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CitoUnidadesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitoUnidadesDetailPageRoutingModule {}
