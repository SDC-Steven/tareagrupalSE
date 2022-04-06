import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GapurinarionegativoPageRoutingModule } from './gapurinarionegativo-routing.module';

import { GapurinarionegativoPage } from './gapurinarionegativo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GapurinarionegativoPageRoutingModule
  ],
  declarations: [GapurinarionegativoPage]
})
export class GapurinarionegativoPageModule {}
