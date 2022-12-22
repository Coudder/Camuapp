import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetecmamaPageRoutingModule } from './detecmama-routing.module';

import { DetecmamaPage } from './detecmama.page';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetecmamaPageRoutingModule,
    SwiperModule
  ],
  declarations: [DetecmamaPage]
})
export class DetecmamaPageModule {}
