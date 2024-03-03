import {D2R} from '../../';
import { Projection } from "../projection";
export interface CRS {
    projection: Projection | null;
    distance: (latlng1: [number, number], latlng2: [number, number]) => number;
    area?: (latlngs: [number, number][]) => number;
    code?: string;
    R: number;
    wrapLng?: [number, number];
    wrapLat?: [number, number];
}

export const Earth: CRS = {
    // Mean Earth Radius, as recommended for use by
	// the International Union of Geodesy and Geophysics,
	// see https://rosettacode.org/wiki/Haversine_formula
    R : 6371000,
    projection: null,
    /**
     * distance between two geographical points using spherical law of cosines approximation(haversine 公式)
     * @param latlng1 
     * @param latlng2 
     * @returns 
     */
    distance(latlng1: [number, number], latlng2: [number, number]): number {
        let rad = Math.PI / 180,
            lat1 = latlng1[0] * rad,
            lat2 = latlng2[0] * rad,
            sinDLat = Math.sin((latlng2[0] - latlng1[0]) * rad / 2),
            sinDLon = Math.sin((latlng2[1] - latlng1[1]) * rad / 2),
            a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon,
            c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return this.R * c;
    },
    /**
     * - 使用格林公式及球面积分直接计算球面多边形的面积
     * - calculate the area of a spherical polygon using the spherical excess method
     * @see http://home.ustc.edu.cn/~liujunyan/blog/Area-and-center-of-spherical-polygon/
     * @param points - 可以为点类型数组、LineString 类型或者二维数组（需要为经纬度坐标系下）
     * @param unit - 单位（默认为千米）
     * @returns {number} - 面积
     */
    area(points: [number, number][]) : number{
        const RADIUS = this.R;
        // 首先统一为二维数组
        let coordinates = points.slice();

        // 判断数组长度
        if (coordinates.length < 3) {
            return 0;
        }

        // 计算球面多边形的面积
        let area = 0;
        let len = coordinates.length;
        let radiusArr = [];


        // 将经纬度转换为弧度 不使用 forEach 是因为需要将经纬度转换为弧度后再计算
        for (let i = 0; i < len; i++) {
            radiusArr.push([] as number[]);
            for (let j = 0; j < 2; j++) {
                let tmp = coordinates[i][j] * D2R;
                radiusArr[i].push(tmp);
            }
        }

        for (let i = 0; i < len; i++) {
            let j = (i + 1) % len;
            let k = (i + 2) % len;
            area += (radiusArr[i][0] - radiusArr[k][0]) * Math.sin(radiusArr[j][1]);
        }

        area = (area * RADIUS * RADIUS) / 2;

        return Math.abs(area);
    }
}

