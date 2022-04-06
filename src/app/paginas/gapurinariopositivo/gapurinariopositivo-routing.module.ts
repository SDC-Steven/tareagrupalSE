import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GapurinariopositivoPage } from './gapurinariopositivo.page';

const routes: Routes = [
  {
    path: '',
    component: GapurinariopositivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GapurinariopositivoPageRoutingModule {}
