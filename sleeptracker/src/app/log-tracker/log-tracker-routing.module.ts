import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogTrackerPage } from './log-tracker.page';

const routes: Routes = [
  {
    path: '',
    component: LogTrackerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogTrackerPageRoutingModule {}
