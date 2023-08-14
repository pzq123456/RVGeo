/**
 * @moudle Units
 * @description 单位 Units 部分代码来自 Turf.js
 */

import { sphere } from "./Ellipsoid.ts";

const earthRadius = sphere.a;

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
  | "hectares";


/**
 * - Unit of measurement factors using a spherical (non-ellipsoid) earth radius.
 * - 单位换算关系，以球面（非椭球体）地球半径为基准。
 * - Keys are the name of the unit, values are the number of that unit in a single radian.
 * - 键是单位的名称，值是相较于1弧度的单位缩放比例。
 * - `definition`: The length of the arc on the unit circle subtended by an angle of 1 radian.
 * - `定义`：弧长等于半径的弧，其所对的圆心角为1弧度。
 * 
 * @memberof Units
 * @type {Object}
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
  * - Area of measurement factors based on 1 square meter.
  * - 单位换算关系，以1平方米为基准。
  * - Keys are the name of the unit, values are the number of square meters in 1 of that unit.
  * - 键是单位的名称，值是1个单位所对应的平方米数。
  * @warning 角度单位不适用于面积单位换算。
  * @warning The angle unit is not applicable to area unit conversion.
  * @memberof Units
  * @type {Object}
  */
export const areaFactors: Record<AreaUnits, number> = {
  acres: 0.000247105,
  centimeters: 10000,
  centimetres: 10000,
  feet: 10.763910417,
  hectares: 0.0001,
  inches: 1550.003100006,
  kilometers: 0.000001,
  kilometres: 0.000001,
  meters: 1,
  metres: 1,
  miles: 3.86e-7,
  nauticalmiles: 2.9155334959812285e-7,
  millimeters: 1000000,
  millimetres: 1000000,
  yards: 1.195990046,
};

/**
 * - Convert a distance measurement (assuming a spherical Earth) from radians to a more friendly unit.
 * - 将距离测量值（假设地球是球形的）从弧度转换为更友好的单位。
 * - Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 * - 有效单位：英里，海里，英寸，码，米，千米，厘米，英尺
 * @name radiansToLength 
 * @param {number} radians in radians across the sphere
 * @param {string} [units="kilometers"] can be degrees, radians, miles, inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} distance
 */
export function radiansToLength(
  radians: number,
  units: Units = "kilometers"
): number {
  const factor = factors[units];
  if (!factor) {
    throw new Error(units + " units is invalid");
  }
  return radians * factor;
}

/**
 * - Convert a distance measurement (assuming a spherical Earth) from a real-world unit into radians
 * - 将距离测量值（假设地球是球形的）从现实世界的单位转换为弧度
 * - Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *  - 有效单位：英里，海里，英寸，码，米，千米，厘米，英尺
 * @name lengthToRadians
 * @param {number} distance in real units
 * @param {string} [units="kilometers"] can be degrees, radians, miles, inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} radians
 */
export function lengthToRadians(
  distance: number,
  units: Units = "kilometers"
): number {
  const factor = factors[units];
  if (!factor) {
    throw new Error(units + " units is invalid");
  }
  return distance / factor;
}