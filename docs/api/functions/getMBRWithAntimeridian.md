[rvgeo](../index.md) / getMBRWithAntimeridian

# getMBRWithAntimeridian()

```ts
function getMBRWithAntimeridian(points): MBR
```

Defined in: [src/geometry/MBR.ts:164](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/MBR.ts#L164)

计算多点的最小外包矩形（跨越反子午线的情况）
- 会自动计算并选择面积最小的情况
- get MBR with antimeridian

## Parameters

### points

\[`number`, `number`\][]

多点

## Returns

[`MBR`](../type-aliases/MBR.md)
