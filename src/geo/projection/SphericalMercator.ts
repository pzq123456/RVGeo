/*
 * Spherical Mercator projection — the most common projection for online maps,
 * used by almost all free and commercial tile providers. Assumes that Earth is
 * a sphere. Used by the `EPSG:3857` CRS.
 */
import { Projection } from "./base";

const A: number = 6378137.0;
const MAXEXTENT: number = 20037508.342789244;
const MAXLAT: number = 85.05112877980659;

export const SphericalMercator: Projection = {
    /**
     * Convert lon/lat values to 900913 x/y.
     * - EPSG:3857 = EPSG:900913 (@link https://epsg.io/900913)
     * @param {Array} lonlat `[lon, lat]` array of geographic coordinates.
     * @returns {Array} `[x, y]` array of geographic coordinates.
     */
    project(lonlat: [number, number]): [number, number] {
        let d = Math.PI / 180,
            max = MAXLAT,
            lat = Math.max(Math.min(max, lonlat[1]), -max),
            sin = Math.sin(lat * d);

        let x = A * lonlat[0] * d;
        let y = A * Math.log((1 + sin) / (1 - sin)) / 2;
        // see: https://en.wikipedia.org/wiki/Mercator_projection

        if (y > MAXEXTENT) y = MAXEXTENT;
        if (y < -MAXEXTENT) y = -MAXEXTENT;
        if (x > MAXEXTENT) x = MAXEXTENT;
        if (x < -MAXEXTENT) x = -MAXEXTENT;

        return [x, y];
    },
    
    /**
     * Convert 900913 x/y values to lon/lat.
     * - EPSG:3857 = EPSG:900913 (@link https://epsg.io/900913)
     * @param {Array} point `[x, y]` array of geographic coordinates.
     * @returns {Array} `[lon, lat]` array of geographic coordinates.
     */
    unproject(point: [number, number]): [number, number] {
        let d = 180 / Math.PI;
        return [point[0] * d / A, (2 * Math.atan(Math.exp(point[1] / A)) - Math.PI / 2) * d];
    },
    
    bounds: [-MAXEXTENT, -MAXEXTENT,MAXEXTENT, MAXEXTENT],
    name: 'EPSG:3857'
};


// export function convertToMercator(oriPoint: Point | [lon : number ,lat : number] , unit: Units = "meters", roundNum: number = 6): [number, number] {
//     const MAXEXTENT = 20037508.342789244; // m
//     const A = earthRadius; // 地球半径
//     // 处理输入参数
//     const coordinates = Array.isArray(oriPoint) ? oriPoint : oriPoint.to2DArray();
//     // 补偿经度超过180度的情况
//     const adjusted = adjust_lon(coordinates[0]);
//     // 经纬度转弧度
//     let x = degreesToRadians(adjusted);
//     let y = degreesToRadians(coordinates[1]);

//     // 计算转换后的坐标
//     x = radiansToLength(x, "meters"); // m
//     y = A * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * y)); // m

//     // if xy value is beyond maxextent (e.g. poles), return maxextent
//     if (x > MAXEXTENT) x = MAXEXTENT;
//     if (x < -MAXEXTENT) x = -MAXEXTENT;
//     if (y > MAXEXTENT) y = MAXEXTENT;
//     if (y < -MAXEXTENT) y = -MAXEXTENT;

//     // 转换为指定单位
//     // x = metersTo(x, unit);
//     // y = metersTo(y, unit);
    
//     x = round(metersTo(x, unit) , roundNum);
//     y = round(metersTo(y, unit) , roundNum);
//     return [x, y];
//   }

// export function convertToWgs84(xy: number[]) : [number, number]
//  {
//   // 900913 properties.
//   var R2D = 180 / Math.PI;
//   var A = 6378137.0;

//   return [
//     (xy[0] * R2D) / A,
//     (Math.PI * 0.5 - 2.0 * Math.atan(Math.exp(-xy[1] / A))) * R2D,
//   ];
// }