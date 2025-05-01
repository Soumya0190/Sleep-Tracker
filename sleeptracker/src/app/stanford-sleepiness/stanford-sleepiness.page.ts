import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-stanford-sleepiness',
  templateUrl: './stanford-sleepiness.page.html',
  styleUrls: ['./stanford-sleepiness.page.scss'],
})
export class StanfordSleepinessPage implements OnInit {
  
  sleepinessValue:number;

  constructor(public sleepService:SleepService, public alertController:AlertController) { }

  ngOnInit() 
  {
    this.sleepinessValue = 1;
  }

  onSubmit() 
  {
    var data:StanfordSleepinessData = new StanfordSleepinessData(this.sleepinessValue);
    this.sleepService.logSleepinessData(data);

    this.success();
  }

  async success() 
  {
    const alert = await this.alertController.create({
      header: 'Success!',
      message: 'Successfully logged sleepiness record.',
      buttons: ['OK']
    });
    await alert.present();
  }

}
