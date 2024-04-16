import { Grid, QTNode } from '../coverage';

type Rect = {
    x: number;
    y: number;
    w: number;
    h: number;
};
export declare function drawGrid2d(canavs: HTMLCanvasElement, grid2D: number[][], Rect: Rect, // {x, y, w, h}
statistics: {
    max: number;
    min: number;
    mean: number;
}, colorBand?: (statistics: {
    max: number;
    min: number;
    mean: number;
}, value: number) => string, GridMBR?: [number, number, number, number]): void;
export declare function binDrawGrid2d(canavs: HTMLCanvasElement, grid2D: number[][], Rect: Rect, // {x, y, w, h}
colorBand?: (value: number) => string): void;
export declare function drawCountour(canavs: HTMLCanvasElement, countourCodeGrid: number[][], Rect: Rect, // {x, y, w, h}
strokeColor?: string): void;
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
export declare function drawQTree2d(canvas: HTMLCanvasElement, rect: Rect, QTree: QTNode, grid: Grid, colorBand?: (statistics: {
    max: number;
    min: number;
    mean: number;
}, value: number) => string, value?: number, statistics?: {
    max: number;
    min: number;
    mean: number;
}): void;
export declare function drawSample(canvas: HTMLCanvasElement, rect: Rect, sample: number[], style?: {
    color: string;
    backgroundColor: string;
}, // {color, width, backgroundColor}
isText?: boolean, statistics?: {
    max: number;
    min: number;
    mean: number;
}): void;
export declare function drawSample2(canvas: HTMLCanvasElement, rect: Rect, sample: number[], style?: {
    color: string;
    backgroundColor: string;
}, // {color, width, backgroundColor}
statistics?: {
    max: number;
    min: number;
    mean: number;
}, isText?: boolean): void;
export declare function drawText(canvas: HTMLCanvasElement, rect: Rect, text: string, style?: {
    color: string;
    font: string;
}): void;
export declare function drawTrueColorGrid2d(canavs: HTMLCanvasElement, grid: Grid, bands2Draw: number[], // rgb
Rect: Rect, colorBand: (statistics: {
    max: number;
    min: number;
    mean: number;
}[], value: number[]) => string, GridMBR?: [number, number, number, number]): void;
/**
 * 绘制进度条
 * @param canvas - canvas 元素
 * @param rect - 绘制范围
 * @param progress - 进度 0-100
 * @param style - 样式
 */
export declare function drawProgress(canvas: HTMLCanvasElement, rect: Rect, progress: number, style?: {
    color: string;
    width: number;
    backgroundColor: string;
}): void;
export declare function testProgress(): void;
export {};
