import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StanfordSleepinessPageRoutingModule } from './stanford-sleepiness-routing.module';

import { StanfordSleepinessPage } from './stanford-sleepiness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StanfordSleepinessPageRoutingModule
  ],
  declarations: [StanfordSleepinessPage]
})
export class StanfordSleepinessPageModule {}
