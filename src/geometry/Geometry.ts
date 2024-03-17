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

// FeatureCollection 及 GeometryCollection 提供另外的支持

import { MBR } from "./MBR";
import { GeoJSONFeature, GeoJSONGeometry, GeoJSONFeatureCollection, GeoJSONGeometryCollection } from "./GeoJSON";

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
        } else {
            return this.fromGeometry(feature as GeoJSONGeometry);
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

interface GeometryObject {
    type: string | null;
    coordinates?: any;
    geometries?: any;
    arcs?: any;
    bbox?: MBR;
    id?: string | number;
    properties?: any;
}

export function geomifyObject(input: GeoJSONFeatureCollection | GeoJSONFeature<any> | GeoJSONGeometry): any {
    if (input == null) {
        return {type: null};
    } else if (input.type === "FeatureCollection") {
        return geomifyFeatureCollection(input as GeoJSONFeatureCollection);
    } else if (input.type === "Feature") {
        return geomifyFeature(input as GeoJSONFeature<any>);
    } else {
        return geomifyGeometry(input as GeoJSONGeometry);
    }
}

function geomifyFeatureCollection(input: GeoJSONFeatureCollection) : GeometryObject {
    var output = {type: "GeometryCollection", geometries: input.features.map(geomifyFeature)} as GeometryObject;
    if (input.bbox != null) output.bbox = input.bbox;
    return output;
}

function geomifyFeature(input: GeoJSONFeature<any>) : GeometryObject {
    var output = geomifyGeometry(input.geometry), key; // eslint-disable-line no-unused-vars
    if (input.id != null) output.id = input.id;
    if (input.bbox != null) output.bbox = input.bbox;
    for (key in input.properties) { output.properties = input.properties; break; }
    return output;
}



function geomifyGeometry(input: GeoJSONGeometry | GeoJSONGeometryCollection): GeometryObject {
    if (input == null) return {type: null};
    let output = {} as GeometryObject;
    if (input.type === "GeometryCollection") {
        input = input as GeoJSONGeometryCollection;
        // 递归调用
        output = {type: "GeometryCollection", geometries: input.geometries.map(geomifyGeometry)};
        if (input.bbox != null) output.bbox = input.bbox;
    } else if (input.type === "Point" || input.type === "MultiPoint") {
        output = {type: input.type, coordinates: input.coordinates};
    } else if (input.type === "LineString" || input.type === "MultiLineString" || input.type === "Polygon" || input.type === "MultiPolygon") {
        input = input as GeoJSONGeometry;
        output = {type: input.type, arcs: input.coordinates};
    }else {
        throw new Error("Unknown geometry type: " + input.type);
    }

    return output;
}