import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StanfordSleepinessPage } from './stanford-sleepiness.page';

const routes: Routes = [
  {
    path: '',
    component: StanfordSleepinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StanfordSleepinessPageRoutingModule {}
