import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColposUnidadPacArchivoDetailPageRoutingModule } from './colpos-unidad-pac-archivo-detail-routing.module';

import { ColposUnidadPacArchivoDetailPage } from './colpos-unidad-pac-archivo-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColposUnidadPacArchivoDetailPageRoutingModule
  ],
  declarations: [ColposUnidadPacArchivoDetailPage]
})
export class ColposUnidadPacArchivoDetailPageModule {}
