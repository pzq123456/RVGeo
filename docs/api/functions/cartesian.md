[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / cartesian

# Function: cartesian()

> **cartesian**(`spherical`, `toRadians`): \[`number`, `number`, `number`\]

Defined in: src/math/vector.ts:65

将球坐标系下的向量 [longitude, latitude]（弧度制）转换为三维笛卡尔坐标系下的向量 [x, y, z]。
- This function takes spherical coordinates [longitude, latitude] and converts them to a 3D Cartesian vector [x, y, z].

## Parameters

### spherical

\[`number`, `number`\]

### toRadians

`boolean` = `true`

默认输入为角度，如果输入为弧度，需要设置 toRadians 为 false。

## Returns

\[`number`, `number`, `number`\]
