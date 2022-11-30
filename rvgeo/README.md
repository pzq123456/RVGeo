## SOMETHING NEW FOR V1.0.18 (22/11/23)
* `CHANGE` in interface `TEST`:
* * `function`:
* * - :`test_1(a, bx=0, by=0) `
* * - :`test_2(n, a, bx=0, by=0) `
> info:
> bx: bias for x
> by: bias for y

>`attention`:I am now modifing this package for [`vue`](https://cn.vuejs.org/).
## SOMETHING NEW FOR V1.0.16 (22/10/20)
* `NEW Interface `: __Test__ 
* * __Test__ can generate test data,which is based on `Math.Random` function.
* * `Test.test_1`, `Test.test_2`...
* `NEW Interface `: __Learn__
* * `Learn.Vector_nD`:n dimentions vector ,different types of distance calculation formulations
* * `Learn.Tensor_2D`:now just has k-means clustering function
## NEW FEATURE QUICK EXAMPLE : 3D CLUSTERING
```JS
    let pl = test_10(200,3,1000);// generate random data

    let ten = new Tensor_2D(pl);
    let res = ten.K_means(3,0.0001,100);// run k-means function (k means the number of groups)

    let pl1 = res[0];
    let ps1 = PointSet.fromaArray_2D(pl1,1,0); // choose plot dimention by index(n-1)
    let psv1 = new PointSetView(myCanvas.ctx,'green',ps1);
    psv1.draw();// draw point set in 2d canvas 
    psv1.draw_convex_hull();

    let pl2 = res[1];
    let ps2 = PointSet.fromaArray_2D(pl2,1,0);
    let psv2 = new PointSetView(myCanvas.ctx,'red',ps2);
    psv2.draw();
    psv2.draw_convex_hull();

    let pl3 = res[2];
    let ps3 = PointSet.fromaArray_2D(pl3,1,0);
    let psv3 = new PointSetView(myCanvas.ctx,'blue',ps3);
    psv3.draw();
    psv3.draw_convex_hull();
```
---
# Tutorial 1 : Base vector graphics
> `NOTE`: The vector graphics part (Vector interface) are now in __Planar Cartesian coordinate system__. We plan to support geoJSON in the 2.x.x version.
## Creating our "stage" --- canvas element
We need a HTML file and a list of buttons in it to boudle our codes.

```html
<!----
index.html
----->
<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="utf-8">
    <title>Example_1</title>
    <script type="module" src="main.js"></script>
</head>
<body>
    <h1> Raster example </h1>
    <button class="pointset">button_1</button>
</body>
</html>
```
Notice this line :"`<script type="module" src="main.js"></script>`".We insert our code segments as a module into this HTML file. Next,create the `main.js` file and we will write most of our codes in it.

```js
// main.js
import * as RV from './node_modules/rvgeo/index.js'
let myCanvas = new RV.Creator.Canvas('myCanvas', document.body, 1900, 1200);
myCanvas.create();
let pointsetBtn = document.querySelector('.pointset');
``` 
## Working with vector objects in RVGeo
RVGeo decouples data from its display. Vector objects store the geomatries and their corresponding properties, and Render classes wrap an renderer around the Vector object.

First ,let's create a Vector object (one of `Point` , `PointSet` , `Line` , `SimpleLine` , `Triangle` , `Circle`):(here we instantiate a `PointSet` Object.)
We pass the random point list, `pl` , as an argument to PointSet. This wraps an object over our point list, and supports geting deduplication and bbox， Here we define a pointset of 80 random points , and each element in it is limited in the range of "[0,700)".

```javascript
let pl = RV.Test.test_2(80,700); // create the random point list
let ps = new RV.Vector.PointSet(pl);// instantitate the PointSet object

```
## Displaying data
To show some Vector objects in RVGeo, we create a class from "`renderer`" interface . PointSetView wraps the PointSet ,`ps`,and draw it on canvas.
> NOTE: To vector objects ,we just use the "screen coordinate" and __the original point__ is at __the top right corner__.

```js
// to instantitate the object we need 2d context of the canvas ,the pen color and the object stored the original data.
let pointset1 = new RV.Renderer.PointSetView(myCanvas.ctx,'green',ps);
pointset1.draw();// we can use this renderer conveniously
pointset1.draw_convex_hull();
pointset1.draw_extent();
```
Now start your server ,click the button, and you will see this:
![img](./Tutorial/img/exm1.png "result")

              


