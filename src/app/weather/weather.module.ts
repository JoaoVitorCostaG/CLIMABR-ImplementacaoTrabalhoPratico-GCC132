import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherPageRoutingModule } from './weather-routing.module';

import { WeatherPage } from './weather.page';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    WeatherPageRoutingModule
  ],
  declarations: [WeatherPage, WeatherDetailsComponent]
})
export class WeatherPageModule {}
