# A Brief Tutorial for Experiment of Spatial Analysis (for Raster Part)
> - Pan 6.19 `14:00`
> - 本文主要介绍一下个人对空间分析实习的一些想法，**水平有限**。若有错误，欢迎批评指正。
> - 在 `GitHub`上修改 [本文档](https://github.com/pzq123456/RVGeo/tree/main/docs) 。拉取、提交 `Pull Request` 即可。本教程不定期更新，若要获取最新版本也请读者访问上述链接。
> - 以下 JavaScript 简称 JS ， 该语言易于理解，可以很容易地转换成其他语言的代码。若读者对 JS 不了解可以参考 MDN 的 [这篇教程](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
> - 若觉得本教程有用，欢迎为这个仓库点赞。

个人精力有限，本教程不会涉及 **矢量相关算法、分型、正态云** 部分的算法。另外，本教程内的算法思路仅代表个人观点，会给出一些与解题相关的链接，烦请读者自行阅读理解。

> `Joke` : 当你正真开始写代码的时候，你会发现困扰你的其实只有两个问题：
> - 这个变量该叫什么？
> - 这段功能该放在哪个文件夹下？

- 本教程的主要内容及更新计划：（同时也是 RVGeo 的更新计划）
  - 第一阶段（栅格 DEM 部分算法）：累积表面的生成、栅格等值线生成、基于累积表面的简单应用、栅格水流模拟部分算法、DEM 地形分析部分算法。
  - 第二阶段（图论及最短路径部分算法）：略
  - 第三阶段（聚类算法及地图统计分析部分算法）：略

> 其中，第一阶段是正式开始编写的算法。二、三阶段算法会逐步整理及实现。

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

## 一些栅格算法的思路（ 基于 DEM ）
> - 矢量部分、分型部分以及正态云部分的算法相对好实现，去年很多小组都已经实现的很好了，这里就不再赘述。当然，也可以参考我们的代码及文档（不全）。限于个人时间及精力，我无法一一整理。

相较于矢量方向，栅格方向的算法实现起来会稍微复杂一些。并且，这一块的资料非常稀少，老师提供的课件也是英文的，我想这一块是值得仔细探究的。我在这里列出一些我个人的想法，希望能够给大家一些启发。

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

> https://leetcode.cn/problems/surface-area-of-3d-shapes/