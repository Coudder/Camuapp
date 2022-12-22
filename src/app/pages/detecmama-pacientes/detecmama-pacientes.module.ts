import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetecmamaPacientesPageRoutingModule } from './detecmama-pacientes-routing.module';

import { DetecmamaPacientesPage } from './detecmama-pacientes.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetecmamaPacientesPageRoutingModule,
    PipesModule
  ],
  declarations: [DetecmamaPacientesPage]
})
export class DetecmamaPacientesPageModule {}
