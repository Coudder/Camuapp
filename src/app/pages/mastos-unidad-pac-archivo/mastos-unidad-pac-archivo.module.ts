import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MastosUnidadPacArchivoPageRoutingModule } from './mastos-unidad-pac-archivo-routing.module';

import { MastosUnidadPacArchivoPage } from './mastos-unidad-pac-archivo.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MastosUnidadPacArchivoPageRoutingModule,
    PipesModule
  ],
  declarations: [MastosUnidadPacArchivoPage]
})
export class MastosUnidadPacArchivoPageModule {}
