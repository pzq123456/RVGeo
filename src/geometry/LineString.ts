import { Geometry, GeoJSONFeature, defaultProperties } from "./Geometry";

export class LineString extends Geometry<defaultProperties> {
    constructor(coordinates: [number, number][], properties?: defaultProperties) {
        super(coordinates, properties);
    }

    clone(): LineString {
        return new LineString(this.coordinates, this.properties);
    }

    updateBBox(): void {
        let [minX, minY, maxX, maxY] = [Infinity, Infinity, -Infinity, -Infinity];
        for (const [x, y] of this.coordinates) {
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
        }
        this.bbox = [minX, minY, maxX, maxY];
    }

    static fromGeoJSON(feature: GeoJSONFeature<any>): LineString {
        const { geometry, properties } = feature;
        if (geometry.type !== "LineString") {
            throw new Error(`The input geometry is not a LineString: ${geometry.type}`);
        }
        return new LineString(geometry.coordinates, properties);
    }
}