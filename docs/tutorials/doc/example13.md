# Example13 绘制等高线 draw contour  

> - 采用 marching squares 方法追踪等高线，使用了栅格类，等高线绘制函数，简单色带，伪彩色带
> - Use marching squares to draw contour, use Grid class, draw contour function, simple color band, pseudo color band

![example13](/RVGeo/tutorials/doc/imgs/e13-1.jpg)

```ts
const binDrawGrid2d = RVGeo.Renderer.binDrawGrid2d;
  const drawCountour = RVGeo.Renderer.drawCountour;
  axios.get('dem.csv').then((res)=>{
    let data = parseData(res.data);
    let grid = new RVGeo.Coverage.Grid(myMBR1,[data]);

    let countour1 = grid.getCoutourCode(0,0.6);
    let countour2 = grid.getCoutourCode(0,1.2);
    let countour3 = grid.getCoutourCode(0,1.8);
    let countour4 = grid.getCoutourCode(0,2.4);
    let countour5 = grid.getCoutourCode(0,3.6);
    let countour6 = grid.getCoutourCode(0,4.8);


    drawGrid2d(canvas, data, {x: 0, y: 0, w: 1024, h: 1024}, grid.getBandStatistics(0), 
      RVGeo.Colors.simpleColorBandFactory(RVGeo.Colors.stretchType.linear));

    binDrawGrid2d(canvas, countour1, {x: 0, y: 0, w: 1024, h: 1024},RVGeo.Colors.simplePseudoColorBand);
    drawCountour(canvas, countour1, {x: 0, y: 0, w: 1024, h: 1024},"red");
    drawCountour(canvas, countour2, {x: 0, y: 0, w: 1024, h: 1024},"green");
    drawCountour(canvas, countour3, {x: 0, y: 0, w: 1024, h: 1024},"blue");
    drawCountour(canvas, countour4, {x: 0, y: 0, w: 1024, h: 1024},"orange");
    drawCountour(canvas, countour5, {x: 0, y: 0, w: 1024, h: 1024},"purple");
    drawCountour(canvas, countour6, {x: 0, y: 0, w: 1024, h: 1024},"black");

  })
```

![example13](/RVGeo/tutorials/doc/imgs/e13-1.jpg)