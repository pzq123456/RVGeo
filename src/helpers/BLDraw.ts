/**
 * 用于调用百度地图的绘制工具。
 * - 百度地图 api 是外部库，所以不放在 package 目录下。
 * - helpers 目录下的文件可以作为使用样例做参考之用。
 * - 由于无法使用 import 语句，所以只能使用全局变量 BMap。
 * - map 作为参数也是为了应对同一个页面有多个地图的情况。
 * - 百度地图的文档及接口都比较混乱，与 GeoJSON 的规范也有出入，所以需要做一些转换。
 */

import { Point, MultiPoint, LineString, MultiLineString, Polygon } from '../packages/Geometry.ts';

// disable ts error
declare var BMapGL: any;

export function createIcon(url: string, size: [number, number], offset: [number, number]) {
    return new BMapGL.Icon(url, new BMapGL.Size(size[0], size[1]), {
        offset: new BMapGL.Size(offset[0], offset[1])
    });
}

const myicons = ['greenStar.svg','bluePoint.svg','redPoint.svg']


export function innerIcon(index: number, icons: string[] = myicons) {
    let url = icons[index];
    return new BMapGL.Icon(url, new BMapGL.Size(11, 11), {
        offset: new BMapGL.Size(5, 5)
    });
}




/**
 * 在 百度地图上 绘制点
 * @param point - 点或者经纬度数组 [lon, lat]
 * @param map - 百度地图实例
 */
export function drawPoint2BLMap(point: Point | [lon:number,lat:number] , map: any, icon?: any ) {
    // let blPoint = new BMapGL.Point(point.lon, point.lat);
    // let icon = new BMapGL.Icon('bluePoint.svg', new BMapGL.Size(11, 11), {
    //     offset: new BMapGL.Size(5, 5)
    //     });
    if(icon) {
        let blPoint = Point.isPoint(point) ? new BMapGL.Point(point.lon, point.lat) : new BMapGL.Point(point[0], point[1]);
        let marker = new BMapGL.Marker(blPoint, {icon: icon});
        map.addOverlay(marker);
    }else{
        let blPoint = Point.isPoint(point) ? new BMapGL.Point(point.lon, point.lat) : new BMapGL.Point(point[0], point[1]);
        let marker = new BMapGL.Marker(blPoint);
        map.addOverlay(marker);
    }

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
export function drawMultiPoint2BLMap(multiPoint: MultiPoint | Point[], map: any, icon?: any) {
    let points = MultiPoint.isMultiPoint(multiPoint) ? multiPoint.coordinates : multiPoint;
    for (let i = 0; i < points.length; i++) {
        let point = points[i];
        drawPoint2BLMap(point, map, icon);
    }
}

export function drawRectangle2BLMap( rect : [minLon:number, minLat:number, maxLon:number, maxLat:number], map: any, style:Object = { strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 }) {
    let pStart = new BMapGL.Point(rect[0], rect[1]);
    let pEnd = new BMapGL.Point(rect[2], rect[3]);
    let rectangle = new BMapGL.Polygon([
        pStart,
        new BMapGL.Point(pEnd.lng, pStart.lat),
        pEnd,
        new BMapGL.Point(pStart.lng, pEnd.lat)
    ], style);  //创建矩形
    map.addOverlay(rectangle);   //增加矩形
}

export function drawLineString2BLMap(lineString: LineString | number[][], map: any, style:Object = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 },close:boolean = false) {
    // let points = lineString.coordinates;
    // 处理 LineString 和 number[] 两种情况
    let points = LineString.isLineString(lineString) ? lineString.toArray() : lineString;
    let blPoints = [];
    for (let i = 0; i < points.length; i++) {
        blPoints.push(new BMapGL.Point(points[i][0], points[i][1]));
    }
    if(close) blPoints.push(new BMapGL.Point(points[0][0], points[0][1]));
    let polyline = new BMapGL.Polyline(blPoints, style);   //创建折线
    map.addOverlay(polyline);   //增加折线
}

export function drawMultiLineString2BLMap(multiLineString: MultiLineString, map: any, style:Object = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }) {
    let lineStrings = multiLineString.coordinates;
    for (let i = 0; i < lineStrings.length; i++) {
        let lineString = lineStrings[i];
        drawLineString2BLMap(lineString, map, style);
    }
}

export function drawPolygon2BLMap(polygon: Polygon | any[], map: any, style:Object = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5}) {
    // let coordinates = polygon.toArray();
    let coordinates = Polygon.isPolygon(polygon) ? polygon.toArray() : polygon;
    let blPoints = [];
    for (let i = 0; i < coordinates.length; i++) {
        let tmp = [];
        for (let j = 0; j < coordinates[i].length; j++) {
            tmp.push(new BMapGL.Point(coordinates[i][j][0], coordinates[i][j][1]));
        }
        blPoints.push(tmp);
    }
    let blPolygon = new BMapGL.Polygon(blPoints, style);
    map.addOverlay(blPolygon);
}

export function drawPolygonArray2BLMap(polygonArray: Polygon[] | any[], map: any, style: Object = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5}) {
    for (let i = 0; i < polygonArray.length; i++) {
        let polygon = polygonArray[i];
        drawPolygon2BLMap([polygon], map, style);
    }
}

export function drawTriangleEdge2BLMap(triangleEdge: any[][], map: any, style: Object = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5}) {

    for (let i = 0; i < triangleEdge.length; i++) {
        let blPoints = [];
        for(let j = 0; j < triangleEdge[i].length; j++) {
                blPoints.push(new BMapGL.Point(triangleEdge[i][j][0], triangleEdge[i][j][1]));
        }
        // add the first point to the end of the array
        blPoints.push(new BMapGL.Point(triangleEdge[i][0][0], triangleEdge[i][0][1]));
        let polyline = new BMapGL.Polyline(blPoints, style);   //创建折线
        map.addOverlay(polyline);   //增加折线
    }

}

export function drawEdgeMap2BLMap(edgeMap: Map<number, number[][]>, map: any, style: Object = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5},close:boolean = false) {
    for (let [key, value] of edgeMap) {
        drawLineString2BLMap(value, map, style,close);
    }
}