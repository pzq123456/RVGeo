/**
 * @moudle Units
 * @description 单位 Units 部分代码来自 Turf.js
 * - 该模块主要用于单位换算，包括距离单位和面积单位。
 * - This module is mainly used for unit conversion, including distance units and area units.
 */
import { Units, factors, factors2, areaFactors, AreaUnits } from './factors';
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
 * @name radiansToDegrees
 * @param {number} radians angle in radians
 * @returns {number} degrees between 0 and 360 degrees
 * @example
 * radiansToDegrees(Math.PI / 2); // => 90
 * let resultArray = [Math.PI, Math.PI / 2, 0, -Math.PI / 2, -Math.PI];
 * resultArray.map(radiansToDegrees); // => [180, 90, 0, -90, -180]
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
export function unitToUnit(
  distance: number,
  from: Units,
  to: Units
): number {
  // Convert to meters first, then to final units to ensure the best possible precision.
  return metersTo(toMeters(distance, from), to);
}

// 面积单位转换
// Area unit conversion

// 将面积单位转换为平方米
// Convert area units to square meters

/**
 * - 将面积单位转换为平方米
 * - Convert area units to square meters
 * @param area - 面积
 * @param units - 面积单位
 * @returns {number} - 面积（平方米）
 */
export function toSquareMeters(area: number, units: AreaUnits): number {
  const factor = areaFactors[units];
  if (!factor) {
    throw new Error(units + " units is invalid");
  }
  return area / factor;
}

/**
 * - 将面积单位平方米转换为指定单位
 * - Convert area units from square meters to specified units
 * @param area - 面积（平方米）
 * @param units - 面积单位
 * @returns {number} - 面积
 */
export function squareMetersTo(area: number, units: AreaUnits): number {
  const factor = areaFactors[units];
  if (!factor) {
    throw new Error(units + " units is invalid");
  }
  return area * factor;
}

/**
 * - 面积单位内互相转换
 * - Convert area units to each other
 * @param area - 面积
 * @param from - 当前面积单位
 * @param to - 目标面积单位
 * @returns {number} - 转换后面积
 */
export function areaToArea(
  area: number,
  from: AreaUnits,
  to: AreaUnits
): number {
  // Convert to square meters first, then to final units to ensure the best possible precision.
  return squareMetersTo(toSquareMeters(area, from), to);
}

// 度分秒 转换 为 十进制度
// Degree minute second conversion to decimal degree
export function dmsToDeg(d: number, m: number, s: number, direction: string): number {
  let deg = d + m / 60 + s / 3600;
  if (direction === "S" || direction === "W") {
    deg = -deg;
  }
  return deg;
}

// 十进制度 转换 为 度分秒
// Decimal degree conversion to degree minute second
export function degToDMS(deg: number): [number, number, number, string] {
  let d = Math.floor(deg);
  let min = Math.floor((deg - d) * 60);
  let sec = ((deg - d) * 60 - min) * 60;
  return [d, min, sec, deg < 0 ? (deg < -180 ? "W" : "S") : deg > 180 ? "E" : "N"];
}