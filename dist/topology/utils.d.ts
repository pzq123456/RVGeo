import { Point } from '../geometry/Point';
import { MBR } from '../geometry/MBR';

/**
 * （默认线段求交）内含投影的线段求交函数（计算开销大）
 * @param p1 - 二维向量(x1,y1) 默认认为`经纬度坐标`
 * @param p2 - 二维向量(x2,y2) 默认认为`经纬度坐标`
 * @param p3 - 二维向量(x3,y3) 默认认为`经纬度坐标`
 * @param p4 - 二维向量(x4,y4) 默认认为`经纬度坐标`
 * @param projectionFrom - 投影函数 （在求交之前对输入点投影） 默认为 convertToMercator
 * @param projectionTo - 投影函数 (在求交之后对输出点投影) 默认为 convertToWgs84
 * @param isInfine - 是否视作无穷线段 默认为 false 有限线段
 * @returns {[number,number] | null} - 交点 或 null
 */
export declare function intersection(p1: [number, number], // 第一条线段的起点 
p2: [number, number], // 第一条线段的终点
p3: [number, number], // 第二条线段的起点
p4: [number, number], // 第二条线段的终点
projectionFrom?: (latlng: [number, number]) => [number, number], // 投影函数 （在求交之前对输入点投影）
projectionTo?: (point: [number, number]) => [number, number], // 投影函数 (在求交之后对输出点投影)
isInfine?: boolean): [number, number] | null;
/**
 * 判断点是否在 MBR 外（平面与经纬度坐标通用，多边形边界算作在内）
 * determine if a point is outside of a MBR (polygon boundary is considered inside)
 * @param point - [x,y]
 * @param mbr - [minx,miny,maxx,maxy]
 * @param isPlane - 是否需要转换成平面坐标系再进行判断
 * @returns {boolean} - true if the point is outside of the MBR
 * - 如果点在 MBR 外，返回 true
 */
export declare function PointOutsideMBR(point: [number, number], mbr: MBR, isPlane?: boolean): boolean;
/**
 * 使用 MBR 裁剪多边形
 * @param polygon - 多边形 [[x1,y1],[x2,y2],...
 * @param mbr - MBR [minx,miny,maxx,maxy]
 * @returns {Array | null} - 裁剪后的多边形 或 null （若多边形与 MBR 相离）
 */
export declare function cutPolygonByMBR(polygon: [number, number][], mbr: MBR): [number, number][] | null;
/**
 * 使用 Sutherland-Hodgman 算法计算多边形与多边形的交集
 * @param clipPolygon
 * @param subjectPolygon
 */
export declare function intersectionPolygon(clipPolygon: [number, number][], subjectPolygon: [number, number][]): [number, number][];
/**
 * 判断点是否在简单多边形内部（平面与经纬度坐标通用，多边形边界算作在内）
 * @param point - [lon,lat]
 * @param polygon - [[lon,lat],[lon,lat],...] （不含空洞）
 * @returns - true if the point is inside the polygon
 */
export declare function PointInsidePolygon(point: [number, number], polygon: [number, number][]): boolean;
/**
 * 计算多边形的 MBR
 * @param clipPolygon
 * @returns {MBR}
 */
export declare function calculateMBR(clipPolygon: [number, number][]): MBR;
/**
 * 迭代访问多边形的边（不重复访问）
 * @param polygon - 多边形 [[x1,y1],[x2,y2],...
 * @param callback - 回调函数
 */
export declare function iterPolygonEdge(polygon: [number, number][], callback: (p1: [number, number], p2: [number, number]) => void): void;
/**
 * 返回多边形中 输入索引的前一个点的索引 多边形闭合并按照逆时针方向排列
 * @param index - 索引
 * @param polygon - 多边形 [[x1,y1],[x2,y2],...
 */
export declare function prePointInPolygon(index: number, polygonLength: number): number;
/**
 * （前提：逆时针多边形的边）判断点是否在当前边的内部(也就是边前进方向的左侧)
 * @param point - 点 [x,y]
 * @param p1 - 边的起点 [x,y]
 * @param p2 - 边的终点 [x,y]
 * @returns
 */
