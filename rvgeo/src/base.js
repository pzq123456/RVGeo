import {
    kernel_1,
    kernel_2,
    kernel_arr_6,
    kernel_arr_10,
    kernel_arr_11,
    kernel_6,
} from './kernel.js';

import {Delaunay_triangulation_o} from './delaunay.js'

/**
 * 平面笛卡尔坐标系下
 * IN __Planar Cartesian coordinate system__
 */
 
/**
 * 求解两点直线方程的一般式：ax+by+c=0
 * General equation for solving a two-point linear equation: ax+by+c=0
 * @param {Point} sp - the start point
 * @param {Point} ep - the end point
 * @return {array} a,b,c
 * |/|a|b|c|
 * |--|--|--|--|
 * |index|0|1|2|
 */
function SolveLineForm(sp,ep){

    let m=ep.y-sp.y;
    let n=sp.x-ep.x;
    
    let c = ep.x*sp.y - sp.x*ep.y;

    let reslist=[m,n,c];
    return reslist;
}

/**
 * 判断点是否在直线上 直线方程是一般式： ax + by + c = 0
 * Determine whether the point is on a line : ax + by + c = 0
 * @param {number} a 
 * @param {number} b
 * @param {number} c
 * @param {Point} p 
 * @return {Boolean} 
 * - 返回布尔类型的值 若在点上则为true
 * - Returns a value of Boolean type (true if dotted)
 */
function IsPointonLine(a,b,c,p){
    let n=a*p.x + b*p.y + c;
    if(n===0){return true;}
    else{return false;}
}

/**
 * 求解 ax+by+c=0 直线外一点到该直线的距离 
 * - formula ：distance = |ax+by+c|/sqrt(a^2+b^2)
 * @param {Point} sp - the start point
 * @param {Point} ep - the end point
 * @param {Point} op - the point over the line
 * @return {number} 
 * - 返回点到直线的距离
 * - Return the distance from a point to the straight line(ax+by+c=0 )
 */
 function getPoint2LineDistence(sp,ep,op){
    let fun = SolveLineForm(sp,ep);
    let x = op.x;
    let y = op.y;
    let a=fun[0];
    let b=fun[1];
    let c=fun[2];
    let up = Math.abs(a*x+b*y+c);
    let down = Math.sqrt(a*a+b*b);
    return up/down;
}

/**
 * 求连续三个带坐标点的时针性 (亦可判断三点共线)
 * get the clockwise of three points
 *  原理：
 * *  area = (b.x-a.x) * (c.y-a.y) - (b.y-a.y) * (c.x-a.x) 
 *  * area >0，A-B-C逆时针旋转； counterclockwise
 *  * area <0，A-B-C顺时针旋转； clockwise
 *  * area =0，A-B-C在一条直线上; Collinear
 * @param {Point} a - the first point
 * @param {Point} b - the middle point
 * @param {Point} c - the last point
 * @return {number} - the output list
 * 
 | 逆时针 | 顺时针 | 共线 | 其他 |
  |--|--|--|--|
 | counterclockwise | clockwise | Collinear | other |
 | 1 | 2 | 3 |-1|
 ---
 */
export function getClockwiseFea(a,b,c){ // 单元测试有bug：
    let area = (b.x-a.x) * (c.y-b.y) - (b.y-a.y) * (c.x-b.x) ;
    //(xi - xi-1) * (yi+1 - yi) - (yi - yi-1) * (xi+1 - xi)
    //let area = (b.x-a.x) * (c.y-a.y) - (b.y-a.y) * (c.x-a.x) ;
    //(b.getX()-a.getX()) * (c.getY()-a.getY()) - (b.getY()-a.getY()) * (c.getX()-a.getX());

    if ( area > 0 ) {
        return 1;
    }
    else if (area < 0) {
        return 2;
    }
    else if ( area === 0){
        return 3;
    }
    else {return -1;}
}

/**
 * 点集列表去重算法
 * @param {array} list1
 */
 function dedupPointList_(list1){
    let list = list1.slice();
    //let list = list1.slice();
    let res = [];
    while(list.length!=0){
        let el = list.pop();
        if( list.findIndex((element) => (element.x == el.x)&&(element.y == el.y) ) === -1){
            res.push(el);
        }
        else{
            continue;
        }
    }
    return res;
}

/**
 * 点类型 （x，y） 绑定了一些常用算法
 */
