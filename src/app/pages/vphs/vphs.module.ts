import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VphsPageRoutingModule } from './vphs-routing.module';

import { VphsPage } from './vphs.page';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VphsPageRoutingModule,
    SwiperModule
  ],
  declarations: [VphsPage]
})
export class VphsPageModule {}
