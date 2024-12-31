[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / spherical

# Function: spherical()

> **spherical**(`cartesian`): \[`number`, `number`\]

Defined in: src/math/vector.ts:54

将三维笛卡尔坐标系下的向量 [x, y, z] 转换为球坐标系下的向量 [lat, lon]（弧度制）。
This function takes a 3D Cartesian vector [x, y, z] and converts it to spherical coordinates [lat, lon].

## Parameters

### cartesian

\[`number`, `number`, `number`\]

## Returns

\[`number`, `number`\]

## Example

```ts
spherical([1, 0, 0]); // [0, 0]
spherical([0, 1, 0]); // [1.5707963267948966, 1.5707963267948966]
// you need to convert the result to degrees if you want to use it in degrees
spherical([0, 1, 0]).map(x => x * 180 / Math.PI); // [90, 90]
```
