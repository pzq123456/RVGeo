# RVGeo
[home page](https://pzq123456.github.io/RVGeo/)

## Features

- **Geospatial Drawing**: Draw points, lines, polygons, rectangles, and circles on a map.
- **Advanced Visualizations**: Create Delaunay triangulations, Voronoi diagrams, convex hulls, and more.
- **Grid and Contour Visualization**: Render grids, contours, and heatmaps from geospatial data.
- **Geospatial Analysis**: Perform operations like polygon intersection, point-in-polygon checks, and area calculations.
- **Customizable Styling**: Customize the appearance of drawn elements with colors, opacity, and stroke weights.
- **Integration with Maps**: Seamlessly integrate with mapping libraries like Baidu Maps (BMapGL).

## Installation

```bash
npm install rvgeo
```


## Quick Start

### 1. Setup the Map

Initialize a map using a mapping library like Baidu Maps (BMapGL):

```javascript
const map = new BMapGL.Map("allmap");
map.centerAndZoom(new BMapGL.Point(-105.7220660521329, 39.0119712026557), 8);
map.enableScrollWheelZoom(true);
```

### 2. Draw Points

Draw multiple points and their centroid on the map:

```javascript
const points = mockPoints(30, myMBR1); // Generate random points
const multiPoint = new RVGeo.MultiPoint(points);

drawPoint2BLMap(multiPoint.centroid(), map); // Draw centroid
drawMultiPoint2BLMap(multiPoint, map, innerIcon(0)); // Draw points
```

### 3. Draw a Delaunay Triangulation

Visualize a Delaunay triangulation from a set of points:

```javascript
const delaunay = RVGeo.Delaunator.from(multiPoint.toXY());
const triangles = RVGeo.fillIndexArray(delaunay.getTriangleIndices(), multiPoint.coordinates);
drawTriangleEdge2BLMap(triangles, map, { strokeColor: 'blue' });
```

### 4. Draw a Voronoi Diagram

Generate and draw a Voronoi diagram:

```javascript
const voronoi = new RVGeo.Voronoi(delaunay);
const clippedVoronoi = voronoi.cutVoronoiByMBR(myMBR1);
drawEdgeMap2BLMap(clippedVoronoi, map, { strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 }, true);
```

## Examples

### Example 1: Drawing Multiple Points and Their Centroid

```javascript
function example1() {
  removeAllOverlay(map);
  let icon = innerIcon(0);
  drawPoint2BLMap(mps.centroid(), map);
  drawMultiPoint2BLMap(mps, map, icon);
}
```

### Example 2: Drawing a Delaunay Triangulation

```javascript
function example2() {
  removeAllOverlay(map);
  let del = RVGeo.Delaunator.from(mps.toXY());
  let trs = RVGeo.fillIndexArray(del.getTriangleIndices(), mps.coordinates);
  drawTriangleEdge2BLMap(trs, map, { strokeColor: 'blue' });
}
```

### Example 3: Drawing a Voronoi Diagram

```javascript
function example5() {
  removeAllOverlay(map);
  let voronoi = new RVGeo.Voronoi(delaunay);
  let clippedVoronoi = voronoi.cutVoronoiByMBR(myMBR1);
  drawEdgeMap2BLMap(clippedVoronoi, map, { strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 }, true);
}
```

## API Reference

### Core Functions

- **`drawPoint2BLMap(point, map, options)`**: Draw a point on the map.
- **`drawMultiPoint2BLMap(multiPoint, map, icon)`**: Draw multiple points on the map.
- **`drawLineString2BLMap(lineString, map, options)`**: Draw a line string on the map.
- **`drawPolygon2BLMap(polygon, map, options)`**: Draw a polygon on the map.
- **`drawTriangleEdge2BLMap(triangles, map, options)`**: Draw triangle edges on the map.
- **`drawVoronoi2BLMap(voronoi, map, options)`**: Draw a Voronoi diagram on the map.

### Geospatial Analysis

- **`RVGeo.convexHull(points)`**: Compute the convex hull of a set of points.
- **`RVGeo.intersectionPolygon(polygon1, polygon2)`**: Compute the intersection of two polygons.
- **`RVGeo.pointInEdge(point, lineStart, lineEnd)`**: Check if a point lies on a line segment.

### Grid and Contour Visualization

- **`drawGrid2d(canvas, data, rect, statistics, colorBand)`**: Draw a 2D grid on a canvas.
- **`drawCountour(canvas, contour, rect, color)`**: Draw contours on a canvas.

## Contributing

We welcome contributions! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Happy mapping! 🌍
