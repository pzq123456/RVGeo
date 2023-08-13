/**
 * 该模块中的是内置的 geometry 对象（存储的坐标全部为 WGS 84 经纬度坐标）
 * @see http://geojson.io/
 * 地理要素分为Point（点）、MultiPoint（多点）、LineString（线）、MultiLineString（多线）、Polygon（面）、MultiPolygon（多面）、GeometryCollection（几何集合）
 * - 该模块的目的就是为了方便操作这些地理要素
 */

/**
 * 图形基类（抽象类）
 * - 该类定义了一些图形共有的方法及属性
 */
abstract class Geometry{
    type: string; // 类型
    properties: any[]; // 属性信息
    MBR: number[]; // 最小外包矩形 (Minimum Bounding Rectangle)
    coordinates: any[]; // 坐标信息

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
    abstract calculateMBR(): number[]; // 计算最小外包矩形 抽象函数需要每一个具体的类具体实现
    
    /**
     * - 获取（当前）图形的属性信息数组
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
    getMBR(): number[]{
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
     * - 将点转换为 GeoJSON 格式
     * - transform point to GeoJSON format
     * @returns 返回 GeoJSON 格式的点
     */
    toGeoJSON(){
        return {
            type: "Point",
            coordinates: [this.lon, this.lat, this.asl],
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
    constructor(points: Point[], ...args: any[]){
        super("MultiPoint", points, ...args);
    }

    /**
     * - 以数列形式返回内部点列表
     * - return array which wrappers all of the points in it
     */
    toArray(): number[][] {
        let res = [];
        for(let i = 0; i  < this.coordinates.length; i++){
            let tmp = this.coordinates[i].to2DArray();
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
    calculateMBR(): number[] {
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
     * - 删除指定索引的点
     * - delete point by index
     * @param index 索引
     */
    deletePoint(index: number){
        this.coordinates.splice(index, 1);
        this.MBR = this.calculateMBR();
    }

    /**
     * - 添加点
     * - add point
     * @param point 点 
     */
    addPoint(point: Point){
        this.coordinates.push(point);
        this.MBR = this.calculateMBR();
    }

}
