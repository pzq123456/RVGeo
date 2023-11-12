/**
 * - Computational geometry utilities
 * - 计算几何工具
 */

// 平面 计算几何 部分
import { MBR, mbrToPolygon } from "./Geometry";
import { convertToMercator, convertToWgs84 } from "./Referencing";
import { ccw } from "./constants/Utils";

/**
 * 二维向量叉积
 * @param a - 二维向量(x1,y1)
 * @param b - 二维向量(x2,y2)
 * @returns {number} - 有向面积（有正负）
 */
export function cross(a: [number,number], b: [number,number]): number {
  return a[0] * b[1] - b[0] * a[1];
} 

/**
 * 二维向量点积 a 在 b 上的投影长度
 * @param a - 二维向量(x1,y1)
 * @param b - 二维向量(x2,y2)
 * @returns 
 */
export function dot(a: [number,number], b: [number,number]): number {
    return a[0] * b[0] + a[1] * b[1];
}


/**
 * （默认线段求交）内含投影的线段求交函数（计算开销大）
 * @param p1 - 二维向量(x1,y1) 默认认为`经纬度坐标`
 * @param p2 - 二维向量(x2,y2) 默认认为`经纬度坐标`
 * @param p3 - 二维向量(x3,y3) 默认认为`经纬度坐标`
 * @param p4 - 二维向量(x4,y4) 默认认为`经纬度坐标`
 * @param projectionFrom - 投影函数 （在求交之前对输入点投影） 默认为 convertToMercator
 * @param projectionTo - 投影函数 (在求交之后对输出点投影) 默认为 convertToWgs84
 * @param isInfine - 是否视作无穷线段 默认为 false 有限线段
 * @returns {[number,number] | null} - 交点 或 null
 */
export function intersection(
    p1: [number,number], // 第一条线段的起点 
    p2: [number,number], // 第一条线段的终点
    p3: [number,number], // 第二条线段的起点
    p4: [number,number], // 第二条线段的终点
    projectionFrom = convertToMercator, // 投影函数 （在求交之前对输入点投影）
    projectionTo  = convertToWgs84, // 投影函数 (在求交之后对输出点投影)
    isInfine = false, // 是否视作无穷线段 默认为 false 有限线段
): [number,number] | null {

    // 若有投影函数，则对输入点进行投影
    if (projectionFrom) {
        p1 = projectionFrom(p1);
        p2 = projectionFrom(p2);
        p3 = projectionFrom(p3);
        p4 = projectionFrom(p4);
    }


    // 首先计算两条线段的向量
    let v1 = [p2[0] - p1[0], p2[1] - p1[1]] as [number,number];
    let v2 = [p4[0] - p3[0], p4[1] - p3[1]] as [number,number];
    // 将 v1 声明为 []
    // 计算向量叉积
    let det = cross(v1, v2);

    // 如果叉积为 0，说明两条线段平行或共线
    if (det === 0) {
        console.log("两条线段平行或共线");
        return null;
    }
    // 计算交点
    let t1 = cross([p3[0] - p1[0], p3[1] - p1[1]], v2) / det;
    let t2 = cross([p3[0] - p1[0], p3[1] - p1[1]], v1) / det;

    if(!isInfine) {
        // 如果交点不在两条线段上，返回 null
        if (t1 < 0 || t1 > 1 || t2 < 0 || t2 > 1) {
            console.log("交点不在两条线段上");
            return null;
        }
    }

    // 若有投影函数，则对输出点进行投影
    if (projectionTo) {
        return projectionTo([p1[0] + v1[0] * t1, p1[1] + v1[1] * t1]);
    }
    
    // 返回交点
    return [p1[0] + v1[0] * t1, p1[1] + v1[1] * t1];
}

/**
 * 判断点是否在 MBR 外（平面与经纬度坐标通用，多边形边界算作在内）
 * determine if a point is outside of a MBR (polygon boundary is considered inside)
 * @param point - [x,y]
 * @param mbr - [minx,miny,maxx,maxy]
 * @param isPlane - 是否需要转换成平面坐标系再进行判断
 * @returns {boolean} - true if the point is outside of the MBR
 * - 如果点在 MBR 外，返回 true
 */
export function PointOutsideMBR(point: [number,number], mbr: MBR, isPlane=false): boolean {
    if(isPlane){
        // convertToMercators()
        let merPoint = convertToMercator(point);
        let minx = mbr[0];
        let miny = mbr[1];
        let maxx = mbr[2];
        let maxy = mbr[3];

        [minx,miny] = convertToMercator([minx,miny]);
        [maxx,maxy] = convertToMercator([maxx,maxy]);

        if (merPoint[0] < minx || merPoint[0] > maxx || merPoint[1] < miny || merPoint[1] > maxy) {
            return true;
        }
        return false;
    }else{
        let minx = mbr[0];
        let miny = mbr[1];
        let maxx = mbr[2];
        let maxy = mbr[3];
    
        if (point[0] < minx || point[0] > maxx || point[1] < miny || point[1] > maxy) {
            return true;
        }
        return false;
    }
}

/**
 * 判断两个 MBR 是否相交 返回 true 或 false
 * @param mbr1 - [minx,miny,maxx,maxy]
 * @param mbr2 - [minx,miny,maxx,maxy]
 * @returns {boolean} - true if the two MBRs intersect
 * - 如果两个 MBR 相交，返回 true
 * - 如果两个 MBR 相离，返回 false
 */
