import { MultiPoint, Point } from '.';
import { GeoJSONFeature, GeoJSONLineString, GeoJSONMultiLineString } from './GeoJSON';
import { Geometry, GeometryCollection } from './Geometry';

export declare class LineString extends Geometry {
    constructor(coordinates: GeoJSONLineString["coordinates"], properties?: any);
    updateBBox(): void;
    toXY(): GeoJSONLineString["coordinates"];
    toMultiPoint(): MultiPoint;
    /**
     * 按照逆时针方向排序点
    */
    static fromGeometry(geometry: GeoJSONLineString): LineString;
    static fromFeature(feature: GeoJSONFeature): LineString;
    static isLineString(lineString: any): lineString is LineString;
}
export declare class MultiLineString extends GeometryCollection {
    coordinates: GeoJSONMultiLineString["coordinates"];
    constructor(geometries: LineString[] | GeoJSONMultiLineString["coordinates"], properties?: any);
    getCoodinates(): GeoJSONMultiLineString["coordinates"];
    toMultiPoint(): MultiPoint;
    toXY(): GeoJSONMultiLineString["coordinates"];
    addGeometry(geometry: LineString | GeoJSONLineString["coordinates"]): void;
    toGeoJSON(): GeoJSONFeature;
    static fromFeature(feature: GeoJSONFeature): GeometryCollection;
    static fromGeometry(geometry: GeoJSONMultiLineString): GeometryCollection;
}
export declare function toLineString(points: Point[]): LineString;
