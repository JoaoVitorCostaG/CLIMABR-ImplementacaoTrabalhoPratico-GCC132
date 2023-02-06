import { Coordinate } from "../../entities/city.model";
import { Weather } from "../../entities/weather.model";

export abstract class WeatherRepository {
    abstract getByCoords(coords: Coordinate): Promise<Weather>;
}