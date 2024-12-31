[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / cutPolygonByMBR

# Function: cutPolygonByMBR()

> **cutPolygonByMBR**(`polygon`, `mbr`): \[`number`, `number`\][] \| `null`

Defined in: src/topology/utils.ts:117

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
