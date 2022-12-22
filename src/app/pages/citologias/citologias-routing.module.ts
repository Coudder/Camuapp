import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitologiasPage } from './citologias.page';

const routes: Routes = [
  {
    path: '',
    component: CitologiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitologiasPageRoutingModule {}
