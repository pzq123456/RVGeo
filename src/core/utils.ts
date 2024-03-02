/**
 * @module utils
 * @description 工具函数
 */

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

/**
 * 节流函数
 * @param func - 要执行的函数
 * @param wait - 等待时间
 * @returns - 返回一个节流函数
 */
export function throttle(func: Function, wait: number) {
  let previous = 0;
  return function(this: any, ...args: any[]) {
    const now = Date.now();
    if (now - previous > wait) {
      func.apply(this, args);
      previous = now;
    }
  };
}

/**
 * Merge the properties
 * @param {object} dest - The target object
 * @param {...any} args - The objects to be merged
 * @returns {object} - The merged object
 * @example
 * extend({a: 1}, {b: 2}, {c: 3}) // {a: 1, b: 2, c: 3}
 * extend({a: 1}, {a: 2}, {a: 3}) // {a: 3}
 */
export function extend(dest: any, ...args: any[]) : any {
  for (let i = 0, len = args.length; i < len; i++) {
    const src = args[i];
    for (const key in src) {
      dest[key] = src[key];
    }
  }
  return dest;
}

/**
* 释放对象
* @param {Object} obj - 需要释放的对象
*/
export function emptyObj(obj: { [key: string]: any }) {
  for (let i in obj) {
      delete obj[i];
  }
}

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