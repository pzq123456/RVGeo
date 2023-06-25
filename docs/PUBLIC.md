# A Brief Tutorial for Experiment of Spatial Analysis 
> - Pan 6.19 `14:00`
> - 本文主要介绍一下个人对空间分析实习的一些想法，**水平有限**。若有错误，欢迎批评指正。
> - 在 `GitHub`上修改 [本文档](https://github.com/pzq123456/RVGeo/tree/main/docs) 。拉取、提交 `Pull Request` 即可。本教程不定期更新，若要获取最新版本也请读者访问上述链接。
> - 以下 JavaScript 简称 JS ， 该语言易于理解，可以很容易地转换成其他语言的代码。若读者对 JS 不了解可以参考 MDN 的 [这篇教程](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
> - 若觉得本教程有用，欢迎为这个仓库点赞。

## [算法自查表](/docs/README.md)

## 项目结构方面的建议
具体算法可以首先整合到一个单独的核心算法包（库）中，交互式界面可以在此基础之上构建。在包的编写过程中，注意将相似功能的代码放到一个文件（文件夹）下，并整理好接口以方便调用。例如：
```
/YourApp             |      /你的项目
    /core            |          /核心算法库
        /Index       |              /接口
        /Base        |              /基础类
        /Vector      |              /矢量
        /Raster      |              /栅格
        /Utils       |              /通用工具
        /Renderer    |              /渲染
    /UI              |          /用户交互界面
        /Canvas      |              /画板
        /Brushes     |              /画刷
        /Actions     |              /对话框
        /Utils       |              /通用工具
    /Docs            |          /文档
    /Others          |          /其他
```
> 建议在开始写本次实习的代码之前，先将去年的代码整理一下，按照一定的逻辑组织起来。

- `Core/Base/` :
核心算法包中，可以首先编写底层的类（点线等），并将一些常用的算法写进去（计算距离、求交等）。这样，我们后续的算法实现就有了基础的对象。交互式绘制和分析时，我们本质上就是在**操作这些对象并不断触发渲染**。这样设计还有一个好处，我们可以依照这些基础类的属性值设计对对应的数据库表，为后续的功能拓展做准备。例如，画板内容的持久化存储，我们在绘制完后可以导出文件，下一次就只需要读取该文件并初始化有关的类。
> 建议将数据和具体的显示（渲染）分开，几何数据和统计数据分开。
-  `Core/Renderer/` : 
该类负责将我们的数据画出来，在浏览器中就是调用 2D Canvas 的 Context 接口。可以以类为单位封装，这样只需要几行代码就可以渲染。比如说：
> 以下代码仅仅介绍思路，不可以实际运行
```js
// base.js
class MyPointClass{
    // ...
}

// renderer.js
class brush{
    // 如果不想每次都输入ctx 可以在初始化里就注册 ctx
    // 初始化也可以设置画刷的颜色、宽度等
    // ...
    DrawPoint(ctx,point,args){
        // 该方法负责调用  2D Canvas 的 Context 接口将 point 绘制到画板上
    }


    ClaerExtend(ctx,GeometryElemt){
        let rect = GeometryElement.getExtent(); // 该方法返回一个矩形对象
            // 在将数据绘制到画板上之后，在下一次绘制之前需要清空画布，清空一整块画布其实有些浪费

        ctx.Clear(rect);// 我们可以只清空对应图形的外包络矩形区域
    }
}

// 我们已经有了一个点的列表
let p1 = new MyPointClass(0,0);
let p2 = new MyPointClass(0,0);
let p3 = new MyPointClass(0,0);
const Arr = [p1,p2,p3];

// 渲染这个点集就可以
for(let i = 0; i < 3; i++){
    brush.DrawPoint(ctx,Arr[i])
}
```
## 一些矢量算法的思路
### 缓冲区（点、线、面）的生成
- 点的缓冲区： 就是以该点为圆心，缓冲范围生成一个圆，并绘制出来。由于我已经编写了基础圆类 [Circle](https://github.com/pzq123456/RVGeo/blob/55ea4006b491249c3644f9843f776c14cf7c80e5/src/base.js#L1114)，所以直接生成即可。[点的缓冲区生成算法](https://github.com/pzq123456/RVGeo/blob/55ea4006b491249c3644f9843f776c14cf7c80e5/src/base.js#L153)
  ```js
      /**
       * 获取点的缓冲区（圆）
       * @param {number} distance - 缓冲区半径
       * @return {Circle} - 返回缓冲区对象（圆）
      */
      getBuffer(distance){
          return new Circle(this,distance);
      }
  ```
- 线的缓冲区： 对于一条折线，它的缓冲区是一个多边形 [Polygon](https://github.com/pzq123456/RVGeo/blob/55ea4006b491249c3644f9843f776c14cf7c80e5/src/base.js#L912)。相较于点，折线的缓冲区复杂一些，难点在于线的拐点不好处理，我采用的是角平分线法（通过计算线拐点处的角平分线方向，然后延伸指定的距离）。该方法比较考验编程基础，我首先编写了以下工具函数：
  - 一些工具函数：
  ```js
    // 计算两点间的法向量
    const getNormalVector = (p1,p2)=>{
        let x = p2.x - p1.x;
        let y = p2.y - p1.y;
        let len = Math.sqrt(x*x + y*y);
        let nx = -y/len;
        let ny = x/len;
        return {x:nx,y:ny};
    }
    // 计算将矢量延长并返回延长后的终点
    const getExtendedPoint = (p1,p2,distance)=>{
        let x = p2.x - p1.x;
        let y = p2.y - p1.y;
        let len = Math.sqrt(x*x + y*y);
        let nx = x/len;
        let ny = y/len;
        let ex = p2.x + nx*distance;
        let ey = p2.y + ny*distance;
        let ep = new Point(ex,ey);
        return ep;
    }
    // 获取两向量角平分线向量延伸后的终点
    const getBisectorPoint = (p1,p2,p3,p4,distance)=>{
        let v1 = {x:p2.x-p1.x,y:p2.y-p1.y};
        let v2 = {x:p4.x-p3.x,y:p4.y-p3.y};
        let len1 = Math.sqrt(v1.x*v1.x + v1.y*v1.y);
        let len2 = Math.sqrt(v2.x*v2.x + v2.y*v2.y);
        let cos = (v1.x*v2.x + v1.y*v2.y)/(len1*len2);
        let angle = Math.acos(cos);
        let nv1 = getNormalVector(p1,p2);
        let nv2 = getNormalVector(p3,p4);
        let nv = {x:nv1.x+nv2.x,y:nv1.y+nv2.y};
        let len = Math.sqrt(nv.x*nv.x + nv.y*nv.y);
        let nx = nv.x/len;
        let ny = nv.y/len;
        let ex = p2.x + nx*distance;
        let ey = p2.y + ny*distance;
        let ep = new Point(ex,ey);
        return ep;
    }
  ```
  - 然后是具体缓冲区多边形生成：
  ```js
      /**
     * 获得该折线的缓冲区
     * - 缓冲区为一个多边形
     * @param {*} distance - 缓冲区距离
     * @return {Polygon} 返回缓冲区
     */
    getBuffer(distance){
        // 按顺序遍历点集，计算相邻两线的角平分线向量延长后的终点
        let BufferPointSet = [];
        let pointlist = this.pointlist;
        let len = pointlist.length;
        // 取相邻 三点 [p1,p2,p3]
        // 相邻两线 [p1, p2]  [p2, p3]
        // 计算两线的角平分线向量延长后的终点
        for(let i=0;i<len-2;i++){
            let p1 = pointlist[i];
            let p2 = pointlist[i+1];
            let p3 = pointlist[i+2];
            // 对于第一个点和最后一个点，需要特殊处理
            // 第一个点需要首先向第一个向量的反方向平移距离distance
            if(i==0){
                let endp = getExtendedPoint(p2,p1,distance*2);
                BufferPointSet.push(endp);

                let nv = getNormalVector(p1,p2);
                let p3 = new Point(p1.x+nv.x*distance,p1.y+nv.y*distance);
                BufferPointSet.push(p3);
            }
            let ep = getBisectorPoint(p1,p2,p2,p3,distance);
            BufferPointSet.push(ep);

            if(i==len-3){
                let nv = getNormalVector(p2,p3);
                let p4 = new Point(p3.x+nv.x*distance,p3.y+nv.y*distance);
                BufferPointSet.push(p4);
            }
          }
        // 反向遍历生成另一边的点
        // 生成缓冲区多边形
        let polygon = new Polygon(BufferPointSet);
        return polygon;
      }
  ```
- 面的缓冲区：面的缓冲区也是多边形，并且对于简单的凸多边形面，只需要按顺序沿着相邻两边的角平分线延长指定的距离即可。（该部分代码略）


### 两点间的距离量测
- 首先编写一些工具函数
  ```js
  /**
   * kernel_1 : (a-b)^2 
   * @param {number} a - a
   * @param {number} b - b 
   * @return {number} The result value.
   */
  function kernel_1(a,b){
      return Math.pow((a-b),2);
  }

  /**
   * kernel_2 : |a-b| 
   * @param {number} a - a
   * @param {number} b - b 
   * @return {number} The result value.
   */
  function kernel_2(a,b){
      return Math.abs((a-b));
  }
  ```
- 然后根据公式计算两点间的距离

  ```js
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
  ```

### 点到线的距离量测（仅欧氏距离）
```js
/**
 * 求解 ax+by+c=0 直线外一点到该直线的距离 
 * - formula ：distance = |ax+by+c|/sqrt(a^2+b^2)
 * @param {Point} sp - the start point
 * @param {Point} ep - the end point
 * @param {Point} op - the point over the line
 * @return {number} 
 * - 返回点到直线的距离
 * - Return the distance from a point to the straight line( ax+by+c=0 )
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
```
### 道格拉斯扑克法（距离阈值法）
- 算法实现
```js
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
```
- 算法封装（封装在 Line 类中）
```js
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
```
### 离散点集的凸包算法
- 首先编写一些工具函数
```js
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
```
- 算法实现
```js
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
}
```


## 一些栅格算法的思路（ 基于 DEM ）
> - 矢量部分、分型部分以及正态云部分的算法相对好实现，去年很多小组都已经实现的很好了，这里就不再赘述。当然，也可以参考我们的代码及文档（不全）。限于个人时间及精力，我无法一一整理。

相较于矢量方向，栅格方向的算法实现起来会稍微复杂一些。并且，这一块的资料非常稀少，老师提供的课件也是英文的，我想这一块是值得仔细探究的。我在这里列出一些我个人的想法，希望能够给大家一些启发。

### 栅格数据的等高线生成
> 参考代码： [V_get_Contour](https://github.com/pzq123456/RVGeo/blob/2dc5aa33817d74bfcd4be5683550d4caa5cbd8d5/src/grid.js#L343)
> - 参考定义：https://en.wikipedia.org/wiki/Marching_squares 
> - 该部分代码仍存在一定的问题（无法应用到复杂栅格，等高线开闭异常）
- 要点
  - 这是一个结合了
    - 栅格数据（源数据）
    - 矢量数据（等高线，目标数据）
    - 为了划分等高线值范围还需要获取栅格值的统计数据（最大最小值）
    - 为了显示效果还需要进行线抽稀（道格拉斯扑克法）
  - 首先需要获取栅格在画布中的位置（MBR），然后在此基础之上计算每个栅格的中心点
- 思路1（废弃）
  - 首先对对栅格进行分类，将连续的符合要求的栅格放在一个集合中
  - 然后获取每个集合的边界
  - 将这些边界点按照时针方向排序
  - 并根据起止点之间的距离判断是否闭合该段等高线
  - 最后将边界点集转换为点集
- 思路2（目前采用该方法实现，但是对于正负地形的处理仍存在问题，无法处理复杂情况）
  - > 注：  - 该方法虽然效果不好，但是思路比较直接，对于编程联系还是有一定的帮助的
  - > - 该算法与 marching squares 的第一步极其相似，可以说本质上还是相通的。
  - 在已经获得所有同一高度的等高线上点后，还需要对这些线进行如下处理以达到理想效果：
```
    整理步骤一 按逆时针排序 （与求点集凸包相似）
    整理步骤二 截断
      contour [[[x1,y1],[x2,y2],...],...] 表示的栅格行列号且与 ValueList 一一对应
      但是 contour 中有一些线需要截断,不是同一条线
        例如： [[196, 4], [197, 5], [198, 6], [199, 7], [1, 199],[9, 198], [8, 198], [7, 197], [6, 197]]
        就需要截断为两条线： [[196, 4], [197, 5], [198, 6], [199, 7]] 和 [[1, 199],[9, 198], [8, 198], [7, 197], [6, 197]]
        但是这两条线的值是一样的，所以需要将 ValueList 也要在对应位置上添加一个值
        例如： [1,2,3,4,5,6,7,8,9] -> [1,2,3,4,5,6,6,7,8,9] (第六个位置添加一个值)
    整理步骤三 对于起点与终点相邻的线，需要将起点与终点相连
      contour [[[x1,y1],[x2,y2],...],...] 表示的栅格行列号且与 ValueList 一一对应
      [[92, 99], [92, 98], [92, 97], [92, 96], [93, 95], [94, 94], [95, 93], [96, 92], [97, 93], [98, 93], [92, 100]]
      起点与终点相邻，需要将起点与终点相连
      [[92, 99], [92, 98], [92, 97], [92, 96], [93, 95], [94, 94], [95, 93], [96, 92], [97, 93], [98, 93], [92, 100], [92, 99]]
```
- 该算法的总结与反思：
  - 在面对复杂数据的处理时，即使是传统的结构化处理函数也需要通过调参等手段去达到最好的运行效果。调参过程本质上就是一个磨合各个结构化过程的过程。就拿本函数来说，粗略地讲，本函数涉及：栅格数据的处理，矢量数据的生成，曲线抽稀（道格拉斯）。可以说，这是一个“复杂”的函数了。这些函数都有自己的参数，怎么样获得这些参数的最优组合？这个问题的答案无法通过任何理论得到，只有自己去动手调参数。
  - “经验之谈”：在判断在哪里需要断开重新生成一条直线的过程中，两点之间到底距离多少才算两根直线？这个阈值就需要运用个人经验去把握。例如，可以写一个统计程序，把那些少数几个异常值标定为直线的断裂点。但是，这样算法的时间复杂度就太高了。也可以手动设置一个阈值，像道格拉斯扑克法那样，但是这个阈值到底需要多大呢？到底是计算矢量图层的实数距离还是计算栅格图层的整数距离？经过观察，我发现**栅格中行列号之差均小于二即可判定这两点相邻**。这样，我就通过这个小小经验优化了代码效果。


#### 正解 (marching squares) 方法:
> - In computer graphics, [marching squares](https://en.wikipedia.org/wiki/Marching_squares) is an algorithm that generates contours for a two-dimensional scalar field (rectangular array of individual numerical values). A similar method can be used to contour 2D triangle meshes.



- 算法步骤
  - 对栅格数据进行阈值处理，将其转换为二值图像（也就是“淹没”操作）：
    - 1 代表高于阈值的区域
    - 0 代表低于阈值的区域

每一个 2x2 的像素块组成一个等高线单元，所以整个图像由这些单元格组成（如下图中绿色部分所示）。注意，这个等高线网格在每个方向上都比原始的 2D 场小一个单元格。

- 对于每个等高线单元格：

  - 在每个单元格的角落组成 4 位二进制索引：按顺时针方向绕单元格走，将位附加到索引上，使用按位或和左移，从最左边的最高有效位到最左边的最低有效位。
  - 生成的 4 位索引可以在 0-15 范围内有 16 个可能的值。

![marching squares](./imgs/contour.png) Marching squares algorithm 算法简图

> - 该算法使用了两个栅格，等高线栅格比原栅格小一圈刚好可以避免边界问题（例如上一种方法会够不到边界）
> - 并且该算法从单个栅格的角度考虑问题，可以很容易实现并行计算提高效率
> - 该算法实现难度较大，暂时没有实现。我会参照该算法的思路进一步优化思路二的代码。

### 累积表面 (Accumulation Surfaces)
> 参考链接： 
> - [GeoWorld, December 1997, pg. 28](http://www.innovativegis.com/basis/MapAnalysis/Topic5/Topic5.htm)

![splash](./imgs/splash.gif)

> 插图:
> - 注意图中的数字： 平地上至最远处的距离（穿过湖面的距离）
> - 一个栅格单位代表 100 米，以下数字若不加单位都代表 栅格单位 。
> - a. 是从单个点出发形成的累积表面的三维视图。曲面上的最低点值为 0，表示它距离起点 “0 栅格单位”。最远的位置位于右上角，距离为:
>   - 60 个网格 * 100 米/网格 = 6000 米
> - b. 将绝对障碍定为无限远。它将最远的可到达位置处的栅格值设为 69 ，表示由于绕湖而行使得距离远了 900 米。
> - c. 假设人在冰上走得慢 5 倍。绕湖一周，它仍然距离对面的角落6900米。然而，如果你小心翼翼地跋涉到湖心，就相当于在开阔的土地上跋涉8300米。

#### 累积表面生成 (“splash” algorithm)
> 代码实现参考： [splash_AccmulationSerface](https://github.com/pzq123456/RVGeo/blob/f3e97611b77540aa5cbe282eb7c947f3f5d0e6cb/src/grid.js#LL272C50-L272C50)
- 要点
    > 注： 参考资料中没有给出累积表面生成的具体算法，只是阐述累积表面的本质及性质。以下内容为原始资料的简略翻译。
  - 累积表面是一种类似于 DEM 的模型，某一处栅格内存储的值是到（系列）起始点的（最短）直线距离。参考资料中提到，我们可以模仿涟漪的扩散去生成累积表面。具体到栅格 GIS 中，我们假定波的宽度是一个栅格，而与圆形涟漪的等价物就是同时向八个方向传播。
  - 当然，起始点也可以是多个。当两个涟漪的波前相遇时，波的传播停止，并在接触点处记录距各自起点相同距离的距离值。不规则连续物体也可以按上述方法生成累积表面。上述操作的最终结果是，处处都存储着距最近起始点距离的栅格（原文中是 map ，意指映射或函数，输入为栅格行列号，输出为距最近起始点距离）。
  - 八个方向，每一步的距离都是相等的。因此，累积表面揭示了每一个栅格位置的优化方向。

- 思路
    ```mermaid
    graph TD
    A[起始点] --> B[将起始点放入队列]
    B --> C[当队列不为空时]
    C --> D[取出队列中的一个点]
    D --> E[对这个点的八个方向进行判断]
    E --> F{是否越界}
    F --> |是| G[跳过]
    F --> |否| H{是否已经访问过}
    H --> |是| I[跳过]
    H --> |否| J[标记为已访问]
    J --> K[计算距离]
    K --> L{是否是障碍物}
    L --> |是| M[跳过]
    L --> |否| N[更新距离]
    N --> O[将这个点放入队列]
    O --> C
    C --> P[返回累积表面]
    ```

  - 现在我们只考虑单一点的累积表面生成问题。这是典型的广度优先遍历，可以使用递归方法，也可以选择借助于队列来实现（本质上一样）。
  - 具体实现可以参考力扣上的这道题：[733. 图像渲染](https://leetcode.cn/problems/flood-fill/) 只不过它是四个方向。
  - 借助于队列的广度优先遍历的思路：
    ```
        我们设置一个队列，先把初始点添加进去
        规定每次从队列取出一个坐标
        对这个坐标染色，并且把这个坐标的邻居（符合要求且不重复的好邻居），放到队列中
        当这个队列为空的时候，说明染色完成
    ```
    因为队列每次取出的是最后的，而每次添加的是放在最前面，所以可以想象到，每次先处理的都是层级最少的，最接近初始点的，然后慢慢扩大，这样就实现了 广度优先搜索

- 一些说明：
  - 原始资料中认为仅仅使用八连通域就可以生成累积表面（其实这只能生成同心正方形），但是实际想要实现类似涟漪的扩散效果需要进行圆的光栅化过程，我们这里简化了，仅使用一个八边形连通域来加速计算。
  - 并且多点累积表面及连续起点的累积表面生成需要进一步设计（暂未实现）

> - 在 JS 中实现栈及队列的方式：JS 中的这两种数据结构都可以使用 Array 来实现。
>   ```js
>   
>   var stack = []; // 栈
>   stack.push(2); // stack is now [2]
>   stack.push(5); // stack is now [2, 5]
>   var i = stack.pop(); // stack is now [2]
>   alert(i); // displays 5
>   
>   var queue = []; // 队列
>   queue.push(2); // queue is now [2]
>   queue.push(5); // queue is now [2, 5]
>   var i = queue.shift(); // queue is now [5]
>   alert(i); // displays 2
>   
>   ```
> - JS 中的无穷大 [Infinity](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Infinity) ， 这是一个全局变量，是 JS 中允许的最大整数，它的倒数就是 0 。
>   ```js
>   const maxNumber = Math.pow(10, 1000); // Max positive number
>   if (maxNumber === Infinity) {
>     console.log('Let\'s call it Infinity!');
>     // Expected output: "Let's call it Infinity!"
>   }
>   console.log(1 / maxNumber);
>   // Expected output: 0
>   ```


#### 累积表面的应用
> https://www.youtube.com/watch?v=_KlRRowXv7k

### DEM 表面积
> - https://leetcode.cn/problems/surface-area-of-3d-shapes/
> - 该算法包括底面积及侧面积。实际计算时需要去除底面积。

参照上述题目，我们可以通过计算正方体的表面积来近似得计算 DEM 的表面积。


### 栅格水流模拟(Flow Modeling)
> 参考资料
> - 英文资料，一些专有名词翻译未必准确
> - https://www.youtube.com/watch?v=_KlRRowXv7k&t=143s
栅格水流模拟指的是根据栅格数据所表示的地形特征（坡向），模拟水流累积所产生的效果，以达到提取水系栅格的目的。以下资料及思路均来自上述视频链接。

#### 流水物理模拟之水流方向栅格
> 该算法代表某一栅格处水流的可能流向
- 在进行累积水流栅格统计之前，首先需要计算出当前栅格的水流方向。在这里，我们为八个方向编码为:（0代表平地，无流向）
    ```
        |32|64|128|
        |16| 0| 1 | 
        |8 | 4| 2 |
    ```
- 算法思路: 
  - 为了方便表述，我们对方向及对应方向栅格增量编码
  - ```js
    let directionCode = [0,1,2,4,8,16,32,64,128]; // 0 带表无流向 1-128 代表8个方向
    let direction = [[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1],[0,1],[1,1]]; // 对应方向栅格步长增量
    ```
  - 遍历栅格中所有的格网，对每一个格网进行如下操作：
    - 与周围八领域的栅格值求坡度（对于超出栅格范围的格网跳过，斜对角线的距离需要乘 1.414）
    - 四领域情况
    - $$ Slope = \frac{V_{to} - V_{from}}{ RealDistance} $$ 
    - 对角线情况
    - $$ Slope = \frac{V_{to} - V_{from}}{ RealDistance*1.414} $$
    - 找到最大负值的栅格并使用栅格与中心栅格的方向作为该栅格处的流向
-
- 算法实现:
```js
    /**
     * 计算当前地形的模拟水流流向栅格
     * - 该方法不需要 padding 操作，返回值与原始栅格大小相同
     * @param {*} RealDistance - 当前栅格代表的真实距离（默认为1）
     * @returns {Array} 返回一个二维数组，代表每一个栅格的流向
     */
    getFlowDirection(RealDistance=1){
        let directionCode = [0,1,2,4,8,16,32,64,128]; // 0 带表无流向 1-128 代表8个方向
        let direction = [[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1],[0,1],[1,1]];
        let res = [];
        for(let i = 0 ; i < this.row ; i++){
            let ttp = [];
            for(let j = 0 ; j < this.column ; j++){
                let max = 0;
                let maxIndex = 0;
                for(let k = 0 ; k < 8 ; k++){
                    let nr = i + direction[k][0];
                    let nc = j + direction[k][1];
                    let nv = 0;
                    if(nr >= 0 && nr < this.row && nc >= 0 && nc < this.column){
                        nv = this.gridset[nr][nc];
                    }
                    if(nv > max){
                        max = nv;
                        maxIndex = k;
                    }
                }
                let resValue = directionCode[maxIndex];
                ttp.push(resValue);
            }
            res.push(ttp);
        }
        console.log(res);
        return res;
    }
```
#### 流水物理模拟之水流累积栅格（也可以基于此设定一定的阈值来提取山谷线山脊线）
- 该算法通过递归地寻找当前栅格的下一个流向栅格，直到找到流向栅格为 0 的栅格，然后将当前栅格的值加一，直到所有栅格都被访问过。
- 算法实现
```js
    /**
     * 计算当前地形的模拟水流累积量栅格
     * @param {number} RealDistance - 当前栅格代表的真实距离（默认为1）
     * - 该方法不需要 padding 操作，返回值与原始栅格大小相同
     * @returns {Array} 返回一个二维数组，代表每一个栅格的累积量
     */
    getAccumulationFlow(RealDistance){
        // let directionCode = [1,2,4,8,16,32,64,128]; // 0 带表无流向 1-128 代表8个方向
        // let direction = [[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1],[0,1],[1,1]];// 8个方向
        // let directuionCodeReverse = [128,64,32,16,8,4,2,1]; // 周围栅格的流向（按照direction找到周围，若周围栅格满足该流向，则目标栅格的累积量+1）
        // 1. 计算流向栅格
        let flowDirection = this.getFlowDirection(RealDistance);
        // 2. 计算累积流量栅格，深度优先搜索
        let res = this.#creataGridSet(this.row,this.column,0);
        for(let i = 0 ; i < this.row ; i++){
            for(let j = 0 ; j < this.column ; j++){
                let memo = {};
                let rest = AccumateFlow(i,j,flowDirection,this.row,this.column,memo);
                res[i][j] = rest;
            }
        }
        return res;
        /**
         * 深度优先搜索,计算当前栅格的累积量
         * @param {*} i - 当前栅格的行号
         * @param {*} j - 当前栅格的列号
         * @param {*} flowDirection - 当前栅格的流向
         * @param {*} memo 
         * @returns 
         */
        function AccumateFlow(i,j,flowDirection,row,col,memo={}){
            let direction = [[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1],[0,1],[1,1]];// 8个方向
            let directuionCodeReverse = [128,64,32,16,8,4,2,1]; // 周围栅格的流向（按照direction找到周围，若周围栅格满足该流向，则目标栅格的累积量+1）
            // 首先统计当前栅格的累积量
            let res = 0;
            for(let k = 0 ; k < 8 ; k++){
                let nr = i + direction[k][0];
                let nc = j + direction[k][1];
                if(nr >= 0 && nr < row && nc >= 0 && nc < col){
                    if(flowDirection[nr][nc] == directuionCodeReverse[k]){
                        res += 1;
                    }
                }
            }
            // 然后递归计算周围栅格的累积量
            for(let k = 0 ; k < 8 ; k++){
                let nr = i + direction[k][0];
                let nc = j + direction[k][1];
                if(nr >= 0 && nr < row && nc >= 0 && nc < col){
                    if(flowDirection[nr][nc] == directuionCodeReverse[k]){
                        if(memo[nr+"-"+nc] == undefined){
                            memo[nr+"-"+nc] = true;
                            res += AccumateFlow(nr,nc,flowDirection,row,col,memo);
                        }
                    }
                }
            }
            return res;   
        }
    }
```
- 思路：
  - 1. 首先计算每一个栅格的流向，然后将流向栅格的值设置为 1-128，其他栅格的值设置为 0
  - 2. 然后递归地计算每一个栅格的累积量，直到所有栅格都被访问过
- 应用：
  - 对于正地形可以用来提取山谷线
  - 对地形取反即可提取山脊线
  - 累积流量栅格本身也可以用来表示河流的（可能）分布情况

## 聚类算法
> - 该部分算法位于 `learn.js` 文件中，方便起见我简单编写了多维向量类。

### K均值聚类
> - K均值聚类已经实现，参考 `learn.js` 第 `158` 行， 使用方法见 `main.js` 第 `297`行

1. 从样本中选择 K 个点作为初始质心（完全随机）
2. 计算每个样本到各个质心的距离，将样本划分到距离最近的质心所对应的簇中
3. 计算每个簇内所有样本的均值，并使用该均值更新簇的质心
4. 重复步骤 2 与 3 ，直到达到以下条件之一：
    - 质心的位置变化小于指定的阈值（默认为 0.0001）;
    - 达到最大迭代次数


### 迭代自组织聚类算法 (ISODATA) [2]
- 思路
1. 选择某些初始值。可选不同的参数指标，也可在迭代过程中人为修改，以将N个模式样本按指标分配到各个聚类中心中去。 
2. 计算各类中诸样本的距离指标函数。
3. 按给定的要求，将前一次获得的聚类集进行分裂和合并处理
   1. 分裂处理
   2. 合并处理
4. 重新进行迭代运算，计算各项指标，判断聚类结果是否符合要求。
   - 经过多次迭代后，若结果收敛，则运算结束。
- 空间应用背景下的性能调优[3]
  - To improve the running time, an obvious alternative would be to store the k centers in a spatial index such as a kd-tree.

## 统计算法
- 箱线图绘制算法：
  - 对数据进行排序，然后计算四分位数，最后绘制箱线图
- 难点：
  - 绘制统计图表需要仔细设计
- 实现
- 构建箱线图必要的数据对象
-   ```js
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
    ```
- 绘制箱线图
    ```js
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
    ```




## 物理仿真
- 下一版本将带来基于物理学的风场、流场仿真。目前，该部分会有一个简单的示意 Demo 。

## RVGeo 长期更新计划
> - 本代码库及文档会长期维护，并尽可能服务于教学目的。
- 基础类的重构： 随着代码量的增加，库的复杂性也在上升，因此需要不时重新组织代码片段。
- 统计类基础渲染器与统计信息的解耦合： 为了更好地与现有的 JS 生态融合，统计类不强制要求使用自带的渲染器
- 物理仿真模块：基于重构后的栅格类（也可能是 DEM 类），通过物理仿真模块包装，实现基础的环境方向的物理仿真。也会有一些基于流水物理的地形分析算法放在该类下面。
- 本代码库暂时不会涉及：具体界面的搭建。除了必要的数据渲染工具（用于debug）之外，本库暂时不会设计编写用户界面部分的代码。

## Reference
- [1] [Marching squares. (2022, October 6). In Wikipedia.](https://en.wikipedia.org/wiki/Marching_squares) https://en.wikipedia.org/wiki/Marching_squares
- [2] [ISODATA](https://zhuanlan.zhihu.com/p/403365978) https://zhuanlan.zhihu.com/p/403365978
- [3] [A FAST IMPLEMENTATION OF THE ISODATA CLUSTERING ALGORITHM](https://www.cs.umd.edu/users/mount/Papers/ijcga07-isodata.pdf) https://www.cs.umd.edu/users/mount/Papers/ijcga07-isodata.pdf
- [4] [Flow Mdeling](https://www.youtube.com/watch?v=_KlRRowXv7k&t=143s) https://www.youtube.com/watch?v=_KlRRowXv7k&t=143s

