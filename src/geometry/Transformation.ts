import {Point} from './Point.js';
/**
 * @class Transformation
 * - 表示一个仿射变换：一组系数`a`、`b`、`c`、`d`，用于将形式为`(x, y)`的点转换为`(a*x + b, c*y + d)`，并进行反向转换。
 * 
 * @example
 * ```js
 * var transformation = toTransformation(2, 5, -1, 10);
 * var p = point(1, 2);
 * var p2 = transformation.transform(p); //  point(7, 8)
 * var p3 = transformation.untransform(p2); //  point(1, 2)
 * ```
 */
export class Transformation{
    _a: number;
    _b: number;
    _c: number;
    _d: number;

    constructor(a: number | number[] , b: number, c: number, d: number){
        if (Array.isArray(a)) {
            // use array properties
            this._a = a[0];
            this._b = a[1];
            this._c = a[2];
            this._d = a[3];
            return;
        }
        this._a = a;
        this._b = b;
        this._c = c;
        this._d = d;
    }

    transform(point: Point, scale?: number){
        return this._transform(point.clone(), scale);
    }

    _transform(point: Point, scale: number = 1){
        point.x = scale * (this._a * point.x + this._b);
        point.y = scale * (this._c * point.y + this._d);
        return point;
    }

    untransform(point: Point, scale: number = 1){
        return new Point(
            (point.x / scale - this._b) / this._a,
            (point.y / scale - this._d) / this._c
        );
    }
}

export function toTransformation(a: number | number[], b: number, c: number, d: number){
    return new Transformation(a, b, c, d);
}