class Point {
    /**
     * Create a point.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    /**
     * Get the x value.
     * @return {number} The x value.
     */
    getX() {
        return this.x;
    }
    /**
     * Get the y value.
     * @return {number} The y value.
     */
    getY() {
        return this.y;
    }
    /**
     * Get the x,y value.
     * @return {Array} [x,y]
     */
    getXY() {
            return [this.x,this.y];
    }
    /**
     * 计算欧氏距离(Euclidean Distance)
     * functionname_()表示对某对象的运算
     * @param {Point} InPoint - 输入点对象
     * @return {number} - 返回两点间的欧氏距离
     */
    getEuclideanDistance_(InPoint) {
        return Math.sqrt(kernel_1(this.x,InPoint.x)+kernel_1(this.y,InPoint.y));
    }
    /**
     * 曼哈顿距离(Manhattan Distance) Chebyshev distance
     * @param {Point} InPoint - 输入点对象
     * @return {number} - 返回两点间的曼哈顿距离
     */
       getManhattanDistance_(InPoint) {
        return kernel_2(this.x,InPoint.x)+kernel_2(this.y,InPoint.y);
    }
    /**
     * 切比雪夫距离(Chebyshev distance) : max(|a-b|...)
     * @param {Point} InPoint - 输入点对象
     * @return {number} - 返回两点间的切比雪夫距离
     */
     getChebyshevDistance_(InPoint) {
        return Math.max(kernel_2(this.x,InPoint.x),kernel_2(this.y,InPoint.y));
    }
    /**
     * 简化闵氏距离(Minkowski Distance) : (｜a-b｜^p+...)^(1/p)
     * @param {Point} InPoint - 输入点对象
     * @param {number} p - 闵氏距离的维度
     * @return {number} - 返回两点间的闵氏距离
     */
    getMinkowskiDistance_(InPoint,p) {
        return Math.pow(
                Math.pow(kernel_2(this.x,InPoint.x),p)+
                Math.pow(kernel_2(this.y,InPoint.y),p),
                Math.pow(p,-1)
                );
            
        }
    /**
     * 计算以该点为开始点与输入点构成向量关于x正半轴构成的夹角 范围0~360
     * functionname_()表示对某对象的运算
     * @param {Point} InPoint - 输入点对象
     * @return {number} - 返回角度
     */
     getAngle_(InPoint) {
        let po1=this.getXY();
        let po2=InPoint.getXY();
        return kernel_arr_6(po1,po2);
    }
    /**
     * 计算该点到某直线（始点，终点）距离
     * @param {Point} sp - 始点
     * @param {Point} ep - 终点
     * @return {number} 本点到这条直线的距离
     */
    getDistance2Line_(sp,ep){
        
        return getPoint2LineDistence(sp,ep,this);
    }
    /**
     * 判断两点是否为同一点
     * @param {Point} op - 输入点
     * @return {boolean} 是则为true 否则为false
     */
    IsSamePoint_(op){
        if(op.x===this.x && op.y === this.y){return true;}
        else {return false;}
    }
    /**
     * 获取直线外一点到该点的垂足（不考虑线段端点）
     * @param {SimpleLine} simpleline - 目标线
     * @return {Point} 返回一个点类型的对象
     */
    getFootPoint_(simpleline){

        let param = simpleline.getMathFrom();
        let A = param[0];
        let B = param[1];
        let C = param[2];

        let x0 = this.x;
        let y0 = this.y;

        let x = (B*B*x0-A*B*y0-A*C)/(A*A+B*B);
        let y = (-A*B*x0+A*A*y0-B*C)/(A*A+B*B);

        let res = new Point(x,y);
        return res;
    }

    /**
     * Convert a string containing two comma-separated numbers into a point.
     * 将由逗号隔开的一对数字解析为点对象。
     * 类（class）通过 static 关键字定义静态方法。不能在类的实例上调用静态方法，而应该通过类本身调用。
     * 这些通常是实用程序方法，例如创建或克隆对象的功能。
     * @param {string} str - The string containing two comma-separated numbers.
     * @return {Point} A Point object.
     */
    static fromString(str) {
        let xy= str.split(',');
        let point=new Point(xy[0], xy[1]);
        return point;
    }


}

