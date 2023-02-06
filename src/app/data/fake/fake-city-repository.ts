import { City } from "src/app/domain/entities/city.model";
import { CityRepository } from "src/app/domain/services/protocols/city-repository";

const cities: City[] = [
    {
      id: 1,
      name: 'Lavras',
      state: 'MG',
      coords: {
        latitude: 1,
        longitude: 1,
      },
    },
    {
      id: 2,
      name: 'São Carlos',
      state: 'SP',
      coords: {
        latitude: 1,
        longitude: 1,
      },
    },
    {
      id: 3,
      name: 'Jataí',
      state: 'GO',
      coords: {
        latitude: 1,
        longitude: 1,
      },
    },
    {
      id: 4,
      name: 'Lavras do Sul',
      state: 'RS',
      coords: {
        latitude: 1,
        longitude: 1,
      },
    },
  ];

export class FakeCityRepository extends CityRepository {
    
    async getAll(): Promise<City[]> {
        return cities;
    }
    
    async getById(id: number): Promise<City> {
        return cities.find(
            (city: City) => city.id === id
        )
    }

}