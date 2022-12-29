import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitoUnidadPacientesPageRoutingModule } from './cito-unidad-pacientes-routing.module';

import { CitoUnidadPacientesPage } from './cito-unidad-pacientes.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitoUnidadPacientesPageRoutingModule,
    PipesModule
  ],
  declarations: [CitoUnidadPacientesPage]
})
export class CitoUnidadPacientesPageModule {}
