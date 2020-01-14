import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'russia', loadChildren: './russia/russia.module#RussiaPageModule' },
  { path: 'kazakhstan', loadChildren: './kazakhstan/kazakhstan.module#KazakhstanPageModule' },  { path: 'shrilanka', loadChildren: './shrilanka/shrilanka.module#ShrilankaPageModule' },
  { path: 'filipinni', loadChildren: './filipinni/filipinni.module#FilipinniPageModule' },
  { path: 'polsha', loadChildren: './polsha/polsha.module#PolshaPageModule' },
  { path: 'vietnam', loadChildren: './vietnam/vietnam.module#VietnamPageModule' },
  { path: 'ukraina', loadChildren: './ukraina/ukraina.module#UkrainaPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