export function MBRIntersectMBR(mbr1: MBR, mbr2: MBR): boolean {
    return !(mbr1[0] > mbr2[2] || mbr1[2] < mbr2[0] || mbr1[1] > mbr2[3] || mbr1[3] < mbr2[1]);
}



/**
 * 使用 MBR 裁剪多边形
 * @param polygon - 多边形 [[x1,y1],[x2,y2],...
 * @param mbr - MBR [minx,miny,maxx,maxy]
 * @returns {Array | null} - 裁剪后的多边形 或 null （若多边形与 MBR 相离）
 */
export function cutPolygonByMBR(polygon: [number,number][],mbr: MBR): [number,number][] | null {
    return intersectionPolygon(polygon, mbrToPolygon(mbr));
}

// TODO: 实现 Sutherland-Hodgman 算法计算多边形与多边形的交集
/**
 * 使用 Sutherland-Hodgman 算法计算多边形与多边形的交集
 * @param clipPolygon 
 * @param subjectPolygon 
 */
export function intersectionPolygon(clipPolygon: [number,number][], subjectPolygon: [number,number][]): [number,number][] {
    let cp1 = clipPolygon[clipPolygon.length - 1]; // clipPolygon 的最后一个点
    let cp2 : [number, number]; // clipPolygon 的当前点
    let s : [number, number]; // subjectPolygon 的当前点
    let e : [number, number]; // subjectPolygon 的下一个点
    let outputList = subjectPolygon; // 输出多边形

    for(let i in clipPolygon) {
        cp2 = clipPolygon[i];
        let inputList = outputList;
        outputList = [];
        s = inputList[inputList.length - 1]; // subjectPolygon 的最后一个点
        for(let j in inputList) {
            e = inputList[j];
            if(pointInEdge(e, cp1, cp2)) {
                if(!pointInEdge(s, cp1, cp2)) {
                    let tmp  = intersection(s, e, cp1, cp2,
                        convertToMercator,convertToWgs84,true) as [number,number];
                    // 声明 
                    outputList.push(tmp);
                }
                outputList.push(e);
            } else if(pointInEdge(s, cp1, cp2)) {
                let tmp  = intersection(s, e, cp1, cp2,
                    convertToMercator,convertToWgs84,true) as [number,number];
                // 声明
                outputList.push(tmp);
            }
            s = e;
        }
        cp1 = cp2;
    }
    return outputList;
}

/**
 * 判断点是否在简单多边形内部（平面与经纬度坐标通用，多边形边界算作在内）
 * @param point - [lon,lat]
 * @param polygon - [[lon,lat],[lon,lat],...] （不含空洞）
 * @returns - true if the point is inside the polygon
 */
export function PointInsidePolygon(point: [number,number], polygon: [number,number][]): boolean {
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        if (((polygon[i][1] > point[1]) != (polygon[j][1] > point[1])) &&
            (point[0] < (polygon[j][0] - polygon[i][0]) * (point[1] - polygon[i][1]) / (polygon[j][1] - polygon[i][1]) + polygon[i][0])) {
            inside = !inside;
        }
    }
    return inside;
}

/**
 * 计算多边形的 MBR
 * @param clipPolygon
 * @returns {MBR}
 */
export function calculateMBR(clipPolygon: [number,number][]): MBR {
    let minx = Infinity;
    let miny = Infinity;
    let maxx = -Infinity;
    let maxy = -Infinity;
    for (let i = 0; i < clipPolygon.length; i++) {
        let point = clipPolygon[i];
        if (point[0] < minx) minx = point[0];
        if (point[0] > maxx) maxx = point[0];
        if (point[1] < miny) miny = point[1];
        if (point[1] > maxy) maxy = point[1];
    }
    return [minx, miny, maxx, maxy];
}

/**
 * 迭代访问多边形的边（不重复访问）
 * @param polygon - 多边形 [[x1,y1],[x2,y2],...
 * @param callback - 回调函数
 */
export function iterPolygonEdge(polygon: [number,number][], callback: (p1: [number,number], p2: [number,number]) => void): void {
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        callback(polygon[i], polygon[j]);
    }
}

/**
 * 返回多边形中 输入索引的前一个点的索引 多边形闭合并按照逆时针方向排列
 * @param index - 索引
 * @param polygon - 多边形 [[x1,y1],[x2,y2],...
 */
export function prePointInPolygon(
    index: number,
    polygonLength: number,
){
    /**
     * polygon: [0,1,2,3,4,5,6,7]
     * input: 0
     * output: 7
     * input: 1
     * output: 0
     */
    return (index - 1 + polygonLength) % polygonLength;
}

/**
 * （前提：逆时针多边形的边）判断点是否在当前边的内部(也就是边前进方向的左侧)
 * @param point - 点 [x,y]
 * @param p1 - 边的起点 [x,y]
 * @param p2 - 边的终点 [x,y]
 * @returns 
 */
export function pointInEdge(point: [number,number], p1: [number,number], p2: [number,number]): boolean {
    // ccw(p1, p2, point) > 0;
    return ccw(p1, p2, point) > 0;
}