import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AniongapelevadoPage } from './aniongapelevado.page';

const routes: Routes = [
  {
    path: '',
    component: AniongapelevadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AniongapelevadoPageRoutingModule {}
