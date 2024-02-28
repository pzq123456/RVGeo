import { Geometry } from "./Geometry";
import { GeoJSONFeature, defaultProperties, GeoJSONLineString } from "./GeoJSON";

export class LineString extends Geometry<defaultProperties> {
    constructor(coordinates: GeoJSONLineString["coordinates"], properties?: defaultProperties) {
        super(coordinates, properties);
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

    static fromGeometry(geometry: GeoJSONLineString): LineString {
        return new LineString(geometry.coordinates);
    }

    static fromFeature(feature: GeoJSONFeature<any>): LineString {
        const { geometry, properties } = feature;
        if (geometry.type !== "LineString") {
            throw new Error(`The input geometry is not a LineString: ${geometry.type}`);
        }
        const pointGeometry = geometry as GeoJSONLineString; // Type assertion
        return new LineString(pointGeometry.coordinates, properties);
    }
}