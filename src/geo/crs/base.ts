import { haversine, sphericalArea } from '../../';
import { Projection } from "../projection";

/**
 * 坐标参考系统接口
 */
export interface CRS {
    projection: Projection | null;
    distance: (latlng1: [number, number], latlng2: [number, number]) => number;
    area?: (latlngs: [number, number][]) => number;
    planeArea?: (latlngs: [number, number][]) => number;
    code?: string;
    R: number;
    wrapLng?: [number, number];
    wrapLat?: [number, number];
}

/**
 * 基础 CRS 抽象类
 */
export abstract class BaseCRS implements CRS {
    public abstract readonly R: number;
    public abstract projection: Projection | null;
    public abstract distance(latlng1: [number, number], latlng2: [number, number]): number;
    
    public area?(latlngs: [number, number][]): number;
    public planeArea?(latlngs: [number, number][]): number;
    public code?: string;
    public wrapLng?: [number, number];
    public wrapLat?: [number, number];
}

/**
 * 地球坐标参考系统实现类
 */
export class EarthCRS extends BaseCRS {
    public readonly R: number = 6371000;
    public projection: Projection | null = null;

    /**
     * haversine 计算球面两点之间的距离
     * @see https://rosettacode.org/wiki/Haversine_formula
     * @param latlng1 
     * @param latlng2 
     * @returns 
     */
    public distance(latlng1: [number, number], latlng2: [number, number]): number {
        return haversine(latlng1, latlng2, this.R);
    }

    /**
     * - 使用格林公式及球面积分直接计算球面多边形的面积
     * - calculate the area of a spherical polygon using the spherical excess method
     * @see http://home.ustc.edu.cn/~liujunyan/blog/Area-and-center-of-spherical-polygon/
     * @param points - 可以为点类型数组、LineString 类型或者二维数组（需要为经纬度坐标系下）
     * @returns {number} - 面积
     */
    public area(points: [number, number][]): number {
        return sphericalArea(points, this.R);
    }
}

// 保持向后兼容的导出
export const Earth: CRS = new EarthCRS();