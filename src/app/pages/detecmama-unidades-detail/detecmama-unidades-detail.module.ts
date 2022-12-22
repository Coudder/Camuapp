import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetecmamaUnidadesDetailPageRoutingModule } from './detecmama-unidades-detail-routing.module';

import { DetecmamaUnidadesDetailPage } from './detecmama-unidades-detail.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetecmamaUnidadesDetailPageRoutingModule,
    SwiperModule
  ],
  declarations: [DetecmamaUnidadesDetailPage]
})
export class DetecmamaUnidadesDetailPageModule {}
