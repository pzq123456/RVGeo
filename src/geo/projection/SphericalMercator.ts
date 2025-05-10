/*
 * Spherical Mercator projection — the most common projection for online maps,
 * used by almost all free and commercial tile providers. Assumes that Earth is
 * a sphere. Used by the `EPSG:3857` CRS.
 */
import { Projection } from "./base";

const A: number = 6378137.0;
const MAXEXTENT: number = 20037508.342789244;
const MAXLAT: number = 85.05112877980659;

/**
 * 球面墨卡托投影实现类
 */
export class SphericalMercatorProjection implements Projection {
    /**
     * 投影边界范围
     */
    public readonly bounds: [number, number, number, number] = [-MAXEXTENT, -MAXEXTENT, MAXEXTENT, MAXEXTENT];
    
    /**
     * 投影名称
     */
    public readonly name: string = 'EPSG:3857';

    /**
     * Convert lon/lat values to 900913 x/y.
     * - EPSG:3857 = EPSG:900913 (@link https://epsg.io/900913)
     * @param lonlat `[lon, lat]` array of geographic coordinates.
     * @returns `[x, y]` array of geographic coordinates.
     */
    public project(lonlat: [number, number]): [number, number] {
        const d = Math.PI / 180;
        const max = MAXLAT;
        const lat = Math.max(Math.min(max, lonlat[1]), -max);
        const sin = Math.sin(lat * d);

        let x = A * lonlat[0] * d;
        let y = A * Math.log((1 + sin) / (1 - sin)) / 2;
        // see: https://en.wikipedia.org/wiki/Mercator_projection

        // 限制坐标在最大范围内
        y = Math.max(Math.min(y, MAXEXTENT), -MAXEXTENT);
        x = Math.max(Math.min(x, MAXEXTENT), -MAXEXTENT);

        return [x, y];
    }
    
    /**
     * Convert 900913 x/y values to lon/lat.
     * - EPSG:3857 = EPSG:900913 (@link https://epsg.io/900913)
     * @param point `[x, y]` array of geographic coordinates.
     * @returns `[lon, lat]` array of geographic coordinates.
     */
    public unproject(point: [number, number]): [number, number] {
        const d = 180 / Math.PI;
        return [
            point[0] * d / A,
            (2 * Math.atan(Math.exp(point[1] / A)) - Math.PI / 2) * d
        ];
    }
}

// 保持向后兼容的导出
export const SphericalMercator: Projection = new SphericalMercatorProjection();