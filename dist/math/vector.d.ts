export declare const pi: number;
export declare const halfPi: number;
export declare const atan2: (y: number, x: number) => number;
export declare const cos: (x: number) => number;
export declare const sin: (x: number) => number;
export declare const sqrt: (x: number) => number;
export declare const EPSLN = 1e-10;
/**
 * deep compare two arrays(1D)
 * @param a
 * @param b
 * @param tolerance
 * @returns
 */
export declare function equals(a: number[] | number, b: number[] | number, tolerance?: number): boolean;
export declare function acos(x: number): number;
export declare function asin(x: number): number;
export declare function haversin(x: number): number;
/**
 * 将三维笛卡尔坐标系下的向量 [x, y, z] 转换为球坐标系下的向量 [lat, lon]（弧度制）。
 * This function takes a 3D Cartesian vector [x, y, z] and converts it to spherical coordinates [lat, lon].
 * @example
 * spherical([1, 0, 0]); // [0, 0]
 * spherical([0, 1, 0]); // [1.5707963267948966, 1.5707963267948966]
 * // you need to convert the result to degrees if you want to use it in degrees
 * spherical([0, 1, 0]).map(x => x * 180 / Math.PI); // [90, 90]
 */
export declare function spherical(cartesian: [number, number, number]): [number, number];
/**
 * 将球坐标系下的向量 [longitude, latitude]（弧度制）转换为三维笛卡尔坐标系下的向量 [x, y, z]。
 * - This function takes spherical coordinates [longitude, latitude] and converts them to a 3D Cartesian vector [x, y, z].
 * @param spherical
 * @param toRadians - 默认输入为角度，如果输入为弧度，需要设置 toRadians 为 false。
 */
export declare function cartesian(spherical: [number, number], toRadians?: boolean): [number, number, number];
/**
 * 计算两个三维笛卡尔坐标系下的向量 a 和 b 的点积。
 * This function calculates the dot product of two 3D Cartesian vectors a and b.
 */
export declare function cartesianDot(a: [number, number, number], b: [number, number, number]): number;
/**
 * 计算两个三维笛卡尔坐标系下的向量 a 和 b 的叉积。
 *  This function calculates the cross product of two 3D Cartesian vectors a and b.
 */
export declare function cartesianCross(a: [number, number, number], b: [number, number, number]): [number, number, number];
/**
 * 计算两个三维笛卡尔坐标系下的向量 a 和 b 的和，将结果存储在 a 中。
 * This function adds two 3D Cartesian vectors a and b, modifying a in-place to store the result. (Note: This function is incomplete as it doesn't return the sum)
 */
export declare function cartesianAddInPlace(a: [number, number, number], b: [number, number, number]): void;
/**
 * 计算两个三维笛卡尔坐标系下的向量 a 和 b 的和，返回一个新的向量。
 * This function adds two 3D Cartesian vectors a and b, returning a new vector representing the sum.
 */
export declare function cartesianAdd(a: [number, number, number], b: [number, number, number]): [number, number, number];
/**
 * 使用因子 k 缩放三维笛卡尔坐标系下的向量 vector，返回一个新的缩放后的向量。
 * This function scales a 3D Cartesian vector vector by a factor k, returning a new scaled vector.
 */
export declare function cartesianScale(vector: [number, number, number], k: number): [number, number, number];
/**
 * 归一化三维笛卡尔坐标系下的向量 d，将 d 修改为指向相同方向的单位向量。
 * This function normalizes a 3D Cartesian vector d in-place, modifying d to represent a unit vector pointing in the same direction. (Note: This function is incomplete and requires implementing square root calculation)
 */
export declare function cartesianNormalizeInPlace(d: [number, number, number]): void;
/**
 * 归一化三维笛卡尔坐标系下的向量 d，返回一个新的单位向量。
 * This function normalizes a 3D Cartesian vector d, returning a new unit vector.
 */
export declare function cartesianNormalize(d: [number, number, number]): [number, number, number];
/**
 * 计算两个三维笛卡尔坐标系下的向量 a 和 b 的夹角。
 * This function calculates the angle between two 3D Cartesian vectors a and b.
 */
export declare function cartesianAngle(a: [number, number, number], b: [number, number, number]): number;
/**
 * 计算两个二维笛卡尔坐标系下的向量 a 和 b 的点积。
 * This function calculates the dot product of two 2D Cartesian vectors a and b.
 */
export declare function dot(a: [number, number], b: [number, number]): number;
/**
 * 计算两个二维笛卡尔坐标系下的向量 a 和 b 的叉积。
 * This function calculates the cross product of two 2D Cartesian vectors a and b.
 */
export declare function cross(a: [number, number], b: [number, number]): number;
/**
 * 计算两个二维笛卡尔坐标系下的向量 a 和 b 的和，返回一个新的向量。
 * This function adds two 2D Cartesian vectors a and b, returning a new vector representing the sum.
 */
export declare function add(a: [number, number], b: [number, number]): [number, number];
/**
 * 使用因子 k 缩放二维笛卡尔坐标系下的向量 vector，返回一个新的缩放后的向量。
 * This function scales a 2D Cartesian vector vector by a factor k, returning a new scaled vector.
 */
export declare function scale(vector: [number, number], k: number): [number, number];
/**
 * 归一化二维笛卡尔坐标系下的向量 d，返回一个新的单位向量。
 * This function normalizes a 2D Cartesian vector d, returning a new unit vector.
 */
export declare function normalize(d: [number, number]): [number, number];
/**
 * 三维笛卡尔坐标系下的向量插值。
 * This function interpolates between two 3D Cartesian vectors a and b using a parameter t, returning the resulting vector.
 */
export declare function interpolate(a: [number, number, number], b: [number, number, number], t: number): [number, number, number];
/**
 * 二维笛卡尔坐标系下的向量插值。
 * This function interpolates between two 2D Cartesian vectors a and b using a parameter t, returning the resulting vector.
 */
export declare function interpolate2(a: [number, number], b: [number, number], t: number): [number, number];
