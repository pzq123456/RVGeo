import {Canvas} from './canvas';

const mydiv = document.getElementById('map') as HTMLElement;
let trans = Canvas.getTransArray(1800, 900);
const canvas = new Canvas(1800, 900, mydiv,trans);


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

canvas.drawPoint(place0.lng, place0.lat, 'red','x',1);
canvas.drawPoint(place1.lng, place1.lat, 'blue','x',1);
canvas.drawPoint(place2.lng, place2.lat, 'green','x',1);

// import { Evented } from './src/core/events';
// const emitter = new Evented();
// function mockFn(event: any) {
//     console.log(event.message);
// }
// emitter.on('click', mockFn);


// emitter.emit('click', { message: 'Hello, world!' });

// emitter.off('click', mockFn);
// console.log('off');
// let listeners = emitter.listeners('click');
// console.log(listeners);
// emitter.emit('click', { message: 'Hello, world!' });

// const GeoJSON = {
//     "type": "Feature",
//     "geometry": {
//         "type": "Point",
//         "coordinates": [125.6, 10.1]
//     },
//     "properties": {
//         "name": "Dinagat Islands"
//     }
// }


// import { Point } from './src/geometry/Point';
// let point = new Point([100, 20]);
// console.log(point);

// // point from GeoJSON
// let point2 = Point.fromGeoJSON(GeoJSON as any);
// console.log(point2);

// import { LineString } from './src/geometry/LineString';
// let line = new LineString([[100, 20], [200, 30]]);
// console.log(line);

// import { Polygon } from './src/geometry/Polygon';
// let polygon = new Polygon([[[100, 20], [200, 30], [300, 40]]]);
// console.log(polygon);