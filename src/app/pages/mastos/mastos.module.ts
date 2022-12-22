import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MastosPageRoutingModule } from './mastos-routing.module';

import { MastosPage } from './mastos.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MastosPageRoutingModule,
    SwiperModule
  ],
  declarations: [MastosPage]
})
export class MastosPageModule {}
