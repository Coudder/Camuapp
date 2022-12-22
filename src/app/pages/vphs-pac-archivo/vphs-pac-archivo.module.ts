import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VphsPacArchivoPageRoutingModule } from './vphs-pac-archivo-routing.module';

import { VphsPacArchivoPage } from './vphs-pac-archivo.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VphsPacArchivoPageRoutingModule,
    PipesModule
  ],
  declarations: [VphsPacArchivoPage]
})
export class VphsPacArchivoPageModule {}
