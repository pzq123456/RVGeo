/**
 * @moudle Units
 * @description 单位 Units 部分代码来自 Turf.js
 * - 该模块主要用于单位换算，包括距离单位和面积单位。
 * - This module is mainly used for unit conversion, including distance units and area units.
 */

import { sphere } from "./Ellipsoid.ts";

export const earthRadius = sphere.a; // 6371008.8 m

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
 * - `注意`: 其中已经含有地球半径的信息，因此不需要再乘以地球半径。
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
 * - Unit of measurement factors based on 1 meter.
 * - 单位换算关系，以1米为基准。
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

/**
 * - Converts an angle in degrees to radians
 * - 将角度转换为弧度
 * @name degreesToRadians
 * @param {number} degrees angle between 0 and 360 degrees
 * @returns {number} angle in radians
 */
export function degreesToRadians(degrees: number): number {
  const radians = degrees % 360;
  return (radians * Math.PI) / 180;
}

/**
 * - Converts an angle in radians to degrees
 * - 将弧度转换为角度
 * @name radiansToDegrees
 * @param {number} radians angle in radians
 * @returns {number} degrees between 0 and 360 degrees
 */
export function radiansToDegrees(radians: number): number {
  const degrees = radians % (2 * Math.PI);
  return (degrees * 180) / Math.PI;
}

/**
 * - 将距离单位转换为米
 * - Convert distance units to meters
 * @param distance - 距离
 * @param units - 距离单位
 * @returns {number} - 距离（米）
 */
export function toMeters(distance: number, units: Units): number {
  const factor = factors2[units];
  if (!factor) {
    throw new Error(units + " units is invalid");
  }
  return distance / factor;
}

/**
 * - 将距离单位米转换为指定单位
 * - Convert distance units from meters to specified units
 * @param distance - 距离（米）
 * @param units - 距离单位
 * @returns {number} - 距离
 */
export function metersTo(distance: number, units: Units): number {
  const factor = factors2[units];
  if (!factor) {
    throw new Error(units + " units is invalid");
  }
  return distance * factor;
}

/**
 * - 距离单位内互相转换
 * - Convert distance units to each other
 * @param distance - 距离
 * @param from - 当前距离单位
 * @param to - 目标距离单位
 * @returns {number} - 转换后距离
 */
export function unitTounit(
  distance: number,
  from: Units,
  to: Units
): number {
  // Convert to meters first, then to final units to ensure the best possible precision.
  return metersTo(toMeters(distance, from), to);
}

// Computational geometry


