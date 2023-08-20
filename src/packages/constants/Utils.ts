/**
 * 一些工具方法 用于辅助计算
 */
import { Point } from '../Geometry.ts'
import { orient2d, incircle } from 'robust-predicates';

/**
 * - Round number to precision
 * - 将数字四舍五入到指定精度
 * @param {number} num Number
 * @param {number} [precision=0] Precision
 * @returns {number} rounded number
 * @example
 * round(120.4321)
 * //=120
 *
 * round(120.4321, 2)
 * //=120.43
 */
export function round(num: number, precision : number = 0): number {
    if (precision && !(precision >= 0)) {
        throw new Error("precision must be a positive number");
    }
    const multiplier = Math.pow(10, precision || 0); // 取10的precision次方
    return Math.round(num * multiplier) / multiplier; // 乘以10的precision次方，四舍五入，再除以10的precision次方
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
