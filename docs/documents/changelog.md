# Release Notes

## 2023-11-12 V2.0.7
> new function for Class Grid : `Grid.fillInvalidValue(bandIndex)`;
> - This function can replace the "invalid value" in given band with the mean value.
> - The so called values are now: -99999, 0. (may the 0 makes no sense and this function will uograde in the future) 
- 新增 `RGB` 三通道遥感影像渲染，指定渲染通道对应的波段即可实现真彩色、标准假彩色等遥感影像的渲染。
- Add `RGB` three-channel remote sensing image rendering, specify the band corresponding to the rendering channel to achieve the rendering of true color, standard false color and other remote sensing images.

```js
const drawGrid2d = RVGeo.Renderer.drawGrid2d;
const trueColorBandFactory = RVGeo.Colors.trueColorBandFactory;
const drawTrueColorGrid2d2 = RVGeo.Renderer.drawTrueColorGrid2d2;

let URL = 'exa2.tif';
let URL2 = 'exa.tif';
let rect = {x: 512, y: 0, w: 512, h: 512};
let rect2 = {x: 512, y: 512, w: 512, h: 512};
getShowTif(URL, rect);
getShowTif(URL2, rect2);

function getShowTif(URL: string, rect: {x: number, y: number, w: number, h: number}){
GeoTIFF.fromUrl(URL).then((tif:any) => {
  tif.getImage().then((image:any) => {
    let width = image.getWidth();
    // let height = image.getHeight();
    image.readRasters().then((rasters:any) => {
      let data = [] as number[][][];
      //选择 LadSet8 的 4、3、2 波段
      let bands = [3,2,1]; // 但是索引是从 0 开始的
      bands.forEach((band) => {
        data.push(parseData2(rasters[band], width,true,256));
      });
      console.log(data);
      let grid = new RVGeo.Coverage.Grid(myMBR1,data);
      let myTrueColorBand = trueColorBandFactory(RVGeo.Colors.stretchType.linear);
      drawTrueColorGrid2d2(canvas, grid, [0,1,2],rect, myTrueColorBand);
    });
  });
});
}
```
- 新增影像直方图，正在测试中，仅供参考。
```js
  const drawSample2 = RVGeo.Renderer.drawSample2;
  const drawProgress = RVGeo.Renderer.drawProgress;
  const progressBar = {x: 924, y: 1004, w: 100, h: 20};
  drawProgress(canvas,progressBar,0);

  const trueColorBandFactory = RVGeo.Colors.trueColorBandFactory;
  const drawTrueColorGrid2d = RVGeo.Renderer.drawTrueColorGrid2d;

  let URL = 'exa2.tif';
  let URL2 = 'exa.tif';
  let rect = {x: 0, y: 0, w: 512, h: 512};
  let rect2 = {x: 0, y: 512, w: 512, h: 512};

  let rect3r = {x: 512, y: 0, w: 512, h: 170};
  let rect3g = {x: 512, y: 170, w: 512, h: 170};
  let rect3b = {x: 512, y: 340, w: 512, h: 170};
  let rect4r = {x: 512, y: 512, w: 512, h: 170};
  let rect4g = {x: 512, y: 682, w: 512, h: 170};
  let rect4b = {x: 512, y: 852, w: 512, h: 170};

  getShowTif(URL, rect, [rect3r,rect3g,rect3b]);
  getShowTif(URL2, rect2, [rect4r,rect4g,rect4b]);


function getShowTif(URL: string, rect: {x: number, y: number, w: number, h: number},
  rect2?: {x: number, y: number, w: number, h: number}[]
  ){
  GeoTIFF.fromUrl(URL).then((tif:any) => {
    tif.getImage().then((image:any) => {
      let width = image.getWidth();
      image.readRasters().then((rasters:any) => {
        let data = [] as number[][][];
        // 4、3、2 波段 但是数组的索引是从0开始的 所以是3、2、1
        let bands = [3,2,1];
        bands.forEach((band) => {
          data.push(parseData2(rasters[band], width, true, 256));
        });
        let grid = new RVGeo.Coverage.Grid(myMBR1,data);

        grid.fillInvalidValue(0);  // 填充无效值
        grid.fillInvalidValue(1);
        grid.fillInvalidValue(2);

        let myTrueColorBand = trueColorBandFactory(RVGeo.Colors.stretchType.square);
        drawTrueColorGrid2d(canvas, grid, [0,1,2], rect, myTrueColorBand);
        drawProgress(canvas,progressBar,50);
        if(rect2){
          let styles = [
            {color: "rgba(255,0,0,1)", backgroundColor: "rgba(0,0,0,1)"},
            {color: "rgba(0,255,0,1)", backgroundColor: "rgba(0,0,0,1)"},
            {color: "rgba(0,0,255,1)", backgroundColor: "rgba(0,0,0,1)"}
          ]
          for(let i = 0; i < rect2.length; i++){
            drawSample2(canvas,rect2[i],grid.getSorted1DArray(i),styles[i]);
          }
        }
        drawProgress(canvas,progressBar,100);
      });
    });
  });
}
```
## 2023-11-12 V2.0.6 
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


## 2023-11-4 V2.0.5
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


## 2023-11-2 V2.0.4
- 栅格数据新增伪彩色渲染器
- New pseudocolor renderer for raster data
- 噪声模块新增三维 sin 函数噪声、三维柏林噪声及三维阻尼 sin 函数噪声
- New 3D sin noise, 3D Perlin noise and 3D damped sin noise in noise module

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


