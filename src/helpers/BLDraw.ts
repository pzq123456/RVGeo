/**
 * 用于调用百度地图的绘制工具。
 * - 百度地图 api 是外部库，所以不放在 package 目录下。
 * - helpers 目录下的文件可以作为使用样例做参考之用。
 * - 由于无法使用 import 语句，所以只能使用全局变量 BMap。
 */

import { Point, MultiPoint, LineString, MultiLineString, Polygon } from '../packages/Geometry.ts';

// disable ts error
declare var BMapGL: any;

// var point = new BMapGL.Point(116.404, 39.915);   
// var marker = new BMapGL.Marker(point);        // 创建标注   
// map.addOverlay(marker);                     // 将标注添加到地图中
// var myIcon = new BMapGL.Icon("markers.png", new BMapGL.Size(23, 25), {   
//     // 指定定位位置。  
//     // 当标注显示在地图上时，其所指向的地理位置距离图标左上   
//     // 角各偏移10像素和25像素。您可以看到在本例中该位置即是  
//     // 图标中央下端的尖角位置。   
//     anchor: new BMapGL.Size(10, 25),   
//     // 设置图片偏移。  
//     // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您  
//     // 需要指定大图的偏移位置，此做法与css sprites技术类似。   
//     imageOffset: new BMapGL.Size(0, 0 - 25)   // 设置图片偏移   
// });     
    // 创建标注对象并添加到地图  
// var marker = new BMapGL.Marker(point, {icon: myIcon});   
// var marker = new BMapGL.Marker(point); 
// map.addOverlay(marker); 
// // marker.addEventListener("click", function(){   
// //     alert("您点击了标注");   
// // });

// var polyline = new BMapGL.Polyline([
//     new BMapGL.Point(116.399, 39.910),
//     new BMapGL.Point(116.405, 39.920),
//     new BMapGL.Point(116.425, 39.900)
// ], {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});
// map.addOverlay(polyline);

// var polygon = new BMapGL.Polygon([
//     new BMapGL.Point(116.387112,39.920977),
//     new BMapGL.Point(116.385243,39.913063),
//     new BMapGL.Point(116.394226,39.917988),
//     new BMapGL.Point(116.401772,39.921364),
//     new BMapGL.Point(116.41248,39.927893)
// ], {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});
// map.addOverlay(polygon);

/**
 * 在 百度地图上 绘制点
 * @param point - 点
 * @param map - 百度地图实例
 */
export function drawPoint2BLMap(point: Point, map: any) {
    let blPoint = new BMapGL.Point(point.lon, point.lat);
    let marker = new BMapGL.Marker(blPoint);
    map.addOverlay(marker);
}

/**
 * 清除百度地图上所有的覆盖物
 * @param map 
 */
export function removeAllOverlay(map: any) {
    map.clearOverlays();
}

/**
 * 在 百度地图上 绘制多点
 * @param multiPoint - 多点
 * @param map - 百度地图实例
 */
export function drawMultiPoint2BLMap(multiPoint: MultiPoint, map: any) {
    let points = multiPoint.coordinates;
    for (let i = 0; i < points.length; i++) {
        let point = points[i];
        drawPoint2BLMap(point, map);
    }
}

export function drawRectangle2BLMap( rect : [minLon:number, minLat:number, maxLon:number, maxLat:number], map: any) {
    let pStart = new BMapGL.Point(rect[0], rect[1]);
    let pEnd = new BMapGL.Point(rect[2], rect[3]);
    let rectangle = new BMapGL.Polygon([
        pStart,
        new BMapGL.Point(pEnd.lng, pStart.lat),
        pEnd,
        new BMapGL.Point(pStart.lng, pEnd.lat)
    ], { strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 });  //创建矩形
    map.addOverlay(rectangle);   //增加矩形
}

export function drawLineString2BLMap(lineString: LineString, map: any) {
    let points = lineString.coordinates;
    let blPoints = [];
    for (let i = 0; i < points.length; i++) {
        let point = points[i];
        blPoints.push(new BMapGL.Point(point.lon, point.lat));
    }
    let polyline = new BMapGL.Polyline(blPoints, { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 });   //创建折线
    map.addOverlay(polyline);   //增加折线
}

export function drawMultiLineString2BLMap(multiLineString: MultiLineString, map: any) {
    let lineStrings = multiLineString.coordinates;
    for (let i = 0; i < lineStrings.length; i++) {
        let lineString = lineStrings[i];
        drawLineString2BLMap(lineString, map);
    }
}

export function drawPolygon2BLMap(polygon: Polygon, map: any) {
    let coordinates = polygon.toArray();
    console.log(coordinates);
    let blPoints = [];
    for (let i = 0; i < coordinates.length; i++) {
        let tmp = [];
        for (let j = 0; j < coordinates[i].length; j++) {
            tmp.push(new BMapGL.Point(coordinates[i][j][0], coordinates[i][j][1]));
        }
        blPoints.push(tmp);
    }
    let blPolygon = new BMapGL.Polygon(blPoints, { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 });
    console.log(blPoints);
    map.addOverlay(blPolygon);
}
// var polyline = new BMapGL.Polyline([
//     new BMapGL.Point(116.399, 39.910),
//     new BMapGL.Point(116.405, 39.920),
//     new BMapGL.Point(116.425, 39.900)
// ], {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});   //创建折线



// var polygon = new BMapGL.Polygon([
//     new BMapGL.Point(116.387112,39.920977),
//     new BMapGL.Point(116.385243,39.913063),
//     new BMapGL.Point(116.394226,39.917988),
//     new BMapGL.Point(116.401772,39.921364),
//     new BMapGL.Point(116.41248,39.927893)
// ], {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});
// map.addOverlay(polygon);