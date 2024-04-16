/**
 * @module utils
 * @description 工具函数
 */
/**
 * 判断一个 object 是否是(潜在的)地理对象（是否含有 X，Y 或者 lon，lat 或者 lng，lat 属性）
 * @param obj - 待判断的对象
 * @returns{boolean} - 如果是地理对象则返回 true，否则返回 false
 */
export declare function isPotentialGeoObject(obj: any): boolean;
/**
 * 节流函数
 * @param func - 要执行的函数
 * @param wait - 等待时间
 * @returns - 返回一个节流函数
 */
export declare function throttle(func: Function, wait: number): (this: any, ...args: any[]) => void;
/**
 * Merge the properties
 * @param {object} dest - The target object
 * @param {...any} args - The objects to be merged
 * @returns {object} - The merged object
 * @example
 * extend({a: 1}, {b: 2}, {c: 3}) // {a: 1, b: 2, c: 3}
 * extend({a: 1}, {a: 2}, {a: 3}) // {a: 3}
 */
export declare function extend(dest: any, ...args: any[]): any;
/**
* 释放对象
* @param {Object} obj - 需要释放的对象
*/
export declare function emptyObj(obj: {
    [key: string]: any;
}): void;
/**
 * 生成UUID
 * @returns - UUID
 */
export declare function UUID(): string;
/**
 * 计算数组的形状
 * @param array - 数组
 * @returns {number[]}
 */
export declare function calculateArrayShape(array: any[]): number[];
export declare function flattenArray(array: any[]): any[];
/**
* - 根据 indexArray 中存储的索引 从 fillArray 中取出对应的元素并填充到 indexArray 中
* - fill indexArray with elements from fillArray according to the index stored in indexArray
* - `注意`： indexArray 的形状未知 但是 fillArray 不论形状如何始终视为一维数组
* - Note: the shape of indexArray is unknown, but fillArray is always regarded as a one-dimensional array regardless of its shape
* @param indexArray - 存储索引的数组（被填充）
* @param fillArray - 存储元素的数组 （用于填充）
*/
export declare function fillIndexArray(indexArray: any, fillArray: any): any;
/**
* 拼接等长二维数组
* @warning 必须为二维数组，必须等长。
* @param array1 [ [1,2,3], [4,5,6], [7,8,9] ]
* @param array2 [ ['a','b','c'], ['d','e','f'], ['g','h','i'] ]
* @returns [ [1,2,3,'a','b','c'], [4,5,6,'d','e','f'], [7,8,9,'g','h','i'] ]
*/
export declare function concatEL2DArray(array1: any[], array2: any[]): any[];
/**
* 抽取二维数组的某一列（或某几列）
* @param array - 二维数组
* @param indexArray - 索引数组(或索引)
*/
export declare function subColumnInEL2DArray(array: any[], indexArray: number[] | number): any[];
/**
* 生成随机索引数组（不重复）
* @param length - 数组长度（自然数）
* @param num - 随机索引个数（自然数）
* @returns {number[]} - 随机索引数组
*/
/**
* 生成随机索引数组（不重复）
* @param length - 数组长度（自然数）
* @param num - 随机索引个数（自然数）
* @returns {number[]} - 随机索引数组
*/
export declare function randomIndexArray(length: number, num: number): number[];
/**
 * - Round number to precision
 * - 将数字四舍五入到指定精度
 * @param {number} num Number
 * @param {number} [precision=0] Precision
 * @returns {number} rounded number
 * @example
 * round(120.4321)
 * //=120
 *
 * round(120.4321, 2)
 * //=120.43
 */
export declare function round(num: number, precision?: number): number;
