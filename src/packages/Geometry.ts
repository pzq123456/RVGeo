/**
 * 该模块中的是内置的 geometry 对象（存储的坐标全部为 WGS 84 经纬度坐标）
 * @see http://geojson.io/
 * 地理要素分为Point（点）、MultiPoint（多点）、LineString（线）、MultiLineString（多线）、Polygon（面）、MultiPolygon（多面）、GeometryCollection（几何集合）
 */

/**
 * 点类型
 * - 坐标为经纬度 (WGS 84)
 */
export class Point{
    lon: number; // 经度
    lat: number; // 维度
    asl: number; // 海拔高度 需要参考大地水准面
    properties: any[]; // 属性信息

    constructor(lon: number, lat: number, asl: number = 0, ...args: any[]){
        this.lon = lon;
        this.lat = lat;
        this.asl = asl;
        this.properties = args; // 属性信息 （含任意类型的列表）
    }

    toGeoJSON(){        
        return {
            type: "Point",
            coordinates: [this.lon, this.lat, this.asl],
            properties:{
                ...this.properties // 将属性信息转换为 GeoJSON 格式
            }
        }
    }
}

