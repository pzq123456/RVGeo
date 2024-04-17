/**
 * 渲染器类 将所有涉及绘制数据的逻辑集中在这里
 */

import { simpleColorBand,binaryColorBand} from './colors';
import { Grid, QTNode } from '../coverage';
// import { Complex } from "./Fourier";

type Rect = {
    x: number,
    y: number,
    w: number,
    h: number
}; // 矩形 与canvas 的定义一致 xy为左上角 w为宽 h为高

export function reactGrid2d(
    canavs: HTMLCanvasElement,
    colRow: [number, number],
    Rect: Rect, // {x, y, w, h}
    XY: [number, number] | [null,null], // [x, y]
    callback?: (col: number, row: number) => void
){
    let cellWidth = Rect.w / colRow[0];
    let cellHeight = Rect.h / colRow[1];
    let ctx = canavs.getContext("2d");
    if(ctx === null){
        throw new Error("无法获取canvas绘图上下文");
    }
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;

    if(XY[0] && XY[1]){
        let [col, row] = XY2ColRow(colRow, Rect, XY);
        ctx.strokeRect(Rect.x + col * cellWidth, Rect.y + row * cellHeight, cellWidth, cellHeight);
        callback && callback(col, row);
    }
}

/**
 * 将屏幕像素坐标转化为对应的行列号
 * @param colRow - 数据行列数
 * @param Rect - 绘制范围
 * @param XY - 屏幕坐标
 */
export function XY2ColRow(
    colRow: [number, number],
    Rect: Rect, // {x, y, w, h}
    XY: [number, number], // [x, y]
){
    let cellWidth = Rect.w / colRow[0];
    let cellHeight = Rect.h / colRow[1];
    let col = Math.floor((XY[0] - Rect.x) / cellWidth);
    let row = Math.floor((XY[1] - Rect.y) / cellHeight);
    return [col, row];
}

export function drawGrid2d(
    canavs: HTMLCanvasElement,
    grid2D: number[][],
    Rect: Rect, // {x, y, w, h}
    statistics: {max: number, min: number, mean: number},
    colorBand: (statistics: {max: number, min: number, mean: number}, value: number) => string = simpleColorBand,
    GridMBR? : [number,number,number,number], // [minX index ,minY index,maxX index,maxY index]
){

    // 首先分割 rect 为小格子
    let cellWidth = Rect.w / grid2D[0].length;
    let cellHeight = Rect.h / grid2D.length;
    let ctx = canavs.getContext("2d") as CanvasRenderingContext2D;

    if(ctx === null){
        throw new Error("无法获取canvas绘图上下文");
    }
    // 绘制矩形
    for(let row = 0; row < grid2D.length; row++){
        for(let col = 0; col < grid2D[0].length; col++){
            let value = grid2D[row][col];
            let color = colorBand(statistics, value);
            ctx.fillStyle = color;
            ctx.fillRect(Rect.x + col * cellWidth, Rect.y + row * cellHeight, cellWidth, cellHeight);
            // // 绘制边框
            // ctx.strokeStyle = "gray";
            // ctx.lineWidth = 1;
            // ctx.strokeRect(Rect.x + col * cellWidth, Rect.y + row * cellHeight, cellWidth, cellHeight);
            // // 绘制文字
            // ctx.save();
            // ctx.fillStyle = "green";
            // ctx.font = "30px serif";
            // ctx.fillText(value.toString(), Rect.x + col * cellWidth, Rect.y + row * cellHeight + 30);
            // ctx.restore();
        }
    }
    // 若有 GridMBR 则绘制
    if(GridMBR){
        let [minX,minY,maxX,maxY] = GridMBR;
        ctx.strokeStyle = "red";
        ctx.lineWidth = 1;
        ctx.strokeRect(Rect.x + minX * cellWidth, Rect.y + minY * cellHeight, (maxX - minX) * cellWidth, (maxY - minY) * cellHeight);
    }
    ctx.restore();
}

/**
 * 绘制箭头场，默认为起点为当前格子的中心
 */
