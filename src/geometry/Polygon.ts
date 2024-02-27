import { Geometry, GeoJSONFeature, defaultProperties } from "./Geometry";

export class Polygon extends Geometry<defaultProperties> {
    constructor(coordinates: [number, number][][], properties?: defaultProperties) {
        super(coordinates, properties);
    }

    clone(): Polygon {
        return new Polygon(this.coordinates, this.properties);
    }

    updateBBox(): void {
        let [minX, minY, maxX, maxY] = [Infinity, Infinity, -Infinity, -Infinity];
        for (const ring of this.coordinates) {
            for (const [x, y] of ring) {
                minX = Math.min(minX, x);
                minY = Math.min(minY, y);
                maxX = Math.max(maxX, x);
                maxY = Math.max(maxY, y);
            }
        }
        this.bbox = [minX, minY, maxX, maxY];
    }

    static fromGeoJSON(feature: GeoJSONFeature<any>): Polygon {
        const { geometry, properties } = feature;
        if (geometry.type !== "Polygon") {
            throw new Error(`The input geometry is not a Polygon: ${geometry.type}`);
        }
        return new Polygon(geometry.coordinates, properties);
    }
}