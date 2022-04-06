import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GapurinarionegativoPage } from './gapurinarionegativo.page';

const routes: Routes = [
  {
    path: '',
    component: GapurinarionegativoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GapurinarionegativoPageRoutingModule {}
