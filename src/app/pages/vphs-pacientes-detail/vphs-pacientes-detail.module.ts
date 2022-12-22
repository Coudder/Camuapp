import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VphsPacientesDetailPageRoutingModule } from './vphs-pacientes-detail-routing.module';

import { VphsPacientesDetailPage } from './vphs-pacientes-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VphsPacientesDetailPageRoutingModule
  ],
  declarations: [VphsPacientesDetailPage]
})
export class VphsPacientesDetailPageModule {}
