import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    loadChildren: () => import('./paginas/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'aniongapelevado',
    loadChildren: () => import('./paginas/aniongapelevado/aniongapelevado.module').then( m => m.AniongapelevadoPageModule)
  },
  {
    path: 'aniongapnormal',
    loadChildren: () => import('./paginas/aniongapnormal/aniongapnormal.module').then( m => m.AniongapnormalPageModule)
  },
  {
    path: 'gapurinarionegativo',
    loadChildren: () => import('./paginas/gapurinarionegativo/gapurinarionegativo.module').then( m => m.GapurinarionegativoPageModule)
  },
  {
    path: 'gapurinariopositivo',
    loadChildren: () => import('./paginas/gapurinariopositivo/gapurinariopositivo.module').then( m => m.GapurinariopositivoPageModule)
  },
  {
    path: 'gaposmolarelevado',
    loadChildren: () => import('./paginas/gaposmolarelevado/gaposmolarelevado.module').then( m => m.GaposmolarelevadoPageModule)
  },
  {
    path: 'gaposmolarnormal',
    loadChildren: () => import('./paginas/gaposmolarnormal/gaposmolarnormal.module').then( m => m.GaposmolarnormalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
