# RVGeo V 2.0 `Dev Branch` 
> - current version: [2.0.6](https://www.npmjs.com/package/rvgeo)
> - next version: 2.0.7 (working...)

## 总览 | Overview
> - 以下内容为暂定设计稿件。打 “*” 的模块处于待定状态，有可能会并入其他模块。

![](/tutorials/DrawIO/module.svg)
> 图片说明：
>  - 虚线框中代表尚未实现（或正在实现）的模块
>  - 模块在纵向存在依赖（一定的）关系，且左侧部分为矢量数据提供支持，右侧为栅格数据
>  - 核心包与插件系统：紫色实线矩形代表 RVGeo 2.0 的核心包，蓝色虚线矩形代表数据 I/O 插件（设计用于解析和生成不同格式的数据），顶部灰色虚线矩形代表渲染引擎

### 1. Data I/O Module (working...)
> - 该模块目前尚未正式实现，一些代码片段可以在示例代码中找到。
- 该模块封装了 `axios` 包用以获取数据，暂时实现了 `GeoJSON` 及 `CSV` 数据格式的读取与转换。该模块一般将数据解析为多维数组（中间格式），并传递给 `Meta` 模块用以产生内置 `Geometry` 或 `Coverage` 对象。
- 对于 tif 数据，暂时使用 geoTiff.js 库进行解析，且并未封装。
- GeoJSON 及其他标准数据格式的解析与导出尚在设计中，目前的设计思路是使用 `TypeScript` 中的类来实现 `GeoJSON` 标准，同时提供一些工具函数用以转换为其他格式。
### 2. Meta Module (working...)
该部分仍在设计中。目前可以使用 Geometry 类自带的构造函数来创建几何对象。

### 3. [Geometry Moudle](https://pzq123456.github.io/RVGeo/modules/Geometry.html)
基于 `GeoJSON` 标准，该模块内部维护了对应的几何对象，主要包括：
  - `Point`
  - `MultiPoint`
  - `LineString`
  - `MultiLineString`
  - `Polygon`

### 4. [Coverage](https://pzq123456.github.io/RVGeo/modules/Coverage.html)
该模块的数据结构由两部分组成：代表栅格数据的多维数组和代表（矢量）地理覆盖的矩形对象。可通过简单的分割算法将栅格多维数组均匀地分配到地理覆盖矩形的各个格网中。该数据结构可以尽量做到与 `GeoJSON` 中的 `Polygon` 相兼容。

### 5. [Unit](https://pzq123456.github.io/RVGeo/modules/Unit.html)
该模块主要用于处理单位换算问题，支持多种单位的互相转换，转换参数以常数的形式记录并提供一些工具函数方便用户进行快速单位换算。

### 6. [Reference](https://pzq123456.github.io/RVGeo/modules/Reference.html)
该模块主要用于坐标系转换，目前仅实现了 `WGS84` 与 Web 墨卡托坐标系的互相转换。(epsg:4326 <---> epsg:3857) 也就是（椭）球面坐标系与平面坐标系之间的（部分）相互转换。

### 7. [Colors](https://pzq123456.github.io/RVGeo/modules/Colors.html)
该模块的本质是数值到颜色的映射函数，矢量与栅格都要用到。

> - 以上就是 RVGeo 的基础模块，这些简单的模块是下一步更加复杂模块的基础。另外，我们也将 `GeoJSON` 的规则使用 `TypeScript` 中的类部分实现，这些基础模块是维持包接口稳定、规范的重要部分。

### 8. [Measuration Module](https://pzq123456.github.io/RVGeo/modules/Measuration.html)
量测模块，该模块主要用于距离、面积等参数的量测，属于相对基础的功能（但是又需要依赖几何对象）所以位于第二层级。目前主要提供球面与平面两种坐标系下的数值量测功能接口，一般情况下，认为球面量测较为准确（平面量测受到纬度投影变形的影响），也推荐使用球面量测算法。

### 9. [Spatial computing Module](https://pzq123456.github.io/RVGeo/modules/CGUtils.html)
空间计算模块，主要是二维的计算几何，日后也会整合三维几何计算的相关算法。目前仅实现了直线求交及（简单）多边形求交。

### 10. (Grid) Statistics Module: `Grid.getBandStatistics(bandIndex: number)`
栅格（格网）统计模块，该模块是进行栅格计算与渲染的基础模块。~~该模块可能会集成在 Grid 类中，视实现情况而定。~~该模块所代表的功能位于栅格类中，并且只提供最简单的统计功能，复杂的统计功能将由其他模块提供。

> - 以上是第二层级模块，这些模块为更复杂的功能模块提供了功能基础，同时避免了对底层模块对象的直接操作。

### 11. [Delaunay Module](https://pzq123456.github.io/RVGeo/modules/Delaunay.html)
（二维）狄罗妮三角网模块，该模块依赖底层基础模块提供的空间量测与计算能力并为更加复杂的功能模块提供数据结构方面的支持。`Voronoi` 图作为狄罗妮三角网的对偶图也顺带提供。

### 12. [Shell Module](https://pzq123456.github.io/RVGeo/modules/Shell.html)
目前实现了凸包算法以及 alpha complex 算法。该模块依赖于 `Delaunay` 模块提供的数据结构。

> - 可以使用以下命令克隆该分支代码：
``` bash
git clone --branch next --single-branch https://github.com/pzq123456/RVGeo.git
```
## 概念及设计
### 渲染能力
- 二维 Canvas 上下文：这部分主要用于渲染栅格数据，我们可以将栅格数据渲染好后再通过地图平台的接口绘制到地图上。
- 三维 WebGL 上下文：这部分尚未实现，计划采用 three.js 来实现，主要用于渲染 DEM 数据及其他三维数据。主要用来实现一些创新功能。
- 依附现有的 WGS84 地图渲染库（百度地图、高德地图、MapBox等）。
> - 当前样例功能依附百度地图