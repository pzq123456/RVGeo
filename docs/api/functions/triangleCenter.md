[rvgeo](../index.md) / triangleCenter

# triangleCenter()

```ts
function triangleCenter(
   points, 
   delaunay, 
   t, 
   projection): [number, number]
```

Defined in: [src/triangulation/Delaunay.ts:610](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/triangulation/Delaunay.ts#L610)

计算三角形的外心（对于 Delauany 三角剖分的结果数组）

## Parameters

### points

`any`

原始点数组（墨卡托）

### delaunay

`any`

Delauany 三角剖分

### t

`any`

三角形的索引

### projection

(`point`) => \[`number`, `number`\]

## Returns

\[`number`, `number`\]
