import * as RVGeo from '../../src';
import { lev } from './levenshtein';

const mydiv = document.getElementById('map') as HTMLElement;
const canvasSize = 1024;
const canvas = createCanvas(canvasSize, canvasSize);
mydiv.appendChild( canvas );

const drawGrid2d = RVGeo.drawGrid2d;

const Grid = RVGeo.Grid; // 栅格类
const drawCountour = RVGeo.drawCountour; // 绘制等值线
const reactGrid2d = RVGeo.reactGrid2d;
const drawArrowField = RVGeo.drawArrowField;

let data = lev("kittenn","sitting");

let grid = new Grid([0,0,0,0],[data]);

// draw grid
let mySimpleColorBand = RVGeo.simpleColorBandFactory(RVGeo.stretchType.power);
let rect = {x: 0, y: 0, w: 1024, h: 1024};

function createCanvas(
    width: number,
    height: number
): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
}

let XY = [null,null] as [null,null] | [number,number];

render();

canvas.addEventListener('click', (e) => {
    const myrect = canvas.getBoundingClientRect();
    const x = e.clientX - myrect.left;
    const y = e.clientY - myrect.top;
    XY = [x,y];
    reactGrid2d(canvas, [8,8], rect, XY, myCallback);
    render();
});

function myCallback(col: number, row: number){
  if(grid.getXYZValue([col,row]) === 1){
    grid.XYZValue = [col,row,0, 0];
  }else{
    grid.XYZValue = [col,row,0,1];
  }
}

function strategy(from: number, to: number) {
  return to + from / 2;
}

function render(){
  // clear canvas
  const GridGraph = RVGeo.createGridGraph(grid.data[0], strategy);

  // 3. A* 算法
  let field = RVGeo.gridAstar(GridGraph, [0, 0], [7,7]);

  let path = RVGeo.gridReconstructPath(field, [0, 0], [7,7]);
  drawGrid2d(canvas, grid.data[0], rect, grid.getBandStatistics(0), mySimpleColorBand);
  drawCountour(canvas, grid.getCoutourCode(0,3), rect ,"red");
  drawArrowField(canvas, [7,7], rect, field,"gray",path);
}