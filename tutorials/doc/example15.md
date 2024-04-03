# Example 15 FFT on 2D Grid | 二维傅里叶变换
![example15](/RVGeo/tutorials/doc/imgs/e15-1.png)

## 1D FFT and IFFT
```ts
  const drawSample = RVGeo.Renderer.drawSample;
  const drawSample2 = RVGeo.Renderer.drawSample2;
  const sample = RVGeo.Fourier.sample;
  const FFT  = RVGeo.Fourier.FFT;
  const IFFT = RVGeo.Fourier.IFFT;
  
  let data = sample(Math.sin, 64, 0, 1,1,3);
  let data4 = sample(Math.sin, 64, 0, 1,4);
  let data7 = sample(Math.sin, 64, 0, 1,7,0.5);
  data.forEach((d,i) => {
    data[i] = d + data4[i] + data7[i];
  });
  drawSample(canvas, {x: 0, y: 0, w: 256, h: 128},data); // oruignal
  // FFT
  let fft = FFT(data);
  let imagfft = fft.map((c) => Math.abs(c.imag)); // get the abs of imaginary part
  drawSample2(canvas, {x: 0, y: 0, w: 256, h: 128},imagfft,{color: 'red',width: 1,backgroundColor: 'rgba(255,255,255,0.3)'});
  let ifft = IFFT(fft);
  let realifft = ifft.map((c) => c.real);
  drawSample(canvas, {x: 0, y: 0, w: 256, h: 128},realifft,{color: 'green',width: 1,backgroundColor: 'rgba(255,255,255,0.3)'});
```

## 2D FFT
就是先做行一维 FFT 再做列一维 FFT
```ts
/**
 * 快速傅里叶变换 real to complex
 * - 先对每一行进行傅里叶变换，再对每一列进行傅里叶变换，最后中心化
 * @param X - 采样结果
 * @returns - 傅里叶变换结果,作为复数可同时表示振幅和相位。
 */
export function fastFFT2(X: number[][]): Complex[][]{
    let fft = FFT2(X);
    let fft2 = fft.map((row) => row.map((c) => Math.sqrt(c.real*c.real + c.imag*c.imag)));
    let fft3 = FFTShift(FFT2(fft2,"column")); // 二维矩阵中心化
    return fft3;
}
```
> 注意：
> - 二维傅里叶变换的结果是复数，可以同时表示振幅和相位。为此，我们需要求出复数的模长，即复数的绝对值。
> - 先行后列和先列后行会有差别，具体看下两图：默认先行后列，如有需要可以自行修改。
> - 先行后列
> - ![example15](/RVGeo/tutorials/doc/imgs/e15-2.png)
> - 先列后行
> - ![example15](/RVGeo/tutorials/doc/imgs/e15-3.png)
> - 修改方案： 可自行调用 FFT2 方法封装，以下示例为先列后行
> ```js
> let fft = FFT2(X,"column");
> let fft2 = fft.map((row) => row.map((c) => Math.sqrt(c.real*c.real + c.imag*c. imag)));
> let fft3 = FFTShift(FFT2(fft2,"row")); // 二维矩阵中心化
> return fft3;
> ```

## example
```js
  const fastFFT2 = RVGeo.Fourier.fastFFT2; // 2D快速傅里叶变换
  const drawGrid2d = RVGeo.Renderer.drawGrid2d; // 2D网格绘制
  const Grid = RVGeo.Coverage.Grid; // 网格类
  const Sin3D = RVGeo.Noise.Sin3D; // 3D正弦波噪声生成器
  const Perlin = RVGeo.Noise.Perlin; // Perlin 噪声生成器
  const dampedSin3D = RVGeo.Noise.dampedSin3D; // 3D阻尼正弦波噪声生成器

  let data = []; // 二维噪声数据
  data.push(sample(128,0.05,0.05,Perlin));
  data.push(sample(128,0.05,0.5,Perlin));
  data.push(sample(128,0.01,0.01,Perlin));
  data.push(sample(128,0.1,0.1,Sin3D));
  data.push(sample(128,1,1,Sin3D));
  data.push(sample(128,0.05,0.01,Sin3D));
  data.push(sample(128,0.5,0.1,Perlin));
  data.push(sample(128,1,1,dampedSin3D));

  let fft = [] as number[][][]; // 二维傅里叶变换结果
  data.forEach((d) => {
    let tmp = fastFFT2(d);
    fft.push(tmp.map((row) => row.map((c) => Math.sqrt(c.real*c.real + c.imag*c.imag)))); // 模值
  });

  let grid = [] as RVGeo.Coverage.Grid[]; // 二维网格
  data.forEach((d) => {
    grid.push(new Grid(myMBR1, [d]));
  });

  let fftGrid = [] as RVGeo.Coverage.Grid[]; // 二维傅里叶变换网格
  fft.forEach((d) => {
    fftGrid.push(new Grid(myMBR1, [d]));
  });

  // 1024 * 1024
  for(let i = 0; i < 4; i++){
    drawGrid2d(canvas, data[i], {x: 0, y: i*256, w: 256, h: 256}, grid[i].getBandStatistics(0), RVGeo.Colors.simpleColorBandFactory(RVGeo.Colors.stretchType.linear));
    drawGrid2d(canvas, fft[i], {x: 256, y: i*256, w: 256, h: 256}, fftGrid[i].getBandStatistics(0), RVGeo.Colors.simpleColorBandFactory(RVGeo.Colors.stretchType.linear));
  }

  for(let i = 4; i < 8; i++){
    drawGrid2d(canvas, data[i], {x: 512, y:(i - 4)*256, w: 256, h: 256}, grid[i].getBandStatistics(0), RVGeo.Colors.simpleColorBandFactory(RVGeo.Colors.stretchType.linear));
    drawGrid2d(canvas, fft[i], {x: 768, y:(i - 4)*256, w: 256, h: 256}, fftGrid[i].getBandStatistics(0), RVGeo.Colors.simpleColorBandFactory(RVGeo.Colors.stretchType.linear));
  }

  function sample(size: number,x: number,y: number, sampleFunc: (x: number, y: number) => number){
    let data = [];
    for(let i = 0; i < size; i++){
      let tmp = [];
      for(let j = 0; j < size; j++){
        let noise = sampleFunc(i*x - size/2, j*y - size/2); // 生成噪声0-1
        tmp.push(noise);
      }
      data.push(tmp);
    }
    return data;
  }
```

## References
1. [Video](https://www.youtube.com/watch?v=h7apO7q16V0)
2. [Code](https://github.com/turbomaze/JS-Fourier-Image-Analysis/tree/master)
3. [Python Programming And Numerical Methods: A Guide For Engineers And Scientists](https://pythonnumericalmethods.berkeley.edu/notebooks/Index.html)
4. [主要参考代码](https://github.com/nevosegal/fftjs/blob/master/src/fft.js)