[rvgeo](../index.md) / iterPolygonEdge

# iterPolygonEdge()

```ts
function iterPolygonEdge(polygon, callback): void
```

Defined in: [src/topology/utils.ts:205](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/topology/utils.ts#L205)

迭代访问多边形的边（不重复访问）

## Parameters

### polygon

\[`number`, `number`\][]

多边形 [[x1,y1],[x2,y2],...

### callback

(`p1`, `p2`) => `void`

回调函数

## Returns

`void`
