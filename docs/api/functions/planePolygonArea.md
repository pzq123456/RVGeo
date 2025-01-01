[rvgeo](../index.md) / planePolygonArea

# planePolygonArea()

```ts
function planePolygonArea(points, radius): number
```

Defined in: [src/math/measuring.ts:40](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/math/measuring.ts#L40)

- 使用 Shoelace Theorem 求多边形面积
- calculate the area of a polygon using the Shoelace Theorem

## Parameters

### points

可以为点类型数组、LineString 类型或者二维数组（需要为墨卡托平面坐标系下）
- 需确保点按照顺时针或者逆时针排列 
- need to ensure that the points are arranged clockwise or counterclockwise

\[`number`, `number`\][] | [`LineString`](../classes/LineString.md) | [`Point`](../classes/Point.md)[]

### radius

`number` = `1`

## Returns

`number`