export function drawArrowField(
    canavs: HTMLCanvasElement,
    colRow: [number, number],
    Rect: Rect, 
    toDict: Map<string, [number,number] | null>,
    color: string = "gray",
    path?: [number, number][]
){
    // 首先分割 rect 为小格子
    let cellWidth = Rect.w / colRow[0];
    let cellHeight = Rect.h / colRow[1];
    let ctx = canavs.getContext("2d") as CanvasRenderingContext2D;

    if(ctx === null){
        throw new Error("无法获取canvas绘图上下文");
    }
    ctx.save();
    // 绘制箭头
    for(let row = 0; row < colRow[0]; row++){
        for(let col = 0; col < colRow[1]; col++){
            // let value = grid2D[row][col];
            let to = toDict.get([col,row].join(','));
            if(to){
                let fromX = Rect.x + col * cellWidth + cellWidth / 2;
                let fromY = Rect.y + row * cellHeight + cellHeight / 2;
                let toX = Rect.x + to[0] * cellWidth + cellWidth / 2;
                let toY = Rect.y + to[1] * cellHeight + cellHeight / 2;
                if(path && path.find(([x,y]) => x === col && y === row)){
                    drawArrow(ctx, fromX, fromY, toX, toY, "red");
                    // 若为路径上的点则绘制红色箭头
                    // 若为起点则绘制绿色箭头
                    if(to[0] === path[0][0] && to[1] === path[0][1]){
                        // 绘制起点标志 绿色圆圈
                        ctx.fillStyle = "green";
                        ctx.beginPath();
                        ctx.arc(toX, toY, 10, 0, 2 * Math.PI);
                        ctx.fill();
                    }

                    if(to[0] === path[path.length - 2][0] && to[1] === path[path.length - 2][1]){
                        // 绘制终点标志 红色圆圈
                        ctx.fillStyle = "blue";
                        ctx.beginPath();
                        ctx.arc(fromX, fromY, 10, 0, 2 * Math.PI);
                        ctx.fill();
                    }
                }else{
                    drawArrow(ctx, fromX, fromY, toX, toY, color);
                }
            }else{
                // 绘制中心
                ctx.fillStyle = color;
                ctx.fillRect(Rect.x + col * cellWidth + cellWidth / 2 - 2, Rect.y + row * cellHeight + cellHeight / 2 - 2, 4, 4);
            }
        }
    }
    ctx.restore();
}

function drawArrow(
    ctx: CanvasRenderingContext2D,
    fromX: number,
    fromY: number,
    toX: number,
    toY: number,
    color: string = "green",
){
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();
    // 绘制箭头
    let headlen = 10;
    let angle = Math.atan2(toY - fromY, toX - fromX);
    ctx.beginPath();
    ctx.moveTo(toX, toY);
    ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(toX, toY);
    ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
    ctx.stroke();
}

export function binDrawGrid2d(
    canavs: HTMLCanvasElement,
    grid2D: number[][],
    Rect: Rect, // {x, y, w, h}
    colorBand: (value: number) => string = binaryColorBand
){
    // 首先分割 rect 为小格子
    let cellWidth = Rect.w / grid2D[0].length;
    let cellHeight = Rect.h / grid2D.length;

    let ctx = canavs.getContext("2d") as CanvasRenderingContext2D;
    ctx.save();
    if(ctx === null){
        throw new Error("无法获取canvas绘图上下文");
    }

    // 绘制矩形
    for(let row = 0; row < grid2D.length; row++){
        for(let col = 0; col < grid2D[0].length; col++){
            let value = grid2D[row][col];
            let color = colorBand(value);
            ctx.fillStyle = color;
            ctx.fillRect(Rect.x + col * cellWidth, Rect.y + row * cellHeight, cellWidth, cellHeight);
        }
    }

    ctx.restore();
}

export function drawCountour(
    canavs: HTMLCanvasElement,
    countourCodeGrid: number[][],
    Rect: Rect, // {x, y, w, h}
    strokeColor: string = "white"
){
    // 首先分割 rect 为小格子
    let cellWidth = Rect.w / (countourCodeGrid[0].length + 1);
    let cellHeight = Rect.h / (countourCodeGrid.length + 1);

    let ctx = canavs.getContext("2d") as CanvasRenderingContext2D;
    ctx.save();
    if(ctx === null){
        throw new Error("无法获取canvas绘图上下文");
    }
    // 绘制矩形
    for(let row = 0; row < countourCodeGrid.length; row++){
        for(let col = 0; col < countourCodeGrid[0].length; col++){
            let value = countourCodeGrid[row][col];
            let rect = {
                x: Rect.x + col * cellWidth + cellWidth / 2,
                y: Rect.y + row * cellHeight + cellHeight / 2,
                w: cellWidth, 
                h: cellHeight
            };

            countourCase(value, rect , ctx, strokeColor);
        }
    }

    ctx.restore();
}

