import * as core from "../core";
const isPotentialGeoObject = core.isPotentialGeoObject; // 判断一个 object 是否是(潜在的)地理对象（是否含有 X，Y 或者 lon，lat 或者 lng，lat 属性）

import { Geometry, GeometryCollection} from "./Geometry";
import { GeoJSONFeature, defaultProperties, GeoJSONPoint, GeoJSONMultiPoint } from "./GeoJSON";
/**
 * Point geometry
 */
export class Point extends Geometry<defaultProperties> {
    constructor(coordinates: GeoJSONPoint["coordinates"] | any, properties?: defaultProperties) {
        super(coordinates, properties);
    }

    updateBBox(): void {
        this.bbox = [this.coordinates[0], this.coordinates[1], this.coordinates[0], this.coordinates[1]];
    }

    static fromGeometry(geometry: GeoJSONPoint): Point {
        return new Point(geometry.coordinates);
    }

    static fromFeature(feature: GeoJSONFeature<any>): Point {
        const { geometry, properties } = feature;
        if (geometry.type !== "Point") {
            throw new Error(`The input geometry is not a Point: ${geometry.type}`);
        }
        const pointGeometry = geometry as GeoJSONPoint; // Type assertion
        return new Point(pointGeometry.coordinates, properties);
    }

    static isPoint(point: any): point is Point{
        return point.type === "Point";
    }
}

export class MultiPoint extends GeometryCollection{
    // 可以传入 点类型数组 但是会忽略每一个点的 properties
    // 因为 MultiPoint 本身有 properties
    // 建议在外部提取每一个点的 properties 再传入 到 MultiPoint 的 properties
    constructor(geometries: Point[] | GeoJSONMultiPoint["coordinates"], properties?: defaultProperties){
        // 判断类型
        if(geometries[0] instanceof Point){
            super(geometries as Point[], properties);
        }else{
            super((geometries as GeoJSONMultiPoint["coordinates"])
                    .map(coordinates => new Point(coordinates)),
                    properties);
        }
    }

    addGeometry(geometry: Point | GeoJSONMultiPoint["coordinates"]): void {
        if(geometry instanceof Point){
            this.geometries.push(geometry);
            this.updateBBox(geometry);
        }else{
            this.geometries.push(new Point(geometry));
            this.updateBBox(this.geometries[this.geometries.length - 1]);
        }
    }

    toGeoJSON(): GeoJSONFeature<any>{
        let feature: GeoJSONFeature<any> = {
            type: "Feature",
            geometry: {
                type: "MultiPoint",
                coordinates: this.geometries.map(geometry => geometry.getCoordinates())
            },
            // properties: this.properties,
        } as GeoJSONFeature<any>;

        if (this.properties) {
            feature.properties = this.properties;
        }
        
        if (this.bbox) {
            feature.bbox = this.bbox;
        }
        return feature;
    }

    static fromFeature(feature: GeoJSONFeature<any>): GeometryCollection{
        const { geometry, properties } = feature;
        if (geometry.type !== "MultiPoint") {
            throw new Error(`The input geometry is not a MultiPoint: ${geometry.type}`);
        }

        const multiPointGeometry = geometry as GeoJSONMultiPoint; // Type assertion
        return new MultiPoint(multiPointGeometry.coordinates, properties);
    }

    static fromGeometry(geometry: GeoJSONMultiPoint): GeometryCollection{
        return new MultiPoint(geometry.coordinates);
    }
}


/*Factory function*/

// 使用函数重载 实现工厂函数
/**
 * the factory function to create a Point(the following ways are equivalent)
 * @example
 * // base usage
 * let point = toPoint(120, 30);
 * // override properties
 * // all properties are optional(可以不传)
 * let point = toPoint(120, 30, { name: 'test' });
 * let point = toPoint([120, 30], { name: 'test' });
 * // lon, lat = X, Y = lng, lat = x, y
 * let point = toPoint({lon: 120, lat: 30}, { name: 'test' });
 */
export function toPoint(Lon: number, Lat: number, properties?: defaultProperties): Point
export function toPoint(coordinates: [number, number], properties?: defaultProperties): Point
export function toPoint(obj:{lon: number, lat: number} | {x: number, y: number} | {lng: number, lat: number}, properties?: defaultProperties): Point
export function toPoint(...args: any[]): Point {
    if (args.length === 1) {
        if(!isPotentialGeoObject(args[0]) && args[0].length === 2) {
            return new Point(args[0]);
        } else if (isPotentialGeoObject(args[0])) {
            return new Point([args[0].lon || args[0].lng || args[0].x, args[0].lat || args[0].y], args[1]);
        }else{
            throw new Error("Invalid input");
        }
    }else if (args.length === 2) {
        if (typeof args[0] === "number" && typeof args[1] === "number") {
            return new Point([args[0], args[1]]);
        } else if(isPotentialGeoObject(args[0])){
            return new Point([args[0].lon || args[0].lng || args[0].x, args[0].lat || args[0].y], args[1]);
        }else if(Array.isArray(args[0]) && args[0].length === 2){
            return new Point(args[0] as [number, number], args[1]);
        }
        else{
            throw new Error("Invalid input");
        }
    }else{
        return new Point([args[0], args[1]], args[2]);
    }
}