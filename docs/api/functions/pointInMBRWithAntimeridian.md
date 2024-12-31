[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / pointInMBRWithAntimeridian

# Function: pointInMBRWithAntimeridian()

> **pointInMBRWithAntimeridian**(`point`, `mbr`): `boolean`

Defined in: src/geometry/MBR.ts:139

判断点是否在 MBR 内（跨越了反子午线的情况）
- 必须保 MBR 真的跨越了反子午线，否则会出现错误

## Parameters

### point

\[`number`, `number`\]

### mbr

[`MBR`](../type-aliases/MBR.md)

## Returns

`boolean`
