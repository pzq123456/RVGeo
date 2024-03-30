import { MBR } from '../geometry';

export declare class QuadTree {
    private capacity;
    boundary: MBR;
    private points;
    northWest: QuadTree | null;
    northEast: QuadTree | null;
    southWest: QuadTree | null;
    southEast: QuadTree | null;
    private isDivided;
    depth: number;
    maxDepth: number;
    constructor(boundary: MBR, capacity: number, maxDepth?: number);
    contains(point: [number, number], boundary: MBR): boolean;
    intersects(boundary: MBR, range: MBR): boolean;
    /**
     * 插入一个点
     * @param point - 点的坐标
     * @returns {boolean} - 是否插入成功
     */
    insert(point: [number, number]): boolean;
    get pointsList(): [number, number][] | null;
    /**
     * 剖分当前节点
     */
    subdivide(): void;
    /**
     * 四叉树范围查询
     * - 输入一个矩形范围，返回范围内的所有点
     * - 同时支持平面坐标系和经纬度坐标系（跨界线、边界、大范围区域会有 BUG）
     * @param range{MBR} - 查询范围矩形
     * @returns {Array<[number,number]>}
     */
    queryRange(range: MBR): [number, number][];
    /**
     * you need a customRange object to support custom range query
     * - note : this function has the SAME LOGIC as queryRange.
     * @see customRange
     */
    customQuery(range: customRange): [number, number][];
}
/**
 * impliment customRange to support custom range query
 * - make sure your customRange object has correct intersects and contains function
 * - note:
 *  - the boundary of customRange is the boundary of QuadTree
 *  - the point of customRange is the point of QuadTree
 * @example
 * // customRange use circle as example
 * circleRange = {
 * intersects: (boundary: MBR) => {},
 * contains: (point: [number,number]) => {}
 * }
 * @see `Circle` class in Geometry directory
 *
 */
export interface customRange {
    intersects: (boundary: MBR) => boolean;
    contains: (point: [number, number]) => boolean;
}
