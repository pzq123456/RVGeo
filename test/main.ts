import {Point, point} from '../src/index';
import {Bounds} from '../src/index';
import {Canvas} from '../src/index';

const mydiv = document.getElementById('map') as HTMLElement;
const canvas = new Canvas(900, 600, mydiv);

// const bounds = new Bounds([point(100, 100), point(200, 200)]);
// canvas.drawBound(bounds.min.x, bounds.min.y, bounds.max.x, bounds.max.y,"red");
// bounds.extend(point(300, 300));
// canvas.drawBound(bounds.min.x, bounds.min.y, bounds.max.x, bounds.max.y,"blue");

// create point list
let points = [] as Point[];
let p1 = point(100, 100);
let p2 = point(200, 200);
let p3 = point(300, 300);
let p4 = point(400, 400);

let colors = ['red', 'blue', 'green', 'yellow'];
points.push(p1, p2, p3, p4);
points.forEach((p, i) => {
    canvas.drawPoint(p.x, p.y, colors[i]);
});

// use point list to create bounds
const bounds = new Bounds(points);
canvas.drawBound(bounds.min.x, bounds.min.y, bounds.max.x, bounds.max.y,"red");

// extend bounds
bounds.extend(point(500, 500));
canvas.drawBound(bounds.min.x, bounds.min.y, bounds.max.x, bounds.max.y,"blue");