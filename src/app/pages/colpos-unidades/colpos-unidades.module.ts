import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColposUnidadesPageRoutingModule } from './colpos-unidades-routing.module';

import { ColposUnidadesPage } from './colpos-unidades.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColposUnidadesPageRoutingModule,
    PipesModule
  ],
  declarations: [ColposUnidadesPage]
})
export class ColposUnidadesPageModule {}
