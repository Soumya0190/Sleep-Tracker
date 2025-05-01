import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'log-tracker',
    loadChildren: () => import('./log-tracker/log-tracker.module').then( m => m.LogTrackerPageModule)
  },
  {
    path: 'stanford-sleepiness',
    loadChildren: () => import('./stanford-sleepiness/stanford-sleepiness.module').then( m => m.StanfordSleepinessPageModule)
  },
  {
    path: 'input-log',
    loadChildren: () => import('./input-log/input-log.module').then( m => m.InputLogPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
