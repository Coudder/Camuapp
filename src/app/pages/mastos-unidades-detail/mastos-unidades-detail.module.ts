import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MastosUnidadesDetailPageRoutingModule } from './mastos-unidades-detail-routing.module';

import { MastosUnidadesDetailPage } from './mastos-unidades-detail.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MastosUnidadesDetailPageRoutingModule,
    SwiperModule
  ],
  declarations: [MastosUnidadesDetailPage]
})
export class MastosUnidadesDetailPageModule {}
