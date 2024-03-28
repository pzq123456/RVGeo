// @ts-nocheck
/**
 * 用于调用百度地图的绘制工具。
 * - 百度地图 api 是外部库，所以不放在 package 目录下。
 * - helpers 目录下的文件可以作为使用样例做参考之用。
 * - 由于无法使用 import 语句，所以只能使用全局变量 BMap。
 * - map 作为参数也是为了应对同一个页面有多个地图的情况。
 * - 百度地图的文档及接口都比较混乱，与 GeoJSON 的规范也有出入，所以需要做一些转换。
 */

import { Point, MultiPoint, LineString, MultiLineString, Polygon, MBR} from '.';
import { fillIndexArray, SphericalMercator,plane2MBR } from '.';
import { QuadTree } from '.';
const convertToWgs84 = SphericalMercator.unproject;

// import { convertToWgs84, plane2MBR } from '../packages/Referencing.ts';
// disable ts error
declare var BMapGL: any;

export function createIcon(url: string, size: [number, number], offset: [number, number]) {
    return new BMapGL.Icon(url, new BMapGL.Size(size[0], size[1]), {
        offset: new BMapGL.Size(offset[0], offset[1])
    });
}

const myicons = ['Pink.svg','Blue.svg','Yellow.svg','Green.svg']


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
 * 在百度地图上点位置添加label标注
 * @param point - 点或者经纬度数组 [lon, lat]
 * @param content -标注的内容
 * @param map - 百度地图实例
 * @returns label - 百度地图的 标注对象
 */
export function drawLabel(point: Point | [lon: number, lat: number], content: string | number, map: any){
    // let content = "label";
    let blPoint = Point.isPoint(point) ? new BMapGL.Point(point.lon, point.lat) : new BMapGL.Point(point[0], point[1]);
    let label = new BMapGL.Label(content, {       // 创建文本标注
        position: blPoint,                          // 设置标注的地理位置
        offset: new BMapGL.Size(5, 5)           // 设置标注的偏移量
    })
    label.setStyle({
        // borderRadius: '50px',
        // borderColor: '#ccc',
        // padding: '10px',
        fontSize: '10px',
        height: '20px',
        lineHeight: '20px',
        fontFamily: '微软雅黑'
    });
    map.addOverlay(label);
    return label
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
export function drawMultiPoint2BLMap(multiPoint: MultiPoint | Point[] | [number,number][], map: any, icon?: any) {
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

export function drawLineString2BLMap(lineString: LineString | [number,number][] , map: any, style:Object = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }, close:boolean = false) {
    
    // 处理 LineString 和 number[] 两种情况
    let points = LineString.isLineString(lineString) ? lineString.coordinates : lineString;
    if(points.length < 2) return;
    let blPoints = [];

    for (let i = 0; i < points.length; i++) {
        blPoints.push(new BMapGL.Point(points[i][0], points[i][1]));
    }
    // 若需要闭合
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
    let coordinates = Polygon.isPolygon(polygon) ? polygon.coordinates : polygon;
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
    for (let [, value] of edgeMap) {
        drawLineString2BLMap(value, map, style,close);
    }
}
export function drawSimplePolygon2Map(polygon: any[], map: any, style: Object = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5}) {
    let blPoints = [];
    for (let i = 0; i < polygon.length; i++) {
        blPoints.push(new BMapGL.Point(polygon[i][0], polygon[i][1]));
    }
    let blPolygon = new BMapGL.Polygon(blPoints, style);
    map.addOverlay(blPolygon);
}

/**
 * 绘制道路
 * @param nodes - 节点 
 * @param edges - 起点 终点 权重
 * @param hightlight - 高亮的边
 * @param Source - 起点
 * @param Target - 终点
 * @param map - 百度地图实例
 * @param nodeIcon - 中间的节点图标
 * @param roadStyle - 道路样式
 * @param hightlightStyle - 高亮样式
 */
