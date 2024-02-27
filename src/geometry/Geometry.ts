/**
 * @module Geometry
 * 该模块中的是内置的 geometry 对象（存储的坐标全部为 WGS 84 经纬度坐标）
 * @see http://geojson.io/
 * 地理要素分为
 *      |- Point（点）
 *core--|- LineString（线）
 *      |- Polygon（面）
 * ===
 *      |-MultiPoint（多点）
 *multi~|-MultiLineString（多线）
 *      |-MultiPolygon（多面）
 * ===
 * GeometryCollection（几何集合）
 */

import { MBR } from "./MBR";
import { Point } from "./Point";
import { LineString } from "./LineString";
import { Polygon } from "./Polygon";

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

    getCoordinates(): any { return this.coordinates; }
    getProperties(): T { return this.properties; }
    getBoundingBox(): MBR | null { return this.bbox; }

    
    abstract clone(): Geometry<T>; // clone the geometry


    abstract updateBBox(): void; // update the bounding box
    
    toGeoJSON(): GeoJSONFeature<T>{
        let feature: GeoJSONFeature<T> = {
            type: "Feature",
            geometry: {
                type: this.constructor.name,
                coordinates: this.coordinates
            },
            properties: this.properties,
        };
        if (this.bbox) {
            feature.bbox = this.bbox;
        }
        return feature;
    }

    static fromGeoJSON(feature: GeoJSONFeature<any>): Geometry<any> {
        const { type } = feature;
        const Constructor = Geometry.getConstructor(type);
        return Constructor.fromGeoJSON(feature);
    }

    // 通过类型获取构造函数
    private static getConstructor(type: string): typeof Geometry<any> {
        switch (type) {
          case "Point":
            return Point;
          case "LineString":
            return LineString;
          case "Polygon":
            return Polygon;
          default:
            throw new Error(`Unsupported geometry type: ${type}`);
        }
      }
}
