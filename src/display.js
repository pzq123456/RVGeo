/**
 * viewer moudle 可视化模块：
 * 这里是库内置数据可视化模块，你可以使用该模块简单的可视化你的数据。
 * 若想要获得更加丰富的可视化效果，建议搭配其他可视化库使用。
 * 该模块的作用：在开发阶段用以检验各个模块的功能、为node模块洁癖者提供更多的选择、由作者亲自编写所以学习成本更低。
 */
import { PointSet,Line, Triangle, Point, MBRect }  from './base.js';
import { pan,CellValueRenderer} from './pan.js' ;
import {Stastic , grid} from './grid.js';

/**
 * 点的显示
 */
class PointView {
    /**
     * 包装一个 Point
     * @param {CanvasRenderingContext2D} ctx 
     * @param {string} color 
     * @param {Point} point 
     */
    constructor(ctx,color,point) {
      this.ctx = ctx;
      this.color = color;
      this.point = point;
    }
    /**
     * 绘制自身(点)
     * @param {number} canvas_height - canvas的高度
     * @param {boolean} IsReaterMode - 是否为反转模式（与栅格绘制模式统一，以屏幕左下角为原点，符合直觉）
     */
    draw(canvas_height,IsReaterMode = false) {
      if(!IsReaterMode){
        let pan1 = new pan(this.ctx,this.color);
        pan1.draw_point(this.point.x,this.point.y);
      }else{
        this.ctx.save();
        this.ctx.scale(1,-1);
        this.ctx.translate(0,-canvas_height);
        let pan1 = new pan(this.ctx,this.color);
        pan1.draw_point(this.point.x,this.point.y);
        }
        this.ctx.restore();
    }
}

class Contour_CurveView {
  constructor(ctx,canvas_height,color,contour_curve_list,contour_curve_value_list) {
    this.ctx = ctx;
    this.canvas_height = canvas_height;
    this.color = color;
    this.contour_curve_list = contour_curve_list;
    this.contour_curve_value_list = contour_curve_value_list;
  }

  draw(IsReaterMode = false, smooth=false) {
    let pan1 = new pan(this.ctx,this.color);
    // pan1.draw_text("balck","等值线",10,10);
    if(!IsReaterMode){
      pan1.draw_complexline(this.contour_curve_list,true);
    }else{
      this.ctx.save();
      this.ctx.scale(1,-1);
      this.ctx.translate(0,-this.canvas_height);



      for(let i=0;i<this.contour_curve_list.length;i++){
        if(this.contour_curve_list[i] === null){
          continue;
        }
        if(this.contour_curve_list[i].length === 0){
          continue;
        }

        if(smooth){
          let pointset = this.contour_curve_list[i];
          let line = new Line(pointset);
          // this.line.getSubSetByDP(threashold)
          let new_pointset = line.getSubSetByDP(0);
          pan1.draw_complexline(new_pointset,true);
          this.ctx.restore();
          // 取中间点 标注
          let mid = Math.floor(this.contour_curve_list[i].length/2);
          pan1.draw_text("white",this.contour_curve_value_list[i],this.contour_curve_list[i][mid].x,this.canvas_height - this.contour_curve_list[i][mid].y);
          this.ctx.save();
          this.ctx.scale(1,-1);
          this.ctx.translate(0,-this.canvas_height);
        }else{
        pan1.draw_complexline(this.contour_curve_list[i],true);
        this.ctx.restore();
        pan1.draw_text("white",this.contour_curve_value_list[i],this.contour_curve_list[i][0].x,this.contour_curve_list[i][0].y);
        this.ctx.save();
        this.ctx.scale(1,-1);
        this.ctx.translate(0,-this.canvas_height);
          
        }
      }
    }
    this.ctx.restore();
  }
}



/**
 * 点集的显示库
 * 封装了pointset类
 */
class PointSetView {
    /**
     * 包装一个 PointSet 
     * @param {CanvasRenderingContext2D} ctx - 2d canvas上下文
     * @param {string} color - 绘制点的颜色
     * @param {PointSet} pointset - 接受点列表
     */
    constructor(ctx,color,pointset) {
      this.ctx = ctx;
      this.color = color;
      this.pointset = pointset
    }

    /**
     * 绘制自身
     */
    draw() {
        let pan1 = new pan(this.ctx,this.color);
        pan1.draw_pointset(this.pointset.getPointSet());
    }
    /**
     * 绘制凸包
     */
    draw_convex_hull(){
        let pan2 = new pan(this.ctx,this.color);
        pan2.draw_polygon(this.pointset.getConvexHull()); //绘制凸壳所围成的多边形
        //pan2.draw_pointset(this.pointset.getConvexHull()); //绘制所有在凸壳上的点
    }

