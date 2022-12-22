import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetecmamaPacientesDetailPageRoutingModule } from './detecmama-pacientes-detail-routing.module';

import { DetecmamaPacientesDetailPage } from './detecmama-pacientes-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetecmamaPacientesDetailPageRoutingModule
  ],
  declarations: [DetecmamaPacientesDetailPage]
})
export class DetecmamaPacientesDetailPageModule {}
