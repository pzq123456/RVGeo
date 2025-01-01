[rvgeo](../index.md) / ccwRobust

# ccwRobust()

```ts
function ccwRobust(
   p1, 
   p2, 
   p3, 
   isReverse): number
```

Defined in: [src/topology/utils.ts:333](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/topology/utils.ts#L333)

robust version of ccw 封装了 robust-predicates 库的 orient2d 函数
- `Note:` unlike J. Shewchuk's original code, `all the functions in this library assume y axis is oriented downwards ↓`, so the semantics are different.
- `注意:` 与 J. Shewchuk 的原始代码不同，`本库中的所有函数都假设 y 轴向下 ↓`，因此语义不同。刚好与 ccw 相反。
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

### isReverse

`boolean` = `true`

是否反转(默认为 true 这样就会保持与 ccw 一致)

## Returns

`number`

- 1 | 0 | -1
