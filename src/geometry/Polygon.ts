import { Geometry, GeometryCollection, geometryCreator } from "./Geometry";
import { GeoJSONFeature, GeoJSONPolygon, GeoJSONMultiPolygon } from "./GeoJSON";

export class Polygon extends Geometry {
    constructor(coordinates: GeoJSONPolygon["coordinates"] , properties?: any) {
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

    static fromFeature(feature: GeoJSONFeature): Polygon {
        const { geometry, properties } = feature;
        if (geometry.type !== "Polygon") {
            throw new Error(`The input geometry is not a Polygon: ${geometry.type}`);
        }
        const pointGeometry = geometry as GeoJSONPolygon; // Type assertion
        return new Polygon(pointGeometry.coordinates, properties);
    }

    // static isPolygon(polygon: any): polygon is Polygon{
    //     return polygon.type === "Polygon";
    // }
}

export const PolygonCreator = {
    fromFeature: Polygon.fromFeature,
    fromGeometry: Polygon.fromGeometry
} as geometryCreator;

export class MultiPolygon extends GeometryCollection{

    constructor(geometries: Polygon[] | GeoJSONMultiPolygon["coordinates"], properties?: any){
        // 判断类型
        if(geometries[0] instanceof Polygon){
            super(geometries as Polygon[], properties);
        }else{
            super((geometries as GeoJSONMultiPolygon["coordinates"])
                    .map(coordinates => new Polygon(coordinates)),
                    properties);
        }
    }

    addGeometry(geometry: Polygon | GeoJSONPolygon["coordinates"]): void {
        if(geometry instanceof Polygon){
            this.geometries.push(geometry);
            this.updateBBox(geometry);
        }else{
            this.geometries.push(new Polygon(geometry));
            this.updateBBox(this.geometries[this.geometries.length - 1]);
        }
    }

    toGeoJSON(): GeoJSONFeature{
        let feature: GeoJSONFeature = {
            type: "Feature",
            geometry: {
                type: "MultiPolygon",
                // 类型断言
                coordinates: this.geometries.map(geometry => (geometry as Polygon).getCoordinates()) as GeoJSONMultiPolygon["coordinates"]
            },
        } as GeoJSONFeature;
        if (this.properties) {
            feature.properties = this.properties;
        };
        if (this.bbox) {
            feature.bbox = this.bbox;
        };
        return feature;
    }

    static fromFeature(feature: GeoJSONFeature): GeometryCollection{
        const { geometry, properties } = feature;
        if (geometry.type !== "MultiPolygon") {
            throw new Error(`The input geometry is not a MultiPolygon: ${geometry.type}`);
        }
        
        const multiPolygonGeometry = geometry as GeoJSONMultiPolygon; // Type assertion
        return new MultiPolygon(multiPolygonGeometry.coordinates, properties);
    }

    static fromGeometry(geometry: GeoJSONMultiPolygon): GeometryCollection{
        return new MultiPolygon(geometry.coordinates);
    }
}

export const MultiPolygonCreator = {
    fromFeature: MultiPolygon.fromFeature,
    fromGeometry: MultiPolygon.fromGeometry
} as geometryCreator;