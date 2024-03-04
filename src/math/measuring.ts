import { D2R } from "./factors";

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

    // for (let i = 0; i < len; i++) {
    //     let j = (i + 1) % len; // 下一个点

    //     if(coordinates[i][1] == coordinates[j][1]){
    //         area += (coordinates[j][0] - coordinates[i][0]) * Math.sin(coordinates[i][1]);
    //     }else{
    //         area -= 
    //             ((coordinates[j][0] - coordinates[i][0]) / (coordinates[j][1] - coordinates[i][1])) * 
    //             ( Math.cos(coordinates[j][1]) - coordinates[i][1] );
    //     }
    // }

    for (let i = 0; i < len; i++) {
        let j = (i + 1) % len;
        let k = (i + 2) % len;
        area += (coordinates[i][0] - coordinates[k][0]) * Math.sin(coordinates[j][1]);
    }
   
    area *= RADIUS * RADIUS / 2;

    return Math.abs(area);
}
