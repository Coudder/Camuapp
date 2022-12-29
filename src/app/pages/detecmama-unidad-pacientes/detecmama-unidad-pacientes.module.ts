import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetecmamaUnidadPacientesPageRoutingModule } from './detecmama-unidad-pacientes-routing.module';

import { DetecmamaUnidadPacientesPage } from './detecmama-unidad-pacientes.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetecmamaUnidadPacientesPageRoutingModule,
    PipesModule
  ],
  declarations: [DetecmamaUnidadPacientesPage]
})
export class DetecmamaUnidadPacientesPageModule {}
