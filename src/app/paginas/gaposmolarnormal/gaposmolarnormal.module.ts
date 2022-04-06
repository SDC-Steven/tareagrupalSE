import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaposmolarnormalPageRoutingModule } from './gaposmolarnormal-routing.module';

import { GaposmolarnormalPage } from './gaposmolarnormal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaposmolarnormalPageRoutingModule
  ],
  declarations: [GaposmolarnormalPage]
})
export class GaposmolarnormalPageModule {}
