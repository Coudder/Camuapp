import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColposUnidadPacientesDetailPageRoutingModule } from './colpos-unidad-pacientes-detail-routing.module';

import { ColposUnidadPacientesDetailPage } from './colpos-unidad-pacientes-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColposUnidadPacientesDetailPageRoutingModule
  ],
  declarations: [ColposUnidadPacientesDetailPage]
})
export class ColposUnidadPacientesDetailPageModule {}
