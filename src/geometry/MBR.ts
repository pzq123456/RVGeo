/**
 * MBR (Minimum Bounding Rectangle)
 * y     --------(maxX, maxY)
 * |     |M            |
 * |     |     B       |
 * |     |         R   |
 * |(minX, minY)--------
 * ------------------------> x
 */

import { SphericalMercator } from "..";

// todo https://www.jos.org.cn/html/2022/9/6293.htm
// todo https://datatracker.ietf.org/doc/html/rfc7946#section-5

/**
 * - MBR 中的 minX, minY, maxX, maxY 的排序在某些情况下会有歧义，尤其是在地理坐标系的语境下。（譬如跨越了反子午圈的情况（斐济群岛））
 * - 所以允许 minX > maxX 遇到这样的情况时，需要进行特殊处理。
 */

export type MBR = [number, number, number, number]; // [minX, minY, maxX, maxY] or [w, s, e, n]
/**
 * Rectangle
 * y  ---------------
 * |  |             |
 * |  |    (x,y)    h
 * |  |             |
 * |  -------w-------
 * ------------------------> x
 */

/**
 * MBR 跨越反子午线的情况
 * |----        ----|
 * | \  |       |\  |
 * | M  |       |B R|
 * |  \ |       |  \|
 * |----        ----|
 * -180     0      180
 * 只有明确知道 MBR 跨越了反子午线的情况下才能使用以下的方法
 * pointInMBRWithAntimeridian()
 * getMBRWithAntimeridian()
 */

/**
 * - Rectangle is a rectangle that bounds a set of points.
 */
export type Rectangle = {x: number; y: number; w: number; h: number;}

export function mergeMBR(mbr1: MBR, mbr2: MBR): MBR {
    return [Math.min(mbr1[0], mbr2[0]), Math.min(mbr1[1], mbr2[1]), Math.max(mbr1[2], mbr2[2]), Math.max(mbr1[3], mbr2[3])];
}
export function mergePointMBR(mbr: MBR, point: [number, number]): MBR {
    return [Math.min(mbr[0], point[0]), Math.min(mbr[1], point[1]), Math.max(mbr[2], point[0]), Math.max(mbr[3], point[1])];
}

/**
 * default projection : SphericalMercator
 * - you can change the projection by passing the second parameter
 */
export function MBR2Plane(mbr: MBR, projection = SphericalMercator): MBR{
    let res: MBR;

    let plane0 = projection.project([mbr[0],mbr[1]]);
    let plane1 = projection.project([mbr[2],mbr[3]]);

    res = [plane0[0],plane0[1],plane1[0],plane1[1]];
    return res;
}

/**
 * default projection : SphericalMercator
 * - you can change the projection by passing the second parameter
 */
export function plane2MBR(plane: MBR, projection = SphericalMercator): MBR{
    let res : MBR;

    let mbr0 = projection.unproject([plane[0],plane[1]]);
    let mbr1 = projection.unproject([plane[2],plane[3]]);

    res = [mbr0[0],mbr0[1],mbr1[0],mbr1[1]];
    return res;
}


/**
 * 计算多点的最小外包矩形（默认情况）
 * @param points - 多点
 * @returns {MBR} 返回最小外包矩形 [minLon, minLat, maxLon, maxLat]
 */
export function getPointsMBR(points: [number, number][]): MBR{
    let minLon = Infinity, minLat = Infinity, maxLon = -Infinity, maxLat = -Infinity;
    for(let i = 0; i < points.length; i++){
        let lon = points[i][0];
        let lat = points[i][1];
        minLon = Math.min(minLon, lon);
        minLat = Math.min(minLat, lat);
        maxLon = Math.max(maxLon, lon);
        maxLat = Math.max(maxLat, lat);
    }
    return [minLon, minLat, maxLon, maxLat];
}

/**
 * 判断点是否在 MBR 内（默认情况）
 * @param point - 点
 * @param mbr - 最小外包矩形
 * @returns {boolean} 返回是否在 MBR 内 在则返回 true 不在则返回 false
 */
export function pointInMBR(point: [number, number], mbr: MBR) : boolean{
    let minLon = mbr[0], minLat = mbr[1], maxLon = mbr[2], maxLat = mbr[3];
    let lon = point[0], lat = point[1];
    return lon >= minLon && lon <= maxLon && lat >= minLat && lat <= maxLat;
}

export function containsMBR(mbr1: MBR, mbr2: MBR): boolean {
    return mbr1[0] <= mbr2[0] && mbr1[1] <= mbr2[1] && mbr1[2] >= mbr2[2] && mbr1[3] >= mbr2[3];
}

export function intersectsMBR(mbr1: MBR, mbr2: MBR): boolean {
    return mbr1[0] <= mbr2[2] && mbr1[2] >= mbr2[0] && mbr1[1] <= mbr2[3] && mbr1[3] >= mbr2[1];
}

export function overlapsMBR(mbr1: MBR, mbr2: MBR): boolean {
    return mbr1[0] < mbr2[2] && mbr1[2] > mbr2[0] && mbr1[1] < mbr2[3] && mbr1[3] > mbr2[1];
}

