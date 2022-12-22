import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitoPacientesPageRoutingModule } from './cito-pacientes-routing.module';

import { CitoPacientesPage } from './cito-pacientes.page';
import { PipesModule } from '../../pipes/pipes.module'
//import { FiltropacPipe } from '../../pipes/filtropac.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitoPacientesPageRoutingModule,
    PipesModule
    
  ],
  declarations: [CitoPacientesPage]
})
export class CitoPacientesPageModule {}