    draw_extent(){
      let pan2 = new pan(this.ctx,"#00ffff5a");
      pan2.draw_rect(this.pointset.extent);
    }

    //计划将该对象的一些属性信息写入页面的元素

  }



class LineView{
  /**
     * 包装一个 Line
     * @param {CanvasRenderingContext2D} ctx 
     * @param {number} number 
     * @param {string} color 
     * @param {array} pointset 
     */
    constructor(ctx,color,pointset) {
    this.ctx = ctx;
    this.color = color;
    this.line = new Line(pointset);
  }
  /**
   * 绘制自身
   * @param {string} color - 线的颜色
   * @param {number} linewidth - 线的宽度
   * @param {boolean} smooth - 是否平滑
   * 
   */
  draw(color=this.color,linewidth=1,smooth=false) {
    let pan1 = new pan(this.ctx,color);
    pan1.draw_complexline(this.line.getLine(),smooth);
  }

  /**
   * 调用道格拉斯扑克算法抽稀线
   * @param {number} threashold - 算法阈值
   * @param {boolean} smooth - 是否平滑
   */
  draw_DPsmmoth(threashold=290,smooth=false){
    let pan2 = new pan(this.ctx,"rgb(0, 136, 255)");
    pan2.draw_complexline(this.line.getSubSetByDP(threashold),smooth); //在此处设置阈值
  }

  draw_extent(){
    let pan2 = new pan(this.ctx,"#00ffff5a");
    pan2.draw_rect(this.line.extent);
  }

}
  

class TriangleView{
  /**
     * 
     * @param {CanvasRenderingContext2D} ctx 
     * @param {number} number 
     * @param {string} color 
     * @param {Triangle} tri - 直接输入三角形类型的变量
     */
   constructor(ctx,color,tri) {
    this.ctx = ctx;
    this.color = color;
    this.triangle = tri;
  }
  draw(){
    let pan1 = new pan(this.ctx,this.color);
    pan1.draw_triangle(this.triangle.getTriangle());
  }
  /**
   * 绘制外接圆
   */
  draw_EXCircle(){
    let pan1 = new pan(this.ctx,"red");
    let center = this.triangle.getEXCCenter();
    pan1.draw_circle(center.x,center.y,this.triangle.getEXCRadius());
    pan1.draw_point(center.x,center.y);
  }
  /**
   * 绘制三角形内切圆
   */
  draw_INCircle(){
    let pan1 = new pan(this.ctx,this.color);
    let center = this.triangle.getINCcenter();
    pan1.draw_circle(center.x,center.y,this.triangle.getINCRadius());
    pan1.draw_point(center.x,center.y);
  }

  draw_info(text){
    let pan1 = new pan(this.ctx,this.color);
    let center = this.triangle.getINCcenter();
    pan1.draw_text(text,center.x,center.y);
  }

}

/**
 * 统计数据可视化类 用来展示统计数据
 */
export class StasticView{
  /**
     * 统计数据视图
     * - 注意：
     * - 本部分将重写，重写思路：主要实现几种经典统计图的绘制
     * - 柱状图（bar chart）
     * - 折线图（line plot）
     * - 待续
     * 注意：这样将导致绘图思路上有大的变化，但是提升了整体功能的灵活性。
     * 
     * @param {CanvasRenderingContext2D} ctx - 二维绘图上下文
     * @param {Stastic} stastic - 直接输入需要可视化的stastic变量
     */
   constructor(ctx,stastic) {
    this.ctx = ctx;
    this.stastic = stastic;
  }

