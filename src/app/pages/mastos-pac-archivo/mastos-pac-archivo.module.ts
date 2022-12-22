import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MastosPacArchivoPageRoutingModule } from './mastos-pac-archivo-routing.module';

import { MastosPacArchivoPage } from './mastos-pac-archivo.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MastosPacArchivoPageRoutingModule,
    PipesModule
  ],
  declarations: [MastosPacArchivoPage]
})
export class MastosPacArchivoPageModule {}
