import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetecmamaPacArchivoPageRoutingModule } from './detecmama-pac-archivo-routing.module';

import { DetecmamaPacArchivoPage } from './detecmama-pac-archivo.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetecmamaPacArchivoPageRoutingModule,
    PipesModule
  ],
  declarations: [DetecmamaPacArchivoPage]
})
export class DetecmamaPacArchivoPageModule {}
