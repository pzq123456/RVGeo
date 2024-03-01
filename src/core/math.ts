export const epsilon = 1e-6;
export const epsilon2 = 1e-12;
export const pi = Math.PI;
export const halfPi = pi / 2;
export const quarterPi = pi / 4;
export const tau = pi * 2;

export const degrees = 180 / pi;
export const radians = pi / 180;

export const abs = Math.abs;
export const atan = Math.atan;
export const atan2 = Math.atan2;
export const cos = Math.cos;
export const ceil = Math.ceil;
export const exp = Math.exp;
export const floor = Math.floor;
export const hypot = Math.hypot;
export const log = Math.log;
export const pow = Math.pow;
export const sin = Math.sin;
export const sign = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
export const sqrt = Math.sqrt;
export const tan = Math.tan;

export function acos(x : number) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

export function asin(x : number) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}

export function haversin(x : number) {
  return (x = sin(x / 2)) * x;
}

// cartesian coordinates

// 1. Coordinate Conversion: 球坐标系和笛卡尔坐标系的转换
//    cartesian: [x, y, z] -> spherical: [theta, phi]

/**
 * 三维笛卡尔坐标系转换为球坐标系（极坐标系）的公式如下：
 * This function takes a 3D Cartesian vector [x, y, z] and converts it to spherical coordinates [theta, phi].
 * - theta: The azimuthal angle (longitude) in radians, calculated using atan2(y, x).
 * - phi: The polar angle (latitude) in radians, calculated using asin(z).
 */
export function spherical(cartesian : [number, number, number]) : [number, number] {
  return [atan2(cartesian[1], cartesian[0]), asin(cartesian[2])];
}

//    spherical: [theta, phi] -> cartesian: [x, y, z]
/**
 * 球坐标系（极坐标系）转换为三维笛卡尔坐标系的公式如下：
 * This function takes a 2D spherical vector [theta, phi] and converts it back to Cartesian coordinates [x, y, z].
 */
export function cartesian(spherical : [number, number]) : [number, number, number] {
  var lambda = spherical[0], phi = spherical[1], cosPhi = cos(phi);
  return [cosPhi * cos(lambda), cosPhi * sin(lambda), sin(phi)];
}

// 2. Vector Operations: 笛卡尔坐标系下的向量运算

/**
 * 计算两个三维笛卡尔坐标系下的向量 a 和 b 的点积。
 * This function calculates the dot product of two 3D Cartesian vectors a and b.
 */
export function cartesianDot(a : [number, number, number], b : [number, number, number]) : number {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * 计算两个三维笛卡尔坐标系下的向量 a 和 b 的叉积。
 *  This function calculates the cross product of two 3D Cartesian vectors a and b.
 */
export function cartesianCross(a : [number, number, number], b : [number, number, number]) : [number, number, number] {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}


/**
 * 计算两个三维笛卡尔坐标系下的向量 a 和 b 的和，将结果存储在 a 中。
 * This function adds two 3D Cartesian vectors a and b, modifying a in-place to store the result. (Note: This function is incomplete as it doesn't return the sum)
 */
export function cartesianAddInPlace(a : [number, number, number], b : [number, number, number]) {
  a[0] += b[0], a[1] += b[1], a[2] += b[2];
}

/**
 * 计算两个三维笛卡尔坐标系下的向量 a 和 b 的和，返回一个新的向量。
 * This function adds two 3D Cartesian vectors a and b, returning a new vector representing the sum.
 */
export function cartesianAdd(a: [number, number, number], b: [number, number, number]): [number, number, number] {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

/**
 * 使用因子 k 缩放三维笛卡尔坐标系下的向量 vector，返回一个新的缩放后的向量。
 * This function scales a 3D Cartesian vector vector by a factor k, returning a new scaled vector.
 */
export function cartesianScale(vector : [number, number, number], k : number) : [number, number, number] {
  return [vector[0] * k, vector[1] * k, vector[2] * k];
}

/**
 * 归一化三维笛卡尔坐标系下的向量 d，将 d 修改为指向相同方向的单位向量。
 * This function normalizes a 3D Cartesian vector d in-place, modifying d to represent a unit vector pointing in the same direction. (Note: This function is incomplete and requires implementing square root calculation)
 */
export function cartesianNormalizeInPlace(d : [number, number, number]) {
  var l = sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}

/**
 * 归一化三维笛卡尔坐标系下的向量 d，返回一个新的单位向量。
 * This function normalizes a 3D Cartesian vector d, returning a new unit vector.
 */
export function cartesianNormalize(d: [number, number, number]): [number, number, number] {
  const magnitude = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  return [d[0] / magnitude, d[1] / magnitude, d[2] / magnitude];
}

// 二维笛卡尔坐标系下的向量运算

/**
 * 计算两个二维笛卡尔坐标系下的向量 a 和 b 的点积。
 * This function calculates the dot product of two 2D Cartesian vectors a and b.
 */
export function dot(a : [number, number], b : [number, number]) : number {
  return a[0] * b[0] + a[1] * b[1];
}

/**
 * 计算两个二维笛卡尔坐标系下的向量 a 和 b 的叉积。
 * This function calculates the cross product of two 2D Cartesian vectors a and b.
 */
export function cross(a : [number, number], b : [number, number]) : number {
  return a[0] * b[1] - a[1] * b[0];
}

/**
 * 计算两个二维笛卡尔坐标系下的向量 a 和 b 的和，返回一个新的向量。
 * This function adds two 2D Cartesian vectors a and b, returning a new vector representing the sum.
 */
export function add(a : [number, number], b : [number, number]) : [number, number] {
  return [a[0] + b[0], a[1] + b[1]];
}

/**
 * 使用因子 k 缩放二维笛卡尔坐标系下的向量 vector，返回一个新的缩放后的向量。
 * This function scales a 2D Cartesian vector vector by a factor k, returning a new scaled vector.
 */
export function scale(vector : [number, number], k : number) : [number, number] {
  return [vector[0] * k, vector[1] * k];
}

/**
 * 归一化二维笛卡尔坐标系下的向量 d，返回一个新的单位向量。
 * This function normalizes a 2D Cartesian vector d, returning a new unit vector.
 */
export function normalize(d : [number, number]) : [number, number] {
  var l = sqrt(d[0] * d[0] + d[1] * d[1]);
  return [d[0] / l, d[1] / l];
}

// 3. Interpolation: 插值

/**
 * 三维笛卡尔坐标系下的向量插值。
 * This function interpolates between two 3D Cartesian vectors a and b using a parameter t, returning the resulting vector.
 */
export function interpolate(a : [number, number, number], b : [number, number, number], t : number) : [number, number, number] {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t
  ];
}

/**
 * 二维笛卡尔坐标系下的向量插值。
 * This function interpolates between two 2D Cartesian vectors a and b using a parameter t, returning the resulting vector.
 */
export function interpolate2(a : [number, number], b : [number, number], t : number) : [number, number] {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t
  ];
}