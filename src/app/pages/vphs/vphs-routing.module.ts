import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VphsPage } from './vphs.page';

const routes: Routes = [
  {
    path: '',
    component: VphsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VphsPageRoutingModule {}