export function drawRoad2Map(
    nodes: [number, number][], // 节点
    edges: [number, number, number][], // 起点 终点 权重
    hightlight: number[], // 高亮节点 [0,1,2] ==> 0 --> 1 -->2
    map: any,
    nodeIcon: any = innerIcon(0),
    roadStyle: Object = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5},
    hightlightStyle: Object = { strokeColor: "yellow", strokeWeight: 5, strokeOpacity: 0.5}
){
    // 绘制节点
    for(let i = 0; i < nodes.length; i++){
        // 若是起点和终点则跳过
        if(i === hightlight[0] || i === hightlight[hightlight.length - 1]) continue;
        drawPoint2BLMap(nodes[i],map,nodeIcon);
    }
    // 绘制路网
    for(let i = 0; i < edges.length; i++){
        let edge = edges[i];
        let start = nodes[edge[0]];
        let end = nodes[edge[1]];
        drawLineString2BLMap([start,end],map,roadStyle);
    }
    // 若有高亮边，则绘制高亮边
    if(hightlight.length > 0){
        let lineStrings = fillIndexArray(hightlight,nodes);
        drawLineString2BLMap(lineStrings,map,hightlightStyle,false);
        drawPoint2BLMap(lineStrings[0],map,innerIcon(4));
        drawPoint2BLMap(lineStrings[lineStrings.length - 1],map,innerIcon(2));
    }

}

/**
 * 绘制栅格图层
 * @param extent - [minLon, minLat, maxLon, maxLat]
 * @param getCanvas - 获取 canvas 的函数
 * @param map - 百度地图实例
 */
export function drawRaster2BLMap(
    extent: [number, number, number, number], // [minLon, minLat, maxLon, maxLat]
    getCanvas: ()=> HTMLCanvasElement,
    map: any
){
    // 创建叠加物显示的范围Bounds
    var pStart = new BMapGL.Point(extent[0], extent[1]);
    var pEnd = new BMapGL.Point(extent[2], extent[3]);
    var bounds = new BMapGL.Bounds(new BMapGL.Point(pStart.lng, pEnd.lat), 
                                    new BMapGL.Point(pEnd.lng, pStart.lat));
    // 创建地面叠加层实例
    var imgOverlay = new BMapGL.GroundOverlay(bounds, {
        type: 'canvas',
        url: getCanvas(),
        opacity: 0.8
    });
    // 叠加层添加到地图
    map.addOverlay(imgOverlay);
}
// Grid 辅助开发可视化模块
/**
 * 绘制栅格格网线用于辅助开发
 * @param GridMBR - 网格范围
 * @param rows - 行数
 * @param cols - 列数
 * @param map - 百度地图实例
 * @param style - 网格线样式
 * @param IsLabel - 是否绘制标注
 */
export function drawGridLines2BLMap (GridMBR: MBR, rows: number, cols: number, map: any, style: Object = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5},
    IsLabel: boolean = false
) {
    // 根据网格范围和行列数计算网格线
    let minLon = GridMBR[0];
    let minLat = GridMBR[1];
    let maxLon = GridMBR[2];
    let maxLat = GridMBR[3];
    let lonStep = (maxLon - minLon) / cols;

    // 绘制经线
    for (let i = 0; i < cols + 1; i++) {
        let lon = minLon + i * lonStep;
        let line = [
            [lon, minLat],
            [lon, maxLat]
        ];
        drawLineString2BLMap(line, map, style);
    }

    let latStep = (maxLat - minLat) / rows;
    // 绘制纬线
    for (let i = 0; i < rows + 1; i++) {
        let lat = minLat + i * latStep;
        let line = [
            [minLon, lat],
            [maxLon, lat]
        ];
        drawLineString2BLMap(line, map, style);
    }
    // 绘制网格范围
    drawRectangle2BLMap(GridMBR, map);

    if(IsLabel){
            // 为提升性能 每间隔十个网格绘制一个标注
            // 但是标注仍然按照顺序 不满足的需要跳过
            let step = 10;
            for (let i = 0; i < rows; i+=step) {
                let lat = minLat + (i + 0.5) * latStep;
                for (let j = 0; j < cols; j+=step) {
                    let lon = minLon + (j + 0.5) * lonStep;
                    let point = [lon, lat] as [number, number];
                    drawLabel(point, `(${i},${j})`, map);
                }
            }
    }

}