/**
 * ### 简单线类 
 * - （直线段）仅由始末点组成 
 * -  也可以认为是向量  
 */
 class SimpleLine {
    /**
     * Create a simpleline（vector）
     * @param {Point} sp - the start point
     * @param {Point} ep - the end point 
     */
     constructor(sp,ep) {
        this.sp = sp;
        this.ep = ep;
        this.pointlist = [sp,ep];
        this.revertimes = 0;
        this.extent = [sp.x,sp.y,ep.x,ep.y];//外包络矩形
    }

    /**
     * Get the pointlist.
     * @return {array} The point list.
     */
     getSimpleLine() {
        return this.pointlist;
    }

    /**
     * Get the startpoint.
     * @return {Point} The start point.
     */
     getStartPoint() {
        return this.sp;
    }

    /**
     * Get the endpoint.
     * @return {Point} The end point.
     */
    getEndPoint() {
        return this.ep;
    }
    
    /**
     * 在不考虑地理意义的情况下求解线到点的距离。
     * - get the (math)distance from the line to point.
     *  -    __math__ means DO NOT CONSIDER THE REAL CONDITION
     * @param {Point} op - 直线外一点
     * @return {number} distance
     */
    getMathDistance2Point_(op) {
        let dis = getPoint2LineDistence(this.sp,this.ep,op);
        return dis;
    }

    /**
     * 获取该线一般式的系数.
     * - get a,b,c of __ax+by+c=0__ .
     * @return {array} 返回一个参数数组
     * |/|a|b|c|
     * |--|--|--|--|
     * |index|0|1|2|
     */
    getMathFrom(){
        let res = SolveLineForm(this.sp,this.ep)
        return res;
    }

    /**
     * 数学意义 ：判断某点是否在线上。（即不考虑线的端点）
     * * (math) : is the in_point on the simple line .
     * * __math__ means __DO NOT CONSIDER THE REAL CONDITION__
     * @param {Point} op - the point .
     * @return {boolean} the result .
     */
    IsPointOnLine_(op){
        let mathform = this.getMathFrom();
        let a = mathform[0];
        let b = mathform[1];
        let c = mathform[2];
        let res = IsPointonLine(a,b,c,op);
        return res;
    }

    /**
     * 调转向量方向 
     * - 注意：并不会影响其本身 
     * - 作用仅体现在 __与其他向量__ 交互上 （如与其他向量求角度）
     */
    Reverse(){
        this.pointlist.reverse();
        let mp = this.sp;
        this.sp = this.ep;
        this.ep = mp ;
        this.revertimes++;
    }

    /**
     * 返回一个调转了方向的向量 （不会影响本身）
     * @return {SimpleLine} 返回SimpleLine类型值
     */
    getReversedLine(){
        let p = new SimpleLine(this.ep,this.sp);
        return p;
    }

    /**
     * 计算到另一向量的夹角 
     * - 实现思路 ： 将两向量的开始点移动到原点 
     * - 分别计算两向量关于x轴正半轴的夹角 
     *  - 然后取相减结果的绝对值
     * @param {SimpleLine} osl  另一个向量 
     * @return {number} 返回角度值 :
     * - 范围： [0,360)
     */
    getAngle2Line_(osl){
        let res = kernel_arr_10(
            this.sp.getXY(),
            this.ep.getXY(),
            osl.sp.getXY(),
            osl.ep.getXY()
        );
        return res;
    }

    /**
     * get the length of the line ｜ 获取线段长度
     * @returns {number} the length of the line
     */
    getLength(){
        return this.sp.getEuclideanDistance_(this.ep);
    }

    /**
     * (用于线集去重)非严格判断（即不考虑方向方向相反）只要端点相同即为真
     * @param {SimpleLine} ol - 需要判断的线
     * @return {boolean} 若是则真
     */
    IsSameLine_(ol){
        if( ((this.sp.IsSamePoint_(ol.sp)) && (this.ep.IsSamePoint_(ol.ep)))||
        ((this.sp.IsSamePoint_(ol.ep)) && (this.ep.IsSamePoint_(ol.sp)))){
            return true;
        }
        else{
            return false;
        }
    }

}


/**
 * 复杂(折线)线类型 由不重复的 顺序点列表构成
 * - （LineString）
 */
class Line {
    /**
     * Create a line
     * @param {array} pointlist - The point list.
     */
     constructor(pointlist) {
        this.pointlist = pointlist;
        this.sp = pointlist[0];
        this.ep = pointlist[pointlist.length-1];
        this.getExtent(); //生成外包络矩形
    }

    /**
     * 延长该线 即向点列末尾追加点 注意 最好不要与原有的点重复
     * @param {Point} point - the new end point
     */
    extendLine(point) {
        this.pointlist.push(point);
        this.ep = point;
        this.getExtent();//更新外包络矩形
    }

    /**
     * Get the pointlist.
     * @return {array} The point list.
     */
     getLine() {
        return this.pointlist;
    }

    /**
     * Get the startpoint.
     * @return {Point} The start point.
     */
     getStartPoint() {
        return this.sp;
    }

    /**
     * Get the endpoint.
     * @return {Point} The end point.
     */
    getEndPoint() {
        return this.ep;
    }

     /**
     * 获取道格拉斯扑克法抽稀后的子集 不改变自身
     * @param {number} thresh - 道格拉斯扑克法的阈值 用于调节抽稀程度 
     * @return {array} 道格拉斯扑克法抽稀后的子集
     */
    getSubSetByDP(thresh){
        let res = Douglas_Peuker(this.pointlist,thresh);
        return res;
    }

    /**
    * * 线一分为二 [sp,mp1,mp2,mp3,op] 
    * @param {number} index - 切分位置的索引 注意切分处的点会被重复两次 也就是说最小单元是两点构成的直线
    * @return {object} 例如从索引为1开始切分{ firstline ;[[sp,mp1],secondline: [mp1,mp2,mp3,op]}
    */
    getTwoSubLineFromInx(index){
        let obj = getTwoLineFromeOne(this.pointlist,index);
        return obj;
   }

   /**
     * 获取该折线的外包络矩形
     */
    getExtent(){
    this.extent = getExtentOfPointSet(this.pointlist);
    }



     
}

/**
 * 散点集 
 */
class PointSet{

    /**
    * Create a pointset
    * @param {array} pointlist - The point list.
    */
    constructor(pointlist) {
        this.pointset = pointlist ;
        this.dedup();// 点集去重
        this.getExtent();//取外包络矩形
    }

    /**
     * Get the pointset
     * @return {array} The pointlist
     */
     getPointSet() {
        let poss = this.pointset.slice();
        return poss;
    }

    /**
    * Get the convexhull of the pointset
    * @return {array} The convexhull
    */
    getConvexHull(){
        let coch = getconvex_hull(this.pointset);
        return coch;
    }
    /**
     * 点集去重 ： 去掉点集中重复的点
     */
    dedup(){
        this.pointset = dedupPointList_(this.pointset);
    }

    /**
     * 获取该点集的外包络矩形
     * @return {array} - return array: [x1,y1,x2,y2]
     * - 注意 ：左上角点(x1,y1)
     * - 右下角点(x2,y2)
     * * (x1,y1)-------|
     * *    |----M--------|
     * *    |-----B-------|
     * *    |------R(x2,y2)
     */
    getExtent(){
        this.extent = getExtentOfPointSet(this.pointset);
        return this.extent;
    }

