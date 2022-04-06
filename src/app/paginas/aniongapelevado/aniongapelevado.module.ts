import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AniongapelevadoPageRoutingModule } from './aniongapelevado-routing.module';

import { AniongapelevadoPage } from './aniongapelevado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AniongapelevadoPageRoutingModule
  ],
  declarations: [AniongapelevadoPage]
})
export class AniongapelevadoPageModule {}
