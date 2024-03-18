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
import { GeoJSONFeature, GeoJSONGeometry, GeoJSONGeometryCollection } from "./GeoJSON";

/**
 * Geometry for GeoJSON independent Objects including Point, LineString, Polygon
 * - no GeometryCollection
 * - no MultiPoint, MultiLineString, MultiPolygon
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

    equals(geometry: Geometry<T>): boolean {
        return JSON.stringify(this.toGeoJSON()) === JSON.stringify(geometry.toGeoJSON());
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
        } else if (feature.type === "Geometry") {
            return this.fromGeometry(feature as GeoJSONGeometry);
        } else if(feature.type === "FeatureCollection"){
            throw new Error( feature.type + "is not supported");
        }
        else{
            throw new Error("Unknown GeoJSON type: " + feature.type);
        }
    }

    /**
     * 直接在原对象上更新坐标
     * @param coordinates 
     * @param properties 
     */
    update_(coordinates: any, properties?: T): void {
        this.coordinates = coordinates;
        if (properties) {
            this.properties = properties;
        }
        this.updateBBox();
    }

    /**
     * 返回当前对象的副本，更新坐标
     * @param coordinates 
     * @param properties 
     */
    update(coordinates: any, properties?: T): Geometry<T> {
        const geometry = this.clone();
        geometry.update_(coordinates, properties);
        return geometry;
    }
}

// 包括：MultiPoint, MultiLineString, MultiPolygon 及 GeometryCollection
// GeometryCollection 就不使用抽象类了
// 暂时不支持嵌套 GeometryCollection
export class GeometryCollection{
    geometries: Geometry<any>[] = [];
    bbox: MBR = [Infinity, Infinity, -Infinity, -Infinity];

    constructor(geometries: Geometry<any>[]){
        // 默认维护一个 bbox
        geometries.forEach(geometry => {
            this.geometries.push(geometry);
            this.updateBBox(geometry);
        });
    }

    updateBBox(geometry: Geometry<any>): void {
        const bbox = geometry.getBoundingBox();
        if (bbox) {
            this.bbox = mergeMBR(this.bbox, bbox);
        }
    }

    addGeometry(geometry: Geometry<any>): void {
        this.geometries.push(geometry);
        this.updateBBox(geometry);
    }

    _update(geometry: Geometry<any>, index: number): void {
        this.geometries[index] = geometry;
        this.updateBBox(geometry);
    }

    toGeoJSON(): GeoJSONFeature<any>{
        let feature: GeoJSONFeature<any> = {
            type: "Feature",
            geometry: {
                type: "GeometryCollection",
                geometries: this.geometries.map(geometry => geometry.toGeoJSON().geometry)
            },
            properties: {}
        } as GeoJSONFeature<any>;
        if (this.bbox) {
            feature.bbox = this.bbox;
        }
        return feature;
    }

    static fromFeature: any;

    static fromGeometry(geometry: GeoJSONGeometryCollection): GeometryCollection{
        //
    }
}
