import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VphsUnidadPacArchivoPageRoutingModule } from './vphs-unidad-pac-archivo-routing.module';

import { VphsUnidadPacArchivoPage } from './vphs-unidad-pac-archivo.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VphsUnidadPacArchivoPageRoutingModule,
    PipesModule
  ],
  declarations: [VphsUnidadPacArchivoPage]
})
export class VphsUnidadPacArchivoPageModule {}
