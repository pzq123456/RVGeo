/**
 * 2D [Perlin](https://en.wikipedia.org/wiki/Perlin_noise) 噪声
 * @param X - X 坐标 (范围 [0, 1] )
 * @param Y - Y 坐标 (范围 [0, 1] )
 * @returns {number} - 返回值范围在 [-1, 1] 之间
 * @example
 * ```ts
 * const noise = Perlin(0.5, 0.5);
 * console.log(noise);
 * ```
 */
export declare function Perlin(X: number, Y: number): number;
/**
 * https://en.m.wikipedia.org/wiki/Damping#Damped_sine_wave
 * @param x
 * @param y
 * @returns
 */
export declare function dampedSin3D(x: number, y: number): number;
export declare function Sin3D(x: number, y: number): number;
/**
 * 生成 Worley 噪声距离场
 * @param row - 行数
 * @param col - 列数
 * @param n - 噪声源数量
 * @returns {number[][]} - 返回值范围
 */
export declare function worleyNoise(row: number, col: number, n: number): number[][];
/**
 * 生成 条纹 噪声，可选水平或垂直
 * @param row - 行数
 * @param col - 列数
 * @param n - 条纹数量
 * @param mode - 模式
 */
export declare function zebraNoise(row: number, col: number, n: number, mode?: 'horizontal' | 'vertical' | 'diagonal' | 'all'): number[][];
