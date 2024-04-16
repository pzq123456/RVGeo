import { MBR } from './MBR';

/**
 * 平面图形：圆形
 */
export declare class Circle {
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
    constructor(x: number, y: number, r: number);
    /**
     * 判断点是否在圆内
     * @param point - 点坐标
     * @param threshold - （默认为0）容差（用于修正计算误差）*建议根据实际情况手动调整
     * @returns {boolean} - true if the point is inside the circle
     */
    contains(point: [number, number], threshold?: number): boolean;
    /**
     * （仅平面下保证有效）判断圆是否与 MBR 相交
     * @param range - MBR
     * @returns {boolean} - true if the circle intersects the MBR
     */
    intersects(range: MBR): boolean;
    static isCircle(obj: any): obj is Circle;
}
