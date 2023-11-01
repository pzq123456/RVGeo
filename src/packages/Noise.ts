/**
 * Noise 模块 用于生成噪声
 */
// const PI = Math.PI;
const e = Math.E;

/**
 * 二维向量 内部使用
 */
type vector2 = {
    x: number;
    y: number;
};


/**
 * 一维线性插值
 * - function to linearly interpolate between a0 and a1 
 * - Weight w should be in the range [0.0, 1.0]
 * - 用于线性插值，权重 w 应该在 [0.0, 1.0] 范围内
 * @param a0 - 范围
 * @param a1 - 范围
 * @param w - 权重
 * @returns {number} - 
 */
function interpolate(a0: number, a1: number, w: number) : number {
    // return (a1 - a0) * w + a0; // sharp edge
    return (a1 - a0) * (3.0 - w * 2.0) * w * w + a0; // smooth edge
    // return (a1 - a0) * ((w * (w * 6.0 - 15.0) + 10.0) * w * w * w) + a0; // smoother edge
}
/**
 * 随机梯度
 * @param ix  
 * @param iy 
 * @returns {vector2} 
 */
function randomGradient(ix: number, iy: number) : vector2 {
    const w = 8 * 32;
    const s = w / 2;
    let a = ix, b = iy;
    a *= 3284157443; b ^= a << s | a >> w-s;
    b *= 1911520717; a ^= b << s | b >> w-s;
    a *= 2048419325;
    const random = a * (3.14159265 / ~(~0 >>> 1));
    const v: vector2 = {
        x: Math.cos(random),
        y: Math.sin(random),
    };
    return v;
}
/**
 * 计算梯度
 * @param ix 
 * @param iy 
 * @param x 
 * @param y 
 * @returns {number}
 */
function dotGridGradient(ix: number, iy: number, x: number, y: number) : number {
    const gradient = randomGradient(ix, iy);
    const dx = x - ix;
    const dy = y - iy;
    return dx * gradient.x + dy * gradient.y;
}


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
export function Perlin(X: number,Y: number) : number {
    // Determine grid cell coordinates
    const x0 = Math.floor(X);
    const x1 = x0 + 1;
    const y0 = Math.floor(Y);
    const y1 = y0 + 1;

    // Determine interpolation weights
    // Could also use higher order polynomial/s-curve here
    const sx = X - x0;
    const sy = Y - y0;

    // Interpolate between grid point gradients
    const n0 = dotGridGradient(x0, y0, X, Y);
    const n1 = dotGridGradient(x1, y0, X, Y);
    const ix0 = interpolate(n0, n1, sx);

    const n2 = dotGridGradient(x0, y1, X, Y);
    const n3 = dotGridGradient(x1, y1, X, Y);
    const ix1 = interpolate(n2, n3, sx);

    const value = interpolate(ix0, ix1, sy);
    return value; // Will return in range -1 to 1. To make it in range 0 to 1, multiply by 0.5 and add 0.5
}

/**
 * https://en.m.wikipedia.org/wiki/Damping#Damped_sine_wave
 * @param x 
 * @param y 
 * @returns 
 */
export function dampedSin3D(x: number, y: number) : number {
    return Math.pow(e,-Math.pow(Math.sqrt(x*x+y*y),1/2)) * Math.sin(Math.sqrt(x*x+y*y));
}

// z = sin(sqrt(x2+y2))
export function Sin3D(x: number, y: number) : number {
    return Math.sin(Math.sqrt(x*x+y*y));
}
