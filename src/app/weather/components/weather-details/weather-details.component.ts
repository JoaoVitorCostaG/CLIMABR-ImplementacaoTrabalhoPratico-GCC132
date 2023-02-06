import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WeatherDetails } from 'src/app/domain/entities/weather.model';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
})
export class WeatherDetailsComponent {

  @Input() details: WeatherDetails[];

  daysAfterToday(days: number) {
    const today = new Date();
    return new Date(today.getTime() + days * 1000 * 60 * 60 * 24);
  }

  constructor(private readonly modalCtrl: ModalController) {}

  onClose() {
    this.modalCtrl.dismiss();
  }

}
