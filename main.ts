import {Canvas} from './canvas';
import { topology, feature, Transform } from './src';
import { Point, LineString, Polygon } from './src';

let poi = new Point([1, 2]);
console.log(poi);
let line = new LineString([[1, 2], [3, 4]]);
console.log(line);
let polygon = new Polygon([[[1, 2], [3, 4], [5, 6], [1, 2]]]);
console.log(polygon);

const mydiv = document.getElementById('map') as HTMLElement;
const canvasSize = 1024;
const canvas = new Canvas(canvasSize, canvasSize, mydiv);

const t = {
  type: "Topology",
  transform: {scale: [1, 1], translate: [0, 0]},
  objects: {foo: {type: "MultiPolygon", arcs: [[[0], [1]]]}},
  arcs: [
    [[0, 0], [1, 0], [0, 1], [-1, 0], [0, -1]],
    [[0, 0], [1, 0], [0, 1]],
    [[1, 1], [-1, 0], [0, -1]],
    [[0, 0], [1, 0], [0, 1], [-1, 0], [0, -1]],
  ]
};

// console.log(feature(t, t.objects.foo));

// canvas.drawArc([100, 100], [200, 600], 'red', '+', 10);
// canvas.drawArcs([[100, 100], [200, 600], [300, 300], [400, 400]], 'blue', 'o', 5);
// get the anti-delta code for arcs and transform 

const transform = {scale: [100, -100], translate: [canvasSize / 2, canvasSize / 2]};

function antiDrawArc(arc : [number, number][], transform : Transform, color : string = 'blue') {
    const arcs = antidelta(arc, transform);
    // transform the arcs to the canvas
    const transformedArcs = arcs.map(arc => transformPoint(arc, transform));
    // add noise to the transformedArcs so as to make the arcs more visible
    let noise = Math.random() * 100;
    transformedArcs.forEach(arc => {
        arc[0] += noise;
        arc[1] += noise;
    });
    // draw the arcs
    canvas.drawArcs(transformedArcs, color , 'o', 5);
    // draw label
    for (let i = 0; i < transformedArcs.length; i++) {
        canvas.drawLabel(
            transformedArcs[i][0], transformedArcs[i][1],
             `(${arcs[i][0]}, ${arcs[i][1]})`, color , 15);
    }
}
const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
for (let i = 0; i < t.arcs.length; i++) {
    antiDrawArc(t.arcs[i], transform, colors[i]);
}
// de delata-code function
function antidelta(arcs : [number, number][], transform ?: Transform) {
    // 将 x, y 坐标由 delta-code 转换为绝对坐标
    for (var i = 0, n = arcs.length, x = 0, y = 0; i < n; ++i) {
        var arc = arcs[i];
        arcs[i] = [x += arc[0], y += arc[1]];
    }
    return arcs;
}

function delata(arcs : [number, number][], transform ?: Transform) {
    // 将 x, y 坐标由绝对坐标转换为 delta-code
    for (var i = 0, n = arcs.length, x = 0, y = 0; i < n; ++i) {
        var arc = arcs[i], x0 = arc[0], y0 = arc[1];
        arcs[i] = [x0 - x, y0 - y];
        x = x0;
        y = y0;
    }
    return arcs;

}

function transformPoint(point: [number, number], transform: Transform) {
    return [point[0] * transform.scale[0] + transform.translate[0], point[1] * transform.scale[1] + transform.translate[1]];
}

