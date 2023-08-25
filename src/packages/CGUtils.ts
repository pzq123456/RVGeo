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

export function intersection(
    p1: [number,number], // 第一条线段的起点
    p2: [number,number], // 第一条线段的终点
    p3: [number,number], // 第二条线段的起点
    p4: [number,number] // 第二条线段的终点
): [number,number] {
    // 首先计算两条线段的向量
    let v1 = [p2[0] - p1[0], p2[1] - p1[1]];
    let v2 = [p4[0] - p3[0], p4[1] - p3[1]];
    // 计算向量叉积
    let det = cross(v1, v2);
    // 如果叉积为 0，说明两条线段平行或共线
    if (det === 0) {
        return null;
    }
    // 计算交点
    let t1 = cross([p3[0] - p1[0], p3[1] - p1[1]], v2) / det;
    let t2 = cross([p3[0] - p1[0], p3[1] - p1[1]], v1) / det;

    // 如果交点不在两条线段上，返回 null
    if (t1 < 0 || t1 > 1 || t2 < 0 || t2 > 1) {
        return null;
    }
    
    // 返回交点
    return [p1[0] + v1[0] * t1, p1[1] + v1[1] * t1];
}