  /**
    * **绘制盒须图 需要指定该图的外包络矩形及xy轴的分辨率**
    * @param {number} x1 - 左上
    * @param {number} y1 
    * @param {number} x2 - 右下
    * @param {number} y2 
    * @param {number} yleve - y轴尺度
    * @param {number} xleve - x轴尺度
    * */
  draw_box_whisker_plot(x1,y1,x2,y2,yleve,xleve,canvas_height,canvas_width,name){//
    let box_whisker_plot = this.stastic.create_box_whisker_plot(x1,y1,x2,y2,yleve,xleve);

    let MBR = box_whisker_plot.MBR;
    let yaxi = box_whisker_plot.YAXI;
    let whisker = box_whisker_plot.WHISKER;
    let box = box_whisker_plot.BOX;
    let yano = box_whisker_plot.YANO;

    let pan1 =new pan(this.ctx,"gray");
    let pan2 =new pan(this.ctx,"blue");
    let pan3 = new pan(this.ctx,"green");

    this.ctx.save();
    this.ctx.scale(1,-1);
    this.ctx.translate(0,-canvas_height);

    pan1.draw_rect(MBR);
    for(let itm of yaxi){
      pan2.draw_line_arr(itm);
    }

    for(let itm of whisker){
      pan2.draw_line_arr(itm);
    }

    pan3.draw_rect(box);
    this.ctx.restore();

    this.ctx.font = 'oblique bold 20px Arial';
    for(let itm of yano){
      this.ctx.fillText(itm[0], itm[1],canvas_height-itm[2]);//
    }
    if(name == ""|| name == undefined){name = "box whisker plot"}
    let x_mid = (x1+x2)/2;
    this.ctx.fillText(name,x_mid-60,canvas_height-y1-5);
  }


  /**
   * 
   * @param {number} x1 
   * @param {number} y1 
   * @param {number} x2 
   * @param {number} y2 
   * @param {number} yleve 
   * @param {number} xleve 
   * @param {number} canvas_height 
   * @param {number} canvas_width 
   * @param {string} name 
   */
  draw_coordinate_box(x1,y1,x2,y2,yleve,xleve,canvas_height,canvas_width,name){
    let coordinate_box=this.stastic.create_coordinate_box(x1,y1,x2,y2,yleve,xleve);
    let MBR = coordinate_box.MBR;

    let x_mid = (x1+x2)/2;

    let y_scale = coordinate_box.y_scale;
    let y_mark = coordinate_box.y_mark;
    let x_scale = coordinate_box.x_scale;
    let x_mark = coordinate_box.x_mark;

    let pan1 =new pan(this.ctx,"gray");
    let pan2 =new pan(this.ctx,"blue");


    this.ctx.save();
    this.ctx.scale(1,-1);
    this.ctx.translate(0,-canvas_height);

    pan1.draw_rect(MBR);

    for(let itm of y_scale){
      pan2.draw_line_arr(itm);
    }
    for(let itm of x_scale){
      pan2.draw_line_arr(itm);
    }

    this.ctx.restore();

    this.ctx.font = 'oblique bold 20px Arial';
    for(let itm of y_mark){
      this.ctx.fillText(itm[0], itm[1],canvas_height-itm[2]);
    }
    for(let itm of x_mark){
      this.ctx.fillText(itm[0], itm[1],canvas_height-itm[2]);
    }

    if(name == ""|| name == undefined ){name = "blank box"}
    this.ctx.fillText(name,x_mid,canvas_height-y1-5);
  }

  draw_step_plot(x1,y1,x2,y2,yleve,xleve,canvas_height,canvas_width,color,name){

    let points = this.stastic.create_step_plot(x1,y1,x2,y2,yleve,xleve);

    this.ctx.save();
    this.ctx.scale(1,-1);
    this.ctx.translate(0,-canvas_height);

    // let pan3 = new pan(this.ctx,"red");
    let pan1 = new pan (this.ctx,color);
    
    for(let i = 0;i<points.length-1;i++){
      let line = points[i].concat(points[i+1]);
      pan1.draw_line_arr(line);
    }

    // for(let itm of points){
    //   pan3.draw_point(itm[0],itm[1]);
    // }

    this.ctx.restore();

    this.draw_coordinate_box(x1,y1,x2,y2,yleve,xleve,canvas_height,canvas_width,name);
  }

  draw_step_plot_single(x1,y1,x2,y2,yleve,xleve,canvas_height,canvas_width,color){

    let points = this.stastic.create_step_plot(x1,y1,x2,y2,yleve,xleve);

    this.ctx.save();
    this.ctx.scale(1,-1);
    this.ctx.translate(0,-canvas_height);

    // let pan3 = new pan(this.ctx,"red");
    let pan1 = new pan (this.ctx,color);
    
    for(let i = 0;i<points.length-1;i++){
      let line = points[i].concat(points[i+1]);
      pan1.draw_line_arr(line);
    }

    // for(let itm of points){
    //   pan3.draw_point(itm[0],itm[1]);
    // }

    this.ctx.restore();
  }
}

/**
 * 栅格视图 用于显示栅格数据
 */
