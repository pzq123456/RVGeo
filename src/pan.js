import { Point, Polygon, Circle }  from './base.js';
import { ColorRamp } from './display.js';


/**
 * 画笔类 负责将内容绘制到canvas上 仅用于渲染矢量图形
 * - 可能叫renderer更加专业一点
 */
export class pan { 
    /**
     * 构造画笔 
     * @param {CanvasRenderingContext2D} ctx - 获取二维canvas上下文
     * @param {string} color - 画笔颜色
     */
    constructor(ctx,color) {
        this.ctx = ctx;
        this.color = color;
    }
    /**
     * 绘点
     * @param {number} x - 横坐标
     * @param {number} y - 纵坐标
     * 直接在上下文中绘制
     */
    draw_point(x,y,Mycolor = null){
        const color = this.ctx.fillStyle;

        if(Mycolor){
            this.ctx.fillStyle = Mycolor;
        }else{
            this.ctx.fillStyle = this.color;
        }

        // this.ctx.fillRect(x, y, 10, 10);
        // draw a point with radius 10
        this.ctx.beginPath();
        this.ctx.arc(x, y, 3, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.fillStyle = color;
    }

    

    /**
     * 绘制点集
     * @param {array} pointlist 
     */
    draw_pointset(pointlist){
        for (let it of pointlist){
            this.draw_point(it.x,it.y);
        }
    }

    /**
     * 绘制单一直线
     * @param {Point} sp - start point
     * @param {Point} ep - end point
     */
    draw_line(sp,ep){
        this.ctx.lineWidth = 3 ;
        this.ctx.beginPath();
        this.ctx.moveTo(sp.x,sp.y);
        this.ctx.lineTo(ep.x,ep.y);
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = 3 ;
        this.ctx.closePath();
        this.ctx.stroke();
    }


    /**
     * 绘制填充多边形
     * @param {array} pointlist 
     * @param {boolean} IsFill - 是否填充(会自动计算出较浅的填充颜色)
     */
    draw_polygon(pointlist,IsFill=false){
        //this.ctx.fillStyle = "#0000ff5a";
        let OriColor = this.ctx.fillStyle;
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = 3 ;
        this.ctx.beginPath();

        this.ctx.moveTo(pointlist[0].x,pointlist[0].y);
        for(let i=1;i<pointlist.length;i++){
            this.ctx.lineTo(pointlist[i].x,pointlist[i].y);
        }

        // 若为填充多边形
        if(IsFill){
            // 解析 this.color 并调高透明度
            let FillColor = ColorParser.parseColor(this.color);
            FillColor.transparent(0.8);
            this.ctx.fillStyle = FillColor.toString();
            this.ctx.fill();
        }

        //this.ctx.fill();
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.fillStyle = OriColor;
       
    }

    /**
     * 绘制填充多边形
     * @param {Polygon} polygon
     * @param {boolean} IsFill - 是否填充(会自动计算出较浅的填充颜色)
     * @param {boolean} IsSmooth - 是否平滑绘制(Bezier曲线)
     */
    draw_polygon2(polygon,IsFill=false,IsSmooth=false){
        let vectorlist = polygon.get_VectorList(); 
        // 搜集所有的起点
        let sp_list = [];
        for(let i=0;i<vectorlist.length;i++){
            let sp = vectorlist[i].sp;
            sp_list.push(sp);
        }

        //this.ctx.fillStyle = "#0000ff5a";
        let OriColor = this.ctx.fillStyle;
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = 3 ;
        this.ctx.beginPath();

        if(IsSmooth){
            // 0 2 点 以 1 为控制点绘制 贝塞尔曲线
            // length / 2 及 length / 2 + 2 以 length / 2 + 1 为控制点绘制 贝塞尔曲线

            // 将起点添加到末尾 并将末尾的点添加到起点
            sp_list.push(sp_list[0]);
            sp_list.unshift(sp_list[sp_list.length - 2]);
            // this.draw_point(sp_list[0].x,sp_list[0].y,"#ff0000");

            let len = sp_list.length;
            // this.draw_point(sp_list[len - 1].x,sp_list[len - 1].y,"#00ff00");


            for(let i=0; i<len; i++){
                if( i==len/2 ){
                    this.ctx.quadraticCurveTo(sp_list[i].x,sp_list[i].y,sp_list[i+1].x,sp_list[i+1].y);
                }else if( i==0 ){
                    this.ctx.moveTo(sp_list[0].x,sp_list[0].y);
                    this.ctx.quadraticCurveTo(sp_list[i+1].x,sp_list[i+1].y,sp_list[i+2].x,sp_list[i+2].y);
                    i++;
                }
                else if(i==len-1){
                    continue;
                }else{
                    this.ctx.lineTo(sp_list[i].x,sp_list[i].y);
                }
            }


        }else{
            // 根据起点绘制
            this.ctx.moveTo(sp_list[0].x,sp_list[0].y);
            for(let i=1;i<sp_list.length;i++){
                this.ctx.lineTo(sp_list[i].x,sp_list[i].y);
            }

        }
        
        // 若为填充多边形
        if(IsFill){
            console.log("IsFill");
            // 解析 this.color 并调高透明度
            let FillColor = ColorParser.parseColor(this.color);
            FillColor.transparent(0.8);
            this.ctx.fillStyle = FillColor.toString();
            this.ctx.fill();
        }
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.fillStyle = OriColor;
       
    }
    
    /**
     * 绘制折线
     * @param {array} pointlist 
     * @param {boolean} smooth - 是否平滑
     */
     draw_complexline(pointlist,smooth=false,EveryPoint=false){
        // draw poly line with sharp corners
        if(!smooth){
            this.ctx.strokeStyle =this.color;
            this.ctx.lineWidth = 3 ;
            this.ctx.beginPath();
            this.ctx.moveTo(pointlist[0].x,pointlist[0].y);
            for(let i=1;i<pointlist.length;i++){
                this.ctx.lineTo(pointlist[i].x,pointlist[i].y);
            }
            this.ctx.stroke();
        }else{
            // draw poly line with smooth corners
            this.ctx.strokeStyle = this.color;
            this.ctx.lineWidth = 3 ;
            this.ctx.beginPath();
            this.ctx.moveTo(pointlist[0].x,pointlist[0].y);
            for(let i=1;i<pointlist.length-1;i++){
                let xc = (pointlist[i].x + pointlist[i+1].x) / 2;
                let yc = (pointlist[i].y + pointlist[i+1].y) / 2;
                this.ctx.quadraticCurveTo(pointlist[i].x,pointlist[i].y,xc,yc);
            }
            // curve through the last two points
            let i = pointlist.length-1;
            this.ctx.quadraticCurveTo(pointlist[i].x,pointlist[i].y,pointlist[i].x,pointlist[i].y);
            this.ctx.stroke();
        }

        // draw every point
        if(EveryPoint){
            for(let i=0;i<pointlist.length;i++){
                // 始点为绿色
                if(i==0 || i==pointlist.length-1){
                    this.draw_point(pointlist[i].x,pointlist[i].y,"yellow");
                    continue;
                }else{
                    // 中间为白色
                    this.draw_point(pointlist[i].x,pointlist[i].y,"white");
                }
                
                
            
            }
        }
        
    }

    /**
     * 绘制矩形框 [x1,y1,x2,y2]
     * @param {array} list1
     * @param {boolean} IsFill - 是否填充(会自动计算出较浅的填充颜色)
     */
    draw_rect(list1,IsFill=false){

        let OriColor = this.ctx.fillStyle;
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = 3 ;
        this.ctx.beginPath();

        this.ctx.moveTo(list1[0],list1[1]);
        this.ctx.lineTo(list1[2],list1[1]);
        this.ctx.lineTo(list1[2],list1[3]);
        this.ctx.lineTo(list1[0],list1[3]);
        this.ctx.closePath();

        // 若为填充多边形
        if(IsFill){
            // 解析 this.color 并调高透明度
            let FillColor = ColorParser.parseColor(this.color);
            FillColor.transparent(0.8);
            // console.log("Rect");
            // console.log(FillColor);
            this.ctx.fillStyle = FillColor.toString();
            this.ctx.fill();
        }


        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.fillStyle = OriColor;
    }

    /**
     * 绘制三角形
     * @param {array} list - 三角形的点表
     */
    draw_triangle(list){
        this.ctx.strokeStyle =this.color;
        this.ctx.lineWidth = 3 ;
        this.ctx.beginPath();
        this.ctx.moveTo(list[0].x,list[0].y);
        this.ctx.lineTo(list[1].x,list[1].y);
        this.ctx.lineTo(list[2].x,list[2].y);
        this.ctx.closePath();
        this.ctx.stroke();
    }

    /**
     * 绘制圆
     * @param {number} x - 圆心x坐标
     * @param {number} y - 圆心y坐标
     * @param {number} r - 外接圆半径
     * @param {boolean} IsFill - 是否填充(会自动计算出较浅的填充颜色)
     */
    draw_circle(x,y,r,IsFill=false)
    {
        let OriColor = this.ctx.fillStyle;
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = 3 ;
        this.ctx.beginPath();
        this.ctx.arc(x,y,r,0,Math.PI*2,false);
        this.ctx.closePath();
        this.ctx.stroke();

        // 若为填充多边形
        if(IsFill){
            // 解析 this.color 并调高透明度
            let FillColor = ColorParser.parseColor(this.color);
            FillColor.transparent(0.8);
            // console.log("Circle");
            // console.log(FillColor);
            this.ctx.fillStyle = FillColor.toString();
            this.ctx.fill();
        }

        this.ctx.fillStyle = OriColor;

        // // 开始绘制路径
        // this.ctx.beginPath();
        // this.ctx.lineWidth = 2;
        // this.ctx.strokeStyle = this.color;
        // // 绘制圆的路径
        // this.ctx.arc(x, y, r, 0, Math.PI * 2, false);
        // // 描边路径
        // this.ctx.stroke();
    }

    /**
     * 绘制直线（array表示）
     * @param {array} list - [x1,y1,x2,y2]
     */
     draw_line_arr(list){
        
        let x1 = list[0];
        let y1 = list[1];
        let x2 = list[2];
        let y2 = list[3];

        this.ctx.lineWidth = 2 ;
        this.ctx.beginPath();

        this.ctx.moveTo(x1,y1);
        this.ctx.lineTo(x2,y2);

        this.ctx.strokeStyle = this.color;

        this.ctx.closePath();
        this.ctx.stroke();
    }


    /**
     * 绘制栅格单元
     * @param {number} x - 横坐标
     * @param {number} y - 纵坐标
     * @param {number} dx - 栅格单元大小 需要计算得出
     * @param {number} dy - 栅格单元大小 需要计算得出
     * @param {string} color - 栅格单元颜色 需要计算得出
     * */
     draw_GridCell(x,y,dx,dy,color){
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x,y,dx,dy);
    }
    /**
     * 绘制文字
     * @param {string} text 
     * @param {number} x 
     * @param {number} y 
     */
    draw_text(color="black",text,x,y){

        let color1 = this.ctx.fillStyle;
        this.ctx.fillStyle = color;
        this.ctx.font = 'oblique 20px Arial';
        this.ctx.fillText(text,x,y);
        this.ctx.fillStyle = color1;

    }
}

