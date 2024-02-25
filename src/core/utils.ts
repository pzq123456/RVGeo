/**
 * @module utils
 * @description 工具函数
 */

/**
 * 生成UUID
 * @returns - UUID 
 */
export function UUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * 判断一个 object 是否是(潜在的)地理对象（是否含有 X，Y 或者 lon，lat 或者 lng，lat 属性）
 * @param obj - 待判断的对象
 * @returns{boolean} - 如果是地理对象则返回 true，否则返回 false
 */
export function isPotentialGeoObject(obj: any): boolean {
  // 若不是对象则返回 false
  if (typeof obj !== 'object') {
    return false;
  }
  
  // 判断是否含有 X，Y 或者 lon，lat 或者 lng，lat 属性
  if (obj.x && obj.y) {
    return true;
  } else if (obj.lon && obj.lat) {
    return true;
  } else if (obj.lng && obj.lat) {
    return true;
  } else if(obj.X && obj.Y) {
    return true;
  } else {
    return false;
  }
}