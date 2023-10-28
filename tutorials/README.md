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