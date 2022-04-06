import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaposmolarnormalPage } from './gaposmolarnormal.page';

const routes: Routes = [
  {
    path: '',
    component: GaposmolarnormalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaposmolarnormalPageRoutingModule {}
