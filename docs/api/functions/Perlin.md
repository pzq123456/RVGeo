[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / Perlin

# Function: Perlin()

> **Perlin**(`X`, `Y`): `number`

Defined in: src/coverage/Noise.ts:78

2D [Perlin](https://en.wikipedia.org/wiki/Perlin_noise) 噪声

## Parameters

### X

`number`

X 坐标 (范围 [0, 1] )

### Y

`number`

Y 坐标 (范围 [0, 1] )

## Returns

`number`

- 返回值范围在 [-1, 1] 之间

## Example

```ts
const noise = Perlin(0.5, 0.5);
console.log(noise);
```