export function equalsMBR(mbr1: MBR, mbr2: MBR): boolean {
    return mbr1[0] === mbr2[0] && mbr1[1] === mbr2[1] && mbr1[2] === mbr2[2] && mbr1[3] === mbr2[3];
}

/**
 * 判断点是否在 MBR 内（跨越了反子午线的情况）
 * - 必须保 MBR 真的跨越了反子午线，否则会出现错误
 * @param point 
 * @param mbr 
 * @returns 
 */
export function pointInMBRWithAntimeridian(point: [number, number],mbr: MBR) : boolean{
    let mbr1 = mbr.map((v,i)=>{
        if(i%2===0){
            return changeLon(v);
        }else{
            return v;
        }
    }) as MBR;
    let mbr2 = mbr.map((v,i)=>{
        if(i%2===0){
            return antiChangeLon(v);
        }else{
            return v;
        }
    }) as MBR;
    return pointInMBR(point, mbr1) || pointInMBR(point, mbr2);
}

/**
 * 计算多点的最小外包矩形（跨越反子午线的情况）
 * - 会自动计算并选择面积最小的情况
 * - get MBR with antimeridian
 * @param points - 多点
 * @returns {MBR} 
 */
export function getMBRWithAntimeridian(points: [number, number][]): MBR {
    // 1. 将所有点转换为 0-180 经度
    let points180 = points.map(changePoint);
    // 2. 计算最小外包矩形
    let mbr1 = getPointsMBR(points);
    let mbr2 = getPointsMBR(points180);
    // 3. 找到经纬度跨度更小的 MBR 若是 0-180 经度的 MBR 则转换回来
    return smallerMBR(mbr1, mbr2, [false, true]);
}

/** 
 * 将单个跨越了反子午线的 MBR 分割成两个简单的 MBR
*/
export function splitMBRWithAntimeridian(mbr: MBR): MBR[]{
    // 从左到右
    let mbr1 = [mbr[0], mbr[1], 180, mbr[3]] as MBR;
    // 从右到左
    let mbr2 = [-180, mbr[1], mbr[2], mbr[3]] as MBR;
    return [mbr1, mbr2];
}

/*============C=O=V=E=R=T============= */

/**
 * MBR 转换为 Rectangle
 * @param mbr 
 * @returns 
 */
export function mbrToRectangle(mbr: MBR): Rectangle {
    // x,y 为中心
    // w,h 为宽高
    return {
        x: (mbr[0] + mbr[2]) / 2,
        y: (mbr[1] + mbr[3]) / 2,
        w: mbr[2] - mbr[0],
        h: mbr[3] - mbr[1]
    }
}

/**
 * Rectangle 转换为 MBR
 * @param rectangle 
 * @returns 
 */
export function rectangleToMBR(rectangle: Rectangle): MBR {
    // x,y 为中心
    // w,h 为宽高
    return [
        rectangle.x - rectangle.w / 2,
        rectangle.y - rectangle.h / 2,
        rectangle.x + rectangle.w / 2,
        rectangle.y + rectangle.h / 2
    ]
}

/**
 * 将 MBR 转化为 逆时针方向的（无孔）多边形数组
 * @param mbr 
 */
export function mbrToPolygon(mbr:MBR): [number,number][] {
    let minLon = mbr[0], minLat = mbr[1], maxLon = mbr[2], maxLat = mbr[3];
    return [
        [minLon, minLat],
        [minLon, maxLat],
        [maxLon, maxLat],
        [maxLon, minLat],
        [minLon, minLat]
    ];
}

/*===========P=R=I=V=A=T=E============ */

function changeLon(lon: number): number {
    // points in 0-180 -> points in -180-0
    // points in -180-0 -> points in 0-180
    if (lon < 0) {
        return lon + 180;
    } else {
        return lon - 180;
    }
}

function antiChangeLon(lon: number): number {
    // points in -180-0 -> points in 0-180
    // points in 0-180 -> points in -180-0
    if (lon < 0) {
        return lon + 180;
    } else {
        return lon - 180;
    }
}

function changePoint(point: [number, number]): [number, number] {
    return [changeLon(point[0]), point[1]];
}

// tag 代表是否经过了经度变换
function smallerMBR(mbr1: MBR, mbr2: MBR,tag:[boolean,boolean]=[false,false]): MBR {
    // 寻找经纬度跨度更小的 MBR
    let lonSpan1 = mbr1[2] - mbr1[0];
    let latSpan1 = mbr1[3] - mbr1[1];
    let lonSpan2 = mbr2[2] - mbr2[0];
    let latSpan2 = mbr2[3] - mbr2[1];
    if (lonSpan1 * latSpan1 < lonSpan2 * latSpan2) {
        if(tag[0]){
            return mbr1.map((v,i)=>{
                if(i%2===0){
                    return antiChangeLon(v);
                }else{
                    return v;
                }
            }) as MBR;
        }else{
            return mbr1;
        }
    } else {
        if(tag[1]){
            return mbr2.map((v,i)=>{
                if(i%2===0){
                    return antiChangeLon(v);
                }else{
                    return v;
                }
            }) as MBR;
        }else{
            return mbr2;
        }
    }
}