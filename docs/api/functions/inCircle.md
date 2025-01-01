[rvgeo](../index.md) / inCircle

# inCircle()

```ts
function inCircle(
   p1, 
   p2, 
   p3, 
   p4): 1 | -1 | 0
```

Defined in: [src/topology/utils.ts:396](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/topology/utils.ts#L396)

快速计算最后一点与前三点组成的圆的关系 calculate the relative position of the last point to the circle formed by the first three points
- Returns 1 if point d is outside the circle passing through a, b, and c
- 返回 1 如果点 d 在通过 a、b 和 c 的圆外
- Returns -1 if point d is inside the circle
- 返回 -1 如果点 d 在圆内
- Returns 0 if the four points are cocircular
- 返回 0 如果四个点共圆

## Parameters

### p1

[`Point`](../classes/Point.md) | \[`number`, `number`\]

### p2

[`Point`](../classes/Point.md) | \[`number`, `number`\]

### p3

[`Point`](../classes/Point.md) | \[`number`, `number`\]

### p4

[`Point`](../classes/Point.md) | \[`number`, `number`\]

## Returns

`1` \| `-1` \| `0`
