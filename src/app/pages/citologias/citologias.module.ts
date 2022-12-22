import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitologiasPageRoutingModule } from './citologias-routing.module';

import { CitologiasPage } from './citologias.page';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitologiasPageRoutingModule,
    SwiperModule
  ],
  declarations: [CitologiasPage]
})
export class CitologiasPageModule {}
