/**
 * D2R usage: 角度转弧度
 * - PI / 180
 * @example
 * var radians = degrees * D2R;
 */
export const D2R = Math.PI / 180; // convert degree to radian

/**
 * R2D usage: 弧度转角度
 * - 180 / PI
 * @example
 * var degrees = radians * R2D;
 */
export const R2D = 180 / Math.PI;

export const earthRadius = 6371008.8; // meters 地球半径的平均值

export type Units =
  | "meters"
  | "metres"
  | "millimeters"
  | "millimetres"
  | "centimeters"
  | "centimetres"
  | "kilometers"
  | "kilometres"
  | "miles"
  | "nauticalmiles"
  | "inches"
  | "yards"
  | "feet"
  | "radians"
  | "degrees";

export type AreaUnits =
  | Exclude<Units, "radians" | "degrees">
  | "acres"
  | "hectares"
  | "squaremeters"
  | "squaremetres"
  | "squarekilometers"
  | "squarekilometres";


/**
 * - Unit of measurement factors using a spherical (non-ellipsoid) earth radius.
 * @example
 * var radians = 1; // 1 radian
 * var length = radians * earthRadius;
 * 
 * var length = 1; // 1 meter
 * var radians = length / earthRadius;
 */
export const factors: Record<Units, number> = {
    centimeters: earthRadius * 100,
    centimetres: earthRadius * 100,
    degrees: 360 / (2 * Math.PI),
    feet: earthRadius * 3.28084,
    inches: earthRadius * 39.37,
    kilometers: earthRadius / 1000,
    kilometres: earthRadius / 1000,
    meters: earthRadius,
    metres: earthRadius,
    miles: earthRadius / 1609.344,
    millimeters: earthRadius * 1000,
    millimetres: earthRadius * 1000,
    nauticalmiles: earthRadius / 1852,
    radians: 1,
    yards: earthRadius * 1.0936,
};
  
/**
 * - Unit of measurement factors based on 1 meter.
 * - 单位换算关系，以1米为基准。
 * @example
 * var meters = 1; // 1 meter
 * var length = meters * factors2.kilometers;
 */
export const factors2: Record<Units, number> = {
  centimeters: 1 * 100,
  centimetres: 1 * 100,
  degrees: ( 360 / (2 * Math.PI) ) * 1 / earthRadius,
  feet: 1 * 3.28084,
  inches: 1 * 39.37,
  kilometers: 1 / 1000,
  kilometres: 1 / 1000,
  meters: 1,
  metres: 1,
  miles: 1 / 1609.344,
  millimeters: 1 * 1000,
  millimetres: 1 * 1000,
  nauticalmiles: 1 / 1852,
  radians: 1 / earthRadius,
  yards: 1 * 1.0936,
}

/**
  * - Area of measurement factors based on 1 square meter.
  * - 单位换算关系，以1平方米为基准。
  * @example
  * var meters = 1; // 1 square meter
  * var area = meters * areaFactors.acres;
  */
export const areaFactors: Record<AreaUnits, number> = {
  acres: 0.000247105,
  centimeters: 10000,
  centimetres: 10000,
  squaremeters: 1,
  squaremetres: 1,
  feet: 10.763910417,
  hectares: 0.0001,
  inches: 1550.003100006,
  kilometers: 0.000001,
  kilometres: 0.000001,
  squarekilometers: 1e-6,
  squarekilometres: 1e-6,
  meters: 1,
  metres: 1,
  miles: 3.86e-7,
  nauticalmiles: 2.9155334959812285e-7,
  millimeters: 1000000,
  millimetres: 1000000,
  yards: 1.195990046,
};