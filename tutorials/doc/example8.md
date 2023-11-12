# Example8 点线关系 The relationship between point and line
```js
function example8(){ // 点线关系
  removeAllOverlay(map);

  let line = [
    [
      -105.84580648407761,
      40.23546027049062
    ],
    [
      -105.98171384883719,
      37.38228706395721
    ]
  ] as [number, number][];

  let myIcon1 = innerIcon(0);
  let outPoi = [
    -107.11904390129598,
    39.05128102775606
  ] as [number, number];

  let myIcon2 = innerIcon(1);
  let inPoi = [
    -104.51534491327676,
    38.97346949562407
  ] as [number, number];
  let res1 = RVGeo.CGUtils.pointInEdge(outPoi, line[0], line[1]);
  let res2 = RVGeo.CGUtils.pointInEdge(inPoi, line[0], line[1]);

  drawLineString2BLMap(line, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 },true);
  drawPoint2BLMap(outPoi, map, myIcon1);
  drawPoint2BLMap(inPoi, map, myIcon2);
  alert("outPoi: " + res1 + "\n" + "inPoi: " + res2);
}
```