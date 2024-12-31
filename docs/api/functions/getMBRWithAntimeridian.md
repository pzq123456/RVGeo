[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / getMBRWithAntimeridian

# Function: getMBRWithAntimeridian()

> **getMBRWithAntimeridian**(`points`): [`MBR`](../type-aliases/MBR.md)

Defined in: src/geometry/MBR.ts:164

计算多点的最小外包矩形（跨越反子午线的情况）
- 会自动计算并选择面积最小的情况
- get MBR with antimeridian

## Parameters

### points

\[`number`, `number`\][]

多点

## Returns

[`MBR`](../type-aliases/MBR.md)
