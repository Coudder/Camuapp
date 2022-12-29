import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MastosUnidadPacientesDetailPageRoutingModule } from './mastos-unidad-pacientes-detail-routing.module';

import { MastosUnidadPacientesDetailPage } from './mastos-unidad-pacientes-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MastosUnidadPacientesDetailPageRoutingModule
  ],
  declarations: [MastosUnidadPacientesDetailPage]
})
export class MastosUnidadPacientesDetailPageModule {}
