[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / fastFFT2

# Function: fastFFT2()

> **fastFFT2**(`X`): [`Complex`](../type-aliases/Complex.md)[][]

Defined in: src/math/fourier.ts:136

快速傅里叶变换 real to complex
- 先对每一行进行傅里叶变换，再对每一列进行傅里叶变换，最后中心化

## Parameters

### X

`number`[][]

采样结果

## Returns

[`Complex`](../type-aliases/Complex.md)[][]

- 傅里叶变换结果,作为复数可同时表示振幅和相位。
