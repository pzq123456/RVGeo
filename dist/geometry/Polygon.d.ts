import { MultiPoint } from '.';
import { GeoJSONFeature, GeoJSONPolygon, GeoJSONMultiPolygon } from './GeoJSON';
import { Geometry, GeometryCollection } from './Geometry';

export declare class Polygon extends Geometry {
    constructor(coordinates: GeoJSONPolygon["coordinates"], properties?: any);
    toXY(): GeoJSONPolygon["coordinates"];
    toMultiPoint(): MultiPoint;
    updateBBox(): void;
    static isPolygon(geometry: any): geometry is Polygon;
    static fromGeometry(geometry: GeoJSONPolygon): Polygon;
    static fromFeature(feature: GeoJSONFeature): Polygon;
}
export declare class MultiPolygon extends GeometryCollection {
    readonly coordinates: GeoJSONMultiPolygon["coordinates"];
    constructor(geometries: Polygon[] | GeoJSONMultiPolygon["coordinates"], properties?: any);
    getCoodinates(): GeoJSONMultiPolygon["coordinates"];
    toMultiPoint(): MultiPoint;
    toXY(): GeoJSONMultiPolygon["coordinates"];
    addGeometry(geometry: Polygon | GeoJSONPolygon["coordinates"]): void;
    toGeoJSON(): GeoJSONFeature;
    static fromFeature(feature: GeoJSONFeature): GeometryCollection;
    static fromGeometry(geometry: GeoJSONMultiPolygon): GeometryCollection;
}
