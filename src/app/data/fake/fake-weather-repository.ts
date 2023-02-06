import { Coordinate } from "src/app/domain/entities/city.model";
import { Weather } from "src/app/domain/entities/weather.model";
import { WeatherRepository } from "src/app/domain/services/protocols/weather-repository";

const weather: Weather = {
    currentTemp: 25,
    details: [
        {
            conditionDesc: 'Céu limpo',
            conditionIconURL: 'http://openweathermap.org/img/wn/01d@2x.png',
            pop: 70,
            humidity: 30,
            minTemp: 18,
            maxTemp: 31,
        },
        {
            conditionDesc: 'Tempestade',
            conditionIconURL: 'http://openweathermap.org/img/wn/11n@2x.png',
            pop: 90,
            humidity: 45,
            minTemp: 16,
            maxTemp: 28,
        },
        {
            conditionDesc: 'Nublado',
            conditionIconURL: 'http://openweathermap.org/img/wn/04d@2x.png',
            pop: 30,
            humidity: 68,
            minTemp: 17,
            maxTemp: 30,
        },
    ],
};

export class FakeWeatherRepository extends WeatherRepository {

    async getByCoords(coords: Coordinate): Promise<Weather> {
        return weather;
    }

}