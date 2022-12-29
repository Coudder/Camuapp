import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VphsUnidadPacientesDetailPageRoutingModule } from './vphs-unidad-pacientes-detail-routing.module';

import { VphsUnidadPacientesDetailPage } from './vphs-unidad-pacientes-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VphsUnidadPacientesDetailPageRoutingModule
  ],
  declarations: [VphsUnidadPacientesDetailPage]
})
export class VphsUnidadPacientesDetailPageModule {}
