// 以下代码是将 console.log() 等方法的输出转发到页面上的代码
const myConsoleDiv = document.getElementById('console-output');

// 转发 console.log() 等方法 用于直接在页面上显示
const consoleTypes = ['log', 'warn', 'error', 'info', 'debug'];

// 转发 console.log() 等方法 并递归渲染对象
consoleTypes.forEach(type => {
    const oldConsole = console[type];
    console[type] = function (...args) {
        // 依次渲染每个参数 遇到对象则递归渲染
        args.forEach(arg => {
            if (typeof arg === 'object') {
                renderObject(arg, myConsoleDiv);
            } else {
                const div = document.createElement('div');
                div.style.cssText = logStyles[type];
                // 设置下边框  使用对应type的颜色
                // div.style.borderBottom = `1px solid ${logStyles[type].split(':')[1]}`;
                // 下边框设置为虚线
                div.style.borderBottom = `1px dashed ${logStyles[type].split(':')[1]}`;
                div.textContent = arg;
                myConsoleDiv.appendChild(div);
            }
        });
        oldConsole.apply(console, args);

    };
});

// 处理错误
window.onerror = function (message, source, lineno, colno, error) {
    console.error(message, source, lineno, colno, error);
    // CustomLogFunction(message, 'error', myConsoleDiv);
    return true;
};

// style for each log type
const logStyles = {
    log: 'color: #fff',
    warn: 'color: #ff0',
    error: 'color: #f00',
    info: 'color: #0f0',
    debug: 'color: #1ff',
};



// 递归渲染 obj 对象，创建可折叠的树形结构
function renderObject(obj, parent) {
    // 如果 obj 是数组，则渲染数组
    if (Array.isArray(obj)) {
        renderArray(obj, parent);
        return;
    }

    let button = document.createElement('button');
    button.textContent = '+';
    button.onclick = function () {
        ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
        button.textContent = ul.style.display === 'none' ? '+' : '-';
    };
    parent.appendChild(button);
    // 渲染大括号
    let span = document.createElement('span');
    span.textContent = '{';
    span.style.cssText = 'color: orange';
    parent.appendChild(span);

    let ul = document.createElement('ul');
    // ul 背景色
    ul.style.cssText = 'background-color: #3da1ac69';
    // ul 显示状态
    ul.style.display = 'none';
    // ul 下边框
    ul.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    parent.appendChild(ul);
    for (let key in obj) {
        let li = document.createElement('li');
        ul.appendChild(li);
        let span = document.createElement('span');
        // style for key
        span.style.cssText = 'color: orange';
        span.textContent = key;
        // add : after key
        span.textContent += ': ';
        li.appendChild(span);
        if (typeof obj[key] === 'object') {
            renderObject(obj[key], li);
        } else if (
            typeof obj[key] === 'function' ||
            typeof obj[key] === 'symbol'
        ) {
            let pre = document.createElement('pre');
            let code = document.createElement('code');
            code.textContent = obj[key];

            code.className = 'language-js';
            pre.appendChild(code);
            li.appendChild(pre);
        }
        else{
            let span = document.createElement('span');
            // style for value
            span.style.cssText = 'color: #fff';
            span.textContent = obj[key];
            li.appendChild(span);
        }
    }
    // 渲染大括号
    let span2 = document.createElement('span');
    span2.textContent = '}';
    span2.style.cssText = 'color: orange';
    parent.appendChild(span2);
}

// 渲染数组
function renderArray(arr, parent) {
    let button = document.createElement('button');
    button.textContent = '+';
    button.onclick = function () {
        ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
        button.textContent = ul.style.display === 'none' ? '+' : '-';
    };
    parent.appendChild(button);

    let ul = document.createElement('ul');
    ul.style.display = 'none';
    ul.style.borderBottom = '1px solid rgba(255, 255, 255, 0.8)';
    parent.appendChild(ul);
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        if (typeof arr[i] === 'object') {
            renderObject(arr[i], li);
        } else {
            let span = document.createElement('span');
            span.textContent = arr[i];
            li.appendChild(span);
        }
    }
}
