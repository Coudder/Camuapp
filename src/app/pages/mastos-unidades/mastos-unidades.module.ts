import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MastosUnidadesPageRoutingModule } from './mastos-unidades-routing.module';

import { MastosUnidadesPage } from './mastos-unidades.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MastosUnidadesPageRoutingModule,
    PipesModule
  ],
  declarations: [MastosUnidadesPage]
})
export class MastosUnidadesPageModule {}
