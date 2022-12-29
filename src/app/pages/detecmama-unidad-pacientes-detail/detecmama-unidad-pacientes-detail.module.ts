import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetecmamaUnidadPacientesDetailPageRoutingModule } from './detecmama-unidad-pacientes-detail-routing.module';

import { DetecmamaUnidadPacientesDetailPage } from './detecmama-unidad-pacientes-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetecmamaUnidadPacientesDetailPageRoutingModule
  ],
  declarations: [DetecmamaUnidadPacientesDetailPage]
})
export class DetecmamaUnidadPacientesDetailPageModule {}
