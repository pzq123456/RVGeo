/**
 * 该模块中的是内置的 geometry 对象（存储的坐标全部为 WGS 84 经纬度坐标）
 * @see http://geojson.io/
 * 地理要素分为Point（点）、MultiPoint（多点）、LineString（线）、MultiLineString（多线）、Polygon（面）、MultiPolygon（多面）、GeometryCollection（几何集合）
 * - 该模块的目的就是为了方便操作这些地理要素
 */
import { convertToMercator } from "./Referencing";
import { Units } from "./constants/Units";
import { getAngle } from "./constants/Utils";

// define MBR type
/**
 * 最小外包矩形 (Minimum Bounding Rectangle)
 * - [minLon, minLat, maxLon, maxLat]
 * - 坐标出现的顺序是强制规定的，即 minLon, minLat, maxLon, maxLat 或 minX, minY, maxX, maxY
 * - 并没有严格规定必须为经纬度坐标，也可以是平面坐标
 */
export type MBR = [number, number, number, number]; // [minLon, minLat, maxLon, maxLat]
export type Rectangle = {
    x: number;
    y: number;
    w: number;
    h: number;
}

// MBR 转换为 Rectangle
export function mbrToRectangle(mbr: MBR): Rectangle {
    // x,y 为中心
    // w,h 为宽高
    return {
        x: (mbr[0] + mbr[2]) / 2,
        y: (mbr[1] + mbr[3]) / 2,
        w: mbr[2] - mbr[0],
        h: mbr[3] - mbr[1]
    }
}

// Rectangle 转换为 MBR
export function rectangleToMBR(rectangle: Rectangle): MBR {
    // x,y 为中心
    // w,h 为宽高
    return [
        rectangle.x - rectangle.w / 2,
        rectangle.y - rectangle.h / 2,
        rectangle.x + rectangle.w / 2,
        rectangle.y + rectangle.h / 2
    ]
}

/**
 * 快速点类型
 * - 用于点类型的信息交换
 */
export type quickPoint = [number, number]; // 快速点类型

/**
 * 将 MBR 转化为 逆时针方向的（简单）多边形数组
 * @param mbr 
 */
export function mbrToPolygon(mbr:MBR): [number,number][] {
    let minLon = mbr[0], minLat = mbr[1], maxLon = mbr[2], maxLat = mbr[3];
    return [
        [minLon, minLat],
        [minLon, maxLat],
        [maxLon, maxLat],
        [maxLon, minLat],
        [minLon, minLat]
    ];
}

/**
 * 计算多点的最小外包矩形
 * @param points - 多点
 * @returns {MBR} 返回最小外包矩形 [minLon, minLat, maxLon, maxLat]
 */
export function getPointsMBR(
    points: [number, number][]
): MBR{
    let minLon = Infinity, minLat = Infinity, maxLon = -Infinity, maxLat = -Infinity;
    for(let i = 0; i < points.length; i++){
        let lon = points[i][0];
        let lat = points[i][1];
        minLon = Math.min(minLon, lon);
        minLat = Math.min(minLat, lat);
        maxLon = Math.max(maxLon, lon);
        maxLat = Math.max(maxLat, lat);
    }
    return [minLon, minLat, maxLon, maxLat];
}

/**
 * 判断点是否在 MBR 内
 * @param point - 点
 * @param mbr - 最小外包矩形
 * @returns {boolean} 返回是否在 MBR 内 在则返回 true 不在则返回 false
 */
export function pointInMBR(
    point: [number, number],
    mbr: MBR) : boolean
{
    let minLon = mbr[0], minLat = mbr[1], maxLon = mbr[2], maxLat = mbr[3];
    let lon = point[0], lat = point[1];
    return lon >= minLon && lon <= maxLon && lat >= minLat && lat <= maxLat;
}

/**
 * 图形基类（抽象类）
 * - 该类定义了一些图形共有的方法及属性
 * @warning 该类为抽象类，不能直接实例化。在构造函数中会自动调用 calculateMBR() 方法计算最小外包矩形。内部数据变化时需要手动调用该方法更新最小外包矩形。
 * @warning 该类的子类需要实现 toGeoJSON()、toArray()、calculateMBR() 方法
 * @warning 这里的coordinates是一个数组，数组中的元素是包装了坐标的对象，而 GeoJSON 中的 coordinates 是一个数组，数组中的元素是坐标
 */
