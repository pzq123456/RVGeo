[rvgeo](../index.md) / cutPolygonByMBR

# cutPolygonByMBR()

```ts
function cutPolygonByMBR(polygon, mbr): [number, number][] | null
```

Defined in: [src/topology/utils.ts:117](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/topology/utils.ts#L117)

使用 MBR 裁剪多边形

## Parameters

### polygon

\[`number`, `number`\][]

多边形 [[x1,y1],[x2,y2],...

### mbr

[`MBR`](../type-aliases/MBR.md)

MBR [minx,miny,maxx,maxy]

## Returns

\[`number`, `number`\][] \| `null`

- 裁剪后的多边形 或 null （若多边形与 MBR 相离）
