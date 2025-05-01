import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogTrackerPageRoutingModule } from './log-tracker-routing.module';

import { LogTrackerPage } from './log-tracker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogTrackerPageRoutingModule
  ],
  declarations: [LogTrackerPage]
})
export class LogTrackerPageModule {}
