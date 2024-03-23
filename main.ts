import {Canvas, drawQuadTree2Canvas} from './canvas';
// import {MBR, QuadTree,Circle} from './src'

const mydiv = document.getElementById('map') as HTMLElement;
const canvasSize = 1024;

const canvas = new Canvas(canvasSize, canvasSize, mydiv);

// const points = randomPoints([0, 0, 1000, 1000], 20);

// let qdTree = new QuadTree([0, 0, 1024, 1024], 1);

// for(let i = 0; i < points.length; i++){
//     let point = points[i];
//     canvas.drawPoint(point[0], point[1], 'green', 'o', 5);
//     qdTree.insert(point as [number, number]);
// }
// let ctx = canvas.canvas.getContext('2d') as CanvasRenderingContext2D;

// drawQuadTree2Canvas(qdTree, ctx, { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.4 });

// const queryRange = [100, 100, 500, 500] as MBR;
// canvas.drawBound(queryRange[0], queryRange[1], queryRange[2], queryRange[3], 'red'); 
// // query range
// let pointsInRange = qdTree.queryRange(queryRange);
// // draw points in range
// for(let i = 0; i < pointsInRange.length; i++){
//     let point = pointsInRange[i];
//     canvas.drawPoint(point[0], point[1], 'pink', '*', 10);
// }

// // circle range
// let circle = new Circle(700, 700, 300);
// canvas.drawCircle(circle.x, circle.y, circle.r, 'red', false);
// // queryRange in circle
// let pointsInRangeCircle = qdTree.customQuery(circle);
// for(let i = 0; i < pointsInRangeCircle.length; i++){
//     let point = pointsInRangeCircle[i];
//     canvas.drawPoint(point[0], point[1], 'yellow', 'x', 10);
// }

// function randomPoint(range: MBR){
//     return [range[0] + Math.random() * (range[2] - range[0]), range[1] + Math.random() * (range[3] - range[1])];
// }

// function randomPoints(range: MBR, num: number){
//     let points = [] as number[][];
//     for(let i = 0; i < num; i++){
//         points.push(randomPoint(range));
//     }
//     return points;
// }


const t = 
{
  type: "Topology",
  transform: {scale: [1, 1], translate: [0, 0]},
  objects: {foo: {type: "MultiPolygon", arcs: [[[0]]]}},
  arcs: [
    [[0, 0], [1, 0], [0, 1], [-1, 0], [0, -1]],
    [[0, 0], [1, 0], [0, 1]],
    [[1, 1], [-1, 0], [0, -1]],
    [[1, 1]],
    [[0, 0]]
  ]
};

// const clors = ['red', 'green', 'blue', 'yellow', 'pink'];
// rgba(255, 0, 0, 0.5)
const clors2 = ['rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(0, 0, 255, 0.5)', 'rgba(255, 255, 0, 0.5)', 'rgba(255, 0, 255, 0.5)'];
// draw the topology
// canvas.drawTopology(t, 'red', 1);
// canvas draw arc
for(let i = 0; i < t.arcs.length; i++){
    let arc = t.arcs[i];
    let points = [] as [number, number][];
    for(let j = 0; j < arc.length; j++){
        let point = transformPoint(arc[j], [100,100], [200,200]);
        points.push(point);
        // draw label
        canvas.drawLabel(point[0], point[1], `${arc[j][0]},${arc[j][1]}`, 'black');
    }
    // console.log(points);
    // canvas.drawArcs(points, clors2[i], "[]",3);
    // 绘制时 每一个 arcs 偏差一定的距离
    let offsetx = 10* Math.random();
    let offsety = 10* Math.random();
    let offsetPoints = [] as [number, number][];

    for(let j = 0; j < points.length; j++){
        let point = points[j];
        let newPoint = [point[0] + offsetx, point[1] + offsety];
        offsetPoints.push(newPoint);
    }
    canvas.drawArcs(offsetPoints, clors2[i], "[]",3);
}

const coordinates = 
// [[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]
// [ [ 0, 0 ], [ 1, 0 ], [ 1, 1 ], [ 0, 1 ], [ 0, 0 ] ]
[ [ 1, 1 ], [ 0, 1 ], [ 0, 0 ], [ 1, 1 ] ]
let pins = [];
for(let i = 0; i < coordinates.length; i++){
    // transform point
    let point = coordinates[i];
    let newPoint = transformPoint(point, [100,100], [200,200]);
    // canvas.drawPoint(newPoint[0], newPoint[1], 'green', 'o', 5);
    pins.push(newPoint);
}
canvas.drawPolygon(pins, 'green', false);


function transformPoint(point: number[], scale: number[], translate: number[]): [number, number]{
    return [point[0] * scale[0] + translate[0], point[1] * scale[1] + translate[1]];
}