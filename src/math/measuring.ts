import { D2R } from "./factors";
import { cartesian, spherical, cartesianCross,cartesianNormalize, cartesianScale, cartesianAngle } from "./vector";
/**
 * 与球面相关的测量方法
 */

/**
 * - 使用格林公式及球面积分直接计算球面多边形的面积
 * - calculate the area of a spherical polygon using the spherical excess method
 * @see http://home.ustc.edu.cn/~liujunyan/blog/Area-and-center-of-spherical-polygon/
 * @param points - 可以为点类型数组、LineString 类型或者二维数组（需要为经纬度坐标系下）
 * @param RADIUS - 半径（默认为 1）
 * @returns {number} - 面积
 */
export function sphericalArea(points: [number, number][], RADIUS: number = 1) : number{
    // 首先统一为二维数组
    let coordinates = points.slice();

    // 判断数组长度
    if (coordinates.length < 3) {
        return 0;
    }

    let area = 0;
    let len = coordinates.length;
    coordinates.forEach((point, index) => {
        coordinates[index] = point.map((value) => value * D2R) as [number, number];
    });

    for (let i = 0; i < len; i++) {
        let j = (i + 1) % len;
        let k = (i + 2) % len;
        area += (coordinates[i][0] - coordinates[k][0]) * Math.sin(coordinates[j][1]);
    }
   
    area *= RADIUS * RADIUS / 2;
    return Math.abs(area);
}

/**
 * 使用 haversine 公式计算球面两点之间的距离
 * @param latlng1 
 * @param latlng2 
 * @param {number} R - 球体半径
 * @returns 
 */
export function haversine(latlng1: [number, number], latlng2: [number, number], R:number = 1) : number {
    let rad = Math.PI / 180,
    lat1 = latlng1[0] * rad,
    lat2 = latlng2[0] * rad,
    sinDLat = Math.sin((latlng2[0] - latlng1[0]) * rad / 2),
    sinDLon = Math.sin((latlng2[1] - latlng1[1]) * rad / 2),
    a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon,
    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

export function bearing(latlng1: [number, number], latlng2: [number, number]) : number {

    let lat1 = latlng1[0] * D2R,
        lat2 = latlng2[0] * D2R,
        lon1 = latlng1[1] * D2R,
        lon2 = latlng2[1] * D2R;

    const y = Math.sin(lon2 - lon1) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) - 
              Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
    const θ = Math.atan2(y, x);

    return (θ * 180 / Math.PI + 360) % 360;
}

export function midpoint(latlng1: [number, number], latlng2: [number, number]) : [number, number] {
    let lat1 = latlng1[0] * D2R,
        lon1 = latlng1[1] * D2R,
        lat2 = latlng2[0] * D2R,
        lon2 = latlng2[1] * D2R;

    const Bx = Math.cos(lat2) * Math.cos(lon2 - lon1);
    const By = Math.cos(lat2) * Math.sin(lon2 - lon1);
    const lat3 = Math.atan2(Math.sin(lat1) + Math.sin(lat2),
                          Math.sqrt( (Math.cos(lat1)+Bx)*(Math.cos(lat1)+Bx) + By*By ) );
    const lon3 = lon1 + Math.atan2(By, Math.cos(lat1) + Bx);
    return [lat3 / D2R, lon3 / D2R];

}

/**
 * An intermediate point at any fraction along the great circle path between two points
 * @param latlng1 
 * @param latlng2 
 * @param fraction - f is fraction along great circle route (f=0 is point 1, f=1 is point 2)
 * @returns 
 */
export function intermediatePoint(latlng1: [number, number], latlng2: [number, number], fraction: number) : [number, number] {
    let lat1 = latlng1[0] * D2R,
        lon1 = latlng1[1] * D2R,
        lat2 = latlng2[0] * D2R,
        lon2 = latlng2[1] * D2R,
        δ = haversine(latlng1, latlng2);

    const a = Math.sin((1-fraction) * δ) / Math.sin(δ);
    const b = Math.sin(fraction * δ) / Math.sin(δ);
    const x = a * Math.cos(lat1) * Math.cos(lon1) + b * Math.cos(lat2) * Math.cos(lon2);
    const y = a * Math.cos(lat1) * Math.sin(lon1) + b * Math.cos(lat2) * Math.sin(lon2);
    const z = a * Math.sin(lat1) + b * Math.sin(lat2);
    const φ = Math.atan2(z, Math.sqrt(x*x + y*y));
    const λ = Math.atan2(y, x);
    return [φ / D2R, λ / D2R];
}

/**
 * 求解两条球面线段的交点
 * - Given two lines on a sphere, this will return their intersection point.
 * @param latlng11 
 * @param latlng12 
 * @param latlng21 
 * @param latlng22 
 * @returns - 返回弧度制的交点坐标[lat, lon]
 * @example
 * intersection([0, 0], [0, 90], [0, 45], [90, 45]); // [1.5707963267948966, 0]
 * // you need to convert the result to degrees if you want to use it in degrees
 * intersection([0, 0], [0, 90], [0, 45], [90, 45]).map(x => x * 180 / Math.PI); // [90, 0]
 */
export function intersection(latlng11: [number, number], latlng12: [number, number], 
    latlng21: [number, number], latlng22: [number, number]) : [number, number] {
        // ,R: number = 1
        // Convert to 3D Cartesian coordinates
        const p11 = cartesian(latlng11);
        const p12 = cartesian(latlng12);
        const p21 = cartesian(latlng21);
        const p22 = cartesian(latlng22);

        // cartesianCross product of the two lines
        const n1 = cartesianCross(p11, p12);
        const n2 = cartesianCross(p21, p22);

        // cartesianCross product of n1 and n2
        const l = cartesianCross(n1, n2);

        // normalize the vector
        const I1 = cartesianNormalize(l);
        const I2 = cartesianScale(I1, -1);

        if (check(I2, p11, p12)) {
            return spherical(I2);
        }
        if (check(I2, p21, p22)) {
            return spherical(I2);
        }

        if (check(I1, p11, p12)) {
            return spherical(I1);
        }
        if (check(I1, p21, p22)) {
            return spherical(I1);
        }

        return [0, 0];
  

        function check(I: [number, number, number], Ps: [number, number, number], Pe: [number, number, number]) : boolean {
            const a1 = cartesianAngle(Ps,I);
            const a2 = cartesianAngle(Pe,I);
            const a3 = cartesianAngle(Ps, Pe);
            return Math.abs(a1 + a2 - a3) < 1e-6;
        }
    }

/**
 * Given a start point, initial bearing, and distance, 
 * - this will calculate the destina­tion point and final bearing travelling along a (shortest distance) great circle arc.
 * @param latlng1 
 * @param brng 
 * @param distance 
 * @returns 
 */
export function destination(latlng1: [number, number], brng: number, distance: number) : [number, number] {
    let lat1 = latlng1[0] * D2R,
        lon1 = latlng1[1] * D2R,
        θ = brng * D2R,
        R = 6378137.0;

    const φ2 = Math.asin( Math.sin(lat1)*Math.cos(distance/R) + 
                          Math.cos(lat1)*Math.sin(distance/R)*Math.cos(θ) );
    const λ2 = lon1 + Math.atan2(Math.sin(θ)*Math.sin(distance/R)*Math.cos(lat1), 
                                 Math.cos(distance/R)-Math.sin(lat1)*Math.sin(φ2));
    return [φ2 / D2R, λ2 / D2R];
}