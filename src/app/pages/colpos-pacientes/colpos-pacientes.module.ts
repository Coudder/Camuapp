import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColposPacientesPageRoutingModule } from './colpos-pacientes-routing.module';

import { ColposPacientesPage } from './colpos-pacientes.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColposPacientesPageRoutingModule,
    PipesModule
  ],
  declarations: [ColposPacientesPage]
})
export class ColposPacientesPageModule {}
