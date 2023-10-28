# Example1 绘制多点及质心 Draw MultiPoint and its Centroid

```js
let ps = mockPoints(30, myMBR1);
let mps = new RVGeo.Geometry.MultiPoint(ps);

function example1(){ // 绘制多点及其重心
  removeAllOverlay(map);
  let icon = innerIcon(0);
  // console.log(mps.calculateCentroid());
  drawPoint2BLMap(mps.calculateCentroid(), map);
  drawMultiPoint2BLMap(mps, map, icon);
}
```
- 首先，我们生成了30个随机点，然后将其转换为多点类型的几何对象。
- 然后，我们绘制了多点及其重心。

- First, we generate 30 random points, and then convert them to a multi-point type geometry object.
- Then, we draw the multi-point and its centroid.