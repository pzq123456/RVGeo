/**
 * 这个函数的主要目的是将数字 num 四舍五入到指定的 precision 小数位。
 * @param {Number} num 
 * @param {Number} precision - 这是一个可选参数，表示要四舍五入到的小数位数。
 * 	- 如果没有提供这个参数，那么默认值为 6。
 * 	- 如果这个参数为 false，那么函数将直接返回 num，不进行任何处理。
 * @returns {Number} - 返回四舍五入后的数字
 */
export function formatNum(num: number, precision?: number | boolean): number {
    if (typeof precision === 'number' || precision === undefined) {
        const pow = Math.pow(10, precision === undefined ? 6 : precision);
        return Math.round(num * pow) / pow;
    }
    return num;
}

/**
 * 释放对象
 * @param {Object} obj - 需要释放的对象
 */
export function emptyObj(obj: { [key: string]: any }) {
    for (let i in obj) {
        delete obj[i];
    }
}

/**
 * 合并对象 Merges the properties (including properties inherited through the prototype chain)
 * @param {object} dest - 目标对象
 * @param  {...any} args - 可以传入多个对象
 * @returns {object} - 返回合并后的对象
 */
export function extend(dest: { [key: string]: any }, ...args: any[]): { [key: string]: any } {
	let j, len, src;

	for (j = 0, len = args.length; j < len; j++) {
		src = args[j];
		for (const i in src) {
			dest[i] = src[i];
		}
	}
	return dest;
}

/**
 * 将数字 num 模数为 range，使其位于 range[0] 和 range[1] 之间。
 * Returns the number `num` modulo `range` in such a way so it lies within`range[0]` and `range[1]`. 
 * The returned value will be always smaller than `range[1]` unless `includeMax` is set to `true`.
 * @param {Number} x - 需要进行模数的数字
 * @param {Number[]} range - 模数范围
 * @param {Boolean} includeMax - 是否包含最大值
 * @returns {Number} - 返回模数后的数字
 */
export function wrapNum(x: number, range: [number, number], includeMax?: boolean): number {
	const max = range[1],
	    min = range[0],
	    d = max - min;
	return x === max && includeMax ? x : ((x - min) % d + d) % d + min;
}