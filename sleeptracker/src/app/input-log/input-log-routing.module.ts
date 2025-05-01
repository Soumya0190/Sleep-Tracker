import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputLogPage } from './input-log.page';

const routes: Routes = [
  {
    path: '',
    component: InputLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputLogPageRoutingModule {}
