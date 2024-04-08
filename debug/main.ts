import * as RVGeo from '../src';

const mydiv = document.getElementById('map') as HTMLElement;
const canvasSize = 1024;
const canvas = createCanvas(canvasSize, canvasSize);
mydiv.appendChild( canvas );

const myMBR1 = [
    -109.04885344551185,
    36.988099165319085,
    -102.05550147177286,
    41.01069002801907
  ] as [number, number, number, number];

const Perlin = RVGeo.Perlin; // Perlin 噪声生成器
const drawGrid2d = RVGeo.drawGrid2d;

const Grid = RVGeo.Grid; // 栅格类
const drawCountour = RVGeo.drawCountour; // 绘制等值线
const size = 64;

let data = sample(size,0.05,0.05,Perlin);
let grid = new Grid(myMBR1, [data]);

// // draw grid
let mySimpleColorBand = RVGeo.simpleColorBandFactory(RVGeo.stretchType.power);
let rect = {x: 0, y: 0, w: 1024, h: 1024};
drawGrid2d(canvas, data, {x: 0, y: 0, w: 1024, h: 1024}, grid.getBandStatistics(0), mySimpleColorBand);

drawCountour(canvas, grid.getCoutourCode(0,- 0.35), rect ,"white");
drawCountour(canvas, grid.getCoutourCode(0,- 0.3), rect ,"white");
drawCountour(canvas, grid.getCoutourCode(0,- 0.2), rect ,"white");
drawCountour(canvas, grid.getCoutourCode(0,- 0.1), rect ,"white");
drawCountour(canvas, grid.getCoutourCode(0,0.001), rect ,"white");
drawCountour(canvas, grid.getCoutourCode(0,0.002), rect ,"white");
drawCountour(canvas, grid.getCoutourCode(0,0.15), rect ,"white");
drawCountour(canvas, grid.getCoutourCode(0,0.2), rect ,"white");
drawCountour(canvas, grid.getCoutourCode(0,0.25), rect ,"white");
drawCountour(canvas, grid.getCoutourCode(0,0.3), rect ,"white");
drawCountour(canvas, grid.getCoutourCode(0,0.35), rect ,"white");
drawCountour(canvas, grid.getCoutourCode(0,0.5), rect ,"white");

function sample(size: number,x: number,y: number, sampleFunc: (x: number, y: number) => number){
  let data = [] as number[][];
  for(let i = 0; i < size; i++){
    let tmp = [] as number[];
    for(let j = 0; j < size; j++){
      let noise = sampleFunc(i*x - size/2, j*y - size/2); // 生成噪声0-1
      tmp.push(noise);
    }
    data.push(tmp);
  }
  return data;
}

function createCanvas(
    width: number,
    height: number
): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
}