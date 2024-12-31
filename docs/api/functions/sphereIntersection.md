[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / sphereIntersection

# Function: sphereIntersection()

> **sphereIntersection**(`latlng11`, `latlng12`, `latlng21`, `latlng22`): \[`number`, `number`\]

Defined in: src/math/measuring.ts:159

求解两条球面线段的交点
- Given two lines on a sphere, this will return their intersection point.

## Parameters

### latlng11

\[`number`, `number`\]

### latlng12

\[`number`, `number`\]

### latlng21

\[`number`, `number`\]

### latlng22

\[`number`, `number`\]

## Returns

\[`number`, `number`\]

- 返回弧度制的交点坐标[lat, lon]

## Example

```ts
intersection([0, 0], [0, 90], [0, 45], [90, 45]); // [1.5707963267948966, 0]
// you need to convert the result to degrees if you want to use it in degrees
intersection([0, 0], [0, 90], [0, 45], [90, 45]).map(x => x * 180 / Math.PI); // [90, 0]
```