/**
 * 栅格色彩渲染器 将栅格值渲染为可供浏览器渲染的字符串，
 * 提供各种颜色渲染方案 
 * * 与pan类的区别：pan类可以在canvas上绘制，而本类仅完成值的转换
 * * 即只完成由value到字符串的转换
 */
export class CellValueRenderer{
   /**
    * **取值限制[0,255]**
    * 该方法将对应的栅格值（value）映射为灰度图
    * @param {number} value - 输入的栅格值
    * @param {number} alpha - 渲染该层的透明度
    * @returns {string} 返回描述颜色的字符串 包括rgb和rgba两种格式
    */
    static  Gray(value,ISReversed,alpha){
        if(ISReversed) {
            value = 1 - value; 
        }
     let r = 255*value;
     let g = r;
     let b = r;
     if(alpha == undefined){
        return "rgb("+r+","+g+","+b+")";
     }
     return "rgba("+r+","+g+","+b+","+alpha+")";
   }

    /**
    * **取值限制[0,3]**
    * 该方法将对应的栅格值（value）映射为灰度图
    * @param {number} value - 输入的栅格值
    * @param {number} alpha - 渲染该层的透明度
    * @returns {string} 返回描述颜色的字符串 包括rgb和rgba两种格式
    */
    static  ColorBand_1(value,alpha){
    
    let r,g,b;

    if(value == 0 ){
        r=0;
        g=0;
        b=0;
    }
    if(value == 1){
        r=255;
        g=0;
        b=0;
    }
    if(value == 2){
        r=0;
        g=255;
        b=0;
    }
    if(value == 3){
        r=0;
        g=0;
        b=255;
    }

     if(alpha == undefined){
        return "rgb("+r+","+g+","+b+")";
     }
     return "rgba("+r+","+g+","+b+","+alpha+")";
   }

   static ColorBand_2(value,alpha){
    let r,g,b;

    if(value == 0 ){
        r=160;
        g=32;
        b=240;
    }
    if(value == 1){
        r=255;
        g=105;
        b=180;
    }
    if(value == 2){
        r=255;
        g=165;
        b=0;
    }
    if(value == 3){
        r=0;
        g=255;
        b=255;
    }

     if(alpha == undefined){
        return "rgb("+r+","+g+","+b+")";
     }
     return "rgba("+r+","+g+","+b+","+alpha+")";
   }

   /**
    * **取值限制[0,255]**
    * @param {number} value 
    * @param {number} alpha 
    * @returns 
    */
    static Red(value,ISReversed,alpha){
        if(ISReversed) {
            value = 1 - value; 
        }
     let r = 255*value;
     let g = 0;
     let b = 0;
     if(alpha == undefined){
        return "rgb("+r+","+g+","+b+")";
     }
     return "rgba("+r+","+g+","+b+","+alpha+")";
   }

   /**
    * **取值限制[0,255]**
    * @param {*} value 
    * @param {*} alpha 
    * @returns 
    */
    static Green(value,ISReversed,alpha){
        if(ISReversed) {
            value = 1 - value; 
        }
     let r = 0;
     let g = 255*value;
     let b = 0;
     if(alpha == undefined){
        return "rgb("+r+","+g+","+b+")";
     }
     return "rgba("+r+","+g+","+b+","+alpha+")";
   }

