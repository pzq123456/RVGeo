import { haversine, sphericalArea } from '../../';
import { Projection } from "../projection";
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

export const Earth: CRS = {
    R : 6371000,
    projection: null,
    /**
     * haversine 计算球面两点之间的距离
     * @see https://rosettacode.org/wiki/Haversine_formula
     * @param latlng1 
     * @param latlng2 
     * @returns 
     */
    distance(latlng1: [number, number], latlng2: [number, number]): number {
        return haversine(latlng1, latlng2, this.R);
    },

    /**
     * - 使用格林公式及球面积分直接计算球面多边形的面积
     * - calculate the area of a spherical polygon using the spherical excess method
     * @see http://home.ustc.edu.cn/~liujunyan/blog/Area-and-center-of-spherical-polygon/
     * @param points - 可以为点类型数组、LineString 类型或者二维数组（需要为经纬度坐标系下）
     * @returns {number} - 面积
     */
    area(points: [number, number][]) : number {
        return sphericalArea(points, this.R);
    }
}

