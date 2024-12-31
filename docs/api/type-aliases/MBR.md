[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / MBR

# Type Alias: MBR

> **MBR**: \[`number`, `number`, `number`, `number`\]

Defined in: src/geometry/MBR.ts:21

- MBR 中的 minX, minY, maxX, maxY 的排序在某些情况下会有歧义，尤其是在地理坐标系的语境下。（譬如跨越了反子午圈的情况（斐济群岛））
- 所以允许 minX > maxX 遇到这样的情况时，需要进行特殊处理。
