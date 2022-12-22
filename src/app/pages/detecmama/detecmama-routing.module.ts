import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetecmamaPage } from './detecmama.page';

const routes: Routes = [
  {
    path: '',
    component: DetecmamaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetecmamaPageRoutingModule {}
