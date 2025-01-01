[rvgeo](../index.md) / intersection

# intersection()

```ts
function intersection(
   p1, 
   p2, 
   p3, 
   p4, 
   projectionFrom, 
   projectionTo, 
   isInfine): [number, number] | null
```

Defined in: [src/topology/utils.ts:21](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/topology/utils.ts#L21)

（默认线段求交）内含投影的线段求交函数（计算开销大）

## Parameters

### p1

\[`number`, `number`\]

二维向量(x1,y1) 默认认为`经纬度坐标`

### p2

\[`number`, `number`\]

二维向量(x2,y2) 默认认为`经纬度坐标`

### p3

\[`number`, `number`\]

二维向量(x3,y3) 默认认为`经纬度坐标`

### p4

\[`number`, `number`\]

二维向量(x4,y4) 默认认为`经纬度坐标`

### projectionFrom

(`latlng`) => \[`number`, `number`\]

投影函数 （在求交之前对输入点投影） 默认为 convertToMercator

### projectionTo

(`point`) => \[`number`, `number`\]

投影函数 (在求交之后对输出点投影) 默认为 convertToWgs84

### isInfine

`boolean` = `false`

是否视作无穷线段 默认为 false 有限线段

## Returns

\[`number`, `number`\] \| `null`

- 交点 或 null
