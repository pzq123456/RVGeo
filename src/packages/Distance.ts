/**
 * @module distance
 * @description
 * - Returns the distance between two points.(Supports both 2D and 3D points on the Sphere and the Cartesian plane)
 * - 距离模块，返回两点之间的距离（支持球面和笛卡尔平面上的2D和3D点）
 * @see https://en.wikipedia.org/wiki/Haversine_formula
 */

// Path: src\packages\Distance.ts
import { degreesToRadians, radiansToLength} from "./constants/Units.ts"

// 球面坐标系（经纬度）上两点之间的距离，球面形状为正球体
import { sphere } from "./constants/Ellipsoid.ts"
import { Point } from "./Geometry.ts"
import { Units } from "./constants/Units.ts"

export function haversine(from: Point | [lon1 : number ,lat1 : number] ,to: Point | [lon2 : number ,lat2 : number] ,unit: Units = "kilometers"): number {
    // 处理输入参数
    const coordinates1 = Array.isArray(from) ? from : from.to2DArray();
    const coordinates2 = Array.isArray(to) ? to : to.to2DArray();
    // 经纬度转弧度
    coordinates1.map((item, index) => {
        coordinates1[index] = degreesToRadians(item);
    });
    coordinates2.map((item, index) => {
        coordinates2[index] = degreesToRadians(item);
    });
    // 计算距离
    const dLat = coordinates2[1] - coordinates1[1];
    const dLon = coordinates2[0] - coordinates1[0];
    const rlat1 = coordinates1[1];
    const rlat2 = coordinates2[1];
    const a = Math.pow(Math.sin(dLat / 2), 2) + Math.pow(Math.sin(dLon / 2), 2) * Math.cos(rlat1) * Math.cos(rlat2);
    return radiansToLength(2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)), unit);
    /*
    2 * asin(
    sqrt(
        pow(sin(dLat / 2), 2) +
        pow(sin(dLon / 2), 2) *
        cos(rlat1) * cos(rlat2)
    ) 
     */
}

// function distance(
//     from: Coord | Point,
//     to: Coord | Point,
//     options: {
//       units?: Units;
//     } = {}
//   ) {
//     var coordinates1 = getCoord(from);
//     var coordinates2 = getCoord(to);
//     var dLat = degreesToRadians(coordinates2[1] - coordinates1[1]);
//     var dLon = degreesToRadians(coordinates2[0] - coordinates1[0]);
//     var lat1 = degreesToRadians(coordinates1[1]);
//     var lat2 = degreesToRadians(coordinates2[1]);
  
//     var a =
//       Math.pow(Math.sin(dLat / 2), 2) +
//       Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
  
//     return radiansToLength(
//       2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)),
//       options.units
//     );
//   }
  
// ((x, y) => {
//     'use strict';

//     // haversine :: (Num, Num) -> (Num, Num) -> Num
//     const haversine = ([lat1, lon1], [lat2, lon2]) => {
//         // Math lib function names
//         const [pi, asin, sin, cos, sqrt, pow, round] = [
//             'PI', 'asin', 'sin', 'cos', 'sqrt', 'pow', 'round'
//         ]
//         .map(k => Math[k]),

//             // degrees as radians
//             [rlat1, rlat2, rlon1, rlon2] = [lat1, lat2, lon1, lon2]
//             .map(x => x / 180 * pi),

//             dLat = rlat2 - rlat1,
//             dLon = rlon2 - rlon1,
//             radius = 6372.8; // km

//         // km
//         return round(
//             radius * 2 * asin(
//                 sqrt(
//                     pow(sin(dLat / 2), 2) +
//                     pow(sin(dLon / 2), 2) *
//                     cos(rlat1) * cos(rlat2)
//                 )
//             ) * 100
//         ) / 100;
//     };

//     // TEST
//     return haversine(x, y);

//     // --> 2887.26

// })([36.12, -86.67], [33.94, -118.40]);

// // 2887.26