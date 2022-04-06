import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaposmolarelevadoPage } from './gaposmolarelevado.page';

const routes: Routes = [
  {
    path: '',
    component: GaposmolarelevadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaposmolarelevadoPageRoutingModule {}
