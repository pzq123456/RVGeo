import {kernel_2Dmatrix_1,kernel_2Dmatrix_2,kernel_2Dmatrix_3} from './kernel.js'

export class grid {
    /**
     * 栅格类 默认生成的栅格是 0 填充栅格
     * @param {number} row 栅格行数
     * @param {number} column  栅格列数
     */
    constructor(row,column){
        this.row = row;
        this.column = column;
        this.gridset = this.#creataGridSet();
    }

    /**
     * 创建空白栅格
     */
    #creataGridSet(){

        let matrix = [];
        for(let i = 0; i < this.row ;i++){
            let tm = [];
            tm.length = this.column ;
            tm.fill(0);
            matrix.push(tm);
        }
    return matrix;
    }

    /**
     * 将内部二维数组一维化
     * @returns {array} 返回一维数组 包含所有的栅格值
     */
    get1DArray(){
        let mm = this.gridset;
        let tm = [];
        for(let i = 0; i < this.row ;i++){
            for(let j = 0; j < this.column;j++){
                tm.push(mm[i][j])
            }
        }
        return tm;

    }

    /**
     * **注意：该操作会改变栅格本身 请谨慎操作！**
     * 在原栅格四周缓冲出一个size大小的区域 并填充上 num 值
     * * 示意：
     * * [num  ... num] --- num*(column+2*size)
     * * [num .... sizeth num] + [ori_row_i] + [num .... sizeth num]
     * * .....
     * * [num  ... num] --- num*(column+2*size)
     * @param {number} size - padding区域大小
     * @param {number} num - 填入此区域的值
     */
    padding_(size,num){
        this.paddingsize = size;//记录下paddingsize
        let row = this.row + 2*size;
        let column = this.column + 2*size;

        for(let itm of this.gridset){
            for(let i =0;i<size;i++){
                itm.push(num);
                itm.unshift(num);
            }
        }
        
        for(let i =0;i<size;i++){
            let  tpp = [];
            tpp.length = column;
            tpp.fill(num);

            this.gridset.push(tpp); // 尾部插入
            this.gridset.unshift(tpp); // 头部插入
        }
        this.row = row;
        this.column =column;
    }


 /** 
     * ### 反padding操作 
     * 抵消padding操作的效果
     * 在padding之后调用以抵消padding的效果 只可使用一次！
     */
  depadding_(){
    let row = this.row - 2*this.paddingsize;
    let column = this.column - 2*this.paddingsize;

    for(let itm of this.gridset){
        for(let i =0;i<this.paddingsize;i++){
            itm.pop();
            itm.shift();
        }
    }
    
    for(let i =0;i<this.paddingsize;i++){
        this.gridset.pop(); // 尾部插入
        this.gridset.shift(); // 头部插入
    }
    this.row = row;
    this.column =column;
}
   
































    /**
     * **需要先根据算子的大小进行padding操作 否则会有NaN错误**
     * 基于拉普拉斯算子的二维边缘提取 
     * @returns {array} 返回卷积结果（二维矩阵）
     */
    default_convolve(){
        let data = this.gridset;
        let row = this.row;
        let column = this.column;
        let size = this.paddingsize;
        let res = [];

        for(let i = size ; i< row - size ; i++ ){
            let tpp =[];
            for(let j = size ; j < column -size ; j++){
                
                let vma = [
                    [data[i-1][j-1],data[i-1][j],data[i-1][j+1]],
                    [data[i][j-1],data[i][j],data[i][j+1]],
                    [data[i+1][j-1],data[i+1][j],data[i+1][j+1]]
                ] // 取附近3x3区域输入拉普拉斯算子

                tpp.push(kernel_2Dmatrix_1(vma));//将计算结果保存在结果矩阵中
            }
            res.push(tpp);
        }
        return res;
    }

    /**
     * **需要先根据算子的大小进行padding操作 否则会有NaN错误**
     * 计算栅格坡度
     * @returns {array} 返回卷积结果（二维矩阵）
     */
     get_Slope(){
        let data = this.gridset;
        let row = this.row;
        let column = this.column;
        let size = this.paddingsize;
        let res = [];

        for(let i = size ; i< row - size ; i++ ){
            let tpp =[];
            for(let j = size ; j < column -size ; j++){
                
                let vma = [
                    [data[i-1][j-1],data[i-1][j],data[i-1][j+1]],
                    [data[i][j-1],data[i][j],data[i][j+1]],
                    [data[i+1][j-1],data[i+1][j],data[i+1][j+1]]
                ] // 取附近3x3区域输入拉普拉斯算子

                tpp.push(kernel_2Dmatrix_2(vma));//将计算结果保存在结果矩阵中
            }
            res.push(tpp);
        }
        return res;
    }


     /**
     * **需要先根据算子的大小进行padding操作 否则会有NaN错误**
     * 计算栅格坡度
     * @returns {array} 返回卷积结果（二维矩阵）
     */
      get_Aspect(){
        let data = this.gridset;
        let row = this.row;
        let column = this.column;
        let size = this.paddingsize;
        let res = [];

        for(let i = size ; i< row - size ; i++ ){
            let tpp =[];
            for(let j = size ; j < column -size ; j++){
                let vma = [
                    [data[i-1][j-1],data[i-1][j],data[i-1][j+1]],
                    [data[i][j-1],data[i][j],data[i][j+1]],
                    [data[i+1][j-1],data[i+1][j],data[i+1][j+1]]
                ] // 取附近3x3区域输入拉普拉斯算子
                tpp.push(kernel_2Dmatrix_3(vma));//将计算结果保存在结果矩阵中
            }
            res.push(tpp);
        }
        return res;
    }

    /**
     * 获取栅格采样直线
     * @param {number} x1 - 采样直线起始像元行号
     * @param {number} y1 - 采样直线起始像元列号
     * @param {number} x2 - 采样直线终止像元行号
     * @param {number} y2 - 采样直线终止像元列号
     */
    get_SampleLine(x1,y1,x2,y2){
        let det_x = x2 - x1;
        let det_y = y2 - y1;

        let res = [];
        if(Math.abs(det_x)<Math.abs(det_y)){
            let num = Math.abs(det_y);
            let dx = det_x / num;
            let dy = det_y / num;
            
            for(let i=0;i<num;i++){
                let x = Math.round(x1 + i*dx);
                let y = y1 + i*dy;
                res.push([x,y]);
            }

        }
        else{
            let num = Math.abs(det_x);
            let dy = det_y / num;
            let dx = det_x / num;
            
            for(let i=0;i<num;i++){
                let y = Math.round(y1 + i*dy);
                let x = x1 + i*dx;
                res.push([x,y]);
            }

        }
        return res;
    }
    /**
     * 
     * @param {number} row - 所选栅格的行号
     * @param {number} column - 所选栅格的列号
     * @param {number} scale - **（可选）** 栅格值等比率缩放
     * @returns {number} 返回（放缩）后的栅格值
     */
    get_CellValue(row,column,scale){
        if(scale == undefined){
            scale = 1;
        }
       
            let res = this.gridset[row][column];
            return res * scale;
    }
    /**
     * 按照栅格行列号取栅格集合的值
     * * 输入格式：
     * * [ [row1,column1],
     * *   [row2,column2],...]
     * @param {array} list  - 栅格列表
     * @param {number} scale - 栅格值修正比率（可将栅格值整体乘此数值）
     * @returns {array} 返回栅格值
     */
    get_CellValueList(list,scale){
        let res = [];
        for(let itm of list){
            let itt = this.get_CellValue(itm[0],itm[1],scale);
            res.push(itt);
        }
        return res;
    }
    
    //静态方法区域
    
    /**
     * 由二维array生成栅格类
     * @param {array} matrix 
     */
    static fromMatrix(matrix){
        let row = matrix[0];
        let res = new grid(matrix.length,row.length);
        res.gridset = matrix;
        return res;
    }

    /**
     * 生成0-1之间的渐变栅格(用于绘制颜色条带预览)
     * @param {number} level 
     * @returns 
     */
    static getramp(level){ 
        let res = [];
        let dx = 1/level;
        for(let i=0;i<5;i++){
            let ttp = [];
            for(let j = 0;j<level;j++){
                ttp.push(dx*j);
            }
            res.push(ttp);
        }
        return res;
    }

     /**
     * 生成0-360之间的渐变栅格(用于绘制颜色条带预览)
     * @param {number} level 
     * @returns 
     */
      static get_aspect_ramp(level){ 
        let res = [];
        let dx = 360/level;
        for(let i=0;i<5;i++){
            let ttp = [];
            for(let j = 0;j<level;j++){
                ttp.push(dx*j);
            }
            res.push(ttp);
        }
        return res;
    }

    /**
     * 生成离散值条带[0,1,2,3,4,...level]
     * @param {number} level 
     * @returns 
     */
     static get_dispersed_ramp(level){ 
        let res = [];
        let dx = 1;
        for(let i=0;i<5;i++){
            let ttp = [];
            for(let j = 0;j<level;j++){
                ttp.push(dx*j);
            }
            res.push(ttp);
        }
        return res;
    }

     /**
     * 解析连续字符串为而为数组 数据按行存储
     * @param {number} row - 行数
     * @param {number} column - 列数
     * @param {String} str - 连续字符串（往往由服务器获得）
     * @returns {array} 返回 [row * column] 形状的二维数组
     */
    static parser1(row,column,str){
        let tdata = str.split(',');
        let rres = [];
        for(let i = 0;i < row;i++){
        let ttp = [];

        for(let j=0;j<column;j++){
            ttp.push(parseFloat(tdata[i*255+j])*1000);
        }
        rres.push(ttp);
        }
        return rres;
  }

}

/**
 * 统计类 获取诸如最大最小值、均值方差等的统计信息 便于后期处理
 */
export class Stastic{
    /**
     * 该模块代码将重新设计 ： --v 1.0.23 later (版本更新完毕后将删除！此段说明)
     * `说明` : 起初写该部分代码只是为了服务于栅格的显示功能。故而某些功能过于耦合，无法灵活地与其他已有框架协同工作。
     * 作者前段时间想要使用`chart.js`来绘制某些统计图。在该过程中，就发现一部分通用绘图数据并没有良好地暴露出来，而是埋在了某些函数的处理细节中。
     * 为了使得这部分功能更加灵活好用，作者决定将这部分代码重新整理。
     * 设计方向：
     * - 提取绘制某些统计图所必须的数据，并抽象出与之对应的数据结构。例如：柱状图、折线图可以使用两个数组来分别存储数据和标注。
     * - 将统计图所必须的数据与统计图的生成拆分。
     * - 一个统计图可以拆分成这样几个部分：数据获取、数据统计、统计结果输出、结果可视化
     * - 最后的一个结果可视化将完全放到~view类中，这样能最大限度的保证在调用其他绘图库与调用自带的绘图库体验上的一致性。
     * > !注意:本轮修改后会有一些接口（*方法*）变更，第二位版本号也会增加一位！请留意变更说明。
     * * 实例化该类 可以从一维数组构造(flatten array)
     * @param {array} data - 一维数组 包含所有需要统计的数字
     */
    constructor(data){
        this.data = data;
        this.ori = data.slice(); //未排序的原始数据
        this.data = this.data.sort((a,b)=>a-b); // 排序
        this.n = this.data.length; // 样本容量
        this.max = this.data[this.data.length-1];// 最大值
        this.min =  this.data[0]; //最小值
        this.mean = this.#mean(); //均值

        this.q1i = Math.round((this.n+1)/4); //上四分位数索引
        this.q3i = Math.round(3*(this.n+1)/4);//下四分位数索引

        this.q1 = this.data[this.q1i];
        this.q3 = this.data[this.q3i];

        this.Standard_Deviation = this.#Standard_Deviation(); // 求标准差
    }
    //数据统计部分方法
    /**
     * 求均值
     * @returns 返回均值
     */
    #mean(){
        let da = this.data;
        let sum =0;
        for(let i=0;i<da.length;i++){
            sum = da[i]+sum;
        }
        return sum/da.length;
    }
    /**
     * 求标准差
     * @returns 返回标准差
     */
    #Standard_Deviation(){ // 标准差
        let da = this.data;
        let mean = this.mean;
        let sum =0;
        for(let i=0;i<da.length;i++){
            sum = Math.pow(da[i] - mean ,2)+ sum ;
        }
        return Math.sqrt(sum/this.n);

    }

    /**
     * 归一化公式 ：(x – μ) / σ 
     * * σ 是标准差  μ 是均值
     * @param {number} value 
     * @returns {number} 返回值 [0,1]
     */
    Z_Score_Normalization(value){
        return (value - this.mean)/this.Standard_Deviation;
    }

    /**
     * 线性归一化 
     * * 公式：(x - min) / (max - min)
     * @param {number} value 
     * @returns {number} 返回值 [0,1]
     */
    Linear_Normalization(value){
        return (value - this.min)/(this.max - this.min);
    }

    /**
   * 线性归一化 (仅针对 **主要区域** 的归一化 **这里指盒须图中的盒中区域** )
   * * 公式：(x - min) / (max - min)
   * @param {number} value 
   * @returns {number} 返回值 [0,1]
   */
     Linear_Normalization_main(value){
      let res =(value - this.q1)/(this.q3 - this.q1);
      if(res>1){return 1;}
      else if(res < 0){return 0;}
      else{
        return res;
      }
    }
    
    /**
     * **创建盒须图对象：**
     * 首先定义MBR 外包络矩形 左上角和右下角
     * 考虑到与其他绘图js库的**兼容性** 在其他函数中我们会
     * - 将求出的、绘制某些统计图所必备的数据单独输出以供那些想要使用其他绘图库的用户使用
     * - 对于那些只想使用自带绘图模块的用户，我们会另写解析函数来根据这些数据创建本库自带的统计图。
     * @param {number} x1 - 用以定位盒须图绘制区域的外包络矩形坐标
     * @param {number} y1 
     * @param {number} x2 
     * @param {number} y2 
     * @param {number} yleve - y轴尺度
     * @param {number} xleve - x轴尺度
     * @returns {JSON} 返回一个描述统计图的json对象
     */
    create_box_whisker_plot(x1,y1,x2,y2,yleve,xleve){
        //留出空间
        let width = Math.abs(x2 - x1);
        let height = Math.abs(y2 - y1)-40;
        let blank = 20;

        let midx = (x1+x2)/2;

        let range = Math.abs(this.max - this.min);
        let stratch = height/range;
        let dx = width/xleve;

        if(yleve === 0){
            yleve = 10;
        }
        
        let dy = height/yleve;
        let dyv = Math.round(range/yleve);

        let yaxi = [];
        let yano = [];

        for(let i=1 ; i < yleve;i++ ){
            let itt =[x1,blank+y2 + dy*i,x1-dx,blank+y2+dy * i];
            let iit = [Math.round(this.min+dyv*i),x1-5*dx,blank+y2+dy * i];
            yaxi.push(itt);
            yano.push(iit);
        }

        let max_line = [midx - 2*dx,(this.max - this.min)*stratch+y2+blank,midx+2*dx,(this.max - this.min)*stratch +y2+blank];
        let min_line = [midx - 2*dx,(this.min- this.min)*stratch+y2+blank,midx+2*dx,(this.min- this.min)*stratch +y2+blank];
        
        let whisker = [];
        //let whiskerano = [];

       
        whisker.push([midx,(this.max - this.min)*stratch+y2+blank,midx,(this.min- this.min)*stratch+y2+blank]);
        whisker.push(max_line);
        whisker.push(min_line);

        yano.push([this.max,midx+2*dx,(this.max - this.min)*stratch +y2+blank]);
        yano.push([this.min,midx+2*dx,(this.min- this.min)*stratch +y2+blank]);


        let box = [midx - 4*dx,(this.q1- this.min)*stratch+y2+blank,midx+4*dx,(this.q3- this.min)*stratch +y2+blank];

        yano.push([this.q1,midx + 4*dx,(this.q1- this.min)*stratch+y2+blank]);
        yano.push([this.q3,midx + 4*dx,(this.q3- this.min)*stratch+y2+blank]);
        

        let box_whisker_plot= {
            //边框
            "MBR" : [x1,y1,x2,y2], 
            "YAXI":yaxi,
            "BOX":box,
            "WHISKER":whisker,
            //文字部分
            "YANO":yano,
        }
        
        return box_whisker_plot;
    }

    /**
     * 绘制步长曲线（折线）
     * @param {number} x1 * MBR_X1
     * @param {number} y1 * MBR_Y1
     * @param {number} x2 * MBR_X2
     * @param {number} y2 * MBR_Y1
     * @param {number} yleve * y轴切分尺度
     * @param {number} xleve * x轴采样尺度 
     * * **注意：xleve控制着步长曲线绘制的详尽程度**
     * * 例如：共计100值的序列，若 xleve **小于100** 则会略化线的细节
     * * 但是当 xleve **大于100** 时，会将曲线挤向图的左边。
     * @returns {array} 得到步长点的列表
     */
    create_step_plot(x1,y1,x2,y2,yleve,xleve){

        let blank = 20;//上下留白宽度
        let width = Math.abs(x2 - x1)-2*blank; //绘制区域宽度
        let height = Math.abs(y2 - y1)-2*blank; //绘制区域扣除留白后的高度

        let y_range = this.max - this.min; // 值区间
        let x_range = this.n; // x 轴区间
        let y_scratch = height/y_range;

        let dyv = Math.round( y_range / yleve );//值变量
        let dxv =  Math.round( x_range / xleve );//值变量

        let dx = width/xleve ; // 绘制x变量
        let dy = height/yleve ;// 绘制y变量

        let points = [];

        for(let i = 0; i < xleve ; i++){
            let pox = blank + dx * i + x1;
            let poy_index = dxv*i;
            let poy = y2+blank + this.ori[poy_index]*y_scratch;

            points.push([pox,poy]);
        }
        return points;
    }

     /**
     * 绘制默认数据坐标框
     * @param {number} x1 * MBR_X1
     * @param {number} y1 * MBR_Y1
     * @param {number} x2 * MBR_X2
     * @param {number} y2 * MBR_Y1
     * @param {number} yleve * y轴切分尺度
     * @param {number} xleve * x轴采样尺度 
     * @returns {JSON} 返回一个表示坐标框的json对象
     * */
    create_coordinate_box(x1,y1,x2,y2,yleve,xleve){

        let blank = 20;//上下留白宽度
        let width = Math.abs(x2 - x1)-2*blank; //绘制区域宽度
        let height = Math.abs(y2 - y1)-2*blank; //绘制区域扣除留白后的高度

        let y_range = this.max - this.min; // 值区间
        let x_range = this.n; // x 轴区间

        let dyv = Math.round( y_range / yleve );//值变量
        let dxv =  Math.round( x_range / xleve );//值变量

        let dx = width/xleve ; // 绘制x变量
        let dy = height/yleve ;// 绘制y变量

        let y_scale = []; // 刻度
        let y_mark = [];

        for(let i=1 ; i < yleve;i++ ){
            let itt = [x1,blank+y2 + dy*i,x1-5,blank+y2+dy * i];
            let iit = [Math.round(this.min+dyv*i),x1-50,blank+y2+dy * i];
            y_scale.push(itt);
            y_mark.push(iit);
        }

        let x_scale = [];
        let x_mark = [];
        let count = 0;

        let itm = [0,blank+x1,y2-25];
        x_mark.push(itm);

        for(let i=0 ; i < xleve;i++ ){

            if(count === 5){
                let itt = [blank+x1+dx*i,y2,blank+x1+dx*i,y2-10];
                // let itm = [Math.round(0+dxv*i),blank+x1+dx*i,y2+10];
                x_scale.push(itt);
                //x_mark.push(itm);
            }
            else if(count === 10){
                let itt = [blank+x1+dx*i,y2,blank+x1+dx*i,y2-15];
                let itm = [Math.round(0+dxv*i),blank+x1+dx*i,y2-25];
                x_scale.push(itt);
                x_mark.push(itm);
                count = 0 ;
            }
            else{
                let itt = [blank+x1+dx*i,y2,blank+x1+dx*i,y2-5];
                x_scale.push(itt);
            }
            count=1+count;
        }
        let res = {
            "MBR" : [x1,y1,x2,y2], //外包络矩形
            "y_scale" : y_scale,
            "y_mark" : y_mark,
            "x_scale" : x_scale,
            "x_mark" : x_mark,
        }
        return res;
    }

   

}