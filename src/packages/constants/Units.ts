/**
 * @moudle Units
 * @description 单位 Units
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
 * Unit of measurement factors using a spherical (non-ellipsoid) earth radius.
 *
 * Keys are the name of the unit, values are the number of that unit in a single radian
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
  
   * Area of measurement factors based on 1 square meter.
   *
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
  