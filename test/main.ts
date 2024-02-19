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
