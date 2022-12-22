import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColposUnidadesDetailPageRoutingModule } from './colpos-unidades-detail-routing.module';

import { ColposUnidadesDetailPage } from './colpos-unidades-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColposUnidadesDetailPageRoutingModule
  ],
  declarations: [ColposUnidadesDetailPage]
})
export class ColposUnidadesDetailPageModule {}