export declare function pointInEdge(point: [number, number], p1: [number, number], p2: [number, number]): boolean;
/**
 * - Adjust longitude to [-180, 180]
 * - 将超过 360 的经度调整为[-180, 180]
 * @param lon - Longitude
 * @returns {number} Adjusted longitude
 */
export declare function adjust_lon(lon: number): number;
/**
 * - Returns the sign of the input, or zero
 * - 返回输入的符号，或零
 * @param {number} x input
 * @returns {number} -1|0|1 output
 */
export declare function sign(x: number): -1 | 0 | 1;
/**
 * Counter-clockwise (not robust version)
 * ccw 算法的非鲁棒版本
 * - Returns 1 if three points make a counter-clockwise turn
 * - 逆时针返回 1
 * - Returns -1 if three points make a clockwise turn
 * - 顺时针返回 -1
 * - Returns 0 if three points are collinear
 * - 共线返回 0
 * @param p1 - 可以是点类型，也可以是平面坐标数组（墨卡托）
 * @param p2 - 可以是点类型，也可以是平面坐标数组（墨卡托）
 * @param p3 - 可以是点类型，也可以是平面坐标数组（墨卡托）
 * @returns {number} - 1 | 0 | -1
 */
export declare function ccw(p1: Point | [X1: number, Y1: number], p2: Point | [X2: number, Y2: number], p3: Point | [X3: number, Y3: number]): number;
/**
 * - Returns the angle between two points
 * - 返回两点之间的夹角
 * @param p1 - Point 1
 * @param p2 - Point 2
 * @returns
 */
export declare function getAngle(p1: Point | [X1: number, Y1: number], p2: Point | [X2: number, Y2: number]): number;
/**
 * robust version of ccw 封装了 robust-predicates 库的 orient2d 函数
 * - `Note:` unlike J. Shewchuk's original code, `all the functions in this library assume y axis is oriented downwards ↓`, so the semantics are different.
 * - `注意:` 与 J. Shewchuk 的原始代码不同，`本库中的所有函数都假设 y 轴向下 ↓`，因此语义不同。刚好与 ccw 相反。
 * - Returns 1 if three points make a counter-clockwise turn
 * - 逆时针返回 1
 * - Returns -1 if three points make a clockwise turn
 * - 顺时针返回 -1
 * - Returns 0 if three points are collinear
 * - 共线返回 0
 * @param p1 - 可以是点类型，也可以是平面坐标数组（墨卡托）
 * @param p2 - 可以是点类型，也可以是平面坐标数组（墨卡托）
 * @param p3 - 可以是点类型，也可以是平面坐标数组（墨卡托）
 * @param isReverse - 是否反转(默认为 true 这样就会保持与 ccw 一致)
 * @returns {number} - 1 | 0 | -1
 */
export declare function ccwRobust(p1: Point | [X1: number, Y1: number], p2: Point | [X2: number, Y2: number], p3: Point | [X3: number, Y3: number], isReverse?: boolean): number;
export declare function inCircleRobust(p1: Point | [X1: number, Y1: number], p2: Point | [X2: number, Y2: number], p3: Point | [X3: number, Y3: number], p4: Point | [X4: number, Y4: number]): number;
/**
 * 快速计算最后一点与前三点组成的圆的关系 calculate the relative position of the last point to the circle formed by the first three points
 * - Returns 1 if point d is outside the circle passing through a, b, and c
 * - 返回 1 如果点 d 在通过 a、b 和 c 的圆外
 * - Returns -1 if point d is inside the circle
 * - 返回 -1 如果点 d 在圆内
 * - Returns 0 if the four points are cocircular
 * - 返回 0 如果四个点共圆
 * @param p1
 * @param p2
 * @param p3
 * @param p4
 * @returns {1|-1|0}
 */
export declare function inCircle(p1: Point | [X1: number, Y1: number], p2: Point | [X2: number, Y2: number], p3: Point | [X3: number, Y3: number], p4: Point | [X4: number, Y4: number]): 1 | -1 | 0;
