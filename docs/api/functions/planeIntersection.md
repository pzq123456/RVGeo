[rvgeo](../index.md) / planeIntersection

# planeIntersection()

```ts
function planeIntersection(
   p1, 
   p2, 
   p3, 
   p4, 
   projectionFrom, 
   projectionTo, 
   isInfine): [number, number] | null
```

Defined in: [src/math/measuring.ts:243](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/math/measuring.ts#L243)

也可以使用该函数计算两条线段的交点
- 现将经纬度坐标投影到平面坐标系下，然后计算交点，最后将交点投影回经纬度坐标系
- lonlats -- (projectionFrom) --> XYs -- (planeIntersection) --> XY -- (projectionTo) --> lonlat

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

`projectionFun`

投影函数 （在求交之前对输入点投影）

### projectionTo

`projectionFun`

投影函数 (在求交之后对输出点投影)

### isInfine

`boolean` = `false`

是否视作无穷线段 默认为 false 有限线段

## Returns

\[`number`, `number`\] \| `null`

- 交点 或 null
