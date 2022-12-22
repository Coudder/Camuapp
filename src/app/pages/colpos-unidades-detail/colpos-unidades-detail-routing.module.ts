import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColposUnidadesDetailPage } from './colpos-unidades-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ColposUnidadesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColposUnidadesDetailPageRoutingModule {}
