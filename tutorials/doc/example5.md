# Example5 绘制Voronoi Diagram
```js
function example5(){ // 绘制Voronoi
  removeAllOverlay(map);
  let del = RVGeo.Delaunay.Delaunator.from(mps.toXYArray());
  let vor = new RVGeo.Delaunay.Voronoi(del);
  let voi = vor.cutVoronoiByMBR(myMBR1);
  drawEdgeMap2BLMap(voi, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 },true);
}
```
