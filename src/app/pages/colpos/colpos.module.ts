import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColposPageRoutingModule } from './colpos-routing.module';

import { ColposPage } from './colpos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColposPageRoutingModule
  ],
  declarations: [ColposPage]
})
export class ColposPageModule {}
