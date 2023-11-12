# Example4 计算面积 Measuration.SpherePolygonArea
```js
function example4(){ // 计算面积
  let Colorado = new RVGeo.Geometry.LineString(RVGeo.Geometry.mbrToPolygon(myMBR1).map((p) => new RVGeo.Geometry.Point(p[0],p[1])) as RVGeo.Geometry.Point[]); // 科罗拉多州边界（粗略）
  let area = RVGeo.Measuration.SpherePolygonArea(Colorado);
  let area2 = RVGeo.Measuration.PlanePolygonArea(Colorado);
  alert("Colorado area (on sphere): " + area + " km2\n" + "Colorado area (real): 268,627 km2\n" + "Colorado area (in plane): " + area2 + " km2\n");
}
```
- 该函数可以直接接受经纬度坐标表示的多边形并直接在球面上计算面积。与之功能相同的函数是 `RVGeo.Measuration.PlanePolygonArea` 该函数可首先将经纬度坐标表示的多边形投影到平面上，然后在平面上计算面积。考虑到投影变形，对于高纬度地区建议使用 `RVGeo.Measuration.SpherePolygonArea` 函数。
- This function can directly accept a polygon represented by longitude and latitude coordinates and directly calculate the area on the sphere. The function with the same function is `RVGeo.Measuration.PlanePolygonArea`. This function can first project the polygon represented by longitude and latitude coordinates onto the plane, and then calculate the area on the plane. Considering the projection deformation, it is recommended to use the `RVGeo.Measuration.SpherePolygonArea` function for high-latitude areas.