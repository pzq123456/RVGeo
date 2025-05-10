import { CRS, EarthCRS } from "./base";
import { Projection, SphericalMercator } from "../projection/";
import { sphericalArea, planePolygonArea } from "../../math/measuring";

const MAXLAT: number = 85.05112877980659; // EPSG:3857 supported maximum latitude

/**
 * EPSG:3857 坐标参考系统实现类
 */
export class EPSG3857CRS extends EarthCRS {
    public readonly R: number = 6378137.0;
    public readonly code: string = 'EPSG:3857';
    public projection: Projection = SphericalMercator;
    public readonly wrapLng: [number, number] = [-180, 180];
    public readonly wrapLat: [number, number] = [-MAXLAT, MAXLAT];

    /**
     * 计算球面多边形面积
     * @param points 点坐标数组
     * @returns 面积
     */
    public area(points: [number, number][]): number {
        return sphericalArea(points, this.R);
    }

    /**
     * 计算平面多边形面积
     * @param points 点坐标数组
     * @returns 面积
     */
    public planeArea(points: [number, number][]): number {
        return planePolygonArea(points, this.R);
    }
}

/**
 * EPSG:900913 坐标参考系统实现类
 */
export class EPSG900913CRS extends EPSG3857CRS {
    public readonly code: string = 'EPSG:900913';
}

// 保持向后兼容的导出
export const EPSG3857: CRS = new EPSG3857CRS();
export const EPSG900913: CRS = new EPSG900913CRS();