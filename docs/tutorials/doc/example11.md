# Example11 Alpha Shape 算法
```js
function example11(){ // Alpha Shape 算法
  // 存在问题
  removeAllOverlay(map);
  let alpha = 1/15000000000;
  let alphacomplex = RVGeo.Shell.alphaComplex(ps, alpha);
  console.log(alphacomplex);
  let trs = RVGeo.Utils.fillIndexArray(alphacomplex, mps.toArray());
 
  drawTriangleEdge2BLMap(trs, map, {strokeColor: 'blue'});

  // 绘制所有点
  let icon = innerIcon(0);
  drawMultiPoint2BLMap(mps, map, icon);

  // 用红色绘制凸包
  let ps2 = RVGeo.Shell.convexHull(ps);
  let ls2 = new RVGeo.Geometry.LineString(ps2);
  let polygon2 = new RVGeo.Geometry.Polygon([ls2]);
  drawPolygon2BLMap(polygon2, map, {fillColor: 'red', fillOpacity: 0.1, strokeColor: 'red', strokeOpacity: 0.5});
}
```