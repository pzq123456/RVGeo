/*
 * Spherical Mercator projection — the most common projection for online maps,
 * used by almost all free and commercial tile providers. Assumes that Earth is
 * a sphere. Used by the `EPSG:3857` CRS.
 */
import { Projection } from "./base";

const A: number = 6378137.0;
const MAXEXTENT: number = 20037508.342789244;
const MAXLAT: number = 85.05112877980659;

export const SphericalMercator: Projection = {
    project(latlng: [number, number]): [number, number] {
        let d = Math.PI / 180,
            max = MAXLAT,
            lat = Math.max(Math.min(max, latlng[1]), -max),
            sin = Math.sin(lat * d);
        return [A * latlng[0] * d, A * Math.log((1 + sin) / (1 - sin)) / 2];
    },
    unproject(point: [number, number]): [number, number] {
        let d = 180 / Math.PI;
        return [(2 * Math.atan(Math.exp(point[1] / A)) - Math.PI / 2) * d, point[0] * d / A];
    },
    bounds: [-MAXEXTENT, -MAXEXTENT,MAXEXTENT, MAXEXTENT],
    name: 'EPSG:3857'
};