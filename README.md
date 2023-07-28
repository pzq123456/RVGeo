# RVGeo (contemporary version)
> next version: V2.X.X
> - see in Branch: `next`
## TODO
- 参考 GeoTools 及 Truf.js 重构 RVGeo
- 标准化代码
- 引入测试框架
- 引入文档生成工具
- https://github.com/torokmark/design_patterns_in_typescript
- https://www.codenong.com/js0dea3b0a4b75/

## Simple Usage
[npm page](https://www.npmjs.com/package/rvgeo)
# A Brief Tutorial for RVGeo.js
> - `Something new` is coming soon! ( 3D terrian rendering and GeoJSON with WGS84 ) See in V2.X.X .
> - You can check those code on [GitHub](https://github.com/pzq123456/RVGeo). I have written a basic example page to show you how to use it! Just click on this [link](https://pzq123456.github.io/RVGeo/) and start the broswer-debugger-toolkit.
> - `Note`: RVGeo.js is now in the early stage of development. We will continue to improve it and add more features. If you have any questions or suggestions, please contact me by email: `
> - `Warning`: Everything is on 2D plane now. We will support 3D and sphere in the future. Unfortunately, you **CAN NOT** directly introduce RVGeo.js into existing map frameworks like `leaflet` or `mapbox-gl-js` now. We will support GeoJSON in the future.

First let's create our "stage" --- canvas element. We need a HTML file with a list of buttons to boudle our codes.

```html
<!---- index.html ----->
<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="utf-8">
    <title>Example</title>
    <script type="module" src="main.js"></script>
</head>
<body>
    <button class="btn1">button_1</button>
    <button class="btn2">button_2</button>
    <button class="btn3">button_3</button>
    <button class="btn4">button_4</button>
    <!-- add a button once you need it! -->
</body>
</html>
```
> Notice this line :"`<script type="module" src="main.js"></script>`". 
> - We insert our code segments as a module into this HTML file. Next, create the `main.js` file and we will write most of our codes in it.

## Namespace
Here is the `index.js` for RVGeo.
```js
// index.js
// ... some code
export {
    Vector,
    Raster,
    Stastic,
    Renderer,
    Creator,
    Learn,
    Test,
    pan
}
```

## Import RVGeo
If you use npm to install RVGeo, you can import it like this.
```js
// main.js
import * as RV from "./node_modules/rvgeo/index.js"
```
> If you use vite, you can config the vite.config.js like this:
> ```js
> export default defineConfig({
>     plugins: [vue(),vitePluginString()],
>     resolve: {
>         alias: {
>             'rvgeo': path.resolve(__dirname, './node_modules/rvgeo/index.js')
>         }
>     }
> })
> ```
> Then you can import it like this:
> ```js
> import * as RV from "rvgeo"
> ```

## Usage
### 1. Create a canvas and a footer
We create the canvas and footer in the `main.js` file. Every "ctx" in RVGeo is a 2d context of a canvas element. We can use it to draw something on the canvas.
```js
// main.js
// create the canvas 
let myCanvas = new RV.Creator.Canvas('myCanvas', document.body, 1900, 1200);
myCanvas.create();

// creater footer 
// just skip this part if you don't need it.
let footer = document.createElement('footer');
footer.innerHTML = '© 2022-2023 Powered by RVGeo.js';
document.body.appendChild(footer);
footer.style.flex = '0 0 auto';
footer.style.textAlign = 'center';
footer.style.backgroundColor = '#f5f5f5';
```

### 2. Add handler for buttons
First of all, let's query the buttons and add event listeners to them.
- `btn1` : draw a pointset and its convex hull.
- `btn2` : draw a complexline and it trend line.
```js
    // Some semantic code may make it more readable. like this: 
    // let btnOfLine = document.querySelector('.btn1'); // line
    let btn1 = document.querySelector('.btn1');
    let btn2 = document.querySelector('.btn2');

    // add event listener
    // 1.draw a pointset and its convex_hull
    btn1.addEventListener('click', () => {
        let pl = RV.Test.test_2(80,700,100,100); //get rendom point list
        let ps = new RV.Vector.PointSet(pl);
        let pointset1 = new RV.Renderer.PointSetView(myCanvas.ctx,'green',ps)
        // clear the canvas before drawing
        myCanvas.ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pointset1.draw();
        pointset1.draw_convex_hull(true);
        pointset1.draw_extent();
    });
    // 2.draw a complexline and it trend line
    btn2.addEventListener('click', () => {
        let pl = RV.Test.test_4(1900,500,10);
        let pointset1 = new RV.Renderer.LineView(myCanvas.ctx,"rgba(255, 157, 0, 0.846)",pl);
        // clear the canvas before drawing
        myCanvas.ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pointset1.draw("rgba(255, 157, 0, 0.846)",1,false);
        pointset1.draw_DPsmmoth(290,true);
        pointset1.draw_extent();
    });
```

### 3. Triangle and Circle (inner&outer)
```js
let btn3 = document.querySelector('.btn3');
btn3.addEventListener('click', () => {
  let tr = RV.Test.test_5(800);
  let tri = new RV.Renderer.TriangleView(myCanvas.ctx,'green',tr);
  // clear the canvas before drawing
  myCanvas.ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  tri.draw_EXCircle(true);
  tri.draw();
  tri.draw_INCircle();
  tri.draw_info("center of outer circle"); // draw the info of the outer circle in the canvas
  tri.draw_vertices("red",true);
});
```

### 4. Delaunay Triangulation
First let's generate mock data.
```js
let pl = RV.Test.test_6(100,1000); // generate random point list
let plt = [];

for(let itm of pl){
  let po = new RV.Vector.Point(itm[0],itm[1]);
  plt.push(po);
}
```
Then we can use the `Delaunay_triangulation` function to get the triangulation.
```js
let btn4 = document.querySelector('.btn4');
btn4.addEventListener('click', () => {
  // clear the canvas before drawing
  myCanvas.ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  // get the triangulation
  let trilist = RV.Vector.Delaunay_triangulation(pl);
  let data = RV.Vector.Tesson_polygon_adj_Matrix(pl);

  for(let tri of trilist){
    let triview = new RV.Renderer.TriangleView(myCanvas.ctx,'green',tri);
    triview.draw();
  }

  let grid1= RV.Raster.fromMatrix(data);
  let gridview = new RV.Renderer.GridView(myCanvas.ctx,grid1,512+512,512+512+10,512+512+512,512+10);
  gridview.draw_dispersed_custom(myCanvas.height,true,RV.pan.CellValueRenderer.ColorBand_1,"三角形邻接关系",4)
})
```
> - Render the 2D Data Structure : We can use adjaceny matrix to represent the adjacency relationship of the triangles. RVGeo.js provides a `GridView` class to render the matrix. This is a very intesting feature. You can use it to render any matrix you want. Just try it!

### 5. K-means Clustering
We can use the `K_means` function to get the clustering result.
```js
let btn5 = document.querySelector('.btn5');
btn.addEventListener('click', () => {

    // clear the canvas before drawing
    myCanvas.ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

    let pl = RV.Test.test_10(200,3,1000); // generate random data

    let ten = new RV.Learn.Tensor_2D(pl);
    let res = ten.K_means(3,0.0001,100);

    let pl1 = res[0];
    let ps1 = RV.Vector.PointSet.fromaArray_2D(pl1,1,0);
    let psv1 = new RV.Renderer.PointSetView(myCanvas.ctx,'green',ps1);
    psv1.draw();
    psv1.draw_convex_hull(true);
    // psv1.draw_extent(true);

    let pl2 = res[1];
    let ps2 = RV.Vector.PointSet.fromaArray_2D(pl2,1,0);
    let psv2 = new RV.Renderer.PointSetView(myCanvas.ctx,'red',ps2);
    psv2.draw();
    psv2.draw_convex_hull(true);
    // psv2.draw_extent(true);

    let pl3 = res[2];
    let ps3 = RV.Vector.PointSet.fromaArray_2D(pl3,1,0);
    let psv3 = new RV.Renderer.PointSetView(myCanvas.ctx,'blue',ps3);
    psv3.draw();
    psv3.draw_convex_hull(true);
    // psv3.draw_extent(true);
})
```
