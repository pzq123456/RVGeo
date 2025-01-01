[rvgeo](../index.md) / FFT

# FFT()

```ts
function FFT(X): Complex[]
```

Defined in: [src/math/fourier.ts:107](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/math/fourier.ts#L107)

快速傅里叶变换 real to complex

## Parameters

### X

`number`[]

采样结果

## Returns

[`Complex`](../type-aliases/Complex.md)[]

- 傅里叶变换结果,作为复数可同时表示振幅和相位。
- real：相位 phase
- imag：振幅 amplitude
