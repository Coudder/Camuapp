import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColposUnidadPacArchivoPageRoutingModule } from './colpos-unidad-pac-archivo-routing.module';

import { ColposUnidadPacArchivoPage } from './colpos-unidad-pac-archivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColposUnidadPacArchivoPageRoutingModule
  ],
  declarations: [ColposUnidadPacArchivoPage]
})
export class ColposUnidadPacArchivoPageModule {}
