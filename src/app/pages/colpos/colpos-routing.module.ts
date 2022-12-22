import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColposPage } from './colpos.page';

const routes: Routes = [
  {
    path: '',
    component: ColposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColposPageRoutingModule {}
