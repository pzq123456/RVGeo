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

/**
 * 计算数组的形状
 * @param array - 数组
 * @returns {number[]}
 */
export function calculateArrayShape(array: any[]): number[] {
  let shape = [];
  let tmp = array;
  while(Array.isArray(tmp)) {
      shape.push(tmp.length);
      tmp = tmp[0];
  }
  return shape;
}

export function flattenArray(array: any[]): any[] {
  let res = [];
  for(let i = 0; i < array.length; i++) {
      let tmp = array[i];
      if (Array.isArray(tmp)) {
          res.push(...flattenArray(tmp));
      } else {
          res.push(tmp);
      }
  }
  return res;
}

/**
* - 根据 indexArray 中存储的索引 从 fillArray 中取出对应的元素并填充到 indexArray 中
* - fill indexArray with elements from fillArray according to the index stored in indexArray
* - `注意`： indexArray 的形状未知 但是 fillArray 不论形状如何始终视为一维数组
* - Note: the shape of indexArray is unknown, but fillArray is always regarded as a one-dimensional array regardless of its shape
* @param indexArray - 存储索引的数组（被填充）
* @param fillArray - 存储元素的数组 （用于填充）
*/
export function fillIndexArray(indexArray : any, fillArray : any ) : any{
  let res = [];
  for(let i = 0; i < indexArray.length; i++) {
      let tmp = indexArray[i];
      if (Array.isArray(tmp)) {
          res.push(fillIndexArray(tmp, fillArray));
      }else{
          res.push(fillArray[tmp]);
      }
  }
  return res;
}

/**
* 拼接等长二维数组
* @warning 必须为二维数组，必须等长。
* @param array1 [ [1,2,3], [4,5,6], [7,8,9] ]
* @param array2 [ ['a','b','c'], ['d','e','f'], ['g','h','i'] ]
* @returns [ [1,2,3,'a','b','c'], [4,5,6,'d','e','f'], [7,8,9,'g','h','i'] ]
*/
export function concatEL2DArray(array1: any[], array2: any[]) : any[] {
  array1.forEach((item, index) => {
      array1[index] = item.concat(array2[index]);
  });
  return array1;
}

/**
* 抽取二维数组的某一列（或某几列）
* @param array - 二维数组
* @param indexArray - 索引数组(或索引)
*/
export function subColumnInEL2DArray(
  array: any[],
  indexArray: number[] | number
) : any[] {
  // 首先判断 indexArray 是不是数组 及其有效性
  if (!Array.isArray(indexArray)) {
      indexArray = [indexArray];
  }
  // 判断 indexArray 是否合法
  indexArray.forEach((item) => {
      if (item < 0 || item >= array[0].length) {
          throw new Error("indexArray is illegal!");
      }
  });
  // 根据 indexArray 中的顺序抽取 array 中的元素并组成新的数组
  let res: any[] = [];
  array.forEach((item) => {
      let tmp: any[] = [];
      if (Array.isArray(indexArray)) {
          indexArray.forEach((index) => {
              tmp.push(item[index]);
          });
      } else {
          tmp.push(item[indexArray]);
      }
      res.push(tmp);
  });
  return res;
}
/**
* 生成随机索引数组（不重复）
* @param length - 数组长度（自然数）
* @param num - 随机索引个数（自然数）
* @returns {number[]} - 随机索引数组
*/
/**
* 生成随机索引数组（不重复）
* @param length - 数组长度（自然数）
* @param num - 随机索引个数（自然数）
* @returns {number[]} - 随机索引数组
*/
export function randomIndexArray(
  length: number,
  num: number
): number[] {
  if (num > length) {
      throw new Error("num must be less than length!");
  }

  const res: number[] = [];
  while (res.length < num) {
      const tmp = Math.floor(Math.random() * length);
      if (!res.includes(tmp)) {
          res.push(tmp);
      }
  }
  return res;
}

/**
 * - Round number to precision
 * - 将数字四舍五入到指定精度
 * @param {number} num Number
 * @param {number} [precision=0] Precision
 * @returns {number} rounded number
 * @example
 * round(120.4321)
 * //=120
 *
 * round(120.4321, 2)
 * //=120.43
 */
export function round(num: number, precision : number = 0): number {
  if (precision && !(precision >= 0)) {
      throw new Error("precision must be a positive number");
  }
  const multiplier = Math.pow(10, precision || 0); // 取10的precision次方
  return Math.round(num * multiplier) / multiplier; // 乘以10的precision次方，四舍五入，再除以10的precision次方
}