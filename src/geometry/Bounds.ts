import {Point, toPoint} from './Point.ts';
/*
 * @class Bounds
 * Represents a rectangular area in pixel coordinates.
 * @example
 *
 * ```js
 * var p1 = L.point(10, 10),
 * p2 = L.point(40, 60),
 * bounds = L.bounds(p1, p2);
 * ```
 *
 * All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
 *
 * ```js
 * otherBounds.intersects([[10, 10], [40, 60]]);
 * ```
 */
export class Bounds {
    min!: Point; // left top
    max!: Point; // right bottom

    constructor(a: Point | Point[], b?: Point) {
		if (!a) { return; } 
		let points : Point[]; 
		if (b) {
			this.min = a as Point;
			this.max = b;
		}else{
			points = a as Point[];
			const minMax = this.findMinMax(points);

			this.min = minMax.min;
			this.max = minMax.max;
		}

    }

    private findMinMax(points: Point[]) : {min: Point, max: Point} {
		if (points.length === 0) {
			return {
				min: new Point(0, 0),
				max: new Point(0, 0)
			};
		}else{
			let minx = points[0].x;
			let miny = points[0].y;
			let maxx = points[0].x;
			let maxy = points[0].y;
			for (let i = 1; i < points.length; i++) {
				minx = Math.min(minx, points[i].x);
				miny = Math.min(miny, points[i].y);
				maxx = Math.max(maxx, points[i].x);
				maxy = Math.max(maxy, points[i].y);
			}
			return {
				min: new Point(minx, miny),
				max: new Point(maxx, maxy)
			};
		}		
    }
	
	/**
	 * 扩展边界以包含给定的点或边界。
	 * @param {Point|Bounds} obj - 给定的点或边界。
	 * @returns {this} 返回`this`。
	 */
    extend(obj : Point | Bounds) : this {
		if (obj instanceof Point) {
			const point = obj;
			this.min.x = Math.min(point.x, this.min.x);
			this.max.x = Math.max(point.x, this.max.x);
			this.min.y = Math.min(point.y, this.min.y);
			this.max.y = Math.max(point.y, this.max.y);
		}else if (obj instanceof Bounds) {
			const bounds = obj;
			this.min.x = Math.min(bounds.min.x, this.min.x);
			this.max.x = Math.max(bounds.max.x, this.max.x);
			this.min.y = Math.min(bounds.min.y, this.min.y);
			this.max.y = Math.max(bounds.max.y, this.max.y);
		}
		return this;
    }

	// @method getCenter(round?: Boolean): Point
	// Returns the center point of the bounds.
	getCenter(round?: boolean) {
		return toPoint(
		        (this.min.x + this.max.x) / 2,
		        (this.min.y + this.max.y) / 2, round);
	}

	// @method getBottomLeft(): Point
	// Returns the bottom-left point of the bounds.
	/**
	 * 返回边界的左下角点。
	 * @returns {Point} 返回边界的左下角点。
	 */
	getBottomLeft() : Point {
		return toPoint(this.min.x, this.max.y);
	}

	// @method getTopRight(): Point
	// Returns the top-right point of the bounds.
	/**
	 * 返回边界的右上角点。
	 * @returns {Point} 返回边界的右上角点。
	 */
	getTopRight() : Point {
		return toPoint(this.max.x, this.min.y);
	}

	// @method getTopLeft(): Point
	// Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
	/**
	 * 返回边界的左上角点。
	 * @returns {Point} 返回边界的左上角点。
	 */
	getTopLeft() : Point {
		return this.min; // left, top
	}

	// @method getBottomRight(): Point
	// Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
	/**
	 * 返回边界的右下角点。
	 * @returns {Point} 返回边界的右下角点。
	 */
	getBottomRight() : Point {
		return this.max; // right, bottom
	}

	// @method getSize(): Point
	// Returns the size of the given bounds
	/**
	 * 返回边界的大小。
	 * @returns {Point} 返回边界的大小。(width, height)
	 */
	getSize() : Point {
		return this.max.subtract(this.min);
	}

	/**
	 * 如果矩形包含给定的点或边界，则返回`true`。
	 * @param {Point|Bounds} obj - 给定的点或边界。
	 * @returns {Boolean} 如果矩形包含给定的点或边界，则返回`true`。
	 */
	contains(obj : Point | Bounds) : boolean {
		let min, max;
		if (obj instanceof Bounds) {
			const bounds = obj;
			min = bounds.min;
			max = bounds.max;
		} else {
			const point = obj;
			min = max = point;
		}

		return (min.x >= this.min.x) &&
		       (max.x <= this.max.x) &&
		       (min.y >= this.min.y) &&
		       (max.y <= this.max.y);
	}

