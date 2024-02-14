import { Util } from "../core";
const formatNum = Util.formatNum; // 这种写法可以压缩代码长度
const emptyObj = Util.emptyObj; // 释放对象

/**
 * 返回数值表达式x的整数部分，去除任何小数位。如果x已经是整数，则结果是x。
    @param x — A numeric expression.
 */

const trunc = Math.trunc || function (v) {
	return v > 0 ? Math.floor(v) : Math.ceil(v);
};

/**
 * 默认值（0）。
 */
const defaultVal = 0;

/**
 * @class Point
 * 表示一个具有像素`x`和`y`坐标的点。这是一个上的点，通常用于表示地图上的像素坐标。
 * - 所有接受`Point`对象的方法和选项也接受简单的数组形式（除非另有说明）。
 * @see {@link [Leaflet Point Class](https://github.com/Leaflet/Leaflet/blob/a08d81935122bfea9c5181a7bfa79df5e7aa773e/src/geometry/Point.js#L27)}
 * @example
 * ```js
 * var point = new Point(200, 300);
 * var point = [200, 300]; // 也认为是一个点
 * ```
 */




export class Point{
	x: number;
	y: number;

    /**
     * @constructor 
     * @param {number} x - 点的x坐标。
     * @param {number} y - 点的y坐标。
     * @param {boolean} round - 是否四舍五入取整坐标。
     */
    constructor(x: number, y: number, round: boolean = false) {
		if(!x || !y){ // 若没有传入x或y，则默认为0
			this.x = this.y = defaultVal;
		}

		if(isNaN(x) || isNaN(y) || !isFinite(x) || !isFinite(y)){
			throw new Error('坐标值不合法');
		}

        this.x = (round ? Math.round(x) : x);
        this.y = (round ? Math.round(y) : y);
    }

    /**
     * 返回当前点的副本
     * @returns 
     */
	clone() : Point {
		return new Point(this.x, this.y);
	}
	
	/**
	 * 返回当前点的副本，更新坐标。
	 * @param x 
	 * @param y 
	 * @returns 
	 */
	update(x: number, y: number) : Point {
		return this.clone()._update(x, y);
	}

	/**
	 * （破坏性方法，直接在原对象中修改）更新当前点的坐标。
	 * @param {number|Point} x - 点的x坐标。或者一个`Point`对象。{@link Point}
	 * @param {number} y - 点的y坐标。
	 * @returns 
	 */
	_update(x: number | Point, y?: number | Boolean) : Point {
		if (x instanceof Point) {
			this.x = x.x;
			this.y = x.y;
			if(y === true){
				// 释放原对象
				emptyObj(x);
			}
			return this;
		}else if (y && typeof y === 'number') {
			this.x = x;
			this.y = y;
		}
		return this;
	}

    /**
     * 返回当前点和给定点的和。
     * @param point - 给定点。
     * @returns 返回一个新的`Point`对象。
     */
	add(point: Point): Point {
		// non-destructive, returns a new point
		return this.clone()._add(toPoint(point));
	}

    /**
     * （破坏性方法，直接在原对象中修改）返回当前点和给定点的和。
     * @param point - 给定点。
     * @returns - 返回当前`Point`对象。
     */
	_add(point: Point): Point {
		this.x += point.x;
		this.y += point.y;
		return this;
	}

	subtract(point : Point) : Point {
		return this.clone()._subtract(toPoint(point));
	}

	_subtract(point : Point) : Point {
		this.x -= point.x;
		this.y -= point.y;
		return this;
	}

    /**
     * 返回当前点除以给定数值的结果。
     * @param num - 给定数值。
     * @returns 
     */
	divideBy(num : number) : Point {
		return this.clone()._divideBy(num);
	}

	_divideBy(num : number) : Point {
        if(num === 0){
            throw new Error('除数不能为0');
        }
		this.x /= num;
		this.y /= num;
		return this;
	}

	multiplyBy(num : number) : Point {
		return this.clone()._multiplyBy(num);
	}

	_multiplyBy(num : number) : Point {
		this.x *= num;
		this.y *= num;
		return this;
	}

    /**
     * 返回当前点乘以给定点的结果。{@link [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)}
     * @param point 
     * @returns 
     */
	scaleBy(point: Point) : Point {
		return new Point(this.x * point.x, this.y * point.y);
	}

	unscaleBy(point: Point) : Point {
        if(point.x === 0 || point.y === 0){
            throw new Error('除数不能为0');
        }
		return new Point(this.x / point.x, this.y / point.y);
	}

    /**
     * 返回当前点的副本，坐标四舍五入。
     * @returns - 返回一个新的`Point`对象。
     */
	round() {
		return this.clone()._round();
	}

	_round() {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this;
	}

    /**
     * 返回当前点的副本，坐标向下取整。
     */
	floor() {
		return this.clone()._floor();
	}

	_floor() {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this;
	}

    /**
     * 返回当前点的副本，坐标向上取整。
     */
	ceil() {
		return this.clone()._ceil();
	}

	_ceil() {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		return this;
	}

    /**
     * 返回当前点的副本，坐标向零取整。
     */
	trunc() {
		return this.clone()._trunc();
	}

	_trunc() {
		this.x = trunc(this.x);
		this.y = trunc(this.y);
		return this;
	}
    // @method distanceTo(otherPoint: Point): Number
	// Returns the cartesian distance between the current and the given points.

    /**
     * 返回当前点到给定点的距离。(勾股定理)
     * @param point - 给定点。
     * @param {Function} customFn - 自定义距离计算函数。
     */
	distanceTo(point : Point, customFn ?: (x1: number, y1: number, x2: number, y2: number) => number) : number {
		point = toPoint(point);
        if(customFn){
            return customFn(this.x, this.y, point.x, point.y);
        }
		const x = point.x - this.x,
		    y = point.y - this.y;

		return Math.sqrt(x * x + y * y);
	}

    // @method equals(otherPoint: Point): Boolean
	// Returns `true` if the given point has the same coordinates.
	equals(point : Point) : boolean {
		point = toPoint(point);

		return point.x === this.x &&
		       point.y === this.y;
	}

    /**
     * 返回`true`如果给定点的坐标都小于当前点的坐标（绝对值）。
     */
	contains(point : Point) : boolean {
		point = toPoint(point);

		return Math.abs(point.x) <= Math.abs(this.x) &&
		       Math.abs(point.y) <= Math.abs(this.y);
	}

	// @method toString(): String
	// Returns a string representation of the point for debugging purposes.
	toString() {
		return `Point(${formatNum(this.x)}, ${formatNum(this.y)})`;
	}

    toGeoJSON(){
        return [this.x, this.y];
    }
}

/**
 * @factory toPoint
 * 将输入转换为`Point`对象。
 * @param {Point|Array<number>|Object} x - 输入值。
 * @param {number} y - 输入值。
 * @param {boolean} round - 是否四舍五入坐标。
 * @returns {Point} 返回一个`Point`对象。
 * @example
 * ```js
 * var point = toPoint([200, 300]);
 * var point = toPoint({x: 200, y: 300});
 * var point = toPoint(200, 300.5, true);
 * ```
 */
export function toPoint(x: Point | [number, number] | {x: number, y: number} | number, y?: number | any, round?: boolean): Point {
    if (x instanceof Point || x === undefined || x === null){
        return x;
    }
    if (Array.isArray(x)) {
        return new Point(x[0], x[1]);
    }
    if (typeof x === 'object' && 'x' in x && 'y' in x) {
        return new Point(x.x, x.y);
    }
    return new Point(x, y, round);
}
