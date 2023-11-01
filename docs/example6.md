# Example6 多边形求交 Polygon Intersection
```js
function example6(){ // 多边形求交
  removeAllOverlay(map);
  let rect1 = [
    [-108.43658107534337,  40.29976780112503],[-108.43658107534337,  38.55075512778069],[-105.67716914258902,  38.55075512778069],[-105.67716914258902,  40.29976780112503]
  ] as [number, number][];
  let rect2 = [
    [-107.34797321677699,  39.68665076371036],[-107.34797321677699,  37.315553928222414],[-103.90893321662871,  37.315553928222414],[-103.90893321662871,  39.68665076371036]
  ] as [number, number][];
  // draw rectangle
  drawLineString2BLMap(rect1, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 },true);
  drawLineString2BLMap(rect2, map,{ strokeColor: "red", strokeWeight: 2, strokeOpacity: 0.5 },true);
  let res = RVGeo.CGUtils.intersectionPolygon(rect1, rect2);

  drawPolygon2BLMap([res], map, {fillColor: 'red'});
  drawMultiPoint2BLMap(RVGeo.Meta.createPointListFromArr(res), map);
}
```