abstract class Geometry{
    type: string; // 类型 将其声明为公共属性 以便调用
    properties: any[]; // 属性信息
    MBR: [number, number, number, number]; // 最小外包矩形 (Minimum Bounding Rectangle)
    coordinates: any[]; // 注意这里的coordinates与 GeoJSON 中的意义不同
    /**
     * - 构造函数
     * - constructor
     * @warning 该类为抽象类，不能直接实例化。在构造函数中会自动调用 calculateMBR() 方法计算最小外包矩形。内部数据变化时需要手动调用该方法更新最小外包矩形。
     * @param type 类型
     * @param args 属性信息
     */
    constructor(type: string, coordinates: any[],...args: any[]){
        this.type = type;
        this.properties = args;
        this.coordinates = coordinates;
        this.MBR = this.calculateMBR(); // 计算最小外包矩形
    }

    abstract toGeoJSON(): any; // 转换为 GeoJSON 格式
    abstract toArray(): any[]; // 转换为数组（数列）形式
    abstract calculateMBR(): [number, number, number, number]; // 计算最小外包矩形 抽象函数需要每一个具体的类具体实现
    
    /**
     * - （不包含组成当前图形的底层图形的属性信息）获取（当前）图形的属性信息数组
     * - get properties array of geometry
     * @returns 返回属性信息数组
     */
    getPropertyArray(): any[] {
        return this.properties;
    }
    
    /**
     * - 获取图形的外包矩形
     * @returns 返回外包矩形 [minLon, minLat, maxLon, maxLat]
     */
    getMBR(): [number, number, number, number]{
        return this.MBR;
    }
}

/**
 * 点类型 point type
 * - 坐标为经纬度 (WGS 84)
 * - coordinate is longitude and latitude (WGS 84)
 * @example
 * ```ts
 * const point = new Point(116.46, 39.92, 0, "name", "21,893,095");
 * ```
 */
export class Point{
    lon: number; // 经度
    lat: number; // 维度
    asl: number; // 海拔高度 需要参考大地水准面
    type: string = "Point"; // 类型 对应 GeoJSON 格式
    properties: any[]; // 属性信息

    constructor(lon: number, lat: number, asl: number = 0, ...args: any[]){
        this.lon = lon;
        this.lat = lat;
        this.asl = asl;
        this.properties = args; // 属性信息 （含任意类型的列表）
    }

    /**
     * - 将点坐标转换为墨卡托坐标 EPSG:4326 -> EPSG:3857
     * - transform point to Mercator coordinate EPSG:4326 -> EPSG:3857
     * @returns {[number, number]} 返回墨卡托坐标 [x, y] 默认米为单位
     */
    toXY(unit: Units = "meters"): [number, number]{
        return convertToMercator(this, unit);
    }

    /**
     * - 将点转换为 GeoJSON 格式
     * - transform point to GeoJSON format
     * @returns 返回 GeoJSON 格式的点
     */
    toGeoJSON(){
        return {
            type: "Point",
            coordinates: [this.lon, this.lat],
            properties:{
                ...this.properties // 将属性信息转换为 GeoJSON 格式
            }
        }
    }

    /**
     * - 将点坐标转换为二维数组: `(lon, lat)`
     * - transform point to 2D array: `(lon, lat)`
     * @returns 返回二维数组
     */
    to2DArray(){
        return [this.lon, this.lat];
    }

    /**
    * - 将点坐标转换为三维数组: `(lon, lat, asl)`
    * - transform point to 3D array: `(lon, lat, asl)`
     * @returns 返回三维数组
     */
    to3DArray(){
        return [this.lon, this.lat, this.asl];
    }

    /**
     * - 将点坐标转换为字符串
     * - transform point to string
     * @returns 返回字符串
     */
    toString(){
        return `Point(${this.lon}, ${this.lat}, ${this.asl})`;
    }

    /**
     * - 获取点的属性信息数组
     * - get properties array of point
     * @returns 返回属性信息数组
     */
    getPropertyArray(): any[]{
        return this.properties;
    }

    static isPoint(point: any): point is Point{
        return point.type === "Point";
    }
}


/**
 * 多点类型 MultiPoint type
 * - 内部维护一个点列表 Point[]
 * - maintain a point list Point[] inside
 */
export class MultiPoint extends Geometry{
    /**
     * - 构造函数
     * @param points 点坐标数组
     * @param args 属性信息
     */
    constructor(points: Point[] | number[][], ...args: any[]){
        // 若传入的是二维数组 则转换为 Point 类型
        if(points[0] instanceof Array){
            // 声明类型 以便调用二维数组的方法
            points = points as number[][];
            let tmp = [];
            for(let i = 0; i < points.length; i++){
                tmp.push(new Point(points[i][0], points[i][1]));
            }
            points = tmp;
        }
        super("MultiPoint", points, ...args);
    }

