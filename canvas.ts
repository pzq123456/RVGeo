export class Canvas{ // 用于 debug 的画布
    canvas: HTMLCanvasElement;
    pointStyle: Array<string> = ['x', '+', 'o', '*'];

    constructor(
        public width: number = 300,
        public height: number = 150,
        public container: HTMLElement,
        transformation?: number[] // 仿射变换
    ){
        this.canvas = document.createElement('canvas'); // 创建一个canvas元素
        this.canvas.width = width;
        this.canvas.height = height;
        container.appendChild(this.canvas);
        this.initCanvas('black', 'rgba(125, 0, 0, 0.5)', 'black', transformation);
    }

    static getTransArray(width:number,height:number,topLeft:[number,number] = [-180,90],bottomRight:[number,number] = [180,-90]){
        // 根据左上角和右下角的经纬度坐标，计算出仿射变换的参数。将所表示的区域映射到画布的范围内，画布的坐标原点位于中心。
        let x = width / (bottomRight[0] - topLeft[0]);
        let y = height / (topLeft[1] - bottomRight[1]);
        return [x, 0, 0, y, -x * topLeft[0], y * topLeft[1]];

        /**
        a (m11)
        水平方向的缩放
        b(m12)
        竖直方向的倾斜偏移
        c(m21)
        水平方向的倾斜偏移
        d(m22)
        竖直方向的缩放
        e(dx)
        水平方向的移动
        f(dy)
        竖直方向的移动
         */
    }


    drawPoint(x: number, y: number, color: string = 'black', pointStyle: string = 'o', radius: number = 1){
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

    drawAxes(segNum: [number,number] = [6,6], color: string = 'green'){
        let ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        ctx.save();
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(0, this.height / 2);
        ctx.lineTo(this.width, this.height / 2);
        ctx.moveTo(this.width / 2, 0);
        ctx.lineTo(this.width / 2, this.height);
        ctx.stroke();
        // 绘制刻度
        let stepX = this.width / segNum[0];
        let stepY = this.height / segNum[1];
        for(let i = 1; i < segNum[0]; i++){
            ctx.beginPath();
            ctx.moveTo(i * stepX, this.height / 2 - 5);
            ctx.lineTo(i * stepX, this.height / 2 + 5);
            ctx.stroke();
        }
        for(let i = 1; i < segNum[1]; i++){
            ctx.beginPath();
            ctx.moveTo(this.width / 2 - 5, i * stepY);
            ctx.lineTo(this.width / 2 + 5, i * stepY);
            ctx.stroke();
        }
        ctx.restore();
    }

    initCanvas(
        strokeStyle: string = 'black',
        fillStyle: string = 'rgba(125, 0, 0, 0.5)',
        bgColor: string = 'black',
        transformation?: number[] // 仿射变换
    ){
        let ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

        ctx.strokeStyle = strokeStyle;
        ctx.fillStyle = bgColor;

        ctx.fillRect(0, 0, this.width, this.height);
        ctx.strokeRect(0, 0, this.width, this.height);
        ctx.fillStyle = fillStyle;
        this.drawAxes();

        if(transformation){
            ctx.setTransform(transformation[0], transformation[1], transformation[2], transformation[3], transformation[4], transformation[5]);
        }
    }
}