import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VphsUnidadesPageRoutingModule } from './vphs-unidades-routing.module';

import { VphsUnidadesPage } from './vphs-unidades.page';
import { PipesModule } from '../../pipes/pipes.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VphsUnidadesPageRoutingModule,
    PipesModule
  ],
  declarations: [VphsUnidadesPage]
})
export class VphsUnidadesPageModule {}
