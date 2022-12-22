import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitoPacientesDetailPageRoutingModule } from './cito-pacientes-detail-routing.module';

import { CitoPacientesDetailPage } from './cito-pacientes-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitoPacientesDetailPageRoutingModule,
  ],
  declarations: [CitoPacientesDetailPage]
})
export class CitoPacientesDetailPageModule {}
