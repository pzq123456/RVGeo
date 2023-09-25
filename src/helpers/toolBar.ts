// 为页面添加工具栏
/**
 * 自动为创建工具条
 * @param element 用于挂载工具条的元素
 * @param tools 工具条上的工具( {name: string, action: () => void} )
 * @param itemsPerRow 每行按钮个数
 */
export function createToolBar(
  element: HTMLDivElement,
  tools: Array<{ name: string; action: () => void }>,
  itemsPerRow : number = 14
  ) {
    const toolBar = element;

    // 根据工具数量计算行数

    let rows = Math.ceil(tools.length / itemsPerRow)
    let toolsArr = []
    for (let i = 0; i < rows; i++) {
      toolsArr.push(SubArr(tools, i * itemsPerRow, (i + 1) * itemsPerRow))
    }
    toolsArr.forEach((tools) => {
      const toolBarRow = document.createElement('div')
      toolBarRow.className = 'toolBarRow'
      addButton2Div(tools, toolBarRow)
      toolBar.appendChild(toolBarRow)
    }
    )

  }
  

  /**
   * 用于分割工具条
   * @param tools 
   * @param start 
   * @param end 
   * @returns 
   */
function SubArr(tools: Array<{ name: string; action: () => void }>, start: number, end: number) {
  let subArr = tools.slice(start, end)
  return subArr
}

/**
 * 用于添加工具条
 * @param tools 
 * @param element 
 */
function addButton2Div(tools: Array<{ name: string; action: () => void }>, element: HTMLDivElement) {
  tools.forEach(({ name, action }) => {
    const tool = document.createElement('button')
    tool.textContent = name
    tool.addEventListener('click', action)
    element.appendChild(tool)
  })
}