    /**
     * 由 二维 Array 生成点集类 
     * * arr:[
     * * [column0,column1,column2,column3,...],
     * * ...
     * ]
     * axis_x = 0,1,2,3,4...(define axis_x by index of the array)
     * * **由于是二维画布 需要选定可视化的维度**
     * @param {array} arr - 传入的二维数组
     * @param {number} axis_x - 该数组数据可视化的属性1
     * @param {number} axis_y - 该数组数据可视化的属性2
     * @returns 
     */
     static fromaArray_2D(arr,axis_x,axis_y)
     {
        let poil = [];
        for(let i =0 ;i < arr.length;i++){
            let tp = new Point(arr[i][axis_x],arr[i][axis_y]);
            poil.push(tp);
        }

        let res = new PointSet(poil);
        return res;
    }

}

/**
 * 获取点集的xy方向的MBR(外包络矩形)
 * 思想：获取xy的最值并返回列表
 * - 由于几乎所有的几何图形都是由点集构成 所以该方法可以用到所有类中
 * @param {array} list 
 * @return {array} - 返回的列表
 * [x1,y1,x2,y2]
 * - 注意 ：左上角点(x1,y1)
 * - 右下角点(x2,y2)
 */
function getExtentOfPointSet(list){
    let x_list = list.slice();
    x_list.sort((a,b)=>a.x-b.x);
    let y_list = list.slice();
    y_list.sort((a,b)=>a.y-b.y);
    return [x_list[0].x,y_list[0].y,x_list[x_list.length-1].x,y_list[y_list.length-1].y] ;
}

 
/** 
* 点集凸包算法
* @param {array} pointlist1 - 点集列表
* @return {array} - 构成凸包的点列表
*/
function getconvex_hull(pointlist1){
    //Melkman算法 双向表法
    let pointlist = pointlist1.slice();
    pointlist.sort((a,b)=>a.x - b.x );

    let upper = [];
    upper.push(pointlist[0]);
    upper.push(pointlist[1]);
    for (let i =2; i<pointlist.length;i++){
        upper.push(pointlist[i]);
        while(upper.length>=3 && 
            getClockwiseFea(upper[upper.length-3],upper[upper.length-2],upper[upper.length-1]) == 2){
            upper.splice(upper.length-2,1);
        }
    }

    let lower = [];
    lower.push(pointlist[pointlist.length-1]);
    lower.push(pointlist[pointlist.length-2]);
    for (let i =pointlist.length-3; i>=0;i--){
        upper.push(pointlist[i]);
        while(upper.length>=3 && 
            getClockwiseFea(upper[upper.length-3],upper[upper.length-2],upper[upper.length-1])==2){
            upper.splice(upper.length-2,1);
        }
    }

    lower.pop();
    lower.shift();
    let res = upper.concat(lower);
    return res;

    //Graham扫描法
   
    //辅助函数
    // /**
    //  * 
    //  * @param {Point} p0 
    //  * @param {Point} a 
    //  * @param {Point} b 
    //  * @returns 
    //  */
    //  function angle_sort(p0,a,b){
    //     if(p0.getAngle_(a) - p0.getAngle_(b)===0){
    //         return p0.getEuclideanDistance_(a) - p0.getEuclideanDistance_(b);
    //     }
    //     else {return p0.getAngle_(a) - p0.getAngle_(b);}

    // }
    //  /**
    //  * @param {Point} a 
    //  * @param {Point} b 
    //  * @returns 
    //  */
    //   function y_sort(a,b){
    //     if(a.y - b.y === 0 ){
    //         return a.x - b.x;
    //     }
    //     else {return a.y - b.y;}
    // }
   

    //代码主体

    // let pointlist = pointlist1.slice();
    // let reslist = [];
    // pointlist.sort((a, b) => y_sort(a,b)); // 1. 依照y升降序排列 若y相同则依照x升序排序
    // const p0 = pointlist.shift(); //获取y坐标最小的点
    // const p1 = pointlist.shift(); //获取与x轴夹角最小的点
    // pointlist.sort((a,b)=>angle_sort(p0,a,b)); // 2.依照与p0连线的角度值升序排序 若角度一样则取距离较远点

    // reslist.push(p0);
    // reslist.push(p1); 
    // for(let i = 0 ; i < pointlist.length; i++){
    //     let pl = reslist[reslist.length-1];
    //     let psl = reslist[reslist.length-2];
    //     let pnow = pointlist[i];
    //     if(getClockwiseFea(psl,pl,pnow) === 1){//若逆时针则将点压入栈
    //         reslist.push(pnow);
    //         //continue;
    //     }
    //     else if(getClockwiseFea(psl,pl,pnow) === 3) {//若共线
    //         if(getClockwiseFea(polast,ponow,pointlist[i+1])===3){
    //                                 //let j = i;
    //                                 while(i === pointlist.length-3 ){
    //                                     if(getClockwiseFea(pointlist[i],pointlist[i+1],pointlist[i+2])===3){
    //                                         i++;
    //                                     }
    //                                     else {continue;}
    //                                 }
    //                                 reslist.pop();
    //                                 reslist.push(pointlist[i+2]);
    //                             }
    //     }     
    //     else {
    //         reslist.pop();//若顺时针则中间点弹出
    //         //continue;
    //     }
    // }
    // return reslist;

    // if(pointlist1.length<=3){return pointlist1;}
    // let pointlist=pointlist1.slice();
    // let reslist=[];
    // pointlist.sort((a, b) => y_sort(a,b)); // 1. 依照升降序排列
    // //console.log(pointlist);
    // const p0=pointlist.shift(); // 取第一个点
    // reslist.push(p0);
    // pointlist.sort((a,b)=>angle_sort(p0,a,b)); // 依照与p0连线的角度值升序排序 若角度一样则取距离较远点

    // const ps = pointlist.shift();
    // reslist.push(ps);    
    // for(let i=0;i<pointlist.length;i++){ // bug原因：点在一条直线上
    //         // get the two points on the stack head
    //         let polast=reslist[reslist.length-1];
    //         let poseclast=reslist[reslist.length-2];
    //         let ponow=pointlist[i];
    //         if(getClockwiseFea(poseclast,polast,ponow) === 1){// 若逆时针则将该点压入栈中(共线也要入栈，否则只能追踪出凸多边形)
    //             reslist.push(pointlist[i]);
    //         }
    //         else if (getClockwiseFea(poseclast,polast,ponow)===3){
    //                 if(getClockwiseFea(polast,ponow,pointlist[i+1])===3){
    //                     let j = i;
    //                     while(j === pointlist.length-3 ){
    //                         if(getClockwiseFea(pointlist[j],pointlist[j+1],pointlist[j+2])===3){
    //                             j++;
    //                         }
    //                         else {break;}
    //                     }
    //                     let mmm = [pointlist[j],pointlist[j+1],pointlist[j+2]];
    //                     mmm.sort((a,b)=>p0.getEuclideanDistance_(a)-p0.getEuclideanDistance_(b));
    //                     reslist.pop();
    //                     reslist.push(mmm[2]);
    //                 }
    //         }
    //         else if(getClockwiseFea(poseclast,polast,ponow)===2)
    //         { //否则将栈顶元素推出
    //             reslist.pop();
    //         }
            
    // }

    // reslist.push(pointlist[pointlist.length-1]);
   
    // return reslist;

}