    /**
     * 获取内部点的属性并以数组形式返回
     */
    getCorrinatesPropertyArray(): any[]{
        let res = [];
        for(let i = 0; i < this.coordinates.length; i++){
            let tmp = this.coordinates[i].getPropertyArray();
            res.push(tmp);
        }
        return res;
    }


    /**
     * - (仅包含坐标不包含属性)以数列形式返回内部点列表
     * - return array which wrappers all of the points in it
     */
    toArray(): [number,number][] {
        let res = [];
        for(let i = 0; i  < this.coordinates.length; i++){
            let tmp = this.coordinates[i].to2DArray();
            res.push(tmp);
        }
        return res;
    }

    /**
     * - 获得 墨卡托 投影下的平面坐标
     * - get Mercator coordinate
     * @returns 返回墨卡托坐标数组 [[x1, y1], [x2, y2], ...]
     */
    toXYArray(): [number,number][] {
        let res = [];
        for(let i = 0; i  < this.coordinates.length; i++){
            let tmp = this.coordinates[i].toXY();
            res.push(tmp);
        }
        return res;
    }

    /**
     * - 将多点转换为 GeoJSON 格式
     * - transform MultiPoint to GeoJSON format
     * @returns 返回 GeoJSON 格式的多点
     */
    toGeoJSON() {
        return {
            type: "MultiPoint",
            coordinates: this.toArray(),
            properties:{
                ...this.properties
            }
        }
    }

    /**
     * - 计算最小外包矩形
     * - calculate MBR
     * @returns 返回最小外包矩形 [minLon, minLat, maxLon, maxLat]
     */
    calculateMBR(): [number, number, number, number] {
        let minLon = Infinity, minLat = Infinity, maxLon = -Infinity, maxLat = -Infinity;
        for(let i = 0; i < this.coordinates.length; i++){
            let tmp = this.coordinates[i].to2DArray();
            minLon = Math.min(minLon, tmp[0]);
            minLat = Math.min(minLat, tmp[1]);
            maxLon = Math.max(maxLon, tmp[0]);
            maxLat = Math.max(maxLat, tmp[1]);
        }
        return [minLon, minLat, maxLon, maxLat];
    }

    /**
     * - 计算多点的重心
     * - calculate centroid of MultiPoint
     * @param values - 可指定权重数组(可选) 会首先归一化权重数组
     * @returns {Point} 返回重心坐标
     * @see https://en.wikipedia.org/wiki/Centroid
     */
    calculateCentroid(
        values?: number[]
    ): Point{
        // 若有权重数组 则归一化
        if(values){
            let sum = 0;
            for(let i = 0; i < values.length; i++){
                sum += values[i];
            }
            for(let i = 0; i < values.length; i++){
                values[i] /= sum;
            }

            let sumLon = 0, sumLat = 0;
            for(let i = 0; i < this.coordinates.length; i++){
                let tmp = this.coordinates[i].to2DArray();
                sumLon += tmp[0] * values[i];
                sumLat += tmp[1] * values[i];
            }
            let lon = sumLon;
            let lat = sumLat;

            return new Point(lon, lat);
        }else{
            let sumLon = 0, sumLat = 0;
            for(let i = 0; i < this.coordinates.length; i++){
                let tmp = this.coordinates[i].to2DArray();
                sumLon += tmp[0];
                sumLat += tmp[1];
            }
            let lon = sumLon / this.coordinates.length;
            let lat = sumLat / this.coordinates.length;
            return new Point(lon, lat);
        }
    }

    /**
     * - 删除指定索引的点
     * - delete point by index
     * @param index 索引
     */
    deletePoint(index: number){
        this.coordinates.splice(index, 1);
        this.MBR = this.calculateMBR();
    }

    /**
     * - 向尾部添加点
     * - add point
     * @param point 点 
     */
    addPoint(point: Point | [number, number]){
        let p = Point.isPoint(point) ? point : new Point(point[0], point[1]);
        this.coordinates.push(p);
        this.MBR = this.calculateMBR();
    }



    // 判断是否为多点类型
    static isMultiPoint(multiPoint: any): multiPoint is MultiPoint{
        return multiPoint.type === "MultiPoint";
    }
}

export class LineString extends MultiPoint{
    /**
     * - 构造函数
     * @param points 点坐标数组
     * @param args 属性信息
     */
    constructor(points: Point[], ...args: any[]){
        super(points, ...args);
        this.type = "LineString";
    }

    static isLineString(lineString: any): lineString is LineString{
        return lineString.type === "LineString";
    }

