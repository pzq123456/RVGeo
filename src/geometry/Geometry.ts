/**
 * @module Geometry
 * 该模块中的是内置的 geometry 对象（存储的坐标全部为 WGS 84 经纬度坐标）
 * @see http://geojson.io/
 * 地理要素分为Point（点）、MultiPoint（多点）、LineString（线）、MultiLineString（多线）、Polygon（面）、MultiPolygon（多面）、GeometryCollection（几何集合）
 * - 该模块的目的就是为了方便操作这些地理要素
 */

import { MBR } from "./MBR";

// base class for all geometry classes
export interface GeoJSONGeometry {
    type: string;
    coordinates: any;
}

export interface GeoJSONFeature<T> {
    type: "Feature";
    geometry: GeoJSONGeometry;
    properties: T;
    bbox?: MBR; // https://datatracker.ietf.org/doc/html/rfc7946#section-5
}

export interface defaultProperties {}; // 只要不指定字段，用户就可以自定义任意字段

/**
 * Geometry for GeoJSON
 */
export abstract class Geometry<T> {
    protected bbox: MBR | null = [Infinity, Infinity, -Infinity, -Infinity];
    protected coordinates: any;
    protected properties: T = {} as T ; // if no properties are provided, use an empty object

    constructor(coordinates: any, properties?: T) {
        this.coordinates = coordinates;
        // this.properties = properties;
        if (properties) {
            this.properties = properties;
        }
        this.updateBBox(); // update the bounding box
    }

    abstract updateBBox(): void;
    abstract toGeoJSON(): GeoJSONFeature<T>; // wrap the geometry in a GeoJSON feature
    abstract fromGeoJSON(geoJSON: GeoJSONGeometry): void; 

    getCoordinates(): any {
        return this.coordinates;
    }

    getProperties(): T {
        return this.properties;
    }

    getBoundingBox(): MBR | null {
        return this.bbox;
    }
}