/** 
* 点集 单向Hausdorff 距离算法
* @param {array} a - 点集列表
* @param {array} b - 点集列表
* @return {number} - Hausdorff（a,b）
* 即：对于a点集中的每一点找寻其到b点集中的最小距离 然后在这些距离中取最大值
*/
function getunidirectionalHausdorffDistance(a,b){
    let a1=a;
    let b1=b;
    let a_b=[];
    let mindic=[];
    for( let i=0;i<a1.length;i++){
        let p0=a1[i];
        for (let j=0;j<b1.length;j++){
            let p1=b1[j];
            a_b.push(p0.getEuclideanDistance_(p1));
        }
       // console.log(a_b);
        mindic.push(Math.min(...a_b)) //对于a点集中的每一点找寻其到b点集中的最小距离
        a_b=[];
    }
    return Math.max(...mindic); // 然后在这些距离中取最大值
}

/** 
* 点集 双向Hausdorff 距离算法
* @param {array} a - 点集列表
* @param {array} b - 点集列表
* @return {number} - bidirectionalHausdorff（a,b）
* 即：max(Hausdorff（a,b）,Hausdorff（b,a）)
*/
function getbidirectionalHausdorffDistance(a,b){
    return Math.max(
        getunidirectionalHausdorffDistance(a,b),
        getunidirectionalHausdorffDistance(b,a)
    )
}

/**
 * 线一分为二 [sp,mp1,mp2,mp3,op] 
 * @param {array} line - 要一分为二的线
 * @param {number} index - 切分位置的索引
 * @return {object} 
 * - 例如从索引为1开始切分 
 * - [sp,mp1,mp2,mp3,op] __==>__
 * - { 
 * - firstline : [sp,mp1],
 * - secondline: [mp1,mp2,mp3,op]
 * - }
 */
function getTwoLineFromeOne(line,index){
    
    return {
        firstline:line.slice(0,index+1),
        secondline:line.slice(index,line.length+1)
    }
}

/**
 * 道格拉斯扑克法的递归算子
 * @param {array} line - 输入的点列 [ 起点 , 中间点 , 终点 ]
 * @param {number} n - 阈值
 * @param {array} ouarr - 递归结果存储栈
 */
function Douglas_Peuker_kernel(line,n,ouarr){
    let line1 = line.slice();
    let sp=line1.shift();
    let ep=line1.pop();

    if (line1.length === 0){
        ouarr.push(line);
    }
    else{
        line1.sort((a,b)=>a.getDistance2Line_(sp,ep)-b.getDistance2Line_(sp,ep));// 根据到中间点到该线的距离升序排序

        let midpoint = line1[line1.length-1]; //获取中间的分段点
        let m = line.indexOf(midpoint); 

        if( midpoint.getDistance2Line_(sp,ep)< n){
            ouarr.push([sp,ep]) ;//若最大值小于阈值 则去掉所有中间点
        }
        else {
            let obj=getTwoLineFromeOne(line,m);
            Douglas_Peuker_kernel(obj.firstline,n,ouarr);
            Douglas_Peuker_kernel(obj.secondline,n,ouarr);
        }
    }
   
}
/**
 * 线抽稀算法 道格拉斯扑克法
 * @param {array} line - 输入的点列 [ 起点 , 中间点 , 终点 ]
 * @param {number} n - 阈值
 * @return {array} 返回抽稀后的点列
 */
 function Douglas_Peuker(line,n){
    let ouarr= [];
    Douglas_Peuker_kernel(line,n,ouarr);

    // 数据处理部分 去重
    let resarr=[];
    for (let it of ouarr){
        resarr.push(it[0]);
    }
    resarr.push(ouarr[ouarr.length-1][1]);
    //console.log(ouarr);
    return  resarr;
 }

