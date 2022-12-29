import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetecmamaUnidadPacArchivoDetailPageRoutingModule } from './detecmama-unidad-pac-archivo-detail-routing.module';

import { DetecmamaUnidadPacArchivoDetailPage } from './detecmama-unidad-pac-archivo-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetecmamaUnidadPacArchivoDetailPageRoutingModule
  ],
  declarations: [DetecmamaUnidadPacArchivoDetailPage]
})
export class DetecmamaUnidadPacArchivoDetailPageModule {}