export class GridView{
  /**
   * 实例化栅格显示对象
   * @param {CanvasRenderingContext2D} ctx - 二维上下文对象
   * @param {grid} grid - 栅格对象
   * @param {number} x1 - 外包络矩形左上角
   * @param {number} y1 
   * @param {number} x2 - 外包络矩形右下角
   * @param {number} y2 
   */
  constructor(ctx,grid,x1,y1,x2,y2){
    this.ctx = ctx;
    this.grid = grid;
    this.MBR = [x1,y1,x2,y2];
    this.xn = this.grid.column;//获取x轴栅格数
    this.yn = this.grid.row;//获取y轴栅格数
    this.width = Math.abs(this.MBR[0]-this.MBR[2]);
    this.height = Math.abs(this.MBR[1]-this.MBR[3]);
    this.dx = this.width/this.xn;//Math.round(this.width/this.xn);
    this.dy = this.height/this.yn;//Math.round(this.height/this.yn);
  }

  /**
   * 根据不同的颜色条带（ColorRamp)绘制栅格数据
   * @param {ColorRamp} colorramp - 颜色坡道渲染函数
   * @param {string} name - 标题
   * @param {number} canvas_height - canvas画板的高
   * @param {number} canvas_width - canvas画板的宽
   * @param {boolean} ISDrawRamp - 是否绘制色带
   * @param {number} resolution - 栅格渲染精度控 (0,1] 0.1为默认值
   */

  draw(colorramp,canvas_height,canvas_width,ISDrawRamp,name,resolution = 0.1){
    let pan1 = new pan(this.ctx,"#00ffff5a"); // 小问题 初始化pan对象必须要给一个颜色 但是栅格用不上

    let xn = this.grid.column;//获取x轴栅格数
    let yn = this.grid.row;//获取y轴栅格数

    let width = Math.abs(this.MBR[0]-this.MBR[2]);
    let height = Math.abs(this.MBR[1]-this.MBR[3]);
    // make the error more small
    // 栅格渲染精度控制在0.1
    let dx = Math.round(width/xn/resolution)*resolution;
    let dy = Math.round(height/yn/resolution)*resolution;
    // let dx = Math.round(width/xn);
    // let dy = Math.round(height/yn);

    this.ctx.save();
    this.ctx.scale(1,-1);
    this.ctx.translate(0,-canvas_height);

    
    pan1.draw_rect(this.MBR);


    for(let i =0;i<this.grid.row;i++){
      for(let j = 0 ;j<this.grid.column;j++){
        // 绘制的矩形是以左下角为原点的
        pan1.draw_GridCell(
          this.MBR[0]+j*dx,
          this.MBR[1]-i*dy-dy,
          dx,dy,
          colorramp.Colorband_1(this.grid.gridset[i][j])
          )
      }
    }

    if(ISDrawRamp){
      let previewgrid = grid.getramp(25);

      let rampBOX = [this.MBR[2]-100,this.MBR[1]+20,this.MBR[2],this.MBR[1]];
      let dxr = 100/previewgrid[0].length;
      let dyr = 20/previewgrid.length;

      for(let i =0;i<previewgrid.length;i++){
        for(let j = 0 ;j<previewgrid[0].length;j++){
          pan1.draw_GridCell(
            rampBOX[0]+j*dxr,
            rampBOX [1]-i*dyr - dyr,
            dxr,dyr,
            colorramp.Colorband_1_p(previewgrid[i][j])
            )
        }
      }
    }
    this.ctx.restore();

    this.ctx.font = 'oblique bold 20px Arial';
    this.ctx.fillText(name, this.MBR[0],canvas_height-(this.MBR[1]+10));
  }

  draw_main(colorramp,canvas_height,canvas_width,ISDrawRamp,name){
    let pan1 = new pan(this.ctx,"#00ffff5a"); // 小问题 初始化pan对象必须要给一个颜色 但是栅格用不上
    let xn = this.grid.column;//获取x轴栅格数
    let yn = this.grid.row;//获取y轴栅格数
    let width = Math.abs(this.MBR[0]-this.MBR[2]);
    let height = Math.abs(this.MBR[1]-this.MBR[3]);
    let dx = Math.round(width/xn);
    let dy = Math.round(height/yn);

    this.ctx.save();
    this.ctx.scale(1,-1);
    this.ctx.translate(0,-canvas_height);

    
    pan1.draw_rect(this.MBR);

    for(let i =0;i<this.grid.row;i++){
      for(let j = 0 ;j<this.grid.column;j++){
        pan1.draw_GridCell(
          this.MBR[0]+j*dx,
          this.MBR[1]-i*dy -dy,
          dx,dy,
          colorramp.abGray_main(this.grid.gridset[i][j])
          )
      }
    }

    if(ISDrawRamp){
      let previewgrid = grid.getramp(25);

      let rampBOX = [this.MBR[2]-100,this.MBR[1]+20,this.MBR[2],this.MBR[1]];
      let dxr = 100/previewgrid[0].length;
      let dyr = 20/previewgrid.length;

      for(let i =0;i<previewgrid.length;i++){
        for(let j = 0 ;j<previewgrid[0].length;j++){
          pan1.draw_GridCell(
            rampBOX[0]+j*dxr,
            rampBOX [1]-i*dyr -dyr,
            dxr,dyr,
            colorramp.abGray_main_p(previewgrid[i][j])
            )
        }
      }
    }
    
    

    this.ctx.restore();

    this.ctx.font = 'oblique bold 20px Arial';
    this.ctx.fillText(name, this.MBR[0],canvas_height-(this.MBR[1]+10));

  }
  
