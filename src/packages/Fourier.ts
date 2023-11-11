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
type Complex = {real: number, imag: number};

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
function conj(a: {real: number, imag: number}){
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
 * @returns - 傅里叶变换结果
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
