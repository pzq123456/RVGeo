/**
 * @module geometry
 */
import * as core from "../core";
const isPotentialGeoObject = core.isPotentialGeoObject; // 判断一个 object 是否是(潜在的)地理对象（是否含有 X，Y 或者 lon，lat 或者 lng，lat 属性）

import { Geometry, GeoJSONFeature, GeoJSONGeometry, defaultProperties } from "./Geometry";

/**
 * Point geometry
 */
export class Point extends Geometry<defaultProperties> {
    constructor(coordinates: [number, number], properties?: defaultProperties) {
        super(coordinates, properties);
    }

    updateBBox(): void {
        this.bbox = null; // point has no bounding box
    }

    toGeoJSON(): GeoJSONFeature<defaultProperties> {
        return {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: this.coordinates
            },
            properties: this.properties,
        };
    }

    fromGeoJSON(geoJSON: GeoJSONGeometry): void {
        this.coordinates = geoJSON.coordinates;
        this.updateBBox(); // make sure the bounding box is updated
    }
}

/*Factory function*/
// 使用函数重载 实现工厂函数
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
        } else {
            return new Point(args[0], args[1]);
        }
    }else{
        return new Point([args[0], args[1]], args[2]);
    }
}

