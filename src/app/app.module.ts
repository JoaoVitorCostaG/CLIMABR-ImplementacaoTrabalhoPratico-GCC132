import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchCityService } from './domain/services/search-city.service';
import { LoadWeatherService } from './domain/services/load-weather.service';
import { LocalCityRepository } from './data/local/local-city-repository';
import { RemoteWeatherRepository } from './data/remote/remote-weather-repository';
import { IonicStorageModule, Storage } from '@ionic/storage-angular';

import { HistoricoService } from 'src/app/domain/services/history.service';

const iniciarServicoHistorico = () => {
  return new HistoricoService(new LocalCityRepository(), new Storage());
};

const createSearchCityService = () => {
  return new SearchCityService(new LocalCityRepository())
}

const createLoadWeatherService = (http: HttpClient) => {
  return new LoadWeatherService(new RemoteWeatherRepository(http))
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), HttpClientModule, AppRoutingModule,IonicStorageModule.forRoot()],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: SearchCityService, useFactory: createSearchCityService },
    { provide: LoadWeatherService, useFactory: createLoadWeatherService, deps: [HttpClient] },
    { provide: HistoricoService, useFactory: iniciarServicoHistorico, deps: [Storage] },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
