import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-input-log',
  templateUrl: './input-log.page.html',
  styleUrls: ['./input-log.page.scss'],
})
export class InputLogPage implements OnInit 
{
  nightTime:string;
  morningTime:string;

  constructor(public sleepService:SleepService, public alertController:AlertController) { }

  ngOnInit() { }

  onSubmit() 
  {
    var night:Date = new Date(this.nightTime);
    var morning:Date = new Date(this.morningTime);

    if(this.nightTime === null || this.morningTime == null || morning.getTime() < night.getTime()) 
    {
			this.alert();
    } 
    else 
    {
      this.success();
      var data:OvernightSleepData = new OvernightSleepData(night, morning);
      this.sleepService.logOvernightData(data);
		}
  }

  async alert() 
  {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'The dates do not succeed each other. Try again',
      buttons: ['OK']
    });
    await alert.present();
  }

  async success() 
  {
    const alert = await this.alertController.create({
      header: 'Success!',
      message: 'Successfully recorded log',
      buttons: ['OK']
    });
    await alert.present();
  }

}
