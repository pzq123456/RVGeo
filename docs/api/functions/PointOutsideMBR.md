[rvgeo](../index.md) / PointOutsideMBR

# PointOutsideMBR()

```ts
function PointOutsideMBR(
   point, 
   mbr, 
   isPlane): boolean
```

Defined in: [src/topology/utils.ts:82](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/topology/utils.ts#L82)

判断点是否在 MBR 外（平面与经纬度坐标通用，多边形边界算作在内）
determine if a point is outside of a MBR (polygon boundary is considered inside)

## Parameters

### point

\[`number`, `number`\]

[x,y]

### mbr

[`MBR`](../type-aliases/MBR.md)

[minx,miny,maxx,maxy]

### isPlane

`boolean` = `false`

是否需要转换成平面坐标系再进行判断

## Returns

`boolean`

- true if the point is outside of the MBR
- 如果点在 MBR 外，返回 true
