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
export function sample(f: (x: number) => number, N: number, a: number, b: number,freq: number = 1,amp: number = 1
): number[]
{
    let X = new Array(N);
    let delta = (b - a) / N;
    for(let i = 0; i < N; i++){
        X[i] = f(2 * Math.PI * freq * (a + i * delta)) * amp;
    }
    return X;
}

/**
 * 复数类型
 */
export type Complex = {real: number, imag: number};

function multiply (a: Complex, b: Complex): Complex {
    return {
        'real': a.real * b.real - a.imag * b.imag,
        'imag': a.real * b.imag + a.imag * b.real
    };
}

// complex addition
function add(a: Complex, b: Complex): Complex {
    return {
        'real': a.real + b.real,
        'imag': a.imag + b.imag
    };
}

// complex subtraction
function subtract(a: Complex, b: Complex): Complex {
  return {
    'real': a.real - b.real,
    'imag': a.imag - b.imag
  };
}

/**
 * 欧拉公式
 * - euler's identity e^x = cos(x) + sin(x)
 * @param kn - k * n
 * @param N - 采样点数
 * @returns 
 */
function euler(kn: number, N: number){
    let x = -2 * Math.PI * kn / N;
    return {'real': Math.cos(x), 'imag': Math.sin(x)};
}

/**
 * 复数共轭
 * - complex conjugate
 * @param a - 复数
 * @returns - 共轭复数
 */
export function conj(a: {real: number, imag: number}){
  a.imag *= -1;
  return a;
}

function constructComplexArray(
    X: number[],
    N: number
    ): Complex[] {
    let complexArray = [];
    for(let i = 0; i < N; i++){
        complexArray.push({'real': X[i], 'imag': 0});
    }
    return complexArray;
}

function bitReverseArray (array: Complex[]): Complex[] {
    let n = array.length;
    let reversedArray = new Array(n);
    for(let i = 0; i < n; i++){
        reversedArray[i] = array[bitReverse(i, n)];
    }
    return reversedArray;
}

function bitReverse (i: number, n: number): number {
    let j = i.toString(2);
    j = j.split("").reverse().join("");
    j = j + "0".repeat(Math.log2(n) - j.length);
    return parseInt(j, 2);
}

/**
 * 快速傅里叶变换 real to complex
 * @param X - 采样结果
 * @returns - 傅里叶变换结果,作为复数可同时表示振幅和相位。
 * - real：相位 phase
 * - imag：振幅 amplitude
 */
export function FFT(X: number[]): Complex[]
{
    let N = X.length;
    let complexArray = constructComplexArray(X, N);
    let reversedArray = bitReverseArray(complexArray);
    let outputArray = reversedArray.slice();
    for(let i = 1; i < Math.log2(N) + 1; i++){
        let m = Math.pow(2, i);
        let wm = euler(1, m);
        for(let k = 0; k < N; k += m){
            let w = {'real': 1, 'imag': 0};
            for(let j = 0; j < m / 2; j++){
                let t = multiply(w, outputArray[k + j + m / 2]);
                let u = outputArray[k + j];
                outputArray[k + j] = add(u, t);
                outputArray[k + j + m / 2] = subtract(u, t);
                w = multiply(w, wm);
            }
        }
    }
    return outputArray;
}

/**
 * 快速傅里叶变换 real to complex
 * - 先对每一行进行傅里叶变换，再对每一列进行傅里叶变换，最后中心化
 * @param X - 采样结果
 * @returns - 傅里叶变换结果,作为复数可同时表示振幅和相位。
 */
export function fastFFT2(X: number[][]): Complex[][]{
    let fft = FFT2(X);
    let fft2 = fft.map((row) => row.map((c) => Math.sqrt(c.real*c.real + c.imag*c.imag)));
    // let fft2 = FFTImag2(fft,"column");
    let fft3 = FFTShift(FFT2(fft2,"column")); // 二维矩阵中心化
    return fft3;
}



/**
 * 快速傅里叶逆变换 complex to real
 * @param X - 傅里叶变换结果（复数）
 * @returns - 逆变换结果
 * - real：函数值
 * - imag：0
 */
export function IFFT(X: Complex[]): Complex[]
{
    let N = X.length;
    let reversedArray = bitReverseArray(X);
    let outputArray = reversedArray.slice();
    for(let i = 1; i < Math.log2(N) + 1; i++){
        let m = Math.pow(2, i);
        let wm = euler(-1, m);
        for(let k = 0; k < N; k += m){
            let w = {'real': 1, 'imag': 0};
            for(let j = 0; j < m / 2; j++){
                let t = multiply(w, outputArray[k + j + m / 2]);
                let u = outputArray[k + j];
                outputArray[k + j] = add(u, t);
                outputArray[k + j + m / 2] = subtract(u, t);
                w = multiply(w, wm);
            }
        }
    }
    for(let i = 0; i < N; i++){
        outputArray[i].real /= N;
        outputArray[i].imag /= N;
    }
    return outputArray;
}

// RESULT manipulation
function FFTImagRow(
    fftResult: Complex[][]
): number[][]
{
    let N = fftResult.length;
    let Y = new Array(N);
    for(let i = 0; i < N; i++){
        Y[i] = FFTImag(fftResult[i]);
    }
    return Y;
}

/**
 * 取 IFFT 结果的实部（也就是原函数值）
 * @param ifftResult 
 * @returns 
 */
export function IFFTReal(
    ifftResult: Complex[]
): number[]
{
    let N = ifftResult.length;
    let real = new Array(N);
    for(let i = 0; i < N; i++){
        real[i] = ifftResult[i].real;
    }
    return real;
}

