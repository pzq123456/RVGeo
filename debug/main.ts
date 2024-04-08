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
const reactGrid2d = RVGeo.reactGrid2d;

// let data = sample(size,0.05,0.05,Perlin);
let grid = Grid.fromFillValue(0,[1,4,4]);
// console.log(grid);

// // draw grid
let mySimpleColorBand = RVGeo.simpleColorBandFactory(RVGeo.stretchType.power);
let rect = {x: 0, y: 0, w: 1024, h: 1024};
drawGrid2d(canvas, grid.data[0], rect, grid.getBandStatistics(0), mySimpleColorBand);


// drawCountour(canvas, grid.getCoutourCode(0,- 0.35), rect ,"white");
// drawCountour(canvas, grid.getCoutourCode(0,- 0.3), rect ,"white");
// drawCountour(canvas, grid.getCoutourCode(0,- 0.2), rect ,"white");
// drawCountour(canvas, grid.getCoutourCode(0,- 0.1), rect ,"white");
// drawCountour(canvas, grid.getCoutourCode(0,0.001), rect ,"white");
// drawCountour(canvas, grid.getCoutourCode(0,0.002), rect ,"white");
// drawCountour(canvas, grid.getCoutourCode(0,0.15), rect ,"white");
// drawCountour(canvas, grid.getCoutourCode(0,0.2), rect ,"white");
// drawCountour(canvas, grid.getCoutourCode(0,0.25), rect ,"white");
// drawCountour(canvas, grid.getCoutourCode(0,0.3), rect ,"white");
// drawCountour(canvas, grid.getCoutourCode(0,0.35), rect ,"white");
// drawCountour(canvas, grid.getCoutourCode(0,0.5), rect ,"white");

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

let XY = [0,0] as [number, number];

// 监听并打印鼠标点击事件
canvas.addEventListener('click', (e) => {
    const myrect = canvas.getBoundingClientRect();
    const x = e.clientX - myrect.left;
    const y = e.clientY - myrect.top;
    XY = [x,y];
    reactGrid2d(canvas, [4,4], rect, XY,myCallback);
    drawGrid2d(canvas, grid.data[0], rect, grid.getBandStatistics(0), mySimpleColorBand);

});

function myCallback(col,row){
  grid.XYZValue = [col,row,0,1];
}



// function render(){
//   // clear canvas
//   canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
//   reactGrid2d(canvas, [4,4], rect, XY);
// }

// animationEngine(100, render);

/**
 * 动画引擎 用于向浏览器请求动画帧并绘制
 * @param {Number} timeInterval - 间隔时间例如 100 表示每 100ms 请求一次动画帧
 * @param {Function} callback - 回调函数用于绘制动画
 */
export function animationEngine(
  timeInterval : number,
  callback : () => void){
  let lastTime = 0;
  function animate(time : number ){
      if (time - lastTime > timeInterval){
          lastTime = time;
          callback();
      }
      requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}