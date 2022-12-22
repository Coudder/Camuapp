import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MastosPacientesPageRoutingModule } from './mastos-pacientes-routing.module';

import { MastosPacientesPage } from './mastos-pacientes.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MastosPacientesPageRoutingModule,
    PipesModule
  ],
  declarations: [MastosPacientesPage]
})
export class MastosPacientesPageModule {}
