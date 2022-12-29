import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColposUnidadPacientesPageRoutingModule } from './colpos-unidad-pacientes-routing.module';

import { ColposUnidadPacientesPage } from './colpos-unidad-pacientes.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColposUnidadPacientesPageRoutingModule,
    PipesModule
  ],
  declarations: [ColposUnidadPacientesPage]
})
export class ColposUnidadPacientesPageModule {}
