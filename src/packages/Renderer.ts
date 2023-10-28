/**
 * 渲染器类 将所有涉及绘制数据的逻辑集中在这里
 */

import { simpleColorBand } from "./Colors";

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
    colorBand: (statistics: {max: number, min: number, mean: number},value: number) => string = simpleColorBand
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

    // 绘制中心
    ctx.fillStyle = "red";
    ctx.fillRect(Rect.x + Rect.w / 2 - 2, Rect.y + Rect.h / 2 - 2, 4, 4);

}