/**
 * D2R usage: 角度转弧度
 * - PI / 180
 * @example
 * var radians = degrees * D2R;
 */
export declare const D2R: number;
/**
 * R2D usage: 弧度转角度
 * - 180 / PI
 * @example
 * var degrees = radians * R2D;
 */
export declare const R2D: number;
export declare const earthRadius = 6371008.8;
export type Units = "meters" | "metres" | "millimeters" | "millimetres" | "centimeters" | "centimetres" | "kilometers" | "kilometres" | "miles" | "nauticalmiles" | "inches" | "yards" | "feet" | "radians" | "degrees";
export type AreaUnits = Exclude<Units, "radians" | "degrees"> | "acres" | "hectares" | "squaremeters" | "squaremetres" | "squarekilometers" | "squarekilometres";
/**
 * - Unit of measurement factors using a spherical (non-ellipsoid) earth radius.
 * @example
 * var radians = 1; // 1 radian
 * var length = radians * earthRadius;
 *
 * var length = 1; // 1 meter
 * var radians = length / earthRadius;
 */
export declare const factors: Record<Units, number>;
/**
 * - Unit of measurement factors based on 1 meter.
 * - 单位换算关系，以1米为基准。
 * @example
 * var meters = 1; // 1 meter
 * var length = meters * factors2.kilometers;
 */
export declare const factors2: Record<Units, number>;
/**
  * - Area of measurement factors based on 1 square meter.
  * - 单位换算关系，以1平方米为基准。
  * @example
  * var meters = 1; // 1 square meter
  * var area = meters * areaFactors.acres;
  */
export declare const areaFactors: Record<AreaUnits, number>;
