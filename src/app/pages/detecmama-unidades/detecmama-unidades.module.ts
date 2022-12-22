import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetecmamaUnidadesPageRoutingModule } from './detecmama-unidades-routing.module';

import { DetecmamaUnidadesPage } from './detecmama-unidades.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetecmamaUnidadesPageRoutingModule,
    PipesModule
  ],
  declarations: [DetecmamaUnidadesPage]
})
export class DetecmamaUnidadesPageModule {}
