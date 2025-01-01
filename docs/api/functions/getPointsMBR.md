[rvgeo](../index.md) / getPointsMBR

# getPointsMBR()

```ts
function getPointsMBR(points): MBR
```

Defined in: [src/geometry/MBR.ts:91](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/MBR.ts#L91)

计算多点的最小外包矩形（默认情况）

## Parameters

### points

\[`number`, `number`\][]

多点

## Returns

[`MBR`](../type-aliases/MBR.md)

返回最小外包矩形 [minLon, minLat, maxLon, maxLat]
