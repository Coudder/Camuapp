import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VphsPacArchivoPage } from './vphs-pac-archivo.page';

const routes: Routes = [
  {
    path: '',
    component: VphsPacArchivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VphsPacArchivoPageRoutingModule {}
