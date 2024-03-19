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
import { GeoJSONFeature, GeoJSONFeatureCollection, GeoJSONGeometry, GeoJSONGeometryCollection, GeoJSONLineString, GeoJSONMultiLineString, GeoJSONMultiPoint, GeoJSONMultiPolygon, GeoJSONPoint, GeoJSONPolygon } from "./GeoJSON";

/**
 * Geometry for GeoJSON independent Objects including Point, LineString, Polygon
 * - no GeometryCollection
 * - no MultiPoint, MultiLineString, MultiPolygon
 */
export abstract class Geometry {
    protected bbox: MBR = [Infinity, Infinity, -Infinity, -Infinity];
    protected coordinates: any;
    protected properties: any;
    
    static fromFeature: any;
    static fromGeometry: any;

    constructor(coordinates: any, properties?: any) {
        this.coordinates = coordinates;
        // this.properties = properties;
        if (properties) {
            this.properties = properties;
        }
        this.updateBBox(); // update the bounding box
    }

    getCoordinates(): any { return this.coordinates; }
    getProperties(): any { return this.properties; }
    getBoundingBox(): MBR | null { return this.bbox; }

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

    static fromGeoJSON(feature: GeoJSONFeature | GeoJSONGeometry): Geometry {
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
    update_(coordinates: any, properties?: any): void {
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
    update(coordinates: any, properties?: any): Geometry {
        const geometry = this.clone();
        geometry.update_(coordinates, properties);
        return geometry;
    }
}

// 包括：MultiPoint, MultiLineString, MultiPolygon 及 GeometryCollection
// GeometryCollection 就不使用抽象类了
// 暂时不支持嵌套 GeometryCollection
export class GeometryCollection{
    protected geometries: (Geometry | GeometryCollection)[] = [];
    protected bbox: MBR = [Infinity, Infinity, -Infinity, -Infinity];
    protected properties: any;

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

    set Properties(properties: any) { this.properties = properties; }
    getBoundingBox(): MBR | null { return this.bbox; }
    getGeometries(): (Geometry | GeometryCollection)[] { return this.geometries; }
    getProperties(): any { return this.properties; }

    updateBBox(geometry: Geometry | GeometryCollection): void {
        const bbox = geometry.getBoundingBox();
        if (bbox) {
            this.bbox = mergeMBR(this.bbox, bbox);
        }
    }

    addGeometry(geometry: Geometry): void {
        this.geometries.push(geometry);
        this.updateBBox(geometry);
    }

    _update(geometry: Geometry, index: number): void {
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

    static fromFeature(feature: GeoJSONFeature | GeoJSONFeatureCollection): GeometryCollection{
        // from feature
        // 1. 带有 GeometryCollection 的 feature
        // 2. FeatureCollection
        if(feature.type === "Feature"){
            const geometry = feature.geometry;
            if(geometry.type === "GeometryCollection"){
                const geometries = (geometry as GeoJSONGeometryCollection).geometries.map(geo => fromGeometryObj(geo));
                return new GeometryCollection(geometries, feature.properties);
            }else{
                throw new Error("The input feature is not a GeometryCollection: " + geometry.type);
            }
        }else if(feature.type === "FeatureCollection"){
            // 递归调用 fromGeometry
            const geometries = (feature as GeoJSONFeatureCollection).features.map(f => fromFeatureObj(f));
            return new GeometryCollection(geometries);
        } else{
            throw new Error("Unknown GeoJSON type");
        }
    }

    static fromGeometry(geometry: GeoJSONGeometryCollection | GeoJSONGeometry): GeometryCollection{
        // 1. GeometryCollection
        if(geometry.type === "GeometryCollection"){
            const geometries = (geometry as GeoJSONGeometryCollection).geometries.map(geo => fromGeometryObj(geo));
            return new GeometryCollection(geometries);
        }else{
            throw new Error("The input geometry is not a GeometryCollection: " + geometry.type);
        }
    }
}

export interface geometryCreator{
    fromFeature: any;
    fromGeometry: any;
}

// Factory functions
export function fromGeometryObj(
    geometry: GeoJSONGeometry | GeoJSONGeometryCollection
): Geometry | GeometryCollection {
    switch (geometry.type) {
        case "Point":
            return PointCreator.fromGeometry(geometry as GeoJSONPoint);
        case "LineString":
            return LineStringCreator.fromGeometry(geometry as GeoJSONLineString);
        case "Polygon":
            return PolygonCreator.fromGeometry(geometry as GeoJSONPolygon);
        case "MultiPoint":
            return MultiPointCreator.fromGeometry(geometry as GeoJSONMultiPoint);
        case "MultiLineString":
            return MultiLineStringCreator.fromGeometry(geometry as GeoJSONMultiLineString);
        case "MultiPolygon":
            return MultiPolygonCreator.fromGeometry(geometry as GeoJSONMultiPolygon);
        case "GeometryCollection":
            return GeometryCollection.fromGeometry(geometry);
        default:
            throw new Error("Unknown geometry type: " + geometry.type + " in fromGeometryObj");
    }
}

export function fromFeatureObj(feature: GeoJSONFeature | GeoJSONFeatureCollection): Geometry | GeometryCollection {
    if(feature.type === "Feature"){
        const geometry = feature.geometry;
        switch (geometry.type) {
            case "Point":
                return PointCreator.fromFeature(feature);
            case "LineString":
                return LineStringCreator.fromFeature(feature);
            case "Polygon":
                return PolygonCreator.fromFeature(feature);
            case "MultiPoint":
                return MultiPointCreator.fromFeature(feature);
            case "MultiLineString":
                return MultiLineStringCreator.fromFeature(feature);
            case "MultiPolygon":
                return MultiPolygonCreator.fromFeature(feature);
            case "GeometryCollection":
                return GeometryCollection.fromFeature(feature);
            default:
                throw new Error("Unknown geometry type: " + geometry.type + " in fromGeometryObj");
        }
    }else if(feature.type === "FeatureCollection"){
        return GeometryCollection.fromFeature(feature);
    }else{
        throw new Error("Unknown GeoJSON type");
    }
}

// import { PointCreator, MultiPointCreator } from "./Point";
// import { LineStringCreator, MultiLineStringCreator } from ".";
// import { PolygonCreator, MultiPolygonCreator } from "./Polygon";