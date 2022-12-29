import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetecmamaUnidadPacArchivoPageRoutingModule } from './detecmama-unidad-pac-archivo-routing.module';

import { DetecmamaUnidadPacArchivoPage } from './detecmama-unidad-pac-archivo.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetecmamaUnidadPacArchivoPageRoutingModule,
    PipesModule
  ],
  declarations: [DetecmamaUnidadPacArchivoPage]
})
export class DetecmamaUnidadPacArchivoPageModule {}
