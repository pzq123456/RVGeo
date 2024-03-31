# 构建拓扑（GeoJSON -> TopoJSON）
> The topology only cares how points are connected, and whether they are distinct, not their positions.
> - https://github.com/topojson/topojson?tab=readme-ov-file
> - https://github.com/topojson/topojson-server/tree/master/src

## TopoJSON
**TopoJSON** 是 GeoJSON 的拓展，实现了拓扑编码。与 GeoJSON 直接使用独立的几何对象表示不同，TopoJSON 将所有的用于表示几何图形的共享线段不重复地存放在 arcs 中，这使得其可以高效编码几何数据。例如，加利福尼亚州与内华达州之间的公共边界，在 GeoJSON 会存储两次，而在 TopoJSON 中只会存储一次。

- 单个TopoJSON文件可以包含多个功能集合，而不会重复，例如州和县。或者，TopoJSON文件可以有效地将多边形（用于填充）和边界（用于笔划）表示为共享同一弧形网格的两个特征集合。
- delta-encoding 可以进一步压缩文件。
- 使用 TopoJSON 来编码数据可以实现许多有用的功能：
  - [Dorling Cartogram 气泡图](http://www.ncgia.ucsb.edu/projects/Cartogram_Central/types.html)
  - [hexagonal cartograms 六边形地图](http://pitchinteractive.com/latest/tilegrams-more-human-maps/)
  - [automatic map coloring 地图自动上色](https://bl.ocks.org/4188334)
  - [topology-preserving shape simplification 几何图形简化](https://github.com/topojson/topojson-simplify)

## 由 GeoJSON 得到 TopoJSON 

该过程分为四个步骤：
  - [x] extract - 将形状分解为线条和环形。
  - [x] join - 识别交叉点。
  - [x] cut - 分割或旋转圆弧以终止于接点。
  - [x] dedup - 合并重复的圆弧。

## Generation (topojson-server)
* [topojson.topology](https://github.com/topojson/topojson-server/blob/master/README.md#topology) - convert GeoJSON to TopoJSON.

- 输入格式：对于构造 TopoJSON 而言，库外部调用 `topology()` 函数，而在该函数内部则会首先调用 `geometry()` 函数将 GeoJSON 格式的数据转化为一种中间表达格式。这种中间表达格式将某一 Feature 的 properties 属性囊括进 geometry 属性中，特别的，对于 FeatureCollection 类型的数据会直接转化为 GeometryCollection ，递归处理每一个 Feature，对 properties 属性处理规则同前。
- 如果传入了 transform ，则会进行 delta 编码。
```js
// 有效输入格式 1
const geojson1 = {
  foo: {
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: [[0, 0]]
    }
  },
  bar: {
    type: "Feature",
    geometry: {
      type: "GeometryCollection",
      geometries: [{
        type: "LineString",
        coordinates: [[0, 0]]
      }]
    }
  }
}

// 有效输入格式 2
const geojson2 = {
  foo: {
    type: "MultiLineString",
    coordinates: [[[0, 0], [1, 0], [1, 1], [0, 0]], [], [[0, 0], [1, 0]]]
  }，
  bar: {
    type: "MultiPoint",
    coordinates: [[0, 0]]
  }
}

```
- 构造 TopoJSON 的过程粗略介绍：
  - extract（弧段提取）：识别并提取出所有的线段及环等基本弧段（包括线和环），存放内部交换格式中。
  - join（弧段求交）：对上一步提取的基本弧段进行求交，也就是识别两条或多条线（或环）相交的共享点。
  - cut（弧段微调）：根据上一步识别出的所有连接点切割线和环，使其在连接点处终止。
  - dedup（去重）：对得到的基本弧段进行去重检查，并分配唯一索引。譬如，对于某一条线段需要反转后对比是否重复；对于某一圆环则需要旋转一定步数后进行对比是否重复。去除大量的冗余弧段可以在确保几何结构精度的情况下压缩原来的数据。


## Manipulation (topojson-client)

### topojson.feature(topology, object) 
> - delta-code 解码（累计相加）
> - 对于某一个环或线，取负值区域的编码就是翻转。正负值编码对照表：
>  0, -1, -2, -3, add `~` before
> -1, 0, 1, 2, 3
> - 对于索引而言，-1 取反后刚好得到 0 也就是正数第一个值。

Returns the GeoJSON Feature or FeatureCollection for the specified *object* in the given *topology*. If the specified object is a string, it is treated as *topology*. objects[*object*]. Then, if the object is a GeometryCollection, a FeatureCollection is returned, and each geometry in the collection is mapped to a Feature. Otherwise, a Feature is returned. The returned feature is a shallow copy of the source *object*: they may share identifiers, bounding boxes, properties and coordinates.

Some examples:

  * A point is mapped to a feature with a geometry object of type “Point”.
  * Likewise for line strings, polygons, and other simple geometries.
  * A null geometry object (of type null in TopoJSON) is mapped to a feature with a null geometry object.
  * A geometry collection of points is mapped to a feature collection of features, each with a point geometry.
  * A geometry collection of geometry collections is mapped to a feature collection of features, each with a geometry collection.

```js
const t = 
{
  type: "Topology",
  transform: {scale: [1, 1], translate: [0, 0]},
  objects: {foo: {type: "MultiPolygon", arcs: [[[0]]]}},
  arcs: [
    [[0, 0], [1, 0], [0, 1], [-1, 0], [0, -1]],
    [[0, 0], [1, 0], [0, 1]],
    [[1, 1], [-1, 0], [0, -1]],
    [[1, 1]],
    [[0, 0]]
  ]
}

topojson.feature(t, t.objects.foo);

// result: GeoJSON
{
  type: "Feature", 
  properties: {}, 
  geometry: {type: "MultiPolygon", 
    coordinates: [[[
          [0, 0], 
          [1, 0], 
          [1, 1], 
          [0, 1], 
          [0, 0]
        ]]]
  }
}
```

### topojson.merge(topology, objects)

Returns the GeoJSON MultiPolygon geometry object representing the union for the specified array of Polygon and MultiPolygon *objects* in the given *topology*. Interior borders shared by adjacent polygons are removed. See [Merging States](https://bl.ocks.org/mbostock/5416405) for an example. The returned geometry is a shallow copy of the source *object*: they may share coordinates.

### topojson.mergeArcs(topology, objects) [<>](https://github.com/topojson/topojson-client/blob/master/src/merge.js#L9 "Source")

Equivalent to [topojson.merge](#merge), but returns TopoJSON rather than GeoJSON. The returned geometry is a shallow copy of the source *object*: they may share coordinates.

### topojson.mesh(topology[, object[, filter]]) [<>](https://github.com/topojson/topojson-client/blob/master/src/mesh.js#L4 "Source")

Returns the GeoJSON MultiLineString geometry object representing the mesh for the specified *object* in the given *topology*. This is useful for rendering strokes in complicated objects efficiently, as edges that are shared by multiple features are only stroked once. If *object* is not specified, a mesh of the entire topology is returned. The returned geometry is a shallow copy of the source *object*: they may share coordinates.

An optional *filter* function may be specified to prune arcs from the returned mesh using the topology. The filter function is called once for each candidate arc and takes two arguments, *a* and *b*, two geometry objects that share that arc. Each arc is only included in the resulting mesh if the filter function returns true. For typical map topologies the geometries *a* and *b* are adjacent polygons and the candidate arc is their boundary. If an arc is only used by a single geometry then *a* and *b* are identical. This property is useful for separating interior and exterior boundaries; an easy way to produce a mesh of interior boundaries is:

```js
var interiors = topojson.mesh(topology, object, function(a, b) { return a !== b; });
```

See this [county choropleth](https://bl.ocks.org/mbostock/4060606) for example. Note: the *a* and *b* objects are TopoJSON objects (pulled directly from the topology), and not automatically converted to GeoJSON features as by [topojson.feature](#feature).

### topojson.meshArcs(topology[, object[, filter]]) [<>](https://github.com/topojson/topojson-client/blob/master/src/mesh.js#L8 "Source")

Equivalent to [topojson.mesh](#mesh), but returns TopoJSON rather than GeoJSON. The returned geometry is a shallow copy of the source *object*: they may share coordinates.

### topojson.neighbors(objects) [<>](https://github.com/topojson/topojson-client/blob/master/src/neighbors.js "Source")

Returns an array representing the set of neighboring objects for each object in the specified *objects* array. The returned array has the same number of elements as the input array; each element *i* in the returned array is the array of indexes for neighbors of object *i* in the input array. For example, if the specified objects array contains the features *foo* and *bar*, and these features are neighbors, the returned array will be \[\[1\], \[0\]\], indicating that *foo* is a neighbor of *bar* and *vice versa*. Each array of neighbor indexes for each object is guaranteed to be sorted in ascending order.

### topojson.bbox(topology) [<>](https://github.com/topojson/topojson-client/blob/master/src/bbox.js "Source")

Returns the computed [bounding box](https://github.com/topojson/topojson-specification#3-bounding-boxes) of the specified *topology* [*x*₀, *y*₀, *x*₁, *y*₁] where *x*₀ is the minimum *x*-value, *y*₀ is the minimum *y*-value, *x*₁ is the maximum *x*-value, and *y*₁ is the maximum *y*-value. If the *topology* has no points and no arcs, the returned bounding box is [∞, ∞, -∞, -∞]. (This method ignores the existing *topology*.bbox, if any.)

### topojson.quantize(topology, transform) [<>](https://github.com/topojson/topojson-client/blob/master/src/quantize.js "Source")

Returns a shallow copy of the specified *topology* with [quantized and delta-encoded](https://github.com/topojson/topojson-specification#213-arcs) arcs according to the specified [*transform* object](https://github.com/topojson/topojson-specification/blob/master/README.md#212-transforms). If the *topology* is already quantized, an error is thrown. See also [topoquantize](#topoquantize).

If a quantization number *n* is specified instead of a *transform* object, the corresponding transform object is first computed using the bounding box of the topology. In this case, the quantization number *n* must be a positive integer greater than one which determines the maximum number of expressible values per dimension in the resulting quantized coordinates; typically, a power of ten is chosen such as 1e4, 1e5 or 1e6. If the *topology* does not already have a *topology*.bbox, one is computed using [topojson.bbox](#bbox).

### topojson.transform(transform) [<>](https://github.com/topojson/topojson-client/blob/master/src/transform.js "Source")

If the specified [*transform* object](https://github.com/topojson/topojson-specification/blob/master/README.md#212-transforms) is non-null, returns a [point *transform* function](#_transform) to remove delta-encoding and apply the transform. If the *transform* is null, returns the identity function.

### topojson.untransform(transform) [<>](https://github.com/topojson/topojson-client/blob/master/src/untransform.js "Source")

If the specified [*transform* object](https://github.com/topojson/topojson-specification/blob/master/README.md#212-transforms) is non-null, returns a [point *transform* function](#_transform) to apply quantized delta-encoding and remove the transform. If the *transform* is null, returns the identity function. See also [topojson.quantize](#quantize).

### transform(point[, index])

Applies this transform function to the specified *point*, returning a new point with the transformed coordinates. If the specified *index* is truthy, the input *point* is treated as relative to the previous point passed to this transform, as is the case with delta-encoded arcs.