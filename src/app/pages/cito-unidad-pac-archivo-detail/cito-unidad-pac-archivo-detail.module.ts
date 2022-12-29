import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitoUnidadPacArchivoDetailPageRoutingModule } from './cito-unidad-pac-archivo-detail-routing.module';

import { CitoUnidadPacArchivoDetailPage } from './cito-unidad-pac-archivo-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitoUnidadPacArchivoDetailPageRoutingModule
  ],
  declarations: [CitoUnidadPacArchivoDetailPage]
})
export class CitoUnidadPacArchivoDetailPageModule {}