    /**
     * 按照逆时针方向排序点
     */
    sortPoints(){
        let centroid = this.calculateCentroid();
        let centroidXY = centroid.toXY();
        this.coordinates.sort((a, b) => {
            let angleA = getAngle(centroidXY, a.toXY());
            let angleB = getAngle(centroidXY, b.toXY());
            if(angleA < angleB){
                return -1;
            }else if(angleA > angleB){
                return 1;
            }else{
                return 0;
            }
        });
    }
}

export class MultiLineString extends Geometry{
    constructor(lines: LineString[], ...args: any[]){
        super("MultiLineString", lines, ...args);
    }
    /**
     * - 计算线集合的最小外包矩形
     * @returns {MBR} 返回最小外包矩形 [minLon, minLat, maxLon, maxLat]
     */
    calculateMBR(): [number, number, number, number] {
        let minLon = Infinity, minLat = Infinity, maxLon = -Infinity, maxLat = -Infinity;
        for(let i = 0; i < this.coordinates.length; i++){
            let tmp = this.coordinates[i].getMBR();
            minLon = Math.min(minLon, tmp[0]);
            minLat = Math.min(minLat, tmp[1]);
            maxLon = Math.max(maxLon, tmp[2]);
            maxLat = Math.max(maxLat, tmp[3]);
        }
        return [minLon, minLat, maxLon, maxLat];
    }
    /**
     * - 将多线转换为数组形式
     * - transform MultiLineString to array
     * @returns {any[]} 返回数组形式
     */
    toArray(): any[] {
        let res = [];
        for(let i = 0; i  < this.coordinates.length; i++){
            let tmp = this.coordinates[i].toArray();
            res.push(tmp);
        }
        return res;
    }
    /**
     * - 将多线转换为 GeoJSON 格式
     * - transform MultiLineString to GeoJSON format
     * @returns 
     */
    toGeoJSON() {
        return {
            type: "MultiLineString",
            coordinates: this.toArray(),
            properties:{
                ...this.properties
            }
        }
    }

    static isMultiLineString(multiLineString: any): multiLineString is MultiLineString{
        return multiLineString.type === "MultiLineString";
    }
    
}

/**
 * 一个有孔单面。这个数组的第一个元素表示的是外部环。其他后续的元素表示的内部环（或者孔）。
 * - A polygon is planar, and the boundary of a polygon is a closed LineString.
 * - polygon 中的所有环都是封闭的 LineString （环的第一个点和最后一个点是同一个点）
 * - polygon 中的所有环都是简单的（不相交）
 * - polygon 中的所有环都是平面的（共面的）
 * - polygon 中的所有环都是左手定则（外部环逆时针，内部环顺时针）
 */
export class Polygon extends MultiLineString{
    constructor(lines: LineString[], ...args: any[]){
        super(lines, ...args);
        this.type = "Polygon";
    }
    static isPolygon(polygon: any): polygon is Polygon{
        return polygon.type === "Polygon";
    }

}

/**
 * 平面图形：圆形
 */
export class Circle {
    x: number;
    y: number;
    r: number;
    rSquared: number;
    /**
     * 构造函数
     * @param x - 圆心 x 坐标 
     * @param y - 圆心 y 坐标
     * @param r - 半径
     */
    constructor(x: number, y: number, r: number) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.rSquared = this.r * this.r;
    }

    /**
     * 判断点是否在圆内
     * @param point - 点坐标
     * @param threshold - （默认为0）容差（用于修正计算误差）*建议根据实际情况手动调整
     * @returns {boolean} - true if the point is inside the circle
     */
    contains(point:quickPoint,threshold:number = 0) : boolean{
        // make it more robust
        let x = point[0];
        let y = point[1];
        return Math.pow((x - this.x), 2) + Math.pow((y - this.y), 2) - this.rSquared <= threshold;
    }

    /**
     * （仅平面下保证有效）判断圆是否与 MBR 相交
     * @param range - MBR
     * @returns {boolean} - true if the circle intersects the MBR
     */
    intersects(range: MBR): boolean {
        // convert MBR to Rectangle
        let rect = mbrToRectangle(range);

        let xDist = Math.abs(rect.x - this.x);
        let yDist = Math.abs(rect.y - this.y);

        // radius of the circle
        let r = this.r;

        let w = rect.w / 2;
        let h = rect.h / 2;

        let edges = Math.pow((xDist - w), 2) + Math.pow((yDist - h), 2);

        // no intersection
        if (xDist > (r + w) || yDist > (r + h))
        return false;

        // intersection within the circle
        if (xDist <= w || yDist <= h)
        return true;

        // intersection on the edge of the circle
        return edges <= this.rSquared;
    }
}
  

