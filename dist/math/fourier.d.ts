/**
 * 采样函数
 * @param f - 被采样的函数
 * @param N - 采样点数
 * @param a - 采样区间左端点
 * @param b - 采样区间右端点
 * @param freq - 采样频率
 * @param amp - 采样振幅
 * @returns - 采样结果
 */
export declare function sample(f: (x: number) => number, N: number, a: number, b: number, freq?: number, amp?: number): number[];
/**
 * 复数类型
 */
export type Complex = {
    real: number;
    imag: number;
};
/**
 * 复数共轭
 * - complex conjugate
 * @param a - 复数
 * @returns - 共轭复数
 */
export declare function conj(a: {
    real: number;
    imag: number;
}): {
    real: number;
    imag: number;
};
/**
 * 快速傅里叶变换 real to complex
 * @param X - 采样结果
 * @returns - 傅里叶变换结果,作为复数可同时表示振幅和相位。
 * - real：相位 phase
 * - imag：振幅 amplitude
 */
export declare function FFT(X: number[]): Complex[];
/**
 * 快速傅里叶变换 real to complex
 * - 先对每一行进行傅里叶变换，再对每一列进行傅里叶变换，最后中心化
 * @param X - 采样结果
 * @returns - 傅里叶变换结果,作为复数可同时表示振幅和相位。
 */
export declare function fastFFT2(X: number[][]): Complex[][];
/**
 * 快速傅里叶逆变换 complex to real
 * @param X - 傅里叶变换结果（复数）
 * @returns - 逆变换结果
 * - real：函数值
 * - imag：0
 */
export declare function IFFT(X: Complex[]): Complex[];
/**
 * 取 IFFT 结果的实部（也就是原函数值）
 * @param ifftResult
 * @returns
 */
export declare function IFFTReal(ifftResult: Complex[]): number[];
export declare function IFFTReal2(ifftResult: Complex[][], mode?: 'row' | 'column'): number[][];
export declare function FFT2(X: number[][], mode?: 'row' | 'column'): Complex[][];
export declare function IFFT2(X: Complex[][], mode?: 'row' | 'column'): Complex[][];
/**
 * 获取傅里叶变换结果的振幅
 * @param fftResult
 * @returns
 */
export declare function FFTImag(fftResult: Complex[]): number[];
export declare function FFTImag2(fftResult: Complex[][], mode?: 'row' | 'column'): number[][];
/**
 * 获取傅里叶变换结果的振幅
 * @param fftResult
 * @returns
 */
export declare function FFTReal(fftResult: Complex[]): number[];
export declare function FFTReal2(fftResult: Complex[][], mode?: 'row' | 'column'): number[][];
export declare function FFTShift(fftResult: Complex[][]): Complex[][];