/**
* 多边形面类 由一串点集构成边界 继承复杂线类 Line
*/
class Polygon extends Line{
    /**
     * 构建多边形类 需要输入边界点集
     * @param {array} pointlist - 构成边界的顺序点集 
     * @param {boolean} Isanticlockwise - 该多边形是否以逆时针标点 （决定了多边形内外区域的判定）
     * @extends Line
     * - 注意：若不是逆时针会首先进行转换
     */
    constructor(pointlist) {
        super(pointlist);
        this.Isanticlockwise = this.#IsAnticlockwise();//= Isanticlockwise; // 标定多边形的时针性 所有处理方法默认为逆时针
        this.vectorlist = this.#vectorization(); // 获取逆时针顺序向量边列表
    }

    /**
     * (private) 向量化 将多边形的边按照逆时针顺序转换为向量（存放在向量列表内）
     * @return {array} 返回依照逆时针生成的边向量列表
     * - 在封闭多边形中边的数目与点相同
     */
    #vectorization(){
        let res = [];
        for(let i=0;i<this.pointlist.length-1;i++){
            let sl = new SimpleLine(this.pointlist[i],this.pointlist[i+1]);
            res.push(sl);
        }
        let sl = new SimpleLine(this.ep,this.sp);
        res.push(sl);
        //console.log(res);
        return res;
    }

    /**
     * 判断输入多边形是否为逆时针多边形
     * @return {boolean}  
     * | 是逆时针|不是逆时针 |
     * |--|--|
     * | true| false|
     */
    #IsAnticlockwise(){
        let res = 0;
        for(let i=0;i<this.pointlist.length-1;i++){
            res += kernel_arr_11(
                this.pointlist[i].getXY(),
                this.pointlist[i+1].getXY()
            );
            res += kernel_arr_11(this.ep.getXY(),this.sp.getXY());
            if(res > 0){
                return true; // 逆时针则返回真
            }
            else{
                return false;
            }
        }
    }
}


/**
 * 表示三角形的类
 * 逆时针构建三角形
 * 逆时针构建三角形在求三角形内角时只需要调转一次边矢量方向
 */
class Triangle {
    /**
     * 构造三角形类 逆时针输入点列
     * @param {Point} po1 - 三角形第一个点
     * @param {Point} po2 - 三角形第二个点
     * @param {Point} po3 - 三角形第三个点
     */
    constructor(po1,po2,po3){

        this.pa = po1;
        this.pb = po2;
        this.pc = po3;

        this.a = new SimpleLine(po2,po3);
        this.b = new SimpleLine(po3,po1);
        this.c = new SimpleLine(po1,po2);
        
        this.area = this.#getArea();
    }

    /**
     * 获取该三角形外接圆的半径
     * @return {number} return the radius of the circle 
     */
    getEXCRadius(){
        let ang_a = this.c.getAngle2Line_(this.b.getReversedLine());
        let sin_ang_a = Math.sin(kernel_6(ang_a));
        return Math.abs(this.a.getLength()/(2*sin_ang_a));

        // let a = this.a.getLength();
        // let b = this.b.getLength();
        // let c = this.c.getLength();
        // let p=(a+b+c)/2;
        // let up = a*b*c;
        // let down = 4*Math.sqrt(p*(p-a)*(p-b)*(p-c));
        // return up/down;

    }

    /**
     * 返回包含三角形所有顶点的列表
     * @returns 返回包含三角形所有顶点的列表
     */
    getTriangle(){
        return [this.pa,this.pb,this.pc];
    }

    /**
     * 获取该三角形的外接圆圆心（点对象）
     * @return {Point} 返回圆心 点对象 
     */
    getEXCCenter(){
        let x1 = this.pa.x;
        let x2 = this.pb.x;
        let x3 = this.pc.x;
        let y1 = this.pa.y;
        let y2 = this.pb.y;
        let y3 = this.pc.y;

        let A1=2*(x2-x1);
        let B1=2*(y2-y1);
        let C1=x2*x2+y2*y2-x1*x1-y1*y1;
        let A2=2*(x3-x2);
        let B2=2*(y3-y2);
        let C2=x3*x3+y3*y3-x2*x2-y2*y2;

        let x=((C1*B2)-(C2*B1))/((A1*B2)-(A2*B1));
        let y=((A1*C2)-(A2*C1))/((A1*B2)-(A2*B1));
        let center = new Point(x,y);
        return center;
    }

