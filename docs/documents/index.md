# Tutorial: Using RVGeo and BLDraw for Geospatial Visualization

| 名称       | 徽章                                                                                                                                 | 链接                                      |
|------------|--------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|
| NPM        | [![](https://img.shields.io/npm/v/rvgeo.svg?label=NPM&logo=npm&color=CB3837)](https://www.npmjs.com/package/rvgeo)                   | [NPM](https://www.npmjs.com/package/rvgeo) |
| Downloads  | [![](https://img.shields.io/npm/dm/rvgeo?label=Downloads&color=CB3837&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKoSURBVEiJ7ZZLTBNRFIb%2FedDS6UNKVQgZAkJTlJdACoZgGhKj0QSNwUVxIbrRhSaasCJh58atcaExkYXogoRISF2UxJVReYkWK6gTB9KK1bZjBQlMNcz0ujAlJe3QamSl%2F%2B7m3PP995w592aAbRaVy6bqanujycZeSa4TKlGXo2qvKIpStlw2FwOdjnG5zvFnS%2BuMAIDJoci3icHoLQB%2FxwAATDYWBSX5AADOwiZyzaNz3fin%2Bm%2FwDxhojSlTW19xgaXz9ACgqIpr05WkQOWb6dMNDVUHAUBJrP%2BY9S%2FcBpA2vpo3udHpeNx0sqiNrzExFEVQWm8Gq%2FtVsLysIPxeBgB8nFtVfZ7o2MspwZWJo9kiKSwf9Xujs9YSHfY4d2zAAYArYFHRbEEhr4ffK71VgsvHtDiMVmBlZUXRMeaRRd9qZ%2B0RmzXVAAASCsHA5XcLkWC8XQiFlrQ4W37kQCAQlhbXOwd7hVBCIZvg%2FlFpms6nnYFAILwVQ7OCpGKxWMRssIhRUT60r73QCACeawuSbyTWN%2FXkzYts%2BRtTVNfc9ojhOCtREsxaJHhRFMXxZMzvEz163V7H0%2Fuf%2BmhC6KBv7cbMjDCUCrLb7a3GorKbFEurqiwvvX7%2B7PAmp5YO93yPQEhXv5c4yivdmU7jbK0acLY57maKOcor3V39XtIjENLS4Z5PqyApmmHA6jkuE2R6XOjW6ARYPcfRTHrH0wxsNU5wFfarDcXFl7RgmZRnMO0urG3ewiChqgCQZ7HCdX2YB8D%2FjkGqiKqoaQbxr1%2BmPowO8Tv3HzCAYcDtKoEcDQGEgCviEZc%2Bg6hKVrj0aiL%2BfSk2mVynPhV0dVPLeZ3B2ApCkcoTZ4bnHw6cAoCy490Pgp57naBI1p%2BE9TV5bG5m8g4yvEvbop%2BZL%2FJtWVlNhAAAAABJRU5ErkJggg%3D%3D)](https://www.npmjs.com/package/rvgeo) | [Downloads](https://www.npmjs.com/package/rvgeo) |
| jsDelivr   | [![](https://data.jsdelivr.com/v1/package/npm/rvgeo/badge)](https://www.jsdelivr.com/package/npm/rvgeo)                              | [jsDelivr](https://www.jsdelivr.com/package/npm/rvgeo) |


This tutorial provides a step-by-step guide on how to use the `RVGeo` and `BLDraw` libraries to visualize geospatial data on a map. The examples cover various geospatial operations such as drawing points, lines, polygons, and more complex structures like Voronoi diagrams and Delaunay triangulations.

## Usage

::: tip
download the `BLDraw.ts` from [here](https://github.com/pzq123456/RVGeo/blob/main/src/BLDraw.ts) and put it in the same folder as the index.ts
:::

### Browser
``` html
<script type="module"> 
  import * as rvgeo from 'https://cdn.jsdelivr.net/npm/rvgeo@2.0.91/+esm'
</script>
```
- test: 
```js
  console.log(rvgeo);
```
- result:
``` bash
Module
CGUtils: Module {
MBRIntersectMBR: function, PointInsidePolygon: function, PointOutsideMBR: function, calculateMBR: function, cross: function, …}
#...
```
### npm

``` bash
npm install rvgeo
```

```js
import * as RVGeo from 'rvgeo'
```

## Prerequisites

Before starting, ensure you have the following:

- A basic understanding of JavaScript and TypeScript.
- A web environment set up with a canvas element for rendering.
- The `RVGeo` and `BLDraw` libraries imported into your project.
## Setup

First, import the necessary libraries and set up the map:

```javascript
import { drawCircle2BLMap, drawEdgeMap2BLMap, drawGridLines2BLMap, drawLabel, drawLineString2BLMap, drawMultiPoint2BLMap, drawPlaneMBR2BLMap, drawPlaneMPS2BLMap, drawPoint2BLMap, drawPolygon2BLMap, drawQuadTree2BLMap, drawRectangle2BLMap, drawTriangleEdge2BLMap, innerIcon, removeAllOverlay } from './src/BLDraw.ts';
import * as BLDraw from './src/BLDraw.ts';
import { createToolBar } from './helpers/toolBar.ts';
import { mockPoints } from './src/Mock.ts';
import * as RVGeo from './src/index.ts';
import axios from 'axios';
import { createEditor } from './editor.js';

window.RVGeo = RVGeo;
window.BLDraw = BLDraw;

const canvas = document.getElementById('myCanvas0') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

declare const BMapGL: any;
let map = new BMapGL.Map("allmap");
map.centerAndZoom(new BMapGL.Point(-105.7220660521329, 39.0119712026557), 8);
map.enableScrollWheelZoom(true);
var scaleCtrl = new BMapGL.ScaleControl();
map.addControl(scaleCtrl);

window.map = map;
```

## Example 1: Drawing Multiple Points and Their Centroid

This example demonstrates how to draw multiple points on the map and their centroid.

```javascript
function example1() {
  removeAllOverlay(map);
  let icon = innerIcon(0);
  drawPoint2BLMap(mps.centroid(), map);
  drawMultiPoint2BLMap(mps, map, icon);
}
```

## Example 2: Drawing a Delaunay Triangulation

This example shows how to draw a Delaunay triangulation from a set of points.

```javascript
function example2() {
  removeAllOverlay(map);
  let del = RVGeo.Delaunator.from(mps.toXY());
  let trs = RVGeo.fillIndexArray(del.getTriangleIndices(), mps.coordinates);
  let trc = RVGeo.triangleCenter(mps.toXY(), del, 0);
  drawPoint2BLMap(trc, map);
  drawTriangleEdge2BLMap(trs, map, { strokeColor: 'blue' });
  let res = RVGeo.fillIndexArray(del.getHull(), mps.coordinates);
  drawPolygon2BLMap([res], map, { fillColor: 'gray' });
  drawMultiPoint2BLMap(mps, map);
}
```

## Example 3: Drawing a Convex Hull

This example demonstrates how to draw the convex hull of a set of points.

```javascript
function example3() {
  removeAllOverlay(map);
  let ps2 = RVGeo.convexHull(ps);
  let ls = RVGeo.toLineString(ps2);
  let polygon = new RVGeo.Polygon([ls.coordinates]);
  let rect = polygon.bbox;
  drawPolygon2BLMap(polygon, map);
  drawRectangle2BLMap(rect, map);
}
```

## Example 4: Calculating Area

This example calculates the area of a polygon representing the state of Colorado.

```javascript
function example4() {
  let Colorado = RVGeo.toLineString(RVGeo.mbrToPolygon(myMBR1).map((p) => new RVGeo.Point([p[0], p[1]])));
  let area = RVGeo.EPSG3857.area(Colorado.coordinates);
  let area2 = RVGeo.EPSG3857.planeArea(Colorado.coordinates);
  alert("Colorado area (on sphere): " + area + " m2\n" + "Colorado area (in plane): " + area2 + " m2\n" + "Colorado area (real): 268,627 km2\n");
}
```

## Example 5: Drawing a Voronoi Diagram

This example demonstrates how to draw a Voronoi diagram from a set of points.

```javascript
function example5() {
  removeAllOverlay(map);
  let points = [
    [-112.2941812737089, 42.98773501092674],
    [-112.2941812737089, 34.07077082095674],
    [-98.06343559228408, 34.07077082095674],
    [-98.06343559228408, 42.98773501092674],
    [-112.2941812737089, 42.98773501092674]
  ] as [number, number][];

  let myMps = new RVGeo.MultiPoint(points);
  let del = RVGeo.Delaunator.from(mps.toXY().concat(myMps.toXY()));
  let vor = new RVGeo.Voronoi(del);
  let voi = vor.cutVoronoiByMBR(myMBR1);
  drawEdgeMap2BLMap(voi, map, { strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 }, true);
}
```

## Example 6: Polygon Intersection

This example shows how to find the intersection of two polygons and draw the result.

```javascript
function example6() {
  removeAllOverlay(map);
  let rect1 = [
    [-108.43658107534337, 40.29976780112503],
    [-108.43658107534337, 38.55075512778069],
    [-105.67716914258902, 38.55075512778069],
    [-105.67716914258902, 40.29976780112503]
  ] as [number, number][];
  let rect2 = [
    [-107.34797321677699, 39.68665076371036],
    [-107.34797321677699, 37.315553928222414],
    [-103.90893321662871, 37.315553928222414],
    [-103.90893321662871, 39.68665076371036]
  ] as [number, number][];

  drawLineString2BLMap(rect1, map, { strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 }, true);
  drawLineString2BLMap(rect2, map, { strokeColor: "red", strokeWeight: 2, strokeOpacity: 0.5 }, true);
  let res = RVGeo.intersectionPolygon(rect1, rect2);
  drawPolygon2BLMap([res], map, { fillColor: 'red' });
}
```

## Example 7: Line Segment Intersection

This example demonstrates how to find the intersection point of two line segments and draw it on the map.

```javascript
function example7() {
  removeAllOverlay(map);
  let line1 = [
    [-108.742669882491, 40.72721830758718],
    [-102.29819316274084, 37.2873641721976]
  ] as [number, number][];
  let line2 = [
    [-107.97399126074589, 37.59766864452851],
    [-102.641058204481, 40.664014824200905]
  ] as [number, number][];
  let line3 = [
    [-102.3965685720985, 41.613436668810465],
    [-101.58822187178613, 37.428342894987836]
  ] as [number, number][];

  drawLineString2BLMap(line1, map, { strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 }, true);
  drawLineString2BLMap(line2, map, { strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 }, true);
  drawLineString2BLMap(line3, map, { strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 }, true);
  let insPoi = RVGeo.intersection(line1[0], line1[1], line2[0], line2[1]) as [number, number];
  drawPoint2BLMap(insPoi, map);
}
```

## Example 8: Point-in-Line Relationship

This example checks if a point lies on a line segment and visualizes the result.

```javascript
function example8() {
  removeAllOverlay(map);
  let line = [
    [-105.84580648407761, 40.23546027049062],
    [-105.98171384883719, 37.38228706395721]
  ] as [number, number][];

  let myIcon1 = innerIcon(0);
  let outPoi = [-107.11904390129598, 39.05128102775606] as [number, number];
  let myIcon2 = innerIcon(1);
  let inPoi = [-104.51534491327676, 38.97346949562407] as [number, number];
  let res1 = RVGeo.pointInEdge(outPoi, line[0], line[1]);
  let res2 = RVGeo.pointInEdge(inPoi, line[0], line[1]);

  drawLineString2BLMap(line, map, { strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 }, true);
  drawPoint2BLMap(outPoi, map, myIcon1);
  drawPoint2BLMap(inPoi, map, myIcon2);
  alert("outPoi: " + res1 + "\n" + "inPoi: " + res2);
}
```

## Example 9: Drawing Grids and Contours

This example demonstrates how to draw grids and contours from geospatial data.

```javascript
function example9() {
  const drawProgress = RVGeo.drawProgress;
  const progressBar = { x: 924, y: 1004, w: 100, h: 20 };
  drawProgress(canvas, progressBar, 0);

  const drawGrid2d = RVGeo.drawGrid2d;
  const trueColorBandFactory = RVGeo.trueColorBandFactory;
  const drawTrueColorGrid2d = RVGeo.drawTrueColorGrid2d;

  let URL = 'exa2.tif';
  let URL2 = 'exa.tif';
  let rect = { x: 512, y: 0, w: 512, h: 512 };
  let rect2 = { x: 512, y: 512, w: 512, h: 512 };

  getShowTif(URL, rect);
  getShowTif(URL2, rect2);

  function getShowTif(URL: string, rect: { x: number, y: number, w: number, h: number }) {
    GeoTIFF.fromUrl(URL).then((tif: any) => {
      tif.getImage().then((image: any) => {
        let width = image.getWidth();
        image.readRasters().then((rasters: any) => {
          let data = [] as number[][][];
          let bands = [3, 2, 1];
          bands.forEach((band) => {
            data.push(parseData2(rasters[band], width, true, 256));
          });
          let grid = new RVGeo.Grid(myMBR1, data);
          grid.fillInvalidValue(0);
          grid.fillInvalidValue(1);
          grid.fillInvalidValue(2);
          let myTrueColorBand = trueColorBandFactory(RVGeo.stretchType.square);
          drawTrueColorGrid2d(canvas, grid, [0, 1, 2], rect, myTrueColorBand);
          drawProgress(canvas, progressBar, 100);
        });
      });
      drawProgress(canvas, progressBar, 50);
    });
  }

  axios.get('dem.csv').then((res) => {
    let innerMBR = [
      -107.19241981061282,
      37.96392802178495,
      -104.23896455039352,
      39.75362886925538
    ] as [number, number, number, number];
    let data = parseData(res.data);
    let grid = new RVGeo.Grid(myMBR1, [data]);
    let testPoi = [-105.723781221762, 38.87054575208597] as [number, number];
    let inMBR = grid.ConvertToGridMBR(innerMBR) as RVGeo.MBR;
    let subdrid = grid.getSubGrid(inMBR);
    let grid2 = new RVGeo.Grid(innerMBR, subdrid);
    drawGridLines2BLMap(grid2.MBR, grid2.rows, grid2.cols, map, { strokeColor: "red", strokeWeight: 2, strokeOpacity: 0.5 });
    drawLineString2BLMap(RVGeo.mbrToPolygon(myMBR1), map, { strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 }, true);
    drawPoint2BLMap(testPoi, map);
    drawLabel(testPoi, `${grid.getGridCoord(testPoi)}`, map);
    drawGridLines2BLMap(grid.MBR, grid.rows, grid.cols, map, { strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 });
    let myPseudoColorBand = RVGeo.pseudoColorBandFactory(RVGeo.stretchType.linear);
    drawGrid2d(canvas, data, { x: 0, y: 0, w: 512, h: 512 }, grid.getBandStatistics(0), myPseudoColorBand);
    const stretchType = RVGeo.stretchType;
    let postions = [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1]
    ]
    for (let type in stretchType) {
      if (parseInt(type) > 3) break;
      let colorband = RVGeo.simpleColorBandFactory(parseInt(type));
      let postion = postions[parseInt(type)];
      drawGrid2d(canvas, data, { x: postion[0] * 256, y: postion[1] * 256 + 256 * 2, w: 256, h: 256 }, grid.getBandStatistics(0), colorband);
    }
  });
}
```

## More concepts
1. [changeLog](./changelog.md)
2. [core](./core.md)