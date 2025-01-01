[rvgeo](../index.md) / Perlin

# Perlin()

```ts
function Perlin(X, Y): number
```

Defined in: [src/coverage/Noise.ts:78](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/Noise.ts#L78)

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
