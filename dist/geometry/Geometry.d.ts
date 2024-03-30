import { Projection } from '../geo/projection/base';
import { GeoJSONFeature, GeoJSONGeometry } from './GeoJSON';
import { MBR } from './MBR';

/**
 * Geometry for GeoJSON independent Objects including Point, LineString, Polygon
 * - no GeometryCollection
 * - no MultiPoint, MultiLineString, MultiPolygon
 */
export declare abstract class Geometry {
    bbox: MBR;
    readonly coordinates: any;
    properties: any;
    readonly projection: Projection;
    toXY(): any;
    static fromFeature: any;
    static fromGeometry: any;
    constructor(coordinates: any, properties?: any);
    set Properties(properties: any);
    clone(): Geometry;
    equals(geometry: Geometry): boolean;
    abstract updateBBox(): void;
    toGeoJSON(): GeoJSONFeature;
    static fromGeoJSON(feature: GeoJSONFeature | GeoJSONGeometry): Geometry | GeometryCollection;
}
export declare class GeometryCollection {
    coordinates: any;
    geometries: (Geometry | GeometryCollection)[];
    bbox: MBR;
    properties: any;
    projection: Projection;
    constructor(geometries: (Geometry | GeometryCollection)[], properties?: any);
    toXY(): any;
    updateBBox(geometry: any): void;
    addGeometry(geometry: any): void;
    _update(geometry: any, index: number): void;
    toGeoJSON(): GeoJSONFeature;
}
