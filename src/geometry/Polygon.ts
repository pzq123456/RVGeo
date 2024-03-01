import { Geometry } from "./Geometry";
import { GeoJSONFeature, defaultProperties, GeoJSONPolygon } from "./GeoJSON";

export class Polygon extends Geometry<defaultProperties> {
    constructor(coordinates: [number, number][][], properties?: defaultProperties) {
        super(coordinates, properties);
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
    
    static fromGeometry(geometry: GeoJSONPolygon): Polygon {
        return new Polygon(geometry.coordinates);
    }

    static fromFeature(feature: GeoJSONFeature<any>): Polygon {
        const { geometry, properties } = feature;
        if (geometry.type !== "Polygon") {
            throw new Error(`The input geometry is not a Polygon: ${geometry.type}`);
        }
        const pointGeometry = geometry as GeoJSONPolygon; // Type assertion
        return new Polygon(pointGeometry.coordinates, properties);
    }

    static isPolygon(polygon: any): polygon is Polygon{
        return polygon.type === "Polygon";
    }
}