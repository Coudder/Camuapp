import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MastosPacientesDetailPageRoutingModule } from './mastos-pacientes-detail-routing.module';

import { MastosPacientesDetailPage } from './mastos-pacientes-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MastosPacientesDetailPageRoutingModule
  ],
  declarations: [MastosPacientesDetailPage]
})
export class MastosPacientesDetailPageModule {}
