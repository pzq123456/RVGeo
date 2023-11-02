# Example9 栅格 Coverage
> 具体运行效果参考：https://pzq123456.github.io/RVGeo/
## 栅格数据的渲染方式
目前栅格数据只支持渲染到二维 Canvas 上，然后调用地图的接口将 Canvas 以图层的方式添加到地图上，后续会根据需求添加更多的渲染方式。但是，我们可以根据栅格数据的地理范围及数据的行列总数，将栅格数据的范围绘制到地图上，以便于我们查看栅格数据的分布情况。

## 栅格值渲染（Canvas中）
![栅格值渲染](/RVGeo/tutorials/imgs/e12-2.jpg)
```ts
// 也可以调用平面栅格的渲染器 将数据渲染到 canvas 上
let myPseudoColorBand = RVGeo.Colors.pseudoColorBandFactory(RVGeo.Colors.stretchType.linear); // ["red", "yellow", "green","white"];
drawGrid2d(canvas, data, {x: 0, y: 0, w: 512, h: 512}, grid.getBandStatistics(0), myPseudoColorBand);
```
栅格在 Canvas 中渲染直接是等距离的，不会考虑地理坐标系的影响。同样，也需要传入在 Canavs 平面中的范围，以便于渲染器计算每个像素点的位置。渲染器函数使用工厂函数生产，选定对应的数值拉伸函数后即可得到对应的值渲染函数。根据色带的不同分为连续色带和离散色带。
```ts
let simpleColorband = RVGeo.Colors.simpleColorBandFactory(RVGeo.Colors.stretchType.linear); // 连续值 灰度
let PseudoColorBand = RVGeo.Colors.pseudoColorBandFactory(RVGeo.Colors.stretchType.linear); // 离散值 伪彩色
```

得到想要的值渲染函数后，我们可以调用 Renderer 中的渲染函数来渲染数据到 Canvas 上。渲染函数需要传入 Canvas 对象，数据，Canvas 中的范围，数据的统计信息，值渲染函数。统计信息是为了计算数据的最大最小值，以便于拉伸函数计算每个像素点的颜色值。
> 注意，统计信息是由 grid 类维护并生产的，所以需要先构建 grid 对象，然后再调用统计信息的接口来获取统计信息。
> - 这一绘制函数中的 data 和后来的统计数据设计的不太合理，后续会进行优化，应该只传入一个栅格对象就可以了，统计信息由栅格对象维护。

```ts
drawGrid2d(canvas, data, {x: 0, y: 0, w: 512, h: 512}, grid.getBandStatistics(0), myPseudoColorBand);
```




## 地图栅格范围渲染
![栅格范围渲染](/RVGeo/tutorials/imgs/e12-1.jpg)
```ts
let data = parseData(res.data);
let grid = new RVGeo.Coverage.Grid(myMBR1,[data]);
```

### 构架栅格对象
首先解析数据（后续会有专门的数据IO模块来处理，这里只是开发测试用），然后创建栅格对象，栅格对象的构造函数需要传入栅格数据的地理范围和数据。
> 注意传入数据的形状
> - data 本身是二维数组，在遥感中代表了一个波段的数据
> - 用于构建 grid 时却再包裹了一层数组，这是因为 grid 支持多波段数据，所以需要传入一个二维数组，每个元素代表一个波段的数据
### 使用栅格类来裁剪数据
```ts

let innerMBR = [
    -107.19241981061282,
    37.96392802178495,
    -104.23896455039352,
    39.75362886925538
] as [number, number, number, number];

// ...

let inMBR = grid.ConvertToGridMBR(innerMBR) as RVGeo.Geometry.MBR;
let subdrid = grid.getSubGrid(inMBR);
let grid2 = new RVGeo.Coverage.Grid(innerMBR,subdrid);
```
这里我们又指定了一个小一号的矩形来裁切原来的大栅格，然后再用裁切后的栅格来构建一个新的栅格对象，这样就可以得到一个小一号的栅格对象了。

### 绘制栅格范围（在地图上）
```ts
// 可以把数据映射到地图上（目前只支持将 Canvas 以图层的方式添加到地图上，这里的直接绘制只是标识出栅格数据的范围）
drawGridLines2BLMap(grid2.MBR, grid2.rows, grid2.cols, map,{ strokeColor: "red", strokeWeight: 2, strokeOpacity: 0.5 });
drawLineString2BLMap(RVGeo.Geometry.mbrToPolygon(myMBR1), map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 },true);
drawPoint2BLMap(testPoi, map);
drawLabel(testPoi, `${grid.getGridCoord(testPoi)}` ,map);
drawGridLines2BLMap(grid.MBR, grid.rows, grid.cols, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 });
```
这里只是简单的绘制每一个栅格值对应的地理范围，以便于我们查看栅格数据的分布情况。大的原栅格采用绿色绘制，小的裁剪后的栅格采用红色绘制。放大地图可以发现误差分布是由中心向四周逐渐增大的，也就是说无法严格的将地理范围等分成行列数目相同的栅格，这是因为地理坐标系是弧度制，而栅格坐标系是平面坐标系，所以在地理坐标系下的距离在栅格坐标系下是不等的，这里的误差是由这两个坐标系的转换造成的。


## Full Example
```ts
axios.get('dem.csv').then((res)=>{

let innerMBR = [
    -107.19241981061282,
    37.96392802178495,
    -104.23896455039352,
    39.75362886925538
] as [number, number, number, number];

let data = parseData(res.data);

let grid = new RVGeo.Coverage.Grid(myMBR1,[data]);
let testPoi = [-105.723781221762,38.87054575208597] as [number, number];
let inMBR = grid.ConvertToGridMBR(innerMBR) as RVGeo.Geometry.MBR;
let subdrid = grid.getSubGrid(inMBR);

let grid2 = new RVGeo.Coverage.Grid(innerMBR,subdrid);

// 可以把数据映射到地图上（目前只支持将 Canvas 以图层的方式添加到地图上，这里的直接绘制只是标识出栅格数据的范围）
drawGridLines2BLMap(grid2.MBR, grid2.rows, grid2.cols, map,{ strokeColor: "red", strokeWeight: 2, strokeOpacity: 0.5 });
drawLineString2BLMap(RVGeo.Geometry.mbrToPolygon(myMBR1), map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 },true);
drawPoint2BLMap(testPoi, map);
drawLabel(testPoi, `${grid.getGridCoord(testPoi)}` ,map);
drawGridLines2BLMap(grid.MBR, grid.rows, grid.cols, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 });

// 也可以调用平面栅格的渲染器 将数据渲染到 canvas 上
let myPseudoColorBand = RVGeo.Colors.pseudoColorBandFactory(RVGeo.Colors.stretchType.linear); // ["red", "yellow", "green","white"];
drawGrid2d(canvas, data, {x: 0, y: 0, w: 512, h: 512}, grid.getBandStatistics(0), myPseudoColorBand);

const stretchType = RVGeo.Colors.stretchType;
let postions = [
    [0,0],
    [0,1],
    [1,0],
    [1,1]
]
// 遍历枚举类型
for(let type in stretchType){
    if(isNaN(parseInt(type))) continue;
    let colorband = RVGeo.Colors.simpleColorBandFactory(parseInt(type));
    let postion = postions[parseInt(type)];
    drawGrid2d(canvas, data, {x: postion[0]*256, y: postion[1]*256 + 256*2, w: 256, h: 256}, grid.getBandStatistics(0), colorband);
}

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
```