import { Geometry, GeometryCollection } from "./Geometry";
import { GeoJSONFeature, GeoJSONPolygon, GeoJSONMultiPolygon, GeoJSONLineString, GeoJSONFeatureCollection } from "./GeoJSON";
import { MultiPoint, Point } from "./Point";

export class Polygon extends Geometry {
    readonly coordinates: GeoJSONPolygon["coordinates"];

    constructor(coordinates: GeoJSONPolygon["coordinates"] , properties?: any) {
        super(coordinates, properties);
        // 增加自动闭合操作，若果第一个点和最后一个点不相同，则将第一个点添加到最后
        if (coordinates[0][0][0] !== coordinates[0][coordinates[0].length - 1][0] ||
            coordinates[0][0][1] !== coordinates[0][coordinates[0].length - 1][1]) {
            coordinates[0].push(coordinates[0][0]);
        }
        this.coordinates = coordinates;
    }

    getCoordinates(): GeoJSONPolygon["coordinates"] {
        return this.coordinates;
    }

    toXY(): GeoJSONPolygon["coordinates"] {
        return (this.coordinates as GeoJSONPolygon["coordinates"])
        .map(ring => ring.map(point => this.projection.project(point)));
    }

    toMultiPoint(): MultiPoint{
        return new MultiPoint(this.coordinates.flat());
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

    toGeoJSON(): GeoJSONFeature{
        let feature: GeoJSONFeature = {
            type: "Feature",
            geometry: {
                type: this.constructor.name,
                coordinates: this.coordinates
            },
            // properties: this.properties,
        } as GeoJSONFeature;
        if (this.properties) {
            feature.properties = this.properties;
        }
        if (this.bbox) {
            feature.bbox = this.bbox;
        }
        return feature;
    }

    static isPolygon(geometry: any): geometry is Polygon {
        return geometry instanceof Polygon;
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

}

export function toPolygon(
    points: Point[] | GeoJSONLineString["coordinates"],
    properties?: any
): Polygon {
    // 默认为外环
    const coordinates: GeoJSONPolygon["coordinates"] = [
        points.map(point => 
            Array.isArray(point) ? point : point.coordinates
        )
    ];
    return new Polygon(coordinates, properties);
}

export class MultiPolygon extends GeometryCollection{
    readonly coordinates: GeoJSONMultiPolygon["coordinates"];

    constructor(geometries: Polygon[] | GeoJSONMultiPolygon["coordinates"], properties?: any){
        // 判断类型
        if(geometries[0] instanceof Polygon){
            super(geometries as Polygon[], properties);
            this.coordinates = (geometries as Polygon[]).map(geometry => geometry.coordinates);
        }else{
            super((geometries as GeoJSONMultiPolygon["coordinates"])
                    .map(coordinates => new Polygon(coordinates)),
                    properties);
            this.coordinates = geometries as GeoJSONMultiPolygon["coordinates"];
        }
    }
    
    getCoodinates(): GeoJSONMultiPolygon["coordinates"]{
        return this.coordinates;
    }

    toMultiPoint(): MultiPoint{
        // todo: check
        return new MultiPoint(this.coordinates.flat().flat());
    }

    toXY() : GeoJSONMultiPolygon["coordinates"] {
        return (this.geometries as Polygon[]).map(polygon => polygon.toXY());
    }

    addGeometry(geometry: Polygon | GeoJSONPolygon["coordinates"]): void {
        if(geometry instanceof Polygon){
            this.geometries.push(geometry);
            this.coordinates.push(geometry.coordinates);
            this.updateBBox(geometry);
        }else{
            this.geometries.push(new Polygon(geometry));
            this.coordinates.push(geometry);
            this.updateBBox(this.geometries[this.geometries.length - 1]);
        }
    }

    toGeoJSON(): GeoJSONFeature{
        let feature: GeoJSONFeature = {
            type: "Feature",
            geometry: {
                type: "MultiPolygon",
                // 类型断言
                coordinates: this.geometries.map(geometry => (geometry as Polygon).coordinates) as GeoJSONMultiPolygon["coordinates"]
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

    toFeatureCollection(): GeoJSONFeatureCollection {
        const fc: GeoJSONFeatureCollection = {
            type: "FeatureCollection" as const,  // 使用 const 断言
            features: this.geometries.map(geometry => geometry.toGeoJSON())
        };
        return fc;
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

export function toMultiPolygon(
    polygons: Polygon[] | GeoJSONMultiPolygon["coordinates"],
    properties?: any
): MultiPolygon {
    return new MultiPolygon(polygons, properties);
}