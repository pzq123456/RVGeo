import { GeoJSONFeature, GeoJSONPoint, GeoJSONMultiPoint } from './GeoJSON';
import { Geometry, GeometryCollection } from './Geometry';

/**
 * Point geometry
 */
export declare class Point extends Geometry {
    get lon(): number;
    get lat(): number;
    constructor(coordinates: GeoJSONPoint["coordinates"] | any, properties?: any);
    updateBBox(): void;
    toXY(): GeoJSONPoint["coordinates"];
    static isPoint(geometry: any): geometry is Point;
    static fromGeometry(geometry: GeoJSONPoint): Point;
    static fromFeature(feature: GeoJSONFeature): Point;
}
export declare class MultiPoint extends GeometryCollection {
    readonly coordinates: GeoJSONMultiPoint["coordinates"];
    constructor(geometries: Point[] | GeoJSONMultiPoint["coordinates"], properties?: any);
    toXY(): GeoJSONMultiPoint["coordinates"];
    getCoodinates(): GeoJSONMultiPoint["coordinates"];
    /**
     * - 计算多点的重心
     * - calculate centroid of MultiPoint
     * @param values - 可指定权重数组(可选) 会首先归一化权重数组
     * @returns {Point} 返回重心坐标
     * @see https://en.wikipedia.org/wiki/Centroid
     */
    centroid(values?: number[]): Point;
    /**
     * 将点（类型或数组）、多点类型融合到此 MultiPoint 中
     * @param geometry
     */
    addGeometry(geometry: Point | GeoJSONPoint["coordinates"] | MultiPoint): void;
    toGeoJSON(): GeoJSONFeature;
    static isMultiPoint(geometry: any): geometry is MultiPoint;
    static fromFeature(feature: GeoJSONFeature): GeometryCollection;
    static fromGeometry(geometry: GeoJSONMultiPoint): GeometryCollection;
}
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
export declare function toPoint(Lon: number, Lat: number, properties?: any): Point;
export declare function toPoint(coordinates: [number, number], properties?: any): Point;
export declare function toPoint(obj: {
    lon: number;
    lat: number;
} | {
    x: number;
    y: number;
} | {
    lng: number;
    lat: number;
}, properties?: any): Point;
export declare function toMultiPoint(points: Point[] | GeoJSONMultiPoint["coordinates"], properties?: any): MultiPoint;
