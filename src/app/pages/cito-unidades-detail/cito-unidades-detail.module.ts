import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitoUnidadesDetailPageRoutingModule } from './cito-unidades-detail-routing.module';

import { CitoUnidadesDetailPage } from './cito-unidades-detail.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitoUnidadesDetailPageRoutingModule,
    SwiperModule
  ],
  declarations: [CitoUnidadesDetailPage]
})
export class CitoUnidadesDetailPageModule {}
