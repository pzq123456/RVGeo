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

import { MBR, mergeMBR } from "./MBR";
import { GeoJSONFeature, GeoJSONGeometry } from "./GeoJSON";

import { Projection } from "../geo/projection/base";
import { SphericalMercator } from "..";

// 注意： 该模块中的类不建议直接实例化，而是通过工厂函数创建

/**
 * Geometry for GeoJSON independent Objects including Point, LineString, Polygon
 * - no GeometryCollection
 * - no MultiPoint, MultiLineString, MultiPolygon
 */
export abstract class Geometry {
    bbox: MBR = [Infinity, Infinity, -Infinity, -Infinity];
    readonly coordinates: any;
    properties: any;
    readonly projection: Projection = SphericalMercator;
    toXY(): any {}
    
    static fromFeature: any;
    static fromGeometry: any;

    constructor(coordinates: any, properties?: any) {
        this.coordinates = coordinates;

        if (properties) {
            this.properties = properties;
        }
        this.updateBBox(); // update the bounding box
    }

    set Properties(properties: any) { this.properties = properties; }
    
    clone(): Geometry{
        const coordinates = this.coordinates.slice(); // Deep copy of coordinates
        const properties = { ...this.properties }; // Deep copy of properties
      
        return new (this.constructor as any)(coordinates, properties);
    }

    equals(geometry: Geometry): boolean {
        return JSON.stringify(this.toGeoJSON()) === JSON.stringify(geometry.toGeoJSON());
    }

    abstract updateBBox(): void; 
    
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

    static fromGeoJSON(feature: GeoJSONFeature | GeoJSONGeometry): Geometry | GeometryCollection {
        // 每一个子类都实现了 fromFeature 和 fromGeometry 方法
        // 所以这里可以直接调用
        if (feature.type === "Feature") {
            return this.fromFeature(feature as GeoJSONFeature);
        } else if (feature.type === "Geometry") {
            return this.fromGeometry(feature as GeoJSONGeometry);
        } else if(feature.type === "FeatureCollection"){
            throw new Error( feature.type + "is not supported");
        }
        else{
            throw new Error("Unknown GeoJSON type: " + feature.type);
        }
    }
}

// 包括：MultiPoint, MultiLineString, MultiPolygon 及 GeometryCollection
// GeometryCollection 就不使用抽象类了
// 暂时不支持嵌套 GeometryCollection
export class GeometryCollection{
    coordinates: any;
    geometries: (Geometry | GeometryCollection)[] = [];
    bbox: MBR = [Infinity, Infinity, -Infinity, -Infinity];
    properties: any;
    projection: Projection = SphericalMercator;

    constructor(geometries: (Geometry | GeometryCollection)[], properties?: any) {
        if (properties) {
            this.properties = properties;
        }
        // 默认维护一个 bbox
        geometries.forEach(geometry => {
            this.geometries.push(geometry);
            this.updateBBox(geometry);
        });
    }

    toXY(): any{}; // 未实现

    updateBBox(geometry: any): void {
        const bbox = geometry.bbox;
        if (bbox) {
            this.bbox = mergeMBR(this.bbox, bbox);
        }
    }

    addGeometry(geometry: any): void {
        this.geometries.push(geometry);
        this.updateBBox(geometry);
    }

    _update(geometry: any, index: number): void {
        this.geometries[index] = geometry;
        this.updateBBox(geometry);
    }

    toGeoJSON(): GeoJSONFeature{
        let feature: GeoJSONFeature = {
            type: "Feature",
            geometry: {
                type: "GeometryCollection",
                geometries: this.geometries.map(geometry => geometry.toGeoJSON().geometry)
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
}