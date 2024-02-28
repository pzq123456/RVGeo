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
import { GeoJSONFeature, GeoJSONGeometry } from "./GeoJSON";

/**
 * Geometry for GeoJSON
 */
export abstract class Geometry<T> {
    protected bbox: MBR = [Infinity, Infinity, -Infinity, -Infinity];
    protected coordinates: any;
    protected properties: T = {} as T ; // if no properties are provided, use an empty object
    
    static fromFeature: any;
    static fromGeometry: any;

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

    
    clone(): Geometry<T>{
        const coordinates = this.coordinates.slice(); // Deep copy of coordinates
        const properties = { ...this.properties }; // Deep copy of properties
      
        return new (this.constructor as any)(coordinates, properties);
    }

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

    static fromGeoJSON(feature: GeoJSONFeature<any> | GeoJSONGeometry): Geometry<any> {
        // 每一个子类都实现了 fromFeature 和 fromGeometry 方法
        // 所以这里可以直接调用
        if (feature.type === "Feature") {
            return this.fromFeature(feature);
        } else {
            return this.fromGeometry(feature as GeoJSONGeometry);
        }
    }
}