  draw_aspect(colorramp,canvas_height,canvas_width,ISDrawRamp,name){
    let pan1 = new pan(this.ctx,"#00ffff5a"); // 小问题 初始化pan对象必须要给一个颜色 但是栅格用不上
    let xn = this.grid.column;//获取x轴栅格数
    let yn = this.grid.row;//获取y轴栅格数
    let width = Math.abs(this.MBR[0]-this.MBR[2]);
    let height = Math.abs(this.MBR[1]-this.MBR[3]);
    let dx = Math.round(width/xn);
    let dy = Math.round(height/yn);

    this.ctx.save();
    this.ctx.scale(1,-1);
    this.ctx.translate(0,-canvas_height);

    
    pan1.draw_rect(this.MBR);

    for(let i =0;i<this.grid.row;i++){
      for(let j = 0 ;j<this.grid.column;j++){
        pan1.draw_GridCell(
          this.MBR[0]+j*dx,
          this.MBR[1]-i*dy -dy,
          dx,dy,
          colorramp.Colorband_2(this.grid.gridset[i][j])
          )
      }
    }

    if(ISDrawRamp){
      let previewgrid = grid.get_aspect_ramp(8);

      let rampBOX = [this.MBR[2]-100,this.MBR[1]+20,this.MBR[2],this.MBR[1]];
      let dxr = 100/previewgrid[0].length;
      let dyr = 20/previewgrid.length;

      for(let i =0;i<previewgrid.length;i++){
        for(let j = 0 ;j<previewgrid[0].length;j++){
          pan1.draw_GridCell(
            rampBOX[0]+j*dxr,
            rampBOX [1]-i*dyr -dyr,
            dxr,dyr,
            colorramp.Colorband_2(previewgrid[i][j])
            )
        }
      }
    }
    this.ctx.restore();
    this.ctx.font = 'oblique bold 20px Arial';
    if(name ==""||name ==undefined){
      name = "aspect render model";
    }
    this.ctx.fillText(name, this.MBR[0],canvas_height-(this.MBR[1]+10));
  }


  /**
   * 绘制选中的某一个栅格
   * @param {number} row - 该栅格的行号
   * @param {number} column - 该栅格的列号
   * @param {string} color - 标记颜色（建议用rgba定义）
   * * **注意：若想要看到绘制的栅格，请在底图栅格绘制好后调用该方法！**
   */
  draw_selected_cell(row,column,color,canvas_height){
    let pan1 =new pan(this.ctx,"gray");

    this.ctx.save();
    this.ctx.scale(1,-1);
    this.ctx.translate(0,-canvas_height);


    pan1.draw_GridCell(
      this.MBR[0]+ row * this.dx,
      this.MBR[1]- column * this.dy - this.dy,
      this.dx,
      this.dy,
      color);

    this.ctx.restore();

  }
  /**
   * 绘制一列栅格
   * * 输入格式：
   * * [ [row1,column1],
   * *   [row2,column2],...]
   * @param {array} celllist - 栅格列表
   * @param {string} color - 标识颜色建议使用rgba
   * * **注意：若想要看到绘制的栅格，请在底图栅格绘制好后调用该方法！**
   */
  draw_cell_set(celllist,color,canvas_height){
    for(let itm of celllist){
      this.draw_selected_cell(itm[0],itm[1],color,canvas_height);
    }
  }

