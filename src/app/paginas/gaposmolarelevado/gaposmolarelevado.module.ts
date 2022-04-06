import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaposmolarelevadoPageRoutingModule } from './gaposmolarelevado-routing.module';

import { GaposmolarelevadoPage } from './gaposmolarelevado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaposmolarelevadoPageRoutingModule
  ],
  declarations: [GaposmolarelevadoPage]
})
export class GaposmolarelevadoPageModule {}
