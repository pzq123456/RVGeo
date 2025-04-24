import {SphericalMercator} from '../geo/projection';
import { MBR, mbrToPolygon } from '../geometry/MBR';
import { Point } from '../geometry/Point';
import { cross } from '../math/vector';
import { orient2d, incircle } from 'robust-predicates';

const convertToMercator = SphericalMercator.project;
const convertToWgs84 = SphericalMercator.unproject;

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
export function intersection(
    p1: [number,number], // 第一条线段的起点 
    p2: [number,number], // 第一条线段的终点
    p3: [number,number], // 第二条线段的起点
    p4: [number,number], // 第二条线段的终点
    projectionFrom = SphericalMercator.project, // 投影函数 （在求交之前对输入点投影）
    projectionTo  = SphericalMercator.unproject, // 投影函数 (在求交之后对输出点投影)
    isInfine = false, // 是否视作无穷线段 默认为 false 有限线段
): [number,number] | null {

    // 若有投影函数，则对输入点进行投影
    if (projectionFrom) {
        p1 = projectionFrom(p1);
        p2 = projectionFrom(p2);
        p3 = projectionFrom(p3);
        p4 = projectionFrom(p4);
    }


    // 首先计算两条线段的向量
    let v1 = [p2[0] - p1[0], p2[1] - p1[1]] as [number,number];
    let v2 = [p4[0] - p3[0], p4[1] - p3[1]] as [number,number];
    // 将 v1 声明为 []
    // 计算向量叉积
    let det = cross(v1, v2);

    // 如果叉积为 0，说明两条线段平行或共线
    if (det === 0) {
        console.log("两条线段平行或共线");
        return null;
    }
    // 计算交点
    let t1 = cross([p3[0] - p1[0], p3[1] - p1[1]], v2) / det;
    let t2 = cross([p3[0] - p1[0], p3[1] - p1[1]], v1) / det;

    if(!isInfine) {
        // 如果交点不在两条线段上，返回 null
        if (t1 < 0 || t1 > 1 || t2 < 0 || t2 > 1) {
            console.log("交点不在两条线段上");
            return null;
        }
    }

    // 若有投影函数，则对输出点进行投影
    if (projectionTo) {
        return projectionTo([p1[0] + v1[0] * t1, p1[1] + v1[1] * t1]);
    }
    
    // 返回交点
    return [p1[0] + v1[0] * t1, p1[1] + v1[1] * t1];
}

/**
 * 判断点是否在 MBR 外（平面与经纬度坐标通用，多边形边界算作在内）
 * determine if a point is outside of a MBR (polygon boundary is considered inside)
 * @param point - [x,y]
 * @param mbr - [minx,miny,maxx,maxy]
 * @param isPlane - 是否需要转换成平面坐标系再进行判断
 * @returns {boolean} - true if the point is outside of the MBR
 * - 如果点在 MBR 外，返回 true
 */
export function PointOutsideMBR(point: [number,number], mbr: MBR, isPlane=false): boolean {
    if(isPlane){
        // convertToMercators()
        let merPoint = convertToMercator(point);
        let minx = mbr[0];
        let miny = mbr[1];
        let maxx = mbr[2];
        let maxy = mbr[3];

        [minx,miny] = convertToMercator([minx,miny]);
        [maxx,maxy] = convertToMercator([maxx,maxy]);

        if (merPoint[0] < minx || merPoint[0] > maxx || merPoint[1] < miny || merPoint[1] > maxy) {
            return true;
        }
        return false;
    }else{
        let minx = mbr[0];
        let miny = mbr[1];
        let maxx = mbr[2];
        let maxy = mbr[3];
    
        if (point[0] < minx || point[0] > maxx || point[1] < miny || point[1] > maxy) {
            return true;
        }
        return false;
    }
}

/**
 * 使用 MBR 裁剪多边形
 * @param polygon - 多边形 [[x1,y1],[x2,y2],...
 * @param mbr - MBR [minx,miny,maxx,maxy]
 * @returns {Array | null} - 裁剪后的多边形 或 null （若多边形与 MBR 相离）
 */
export function cutPolygonByMBR(polygon: [number,number][], mbr: MBR): [number,number][] | null {
    // console.log(polygon);
    return intersectionPolygon(polygon, mbrToPolygon(mbr));
}

/**
 * 使用 Sutherland-Hodgman 算法计算多边形与多边形的交集
 * @param clipPolygon - 裁剪多边形
 * @param subjectPolygon - 被裁剪多边形
 * @returns 两个多边形的交集
 */
