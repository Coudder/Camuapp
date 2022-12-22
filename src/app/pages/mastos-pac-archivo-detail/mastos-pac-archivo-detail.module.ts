import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MastosPacArchivoDetailPageRoutingModule } from './mastos-pac-archivo-detail-routing.module';

import { MastosPacArchivoDetailPage } from './mastos-pac-archivo-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MastosPacArchivoDetailPageRoutingModule
  ],
  declarations: [MastosPacArchivoDetailPage]
})
export class MastosPacArchivoDetailPageModule {}
