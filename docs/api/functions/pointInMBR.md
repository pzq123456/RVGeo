[rvgeo](../index.md) / pointInMBR

# pointInMBR()

```ts
function pointInMBR(point, mbr): boolean
```

Defined in: [src/geometry/MBR.ts:110](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/geometry/MBR.ts#L110)

判断点是否在 MBR 内（默认情况）

## Parameters

### point

\[`number`, `number`\]

点

### mbr

[`MBR`](../type-aliases/MBR.md)

最小外包矩形

## Returns

`boolean`

返回是否在 MBR 内 在则返回 true 不在则返回 false
