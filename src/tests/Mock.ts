/**
 * 用于生成mock数据
 */
import { Point } from "../packages/Geometry";


function mockLon(
    maxLon: number = 180,
    minLon: number = -180
) {
    //return Math.random() * 360 - 180;
    // 生成指定范围内的随机数
    return Math.random() * (maxLon - minLon) + minLon;
}

function mockLat(
    maxLat: number = 90,
    minLat: number = -90
) {
    // return Math.random() * 180 - 90;
    // 生成指定范围内的随机数
    return Math.random() * (maxLat - minLat) + minLat;
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
 * @param MBR - 最小外包矩形 [minLon, minLat, maxLon, maxLat]
 * @returns 返回点
 */
export function mockPoint(
    MBR: number[] = [-180, -90, 180, 90]
){
    // return new Point(mockLon(), mockLat(), mockAsl(), ...mockProperties());

    // 生成指定范围内的随机点
    return new Point(mockLon(MBR[2], MBR[0]), mockLat(MBR[3], MBR[1]), mockAsl(), ...mockProperties());
}

/**
 * - 生成指定数量的点
 * - generate specified number of points
 * @param num 生成点的数量
 * @param MBR - 最小外包矩形 [minLon, minLat, maxLon, maxLat]
 * @returns 返回点数组
 */
export function mockPoints(
    num: number,
    MBR: number[] = [-180, -90, 180, 90]
    ){
        // 生成指定数量的点 在指定范围内
        let points: Point[] = [];
        for(let i = 0; i < num; i++){
            points.push(mockPoint(MBR));
        }
        return points;
    } 

