# 构建拓扑（GeoJSON -> TopoJSON）
> The topology only cares how points are connected, and whether they are distinct, not their positions.
> - https://github.com/topojson/topojson?tab=readme-ov-file
> - https://github.com/topojson/topojson-server/tree/master/src

## TopoJSON 包
# TopoJSON
**TopoJSON** is an extension of GeoJSON that encodes topology. Rather than representing geometries discretely, geometries in TopoJSON files are stitched together from shared line segments called *arcs*. 

- TopoJSON eliminates redundancy, allowing related geometries to be stored efficiently in the same file. For example, the shared boundary between California and Nevada is represented only once, rather than being duplicated for both states. 

- A single TopoJSON file can contain multiple feature collections without duplication, such as states and counties. Or, a TopoJSON file can efficiently represent both polygons (for fill) and boundaries (for stroke) as two feature collections that share the same arc mesh. 
  - See [How To Infer Topology](https://bost.ocks.org/mike/topology/) for a visual explanation of how TopoJSON works. 
  - See [Command-Line Cartography](https://medium.com/@mbostock/command-line-cartography-part-1-897aa8f8ca2c) for an introduction to TopoJSON and related tools. 
  - See [TopoJSON Format Specification](https://github.com/topojson/topojson-specification) for the format specification.

- delta-encoding : To further reduce file size, TopoJSON can use quantized delta-encoding for integer coordinates. This is similar to rounding coordinate values (e.g., [LilJSON](https://github.com/migurski/LilJSON)), but with greater efficiency and control over loss of information. And like GeoJSON, TopoJSON files are easily modified in a text editor and amenable to gzip compression.

Yet encoding topology also has numerous useful applications for maps and visualization above! 
- Topology can also be used for 
  - [Dorling Cartogram](http://www.ncgia.ucsb.edu/projects/Cartogram_Central/types.html)
  - [hexagonal cartograms](http://pitchinteractive.com/latest/tilegrams-more-human-maps/)
  - [automatic map coloring](https://bl.ocks.org/4188334)
  - [topology-preserving shape simplification](https://github.com/topojson/topojson-simplify)
## Sever
The algorithm has four steps:

  - [x] extract - decompose shapes into lines and rings.
  - [ ] join - identify junctions (intersection points).
  - [ ] cut - split or rotate arcs to terminate at junctions.
  - [ ] dedup - consolidate duplicate arcs.

## API Reference

### [Generation (topojson-server)](https://github.com/topojson/topojson-server)

* [topojson.topology](https://github.com/topojson/topojson-server/blob/master/README.md#topology) - convert GeoJSON to TopoJSON.
* [geo2topo](https://github.com/topojson/topojson-server/blob/master/README.md#geo2topo) - convert GeoJSON to TopoJSON.

### [Simplification (topojson-simplify)](https://github.com/topojson/topojson-simplify)

* [topojson.presimplify](https://github.com/topojson/topojson-simplify/blob/master/README.md#presimplify) - prepare TopoJSON for simplification.
* [topojson.simplify](https://github.com/topojson/topojson-simplify/blob/master/README.md#simplify) - simplify geometry by removing coordinates.
* [topojson.quantile](https://github.com/topojson/topojson-simplify/blob/master/README.md#quantile) - compute a simplification threshold.
* [topojson.filter](https://github.com/topojson/topojson-simplify/blob/master/README.md#filter) - remove rings from a topology.
* [topojson.filterAttached](https://github.com/topojson/topojson-simplify/blob/master/README.md#filterAttached) - remove detached rings.
* [topojson.filterAttachedWeight](https://github.com/topojson/topojson-simplify/blob/master/README.md#filterAttachedWeight) - remove small detached rings.
* [topojson.filterWeight](https://github.com/topojson/topojson-simplify/blob/master/README.md#filterWeight) - remove small rings.
* [topojson.planarRingArea](https://github.com/topojson/topojson-simplify/blob/master/README.md#planarRingArea) - compute the planar area of a ring.
* [topojson.planarTriangleArea](https://github.com/topojson/topojson-simplify/blob/master/README.md#planarTriangleArea) - compute the planar area of a triangle.
* [topojson.sphericalRingArea](https://github.com/topojson/topojson-simplify/blob/master/README.md#sphericalRingArea) - compute the spherical area of a ring.
* [topojson.sphericalTriangleArea](https://github.com/topojson/topojson-simplify/blob/master/README.md#sphericalTriangleArea) - compute the spherical area of a triangle.
* [toposimplify](https://github.com/topojson/topojson-simplify/blob/master/README.md#toposimplify) - simplify TopoJSON, removing coordinates.

### [Manipulation (topojson-client)](https://github.com/topojson/topojson-client)

* [topojson.feature](https://github.com/topojson/topojson-client/blob/master/README.md#feature) - convert TopoJSON to GeoJSON.
* [topojson.merge](https://github.com/topojson/topojson-client/blob/master/README.md#merge) - merge TopoJSON geometry and convert to GeoJSON polygons.
* [topojson.mergeArcs](https://github.com/topojson/topojson-client/blob/master/README.md#mergeArcs) - merge TopoJSON geometry to form polygons.
* [topojson.mesh](https://github.com/topojson/topojson-client/blob/master/README.md#mesh) - mesh TopoJSON geometry and convert to GeoJSON lines.
* [topojson.meshArcs](https://github.com/topojson/topojson-client/blob/master/README.md#meshArcs) - mesh TopoJSON geometry to form lines.
* [topojson.neighbors](https://github.com/topojson/topojson-client/blob/master/README.md#neighbors) - compute adjacent features.
* [topojson.bbox](https://github.com/topojson/topojson-client/blob/master/README.md#bbox) - compute the bounding box of a topology.
* [topojson.quantize](https://github.com/topojson/topojson-client/blob/master/README.md#quantize) - round coordinates, reducing precision.
* [topojson.transform](https://github.com/topojson/topojson-client/blob/master/README.md#transform) - remove delta-encoding and apply a transform.
* [topojson.untransform](https://github.com/topojson/topojson-client/blob/master/README.md#untransform) - apply delta-encoding and remove a transform.
* [topo2geo](https://github.com/topojson/topojson-client/blob/master/README.md#topo2geo) - convert TopoJSON to GeoJSON.
* [topomerge](https://github.com/topojson/topojson-client/blob/master/README.md#topomerge) - merge TopoJSON geometry, and optionally filter.
* [topoquantize](https://github.com/topojson/topojson-client/blob/master/README.md#topoquantize) - round TopoJSON, reducing precision.