  /**
   * 用户自定义的栅格渲染方式 绘制连续值 需要统计数据
   * @param {*} canvas_height - 二维canvas上下文的高度
   * @param {*} ISDrawRamp - 是否要绘制示意颜色条带（位于栅格的右上角）
   * @param {*} ISDrawmain - 是否只绘制主体区域（即只绘制箱线图“箱”中的数据）
   * @param {boolean} ISReversed - 是否需要反转颜色条带
   * @param {Stastic} stastic - 需要输入一个包装了本栅格值的统计对象
   * @param {Function} render_function - 颜色渲染函数
   * @param {string} name - 栅格名
   * @param {number} alpha - 栅格渲染的不透明度
   */
  draw_custom(canvas_height,ISDrawRamp,ISDrawmain,ISReversed,stastic,render_function,name,alpha){
    let pan1 = new pan(this.ctx,"#00ffff5a");
    this.ctx.save();
    this.ctx.scale(1,-1);
    this.ctx.translate(0,-canvas_height);
    let dx =this.dx;
    let dy =this.dy;
    
    

    if(ISDrawmain){
      for(let i =0;i<this.grid.row;i++){
        for(let j = 0 ;j<this.grid.column;j++){
          pan1.draw_GridCell(
            this.MBR[0]+j*dx,
            this.MBR[1]-i*dy-dy,
            dx,dy,
            render_function(
              stastic.Linear_Normalization_main(this.grid.gridset[i][j]),ISReversed,alpha
            )
            )
        }
      }
    }

    for(let i = 0; i<this.grid.row;i++){
      for(let j = 0 ;j<this.grid.column;j++){
        pan1.draw_GridCell(
          this.MBR[0]+j*dx,
          this.MBR[1]-i*dy-dy,
          // BUG 10.11 all fixed: 绘制栅格往上偏一格。原因：canvas上下对称操作后，绘制fillrect会变成从左下角向右上角绘制。
          dx,dy,
          render_function(
            stastic.Linear_Normalization(this.grid.gridset[i][j]),ISReversed,alpha
          )
          )
      }
    }
    //pan1.draw_GridCell(this.MBR[0]+600,this.MBR[1],dx,dy,"red");

    if(ISDrawRamp){
      let previewgrid = grid.getramp(25);

      let rampBOX = [this.MBR[2]-100,this.MBR[1]+20,this.MBR[2],this.MBR[1]];
      let dxr = 100/previewgrid[0].length;
      let dyr = 20/previewgrid.length;

      for(let i =0;i<previewgrid.length;i++){
        for(let j = 0 ;j<previewgrid[0].length;j++){
          pan1.draw_GridCell(
            rampBOX[0]+j*dxr,
            rampBOX[1]-i*dyr -dyr,
            dxr,dyr,
            render_function(
              previewgrid[i][j],ISReversed,alpha
          )
        )
        }
      }
    }

    pan1.draw_rect(this.MBR);
    
    this.ctx.restore();

    if(name !== undefined){
      this.ctx.font = 'oblique bold 20px Arial';
      this.ctx.fillText(name, this.MBR[0],canvas_height-(this.MBR[1]+10));
    }
    
  }

  draw_dispersed_custom(canvas_height,ISDrawRamp,render_function,name,level,alpha){
    let pan1 = new pan(this.ctx,"#00ffff5a");
    this.ctx.save();
    this.ctx.scale(1,-1);
    this.ctx.translate(0,-canvas_height);
    let dx =this.dx;
    let dy =this.dy;

    for(let i = 0; i<this.grid.row;i++){
      for(let j = 0 ;j<this.grid.column;j++){
        pan1.draw_GridCell(
          this.MBR[0]+j*dx,
          this.MBR[1]-i*dy-dy,
          // BUG 10.11 all fixed: 绘制栅格往上偏一格。原因：canvas上下对称操作后，绘制fillrect会变成从左下角向右上角绘制。
          dx,dy,
          render_function(
            this.grid.gridset[i][j],alpha
          )
          )
      }
    }

    if(ISDrawRamp){
      let previewgrid = grid.get_dispersed_ramp(level);
      let rampBOX = [this.MBR[2]-100,this.MBR[1]+20,this.MBR[2],this.MBR[1]];
      let dxr = 100/previewgrid[0].length;
      let dyr = 20/previewgrid.length;

      for(let i =0;i<previewgrid.length;i++){
        for(let j = 0 ;j<previewgrid[0].length;j++){
          pan1.draw_GridCell(
            rampBOX[0]+j*dxr,
            rampBOX[1]-i*dyr -dyr,
            dxr,dyr,
            render_function(
              previewgrid[i][j],alpha
          )
        )
        }
      }
    }

    pan1.draw_rect(this.MBR);
    
    this.ctx.restore();

    if(name !== undefined){
      this.ctx.font = 'oblique bold 20px Arial';
      this.ctx.fillText(name, this.MBR[0],canvas_height-(this.MBR[1]+10));
    }

  }

