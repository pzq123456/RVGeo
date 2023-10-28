/**
 * @description
 * - 量测模块 暂时包括距离量测及面积量测
 * - Measurement module currently includes distance measurement and area measurement
 * @see https://en.wikipedia.org/wiki/Haversine_formula
 */

// Path: src\packages\Distance.ts
import { AreaUnits, areaFactors, degreesToRadians, radiansToLength} from "./constants/Units.ts"

import { Point, LineString } from "./Geometry.ts"
import { Units } from "./constants/Units.ts"
import { sphere } from "./constants/Ellipsoid.ts";

const RADIUS = sphere.a; // 地球半径

/**
 * - Returns the distance between two points.
 * - 计算两点之间的距离（ haversine 公式）
 * @param from 点类型或者经纬度数组
 * @param to 点类型或者经纬度数组
 * @param unit 单位（默认为千米）
 * @returns {number} - 距离
 */
export function haversine(from: Point | [lon1 : number ,lat1 : number] ,to: Point | [lon2 : number ,lat2 : number] ,unit: Units = "kilometers"): number {
    // 若输入是数组则复制一份
    if (Array.isArray(from)) {
        from = [...from];
    }
    if (Array.isArray(to)) {
        to = [...to];
    }

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

/**
 * - 使用 Shoelace Theorem 求多边形面积
 * - calculate the area of a polygon using the Shoelace Theorem
 * @param points - 可以为点类型数组、LineString 类型或者二维数组（需要为墨卡托平面坐标系下）
 * - 需确保点按照顺时针或者逆时针排列 
 * - need to ensure that the points are arranged clockwise or counterclockwise
 * @param unit - 单位（默认为千米）
 * @returns 
 */
export function PlanePolygonArea(
    points: Point[] | LineString | number[][] ,
    unit: AreaUnits = "kilometers"
) : number{
    // 处理输入参数
    // 首先统一为二维数组
    let coordinates = LineString.isLineString(points) ? points.toXYArray() : points as number[][] | Point[];
    // 判断数组长度
    if (coordinates.length < 3) {
        return 0;
    }
    // 判断元素类型 若为 Point 则转换为二维数组
    if (Point.isPoint(coordinates[0])) {
        // 声明类型 以便调用 Point 类型的方法
        coordinates = coordinates as Point[];
        coordinates.map((item, index) => {
            coordinates[index] = item.toXY();
        });
    }
    // 声明为二维数组
    coordinates = coordinates as number[][];
    // 用 Shoelace Theorem 计算面积
    let area = 0;
    let j = coordinates.length - 1;
    for (let i = 0; i < coordinates.length; i++) {
        area += (coordinates[j][0] + coordinates[i][0]) * (coordinates[j][1] - coordinates[i][1]);
        j = i;
    }
    // 转换为指定单位
    area = area * areaFactors[unit] / 2;
    return Math.abs(area);
}

/**
 * - 使用格林公式及球面积分直接计算球面多边形的面积
 * - calculate the area of a spherical polygon using the spherical excess method
 * @see http://home.ustc.edu.cn/~liujunyan/blog/Area-and-center-of-spherical-polygon/
 * @param points - 可以为点类型数组、LineString 类型或者二维数组（需要为经纬度坐标系下）
 * @param unit - 单位（默认为千米）
 * @returns {number} - 面积
 */
export function SpherePolygonArea(
    points: Point[] | LineString | number[][] ,
    unit: AreaUnits = "kilometers"
) : number{
    // 首先统一为二维数组
    let coordinates = LineString.isLineString(points) ? points.toArray() : points as number[][] | Point[];
    // 判断数组长度
    if (coordinates.length < 3) {
        return 0;
    }
    // 判断元素类型 若为 Point 则转换为二维数组
    if (Point.isPoint(coordinates[0])) {
        // 声明类型 以便调用 Point 类型的方法
        coordinates = coordinates as Point[];
        coordinates.map((item, index) => {
            coordinates[index] = item.to2DArray();
        });
    }
    coordinates = coordinates as number[][];
    // 计算球面多边形的面积
    let area = 0;
    let len = coordinates.length;
    let radiusArr = [];

    // 将经纬度转换为弧度 不使用 forEach 是因为需要将经纬度转换为弧度后再计算
    for (let i = 0; i < len; i++) {
        radiusArr.push([]);
        for (let j = 0; j < 2; j++) {
            let tmp = degreesToRadians(coordinates[i][j]) as never;
            radiusArr[i].push(tmp);
        }
    }

    for (let i = 0; i < len; i++) {
        let j = (i + 1) % len;
        let k = (i + 2) % len;
        area += (radiusArr[i][0] - radiusArr[k][0]) * Math.sin(radiusArr[j][1]);
    }

    area = (area * RADIUS * RADIUS) / 2;
    // 转换为指定单位
    area = area * areaFactors[unit];
    return Math.abs(area);
}
