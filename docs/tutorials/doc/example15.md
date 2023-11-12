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


## References
1. [Video](https://www.youtube.com/watch?v=h7apO7q16V0)
2. [Code](https://github.com/turbomaze/JS-Fourier-Image-Analysis/tree/master)
3. [Python Programming And Numerical Methods: A Guide For Engineers And Scientists](https://pythonnumericalmethods.berkeley.edu/notebooks/Index.html)