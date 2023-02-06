import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { City } from '../domain/entities/city.model';
import { Weather } from '../domain/entities/weather.model';
import { LoadWeatherService } from '../domain/services/load-weather.service';
import { SearchCityService } from '../domain/services/search-city.service';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage {

  constructor(
    private readonly cityService: SearchCityService,
    private readonly weatherService: LoadWeatherService,
    private readonly modalCtrl: ModalController,
    private readonly loadingCtrl: LoadingController,
    private readonly router: Router,
    private readonly route: ActivatedRoute) { }

  errorMessage = null
  city: City
  weather: Weather
  
  async ionViewDidEnter() {
    try {
      await this.presentLoading();
      this.errorMessage = null;
      const cityId = Number.parseInt(this.route.snapshot.paramMap.get('id'));
      this.city = await this.cityService.searchById(cityId);
      this.weather = await this.weatherService.loadByCity(this.city);
    } catch (error) {
      this.errorMessage = error.message
    } finally {
      await this.loadingCtrl.dismiss();
    }
  }
  
  async onDetails() {
    const modal = await this.modalCtrl.create({
      component: WeatherDetailsComponent,
      componentProps: {
        details: this.weather.details
      }
    });
    await modal.present();
  }

  async onBack() {
    await this.router.navigateByUrl('/', { replaceUrl: true })
  }

  get currentDate() {
    const today = new Date();
    const weekDays = [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',
    ];
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');

    return `${weekDays[today.getDay()]}, ${day}/${month}`;
  }

  private async presentLoading() {
    (
      await this.loadingCtrl.create({
        message: 'Aguarde...',
      })
    ).present();
  }

}
