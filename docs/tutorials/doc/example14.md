# Example14 栅格金字塔 (Raster Pyramid)
![example13](/RVGeo/tutorials/doc/imgs/e14-1.gif)
```ts
    const subdivide2QTree = RVGeo.Coverage.subdivide2QTree;
    const Grid = RVGeo.Coverage.Grid;
    const drawQTree2d = RVGeo.Renderer.drawQTree2d;
    const drawGrid2d = RVGeo.Renderer.drawGrid2d;
    let mySimpleColorBand = RVGeo.Colors.simpleColorBandFactory(RVGeo.Colors.stretchType.linear);
    axios.get('dem.csv').then((res)=>{
    let data = parseData(res.data);
    let grid = new Grid(myMBR1,[data]);
    let subgrid = subdivide2QTree(grid,10);
    drawQTree2d(
        canvas,{x: 0, y: 0, w: 1024, h: 1024},subgrid,grid,mySimpleColorBand
    )
    drawGrid2d(canvas, data, {x: 1024, y: 0, w: 1024, h: 1024}, grid.getBandStatistics(0), mySimpleColorBand);
    });
```