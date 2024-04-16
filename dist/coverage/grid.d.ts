import { MBR } from '../geometry';

/**
 * 网格类（本质是三维数组）:
 * - 三维数组的每一层代表一个波段
 * - 其中一层为一个二维数组，代表一个波段的值，并与对应的 MBR 对象关联用于挂接地图上的位置
 * - MBR 统一使用 `WGS84` 坐标系
 */
export declare class Grid {
    MBR: MBR;
    data: number[][][];
    shape: number[];
    rows: number;
    cols: number;
    bands: number;
    constructor(MBR: MBR, data: number[][][]);
    getShape(): number[];
    getBand(band: number): number[][];
    get width(): number;
    get height(): number;
    get bandCount(): number;
    /**
     * 获取指定范围，指定波段的网格数据
     * - 建议：先使用 `ConvertToGridMBR` 方法获取网格范围，再使用本方法获取网格数据（为简化代码，没有将这两个方法合并）
     * @param GridMBR - 网格范围 行列号索引表示
     * @param band - 波段号数组
     * @returns - 返回网格数据，格式为：[band][row][col]
     */
    getSubGrid(GridMBR: MBR, band?: number[]): number[][][];
    /**
     * 在内部修改网格数据 使用均值替换0等无效值
     * @param band - 波段号
     */
    fillInvalidValue(band: number): void;
    /**
     * 与 `getSubGrid` 方法类似，但返回的是一个 Grid 对象
     * @param GridMBR - 网格范围 行列号索引表示
     * @param band - 波段号数组
     * @returns - 返回网格数据，格式为：[band][row][col]
     */
    getSubGridObj(GridMBR: MBR, band?: number[]): Grid;
    /**
     * 由外部经纬度坐标获取网格范围，行列号索引表示（只有全部在栅格范围内才会正常得到结果）
     * - 若外部坐标不全部在网格范围内，则返回 null
     * @param MBR - 网格行列号范围
     */
    ConvertToGridMBR(MBR: MBR): MBR | null;
    /**
     * 计算输入点的网格坐标（整数行列号坐标）
     * @param Point - 输入点坐标，格式为：[lon, lat]
     * @returns {[number,number] | null} - 返回网格坐标，格式为：[row, col] 若输入点不在网格范围内，则返回 null
     */
    getGridCoord(Point: [number, number]): [number, number] | null;
    /**
     * 由行列号反算经纬度坐标（栅格中心点）
     * @param GridCoord - 网格坐标，格式为：[row, col]
     * @returns - 返回经纬度坐标，格式为：[lon, lat]
     */
    getCoordByGridCoord(GridCoord: [number, number]): [number, number];
    /**
     * 获取指定波段的最大值、最小值、平均值
     * @param band - 波段号
     */
    getBandStatistics(band: number): {
        max: number;
        min: number;
        mean: number;
    };
    /**
     * 二值化网格数据，返回二值化后的网格数据
     * @param band - 波段号
     * @param threshold - 二值化阈值
     */
    binarization(band: number, threshold: number): number[][];
    getCoutourCode(band: number, threshold: number, isPadding?: boolean): number[][];
    getMean(band: number): number;
    getSorted1DArray(band: number): number[];
}
/**
 * 二值化网格数据，返回二值化后的网格数据
 * @param grid - grid 对象
 * @param band - 波段号
 * @param threshold - 二值化阈值
 * @returns {number[][]} - 返回二值化后的网格数据
 */
export declare function binarization(grid: Grid, band: number, threshold: number): number[][];
/**
 * （简易四叉树）创建一个 gridMBR 层面的四叉树
 * @param grid
 * @param band
 * @param maxDepth
 *
 * |---------->x
 * | 2 | 3 |
 * |--------
 * | 0 | 1 |
 * |
 * y
 */
export declare function subdivide2QTree(grid: Grid, maxDepth: number): QTNode;
/**
 * 由网格数据生成四叉树(节点)
 */
export type QTNode = {
    boundary: MBR;
    children: QTNode[];
    depth: number;
    maxDepth: number;
    isLeaf: boolean;
    isDivided: boolean;
};
/**
 * 去除最大最小值
 * @param fft - 二维数组
 */
export declare function deMaxMin(fft: number[][]): void;
