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
![img](img/exm1.png "result")

              


