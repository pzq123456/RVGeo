[rvgeo](../index.md) / ccw

# ccw()

```ts
function ccw(
   p1, 
   p2, 
   p3): number
```

Defined in: [src/topology/utils.ts:277](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/topology/utils.ts#L277)

Counter-clockwise (not robust version)
ccw 算法的非鲁棒版本
- Returns 1 if three points make a counter-clockwise turn
- 逆时针返回 1
- Returns -1 if three points make a clockwise turn
- 顺时针返回 -1
- Returns 0 if three points are collinear
- 共线返回 0

## Parameters

### p1

可以是点类型，也可以是平面坐标数组（墨卡托）

[`Point`](../classes/Point.md) | \[`number`, `number`\]

### p2

可以是点类型，也可以是平面坐标数组（墨卡托）

[`Point`](../classes/Point.md) | \[`number`, `number`\]

### p3

可以是点类型，也可以是平面坐标数组（墨卡托）

[`Point`](../classes/Point.md) | \[`number`, `number`\]

## Returns

`number`

- 1 | 0 | -1
