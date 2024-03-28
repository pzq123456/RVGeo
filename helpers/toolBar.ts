type options = {
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  backgroundColor?: string;
}

type exampleBtn = {
  name: string;
  action: () => void;
  options?: options;
}

/**
 * 自动为创建工具条
 * @param element 用于挂载工具条的元素
 * @param tools 工具条上的工具( {name: string, action: () => void} )
 */
export function createToolBar(
element: HTMLDivElement,
tools: exampleBtn[],
outTools?: exampleBtn[],
runCallback?: (functionText : string) => void
) {
  const select = document.createElement('select');
  tools.forEach((tool) => {
    const option = document.createElement('option');
    option.value = tool.name;
    option.innerText = tool.name;
    select.appendChild(option);
  });
  element.appendChild(select);
  const runBtn = document.createElement('button');
  runBtn.innerText = '运行';
  runBtn.id = 'runBtn';
  runBtn.onclick = () => {
    const selectedTool = tools.find((tool) => tool.name === select.value);
    if (selectedTool) {
      selectedTool.action();
      if (runCallback) {
        runCallback(selectedTool.action.toString());
      }
    }
  };
  element.appendChild(runBtn);
  // 若有外部工具，则添加外部工具
  if (outTools) {
    outTools.forEach((tool) => {
      const btn = document.createElement('button');
      btn.innerText = tool.name;
      btn.onclick = tool.action;
      element.appendChild(btn);
    });
  }
}