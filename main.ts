import {Canvas} from './canvas';
const mydiv = document.getElementById('map') as HTMLElement;
const canvasSize = 512;
// let trans = Canvas.getTransArray(canvasSize, canvasSize, [-canvasSize/2, canvasSize/2], [canvasSize/2, -canvasSize/2]);
// const canvas = new Canvas(1800, 900, mydiv,trans);

const canvas = new Canvas(canvasSize, canvasSize, mydiv);


let place0 = {
    lat: 0,
    lng: 0
}
let place1 = {
    lat: 90,
    lng: 180
}
let place2 = {
    lat: -90,
    lng: -180
}

// let sm = new SphericalMercator({size: canvasSize});
// let point0 = sm.px([place0.lng, place0.lat], 0);
// let point1 = sm.px([place1.lng, place1.lat], 0);
// let point2 = sm.px([place2.lng, place2.lat], 0);
// console.log(point0, point1, point2);

// canvas.drawPoint(point0[0], point0[1], 'red','o',10);
// canvas.drawPoint(point1[0], point1[1], 'blue','o',10);
// canvas.drawPoint(point2[0], point2[1], 'green','o',10);

// // bbox
// let bbox = sm.bbox(0,0,1);
// console.log(bbox);
// // canvas.drawBound(bbox[0], bbox[1], bbox[2], bbox[3], 'red');

// // xyz
// let xyz = sm.pxBbox(0,0,0);
// console.log(xyz);
// canvas.drawBound(xyz[0], xyz[1], xyz[2], xyz[3], 'blue');