  // 获取外包络矩形 MBR
  /**
   * 直接获取外包络矩形，一维数组，[x_min,y_min,x_max,y_max]
   * - 若想要更丰富的外包络矩形方法，可使用 MBRect 类包装
   * @returns {Array} [x_min,y_min,x_max,y_max]
   */
  getMBR(){
    return this.MBR;
  }


}

/**
 * **该对象将废弃，由自由度更高的draw_custom方法替代**
 * 颜色条带对象，用来控制栅格值的渲染样式
 */
export class ColorRamp{
  //使用不便 需要改善结构
  /**
   * 实例化颜色条带类 需要获取原栅格的统计分布
   * @param {Stastic} stastic - 输入栅格值的统计对象
   */
  constructor(stastic){
    this.stastic = stastic;
  }

  /**
   * 将rgb值渲染为canvas能识别的字符串
   * @param {number} r 
   * @param {number} g 
   * @param {number} b 
   * @returns 字符串：rgb(r,g,b)
   */
  rgb_renderer(r,g,b){
    return "rgb("+r+","+g+","+b+")";
  }

    /**
   * 将rgb值渲染为canvas能识别的字符串
   * @param {number} r 
   * @param {number} g 
   * @param {number} b 
   * @param {number} a
   * @returns 字符串：rgb(r,g,b,a)
   */
     rgba_renderer(r,g,b,a){
      return "rgba("+r+","+g+","+b+","+a+")";
    }



  /**
   * 归一化公式 ：(x – μ) / σ 
   * * σ 是标准差  μ 是均值
   * @param {number} value 
   * @returns {number} 返回值 [0,1]
   */
  Z_Score_Normalization(value){
    return (value - this.stastic.mean)/this.stastic.Standard_Deviation;
  }

  /**
   * 线性归一化 
   * * 公式：(x - min) / (max - min)
   * @param {number} value 
   * @returns {number} 返回值 [0,1]
   */
  Linear_Normalization(value){
    return (value - this.stastic.min)/(this.stastic.max - this.stastic.min);
  }

    /**
   * 线性归一化 (仅针对 **主要区域** 的归一化 **这里指盒须图中的盒中区域** )
   * * 公式：(x - min) / (max - min)
   * @param {number} value 
   * @returns {number} 返回值 [0,1]
   */
     Linear_Normalization_main(value){
      let res =(value - this.stastic.q1)/(this.stastic.q3 - this.stastic.q1);
      if(res>1){return 1;}
      else if(res < 0){return 0;}
      else{
        return res;
      }
    }

  /**
   * 该方法将对应的栅格值（value）映射为灰度图
   * * 默认颜色条带 灰度图 
   * * 数学基础 ： 先对数值归一化 后乘255 数值越大则颜色越深
   * @param {number} value - 输入的栅格值
   * @returns {string} 返回 "rgb（r,g,b）"  描述颜色的字符串
   */
  Gray(value){//栅格值越大对应的区域越亮
    let normal = this.Linear_Normalization(value);
    let r = 255*normal;
    let g = r;
    let b = r;
    return "rgb("+r+","+g+","+b+")";
  }

  abGray(value){//栅格值越大对应的区域越亮
    let normal = this.Linear_Normalization(value);
    let r = 255*(1-normal);
    let g = r;
    let b = r;
    return "rgb("+r+","+g+","+b+")";
  }

  Red(value){
    let normal = this.Linear_Normalization(value);
    let r = 255*normal;
    let g = 0;
    let b = 0;
    return "rgb("+r+","+g+","+b+")";
  }

  Green(value){
    let normal = this.Linear_Normalization(value);
    let r = 0;
    let g = 255*normal;
    let b = 0;
    return "rgb("+r+","+g+","+b+")";
  }

  Blue(value){
    let normal = this.Linear_Normalization(value);
    let r = 0 ;
    let g = 0 ;
    let b = 255*normal;
    return "rgb("+r+","+g+","+b+")";
  }

  Colorband_1(value){
    let normal = this.Linear_Normalization(value);

    
    if(normal<0.333){
      return this.rgb_renderer(0,100*(normal),255*(normal));
    }
    else if(normal<0.444){
      return this.rgb_renderer(155*(normal),155*(normal),55*(normal));
     
    }
    else if(normal<0.555){
      return this.rgb_renderer(55*(normal),155*(normal),55*(normal));
    }
    else if(normal<0.777){
      return this.rgb_renderer(255*(normal),255*(normal),155*(normal));
    }
    else {
      return this.rgb_renderer(255*(normal),255*(normal),255*(normal));
    }
  }

