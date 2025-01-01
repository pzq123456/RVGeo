[rvgeo](../index.md) / pointInMBRWithAntimeridian

# pointInMBRWithAntimeridian()

```ts
function pointInMBRWithAntimeridian(point, mbr): boolean
```

Defined in: [src/geometry/MBR.ts:139](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/MBR.ts#L139)

判断点是否在 MBR 内（跨越了反子午线的情况）
- 必须保 MBR 真的跨越了反子午线，否则会出现错误

## Parameters

### point

\[`number`, `number`\]

### mbr

[`MBR`](../type-aliases/MBR.md)

## Returns

`boolean`