/**
 * 递归绘制四叉树边界矩形
 */
export function drawQuadTree2BLMap(quadTree: QuadTree, map: any, style: Object = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.4},IsPlane:boolean = false) {
    // 若需要绘制平面坐标系的四叉树

    // let boundary = quadTree.boundary;
    let boundary = IsPlane ? quadTree.boundary : plane2MBR(quadTree.boundary)

    let minLon = boundary[0];
    let minLat = boundary[1];
    let maxLon = boundary[2];
    let maxLat = boundary[3];
    let rect = [
        [minLon, minLat],
        [maxLon, minLat],
        [maxLon, maxLat],
        [minLon, maxLat],
        [minLon, minLat]
    ] as [number, number][];

    drawLineString2BLMap(rect, map, style);
    if (quadTree.northWest) {
        // let style = { strokeColor: "red", strokeWeight: 2, strokeOpacity: 0.5}
        drawQuadTree2BLMap(quadTree.northWest, map, style);
        // // draw point for test
        // let pol = quadTree.northWest.pointsList;
        // // console.log(pol);
        // if(pol){
        //     for(let i = 0; i < pol.length; i++){
        //         // console.log(pol[i]);
        //         drawPoint2BLMap(pol[i],map,innerIcon(1));
        //     }
        // }
    }
    if (quadTree.northEast) {
        // let style = { strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5}
        drawQuadTree2BLMap(quadTree.northEast, map, style);
        // // draw point for test
        // let pol = quadTree.northEast.pointsList;
        // // console.log(pol);
        // if(pol){
        //     for(let i = 0; i < pol.length; i++){
        //         // console.log(pol[i]);
        //         drawPoint2BLMap(pol[i],map,innerIcon(3));
        //     }
        // }
    }
    if (quadTree.southWest) {
        // let style = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5}
        drawQuadTree2BLMap(quadTree.southWest, map, style);
    }
    if (quadTree.southEast) {
        // let style = { strokeColor: "yellow", strokeWeight: 2, strokeOpacity: 0.5}
        drawQuadTree2BLMap(quadTree.southEast, map, style);
    }
}



// /**
//  * 绘制网格线到百度地图
//  * @param grid - 网格
//  * @param map - 百度地图实例
//  * @param style - 网格线样式
//  */
// export function drawGrid2BLMap(grid: any, map: any, style: Object = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5}) {
//     let blPoints = [];
//     for (let i = 0; i < grid.length; i++) {
//         blPoints.push(new BMapGL.Point(grid[i][0], grid[i][1]));
//     }
//     let polyline = new BMapGL.Polyline(blPoints, style);   //创建折线
//     map.addOverlay(polyline);   //增加折线
// }

// 绘制圆形
/**
 * 	var circle = new BMapGL.Circle(point,500,{strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5}); //创建圆
 */
export function drawCircle2BLMap(center: Point | [lon: number, lat: number], radius: number, map: any, style: Object = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5}) {
    let blPoint = Point.isPoint(center) ? new BMapGL.Point(center.lon, center.lat) : new BMapGL.Point(center[0], center[1]);
    let circle = new BMapGL.Circle(blPoint, radius, style); //创建圆
    map.addOverlay(circle);   //增加圆
}

export function drawPlanePoint2BLMap(point: [X: number, Y: number], map: any, icon?: any) {
    // 首先转换回经纬度坐标
    let lonlat = convertToWgs84(point);
    drawPoint2BLMap(lonlat, map, icon);
}

export function drawPlaneMPS2BLMap(points: [X: number, Y: number][], map: any,icon?: any) {
    for(let i = 0; i < points.length; i++){
        drawPlanePoint2BLMap(points[i],map,icon);
    }
}

export function drawPlaneMBR2BLMap(MBR: [minX: number, minY: number, maxX: number, maxY: number], map: any, style: Object = { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5}) {
    let points = plane2MBR(MBR);
    drawRectangle2BLMap(points, map, style);
}
