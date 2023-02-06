import { HttpClient } from "@angular/common/http";
import { catchError, firstValueFrom, Observable, throwError, map } from "rxjs";
import { Coordinate } from "src/app/domain/entities/city.model";
import { Weather } from "src/app/domain/entities/weather.model";
import { UnavailableServiceError } from "src/app/domain/errors/unavailable-service.error";
import { WeatherRepository } from "src/app/domain/services/protocols/weather-repository";
import { environment } from "src/environments/environment";

export class RemoteWeatherRepository extends WeatherRepository {

    constructor(private readonly http: HttpClient) {
        super();
    }

    async getByCoords(coords: Coordinate): Promise<Weather> {
        return firstValueFrom(
            this.getWeather(coords)
        )
    }

    private getWeather(coords: Coordinate): Observable<Weather> {
        return this.http.get(
            `${environment.apiConfig.URL}?lat=${coords.latitude}&lon=${coords.longitude}&exclude=minutely,hourly,alerts&lang=pt_br&units=metric&appid=${environment.apiConfig.key}`
        ).pipe(
            map(this.toEntity),
            catchError(() => throwError(() => new UnavailableServiceError()))
        )
    }

    private toEntity(data: any): Weather {
        const numOfDailyWeathers = 3;
        const weather: Weather = {
            currentTemp: data.current.temp,
            details: [],
        };

        for (let i = 0; i < numOfDailyWeathers; i++) {
            weather.details.push({
                conditionDesc: data.daily[i].weather[0].description,
                conditionIconURL: `${environment.apiConfig.iconURL}/${data.daily[i].weather[0].icon}@2x.png`,
                pop: data.daily[i].pop * 100,
                humidity: data.daily[i].humidity,
                minTemp: data.daily[i].temp.min,
                maxTemp: data.daily[i].temp.max,
            });
        }

        return weather;
    }

}