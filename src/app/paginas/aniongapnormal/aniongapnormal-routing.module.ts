import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AniongapnormalPage } from './aniongapnormal.page';

const routes: Routes = [
  {
    path: '',
    component: AniongapnormalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AniongapnormalPageRoutingModule {}
