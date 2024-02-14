export class Canvas{ // 用于 debug 的画布
    canvas: HTMLCanvasElement;
    constructor(
        public width: number = 300,
        public height: number = 150,
        public container: HTMLElement,
    ){
        this.canvas = document.createElement('canvas'); // 创建一个canvas元素
        this.canvas.width = width;
        this.canvas.height = height;
        container.appendChild(this.canvas);
        this.initCanvas();
    }

    drawPoint(x: number, y: number, color: string = 'black'){
        let ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        // 存储之前的状态
        ctx.save();
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2, true);
        ctx.fill();
        // 恢复之前的状态
        ctx.restore();
    }

    drawBound(left: number, top: number, right: number, bottom: number, color: string = 'black'){
        let ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        ctx.save();
        ctx.strokeStyle = color;
        ctx.strokeRect(left, top, right - left, bottom - top);
        ctx.restore();
    }

    initCanvas(
        strokeStyle: string = 'black',
        fillStyle: string = 'rgba(125, 0, 0, 0.5)',
        bgColor: string = 'black',
    ){
        let ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        ctx.strokeStyle = strokeStyle;
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, this.width, this.height);
        ctx.strokeRect(0, 0, this.width, this.height);
        ctx.fillStyle = fillStyle;
    }
}