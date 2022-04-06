import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GapurinariopositivoPageRoutingModule } from './gapurinariopositivo-routing.module';

import { GapurinariopositivoPage } from './gapurinariopositivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GapurinariopositivoPageRoutingModule
  ],
  declarations: [GapurinariopositivoPage]
})
export class GapurinariopositivoPageModule {}
