import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VphsUnidadPacArchivoDetailPageRoutingModule } from './vphs-unidad-pac-archivo-detail-routing.module';

import { VphsUnidadPacArchivoDetailPage } from './vphs-unidad-pac-archivo-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VphsUnidadPacArchivoDetailPageRoutingModule
  ],
  declarations: [VphsUnidadPacArchivoDetailPage]
})
export class VphsUnidadPacArchivoDetailPageModule {}
