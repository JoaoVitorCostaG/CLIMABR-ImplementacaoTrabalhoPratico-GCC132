export type Coordinate = {
    latitude: number;
    longitude: number;
}

export type City = {
    id: number;
    name: string;
    state: string;
    coords: Coordinate;
}