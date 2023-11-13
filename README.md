# RVGeo V 2.0
> get the test DEM data from this link: https://pzq123456.github.io/RVGeo/dist/dem.csv
<div class="Example" 
style="
    background: linear-gradient(90deg, #0c5e62 0%, #08b372 100%);
    padding: 10px;
    border-radius: 5px;
    border: solid 1px #ffffff;
    margin-bottom: 10px;
    /* 居中内部元素 */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;">
    <a href="/RVGeo/dist/index.html" 
    style="
        color: #ffffff;
        font-size: 20px;
        text-decoration: none;">
        (click) Example Page | RVGeo 示例页面 （点此访问）
    </a>
</div>
<div class="tutorials" 
style="
    background: linear-gradient(90deg, #02101e 0%, #4d5baa 100%);
    padding: 10px;
    border-radius: 5px;
    border: solid 1px #ffffff;
    margin-bottom: 10px;
    /* 居中内部元素 */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;">
    <a href="/RVGeo/tutorials/index.html" 
    style="
        color: #ffffff;
        font-size: 20px;
        text-decoration: none;">
        (click) Tutorials Page | RVGeo 教程页面 （点此访问）
    </a>
</div>
<div class="npm" 
        style="
            background: linear-gradient(90deg, #f6a92d 0%, #ff5d5df9 50%,#941bd4 100%);
            padding: 10px;
            border-radius: 5px;
            border: solid 1px #ffffff;
            margin-bottom: 10px;
            /* 居中内部元素 */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        "
    >
        <a href="https://www.npmjs.com/package/rvgeo"
        style="
        color: #ffffff;
        font-size: 20px;
        text-decoration: none;
        "
        >
            npm Page | RVGeo npm 页面
        </a>
</div>

> - RVGeo (V2.0.0) is now available on [npm](https://www.npmjs.com/package/rvgeo).
> - You could get some tutorials from this [site](https://pzq123456.github.io/RVGeo/tutorials/index.html)
> - [more information](https://pzq123456.github.io/RVGeo/)

## Release Notes
### 2023-11-12 V2.0.6 
- 新增影像金字塔（Example14） 图像傅里叶变换（Example15）
- New image pyramid (Example14) image Fourier transform (Example15)
- You can use `RVGeo.Coverage.subdivide2QTree` to get the image pyramid, and use `RVGeo.Renderer.drawQTree2d` to draw the image pyramid.
  ```js
  const subdivide2QTree = RVGeo.Coverage.subdivide2QTree;
  const Grid = RVGeo.Coverage.Grid;
  const drawQTree2d = RVGeo.Renderer.drawQTree2d;
  const drawGrid2d = RVGeo.Renderer.drawGrid2d;
  let mySimpleColorBand = RVGeo.Colors.simpleColorBandFactory(RVGeo.Colors.stretchType.linear);
  axios.get('dem.csv').then((res)=>{
  let data = parseData(res.data);
  let grid = new Grid(myMBR1,[data]);
  let subgrid = subdivide2QTree(grid,10); // 10 为金字塔层数
  drawQTree2d(canvas,{x: 0, y: 0, w: 1024, h: 1024},subgrid,grid,mySimpleColorBand)
  drawGrid2d(canvas, data, {x: 1024, y: 0, w: 1024, h: 1024}, grid.getBandStatistics(0), mySimpleColorBand);
  });
  ```
- You can use the following code segment to test 1D FFT and visualize the result.
  ``` js
  const subdivide2QTree = RVGeo.Coverage.subdivide2QTree;
  const Grid = RVGeo.Coverage.Grid;
  const drawQTree2d = RVGeo.Renderer.drawQTree2d;
  const drawGrid2d = RVGeo.Renderer.drawGrid2d;
  let mySimpleColorBand = RVGeo.Colors.simpleColorBandFactory(RVGeo.Colors.stretchType.linear);
  axios.get('dem.csv').then((res)=>{
  let data = parseData(res.data);
  let grid = new Grid(myMBR1,[data]);
  let subgrid = subdivide2QTree(grid,10);
  drawQTree2d(canvas,{x: 0, y: 0, w: 1024, h: 1024},subgrid,grid,mySimpleColorBand)
  drawGrid2d(canvas, data, {x: 1024, y: 0, w: 1024, h: 1024}, grid.getBandStatistics(0), mySimpleColorBand);
  });
  ```
- You can use the following code segment to test 2D FFT and visualize the result.
  ``` js
    const subdivide2QTree = RVGeo.Coverage.subdivide2QTree;
    const Grid = RVGeo.Coverage.Grid;
    const drawQTree2d = RVGeo.Renderer.drawQTree2d;
    const drawGrid2d = RVGeo.Renderer.drawGrid2d;
    let mySimpleColorBand = RVGeo.Colors.simpleColorBandFactory(RVGeo.Colors.stretchType.linear);
    axios.get('dem.csv').then((res)=>{
    let data = parseData(res.data);
    let grid = new Grid(myMBR1,[data]);
    let subgrid = subdivide2QTree(grid,10);
    drawQTree2d(canvas,{x: 0, y: 0, w: 1024, h: 1024},subgrid,grid,mySimpleColorBand)
    drawGrid2d(canvas, data, {x: 1024, y: 0, w: 1024, h: 1024}, grid.getBandStatistics(0), mySimpleColorBand);
    });
  ```


### 2023-11-4 V2.0.5
- 新增等值线计算与渲染（基于 Marching Squares 方法）
- Contour calculation and rendering (based on Marching Squares method)
- You can use `RVGeo.Renderer.drawCountour` to draw contour lines, after you get the contour code from `RVGeo.Coverage.Grid.getCoutourCode`
```ts
  const drawCountour = RVGeo.Renderer.drawCountour;

  axios.get('dem.csv').then((res)=>{
    let data = parseData(res.data);
    let grid = new RVGeo.Coverage.Grid(myMBR1,[data]);
    let countour1 = grid.getCoutourCode(0,0.6);
    drawCountour(canvas, countour1, {x: 0, y: 0, w: 1024, h: 1024},"red");
  })
```


### 2023-11-2 V2.0.4
- 栅格数据新增伪彩色渲染器
- New pseudocolor renderer for raster data
- 噪声模块新增三维 sin 函数噪声、三维柏林噪声及三维阻尼 sin 函数噪声
- New 3D sin noise, 3D Perlin noise and 3D damped sin noise in noise module

## TODO List
- [ ] 移动方格法实现等高线绘制
- [ ] 三维地形渲染（为保持库内容精简，使用原生 WebGL 实现）
- [ ] 三通道彩色渲染器（针对多波段遥感数据）
- [ ] 栅格计算操作（卷积、滤波、腐蚀、膨胀等）
- [ ] GeoTIFF 数据读取模块

---

- [ ] Contour drawing based on moving square method
- [ ] 3D terrain rendering (to keep the content of the library concise, use native WebGL implementation)
- [ ] Three-channel color renderer (for multi-band remote sensing data)
- [ ] Raster calculation operations (convolution, filtering, erosion, expansion, etc.)
- [ ] GeoTIFF data reading module

> - 现在可以在 `RVGeo.BMAPDraw` 中访问到百度地图的绘制工具，该工具基于百度地图的绘制工具，但是对于绘制的图形进行了封装，使得其可以与 RVGeo 的其他图形进行交互。
> - Now you can access the drawing tool of Baidu Map in `RVGeo.BMAPDraw`. The tool is based on the drawing tool of Baidu Map, but the drawn graphics are encapsulated so that they can interact with other graphics of RVGeo.



## 项目说明 | Project Description
- `main` 分支为稳定（npm 发布）版本，`next` 分支为开发版本。文档及示例网站均基于 `next` 分支。
- `main` branch is the stable version (npm release), `next` branch is the development version. The documentation and example website are based on the `next` branch.
- `main` 分支不含除了库本身以外的任何文件，`next` 分支包含文档、示例网站、示例代码等。
- `api reference`  https://pzq123456.github.io/RVGeo/
- `Usage` https://pzq123456.github.io/RVGeo/tutorials/index.html

## Example
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

## 本包的潜在优势 | Potential Advantages
- 便捷快速地引入基础空间分析算法
- Conviniently import basic spatial analysis algorithms
- 跨地图服务商的一致性开发体验
- Consistent development experience across map service providers
## 定位
- 赋予前端地图以基础空间分析及计算能力。当前一些前端地图库，重视觉效果，轻空间分析，使用者往往需要自己编写冗长的业务代码才能实现一些在桌面应用中极容易实现的功能（例如空间插值、空间求交、投影等）。
- In order to give front-end maps basic spatial analysis and calculation capabilities. Some of the current front-end map libraries focus on visual effects and light spatial analysis. Users often need to write long business code to achieve some functions that are extremely easy to implement in desktop applications (such as spatial interpolation, spatial intersection, projection, etc.).
- 我希望参考一些经典的 GIS 系统的底层包（AO、AE、GeoTools等）的设计，结合时下流行的前端地图及数据可视化包，使用 TypeScript 语言构建一款功能强大的前端 GIS 工具库。
- I hope to refer to the design of some classic GIS system's underlying packages (AO, AE, GeoTools, etc.), combined with popular front-end map and data visualization packages, using the TypeScript language to build a powerful front-end GIS tool library.
- 探索：在按部就班地实现基础空间分析功能的同时，我希望继续围绕“好用”这一中心探索新的功能。目前已经确定要实现的功能大致包括，时空立方体，地形的三维渲染等。这一块的代码将单独组织，等建立起社区后再逐步集成。
- Exploration: While implementing basic spatial analysis functions in an orderly manner, I hope to continue to explore new functions around the center of "easy to use". The functions that have been determined to be implemented include space-time cubes, three-dimensional rendering of terrain, etc. The code in this area will be organized separately, and will be gradually integrated after the community is established.
## 总览 | Overview
> - 以下内容为暂定设计稿件。打 “*” 的模块处于待定状态，有可能会并入其他模块。
> - The following content is a tentative design draft. The modules marked with "*" are in a pending state and may be merged into other modules.

![](/DrawIO/module.svg)
> 图片说明：
>  - 虚线框中代表尚未实现（或正在实现）的模块
> - The dashed box represents the module that has not been implemented (or is being implemented)
>  - 模块在纵向存在依赖（一定的）关系，且左侧部分为矢量数据提供支持，右侧为栅格数据
> - The modules have a (certain) dependency relationship in the vertical direction, and the left part provides support for vector data, and the right part is raster data
>  - 核心包与插件系统：紫色实线矩形代表 RVGeo 2.0 的核心包，蓝色虚线矩形代表数据 I/O 插件（设计用于解析和生成不同格式的数据），顶部灰色虚线矩形代表渲染引擎
> - Core package and plug-in system: The purple solid rectangle represents the core package of RVGeo 2.0, the blue dashed rectangle represents the data I/O plug-in (designed to parse and generate data in different formats), and the top gray dashed rectangle represents the rendering engine
>  - Renderer Engine 模块：该模块采用类似于 UNIX 的插件思想，将封装不同的地图服务提供商的API以实现一套统一的基础图形绘制方法，以获得跨地图服务的一致开发体验。另外，该模块还将集成三维地形渲染与基础图表渲染。现考虑将其作为独立于 RVGeo 核心包的插件库发布。
> - Renderer Engine module: This module adopts a plug-in idea similar to UNIX to encapsulate the APIs of different map service providers to achieve a unified set of basic graphics drawing methods in order to obtain a consistent development experience across map services. In addition, the module will also integrate three-dimensional terrain rendering and basic chart rendering. Now consider releasing it as a plug-in library independent of the RVGeo core package.
>  - 开发阶段架构可能会有所出入，预计（从现在起）一年左右逐步稳定下来。
> - The development stage architecture may change, and it is expected to stabilize gradually (from now on) in about a year.
### 1. Data I/O Module
该模块封装了 `axios` 包用以获取数据，暂时实现了 `GeoJSON` 及 `CSV` 数据格式的读取与转换。该模块一般将数据解析为多维数组（中间格式），并传递给 `Meta` 模块用以产生内置 `Geometry` 或 `Coverage` 对象。
### 2. Meta Module
该模块类似于工厂函数，用于生成基于 `GeoJSON` 标准的内置几何对象（栅格对象采用另外的格式，待定）。

### 3. Geometry Moudle
基于 `GeoJSON` 标准，该模块内部维护了对应的几何对象，主要包括：
  - `Point`
  - `MultiPoint`
  - `LineString`
  - `MultiLineString`
  - `Polygon`
> 注意：出于易用性的考虑，这些几何类仅包含最基础的数据操作，复杂的空间算法并未封装进这些类中。

### 4. Coverage Module （实现中...）
该模块的数据结构由两部分组成：代表栅格数据的多维数组和代表（矢量）地理覆盖的矩形对象。可通过简单的分割算法将栅格多维数组均匀地分配到地理覆盖矩形的各个格网中。该数据结构可以尽量做到与 `GeoJSON` 中的 `Polygon` 相兼容。

### 5. Unit 
该模块主要用于处理单位换算问题，支持多种单位的互相转换，转换参数以常数的形式记录并提供一些工具函数方便用户进行快速单位换算。（精度仅与一般 `JavaScript` 计算精度保持一致）

### 6. Reference
该模块主要用于坐标系转换，目前仅实现了 `WGS84` 与 Web 墨卡托坐标系的互相转换。(epsg:4326 <---> epsg:3857) 也就是（椭）球面坐标系与平面坐标系之间的（部分）相互转换。

### 7*. Colors
该模块的本质是数值到颜色的映射函数，矢量与栅格都要用到。本应该置于可视化层级（渲染层），但是考虑到 `数值-颜色` 映射功能在 `GIS` 中十分基础，且想要尝试一些颜色方面的计算（实验性功能）故把它也放在整个架构的最底层。

> - 以上就是 RVGeo 的基础模块，这些简单的模块是下一步更加复杂模块的基础。另外，我们也将 `GeoJSON` 的规则使用 `TypeScript` 中的类部分实现，这些基础模块是维持包接口稳定、规范的重要部分。

### 8. Measuration Module
量测模块，该模块主要用于距离、面积等参数的量测，属于相对基础的功能（但是又需要依赖几何对象）所以位于第二层级。目前主要提供球面与平面两种坐标系下的数值量测功能接口，一般情况下，认为球面量测较为准确（平面量测受到纬度投影变形的影响），也推荐使用球面量测算法。

### 9. Spatial computing Module
空间计算模块，主要是二维的计算几何，日后也会整合三维几何计算的相关算法。目前仅实现了直线求交及（简单）多边形求交。

### 10*. (Grid) Statistic（实现中...）
栅格（格网）统计模块，该模块是进行栅格计算与渲染的基础模块。该模块可能会集成在 Grid 类中，视实现情况而定。

> - 以上是第二层级模块，这些模块为更复杂的功能模块提供了功能基础，同时避免了对底层模块对象的直接操作。

### 11. Delaunay Module
（二维）狄罗妮三角网模块，该模块依赖底层基础模块提供的空间量测与计算能力并为更加复杂的功能模块提供数据结构方面的支持。`Voronoi` 图作为狄罗妮三角网的对偶图也顺带提供。

### 12. Shell Module
壳模块，包括凸包和凸壳（尚未实现），其中凸包可以直接构建，凸壳的构建需要借助三角网。