/**
 * 一个格网内根据case 编号绘制线
 * @param countourCode - 0-15
 * @param cell - 格网
 * @param ctx - canvas 上下文
 * @param strokeColor - 线条颜色
 */
function countourCase(
    countourCode: number,
    cell: Rect,
    ctx: CanvasRenderingContext2D,
    strokeColor: string = "white"
){
    ctx.strokeStyle = strokeColor;
    switch(countourCode){
        case 0: break;
        case 1: 
            ctx.beginPath();
            ctx.moveTo(cell.x, cell.y + cell.h / 2);
            ctx.lineTo(cell.x + cell.w / 2, cell.y + cell.h);
            ctx.stroke();
            break;
        case 2:
            ctx.beginPath();
            ctx.moveTo(cell.x + cell.w / 2, cell.y + cell.h);
            ctx.lineTo(cell.x + cell.w, cell.y + cell.h / 2);
            ctx.stroke();
            break;
        case 3:
            ctx.beginPath();
            ctx.moveTo(cell.x , cell.y + cell.h / 2);
            ctx.lineTo(cell.x + cell.w, cell.y + cell.h / 2);
            ctx.stroke();
            break;
        case 4:
            ctx.beginPath();
            ctx.moveTo(cell.x + cell.w / 2, cell.y);
            ctx.lineTo(cell.x + cell.w, cell.y + cell.h / 2);
            ctx.stroke();
            break;
        case 5:
            ctx.beginPath();
            ctx.moveTo(cell.x, cell.y + cell.h / 2);
            ctx.lineTo(cell.x + cell.w / 2, cell.y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(cell.x + cell.w / 2, cell.y + cell.h);
            ctx.lineTo(cell.x + cell.w, cell.y + cell.h / 2);
            ctx.stroke();
            break;
        case 6:
            ctx.beginPath();
            ctx.moveTo(cell.x + cell.w / 2, cell.y);
            ctx.lineTo(cell.x + cell.w / 2, cell.y + cell.h);
            ctx.stroke();
            break;
        case 7:
            ctx.beginPath();
            ctx.moveTo(cell.x, cell.y + cell.h / 2);
            ctx.lineTo(cell.x + cell.w / 2, cell.y);
            ctx.stroke();
            break;
        case 8:
            ctx.beginPath();
            ctx.moveTo(cell.x , cell.y + cell.h / 2);
            ctx.lineTo(cell.x + cell.w / 2, cell.y);
            ctx.stroke();
            break;
        case 9:
            ctx.beginPath();
            ctx.moveTo(cell.x + cell.w / 2, cell.y);
            ctx.lineTo(cell.x + cell.w / 2, cell.y + cell.h);
            ctx.stroke();
            break;
        case 10:
            ctx.beginPath();
            ctx.moveTo(cell.x + cell.w / 2, cell.y);
            ctx.lineTo(cell.x + cell.w, cell.y + cell.h / 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(cell.x, cell.y + cell.h / 2);
            ctx.lineTo(cell.x + cell.w / 2, cell.y + cell.h);
            ctx.stroke();
            break;
        case 11:
            ctx.beginPath();
            ctx.moveTo(cell.x + cell.w / 2, cell.y);
            ctx.lineTo(cell.x + cell.w, cell.y + cell.h / 2);
            ctx.stroke();
            break;
        case 12:
            ctx.beginPath();
            ctx.moveTo(cell.x, cell.y + cell.h / 2);
            ctx.lineTo(cell.x + cell.w, cell.y + cell.h / 2);
            ctx.stroke();
            break;
        case 13:
            ctx.beginPath();
            ctx.moveTo(cell.x + cell.w / 2, cell.y + cell.h);
            ctx.lineTo(cell.x + cell.w , cell.y + cell.h / 2);
            ctx.stroke();
            break;
        case 14:
            ctx.beginPath();
            ctx.moveTo(cell.x , cell.y + cell.h / 2);
            ctx.lineTo(cell.x + cell.w / 2, cell.y + cell.h);
            ctx.stroke();
            break;
        case 15:
            break;
    }
}


/**
 * 绘制四叉树
 * @param canvas 
 * @param rect 
 * @param QTree 
 * @param grid 
 * @param colorBand 
 * @param value 
 * @param statistics 
 */
export function drawQTree2d(
    canvas: HTMLCanvasElement,
    rect: Rect,
    QTree: QTNode,
    grid: Grid,
    colorBand: (statistics: {max: number, min: number, mean: number},value: number) => string = simpleColorBand,
    value?: number,
    statistics?: {max: number, min: number, mean: number},
){

    let ctx = canvas.getContext("2d");
    if(ctx === null){
        throw new Error("无法获取canvas绘图上下文");
    }

    let tmpgrid = grid.getSubGridObj(QTree.boundary);
    let tmpstatistics = tmpgrid.getBandStatistics(0);
    let tmpvalue = tmpstatistics.mean;
    if(!statistics){
        statistics = tmpstatistics;
    }else{ // 更新统计量
        statistics.max = Math.max(statistics.max, tmpstatistics.max);
        statistics.min = Math.min(statistics.min, tmpstatistics.min);
        statistics.mean = (statistics.mean + tmpstatistics.mean) / 2;
    }

    if(!value){
        value = tmpvalue;
    }

    let color = colorBand(statistics, tmpvalue);
    ctx.fillStyle = color;
    ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
    // let myPseudoColorBand = RVGeo.Colors.pseudoColorBandFactory(RVGeo.Colors.stretchType.linear);
    // 暂停 1 秒
    requestAnimationFrame(() => {
        if(QTree.isDivided){
            // draw sub node
            let subRect = [
                {x: rect.x + rect.w / 2, y: rect.y, w: rect.w / 2, h: rect.h / 2},
                {x: rect.x + rect.w / 2, y: rect.y + rect.h / 2, w: rect.w / 2, h: rect.h / 2},
                {x: rect.x, y: rect.y, w: rect.w / 2, h: rect.h / 2},
                {x: rect.x, y: rect.y + rect.h / 2, w: rect.w / 2, h: rect.h / 2},
            ];
            // 递归绘制
    
            drawQTree2d(canvas, subRect[0], QTree.children[0], grid, colorBand,value, statistics);
            drawQTree2d(canvas, subRect[1], QTree.children[1], grid, colorBand,value, statistics);
            drawQTree2d(canvas, subRect[2], QTree.children[2], grid, colorBand,value, statistics);
            drawQTree2d(canvas, subRect[3], QTree.children[3], grid, colorBand,value, statistics);
    
        } 
    });
}


export function drawSample(
    canvas: HTMLCanvasElement,
    rect: Rect,
    sample: number[],
    style: {color: string, backgroundColor: string} = {color: "black", backgroundColor: "rgba(0,0,0,0)"}, // {color, width, backgroundColor}
    isText: boolean = false,
    statistics?: {max: number, min: number, mean: number},
){
    let ctx = canvas.getContext("2d");
    if(ctx === null){
        throw new Error("无法获取canvas绘图上下文");
    }
    if(!statistics){
        statistics = {
            max: Math.max(...sample),
            min: Math.min(...sample),
            mean: sample.reduce((a, b) => a + b) / sample.length
        };
    }
    ctx.fillStyle = style.backgroundColor;
    ctx.fillRect(rect.x, rect.y, rect.w, rect.h);

    // draw sample points 
    // circle color and r
    ctx.fillStyle = style.color;
    ctx.lineWidth = 1;
    let r = 2;
    for(let i = 0; i < sample.length; i++){
        let x = rect.x + rect.w * i / sample.length;
        let y = rect.y + rect.h * (1 - (sample[i] - statistics.min) / (statistics.max - statistics.min));
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
    }
    ctx.strokeStyle = style.color;
    // draw sample line
    ctx.beginPath();
    ctx.moveTo(rect.x, rect.y + rect.h * (1 - (sample[0] - statistics.min) / (statistics.max - statistics.min)));
    for(let i = 0; i < sample.length; i++){
        let x = rect.x + rect.w * i / sample.length;
        let y = rect.y + rect.h * (1 - (sample[i] - statistics.min) / (statistics.max - statistics.min));
        ctx.lineTo(x, y);
    }
    ctx.stroke();
        // draw line to annotate the three line ablove
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.moveTo(rect.x, rect.y + 12);
        ctx.lineTo(rect.x + rect.w, rect.y + 12);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(rect.x, rect.y + rect.h);
        ctx.lineTo(rect.x + rect.w, rect.y + rect.h);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(rect.x, rect.y + rect.h / 2);
        ctx.lineTo(rect.x + rect.w, rect.y + rect.h / 2);
        ctx.stroke();

            // annotate y axis
        ctx.fillText(statistics.max.toFixed(2), rect.x, rect.y + 12);
        ctx.fillText(statistics.min.toFixed(2), rect.x, rect.y + rect.h);
        ctx.fillText(statistics.mean.toFixed(2), rect.x, rect.y + rect.h / 2);
    if(isText){
    // annotate value for 1/3 of sample points
    ctx.fillStyle = "green";
    ctx.font = "12px serif";
    for(let i = 0; i < sample.length; i += 16){
        let x = rect.x + rect.w * i / sample.length;
        let y = rect.y + rect.h * (1 - (sample[i] - statistics.min) / (statistics.max - statistics.min));
        ctx.fillText(sample[i].toFixed(2), x, y);
    }    
    }
}

export function drawSample2(
    canvas: HTMLCanvasElement,
    rect: Rect,
    sample: number[],
    style: {color: string, backgroundColor: string} = {color: "black", backgroundColor: "rgba(0,0,0,0)"}, // {color, width, backgroundColor}
    statistics?: {max: number, min: number, mean: number},
    isText: boolean = false,
){
    let ctx = canvas.getContext("2d");
    if(ctx === null){
        throw new Error("无法获取canvas绘图上下文");
    }
    if(!statistics){
        statistics = {
            max: Math.max(...sample),
            min: Math.min(...sample),
            mean: sample.reduce((a, b) => a + b) / sample.length
        };
    }
    // 绘制柱状图，柱子的宽度为rect.w / sample.length
    ctx.fillStyle = style.backgroundColor;
    ctx.fillRect(rect.x, rect.y, rect.w, rect.h);

    // draw sample bars
    ctx.fillStyle = style.color;
    let barWidth = rect.w / sample.length;
    for(let i = 0; i < sample.length; i++){
        let x = rect.x + barWidth * i;
        let y = rect.y + rect.h * (1 - (sample[i] - statistics.min) / (statistics.max - statistics.min));
        ctx.fillRect(x, y, barWidth, rect.h - y + rect.y);
    }

    if(isText){
    // annotate y axis 
    ctx.fillStyle = "green";
    ctx.font = "12px serif";
    ctx.fillText(statistics.max.toFixed(2), rect.x, rect.y + 12);
    ctx.fillText(statistics.min.toFixed(2), rect.x, rect.y + rect.h);
    ctx.fillText(statistics.mean.toFixed(2), rect.x, rect.y + rect.h / 2);
    }
    // draw line to annotate the three line ablove
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(rect.x, rect.y + 12);
    ctx.lineTo(rect.x + rect.w, rect.y + 12);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(rect.x, rect.y + rect.h);
    ctx.lineTo(rect.x + rect.w, rect.y + rect.h);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(rect.x, rect.y + rect.h / 2);
    ctx.lineTo(rect.x + rect.w, rect.y + rect.h / 2);
    ctx.stroke();


}

export function drawText(
    canvas: HTMLCanvasElement,
    rect: Rect,
    text: string,
    style: {color: string, font: string} = {color: "black", font: "12px serif"},
){
    let ctx = canvas.getContext("2d");
    if(ctx === null){
        throw new Error("无法获取canvas绘图上下文");
    }
    ctx.fillStyle = style.color;
    ctx.font = style.font;
    ctx.fillText(text, rect.x, rect.y);
}

export function drawTrueColorGrid2d(
    canavs: HTMLCanvasElement,
    grid: Grid,
    bands2Draw: number[], // rgb
    Rect: Rect, 
    colorBand: (statistics: {max: number, min: number, mean: number}[],value: number[]) => string,
    GridMBR? : [number,number,number,number] // [minX index ,minY index,maxX index,maxY index]
){
    // 首先分割 rect 为小格子
    let cellWidth = Rect.w / grid.width;
    let cellHeight = Rect.h / grid.height;
    let ctx = canavs.getContext("2d");
    if(ctx === null){
        throw new Error("无法获取canvas绘图上下文");
    }

    let bands = [] as number[][][];
    let statistics = [] as {max: number, min: number, mean: number}[];
    bands2Draw.forEach(bandIndex => {
        bands.push(grid.getBand(bandIndex));
        statistics.push(grid.getBandStatistics(bandIndex));
    });

    // 绘制矩形
    for(let row = 0; row < grid.height; row++){
        for(let col = 0; col < grid.width; col++){
            let value = bands2Draw.map((bandIndex) => bands[bandIndex][row][col]);
            let color = colorBand(statistics, value);
            ctx.fillStyle = color;
            ctx.fillRect(Rect.x + col * cellWidth, Rect.y + row * cellHeight, cellWidth, cellHeight);
        }
    }
    // 若有 GridMBR 则绘制
    if(GridMBR){
        let [minX,minY,maxX,maxY] = GridMBR;
        ctx.strokeStyle = "red";
        ctx.lineWidth = 1;
        ctx.strokeRect(Rect.x + minX * cellWidth, Rect.y + minY * cellHeight, (maxX - minX) * cellWidth, (maxY - minY) * cellHeight);
    }

    // // 绘制中心
    // ctx.fillStyle = "green";
    // ctx.fillRect(Rect.x + Rect.w / 2 - 2, Rect.y + Rect.h / 2 - 2, 4, 4);
    // 绘制十字 10px
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(Rect.x + Rect.w / 2, Rect.y + Rect.h / 2 - 10);
    ctx.lineTo(Rect.x + Rect.w / 2, Rect.y + Rect.h / 2 + 10);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(Rect.x + Rect.w / 2 - 10, Rect.y + Rect.h / 2);
    ctx.lineTo(Rect.x + Rect.w / 2 + 10, Rect.y + Rect.h / 2);
    ctx.stroke();
}

// 进度条渲染
/**
 * 绘制进度条
 * @param canvas - canvas 元素 
 * @param rect - 绘制范围
 * @param progress - 进度 0-100
 * @param style - 样式
 */
export function drawProgress(
    canvas: HTMLCanvasElement,
    rect: Rect,
    progress: number,
    style: {color: string, width: number, backgroundColor: string} = {color: "green", width: 4, backgroundColor: "rgba(0,0,0,1)"}, // {color, width, backgroundColor}
){
    let ctx = canvas.getContext("2d");
    if(ctx === null){
        throw new Error("无法获取canvas绘图上下文");
    }
    // 绘制背景
    ctx.fillStyle = style.backgroundColor;
    ctx.fillRect(rect.x, rect.y, rect.w, rect.h);


    // 绘制进度 rect
    ctx.fillStyle = style.color;
    ctx.fillRect(rect.x, rect.y, rect.w * progress / 100, rect.h);
    // 绘制每一格的边框 灰色
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;
    for(let i = 0; i < 10; i++){
        ctx.beginPath();
        ctx.moveTo(rect.x + rect.w * i / 10, rect.y);
        ctx.lineTo(rect.x + rect.w * i / 10, rect.y + rect.h);
        ctx.stroke();
    }
    // 只有当高度大于 20 时才绘制文字 宽度大于 40 时才绘制文字
    if(rect.h >= 20 && rect.w >= 40){
        ctx.fillStyle = "white";
        ctx.font = "20px serif";
        ctx.fillText(progress + "%", rect.x + rect.w / 2 - 20, rect.y + rect.h / 2 + 6);
    }
}

// test progress bar
export function testProgress(){
    let canvas = document.createElement("canvas");
    canvas.width = 200;
    canvas.height = 20;
    document.body.appendChild(canvas);
    let rect = {x: 0, y: 0, w: 200, h: 20};
    let progress = 0;
    setInterval(() => {
        drawProgress(canvas, rect, progress);
        progress += 1;
        if(progress > 100){
            progress = 0;
        }
    }, 100);
}