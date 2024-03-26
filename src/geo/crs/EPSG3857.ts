import { CRS, Earth } from "./base";
import { SphericalMercator } from "../projection/";
import { extend } from "../../core";
import { sphericalArea, planePolygonArea } from "../../math/measuring";

const MAXLAT: number = 85.05112877980659; // EPSG:3857 支持的最大纬度

/**
 * EPSG:3857
 */
export const EPSG3857 = extend({}, Earth, {
    R: 6378137.0,
    code: 'EPSG:3857',
    projection: SphericalMercator,
    wrapLng: [-180, 180],
    wrapLat: [-MAXLAT, MAXLAT],
    area(points: [number, number][]) : number {
        return sphericalArea(points, this.R);
    },
    planeArea(points: [number, number][]) : number {
        return planePolygonArea(points,this.R);
    }
}) as CRS;

/**
 * EPSG:900913
 */
export const EPSG900913 = extend({}, EPSG3857, {
	code: 'EPSG:900913'
}) as CRS;