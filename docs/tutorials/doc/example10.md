# Example10 四叉树 QuadTree
```js
function example10(){ // 四叉树
  removeAllOverlay(map);
  // mps = updateData();

  let queryMBR = [
    -107.68090845026995,
    37.315553928222414,
    -106.90893321662871,
    38.664014824200905
  ] as [number, number, number, number];

  // 平面四叉树矩形范围
  let planeMBR = RVGeo.Reference.MBR2Plane(myMBR1);
  // 计算对角线距离
  let diagonal = RVGeo.Measuration.haversine([queryMBR[0],queryMBR[1]],[queryMBR[2],queryMBR[3]],"meters");
  let center = RVGeo.Reference.convertToMercator(mps.calculateCentroid(),"meters",6);
  // 查询的圆形范围
  let queryCircle = new RVGeo.Geometry.Circle(center[0],center[1], Math.round(diagonal)/2);

  let boundary = myMBR1;
  let capacity = 2;
  let qtree = new RVGeo.QuadTree.QuadTree(boundary, capacity);
  let planeTree = new RVGeo.QuadTree.QuadTree(planeMBR, capacity);

  mps.toArray().forEach((p) => qtree.insert(p));
  mps.toXYArray().forEach((p) => {
    planeTree.insert(p);
  });

  // mps.coordinates.forEach((p) => {
  //   drawLabel(p, `${p.to2DArray()}` ,map)
  // });
  drawQuadTree2BLMap(planeTree, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.1 },true);

  // query points
  // let queryPoints = qtree.queryRange(queryMBR);
  let increcs = [] as RVGeo.Geometry.MBR[];
  let queryPoints2 = planeTree.queryCircle(queryCircle,increcs);
 
  let queryPoints = qtree.queryRange(queryMBR);
  drawPlaneMPS2BLMap(queryPoints2, map);
  for(let i = 0; i < increcs.length; i++){
    drawPlaneMBR2BLMap(increcs[i], map, {strokeColor: 'blue', strokeOpacity: 0.5,});
  }
  drawCircle2BLMap(mps.calculateCentroid(), Math.round(diagonal)/2, map, {strokeColor: 'red', strokeOpacity: 0.5, fillColor: 'red', fillOpacity: 0.2});

  let icon = innerIcon(0);
  drawMultiPoint2BLMap(mps, map, icon);
  // draw query points
  drawMultiPoint2BLMap(RVGeo.Meta.createPointListFromArr(queryPoints), map, innerIcon(1));
  // draw mbr
  drawRectangle2BLMap(queryMBR, map,{
    strokeColor: "green",
    strokeWeight: 2,
    strokeOpacity: 0.5,
    fillColor: 'green',
    fillOpacity: 0.2
  });
}
```