    /**
     * 获取该三角形的外接圆对象
     * @return {Circle} 返回一个圆形对象
     */
    getEXCircle(){
        let cir = new Circle(this.getEXCCenter(),this.getEXCRadius());
        return cir;
    }
    /**
     * 获取内切圆圆心（点对象）
     * @returns {Point} 内切圆圆心（点对象）
     */
    getINCcenter(){
        let X1 = this.pa.x;
        let Y1 = this.pa.y;
        let X2 = this.pb.x;
        let Y2 = this.pb.y;
        let X3 = this.pc.x;
        let Y3 = this.pc.y;

        let a = this.a.getLength();
        let b = this.b.getLength();
        let c = this.c.getLength();

        let X = (a*X1+b*X2+c*X3)/(a+b+c);
        let Y = (a*Y1+b*Y2+c*Y3)/(a+b+c);

        let res = new Point(X,Y);
        return res;
    }

    #getArea(){
        // S=√p(p-a)(p-b)(p-c) [p=(a+b+c)/2]
        let a = this.a.getLength();
        let b = this.b.getLength();
        let c = this.c.getLength();
        let p = (a+b+c)/2;

        let s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
        return s;
    }

    getINCRadius(){
        //r=2S/（a+b+c）
        let a = this.a.getLength();
        let b = this.b.getLength();
        let c = this.c.getLength();

        let r = (2*this.area)/(a+b+c);
        //let r = (a+b-c)/2
        return r;
    }

    getINCcircle(){
        let cir = new Circle(this.getINCcenter,this.getINCRadius);
        return cir;
    }

}


class Circle{
    /**
     * 构造圆对象 包括中心点以及半径
     * @param {Point} center - 中心点
     * @param {number} radius - 半径
     */
    constructor(center,radius){
        this.center = center;
        this.radius = radius;
    }

    /**
     * 判断某点是否在圆上 考虑到误差这里会设置一个阈值
     * @param {Point} op - 需要判断相对关系的带你
     * @param {number} thresh - 判断阈值 只有小于该阈值才会判在点上
     * @return {boolean} 返回值为布尔类型变量
     */

    IsPointOnCircle_(op,thresh){
        let dis = this.center.getEuclideanDistance_(op);
        if(Math.abs(dis - this.radius) <= thresh){
            return true;
        }
        else{
            return false;
        }
    }

    /**
     * get the center point 
     * @return {Point} return the center point 
     */
    getCenter(){
        return this.center;
    }

    /**
     * get the radius
     * @return {number} return thd radius
     */
    getRadius(){
        return this.radius;
    }
}

/**
 * delaunay配套函数 构建包含点集合内所有点的超级三角形
 * 为了防止刚好有点落在超级三角形边上 将三角形的下角偏移x、y量
 * 而且要确保三角形的底大于高
 * @param {PointSet} pos - 输入的点集
 * @param {*} dx - 下角横轴偏移量
 * @param {*} dy - 下角纵轴偏移量(dx>dy)
 * @return {Triangle} 返回超级三角形
 * * -------a---------
 * * --- * ---- * ----
 * * --b---------c----
 */
export function del_getSuperTriangle(pos,dx,dy){
    let MBR = pos.extent;
    let x1 = MBR[0];
    let y1 = MBR[1];
    let x2 = MBR[2];
    let y2 = MBR[3];
    let width = x2 - x1;
    let height = y1 - y2;

    let xa = 0;
    let ya = 0;
    let xb = 0;
    let xc = 0;
    let yb = 0;
    let yc = 0;

    if(width/height>1){
         xa = (x1+x2)/2;
         ya = y2 + 2*height;
         xb = x1 + width/2;
         xc = x2 - width/2;
         yb = y2;
         yc = y2;
    }
    else{
        //width = height + dx;
         let dhw = height - width;
         width  = width + 2*dhw; 
         xa = (x1+x2)/2;
         ya = y2 + 2*height;
         xb = x1 + width/2;
         xc = x2 - width/2;
         yb = y2;
         yc = y2;
    }

    let pa = new Point(xa,ya);
    let pb = new Point(xb-dx,yb+dy);
    let pc = new Point(xc+dx,yc+dy);

    let restri = new Triangle(pa,pb,pc);
    return restri;
}

/**
 * 依据 Delaunay 准则 进行三角剖分
 * @param {array} verlist1 - 顶点表（散点集）
 * @return {array} 返回三角形集合列表
 */
export function Delaunay_triangulation(verlist1){
    var triangles = Delaunay_triangulation_o(verlist1);
    let res = [];
    for(let i = triangles.length; i; ) {
        --i; 
        let po1 = new Point(verlist1[triangles[i]][0], verlist1[triangles[i]][1]);
        --i; 
        let po2 = new Point(verlist1[triangles[i]][0],verlist1[triangles[i]][1]);
        --i; 
        let po3 = new Point(verlist1[triangles[i]][0], verlist1[triangles[i]][1]);

        let trii = new Triangle(po1,po2,po3);
        res.push(trii);   
}
   return res;
}

/**
 *  **需要先求狄洛尼三角网的三角形列表** 计算狄洛尼三角网各三角形之间的邻接关系 并返回邻接矩阵
 * @param {array} verlist1 - 顶点表
 * @returns 返回邻接矩阵用以表示三角形之间的邻接关系
 */
