/**
 * MBR (Minimum Bounding Rectangle)
 * y     --------(maxX, maxY)
 * |     |M            |
 * |     |     B       |
 * |     |         R   |
 * |(minX, minY)--------
 * ------------------------> x
 */
/**
 * - MBR 中的 minX, minY, maxX, maxY 的排序在某些情况下会有歧义，尤其是在地理坐标系的语境下。（譬如跨越了反子午圈的情况（斐济群岛））
 * - 所以允许 minX > maxX 遇到这样的情况时，需要进行特殊处理。
 */
export type MBR = [number, number, number, number];
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
export type Rectangle = {
    x: number;
    y: number;
    w: number;
    h: number;
};
export declare function mergeMBR(mbr1: MBR, mbr2: MBR): MBR;
export declare function mergePointMBR(mbr: MBR, point: [number, number]): MBR;
/**
 * default projection : SphericalMercator
 * - you can change the projection by passing the second parameter
 */
export declare function MBR2Plane(mbr: MBR, projection?: import('..').Projection): MBR;
/**
 * default projection : SphericalMercator
 * - you can change the projection by passing the second parameter
 */
export declare function plane2MBR(plane: MBR, projection?: import('..').Projection): MBR;
/**
 * 计算多点的最小外包矩形（默认情况）
 * @param points - 多点
 * @returns {MBR} 返回最小外包矩形 [minLon, minLat, maxLon, maxLat]
 */
export declare function getPointsMBR(points: [number, number][]): MBR;
/**
 * 判断点是否在 MBR 内（默认情况）
 * @param point - 点
 * @param mbr - 最小外包矩形
 * @returns {boolean} 返回是否在 MBR 内 在则返回 true 不在则返回 false
 */
export declare function pointInMBR(point: [number, number], mbr: MBR): boolean;
export declare function containsMBR(mbr1: MBR, mbr2: MBR): boolean;
export declare function intersectsMBR(mbr1: MBR, mbr2: MBR): boolean;
export declare function overlapsMBR(mbr1: MBR, mbr2: MBR): boolean;
export declare function equalsMBR(mbr1: MBR, mbr2: MBR): boolean;
/**
 * 判断点是否在 MBR 内（跨越了反子午线的情况）
 * - 必须保 MBR 真的跨越了反子午线，否则会出现错误
 * @param point
 * @param mbr
 * @returns
 */
export declare function pointInMBRWithAntimeridian(point: [number, number], mbr: MBR): boolean;
/**
 * 计算多点的最小外包矩形（跨越反子午线的情况）
 * - 会自动计算并选择面积最小的情况
 * - get MBR with antimeridian
 * @param points - 多点
 * @returns {MBR}
 */
export declare function getMBRWithAntimeridian(points: [number, number][]): MBR;
/**
 * 将单个跨越了反子午线的 MBR 分割成两个简单的 MBR
*/
export declare function splitMBRWithAntimeridian(mbr: MBR): MBR[];
/**
 * MBR 转换为 Rectangle
 * @param mbr
 * @returns
 */
export declare function mbrToRectangle(mbr: MBR): Rectangle;
/**
 * Rectangle 转换为 MBR
 * @param rectangle
 * @returns
 */
export declare function rectangleToMBR(rectangle: Rectangle): MBR;
/**
 * 将 MBR 转化为 逆时针方向的（无孔）多边形数组
 * @param mbr
 */
export declare function mbrToPolygon(mbr: MBR): [number, number][];
