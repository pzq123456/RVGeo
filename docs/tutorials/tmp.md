# 自动页面生成后需要添加的内容
## dist/index.html
```html
    <script type="module" crossorigin src="/RVGeo/dist/assets/index-0ae89fe2.js"></script>
    <link rel="stylesheet" href="/RVGeo/dist/assets/index-9b682530.css">
```


```html
<div class="Docs">
    <a href="/RVGeo/"> 
        RVGeo Docs | 查看文档
    </a>
</div>
```
```css
.Docs{
    position: absolute;
    left: 0px;
    top: 0px;
    color: #ffffff;
    font-size: 20px;
    background-color: #ffffff38;
    border-radius: 5px;
    padding: 5px;
    border: solid 1px #ffffff;
}
.Docs:hover{
    background-color: #ffffff;
}
.Docs a{
    text-decoration: none;
    color: #ffffff;
}
.Docs a:hover{
    color: #288b2a;
}
```

## /index.html
```html
<div class="Example" 
style="
    background: linear-gradient(90deg, #0c5e62 0%, #08b372 100%);
    padding: 10px;
    border-radius: 5px;
    border: solid 1px #ffffff;
    margin-bottom: 10px;
    /* 居中内部元素 */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;">
    <a href="/RVGeo/dist/index.html" 
    style="
        color: #ffffff;
        font-size: 20px;
        text-decoration: none;">
        (click) Example Page | RVGeo 示例页面 （点此访问）
    </a>
</div>
<div class="npm" 
        style="
            background: linear-gradient(90deg, #f6a92d 0%, #ff5d5df9 50%,#941bd4 100%);
            padding: 10px;
            border-radius: 5px;
            border: solid 1px #ffffff;
            margin-bottom: 10px;
            /* 居中内部元素 */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        "
    >
        <a href="https://www.npmjs.com/package/rvgeo"
        style="
        color: #ffffff;
        font-size: 20px;
        text-decoration: none;
        "
        >
            npm Page | RVGeo npm 页面
        </a>
</div>
```