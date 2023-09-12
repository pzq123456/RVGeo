/**
 * 该模块负责处理 GeoJSON 等文件的读取并将其转化为内部对象
 */
import { MultiPoint, Point } from "./Geometry";
/**
 * 从数组创建点(代表坐标的数组元素需要是数字类型)
 * - [lon, lat]
 * - [lon, lat, asl]
 * - [lon, lat, asl, ...properties]
 * @param arr - 数组
 * @returns {Point} 返回点
 */
export function cretePointFromArr(arr: any[]) {
    // 若数组长度为2，则为二维点
    if (arr.length === 2) {
        return new Point(arr[0], arr[1]);
    }else if(arr.length === 3){
        return new Point(arr[0], arr[1], arr[2]);
    }else if(arr.length > 4){
        // 若数组长度大于4，则前三个元素为坐标，后面的元素为属性
        let point = new Point(arr[0], arr[1], arr[2], ...arr.slice(3));
        return point;
    }else{
        throw new Error("Error: the length of array is not correct");
    }
}

/**
 * 从数组创建点列表
 * @param arr - 数组
 * @returns {Point[]}
 */
export function createPointListFromArr(arr: any[]) {
    let res = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == null) continue;
        let point = cretePointFromArr(arr[i]);
        res.push(point);
    }
    return res;
}

export function createMultiPointFromArr(arr: any[]) {
    let points = createPointListFromArr(arr);
    return new MultiPoint(points);
}