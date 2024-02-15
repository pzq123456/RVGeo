import {
    Canvas, 
    Point, point, 
    Bounds, bounds, 
    Transformation, transformation} from '../../src';

const mydiv = document.getElementById('map') as HTMLElement;
const canvas = new Canvas(1800, 600, mydiv);

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
    // draw label
    canvas.drawLabel(p.x, p.y, `P${i+1}`,colors[i]);
});

// use point list to create bon
const bon = new Bounds(points);
canvas.drawBound(bon.min.x, bon.min.y, bon.max.x, bon.max.y,"red");

// test bon overlap
let bon2 = new Bounds([point(300, 300), point(500, 500)]);
canvas.drawBound(bon2.min.x, bon2.min.y, bon2.max.x, bon2.max.y,"blue");
let bon3 = new Bounds([p2, p3]);
// draw bon
canvas.drawBound(bon3.min.x, bon3.min.y, bon3.max.x, bon3.max.y, 'yellow');

// overlap?
let overlap = bon.overlaps(bon2);
console.log('overlap:', overlap);
let center = bon.getCenter();
canvas.drawPoint(center.x, center.y, 'green', '+', 5);
// draw label
canvas.drawLabel(center.x, center.y, `Center (${center.x},${center.y})`, 'green');
// contains
let p5 = point(600, 350);
let contains = {
    point:bon.contains(p5),
    bon:bon.contains(bon3)
};
// draw point
canvas.drawPoint(p5.x, p5.y, 'purple', 'X', 5);
// draw label
canvas.drawLabel(p5.x, p5.y, `P5 contains: ${contains.point}`, 'purple');

console.log('contains:', contains);

// intersects
let intersects = bon.intersects(bon2);
console.log('intersects:', intersects);

// test pad
let bon4 = bon.pad(-0.1);
console.log('bon4:', bon4);
canvas.drawBound(bon4.min.x, bon4.min.y, bon4.max.x, bon4.max.y, 'orange');
// test equals
let equals = bon.equals(bon);
console.log('equals:', equals);
// test extend
bon.extend(p5);
console.log('bon:', bon);
canvas.drawBound(bon.min.x, bon.min.y, bon.max.x, bon.max.y, 'gray');

// test toPoint
/**
 * var point = toPoint([200, 300]);
 * var point = toPoint({x: 200, y: 300});
 * var point = toPoint(200, 300.5, true);
 */

let p6 = point([200, 300]);
let p7 = point({x: 200, y: 300});
let p8 = point(200, 300.5, true);
console.log('p6:', p6);
console.log('p7:', p7);
console.log('p8:', p8);

// test toBounds
let bon5 = bounds(p1, p2);
let bon6 = bounds([p1, p2, p3]);
let bon7 = bounds([[100, 100], [200, 200], [300, 300]]);
let bon8 = bounds(bon5);
console.log('bon5:', bon5);
console.log('bon6:', bon6);
console.log('bon7:', bon7);
console.log('bon8:', bon8);
// is bon7 = bon6?
console.log('bon7 = bon6:', bon7.equals(bon6));
// toGeoJSON
let geojson = bon.toGeoJSON();
console.log('geojson:', geojson);

// test toTransformation
let trans = transformation(20, 50, -10, 100);
let p = point(1, 2);
// draw point
canvas.drawPoint(p.x, p.y, 'green', 'o', 3);
console.log('p:', p);
let pt = trans.transform(p);
// draw point
canvas.drawPoint(pt.x, pt.y, 'blue', '+', 3);
console.log('pt:', pt);
// untransform
let pu = trans.untransform(pt);
console.log('pu:', pu);

