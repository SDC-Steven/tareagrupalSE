import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AniongapnormalPageRoutingModule } from './aniongapnormal-routing.module';

import { AniongapnormalPage } from './aniongapnormal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AniongapnormalPageRoutingModule
  ],
  declarations: [AniongapnormalPage]
})
export class AniongapnormalPageModule {}
