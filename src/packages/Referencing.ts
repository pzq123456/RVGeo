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