	/**
	 * 如果矩形与给定的边界相交，则返回`true`。
	 * - 两个边界相交: 它们至少有一个公共点。
	 * @param bounds 
	 * @returns 
	 */
	intersects(bounds: Bounds) : boolean {
		bounds = toBounds(bounds);

		const min = this.min,
		    max = this.max,
		    min2 = bounds.min,
		    max2 = bounds.max,
		    xIntersects = (max2.x >= min.x) && (min2.x <= max.x),
		    yIntersects = (max2.y >= min.y) && (min2.y <= max.y);

		return xIntersects && yIntersects;
	}

	/**
	 * 如果矩形与给定的边界重叠，则返回`true`。
	 * - 两个边界重叠: 它们的交集是一个区域。
	 * @param bounds 
	 * @returns 
	 */
	overlaps(bounds: Bounds) : boolean {
		bounds = toBounds(bounds);

		const min = this.min,
		    max = this.max,
		    min2 = bounds.min,
		    max2 = bounds.max,
		    xOverlaps = (max2.x > min.x) && (min2.x < max.x),
		    yOverlaps = (max2.y > min.y) && (min2.y < max.y);

		return xOverlaps && yOverlaps;
	}

	/**
	 * 如果边界正确初始化，则返回`true`。
	 * @returns 
	 */
	isValid() {
		return !!(this.min && this.max);
	}

	/**
	 * 返回通过在每个方向上扩展或收缩当前边界的给定比率创建的边界。
	 * - 例如，0.5的比率在每个方向上扩展边界50%。 
	 * - 负值将收缩边界。
	 * @param {Number} bufferRatio - 比率（0.5表示扩展50%）
	 * @returns {Bounds} 返回新的边界。
	 */
	pad(bufferRatio: number) : Bounds {
		const min = this.min,
		max = this.max,
		heightBuffer = Math.abs(min.x - max.x) * bufferRatio,
		widthBuffer = Math.abs(min.y - max.y) * bufferRatio;


		return toBounds(
			toPoint(min.x - heightBuffer, min.y - widthBuffer),
			toPoint(max.x + heightBuffer, max.y + widthBuffer));
	}


	// @method equals(otherBounds: Bounds): Boolean
	// Returns `true` if the rectangle is equivalent to the given bounds.
	equals(bounds: Bounds) : boolean {
		if (!bounds) { return false; }

		bounds = toBounds(bounds);

		return this.min.equals(bounds.getTopLeft()) &&
			this.max.equals(bounds.getBottomRight());
	}

	toGeoJSON() {
		return [this.getBottomLeft().toGeoJSON(), this.getTopRight().toGeoJSON()];
	}
}

/**
 * 从两个角坐标对创建边界对象。
 * @param {Point | Point[] | Bounds} a - 角坐标对或点数组或边界对象。
 * @param {Point} b - 角坐标对
 * @returns {Bounds} 返回新的边界对象。
 * @example
 * 1. 参数为两个角坐标对
 * ```js
 * var p1 = L.point(10, 10),
 * p2 = L.point(40, 60),
 * bounds = L.bounds(p1, p2);
 * ```
 * 2. 参数为点数组
 * ```js
 * var p1 = L.point(10, 10),
 * p2 = L.point(40, 60),
 * p3 = L.point(50, 70),
 * bounds = L.bounds([p1, p2, p3]);
 * ```
 * 3. 参数为边界对象
 * ```js
 * var p1 = L.point(10, 10),
 * p2 = L.point(40, 60),
 * bounds1 = L.bounds(p1, p2);
 * var bounds2 = L.bounds(bounds1);
 * ```
 * 4. 参数为二维数组
 * ```js
 * var bounds = L.bounds([[10, 10], [40, 60]]);
 * ```
 */
export function toBounds(a : Point | Point[] | number[][] | Bounds, b? : Point) : Bounds {
	if (!a || a instanceof Bounds) {
		return a;
	}else if(a instanceof Point && b instanceof Point){
		return new Bounds(a, b);
	}else{
		// 对 a 中的每一个元素都使用 toPoint 转换
		const points = a as Point[];
		const newPoints = points.map(p => toPoint(p));
		return new Bounds(newPoints);
	}
}
