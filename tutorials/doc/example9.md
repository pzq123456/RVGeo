# Example9 栅格 Coverage
```js
function example9(){ // 栅格
  axios.get('dem.csv').then((res)=>{
    let innerMBR = [
        -107.19241981061282,
        37.96392802178495,
        -104.23896455039352,
        39.75362886925538
    ] as [number, number, number, number];
    let data = parseData(res.data);
    // console.log(data);
    let grid = new RVGeo.Coverage.Grid(myMBR1,[data]);
    let testPoi = [-105.723781221762,38.87054575208597] as [number, number];
    let inMBR = grid.ConvertToGridMBR(innerMBR) as RVGeo.Geometry.MBR;
    let subdrid = grid.getSubGrid(inMBR);

    let grid2 = new RVGeo.Coverage.Grid(innerMBR,subdrid);
    console.log(grid2);

    drawGridLines2BLMap(grid2.MBR, grid2.rows, grid2.cols, map,{ strokeColor: "red", strokeWeight: 2, strokeOpacity: 0.5 });
    drawLineString2BLMap(RVGeo.Geometry.mbrToPolygon(myMBR1), map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 },true);
    drawPoint2BLMap(testPoi, map);
    drawLabel(testPoi, `${grid.getGridCoord(testPoi)}` ,map);
    drawGridLines2BLMap(grid.MBR, grid.rows, grid.cols, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 });

    // 向 canvas 绘制栅格
    drawGrid2d(canvas, data, {x: 0, y: 0, w: 512, h: 512}, grid.getBandStatistics(0));
  });

  function parseData(data:string){
      let lines = data.split('\n');
      let result = [];
      for(let line of lines){
          let nums = line.split(',');
          let row = [];
          for(let num of nums){
              // 读取整型 若有 NAN 则替换为 0
              let n = parseInt(num);
              if(isNaN(n)){
                  n = 0;
              }
              row.push(n);
          }
          result.push(row);
      }
      // 去掉最后一行
      result.pop();
      return result;
  }
}
```

## 附：在 GGE 平台上下载指定区域的遥感影像
```js
// 在 GEE 平台上获取遥感影像
function getImage(geometry) {
var image = ee.ImageCollection('LANDSAT/LC08/C01/T1_SR')
    .filterBounds(geometry)
    .filterDate('2019-01-01', '2019-12-31')
    .sort('CLOUD_COVER')
    .first();
return image;
}

// 使用 geometry 裁剪遥感影像
function clipImage(image, geometry) {
    var clippedImage = image.clip(geometry);
    return clippedImage;
}

// 保存裁剪好的遥感影像
function saveImage(image, name) {
    Export.image.toDrive({
        image: image,
        description: name,
        scale: 30,
        region: geometry
    });
}

// 主函数
function main(geometry) {
    var image = getImage(geometry);
    var clippedImage = clipImage(image, geometry);
    saveImage(clippedImage, 'clippedImage');
}

// 调用主函数
main(geometry);
```