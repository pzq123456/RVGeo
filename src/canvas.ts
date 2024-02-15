export class Canvas{ // 用于 debug 的画布
    canvas: HTMLCanvasElement;
    pointStyle: Array<string> = ['x', '+', 'o', '*'];

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

    drawPoint(x: number, y: number, color: string = 'black', pointStyle: string = 'o', radius: number = 3){
        let ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        // 存储之前的状态
        ctx.save();
        // 绘制点
        this.PointStylePen(ctx, x, y, color, pointStyle, radius);
        // 恢复之前的状态
        ctx.restore();
    }

    private PointStylePen(ctx: CanvasRenderingContext2D, x: number, y: number, color: string, pointStyle: string, radius: number){
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        if(pointStyle === 'x' || pointStyle === 'cross' || pointStyle === 'X'){
            ctx.beginPath();
            ctx.moveTo(x - radius, y - radius);
            ctx.lineTo(x + radius, y + radius);
            ctx.moveTo(x - radius, y + radius);
            ctx.lineTo(x + radius, y - radius);
            ctx.stroke();
        }else if(pointStyle === '+' || pointStyle === 'plus'){
            ctx.beginPath();
            ctx.moveTo(x, y - radius);
            ctx.lineTo(x, y + radius);
            ctx.moveTo(x - radius, y);
            ctx.lineTo(x + radius, y);
            ctx.stroke();
        }else if(pointStyle === '*' || pointStyle === 'star'){
            ctx.beginPath();
            ctx.moveTo(x, y - radius);
            ctx.lineTo(x, y + radius);
            ctx.moveTo(x - radius, y);
            ctx.lineTo(x + radius, y);
            ctx.moveTo(x - radius, y - radius);
            ctx.lineTo(x + radius, y + radius);
            ctx.moveTo(x - radius, y + radius);
            ctx.lineTo(x + radius, y - radius);
            ctx.stroke();
        }else if(pointStyle === 'o' || pointStyle === 'circle' || pointStyle === 'ring' || pointStyle === 'd' || pointStyle === 'disk' || pointStyle === 'filled' || pointStyle === 'O'){
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2, true);
            ctx.fill();
        }
    }

    drawLabel(x: number, y: number, label: string, color: string = 'black'){
        let ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        ctx.save();
        ctx.fillStyle = color;
        ctx.fillText(label, x, y);
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