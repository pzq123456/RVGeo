# API Reference

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [colorListType](enumerations/colorListType.md) | - |
| [stretchType](enumerations/stretchType.md) | - |

## Classes

| Class | Description |
| ------ | ------ |
| [Circle](classes/Circle.md) | 平面图形：圆形 |
| [Delaunator](classes/Delaunator.md) | - |
| [Evented](classes/Evented.md) | 事件基础函数（类，默认构造函数） - 维护两个事件监听器队列（同步、异步） - 提供事件监听、移除、触发等方法 - 提供一次性事件监听 - 提供获取指定事件类型的监听器 - 提供判断是否存在指定事件类型的监听器 > 参考 [Leaflet 的事件机制设计](https://github.com/Leaflet/Leaflet/blob/80a42768306c8c2f9f1bd1eb48d529ffcac3072f/src/core/Events.js#L29) |
| [Geometry](classes/Geometry.md) | Geometry for GeoJSON independent Objects including Point, LineString, Polygon - no GeometryCollection - no MultiPoint, MultiLineString, MultiPolygon |
| [GeometryCollection](classes/GeometryCollection.md) | - |
| [Grid](classes/Grid.md) | 网格类（本质是三维数组）: - 三维数组的每一层代表一个波段 - 其中一层为一个二维数组，代表一个波段的值，并与对应的 MBR 对象关联用于挂接地图上的位置 - MBR 统一使用 `WGS84` 坐标系 |
| [LineString](classes/LineString.md) | Geometry for GeoJSON independent Objects including Point, LineString, Polygon - no GeometryCollection - no MultiPoint, MultiLineString, MultiPolygon |
| [MultiLineString](classes/MultiLineString.md) | - |
| [MultiPoint](classes/MultiPoint.md) | - |
| [MultiPolygon](classes/MultiPolygon.md) | - |
| [Point](classes/Point.md) | Point geometry |
| [Polygon](classes/Polygon.md) | Geometry for GeoJSON independent Objects including Point, LineString, Polygon - no GeometryCollection - no MultiPoint, MultiLineString, MultiPolygon |
| [PriorityQueue](classes/PriorityQueue.md) | - |
| [QuadTree](classes/QuadTree.md) | - |
| [Queue](classes/Queue.md) | - |
| [Voronoi](classes/Voronoi.md) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [CRS](interfaces/CRS.md) | - |
| [customRange](interfaces/customRange.md) | impliment customRange to support custom range query - make sure your customRange object has correct intersects and contains function - note: - the boundary of customRange is the boundary of QuadTree - the point of customRange is the point of QuadTree |
| [GeoJSONFeature](interfaces/GeoJSONFeature.md) | - |
| [GeoJSONFeatureCollection](interfaces/GeoJSONFeatureCollection.md) | - |
| [GeoJSONGeometry](interfaces/GeoJSONGeometry.md) | - |
| [GeoJSONGeometryCollection](interfaces/GeoJSONGeometryCollection.md) | - |
| [GeoJSONLineString](interfaces/GeoJSONLineString.md) | - |
| [GeoJSONMultiLineString](interfaces/GeoJSONMultiLineString.md) | - |
| [GeoJSONMultiPoint](interfaces/GeoJSONMultiPoint.md) | - |
| [GeoJSONMultiPolygon](interfaces/GeoJSONMultiPolygon.md) | - |
| [GeoJSONPoint](interfaces/GeoJSONPoint.md) | - |
| [GeoJSONPolygon](interfaces/GeoJSONPolygon.md) | - |
| [Graph](interfaces/Graph.md) | 数据结构： 图（由节点和边组成） |
| [GridGraph](interfaces/GridGraph.md) | 二维数组转换为图 |
| [Projection](interfaces/Projection.md) | - |
| [Transform](interfaces/Transform.md) | - |

## Type Aliases

| Type alias | Description |
| ------ | ------ |
| [AreaUnits](type-aliases/AreaUnits.md) | - |
| [Complex](type-aliases/Complex.md) | 复数类型 |
| [gridValueStrategy](type-aliases/gridValueStrategy.md) | - |
| [MBR](type-aliases/MBR.md) | - MBR 中的 minX, minY, maxX, maxY 的排序在某些情况下会有歧义，尤其是在地理坐标系的语境下。（譬如跨越了反子午圈的情况（斐济群岛）） - 所以允许 minX > maxX 遇到这样的情况时，需要进行特殊处理。 |
| [QTNode](type-aliases/QTNode.md) | 由网格数据生成四叉树(节点) |
| [Rectangle](type-aliases/Rectangle.md) | - Rectangle is a rectangle that bounds a set of points. |
| [Units](type-aliases/Units.md) | - |

## Variables

| Variable | Description |
| ------ | ------ |
| [areaFactors](variables/areaFactors.md) | - Area of measurement factors based on 1 square meter. - 单位换算关系，以1平方米为基准。 |
| [CountourColorList](variables/CountourColorList.md) | - |
| [D2R](variables/D2R.md) | D2R usage: 角度转弧度 - PI / 180 |
| [Earth](variables/Earth.md) | - |
| [earthRadius](variables/earthRadius.md) | - |
| [EPSG3857](variables/EPSG3857.md) | EPSG:3857 |
| [EPSG900913](variables/EPSG900913.md) | EPSG:900913 |
| [EPSLN](variables/EPSLN.md) | - |
| [factors](variables/factors.md) | - Unit of measurement factors using a spherical (non-ellipsoid) earth radius. |
| [factors2](variables/factors2.md) | - Unit of measurement factors based on 1 meter. - 单位换算关系，以1米为基准。 |
| [halfPi](variables/halfPi.md) | - |
| [pi](variables/pi.md) | - |
| [R2D](variables/R2D.md) | R2D usage: 弧度转角度 - 180 / PI |
| [SphericalMercator](variables/SphericalMercator.md) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [acos](functions/acos.md) | - |
| [add](functions/add.md) | 计算两个二维笛卡尔坐标系下的向量 a 和 b 的和，返回一个新的向量。 This function adds two 2D Cartesian vectors a and b, returning a new vector representing the sum. |
| [adjust\_lon](functions/adjust_lon.md) | - Adjust longitude to [-180, 180] - 将超过 360 的经度调整为[-180, 180] |
| [alphaComplex](functions/alphaComplex.md) | Alpha Complex 算法 - Alpha shapes are a generalization of Delaunay triangulations. - Given a parameter alpha and a point set, they compute a simplicial complex which covers the point set in simplices whose circum radii are less than 1/alpha. |
| [applyMixins](functions/applyMixins.md) | Apply mixins to a class |
| [areaToArea](functions/areaToArea.md) | - 面积单位内互相转换 - Convert area units to each other |
| [asin](functions/asin.md) | - |
| [atan2](functions/atan2.md) | Returns the angle (in radians) from the X axis to a point. |
| [bearing](functions/bearing.md) | - |
| [binarization](functions/binarization.md) | 二值化网格数据，返回二值化后的网格数据 |
| [binaryColorBand](functions/binaryColorBand.md) | - |
| [binDrawGrid2d](functions/binDrawGrid2d.md) | - |
| [breadthFirstSearch](functions/breadthFirstSearch.md) | - |
| [calculateArrayShape](functions/calculateArrayShape.md) | 计算数组的形状 |
| [calculateMBR](functions/calculateMBR.md) | 计算多边形的 MBR |
| [cartesian](functions/cartesian.md) | 将球坐标系下的向量 [longitude, latitude]（弧度制）转换为三维笛卡尔坐标系下的向量 [x, y, z]。 - This function takes spherical coordinates [longitude, latitude] and converts them to a 3D Cartesian vector [x, y, z]. |
| [cartesianAdd](functions/cartesianAdd.md) | 计算两个三维笛卡尔坐标系下的向量 a 和 b 的和，返回一个新的向量。 This function adds two 3D Cartesian vectors a and b, returning a new vector representing the sum. |
| [cartesianAddInPlace](functions/cartesianAddInPlace.md) | 计算两个三维笛卡尔坐标系下的向量 a 和 b 的和，将结果存储在 a 中。 This function adds two 3D Cartesian vectors a and b, modifying a in-place to store the result. (Note: This function is incomplete as it doesn't return the sum) |
| [cartesianAngle](functions/cartesianAngle.md) | 计算两个三维笛卡尔坐标系下的向量 a 和 b 的夹角。 This function calculates the angle between two 3D Cartesian vectors a and b. |
| [cartesianCross](functions/cartesianCross.md) | 计算两个三维笛卡尔坐标系下的向量 a 和 b 的叉积。 This function calculates the cross product of two 3D Cartesian vectors a and b. |
| [cartesianDot](functions/cartesianDot.md) | 计算两个三维笛卡尔坐标系下的向量 a 和 b 的点积。 This function calculates the dot product of two 3D Cartesian vectors a and b. |
| [cartesianNormalize](functions/cartesianNormalize.md) | 归一化三维笛卡尔坐标系下的向量 d，返回一个新的单位向量。 This function normalizes a 3D Cartesian vector d, returning a new unit vector. |
| [cartesianNormalizeInPlace](functions/cartesianNormalizeInPlace.md) | 归一化三维笛卡尔坐标系下的向量 d，将 d 修改为指向相同方向的单位向量。 This function normalizes a 3D Cartesian vector d in-place, modifying d to represent a unit vector pointing in the same direction. (Note: This function is incomplete and requires implementing square root calculation) |
| [cartesianScale](functions/cartesianScale.md) | 使用因子 k 缩放三维笛卡尔坐标系下的向量 vector，返回一个新的缩放后的向量。 This function scales a 3D Cartesian vector vector by a factor k, returning a new scaled vector. |
| [ccw](functions/ccw.md) | Counter-clockwise (not robust version) ccw 算法的非鲁棒版本 - Returns 1 if three points make a counter-clockwise turn - 逆时针返回 1 - Returns -1 if three points make a clockwise turn - 顺时针返回 -1 - Returns 0 if three points are collinear - 共线返回 0 |
| [ccwRobust](functions/ccwRobust.md) | robust version of ccw 封装了 robust-predicates 库的 orient2d 函数 - `Note:` unlike J. Shewchuk's original code, `all the functions in this library assume y axis is oriented downwards ↓`, so the semantics are different. - `注意:` 与 J. Shewchuk 的原始代码不同，`本库中的所有函数都假设 y 轴向下 ↓`，因此语义不同。刚好与 ccw 相反。 - Returns 1 if three points make a counter-clockwise turn - 逆时针返回 1 - Returns -1 if three points make a clockwise turn - 顺时针返回 -1 - Returns 0 if three points are collinear - 共线返回 0 |
| [collectionFromFeature](functions/collectionFromFeature.md) | Factory function for creating geometryCollection objects from GeoJSON Feature objects |
| [collectionFromGeometry](functions/collectionFromGeometry.md) | Factory function for creating geometryCollection objects from GeoJSON Geometry objects |
| [complateMap](functions/complateMap.md) | - |
| [concatEL2DArray](functions/concatEL2DArray.md) | 拼接等长二维数组 |
| [conj](functions/conj.md) | 复数共轭 - complex conjugate |
| [containsMBR](functions/containsMBR.md) | - |
| [convexHull](functions/convexHull.md) | 凸包算法 |
| [cos](functions/cos.md) | Returns the cosine of a number. |
| [createGraph](functions/createGraph.md) | 创建图 |
| [createGridGraph](functions/createGridGraph.md) | - |
| [cross](functions/cross.md) | 计算两个二维笛卡尔坐标系下的向量 a 和 b 的叉积。 This function calculates the cross product of two 2D Cartesian vectors a and b. |
| [cutPolygonByMBR](functions/cutPolygonByMBR.md) | 使用 MBR 裁剪多边形 |
| [dampedSin3D](functions/dampedSin3D.md) | https://en.m.wikipedia.org/wiki/Damping#Damped_sine_wave |
| [degreesToRadians](functions/degreesToRadians.md) | - Converts an angle in degrees to radians - 将角度转换为弧度 |
| [degToDMS](functions/degToDMS.md) | - |
| [deMaxMin](functions/deMaxMin.md) | 去除最大最小值 |
| [destination](functions/destination.md) | Given a start point, initial bearing, and distance, - this will calculate the destina­tion point and final bearing travelling along a (shortest distance) great circle arc. |
| [dijkstra](functions/dijkstra.md) | - |
| [dmsToDeg](functions/dmsToDeg.md) | - |
| [dot](functions/dot.md) | 计算两个二维笛卡尔坐标系下的向量 a 和 b 的点积。 This function calculates the dot product of two 2D Cartesian vectors a and b. |
| [drawArrowField](functions/drawArrowField.md) | 绘制箭头场，默认为起点为当前格子的中心 |
| [drawCountour](functions/drawCountour.md) | - |
| [drawGrid2d](functions/drawGrid2d.md) | - |
| [drawProgress](functions/drawProgress.md) | 绘制进度条 |
| [drawQTree2d](functions/drawQTree2d.md) | 绘制四叉树 |
| [drawSample](functions/drawSample.md) | - |
| [drawSample2](functions/drawSample2.md) | - |
| [drawText](functions/drawText.md) | - |
| [drawTrueColorGrid2d](functions/drawTrueColorGrid2d.md) | - |
| [emptyObj](functions/emptyObj.md) | 释放对象 |
| [equals](functions/equals.md) | deep compare two arrays(1D) |
| [equalsMBR](functions/equalsMBR.md) | - |
| [extend](functions/extend.md) | Merge the properties |
| [fastFFT2](functions/fastFFT2.md) | 快速傅里叶变换 real to complex - 先对每一行进行傅里叶变换，再对每一列进行傅里叶变换，最后中心化 |
| [feature](functions/feature.md) | - |
| [FFT](functions/FFT.md) | 快速傅里叶变换 real to complex |
| [FFT2](functions/FFT2.md) | - |
| [FFTImag](functions/FFTImag.md) | 获取傅里叶变换结果的振幅 |
| [FFTImag2](functions/FFTImag2.md) | - |
| [FFTReal](functions/FFTReal.md) | 获取傅里叶变换结果的振幅 |
| [FFTReal2](functions/FFTReal2.md) | - |
| [FFTShift](functions/FFTShift.md) | - |
| [fillIndexArray](functions/fillIndexArray.md) | - 根据 indexArray 中存储的索引 从 fillArray 中取出对应的元素并填充到 indexArray 中 - fill indexArray with elements from fillArray according to the index stored in indexArray - `注意`： indexArray 的形状未知 但是 fillArray 不论形状如何始终视为一维数组 - Note: the shape of indexArray is unknown, but fillArray is always regarded as a one-dimensional array regardless of its shape |
| [flattenArray](functions/flattenArray.md) | - |
| [formatNum](functions/formatNum.md) | 这个函数的主要目的是将数字 num 四舍五入到指定的 precision 小数位。 |
| [fromFeatureObj](functions/fromFeatureObj.md) | Factory function for creating geometry objects from GeoJSON Feature objects - you can use this function to create inner geometry from Features - about Feature objects |
| [fromGeometryObj](functions/fromGeometryObj.md) | Factory function for creating geometry objects from GeoJSON Geometry objects - about Geometry objects |
| [getAngle](functions/getAngle.md) | - Returns the angle between two points - 返回两点之间的夹角 |
| [getMBRWithAntimeridian](functions/getMBRWithAntimeridian.md) | 计算多点的最小外包矩形（跨越反子午线的情况） - 会自动计算并选择面积最小的情况 - get MBR with antimeridian |
| [getPointsMBR](functions/getPointsMBR.md) | 计算多点的最小外包矩形（默认情况） |
| [gridAstar](functions/gridAstar.md) | - |
| [gridBreadthFirstSearch](functions/gridBreadthFirstSearch.md) | - |
| [gridDijkstra](functions/gridDijkstra.md) | - |
| [gridReconstructPath](functions/gridReconstructPath.md) | - |
| [haversin](functions/haversin.md) | - |
| [haversine](functions/haversine.md) | 使用 haversine 公式计算球面两点之间的距离 |
| [hist](functions/hist.md) | 直方图计算函数 |
| [IFFT](functions/IFFT.md) | 快速傅里叶逆变换 complex to real |
| [IFFT2](functions/IFFT2.md) | - |
| [IFFTReal](functions/IFFTReal.md) | 取 IFFT 结果的实部（也就是原函数值） |
| [IFFTReal2](functions/IFFTReal2.md) | - |
| [inCircle](functions/inCircle.md) | 快速计算最后一点与前三点组成的圆的关系 calculate the relative position of the last point to the circle formed by the first three points - Returns 1 if point d is outside the circle passing through a, b, and c - 返回 1 如果点 d 在通过 a、b 和 c 的圆外 - Returns -1 if point d is inside the circle - 返回 -1 如果点 d 在圆内 - Returns 0 if the four points are cocircular - 返回 0 如果四个点共圆 |
| [inCircleRobust](functions/inCircleRobust.md) | - |
| [intermediatePoint](functions/intermediatePoint.md) | An intermediate point at any fraction along the great circle path between two points |
| [interpolate](functions/interpolate.md) | 三维笛卡尔坐标系下的向量插值。 This function interpolates between two 3D Cartesian vectors a and b using a parameter t, returning the resulting vector. |
| [interpolate2](functions/interpolate2.md) | 二维笛卡尔坐标系下的向量插值。 This function interpolates between two 2D Cartesian vectors a and b using a parameter t, returning the resulting vector. |
| [intersection](functions/intersection.md) | （默认线段求交）内含投影的线段求交函数（计算开销大） |
| [intersectionPolygon](functions/intersectionPolygon.md) | 使用 Sutherland-Hodgman 算法计算多边形与多边形的交集 |
| [intersectsMBR](functions/intersectsMBR.md) | - |
| [isEPSG3857](functions/isEPSG3857.md) | - |
| [isEPSG4326](functions/isEPSG4326.md) | - |
| [isFloat](functions/isFloat.md) | 判断一个数字是否为浮点数 |
| [isPotentialGeoObject](functions/isPotentialGeoObject.md) | 判断一个 object 是否是(潜在的)地理对象（是否含有 X，Y 或者 lon，lat 或者 lng，lat 属性） |
| [iterPolygonEdge](functions/iterPolygonEdge.md) | 迭代访问多边形的边（不重复访问） |
| [K\_means](functions/K_means.md) | k均值聚类 |
| [lengthToRadians](functions/lengthToRadians.md) | - Convert a distance measurement (assuming a spherical Earth) from a real-world unit into radians - 将距离测量值（假设地球是球形的）从现实世界的单位转换为弧度 - Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet - 有效单位：英里，海里，英寸，码，米，千米，厘米，英尺 |
| [MBR2Plane](functions/MBR2Plane.md) | default projection : SphericalMercator - you can change the projection by passing the second parameter |
| [mbrToPolygon](functions/mbrToPolygon.md) | 将 MBR 转化为 逆时针方向的（无孔）多边形数组 |
| [mbrToRectangle](functions/mbrToRectangle.md) | MBR 转换为 Rectangle |
| [merge](functions/merge.md) | - |
| [mergeArcs](functions/mergeArcs.md) | - |
| [mergeMBR](functions/mergeMBR.md) | - |
| [mergePointMBR](functions/mergePointMBR.md) | - |
| [mesh](functions/mesh.md) | - |
| [meshArcs](functions/meshArcs.md) | - |
| [metersTo](functions/metersTo.md) | - 将距离单位米转换为指定单位 - Convert distance units from meters to specified units |
| [midpoint](functions/midpoint.md) | - |
| [neighbors](functions/neighbors.md) | - |
| [normalize](functions/normalize.md) | 归一化二维笛卡尔坐标系下的向量 d，返回一个新的单位向量。 This function normalizes a 2D Cartesian vector d, returning a new unit vector. |
| [object](functions/object.md) | - |
| [overlapsMBR](functions/overlapsMBR.md) | - |
| [Perlin](functions/Perlin.md) | 2D [Perlin](https://en.wikipedia.org/wiki/Perlin_noise) 噪声 |
| [plane2MBR](functions/plane2MBR.md) | default projection : SphericalMercator - you can change the projection by passing the second parameter |
| [planeIntersection](functions/planeIntersection.md) | 也可以使用该函数计算两条线段的交点 - 现将经纬度坐标投影到平面坐标系下，然后计算交点，最后将交点投影回经纬度坐标系 - lonlats -- (projectionFrom) --> XYs -- (planeIntersection) --> XY -- (projectionTo) --> lonlat |
| [planePolygonArea](functions/planePolygonArea.md) | - 使用 Shoelace Theorem 求多边形面积 - calculate the area of a polygon using the Shoelace Theorem |
| [pointInEdge](functions/pointInEdge.md) | （前提：逆时针多边形的边）判断点是否在当前边的内部(也就是边前进方向的左侧) |
| [pointInMBR](functions/pointInMBR.md) | 判断点是否在 MBR 内（默认情况） |
| [pointInMBRWithAntimeridian](functions/pointInMBRWithAntimeridian.md) | 判断点是否在 MBR 内（跨越了反子午线的情况） - 必须保 MBR 真的跨越了反子午线，否则会出现错误 |
| [PointInsidePolygon](functions/PointInsidePolygon.md) | 判断点是否在简单多边形内部（平面与经纬度坐标通用，多边形边界算作在内） |
| [PointOutsideMBR](functions/PointOutsideMBR.md) | 判断点是否在 MBR 外（平面与经纬度坐标通用，多边形边界算作在内） determine if a point is outside of a MBR (polygon boundary is considered inside) |
| [prePointInPolygon](functions/prePointInPolygon.md) | 返回多边形中 输入索引的前一个点的索引 多边形闭合并按照逆时针方向排列 |
| [pseudoColorBandFactory](functions/pseudoColorBandFactory.md) | 伪彩色带渲染工厂函数 |
| [radiansToDegrees](functions/radiansToDegrees.md) | - Converts an angle in radians to degrees |
| [radiansToLength](functions/radiansToLength.md) | - Convert a distance measurement (assuming a spherical Earth) from radians to a more friendly unit. - 将距离测量值（假设地球是球形的）从弧度转换为更友好的单位。 - Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet - 有效单位：英里，海里，英寸，码，米，千米，厘米，英尺 |
| [randomIndexArray](functions/randomIndexArray.md) | 生成随机索引数组（不重复） |
| [reactGrid2d](functions/reactGrid2d.md) | - |
| [reconstructPath](functions/reconstructPath.md) | - |
| [rectangleToMBR](functions/rectangleToMBR.md) | Rectangle 转换为 MBR |
| [reverse](functions/reverse.md) | - |
| [round](functions/round.md) | - Round number to precision - 将数字四舍五入到指定精度 |
| [sample](functions/sample.md) | 采样函数 |
| [scale](functions/scale.md) | 使用因子 k 缩放二维笛卡尔坐标系下的向量 vector，返回一个新的缩放后的向量。 This function scales a 2D Cartesian vector vector by a factor k, returning a new scaled vector. |
| [sign](functions/sign.md) | - Returns the sign of the input, or zero - 返回输入的符号，或零 |
| [simpleColorBand](functions/simpleColorBand.md) | 连续单波段单色带渲染（灰色） |
| [simpleColorBandFactory](functions/simpleColorBandFactory.md) | - |
| [simplePseudoColorBand](functions/simplePseudoColorBand.md) | 简单离散值颜色计算函数 - 离散值范围为整数 - 默认与色带索引一一对应 |
| [sin](functions/sin.md) | Returns the sine of a number. |
| [Sin3D](functions/Sin3D.md) | - |
| [sphereIntersection](functions/sphereIntersection.md) | 求解两条球面线段的交点 - Given two lines on a sphere, this will return their intersection point. |
| [spherical](functions/spherical.md) | 将三维笛卡尔坐标系下的向量 [x, y, z] 转换为球坐标系下的向量 [lat, lon]（弧度制）。 This function takes a 3D Cartesian vector [x, y, z] and converts it to spherical coordinates [lat, lon]. |
| [sphericalArea](functions/sphericalArea.md) | - |
| [splitMBRWithAntimeridian](functions/splitMBRWithAntimeridian.md) | 将单个跨越了反子午线的 MBR 分割成两个简单的 MBR |
| [sqrt](functions/sqrt.md) | Returns the square root of a number. |
| [squareMetersTo](functions/squareMetersTo.md) | - 将面积单位平方米转换为指定单位 - Convert area units from square meters to specified units |
| [subColumnInEL2DArray](functions/subColumnInEL2DArray.md) | 抽取二维数组的某一列（或某几列） |
| [subdivide2QTree](functions/subdivide2QTree.md) | （简易四叉树）创建一个 gridMBR 层面的四叉树 |
| [testProgress](functions/testProgress.md) | - |
| [throttle](functions/throttle.md) | 节流函数 |
| [toLineString](functions/toLineString.md) | - |
| [toMeters](functions/toMeters.md) | - 将距离单位转换为米 - Convert distance units to meters |
| [toMultiPoint](functions/toMultiPoint.md) | - |
| [toPoint](functions/toPoint.md) | the factory function to create a Point(the following ways are equivalent) |
| [topology](functions/topology.md) | - |
| [toSquareMeters](functions/toSquareMeters.md) | - 将面积单位转换为平方米 - Convert area units to square meters |
| [transform](functions/transform.md) | - |
| [triangleCenter](functions/triangleCenter.md) | 计算三角形的外心（对于 Delauany 三角剖分的结果数组） |
| [trueColorBand](functions/trueColorBand.md) | 真彩色带渲染 |
| [trueColorBandFactory](functions/trueColorBandFactory.md) | 真彩色带渲染工厂函数 |
| [unitToUnit](functions/unitToUnit.md) | - 距离单位内互相转换 - Convert distance units to each other |
| [untransform](functions/untransform.md) | - |
| [UUID](functions/UUID.md) | 生成UUID |
| [worleyNoise](functions/worleyNoise.md) | 生成 Worley 噪声距离场 |
| [XY2ColRow](functions/XY2ColRow.md) | 将屏幕像素坐标转化为对应的行列号 |
| [zebraNoise](functions/zebraNoise.md) | 生成 条纹 噪声，可选水平或垂直 |