   /**
    * **取值限制[0,255]**
    * @param {*} value 
    * @param {*} alpha 
    * @returns 
    */
    static Blue(value,ISReversed,alpha){
        if(ISReversed) {
            value = 1 - value; 
        }
     let r = 0 ;
     let g = 0 ;
     let b = 255*value;
     if(alpha == undefined){
        return "rgb("+r+","+g+","+b+")";
     }
     return "rgba("+r+","+g+","+b+","+alpha+")";
   }

   /**
    * **取值限制[0,255]**
    * @param {*} value 
    * @param {*} alpha 
    * @returns 
    */
    static Yellow(value,ISReversed,alpha){
        if(ISReversed) {
            value = 1 - value; 
        }
     let r = 255*value ;
     let g = 255*value ;
     let b = 0;
     if(alpha == undefined){
        return "rgb("+r+","+g+","+b+")";
     }
     return "rgba("+r+","+g+","+b+","+alpha+")";
   }

   /**
    * **渲染坡向（0-360）**
    * @param {number} value 
    * @returns 
    */
    static  Aspact(value){
        let r,g,b ;
     if(value<22.5){
       [r,g,b] = [255,0,0];
     }
     else if(value<67.5){
        [r,g,b] = [255,165,0];
     }
     else if(value<112.5){
       [r,g,b] = [255,255,0];
     }
     else if(value<157.5){
       //return this.rgb_renderer(255,200,0);
       [r,g,b] = [0,255,0];
     }
     else if(value<202.5){
        [r,g,b] = [0,255,255];
     }
     else if(value<247.5){
        [r,g,b] = [135,206,250];//LightSkyBlue 135,206,250
     }
     else if(value<292.5){
        [r,g,b] = [0,0,255];
     }
     else if(value<337.5){
        [r,g,b] = [139,0,255];
     }
     else {
        [r,g,b] = [255,0,0];
     }
    return "rgb("+r+","+g+","+b+")";
   } 