export function intersectionPolygon(
    clipPolygon: [number, number][],
    subjectPolygon: [number, number][]
): [number, number][] {
    if (clipPolygon.length < 3 || subjectPolygon.length < 3) {
        return []; // 无法构成多边形
    }

    let cp1 = clipPolygon[clipPolygon.length - 1]; // 裁剪多边形的最后一个点
    let outputList = [...subjectPolygon]; // 深拷贝被裁剪多边形，避免修改原始数据

    for (let i = 0; i < clipPolygon.length; i++) { // 改用 for 循环
        const cp2 = clipPolygon[i]; // 裁剪多边形的当前点
        const inputList = outputList;
        outputList = [];
        let s = inputList[inputList.length - 1]; // 被裁剪多边形的最后一个点

        for (let j = 0; j < inputList.length; j++) { // 改用 for 循环
            const e = inputList[j]; // 被裁剪多边形的当前点

            if (pointInEdge(e, cp1, cp2)) {
                if (!pointInEdge(s, cp1, cp2)) {
                    const intersectionPoint = intersection(
                        s, e, cp1, cp2,
                        convertToMercator, convertToWgs84, true
                    );
                    if (intersectionPoint) {
                        outputList.push(intersectionPoint as [number, number]);
                    }
                }
                outputList.push(e);
            } else if (pointInEdge(s, cp1, cp2)) {
                const intersectionPoint = intersection(
                    s, e, cp1, cp2,
                    convertToMercator, convertToWgs84, true
                );
                if (intersectionPoint) {
                    outputList.push(intersectionPoint as [number, number]);
                }
            }
            s = e;
        }
        cp1 = cp2;
    }

    return outputList.length >= 3 ? outputList : []; // 确保返回的多边形至少 3 个点
}

/**
 * 判断点是否在简单多边形内部（平面与经纬度坐标通用，多边形边界算作在内）
 * @param point - [lon,lat]
 * @param polygon - [[lon,lat],[lon,lat],...] （不含空洞）
 * @returns - true if the point is inside the polygon
 */
export function PointInsidePolygon(point: [number,number], polygon: [number,number][]): boolean {
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        if (((polygon[i][1] > point[1]) != (polygon[j][1] > point[1])) &&
            (point[0] < (polygon[j][0] - polygon[i][0]) * (point[1] - polygon[i][1]) / (polygon[j][1] - polygon[i][1]) + polygon[i][0])) {
            inside = !inside;
        }
    }
    return inside;
}

/**
 * 计算多边形的 MBR
 * @param clipPolygon
 * @returns {MBR}
 */
export function calculateMBR(clipPolygon: [number,number][]): MBR {
    let minx = Infinity;
    let miny = Infinity;
    let maxx = -Infinity;
    let maxy = -Infinity;
    for (let i = 0; i < clipPolygon.length; i++) {
        let point = clipPolygon[i];
        if (point[0] < minx) minx = point[0];
        if (point[0] > maxx) maxx = point[0];
        if (point[1] < miny) miny = point[1];
        if (point[1] > maxy) maxy = point[1];
    }
    return [minx, miny, maxx, maxy];
}

/**
 * 迭代访问多边形的边（不重复访问）
 * @param polygon - 多边形 [[x1,y1],[x2,y2],...
 * @param callback - 回调函数
 */
export function iterPolygonEdge(polygon: [number,number][], callback: (p1: [number,number], p2: [number,number]) => void): void {
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        callback(polygon[i], polygon[j]);
    }
}

/**
 * 返回多边形中 输入索引的前一个点的索引 多边形闭合并按照逆时针方向排列
 * @param index - 索引
 * @param polygon - 多边形 [[x1,y1],[x2,y2],...
 */
export function prePointInPolygon(
    index: number,
    polygonLength: number,
){
    /**
     * polygon: [0,1,2,3,4,5,6,7]
     * input: 0
     * output: 7
     * input: 1
     * output: 0
     */
    return (index - 1 + polygonLength) % polygonLength;
}

/**
 * （前提：逆时针多边形的边）判断点是否在当前边的内部(也就是边前进方向的左侧)
 * @param point - 点 [x,y]
 * @param p1 - 边的起点 [x,y]
 * @param p2 - 边的终点 [x,y]
 * @returns 
 */
export function pointInEdge(point: [number,number], p1: [number,number], p2: [number,number]): boolean {
    // ccw(p1, p2, point) > 0;
    return ccw(p1, p2, point) > 0;
}

// compensate longitudes passing the 180th meridian
/**
 * - Adjust longitude to [-180, 180]
 * - 将超过 360 的经度调整为[-180, 180]
 * @param lon - Longitude
 * @returns {number} Adjusted longitude
 */
export function adjust_lon(lon: number): number {
    return Math.abs(lon) <= 180 ? lon : lon - sign(lon) * 360;
}

