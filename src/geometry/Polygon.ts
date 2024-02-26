import { Geometry, GeoJSONFeature, GeoJSONGeometry, defaultProperties } from "./Geometry";

export class Polygon extends Geometry<defaultProperties> {
    constructor(coordinates: [number, number][], properties?: defaultProperties) {
        super(coordinates, properties);
    }
}