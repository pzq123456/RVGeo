// import * as RVGeo from './src';

// window.RVGeo = RVGeo;

// 初始化 Monaco Editor
require.config({
    paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.27.0/min/vs' }
  });
  
require(['vs/editor/editor.main'], function () {
    const runButton = document.getElementById('run');
    const clearButton = document.getElementById('clear');
    const jsCode = document.getElementById('js-code');
    const jsEditor = monaco.editor.create(jsCode, {
        value: `console.log('Hello, world!');`,
        language: 'javascript',
        theme: 'vs-dark',
        automaticLayout: true,
        minimap: { enabled: false },
        fontSize: 19,
    });

    // 监听运行按钮的点击事件
    runButton.addEventListener('click', function () {
        // 获取文本框中的内容
        const jsContent = jsEditor.getValue();
        // 在当前页面中执行 JavaScript 代码
        try {
            // 使用 Function 构造函数执行代码
            const executeCode = new Function(jsContent);
            executeCode();
        } catch (error) {
            console.error('Error executing code:', error);
            CustomLogFunction(error.message, 'error', myConsoleDiv);
        }
    });

    function setEditorValue(value) {
        jsEditor.setValue(value);
    }

    window.setEditorValue = setEditorValue;

    // 监听清空按钮的点击事件
    clearButton.addEventListener('click', function () {
        jsEditor.setValue('');
    });
});