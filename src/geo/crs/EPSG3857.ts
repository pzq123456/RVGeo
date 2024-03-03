import { CRS, Earth } from "./base";
import { SphericalMercator } from "../projection/";
import { extend } from "../../core";

/**
 * EPSG:3857
 */
export const EPSG3857 = extend({}, Earth, {
    code: 'EPSG:3857',
    projection: SphericalMercator,
}) as CRS;

/**
 * EPSG:900913
 */
export const EPSG900913 = extend({}, EPSG3857, {
	code: 'EPSG:900913'
}) as CRS;