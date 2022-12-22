import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitoUnidadesPageRoutingModule } from './cito-unidades-routing.module';

import { CitoUnidadesPage } from './cito-unidades.page';
import { PipesModule } from '../../pipes/pipes.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitoUnidadesPageRoutingModule,
    PipesModule
  ],
  declarations: [CitoUnidadesPage]
})
export class CitoUnidadesPageModule {}
