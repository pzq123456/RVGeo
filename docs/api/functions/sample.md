[rvgeo](../index.md) / sample

# sample()

```ts
function sample(
   f, 
   N, 
   a, 
   b, 
   freq, 
   amp): number[]
```

Defined in: [src/math/fourier.ts:11](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/math/fourier.ts#L11)

采样函数

## Parameters

### f

(`x`) => `number`

被采样的函数

### N

`number`

采样点数

### a

`number`

采样区间左端点

### b

`number`

采样区间右端点

### freq

`number` = `1`

采样频率

### amp

`number` = `1`

采样振幅

## Returns

`number`[]

- 采样结果
