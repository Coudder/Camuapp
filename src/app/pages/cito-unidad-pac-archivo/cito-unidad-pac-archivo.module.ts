import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitoUnidadPacArchivoPageRoutingModule } from './cito-unidad-pac-archivo-routing.module';

import { CitoUnidadPacArchivoPage } from './cito-unidad-pac-archivo.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitoUnidadPacArchivoPageRoutingModule,
    PipesModule
  ],
  declarations: [CitoUnidadPacArchivoPage]
})
export class CitoUnidadPacArchivoPageModule {}
