import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColposPacientesDetailPageRoutingModule } from './colpos-pacientes-detail-routing.module';

import { ColposPacientesDetailPage } from './colpos-pacientes-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColposPacientesDetailPageRoutingModule
  ],
  declarations: [ColposPacientesDetailPage]
})
export class ColposPacientesDetailPageModule {}
