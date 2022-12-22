import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetecmamaPacArchivoDetailPageRoutingModule } from './detecmama-pac-archivo-detail-routing.module';

import { DetecmamaPacArchivoDetailPage } from './detecmama-pac-archivo-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetecmamaPacArchivoDetailPageRoutingModule
  ],
  declarations: [DetecmamaPacArchivoDetailPage]
})
export class DetecmamaPacArchivoDetailPageModule {}
