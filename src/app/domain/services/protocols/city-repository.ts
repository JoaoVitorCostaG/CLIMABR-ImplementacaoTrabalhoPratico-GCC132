import { City } from "../../entities/city.model";

export abstract class CityRepository {
    abstract getAll(): Promise<City[]>;
    abstract getById(id: number): Promise<City>;
}