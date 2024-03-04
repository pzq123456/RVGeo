import { CRS, Earth } from "./base";
import { SphericalMercator } from "../projection/";
import { extend } from "../../core";

const MAXLAT: number = 85.05112877980659; // EPSG:3857 支持的最大纬度

/**
 * EPSG:3857
 */
export const EPSG3857 = extend({}, Earth, {
    code: 'EPSG:3857',
    projection: SphericalMercator,
    wrapLng: [-180, 180],
    wrapLat: [-MAXLAT, MAXLAT]
}) as CRS;

/**
 * EPSG:900913
 */
export const EPSG900913 = extend({}, EPSG3857, {
	code: 'EPSG:900913'
}) as CRS;