/**
 * - Computational geometry utilities
 * - 计算几何工具
 */

// 平面 计算几何 部分
// 说明： - 考虑到通用性，计算几何部分都基于数组，而不是基于类。
// - 并且提供向量计算支持。
// - 三维方法会标注.
// double cross(Point a,Point b)
// {
//  return a.x * b.y - b.x * a.y;
// }

import { orient2d } from "robust-predicates";
import { MBR } from "./Geometry";
import { convertToMercator, convertToWgs84 } from "./Referencing";
/* - Returns 1 if three points make a counter-clockwise turn
* - 逆时针返回 1
* - Returns -1 if three points make a clockwise turn
* - 顺时针返回 -1
* - Returns 0 if three points are collinear
* - 共线返回 0
*/

/**
 * 二维向量叉积
 * @param a - 二维向量(x1,y1)
 * @param b - 二维向量(x2,y2)
 * @returns {number} - 有向面积（有正负）
 */
export function cross(a: [number,number], b: [number,number]): number {
  return a[0] * b[1] - b[0] * a[1];
} 

/**
 * 二维向量点积 a 在 b 上的投影长度
 * @param a - 二维向量(x1,y1)
 * @param b - 二维向量(x2,y2)
 * @returns 
 */
export function dot(a: [number,number], b: [number,number]): number {
    return a[0] * b[0] + a[1] * b[1];
}


/**
 * （默认求交）内含投影的线段求交函数（计算开销大）
 * @param p1 - 二维向量(x1,y1) 默认认为`经纬度坐标`
 * @param p2 - 二维向量(x2,y2) 默认认为`经纬度坐标`
 * @param p3 - 二维向量(x3,y3) 默认认为`经纬度坐标`
 * @param p4 - 二维向量(x4,y4) 默认认为`经纬度坐标`
 * @param projectionFrom - 投影函数 （在求交之前对输入点投影） 默认为 convertToMercator
 * @param projectionTo - 投影函数 (在求交之后对输出点投影) 默认为 convertToWgs84
 * @returns {[number,number] | null} - 交点 或 null
 */
export function intersection(
    p1: [number,number], // 第一条线段的起点 
    p2: [number,number], // 第一条线段的终点
    p3: [number,number], // 第二条线段的起点
    p4: [number,number], // 第二条线段的终点
    projectionFrom = convertToMercator, // 投影函数 （在求交之前对输入点投影）
    projectionTo  = convertToWgs84, // 投影函数 (在求交之后对输出点投影)
): [number,number] {

    // 若有投影函数，则对输入点进行投影
    if (projectionFrom) {
        console.log("投影");
        console.log(p1);
        p1 = projectionFrom(p1);
        p2 = projectionFrom(p2);
        p3 = projectionFrom(p3);
        p4 = projectionFrom(p4);
    }


    // 首先计算两条线段的向量
    let v1 = [p2[0] - p1[0], p2[1] - p1[1]];
    let v2 = [p4[0] - p3[0], p4[1] - p3[1]];
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

    // // 如果交点不在两条线段上，返回 null
    // if (t1 < 0 || t1 > 1 || t2 < 0 || t2 > 1) {
    //     console.log("交点不在两条线段上");
    //     return null;
    // }

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
 * @returns {boolean} - true if the point is outside of the MBR
 * - 如果点在 MBR 外，返回 true
 */
export function PointOutsideMBR(point: [number,number], mbr: MBR): boolean {
    let minx = mbr[0];
    let miny = mbr[1];
    let maxx = mbr[2];
    let maxy = mbr[3];

    if (point[0] < minx || point[0] > maxx || point[1] < miny || point[1] > maxy) {
        return true;
    }

    return false;
}

/**
 * 使用 MBR 裁剪多边形
 * @param polygon - 多边形 [[x1,y1],[x2,y2],...
 * @param mbr - MBR [minx,miny,maxx,maxy]
 * @returns {Array | null} - 裁剪后的多边形 或 null （若多边形与 MBR 相离）
 */
export function cutPolygonByMBR(polygon: [number,number][],mbr: MBR): [number,number][] | null {

}

// TODO: 实现 Sutherland-Hodgman 算法计算多边形与多边形的交集
/**
 * 使用 Sutherland-Hodgman 算法计算多边形与多边形的交集
 * @param clipPolygon 
 * @param subjectPolygon 
 */
export function intersectionPolygon(clipPolygon: [number,number][], subjectPolygon: [number,number][]): [number,number][] {
    let resPolygon: [number,number][] = subjectPolygon; // 交集多边形
    let clipEdges: [number,number][][] = []; // 裁剪多边形的边

    // 计算裁剪多边形的边
    iterPolygonEdge(clipPolygon, (p1, p2) => {
        clipEdges.push([p1, p2]);
    });


    clipEdges.forEach((edge) => {
        // This process is repeated iteratively for each clip polygon side, using the output list from one stage as the input list for the next. 
        // The output list starts as the subject polygon vertices.
        let inputList = resPolygon;
        let outputList: [number,number][] = [];

        // For each clip polygon side, the following steps are performed:
        // 1. Starting with vertex i, check to see if it lies inside or outside the clip edge.
        // 2. If it lies outside, add it to the output list.
        // 3. If it lies inside, add it to the output list only if the previous vertex (i − 1) lies outside.
        // 4. Increment i.
        // 5. Repeat until all vertices have been processed.
        for (let i = 0; i < inputList.length; i++) {
            let p1 = inputList[i];
            let p2 = inputList[(i + 1) % inputList.length];
            let inside = PointInsidePolygon(p1, edge);
            let prevInside = PointInsidePolygon(p2, edge);
            if (inside) {
                if (!prevInside) {
                    outputList.push(p1);
                }
                outputList.push(p2);
            } else {
                if (prevInside) {
                    outputList.push(intersection(p1, p2, edge[0], edge[1]));
                }
            }
        }

        // The output list from the last clip polygon side processed becomes the input list for the next clip polygon side.
        resPolygon = outputList;
    });

    return resPolygon;
}



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