export function IFFTReal2(
    ifftResult: Complex[][],
    mode: 'row' | 'column' = 'row'
): number[][]
{
    if(mode === 'row'){
        return IFFTRealRow(ifftResult);
    }else{
        return transpose(IFFTRealRow(transposeComplex(ifftResult)));
    }
}

function IFFTRealRow(
    ifftResult: Complex[][]
): number[][]
{
    let N = ifftResult.length;
    let Y = new Array(N);
    for(let i = 0; i < N; i++){
        Y[i] = IFFTReal(ifftResult[i]);
    }
    return Y;
}




export function FFT2(
    X: number[][],
    mode: 'row' | 'column' = 'row'
): Complex[][]{
    if(mode === 'row'){
        return FFT2Row(X);
    }else{
        return transposeComplex(FFT2Row(transpose(X)));
    }
}

function FFT2Row(
    X: number[][],
): Complex[][]{
    // 相对于输入
    let rowLength = X[0].length; // 行长度
    let columnLength = X.length; // 列长度

    // 行变换 也就是对每一行进行傅里叶变换
    // 首先判断行的长度是否为 2 的幂 若不是则补零
    if(Math.log2(rowLength) % 1 !== 0){
        let N = Math.pow(2, Math.ceil(Math.log2(rowLength)));
        for(let i = 0; i < columnLength; i++){
            X[i] = X[i].concat(new Array(N - rowLength).fill(0));
        }
    }
    // 然后对每一行进行傅里叶变换
    let Y = new Array(columnLength);
    for(let i = 0; i < columnLength; i++){
        Y[i] = FFT(X[i]);
    }
    return Y;
}

export function IFFT2(
    X: Complex[][],
    mode: 'row' | 'column' = 'row'
): Complex[][]{
    if(mode === 'row'){
        return IFFT2Row(X);
    }else{
        return transposeComplex(IFFT2Row(transposeComplex(X)));
    }
}

function IFFT2Row(
    X: Complex[][],
): Complex[][]{
    // 相对于输入
    let rowLength = X[0].length; // 行长度
    let columnLength = X.length; // 列长度

    // 行变换 也就是对每一行进行傅里叶变换
    // 首先判断行的长度是否为 2 的幂 若不是则补零
    if(Math.log2(rowLength) % 1 !== 0){
        let N = Math.pow(2, Math.ceil(Math.log2(rowLength)));
        for(let i = 0; i < columnLength; i++){
            X[i] = X[i].concat(new Array(N - rowLength).fill({'real': 0, 'imag': 0}));
        }
    }
    // 然后对每一行进行傅里叶变换
    let Y = new Array(columnLength);
    for(let i = 0; i < columnLength; i++){
        Y[i] = IFFT(X[i]);
    }
    return Y;
}



function transpose(
    X: number[][]
): number[][]{
    let N = X.length;
    let Y = new Array(N);
    for(let i = 0; i < N; i++){
        Y[i] = new Array(N);
        for(let j = 0; j < N; j++){
            Y[i][j] = X[j][i];
        }
    }
    return Y;
}

function transposeComplex(
    X: Complex[][]
): Complex[][]{
    let N = X.length;
    let Y = new Array(N);
    for(let i = 0; i < N; i++){
        Y[i] = new Array(N);
        for(let j = 0; j < N; j++){
            Y[i][j] = X[j][i];
        }
    }
    return Y;
}



/**
 * 获取傅里叶变换结果的振幅
 * @param fftResult 
 * @returns 
 */
export function FFTImag(
    fftResult: Complex[]
): number[]
{
    let N = fftResult.length;
    let imag = new Array(N);
    for(let i = 0; i < N; i++){
        imag[i] = fftResult[i].imag;
    }
    return imag;
}

export function FFTImag2(
    fftResult: Complex[][],
    mode: 'row' | 'column' = 'row'
): number[][]
{
    if(mode === 'row'){
        return FFTImagRow(fftResult);
    }else{
        return transpose(FFTImagRow(transposeComplex(fftResult)));
    }
}

/**
 * 获取傅里叶变换结果的振幅
 * @param fftResult 
 * @returns 
 */
export function FFTReal(
    fftResult: Complex[]
): number[]
{
    let N = fftResult.length;
    let imag = new Array(N);
    for(let i = 0; i < N; i++){
        imag[i] = fftResult[i].real;
    }
    return imag;
}


function FFTRealRow(
    fftResult: Complex[][]
): number[][]
{
    let N = fftResult.length;
    let Y = new Array(N);
    for(let i = 0; i < N; i++){
        Y[i] = FFTReal(fftResult[i]);
    }
    return Y;
}

export function FFTReal2(
    fftResult: Complex[][],
    mode: 'row' | 'column' = 'row'
): number[][]
{
    if(mode === 'row'){
        return FFTRealRow(fftResult);
    }else{
        return transpose(FFTRealRow(transposeComplex(fftResult)));
    }
}


// 二维矩阵中心化 
export function FFTShift(
    fftResult: Complex[][],
): Complex[][]
{
    // 将四角的值移动到中心 将中心的值移动到四角 以便于频谱分析
    let N = fftResult.length;
    let Y = new Array(N);
    for(let i = 0; i < N; i++){
        Y[i] = new Array(N);
        for(let j = 0; j < N; j++){
            Y[i][j] = fftResult[(i + N / 2) % N][(j + N / 2) % N];
        }
    }
    return Y;
}