   static  Pure(value,ISReversed,alpha){
    if(ISReversed) {
        value = 1 - value; 
    }
   let r = 255*value;
   let g = 150*r;
   let b = 20*r;
   if(alpha == undefined){
      return "rgb("+r+","+g+","+b+")";
   }
   return "rgba("+r+","+g+","+b+","+alpha+")";
}


   
 }

 /**
  * **颜色解析类 用于解析颜色字符串**
  * ## 静态对象，不需要实例化，直接使用静态方法
  */
 export class ColorParser{
    // 颜色解析类 用于解析颜色字符串
    // 1. rgb(255,255,255) 2. rgba(255,255,255,0.5) 3. #ffffff 4. #ffffffff 5. red 6. #fff 7. #ffff
    // 8. #fff5 9. #fff5f5 10. #fff5f5f5 11. #fff5f5f5f5 12. #fff5f5f5f5f5
    /**
     * **解析颜色字符串**
     * @param {*} color - 颜色字符串
     * @returns 
     */
    static parseColor(color){

        if(color == undefined || color == null){
            return null;
        }
        if(typeof color == "string"){
            if(color.startsWith("rgb")){
                return this.parseColorByRGB(color);
            }
            else if(color.startsWith("#")){
                return this.parseColorByHex(color);
            }
            else{
                return this.parseColorByName(color);
            }
        }
        return null;
    }

    static parseColorByRGB(color){
        let colorStr = color.substring(color.indexOf("(")+1,color.indexOf(")"));
        let colors = colorStr.split(",");
        if(colors.length == 3){
            return new Color(parseInt(colors[0]),parseInt(colors[1]),parseInt(colors[2]));
        }
        else if(colors.length == 4){
            return new Color(parseInt(colors[0]),parseInt(colors[1]),parseInt(colors[2]),parseFloat(colors[3]));
        }
        return null;
    }

    static parseColorByHex(color){
        let colorStr = color.substring(1);
        let colors = [];
        if(colorStr.length == 3){
            colors = [colorStr.substring(0,1),colorStr.substring(1,2),colorStr.substring(2,3)];
            return new Color(parseInt(colors[0]+colors[0],16),parseInt(colors[1]+colors[1],16),parseInt(colors[2]+colors[2],16));
        }
        else if(colorStr.length == 4){
            colors = [colorStr.substring(0,1),colorStr.substring(1,2),colorStr.substring(2,3),colorStr.substring(3,4)];
            return new Color(parseInt(colors[0]+colors[0],16),parseInt(colors[1]+colors[1],16),parseInt(colors[2]+colors[2],16),parseInt(colors[3]+colors[3],16)/255);
        }
        else if(colorStr.length == 6){
            colors = [colorStr.substring(0,2),colorStr.substring(2,4),colorStr.substring(4,6)];
            return new Color(parseInt(colors[0],16),parseInt(colors[1],16),parseInt(colors[2],16));
        }
        else if(colorStr.length == 8){
            colors = [colorStr.substring(0,2),colorStr.substring(2,4),colorStr.substring(4,6),colorStr.substring(6,8)];
            return new Color(parseInt(colors[0],16),parseInt(colors[1],16),parseInt(colors[2],16),parseInt(colors[3],16)/255);
        }
        return null;
    }

    static parseColorByName(color){
        if(color == "red"){
            return new Color(255,0,0);
        }
        else if(color == "green"){
            return new Color(0,255,0);
        }
        else if(color == "blue"){
            return new Color(0,0,255);
        }
        else if(color == "yellow"){
            return new Color(255,255,0);
        }
        else if(color == "black"){
            return new Color(0,0,0);
        }
        else if(color == "white"){
            return new Color(255,255,255);
        }
        else if(color == "gray"){
            return new Color(128,128,128);
        }
        else if(color == "orange"){
            return new Color(255,165,0);
        }
        else if(color == "purple"){
            return new Color(128,0,128);
        }
        else if(color == "pink"){
            return new Color(255,192,203);
        }
        else if(color == "brown"){
            return new Color(165,42,42);
        }
        else if(color == "cyan"){
            return new Color(0,255,255);
        }
        return null;
    }
 }

export class Color{
    // 颜色类
    constructor(r,g,b,a){
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    lighter(value){
        this.r = this.r + value;
        this.g = this.g + value;
        this.b = this.b + value;
    }

    transparent(value){
        if(this.a == undefined){
            this.a = 1;
        }
        this.a = this.a - value;

        if(this.a < 0){
            this.a = Math.abs(this.a);
        }
    }

    toString(){
        if(this.a == undefined){
            return "rgb("+this.r+","+this.g+","+this.b+")";
        }
        return "rgba("+this.r+","+this.g+","+this.b+","+this.a+")";
    }
}


 


