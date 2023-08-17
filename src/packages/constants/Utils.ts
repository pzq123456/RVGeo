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

/**
The pseudocode below uses a function ccw: ccw > 0 if three points make a counter-clockwise turn, clockwise if ccw < 0, and collinear if ccw = 0. 
    (In real applications, if the coordinates are arbitrary real numbers, 
        the function requires exact comparison of floating-point numbers, 
        and one has to beware of numeric singularities for "nearly" collinear points.)
 */
export function ccw(
        p1: Point | [lon1: number, lat1: number],
        p2: Point | [lon2: number, lat2: number], 
        p3: Point | [lon3: number, lat3: number]
    ): number {
    const [x1, y1] = Array.isArray(p1) ? p1 : p1.to2DArray();
    const [x2, y2] = Array.isArray(p2) ? p2 : p2.to2DArray();
    const [x3, y3] = Array.isArray(p3) ? p3 : p3.to2DArray();    
}

/** 
    let points be the list of points
    let stack = empty_stack()

    find the lowest y-coordinate and leftmost point, called P0
    sort points by polar angle with P0, if several points have the same polar angle then only keep the farthest

    for point in points:
        # pop the last point from the stack if we turn clockwise to reach this point
        while count stack > 1 and ccw(next_to_top(stack), top(stack), point) <= 0:
            pop stack
        push point to stack
    end
*/