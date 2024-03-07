import {Canvas, drawQuadTree2Canvas} from './canvas';
import {MBR, QuadTree,Circle, customRange, pointInMBR} from './src'

const mydiv = document.getElementById('map') as HTMLElement;
const canvasSize = 1024;

const canvas = new Canvas(canvasSize, canvasSize, mydiv);

const points = randomPoints([0, 0, 1000, 1000], 20);

let qdTree = new QuadTree([0, 0, 1024, 1024], 1);

   


for(let i = 0; i < points.length; i++){
    let point = points[i];
    canvas.drawPoint(point[0], point[1], 'green', 'o', 5);
    qdTree.insert(point as [number, number]);
}
let ctx = canvas.canvas.getContext('2d') as CanvasRenderingContext2D;

drawQuadTree2Canvas(qdTree, ctx, { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.4 });

const queryRange = [100, 100, 500, 500] as MBR;
canvas.drawBound(queryRange[0], queryRange[1], queryRange[2], queryRange[3], 'red'); 
// query range
let pointsInRange = qdTree.queryRange(queryRange);
// draw points in range
for(let i = 0; i < pointsInRange.length; i++){
    let point = pointsInRange[i];
    canvas.drawPoint(point[0], point[1], 'pink', '[]', 10);
}

// circle range
let circle = new Circle(700, 700, 300);
canvas.drawCircle(circle.x, circle.y, circle.r, 'red', false);
// queryRange in circle
let pointsInRangeCircle = qdTree.customQuery(circle);
for(let i = 0; i < pointsInRangeCircle.length; i++){
    let point = pointsInRangeCircle[i];
    canvas.drawPoint(point[0], point[1], 'yellow', '[]', 10);
}

function randomPoint(range: MBR){
    return [range[0] + Math.random() * (range[2] - range[0]), range[1] + Math.random() * (range[3] - range[1])];
}

function randomPoints(range: MBR, num: number){
    let points = [] as number[][];
    for(let i = 0; i < num; i++){
        points.push(randomPoint(range));
    }
    return points;
}