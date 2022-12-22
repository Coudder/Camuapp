import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VphsPacArchivoDetailPageRoutingModule } from './vphs-pac-archivo-detail-routing.module';

import { VphsPacArchivoDetailPage } from './vphs-pac-archivo-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VphsPacArchivoDetailPageRoutingModule
  ],
  declarations: [VphsPacArchivoDetailPage]
})
export class VphsPacArchivoDetailPageModule {}
