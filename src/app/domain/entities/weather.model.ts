export type WeatherDetails = {
    conditionDesc: string;
    conditionIconURL: string;
    pop: number;
    humidity: number;
    minTemp: number;
    maxTemp: number;
}

export type Weather = {
    currentTemp: number;
    details: WeatherDetails[];
}