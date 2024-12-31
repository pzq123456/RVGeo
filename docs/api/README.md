**rvgeo**

***

# RVGeo 2.0.9 改动说明
- demo: https://pzq123456.github.io/RVGeo/dist/index.html
- docs: this site

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

## origonal RVGeo Welcom Page
## Release Notes
### 2023-11-12 V2.0.7
> new function for Class Grid : `Grid.fillInvalidValue(bandIndex)`;
> - This function can replace the "invalid value" in given band with the mean value.
> - The so called values are now: -99999, 0. (may the 0 makes no sense and this function will uograde in the future) 
- 新增 `RGB` 三通道遥感影像渲染，指定渲染通道对应的波段即可实现真彩色、标准假彩色等遥感影像的渲染。
- Add `RGB` three-channel remote sensing image rendering, specify the band corresponding to the rendering channel to achieve the rendering of true color, standard false color and other remote sensing images.

- 新增影像直方图，正在测试中，仅供参考。
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
