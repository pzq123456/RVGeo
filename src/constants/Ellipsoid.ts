/**
 * Sphere Parameter 
 * - Static data used to describe the shape of the sphere.
 * - 球面参数(静态数据，用于描述球面的形状)
 * @see https://epsg.io/4326
 */

/**
 * @description
 * - Ellipsoid Name
 * - 椭球名称
 */
export enum EllipsoidName {
    WGS84 = "WGS84",
    sphere = "sphere",
}

/**
 * @description
 * - WGS84 Ellipsoid
 * - WGS84椭球 
 * - EPSG:3857
 */
export const WGS84 = {
    a: 6378137.0,  // 长半轴
    rf: 298.257223563,  // 扁率的倒数
    Name: "WGS 84", // WGS84椭球
    EPSG: 4326 // EPSG:4326
};


/**
 * 正球参数
 */
export const sphere = {
    a: 6378137.0,  // 长半轴
    b: 6371008.8, // 短半轴
    Name: "Normal Sphere ( r= 6371008.8 )"  // 正球
};
