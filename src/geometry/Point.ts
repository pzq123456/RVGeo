import * as core from "../core";
const isPotentialGeoObject = core.isPotentialGeoObject; // 判断一个 object 是否是(潜在的)地理对象（是否含有 X，Y 或者 lon，lat 或者 lng，lat 属性）

import { Geometry, GeometryCollection } from "./Geometry";
import { GeoJSONFeature, GeoJSONPoint, GeoJSONMultiPoint } from "./GeoJSON";
import { mbrToPolygon } from "./MBR";

/**
 * Point geometry
 */
export class Point extends Geometry {
    // 默认为球面墨卡托投影
    get lon(): number {
        return this.coordinates[0];
    }
    get lat(): number {
        return this.coordinates[1];
    }

    constructor(coordinates: GeoJSONPoint["coordinates"] | any, properties?: any) {
        super(coordinates, properties);
    }

    updateBBox(): void {
        this.bbox = [this.coordinates[0], this.coordinates[1], this.coordinates[0], this.coordinates[1]];
    }
    
    toXY(): GeoJSONPoint["coordinates"] {
        return this.projection.project(this.coordinates);
    }

    static isPoint(geometry: any): geometry is Point {
        return geometry instanceof Point;
    }

    static fromGeometry(geometry: GeoJSONPoint): Point {
        return new Point(geometry.coordinates);
    }

    static fromFeature(feature: GeoJSONFeature): Point {
        const { geometry, properties } = feature;
        if (geometry.type !== "Point") {
            throw new Error(`The input geometry is not a Point: ${geometry.type}`);
        }
        const pointGeometry = geometry as GeoJSONPoint;
        if(properties){
            return new Point(pointGeometry.coordinates, properties);
        }else{
            return new Point(pointGeometry.coordinates);
        }
    }

}


export class MultiPoint extends GeometryCollection{
    // 可以传入 点类型数组 但是会忽略每一个点的 properties
    // 因为 MultiPoint 本身有 properties
    // 建议在外部提取每一个点的 properties 再传入 到 MultiPoint 的 properties
    readonly coordinates: GeoJSONMultiPoint["coordinates"];
    constructor(geometries: Point[] | GeoJSONMultiPoint["coordinates"], properties?: any){
        // 判断类型
        if(geometries[0] instanceof Point){
            super(geometries as Point[], properties);
            this.coordinates = (geometries as Point[]).map(geometry => geometry.coordinates);
        }else{
            super((geometries as GeoJSONMultiPoint["coordinates"])
                    .map(coordinates => new Point(coordinates)),
                    properties);
            this.coordinates = geometries as GeoJSONMultiPoint["coordinates"];
        }
    }

    toXY(isCountMBR?: boolean): GeoJSONMultiPoint["coordinates"] {
        const xypoints = this.geometries.map(geometry => (geometry as Point).toXY());
        if(!isCountMBR){
            return xypoints;
        }else{
            return [...xypoints, ...toMultiPoint(mbrToPolygon(this.bbox).slice(0,4)).toXY()]
        }
    }

    getCoodinates(isCountMBR?: boolean): GeoJSONMultiPoint["coordinates"]{
        if(!isCountMBR){
            return this.coordinates;
        }else{
            return [...this.coordinates, ...mbrToPolygon(this.bbox).slice(0,4)]
        }
    }

    /**
     * - 计算多点的重心
     * - calculate centroid of MultiPoint
     * @param values - 可指定权重数组(可选) 会首先归一化权重数组
     * @returns {Point} 返回重心坐标
     * @see https://en.wikipedia.org/wiki/Centroid
     */
    centroid(values?: number[]): Point{
        // 若有权重数组 则归一化
        if(values){
            let sum = 0;
            for(let i = 0; i < values.length; i++){
                sum += values[i];
            }
            for(let i = 0; i < values.length; i++){
                values[i] /= sum;
            }

            let sumLon = 0, sumLat = 0;
            for(let i = 0; i < this.coordinates.length; i++){
                let tmp = this.coordinates[i];
                sumLon += tmp[0] * values[i];
                sumLat += tmp[1] * values[i];
            }
            let lon = sumLon;
            let lat = sumLat;

            return new Point([lon, lat]);
        }else{
            let sumLon = 0, sumLat = 0;
            for(let i = 0; i < this.coordinates.length; i++){
                let tmp = this.coordinates[i];
                sumLon += tmp[0];
                sumLat += tmp[1];
            }
            let lon = sumLon / this.coordinates.length;
            let lat = sumLat / this.coordinates.length;
            return new Point([lon, lat]);
        }
    }

    /**
     * 将点（类型或数组）、多点类型融合到此 MultiPoint 中
     * @param geometry 
     */
    addGeometry(geometry: Point | GeoJSONPoint["coordinates"] | MultiPoint): void {
        if(geometry instanceof Point){
            this.geometries.push(geometry);
            this.coordinates.push(geometry.coordinates);
            this.updateBBox(geometry);
        }else if(geometry instanceof MultiPoint){
            this.geometries.concat(geometry.geometries);
            this.coordinates.concat(geometry.coordinates);
            this.updateBBox(geometry);
        }else{
            this.geometries.push(new Point(geometry));
            this.coordinates.push(geometry);
            this.updateBBox(this.geometries[this.geometries.length - 1]);
        }
    }

    toGeoJSON(): GeoJSONFeature{

        let feature: GeoJSONFeature = {
            type: "Feature",
            geometry: {
                type: "MultiPoint",
                // 类型断言
                coordinates: this.geometries.map(geometry => (geometry as Point).coordinates) as GeoJSONMultiPoint["coordinates"]
            },

        } as GeoJSONFeature;

        if (this.properties) {
            feature.properties = this.properties;
        }
        
        if (this.bbox) {
            feature.bbox = this.bbox;
        }
        return feature;
    }

    static isMultiPoint(geometry: any): geometry is MultiPoint {
        return geometry instanceof MultiPoint;
    }

    static fromFeature(feature: GeoJSONFeature): GeometryCollection{
        const { geometry, properties } = feature;
        if (geometry.type !== "MultiPoint") {
            throw new Error(`The input geometry is not a MultiPoint: ${geometry.type}`);
        }

        const multiPointGeometry = geometry as GeoJSONMultiPoint; // Type assertion

        if(properties){
            return new MultiPoint(multiPointGeometry.coordinates, properties);
        }else{
            return new MultiPoint(multiPointGeometry.coordinates);
        }
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
export function toPoint(Lon: number, Lat: number, properties?: any): Point
export function toPoint(coordinates: [number, number], properties?: any): Point
export function toPoint(obj:{lon: number, lat: number} | {x: number, y: number} | {lng: number, lat: number}, properties?: any): Point
export function toPoint(...args: any[]): Point {
    if (args.length === 1) {
        if(!isPotentialGeoObject(args[0]) && args[0].length === 2) {
            return new Point(args[0]);
        } else if (isPotentialGeoObject(args[0])) {
            return new Point(
                [args[0].lon || args[0].lng || args[0].x, args[0].lat || args[0].y],
                (({ lon, lng, x, lat, y, ...rest }) => rest)(args[0])
            );
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

export function toMultiPoint(points: Point[] | GeoJSONMultiPoint["coordinates"], properties?: any): MultiPoint{
    return new MultiPoint(points, properties);
}