  Colorband_1_p(value){
    let normal= value;
    
    if(normal<0.333){
      return this.rgb_renderer(0,100*(normal),255*(normal));
    }
    else if(normal<0.444){
      return this.rgb_renderer(155*(normal),155*(normal),55*(normal));
     
    }
    else if(normal<0.555){
      return this.rgb_renderer(55*(normal),155*(normal),55*(normal));
    }
    else if(normal<0.777){
      return this.rgb_renderer(255*(normal),255*(normal),155*(normal));
    }
    else {
      return this.rgb_renderer(255*(normal),255*(normal),255*(normal));
    }
  }

  /**
   * 渲染坡向（0-360）
   * @param {number} value 
   * @returns 
   */
  Colorband_2(value){
    /*
    赤色 [RGB] 255, 0, 0 
    橙色 [RGB] 255, 165, 0  
    黄色 [RGB] 255, 255, 0 
    绿色 [RGB] 0, 255, 0 
    青色 [RGB] 0, 255, 255  
    蓝色 [RGB] 0, 0, 255 
    紫色 [RGB] 139, 0, 255 
    */

    if(value<22.5){
      return this.rgb_renderer(255,0,0);
    }
    else if(value<67.5){
      return this.rgb_renderer(255,165,0);
    }
    else if(value<112.5){
      //return this.rgb_renderer(255,150,0);
      return this.rgb_renderer(255,255,0);
    }
    else if(value<157.5){
      //return this.rgb_renderer(255,200,0);
      return this.rgb_renderer(0,255,0);
    }
    else if(value<202.5){
      return this.rgb_renderer(0,255,255);
    }
    else if(value<247.5){
      return this.rgb_renderer(135,206,250);//LightSkyBlue 135,206,250
    }
    else if(value<292.5){
      return this.rgb_renderer(0,0,255);
    }
    else if(value<337.5){
      return this.rgb_renderer(139,0,255);
    }
    else {
      return this.rgb_renderer(255,0,0);
    }
  }


  
  /**
   * 线性归一化 但是将绘制区域限制在盒子内
   * * 默认颜色条带 灰度图 
   * * 数学基础 ： 先对数值归一化 后乘255 数值越大则颜色越深
   * @param {number} value - 输入的栅格值
   * @returns {string} 返回 "rgb（r,g,b）"  描述颜色的字符串
   */
   Gray_main(value){//栅格值越大对应的区域越亮
    //let normal = this.Linear_Normalization_main(value);
    let normal = this.Linear_Normalization_main(value);

    let r = 255*normal;
    let g = r;
    let b = r;
    return "rgb("+r+","+g+","+b+")";
  }

  Gray_main_p(value){//栅格值越大对应的区域越亮
    //let normal = this.Linear_Normalization_main(value);
    let normal = value;
    
    let r = 255*normal;
    let g = r;
    let b = r;
    return "rgb("+r+","+g+","+b+")";
  }

  /**
   * 线性归一化 但是将绘制区域限制在盒子内
   * * 默认颜色条带 反灰度图 
   * * 数学基础 ： 先对数值归一化 后乘255 数值越大则颜色越深
   * @param {number} value - 输入的栅格值
   * @returns {string} 返回 "rgb（r,g,b）"  描述颜色的字符串
   */
   abGray_main(value){//栅格值越大对应的区域越亮
    //let normal = this.Linear_Normalization_main(value);
    let normal = this.Linear_Normalization_main(value);
    let r = 255*(1-normal);
    let g = r;
    let b = r;
    return "rgb("+r+","+g+","+b+")";
  }

  abGray_main_p(value){//栅格值越大对应的区域越亮
    //let normal = this.Linear_Normalization_main(value);
    let normal = value;
    let r = 255*(1-normal);
    let g = r;
    let b = r;
    return "rgb("+r+","+g+","+b+")";
  }

  /**
   * Z_Score_Normalization归一化策略
   * * 默认颜色条带 灰度图 
   * * 数学基础 ： 先对数值归一化 后乘255 数值越大则颜色越深
   * @param {number} value - 输入的栅格值
   * @returns {string} 返回 "rgb（r,g,b）"  描述颜色的字符串
   */
   Gray_Z_score_Nor(value){//栅格值越大对应的区域越亮
    //let normal = this.Linear_Normalization_main(value);
    let normal = this.Z_Score_Normalization(value);
    let r = 255*normal;
    let g = r;
    let b = r;
    return "rgb("+r+","+g+","+b+")";
  }
}

  export {PointSetView,LineView,TriangleView,PointView,Contour_CurveView};
  