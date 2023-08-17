/**
 * - Provides a set of functions for reference coordinate system conversion.
 * - 提供一组用于（管理）参考坐标系转换的函数
 */
import { sign, adjust_lon } from "./constants/Utils";
import { degreesToRadians, radiansToLength, Units ,factors2, earthRadius} from "./constants/Units";
import { Point } from "./Geometry";


function convertToMercator((oriPoint: Point | [lon : number ,lat : number] , unit: Units = "meters"): [number, number] {
    const MAXEXTENT = 20037508.342789244; // m
    const A = earthRadius;
    // 处理输入参数
    const coordinates = Array.isArray(oriPoint) ? oriPoint : oriPoint.to2DArray();
    // 补偿经度超过180度的情况
    const adjusted = adjust_lon(coordinates[0]);
    // 经纬度转弧度
    let x = degreesToRadians(adjusted);
    let y = degreesToRadians(coordinates[1]);

    // 计算转换后的坐标
    x = radiansToLength(x, unit);
    y = A * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * y));

    // if xy value is beyond maxextent (e.g. poles), return maxextent
    if (x > MAXEXTENT) x = MAXEXTENT;
    if (x < -MAXEXTENT) x = -MAXEXTENT;
    if (y > MAXEXTENT) y = MAXEXTENT;
    if (y < -MAXEXTENT) y = -MAXEXTENT;

    return [x, y];
  }

    // var D2R = Math.PI / 180,
    // // 900913 properties
    // A = 6378137.0,
    // 
  
    // // compensate longitudes passing the 180th meridian
    // // from https://github.com/proj4js/proj4js/blob/master/lib/common/adjust_lon.js
    // var adjusted =
    //   Math.abs(lonLat[0]) <= 180 ? lonLat[0] : lonLat[0] - sign(lonLat[0]) * 360;

    // var xy = [
    //   A * adjusted * D2R,
    //   A * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * lonLat[1] * D2R)),
    // ];
  
    // // if xy value is beyond maxextent (e.g. poles), return maxextent
    // if (xy[0] > MAXEXTENT) xy[0] = MAXEXTENT;
    // if (xy[0] < -MAXEXTENT) xy[0] = -MAXEXTENT;
    // if (xy[1] > MAXEXTENT) xy[1] = MAXEXTENT;
    // if (xy[1] < -MAXEXTENT) xy[1] = -MAXEXTENT;
  
    // return xy;
  // } 

