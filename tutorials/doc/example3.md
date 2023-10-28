# Example3 绘制凸包 Draw Convex Hull
```js
function example3(){ // 绘制凸包
  removeAllOverlay(map)
  let ps2 = RVGeo.Shell.convexHull(ps);
  let ls = new RVGeo.Geometry.LineString(ps2);
  let polygon = new RVGeo.Geometry.Polygon([ls]);
  let rect = polygon.getMBR();
  drawPolygon2BLMap(polygon, map);
  drawRectangle2BLMap(rect, map);
}
```

## 说明
- 首先，我们使用 `RVGeo.Shell.convexHull` 函数生成了凸包。
- 然后，我们将凸包转换为多边形类型的几何对象，并绘制在地图上。
- 最后，我们将凸包的最小外接矩形绘制在地图上。

## Description
- First, we use the `RVGeo.Shell.convexHull` function to generate the convex hull.
- Then, we convert the convex hull to a polygon type geometry object and draw it on the map.
- Finally, we draw the minimum bounding rectangle of the convex hull on the map.
