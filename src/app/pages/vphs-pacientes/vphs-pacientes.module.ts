import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VphsPacientesPageRoutingModule } from './vphs-pacientes-routing.module';

import { VphsPacientesPage } from './vphs-pacientes.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VphsPacientesPageRoutingModule,
    PipesModule
  ],
  declarations: [VphsPacientesPage]
})
export class VphsPacientesPageModule {}
