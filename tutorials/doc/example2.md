# Example2 绘制三角网 Draw Triangulation
```js
// 全局模拟数据（点集合）
let ps = mockPoints(30, myMBR1);
let mps = new RVGeo.Geometry.MultiPoint(ps);

function example2(){ // 绘制三角网
  removeAllOverlay(map);
  let del = RVGeo.Delaunay.Delaunator.from(mps.toXYArray()); // 传入平面坐标！
  let trs = RVGeo.Utils.fillIndexArray(del.getTriangleIndices(), mps.toArray());
  let trc = RVGeo.Delaunay.triangleCenter(mps.toXYArray(),del, 0);
  drawPoint2BLMap(trc, map);
  drawTriangleEdge2BLMap(trs, map, {strokeColor: 'blue'});
  let res = RVGeo.Utils.fillIndexArray(del.getHull(), mps.toArray());
  drawPolygon2BLMap([res],map, {fillColor: 'gray'});
  drawMultiPoint2BLMap(mps, map);
  console.log(del.getHull());
}
```

## 说明
- 首先，我们生成了30个随机点，然后将其转换为多点类型的几何对象。
- 然后，我们使用 Delaunator 算法生成了三角网。该算法目前仅能在平面坐标下使用，因此我们需要将点集合转换为平面坐标。
> - 有关三角网的数据结构可以参考 [Delaunator](https://mapbox.github.io/delaunator/)
- 然后绘制了三角网的边，值得注意的是，Delaunator 的结果是索引数组，我们需要将其转换为点集合。这也正是函数 `RVGeo.Utils.fillIndexArray` 的作用。

## Description
- First, we generate 30 random points, and then convert them to a multi-point type geometry object.
- Then, we use the Delaunator algorithm to generate a triangulation. The algorithm can currently only be used in plane coordinates, so we need to convert the point set to plane coordinates.
> - For the data structure of the triangulation, please refer to [Delaunator](https://mapbox.github.io/delaunator/)
- Then draw the edges of the triangulation. It is worth noting that the result of Delaunator is an index array, and we need to convert it to a point set. This is also the function `RVGeo.Utils.fillIndexArray`.

```js
export function drawTriangleEdge2BLMap(triangleEdge: any[][], map: any, style: Object = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5}) {

    for (let i = 0; i < triangleEdge.length; i++) {
        let blPoints = [];
        for(let j = 0; j < triangleEdge[i].length; j++) {
                blPoints.push(new BMapGL.Point(triangleEdge[i][j][0], triangleEdge[i][j][1]));
        }
        // add the first point to the end of the array
        blPoints.push(new BMapGL.Point(triangleEdge[i][0][0], triangleEdge[i][0][1]));
        let polyline = new BMapGL.Polyline(blPoints, style);   //创建折线
        map.addOverlay(polyline);   //增加折线
    }
}
```