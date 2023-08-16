/**
 * @module distance
 * @description
 * - Returns the distance between two points.
 * - 距离模块，返回两点之间的距离
 * @see https://en.wikipedia.org/wiki/Haversine_formula
 */

// Path: src\packages\Distance.ts
import { degreesToRadians, radiansToLength} from "./constants/Units.ts"

import { Point } from "./Geometry.ts"
import { Units } from "./constants/Units.ts"

/**
 * @description
 * - Returns the distance between two points.
 * - 距离模块，返回两点之间的距离（ haversine 公式）
 * @param from 点类型或者经纬度数组
 * @param to 点类型或者经纬度数组
 * @param unit 单位
 * @returns {number}
 */
export function haversine(from: Point | [lon1 : number ,lat1 : number] ,to: Point | [lon2 : number ,lat2 : number] ,unit: Units = "kilometers"): number {
    // 处理输入参数
    const coordinates1 = Array.isArray(from) ? from : from.to2DArray();
    const coordinates2 = Array.isArray(to) ? to : to.to2DArray();
    // 经纬度转弧度
    coordinates1.map((item, index) => {
        coordinates1[index] = degreesToRadians(item);
    });
    coordinates2.map((item, index) => {
        coordinates2[index] = degreesToRadians(item);
    });
    // 计算距离
    const dLat = coordinates2[1] - coordinates1[1];
    const dLon = coordinates2[0] - coordinates1[0];
    const rlat1 = coordinates1[1];
    const rlat2 = coordinates2[1];
    // haversine公式
    const a = 2 * Math.asin(
        Math.sqrt(
            Math.pow(Math.sin(dLat / 2), 2) +
            Math.pow(Math.sin(dLon / 2), 2) *
            Math.cos(rlat1) * Math.cos(rlat2)
        )
    );
    return radiansToLength(a, unit); // 2886.4430836583665
}