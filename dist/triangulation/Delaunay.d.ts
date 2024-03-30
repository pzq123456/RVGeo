export declare class Delaunator {
    static from(points: number[][], getX?: typeof defaultGetX, getY?: typeof defaultGetY): Delaunator;
    constructor(coords: number[]);
    update(): void;
    _hashKey(x: any, y: any): number;
    _legalize(a: any): number;
    _link(a: any, b: any): void;
    _addTriangle(i0: any, i1: any, i2: any, a: any, b: any, c: any): any;
    getTriangles(): any;
    getHalfedges(): any;
    getHull(): any;
    getPoints(): any[][];
    /**
     * - get the indices of triangles as array of array of 3 elements
     * - 获得三角形的索引，以3个元素的数组的数组的形式
     * @returns {[number,number,number]}
     */
    getTriangleIndices(): [number, number, number][];
    /**
     * 计算三点外接圆的半径
     * @param p1
     * @param p2
     * @param p3
     * @returns
     */
    static circumRadius(p1: [number, number], p2: [number, number], p3: [number, number]): number;
    circumcenter(ax: any, ay: any, bx: any, by: any, cx: any, cy: any): {
        x: any;
        y: any;
    };
}
declare function defaultGetX(p: any): any;
declare function defaultGetY(p: any): any;
/**
 * 计算三角形的外心（对于 Delauany 三角剖分的结果数组）
 * @param points - 原始点数组（墨卡托）
 * @param delaunay - Delauany 三角剖分
 * @param t - 三角形的索引
 * @returns
 */
export declare function triangleCenter(points: any, delaunay: any, t: any, projection?: (point: [number, number]) => [number, number]): [number, number];
export declare class Voronoi {
    delaunay: Delaunator;
    points: number[][];
    /**
     * - 从点数组构造 Voronoi 图或包装 Delaunator
     * - Construct Voronoi diagram from points array or wrap Delaunator
     * @param params - 点数组或 Delaunator 对象： [[x1, y1], [x2, y2], ... 或 Delaunator 对象
     * @param x - 若 params 为点数组，则为获取 x 坐标的函数（默认规则，取表示点的二维数组中首位）
     * @param y - 若 params 为点数组，则为获取 y 坐标的函数（有默认规则，取表示点的二维数组中末位）
     */
    constructor(params?: number[][] | Delaunator, x?: (p: number[]) => number, y?: (p: number[]) => number);
    /**
     * - 获取 Voronoi cell 的顶点数组
     * @returns {Map<number, number[][]>} - Map<编号, 顶点数组>
     */
    getVoronoi(): Map<number, number[][]>;
    /**
     * 使用 MBR 对 Voronoi 图进行裁剪（由于精度问题，极端情况下不可靠）
     * @param MBR
     * @returns
     */
    cutVoronoiByMBR(MBR: [number, number, number, number]): Map<any, any>;
    /**
     * - 更加健壮的 Voronoi 图（将超出 MBR 部分都删去）
     * @param MBR
     * @returns
     */
    robustVoronoi(MBR: [number, number, number, number]): Map<any, any>;
    isInsideMBR(points: number[][], MBR: [number, number, number, number]): boolean;
}
export declare function complateMap(allMap: Map<number, number[][]>, cutMap: Map<number, number[][]>): Map<any, any>;
export {};
