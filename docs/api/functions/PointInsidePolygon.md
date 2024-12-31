[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / PointInsidePolygon

# Function: PointInsidePolygon()

> **PointInsidePolygon**(`point`, `polygon`): `boolean`

Defined in: src/topology/utils.ts:169

判断点是否在简单多边形内部（平面与经纬度坐标通用，多边形边界算作在内）

## Parameters

### point

\[`number`, `number`\]

[lon,lat]

### polygon

\[`number`, `number`\][]

[[lon,lat],[lon,lat],...] （不含空洞）

## Returns

`boolean`

- true if the point is inside the polygon
