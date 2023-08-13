/**
 * 用于生成mock数据
 */
import { Point } from "../packages/Geometry";


function mockLon() {
    return Math.random() * 360 - 180;
}

function mockLat() {
    return Math.random() * 180 - 90;
}

function mockAsl() {
    return Math.random() * 10000;
}

function UUID() {
    return Math.random().toString(36).substr(2);
}


function mockProperties() {
    return  [ "mock", UUID()];
}

/**
 * - 生成一个随机点
 * - generate a random point
 * @returns 返回点
 */
export function mockPoint() {
    return new Point(mockLon(), mockLat(), mockAsl(), ...mockProperties());
}

/**
 * - 生成指定数量的点
 * - generate specified number of points
 * @param num 生成点的数量
 * @returns 返回点数组
 */
export function mockPoints(num: number) {
    let points: Point[] = [];
    for(let i = 0; i < num; i++){
        points.push(mockPoint());
    }
    return points;
}

