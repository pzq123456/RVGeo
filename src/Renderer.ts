/**
 * 渲染器类 将所有涉及绘制数据的逻辑集中在这里
 */

import { simpleColorBand,binaryColorBand } from "./Colors";

type Rect = {
    x: number,
    y: number,
    w: number,
    h: number
}; // 矩形 与canvas 的定义一致 xy为左上角 w为宽 h为高



export function drawGrid2d(
    canavs: HTMLCanvasElement,
    grid2D: number[][],
    Rect: Rect, // {x, y, w, h}
    statistics: {max: number, min: number, mean: number},
    colorBand: (statistics: {max: number, min: number, mean: number},value: number) => string = simpleColorBand,
    GridMBR? : [number,number,number,number] // [minX index ,minY index,maxX index,maxY index]
){
    // 首先分割 rect 为小格子
    let cellWidth = Rect.w / grid2D[0].length;
    let cellHeight = Rect.h / grid2D.length;
    let ctx = canavs.getContext("2d");
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
        }
    }
    // 若有 GridMBR 则绘制
    if(GridMBR){
        let [minX,minY,maxX,maxY] = GridMBR;
        ctx.strokeStyle = "red";
        ctx.lineWidth = 1;
        ctx.strokeRect(Rect.x + minX * cellWidth, Rect.y + minY * cellHeight, (maxX - minX) * cellWidth, (maxY - minY) * cellHeight);
    }

    // 绘制中心
    // ctx.fillStyle = "red";
    // ctx.fillRect(Rect.x + Rect.w / 2 - 2, Rect.y + Rect.h / 2 - 2, 4, 4);
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

    let ctx = canavs.getContext("2d");
    if(ctx === null){
        throw new Error("无法获取canvas绘图上下文");
    }
    // background gray
    // ctx.fillStyle = "gray";
    // ctx.fillRect(Rect.x, Rect.y, Rect.w, Rect.h);

    // 绘制矩形
    for(let row = 0; row < grid2D.length; row++){
        for(let col = 0; col < grid2D[0].length; col++){
            let value = grid2D[row][col];
            let color = colorBand(value);
            ctx.fillStyle = color;
            ctx.fillRect(Rect.x + col * cellWidth, Rect.y + row * cellHeight, cellWidth, cellHeight);
        }
    }

    // // 绘制格网
    // ctx.strokeStyle = "white";
    // ctx.lineWidth = 1;
    // for(let row = 0; row < grid2D.length; row++){
    //     ctx.beginPath();
    //     ctx.moveTo(Rect.x, Rect.y + row * cellHeight);
    //     ctx.lineTo(Rect.x + Rect.w, Rect.y + row * cellHeight);
    //     ctx.stroke();
    // }
    // for(let col = 0; col < grid2D[0].length; col++){
    //     ctx.beginPath();
    //     ctx.moveTo(Rect.x + col * cellWidth, Rect.y);
    //     ctx.lineTo(Rect.x + col * cellWidth, Rect.y + Rect.h);
    //     ctx.stroke();
    // }
}

export function drawCountour(
    canavs: HTMLCanvasElement,
    countourCodeGrid: number[][],
    Rect: Rect, // {x, y, w, h}
    strokeColor: string = "white"
){
    // 首先分割 rect 为小格子
    let cellWidth = Rect.w / countourCodeGrid[0].length;
    let cellHeight = Rect.h / countourCodeGrid.length;

    let ctx = canavs.getContext("2d");
    if(ctx === null){
        throw new Error("无法获取canvas绘图上下文");
    }
    // 绘制矩形
    for(let row = 0; row < countourCodeGrid.length; row++){
        for(let col = 0; col < countourCodeGrid[0].length; col++){
            let value = countourCodeGrid[row][col];
            countourCase(value, {x: Rect.x + col * cellWidth, y: Rect.y + row * cellHeight, w: cellWidth, h: cellHeight}, ctx, strokeColor);
        }
    }

    // // 绘制格网
    // ctx.strokeStyle = "white";
    // ctx.lineWidth = 1;
    // for(let row = 0; row < countourCodeGrid.length; row++){
    //     ctx.beginPath();
    //     ctx.moveTo(Rect.x, Rect.y + row * cellHeight);
    //     ctx.lineTo(Rect.x + Rect.w, Rect.y + row * cellHeight);
    //     ctx.stroke();
    // }
    // for(let col = 0; col < countourCodeGrid[0].length; col++){
    //     ctx.beginPath();
    //     ctx.moveTo(Rect.x + col * cellWidth, Rect.y);
    //     ctx.lineTo(Rect.x + col * cellWidth, Rect.y + Rect.h);
    //     ctx.stroke();
    // }

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