export function Tesson_polygon_adj_Matrix(verlist1){
    var triangles = Delaunay_triangulation_o(verlist1);
    let trilist = [];
    //将三角面转换为索引表 加速计算
    for(let i = triangles.length; i; ) {
        let ttp = [];

        --i; 
        let ma = triangles[i];
        let po1 = new Point(verlist1[triangles[i]][0], verlist1[triangles[i]][1]);
        --i; 
        let mb = triangles[i];
        let po2 = new Point(verlist1[triangles[i]][0],verlist1[triangles[i]][1]);
        --i; 
        let mc = triangles[i];
        let po3 = new Point(verlist1[triangles[i]][0], verlist1[triangles[i]][1]);

        ttp = [ma,mb,mc];
        //ttp.sort((a,b)=>a-b);
        
        let trii = new Triangle(po1,po2,po3);
        let cen = trii.getINCcenter();

        ttp.push(cen.x);
        ttp.push(cen.y);
        trilist.push(ttp);

        po1,po2,po3,trii = null ; // 垃圾回收
    }
    //初始化二维数组（用来存储面之间的联通关系）
    let matrix = [];
    for(let i = 0; i < trilist.length ;i++){
        let tm = [];
        tm.length = trilist.length ;
        tm.fill(0);
        matrix.push(tm);
        }
    for(let i = 0; i < trilist.length ;i++){

        let a = trilist[i][0];
        let b = trilist[i][1];
        let c = trilist[i][2];
        
        let rei1 = [a,b];
        let rei2 = [b,c];
        let rei3 = [a,c];

        for(let j = 0; j < trilist.length ;j++){
            if(i === j) {continue;}
            else{
                    let rej1 = [trilist[j][0],trilist[j][1]];
                    let rej2 = [trilist[j][1],trilist[j][2]];
                    let rej3 = [trilist[j][0],trilist[j][2]];
                // if( 
                // ((rei1[0] === rej1[0])&&(rei1[1] === rej1[1]))|| ((rei1[0] === rej2[0])&&(rei1[1] === rej2[1])) || ((rei1[0] === rej3[0])&&(rei1[1] === rej3[1])) ||
                // ((rei2[0] === rej1[0])&&(rei2[1] === rej1[1]))|| ((rei2[0] === rej2[0])&&(rei2[1] === rej2[1])) || ((rei2[0] === rej3[0])&&(rei2[1] === rej3[1])) ||
                // ((rei3[0] === rej1[0])&&(rei3[1] === rej1[1]))|| ((rei3[0] === rej2[0])&&(rei3[1] === rej2[1])) || ((rei3[0] === rej3[0])&&(rei3[1] === rej3[1])) ||

                // ((rei1[0] === rej1[1])&&(rei1[1] === rej1[0]))|| ((rei1[0] === rej2[1])&&(rei1[1] === rej2[0])) || ((rei1[0] === rej3[1])&&(rei1[1] === rej3[0])) ||
                // ((rei2[0] === rej1[1])&&(rei2[1] === rej1[0]))|| ((rei2[0] === rej2[1])&&(rei2[1] === rej2[0])) || ((rei2[0] === rej3[1])&&(rei2[1] === rej3[0])) ||
                // ((rei3[0] === rej1[1])&&(rei3[1] === rej1[0]))|| ((rei3[0] === rej2[1])&&(rei3[1] === rej2[0])) || ((rei3[0] === rej3[1])&&(rei3[1] === rej3[0])) )
                // {   
                //     matrix[i][j] = 1;
                // }

                if(
                    ((rei1[0] === rej1[0])&&(rei1[1] === rej1[1]))|| ((rei1[0] === rej2[0])&&(rei1[1] === rej2[1])) || ((rei1[0] === rej3[0])&&(rei1[1] === rej3[1])) ||
                    ((rei1[0] === rej1[1])&&(rei1[1] === rej1[0]))|| ((rei1[0] === rej2[1])&&(rei1[1] === rej2[0])) || ((rei1[0] === rej3[1])&&(rei1[1] === rej3[0])) 
                )
                {
                    matrix[i][j] = 1;
                }

                else if(
                    ((rei2[0] === rej1[0])&&(rei2[1] === rej1[1]))|| ((rei2[0] === rej2[0])&&(rei2[1] === rej2[1])) || ((rei2[0] === rej3[0])&&(rei2[1] === rej3[1])) ||
                    ((rei2[0] === rej1[1])&&(rei2[1] === rej1[0]))|| ((rei2[0] === rej2[1])&&(rei2[1] === rej2[0])) || ((rei2[0] === rej3[1])&&(rei2[1] === rej3[0]))
                )
                {
                    matrix[i][j] = 2;
                }
                else if(
                    ((rei3[0] === rej1[0])&&(rei3[1] === rej1[1]))|| ((rei3[0] === rej2[0])&&(rei3[1] === rej2[1])) || ((rei3[0] === rej3[0])&&(rei3[1] === rej3[1])) ||
                    ((rei3[0] === rej1[1])&&(rei3[1] === rej1[0]))|| ((rei3[0] === rej2[1])&&(rei3[1] === rej2[0])) || ((rei3[0] === rej3[1])&&(rei3[1] === rej3[0]))
                )
                {
                    matrix[i][j] = 3;
                }

            }
        }       
    }
    return matrix;
}



 


export{ Point,Line,SimpleLine,PointSet,Polygon,Circle,Triangle }





