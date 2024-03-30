/**
 * 这个函数的主要目的是将数字 num 四舍五入到指定的 precision 小数位。
 * @param {Number} num
 * @param {Number} precision - 这是一个可选参数，表示要四舍五入到的小数位数。
 * 	- 如果没有提供这个参数，那么默认值为 6。
 * 	- 如果这个参数为 false，那么函数将直接返回 num，不进行任何处理。
 * @returns {Number} - 返回四舍五入后的数字
 */
export declare function formatNum(num: number, precision?: number | boolean): number;
/**
 * 判断一个数字是否为浮点数
 * @param n
 * @returns
 */
export declare function isFloat(n: number): boolean;
