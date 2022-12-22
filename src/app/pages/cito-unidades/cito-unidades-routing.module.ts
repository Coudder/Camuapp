import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitoUnidadesPage } from './cito-unidades.page';

const routes: Routes = [
  {
    path: '',
    component: CitoUnidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitoUnidadesPageRoutingModule {}
