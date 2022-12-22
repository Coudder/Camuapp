import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitoPacArchivoDetailPageRoutingModule } from './cito-pac-archivo-detail-routing.module';

import { CitoPacArchivoDetailPage } from './cito-pac-archivo-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitoPacArchivoDetailPageRoutingModule
  ],
  declarations: [CitoPacArchivoDetailPage]
})
export class CitoPacArchivoDetailPageModule {}
