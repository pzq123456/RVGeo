/**
 * 一些工具方法 用于辅助计算
 */
import { Point } from '../Geometry.ts'
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
The pseudocode below uses a function ccw: 
- ccw > 0 if three points make a counter-clockwise turn 
- clockwise if ccw < 0 
- collinear if ccw = 0 
    (In real applications, if the coordinates are arbitrary real numbers, 
        the function requires exact comparison of floating-point numbers, 
        and one has to beware of numeric singularities for "nearly" collinear points.)
 */
/**
 * Counter-clockwise 
 * - Returns 1 if three points make a counter-clockwise turn,
 * - Returns -1 if three points make a clockwise turn,
 * - Returns 0 if three points are collinear
 * @param p1 - 可以是点类型，也可以是平面坐标数组（墨卡托） 
 * @param p2 - 可以是点类型，也可以是平面坐标数组（墨卡托）
 * @param p3 - 可以是点类型，也可以是平面坐标数组（墨卡托）
 * @returns {number} - 1|0|-1
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

        // private static int CCW(Point p1, Point p2, Point p3) {
        //     return (p1.x*p2.y+p2.x*p3.y+p3.x*p1.y)-(p1.y*p2.x+p2.y*p3.x+p3.y*p1.x) >0? 1:-1;
        // }    

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