/**
 * - Returns the sign of the input, or zero
 * - 返回输入的符号，或零
 * @param {number} x input
 * @returns {number} -1|0|1 output
 */
export function sign(x: number) : -1 | 0 | 1 {
    return x < 0 ? -1 : x > 0 ? 1 : 0;
}

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
export function ccw (
        p1: Point | [X1: number, Y1: number],
        p2: Point | [X2: number, Y2: number], 
        p3: Point | [X3: number, Y3: number]
    ): number {
        p1 = Array.isArray(p1) ? p1 : p1.toXY();
        p2 = Array.isArray(p2) ? p2 : p2.toXY();
        p3 = Array.isArray(p3) ? p3 : p3.toXY();

        let a = p1[0], b = p1[1];
        let c = p2[0], d = p2[1];
        let e = p3[0], f = p3[1];

        let det = (c - a) * (f - b) - (d - b) * (e - a);
        det = sign(det);
        return det;
}

/**
 * - Returns the angle between two points
 * - 返回两点之间的夹角
 * @param p1 - Point 1
 * @param p2 - Point 2
 * @returns 
 */
export function getAngle(p1: Point | [X1:number,Y1:number], p2: Point| [X2:number,Y2:number]): number {
    // 首先转换为平面坐标
    let p1XY = Array.isArray(p1) ? p1 : p1.toXY();
    let p2XY = Array.isArray(p2) ? p2 : p2.toXY();
    // 计算夹角
    let angle = Math.atan2(p2XY[1] - p1XY[1], p2XY[0] - p1XY[0]);
    // 转换为角度
    angle = angle * 180 / Math.PI;
    // 转换为正角度
    if (angle < 0) {
        angle += 360;
    }
    return angle;
}

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
export function ccwRobust(
    p1: Point | [X1: number, Y1: number],
    p2: Point | [X2: number, Y2: number], 
    p3: Point | [X3: number, Y3: number],
    isReverse: boolean = true
): number {
    p1 = Array.isArray(p1) ? p1 : p1.toXY();
    p2 = Array.isArray(p2) ? p2 : p2.toXY();
    p3 = Array.isArray(p3) ? p3 : p3.toXY();

    let a = p1[0], b = p1[1];
    let c = p2[0], d = p2[1];
    let e = p3[0], f = p3[1];

    let det = orient2d(a,b,c,d,e,f);
    if (isReverse) {
        det = -det;
    }
    det = sign(det);
    return det;
}

/*
incircle(ax,ay, bx,by, cx,cy, dx,dy)
Returns a positive value if the point d lies outside the circle passing through a, b, and c.
Returns a negative value if it lies inside.
Returns zero if the four points are cocircular.
*/
export function inCircleRobust(
    p1: Point | [X1: number, Y1: number],
    p2: Point | [X2: number, Y2: number], 
    p3: Point | [X3: number, Y3: number],
    p4: Point | [X4: number, Y4: number],
){
    p1 = Array.isArray(p1) ? p1 : p1.toXY();
    p2 = Array.isArray(p2) ? p2 : p2.toXY();
    p3 = Array.isArray(p3) ? p3 : p3.toXY();
    p4 = Array.isArray(p4) ? p4 : p4.toXY();

    let a = p1[0], b = p1[1];
    let c = p2[0], d = p2[1];
    let e = p3[0], f = p3[1];
    let g = p4[0], h = p4[1];

    let det = incircle(a,b,c,d,e,f,g,h);
    det = sign(det);
    return det;
}

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
export function inCircle(
    p1: Point | [X1: number, Y1: number],
    p2: Point | [X2: number, Y2: number], 
    p3: Point | [X3: number, Y3: number],
    p4: Point | [X4: number, Y4: number],
    ) : 1 | -1 | 0 {
    p1 = Array.isArray(p1) ? p1 : p1.toXY();
    p2 = Array.isArray(p2) ? p2 : p2.toXY();
    p3 = Array.isArray(p3) ? p3 : p3.toXY();
    p4 = Array.isArray(p4) ? p4 : p4.toXY();

    let ax = p1[0], ay = p1[1];
    let bx = p2[0], by = p2[1];
    let cx = p3[0], cy = p3[1];
    let px = p4[0], py = p4[1];

    const dx = ax - px; 
    const dy = ay - py;
    const ex = bx - px;
    const ey = by - py;
    const fx = cx - px;
    const fy = cy - py;

    const ap = dx * dx + dy * dy;
    const bp = ex * ex + ey * ey;
    const cp = fx * fx + fy * fy;

    let det = dx * (ey * cp - bp * fy) -
           dy * (ex * cp - bp * fx) +
           ap * (ex * fy - ey * fx) ;
    
    return sign(det);
}