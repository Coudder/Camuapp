import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitoPacArchivoPage } from './cito-pac-archivo.page';

const routes: Routes = [
  {
    path: '',
    component: CitoPacArchivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitoPacArchivoPageRoutingModule {}
