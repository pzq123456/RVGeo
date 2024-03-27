import { MBR, mbrToRectangle } from "./MBR";
/**
 * 平面图形：圆形
 */
export class Circle {
    x: number;
    y: number;
    r: number;
    rSquared: number;
    
    /**
     * 构造函数
     * @param x - 圆心 x 坐标 
     * @param y - 圆心 y 坐标
     * @param r - 半径
     */
    constructor(x: number, y: number, r: number) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.rSquared = this.r * this.r;
    }

    /**
     * 判断点是否在圆内
     * @param point - 点坐标
     * @param threshold - （默认为0）容差（用于修正计算误差）*建议根据实际情况手动调整
     * @returns {boolean} - true if the point is inside the circle
     */
    contains(point:[number,number], threshold: number = 1800000000): boolean {
        // make it more robust
        let x = point[0];
        let y = point[1];
        return Math.pow((x - this.x), 2) + Math.pow((y - this.y), 2) - this.rSquared <= threshold;
    }

    /**
     * （仅平面下保证有效）判断圆是否与 MBR 相交
     * @param range - MBR
     * @returns {boolean} - true if the circle intersects the MBR
     */
    intersects(range: MBR): boolean {
        // convert MBR to Rectangle
        let rect = mbrToRectangle(range);

        let xDist = Math.abs(rect.x - this.x);
        let yDist = Math.abs(rect.y - this.y);

        // radius of the circle
        let r = this.r;

        let w = rect.w / 2;
        let h = rect.h / 2;

        let edges = Math.pow((xDist - w), 2) + Math.pow((yDist - h), 2);

        // no intersection
        if (xDist > (r + w) || yDist > (r + h))
        return false;

        // intersection within the circle
        if (xDist <= w || yDist <= h)
        return true;

        // intersection on the edge of the circle
        return edges <= this.rSquared;
    }

    static isCircle(obj: any): obj is Circle {
        return obj instanceof Circle;
    }
}