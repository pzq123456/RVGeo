export declare enum stretchType {
    linear = 0,
    square = 1,
    log = 2,
    power = 3,
    groupStretch = 4
}
export declare enum colorListType {
    default = 0
}
/**
 * 连续单波段单色带渲染（灰色）
 * @param statistics - 波段统计信息
 * @param value - 当前像素值
 * @param strachFunc - 拉伸函数
 */
export declare function simpleColorBand(statistics: {
    max: number;
    min: number;
    mean: number;
}, value: number, strachFunc?: (value: number, statistics: {
    max: number;
    min: number;
    mean: number;
}) => Number): string;
/**
 * 真彩色带渲染
 * @param statistics - 波段统计信息列表
 * @param value - 当前像素值
 * @param strachFunc - 拉伸函数
 * @returns
 */
export declare function trueColorBand(statistics: {
    max: number;
    min: number;
    mean: number;
}[], value: number[], strachFunc?: (value: number, statistics: {
    max: number;
    min: number;
    mean: number;
}) => Number): string;
/**
 * 真彩色带渲染工厂函数
 * @param type - 拉伸类型
 * @param isReverse - 是否反转
 * @returns
 */
export declare function trueColorBandFactory(type: stretchType, isReverse?: boolean): (statistics: {
    max: number;
    min: number;
    mean: number;
}[], value: number[]) => string;
export declare function simpleColorBandFactory(type: stretchType, isReverse?: boolean): (statistics: {
    max: number;
    min: number;
    mean: number;
}, value: number) => string;
export declare const CountourColorList: string[];
/**
 * 伪彩色带渲染工厂函数
 * @param type - 拉伸类型
 * @param level - [0, 1] 之间的数组，表示每个颜色的分界点
 * @param colorList - 颜色列表
 * @returns
 */
export declare function pseudoColorBandFactory(type: stretchType, level?: number[], colorList?: string[]): (statistics: {
    max: number;
    min: number;
    mean: number;
}, value: number) => string;
export declare function binaryColorBand(value: number, colorList?: string[]): string;
/**
 * 简单离散值颜色计算函数
 * - 离散值范围为整数
 * - 默认与色带索引一一对应
 * @param value
 * @param colorList
 */
export declare function simplePseudoColorBand(value: number, colorList?: string[]): string;
/**
 * 直方图计算函数
 * @param grid2D - 二维数组
 * @param stretch - 拉伸类型
 * @param statistics - 波段统计信息
 * @returns {number[]} - 直方图数组，长度为 256，每个元素表示对应灰度值的像素个数
 */
export declare function hist(grid2D: number[][], stretch?: stretchType, statistics?: {
    max: number;
    min: number;
    mean: number;
}): number[];
