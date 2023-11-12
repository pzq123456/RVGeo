// 禁用 TS2304 检查器，因为我们将使用 require 语句
// @ts-nocheck

// 读取 myConfig.json 文件
import * as config from '../myConfig.json'
// @ts-nocheck
export function addScript2Page(yourAK: string) {
  let script = document.createElement('script');
  script.type = 'text/javascript';
  console.log(yourAK);
  script.src = `https://api.map.baidu.com/api?v=1.0&type=webgl&ak=${yourAK}&callback=initialize`;
  document.body.appendChild(script);
}



const ak = config.BMapAK;

/**
 * 异步加载百度地图（向页面异步写入脚本标签）
 * @returns {Promise} 返回一个Promise对象
 * @constructor
 */
export function loadBaiDuMap(): Promise<any> {
  return new Promise(function (resolve) {
    window.init = function () {
      resolve(BMapGL)
    }
    addScript2Page(ak);
  })
}

/**
 * 异步加载百度地图,以及绘制工具
 * @returns {Promise} 返回一个Promise对象
 * @constructor
 */
export async function loadBaiDuDrawMap(): Promise<any> {
  const BMapGL = await loadBaiDuMap();

  // let script = document.createElement('script');
  // script.type = 'text/javascript';
  // script.src = 'http://mapopen.cdn.bcebos.com/github/BMapGLLib/DrawingManager/src/DrawingManager.min.js';
  // document.body.appendChild(script);
  // let link = document.createElement('link');
  // link.rel = 'stylesheet';
  // link.href = 'http://mapopen.cdn.bcebos.com/github/BMapGLLib/DrawingManager/src/DrawingManager.min.css';
  // document.body.appendChild(link);

  return BMapGL;
}


/**
 * 初始化地图 简单向页面添加地图
 */
export function initMap() {
  loadBaiDuMap().then((BMapGL) => {
    // GL版命名空间为BMapGL
    // 按住鼠标右键，修改倾斜角和角度
  var map = new BMapGL.Map("allmap");    // 创建Map实例
  map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
  map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  })
}



