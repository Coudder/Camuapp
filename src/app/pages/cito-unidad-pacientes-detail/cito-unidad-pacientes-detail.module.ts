import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitoUnidadPacientesDetailPageRoutingModule } from './cito-unidad-pacientes-detail-routing.module';

import { CitoUnidadPacientesDetailPage } from './cito-unidad-pacientes-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitoUnidadPacientesDetailPageRoutingModule
  ],
  declarations: [CitoUnidadPacientesDetailPage]
})
export class CitoUnidadPacientesDetailPageModule {}
