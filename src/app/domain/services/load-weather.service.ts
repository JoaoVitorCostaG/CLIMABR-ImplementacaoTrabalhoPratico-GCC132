import { Injectable } from "@angular/core";
import { City } from "../entities/city.model";
import { CityNotFoundError } from "../errors/city-not-found.error";
import { WeatherRepository } from "./protocols/weather-repository";

export class LoadWeatherService {
    constructor(private readonly repo: WeatherRepository) { }

    async loadByCity(city: City) {
        if (!city) {
            throw new CityNotFoundError();
        }

        const weather = await this.repo.getByCoords(city.coords);
        return weather;
    }
}