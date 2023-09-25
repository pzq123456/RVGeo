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

/**
 * 数据读取模块
 */
import axios from "axios";

/**
 * 从 URL 中获取数据的 Promise
 * @param URL - 数据的 URL
 * @returns {Promise<any>}
 */
export function readDataFromGeoJSON(
    URL: string,
){
    return axios.get(URL);
}

/**
 * 从 GeoJSON 中获取点的数组
 * @param features - GeoJSON 中的 features
 * @returns {number[][]} - 点的数组
 */
export function GeoFeatures2Arr(features: any) : number[][]{
    let arr = [] as number[][];
    features.forEach((feature: any) => {
        arr.push(feature.geometry.coordinates);
    });
    return arr;
}

/**
 * 将无洞的 GeoPolygon 转换为多维数组
 * @param features - GeoJSON 中的 features
 * @returns - 多维数组
 */
export function GeoPolygons2SimpleArr(
    features: any,
){
    let arr = features;
    let polygons = [];
    for(let i = 0 ; i < arr.length ; i++){
        let polygon;
        for(let j = 0 ; j < arr[i].length ; j++){
            polygon = arr[i][j];
        }
        polygons.push(polygon);
    }
    return polygons;
}