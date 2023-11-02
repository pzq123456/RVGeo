# RVGeo Tutorial site
> 新功能：
> - 输入 ls 命令后，直接将光标移动到想要访问的博客行，敲击回车即可访问该博客。

<div class="colorbox" style="
    width: 100%;
    height: 1px;
    background-color: rgba(255, 0, 0, 0.5);
">
</div>

> - Attention: You need to click the Terminal first to focus it before you can input commands.
> - click left buttons to check the examples. -- 点击左侧按钮查看示例。 -->

| Example | 说明 | Description |
| :--- | :--- | :--- |
| example1 | 绘制多点及质心 | Draw MultiPoint and its Centroid |
| example2 | 绘制三角网 | Draw Triangulation |
| example3 | 绘制凸包 | Draw Convex Hull |
| example4 | 计算面积 | Measuration.SpherePolygonArea |
| example5 | 绘制Voronoi Diagram | Draw Voronoi Diagram |
| example6 | 多边形求交 | Polygon Intersection |
| example7 | 线段求交 | line intersection |
| example8 | 点线关系 | The topology relationship between point and line |
| example9 | 栅格 | Coverage |
| example10 | 四叉树 | QuadTree |
| example11 | Alpha Shape 算法 | Alpha Shape Algorithm |
| example12 | （二维）噪声生成器及噪声可视化 | Noise Generator and visualization |








## About this site
> 网站布局简介：
> - 最上面一栏为导航栏兼精选栏，点击导航栏可以跳转到相应的页面，点击精选栏可以跳转到精选文章。
> - 导航栏下面是简易终端，如果您希望在网站上执行一些命令，可以在这里输入。
>   - 可以点击 `toggleTerminal` 按钮来控制终端是否随页面滚动，以免影响阅读体验。
> - 右侧导航栏用于访问所有博客文章。

> Terminal 使用帮助：
> - 输入 `help` 可以查看帮助信息。
> - 输入 `ls` 可以查看当前目录下的文件。（其实是 blogs 中存储的所有博客）
> - 输入 `cd` 可以打开对应博客（调用渲染函数动态渲染再当前页面）

> Terminal Usage:
> - Input `help` to get help information.
> - Input `ls` to list all blogs in current directory.
> - Input `cd` to open a blog. The blog will be rendered in the current page.

<div class="colorbox" style="
    width: 100%;
    height: 1px;
    background-color: green;
">
</div>

> - 注意： 想要使用 Terminal 需要首先点击它，看到光标闪烁（已聚焦）后才可以输入命令。 

> - 关于命令行：由于底层数据结构是基于 block 也就是词块，所以命令行的输入是以词块为单位，如果你输入的命令不是一个词块，那么它将不会被识别。比如，如果你输入 `cd/some_path`，那么它将不会被识别，因为 `cd/some_path` 会被识别为一个词块，解释器就无法将其解析到函数和参数。正确的做法是输入 `cd /some_path`，这样解释器就可以将其解析为 `cd` 函数和 `/some_path` 参数。