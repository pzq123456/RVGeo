/**
 * @module geometry
 */

/**
 * MBR (Minimum Bounding Rectangle)
 * y     --------(maxX, maxY)
 * |     |M            |
 * |     |     B       |
 * |     |         R   |
 * |(minX, minY)--------
 * ------------------------> x
 */

// todo https://www.jos.org.cn/html/2022/9/6293.htm
// todo https://datatracker.ietf.org/doc/html/rfc7946#section-5

/**
 * - 最小外包矩形（左下角和右上角的坐标）
 * - MBR 中的 minX, minY, maxX, maxY 的排序在某些情况下会有歧义，尤其是在地理坐标系的语境下。（譬如跨越了 180 度经线的情况）
 * - 所以允许 minX > maxX 或 minY > maxY，但是在使用时需要注意。
 * - （总是默认遵守这样的约定）所以并没有 MBR 类，而只有一个相对松散的类型定义与系列工具函数。
 */
export type MBR = [number, number, number, number]; // [minX, minY, maxX, maxY] or [minLon, minLat, maxLon, maxLat]

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
 * - Rectangle is a rectangle that bounds a set of points.
 */
export type Rectangle = {x: number; y: number; w: number; h: number;}

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

/**
 * 计算多点的最小外包矩形
 * @param points - 多点
 * @returns {MBR} 返回最小外包矩形 [minLon, minLat, maxLon, maxLat]
 */
export function getPointsMBR(
    points: [number, number][]
): MBR{
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
 * 判断点是否在 MBR 内
 * @param point - 点
 * @param mbr - 最小外包矩形
 * @returns {boolean} 返回是否在 MBR 内 在则返回 true 不在则返回 false
 */
export function pointInMBR(
    point: [number, number],
    mbr: MBR) : boolean
{
    let minLon = mbr[0], minLat = mbr[1], maxLon = mbr[2], maxLat = mbr[3];
    let lon = point[0], lat = point[1];
    return lon >= minLon && lon <= maxLon && lat >= minLat && lat <= maxLat;
}