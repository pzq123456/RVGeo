import { LineString, Point } from '..';

export declare function sphericalArea(points: [number, number][], RADIUS?: number): number;
/**
 * - 使用 Shoelace Theorem 求多边形面积
 * - calculate the area of a polygon using the Shoelace Theorem
 * @param points - 可以为点类型数组、LineString 类型或者二维数组（需要为墨卡托平面坐标系下）
 * - 需确保点按照顺时针或者逆时针排列
 * - need to ensure that the points are arranged clockwise or counterclockwise
 * @returns
 */
export declare function planePolygonArea(points: Point[] | LineString | [number, number][], radius?: number): number;
/**
 * 使用 haversine 公式计算球面两点之间的距离
 * @param latlng1
 * @param latlng2
 * @param {number} R - 球体半径
 * @returns
 */
export declare function haversine(latlng1: [number, number], latlng2: [number, number], R?: number): number;
export declare function bearing(latlng1: [number, number], latlng2: [number, number]): number;
export declare function midpoint(latlng1: [number, number], latlng2: [number, number]): [number, number];
/**
 * An intermediate point at any fraction along the great circle path between two points
 * @param latlng1
 * @param latlng2
 * @param fraction - f is fraction along great circle route (f=0 is point 1, f=1 is point 2)
 * @returns
 */
export declare function intermediatePoint(latlng1: [number, number], latlng2: [number, number], fraction: number): [number, number];
/**
 * 求解两条球面线段的交点
 * - Given two lines on a sphere, this will return their intersection point.
 * @param latlng11
 * @param latlng12
 * @param latlng21
 * @param latlng22
 * @returns - 返回弧度制的交点坐标[lat, lon]
 * @example
 * intersection([0, 0], [0, 90], [0, 45], [90, 45]); // [1.5707963267948966, 0]
 * // you need to convert the result to degrees if you want to use it in degrees
 * intersection([0, 0], [0, 90], [0, 45], [90, 45]).map(x => x * 180 / Math.PI); // [90, 0]
 */
export declare function sphereIntersection(latlng11: [number, number], latlng12: [number, number], latlng21: [number, number], latlng22: [number, number]): [number, number];
/**
 * Given a start point, initial bearing, and distance,
 * - this will calculate the destina­tion point and final bearing travelling along a (shortest distance) great circle arc.
 * @param latlng1
 * @param brng
 * @param distance
 * @returns
 */
export declare function destination(latlng1: [number, number], brng: number, distance: number): [number, number];
/**
 * 投影函数
 */
type projectionFun = (latlng: [number, number]) => [number, number];
/**
 * 也可以使用该函数计算两条线段的交点
 * - 现将经纬度坐标投影到平面坐标系下，然后计算交点，最后将交点投影回经纬度坐标系
 * - lonlats -- (projectionFrom) --> XYs -- (planeIntersection) --> XY -- (projectionTo) --> lonlat
 * @param p1 - 二维向量(x1,y1) 默认认为`经纬度坐标`
 * @param p2 - 二维向量(x2,y2) 默认认为`经纬度坐标`
 * @param p3 - 二维向量(x3,y3) 默认认为`经纬度坐标`
 * @param p4 - 二维向量(x4,y4) 默认认为`经纬度坐标`
 * @param projectionFrom - 投影函数 （在求交之前对输入点投影）
 * @param projectionTo - 投影函数 (在求交之后对输出点投影)
 * @param isInfine - 是否视作无穷线段 默认为 false 有限线段
 * @returns {[number,number] | null} - 交点 或 null
 */
export declare function planeIntersection(p1: [number, number], // 第一条线段的起点 
p2: [number, number], // 第一条线段的终点
p3: [number, number], // 第二条线段的起点
p4: [number, number], // 第二条线段的终点
projectionFrom: projectionFun, // 投影函数 （在求交之前对输入点投影）
projectionTo: projectionFun, // 投影函数 (在求交之后对输出点投影)
isInfine?: boolean): [number, number] | null;
export {};
