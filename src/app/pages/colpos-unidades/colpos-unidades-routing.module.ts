import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColposUnidadesPage } from './colpos-unidades.page';

const routes: Routes = [
  {
    path: '',
    component: ColposUnidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColposUnidadesPageRoutingModule {}
