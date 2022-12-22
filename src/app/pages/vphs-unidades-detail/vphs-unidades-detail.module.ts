import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VphsUnidadesDetailPageRoutingModule } from './vphs-unidades-detail-routing.module';

import { VphsUnidadesDetailPage } from './vphs-unidades-detail.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VphsUnidadesDetailPageRoutingModule,
    SwiperModule
  ],
  declarations: [VphsUnidadesDetailPage]
})
export class VphsUnidadesDetailPageModule {}
