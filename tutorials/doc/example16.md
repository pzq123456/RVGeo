# Example16 三通道遥感影像渲染及对应的直方图
> 具体运行效果参考：https://pzq123456.github.io/RVGeo/dist
> * 影像金字塔部分详见 example14
> * 后续功能：卷积及其余算子的实现
> * 后续优化：webWorker 加速计算

![栅格值渲染](/RVGeo/tutorials/doc/imgs/e16-1.png)

## hist 直方图函数
- 函数签名, 函数位于 `RVGeo.Colors` 命名空间下。有多种拉伸方式，具体参考 `RVGeo.Colors.stretchType` 枚举类型。
```js
/**
 * 直方图计算函数
 * @param grid2D - 二维数组
 * @param stretch - 拉伸类型
 * @param statistics - 波段统计信息
 * @returns {number[]} - 直方图数组，长度为 256，每个元素表示对应灰度值的像素个数
 */
export function hist(
    grid2D: number[][],
    stretch: stretchType = stretchType.linear,
    statistics?: {max: number, min: number, mean: number},
):number[]{
    //...
}
```
- 使用
    ```js
    hist(grid.getBand(i),RVGeo.Colors.stretchType.square,grid.getBandStatistics(i))
    ```


## Full Code
```js
  const drawSample2 = RVGeo.Renderer.drawSample2;
  const drawProgress = RVGeo.Renderer.drawProgress;
  const hist = RVGeo.Colors.hist; // 直方图
  const progressBar = {x: 924, y: 1004, w: 100, h: 20};

  const trueColorBandFactory = RVGeo.Colors.trueColorBandFactory;
  const drawTrueColorGrid2d = RVGeo.Renderer.drawTrueColorGrid2d;

  let URL = 'exa2.tif';
  let URL2 = 'exa.tif';
  let rect = {x: 0, y: 0, w: 512, h: 512};
  let rect2 = {x: 0, y: 512, w: 512, h: 512};

  let rect3r = {x: 512, y: 0, w: 512, h: 512};
  let rect3g = {x: 512, y: 0, w: 512, h: 512};
  let rect3b = {x: 512, y: 0, w: 512, h: 512};
  let rect4r = {x: 512, y: 512, w: 512, h: 512};
  let rect4g = {x: 512, y: 512, w: 512, h: 512};
  let rect4b = {x: 512, y: 512, w: 512, h: 512};

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

        if(rect2){
          let styles = [
            {color: "rgba(255,0,0,0.3)", backgroundColor: "rgba(0,0,0,0.1)"},
            {color: "rgba(0,255,0,0.3)", backgroundColor: "rgba(0,0,0,0.1)"},
            {color: "rgba(0,0,255,0.3)", backgroundColor: "rgba(0,0,0,0.1)"}
          ]
          for(let i = 0; i < rect2.length; i++){
            drawSample2(canvas,rect2[i],hist(grid.getBand(i),RVGeo.Colors.stretchType.square,grid.getBandStatistics(i)),styles[i]);
          }
        }
      });
    });
  });
}
```