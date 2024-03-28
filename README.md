# RVGeo 2.1.0 改动说明
> - 2024.3.28 12:27:00 UTC + 08:00

该版本调整了项目结构，部分接口发生变化（降级或移除）。
- 降级：所有方法内指定 unit 单位的功能均不再支持，默认单位为米。在 math 模块下仍保留原来的单位换算方法，可以直接调用。主要目的是维护全局坐标系统一，原先的写法会默认带入 km、m 的混合问题。
- 重构：
  - Geometry 模块的所有代码均已重构，类中接口有部分改动，类继承关系完全改变。
    - 需要注意的是，不再有 toArray 方法，现在可以直接（只读）获取符合 GeoJSON 标准的 coordinates 。具体改动可以参考源代码。
    - toXYArray 方法也都改名为 toXY 。这样做可以更好地统一独立geometry 与 multigeometry 之间的语意。 
- 功能增强：
  - Topology 模块直接复制并修改 TopoJSON 代码库（将其由 js 转化为了 TypeScript），现在你可以将 GeoJSON 格式的数据转化为 TopoJSON，并调用一些诸如 merge、mesh 等方法来操纵它。（详细用法请参考 TopoJSON Client）
  - Geo 模块：参考 leaflet 为每一种投影及坐标系实现一个 object ，这样可以更好地管理多种坐标系。（当前仍然只有 wgs84 的投影与反投影）这也就意味着，原先的 plane2Wgs84 及其逆方法 Wgs842Plane 被移除。现在你需要指定某一投影实体 object，譬如 `SphereMercator.project()` 或 `SphereMercator.unproject()` 来达到同样的功能。
## References
- https://www.jasondavies.com/maps/bounds/
- https://d3js.org/d3-geo/math
- https://github.com/d3/d3-geo
- https://www.movable-type.co.uk/