import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MastosUnidadPacientesPageRoutingModule } from './mastos-unidad-pacientes-routing.module';

import { MastosUnidadPacientesPage } from './mastos-unidad-pacientes.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MastosUnidadPacientesPageRoutingModule,
    PipesModule
  ],
  declarations: [MastosUnidadPacientesPage]
})
export class MastosUnidadPacientesPageModule {}
