[rvgeo](../index.md) / pointInEdge

# pointInEdge()

```ts
function pointInEdge(
   point, 
   p1, 
   p2): boolean
```

Defined in: [src/topology/utils.ts:237](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/topology/utils.ts#L237)

（前提：逆时针多边形的边）判断点是否在当前边的内部(也就是边前进方向的左侧)

## Parameters

### point

\[`number`, `number`\]

点 [x,y]

### p1

\[`number`, `number`\]

边的起点 [x,y]

### p2

\[`number`, `number`\]

边的终点 [x,y]

## Returns

`boolean`
