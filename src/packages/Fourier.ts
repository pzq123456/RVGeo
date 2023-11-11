const PI = Math.PI;
const E = Math.E;
const I = Math.sqrt(-1);
const pow = Math.pow;
const sin = Math.sin;

/**
 * A recursive implementation of the 1D Cooley-Tukey FFT, the input should have a length of power of 2. 
 * @param X - The input should have a length of power of 2.
 * @returns - The FFT of X.
 */
export function FFT(X: number[]): number[]
{
    const N = X.length;
    if(N === 1) return X;
    let w = pow(E, 2 * PI * I / N);
    let even = FFT(X.filter((_, i) => i % 2 === 0)) as number[];
    let odd = FFT(X.filter((_, i) => i % 2 === 1)) as number[];
    let res = new Array(N);
    for(let k = 0; k < N / 2; k++){
        res[k] = even[k] + w ** k * odd[k];
        res[k + N / 2] = even[k] - w ** k * odd[k];
    }
    // convert NaN to 0
    for(let i = 0; i < N; i++){
        if(isNaN(res[i])) res[i] = 0;
    }
    return res;
}

/**
 * A recursive implementation of the 1D Cooley-Tukey IFFT, the input should have a length of power of 2.
 * @param X - The input should have a length of power of 2.
 * @returns - The inverse FFT of X.
 */
export function IFFT(X: number[]): number[]
{
    const N = X.length;
    if(N === 1) return X;
    let w = (1/N) * pow(E, -2 * PI * I / N);
    let even = IFFT(X.filter((_, i) => i % 2 === 0)) as number[];
    let odd = IFFT(X.filter((_, i) => i % 2 === 1)) as number[];
    let res = new Array(N);
    for(let k = 0; k < N / 2; k++){
        res[k] = (even[k] + w ** k * odd[k]) / 2;
        res[k + N / 2] = (even[k] - w ** k * odd[k]) / 2;
    }
    // convert NaN to 0
    for(let i = 0; i < N; i++){
        if(isNaN(res[i])) res[i] = 0;
    }
    return res;
}

/**
 * 采样函数
 * @param f - 被采样的函数
 * @param N - 采样点数
 * @param a - 采样区间左端点
 * @param b - 采样区间右端点
 * @returns - 采样结果
 */
export function sample(f: (x: number) => number, N: number, a: number, b: number): number[]
{
    let X = new Array(N);
    for(let i = 0; i < N; i++){
        X[i] = f(a + (b - a) * i / N);
    }
    return X;
}