// 禁用 TS2304 检查器，因为我们将使用 require 语句
// @ts-nocheck
/**
 * - Provides a set of functions for reference coordinate system conversion.
 * - 提供一组用于（管理）参考坐标系转换的函数
 */
import { adjust_lon, round } from "./constants/Utils";
import { degreesToRadians, radiansToLength, Units, earthRadius, metersTo} from "./constants/Units";
import { Point } from "./Geometry";

/**
 * - Converts geographic coordinates to Mercator coordinates. ( EPSG:4326 -> EPSG:3857 )
 * - 将经纬度转换为墨卡托坐标
 * @param oriPoint - 点类型或者经纬度数组
 * @param unit - 距离单位（默认为米）
 * @param roundNum - 保留小数位数
 * @returns 
 */
export function convertToMercator(oriPoint: Point | [lon : number ,lat : number] , unit: Units = "meters", roundNum: number = 6): [number, number] {
    const MAXEXTENT = 20037508.342789244; // m
    const A = earthRadius; // 地球半径
    // 处理输入参数
    const coordinates = Array.isArray(oriPoint) ? oriPoint : oriPoint.to2DArray();
    // 补偿经度超过180度的情况
    const adjusted = adjust_lon(coordinates[0]);
    // 经纬度转弧度
    let x = degreesToRadians(adjusted);
    let y = degreesToRadians(coordinates[1]);

    // 计算转换后的坐标
    x = radiansToLength(x, "meters"); // m
    y = A * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * y)); // m

    // if xy value is beyond maxextent (e.g. poles), return maxextent
    if (x > MAXEXTENT) x = MAXEXTENT;
    if (x < -MAXEXTENT) x = -MAXEXTENT;
    if (y > MAXEXTENT) y = MAXEXTENT;
    if (y < -MAXEXTENT) y = -MAXEXTENT;

    // 转换为指定单位
    // x = metersTo(x, unit);
    // y = metersTo(y, unit);
    
    x = round(metersTo(x, unit) , roundNum);
    y = round(metersTo(y, unit) , roundNum);
    return [x, y];
  }


/**
 * Convert 900913 x/y values to lon/lat.
 * (from https://github.com/mapbox/sphericalmercator)
 *
 * @private
 * @param {Array<number>} xy Mercator [x, y] point
 * @returns {Array<number>} WGS84 [lon, lat] point
 */
export function convertToWgs84(xy: number[]) : [number, number]
 {
  // 900913 properties.
  var R2D = 180 / Math.PI;
  var A = 6378137.0;

  return [
    (xy[0] * R2D) / A,
    (Math.PI * 0.5 - 2.0 * Math.atan(Math.exp(-xy[1] / A))) * R2D,
  ];
}
/**
 * 批量向墨卡托坐标系转换
 * @param points - 点类型或者经纬度数组
 * @param unit - 距离单位（默认为米）
 * @param roundNum - 保留小数位数
 */
export function convertToMercators(points: Point[] | [lon : number ,lat : number][] , unit: Units = "meters", roundNum: number = 6): [number, number][] {
  // 首先判断是否为点类型 若是则批量转换
  if(points[0] instanceof Point){
    let res = [];
    for(let i = 0; i < points.length; i++){
      res.push(convertToMercator(points[i],unit,roundNum));
    }
    return res;
  }else{
    let res = [];
    for(let i = 0; i < points.length; i++){
      res.push(convertToMercator(points[i],unit,roundNum));
    }
    return res;
  }
}

export function MBR2Plane(mbr: [number,number,number,number],unit: Units = "meters", roundNum: number = 6): [number,number,number,number]{
  let res = [];

  let plane0 = convertToMercator([mbr[0],mbr[1]],unit,roundNum);
  let plane1 = convertToMercator([mbr[2],mbr[3]],unit,roundNum);

  res = [plane0[0],plane0[1],plane1[0],plane1[1]] as [number,number,number,number];
  return res;
}

export function plane2MBR(plane: [number,number,number,number],unit: Units = "meters", roundNum: number = 6): [number,number,number,number]{
  let res = [];

  let mbr0 = convertToWgs84([plane[0],plane[1]]);
  let mbr1 = convertToWgs84([plane[2],plane[3]]);

  res = [mbr0[0],mbr0[1],mbr1[0],mbr1[1]] as [number,number,number,number];
  return res;
}
