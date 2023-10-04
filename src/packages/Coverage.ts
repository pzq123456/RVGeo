/**
 * Coverage 栅格数据模块
 */
import { MBR } from "./Geometry";
import { PointOutsideMBR } from "./CGUtils";

/**
 * 网格类（本质是三维数组）:
 * - 三维数组的每一层代表一个波段
 * - 其中一层为一个二维数组，代表一个波段的值，并与对应的 MBR 对象关联用于挂接地图上的位置
 * - MBR 统一使用 `WGS84` 坐标系
 */

export class Grid{
    MBR: MBR; // [minLon, minLat, maxLon, maxLat]
    data: number[][][]; // 三维数组
    shape: number[]; // 三维数组的形状
    rows: number;  // 行数
    cols: number;  // 列数
    bands: number; // 波段数
    constructor(MBR: MBR, data: number[][][]){
        this.MBR = MBR;
        this.data = data;
        this.shape = [data.length, data[0].length, data[0][0].length];
        [this.bands, this.rows, this.cols] = this.shape;
    }
    getShape(){
        return [this.data.length, this.data[0].length, this.data[0][0].length];
    }

    /**
     * 获取指定范围，指定波段的网格数据
     * @param GridMBR - 网格范围 行列号索引表示
     * @param band - 波段号
     */
    getSubGrid(GridMBR: MBR, band: number = 0){
    }

    /**
     * 由外部经纬度坐标获取网格范围，行列号索引表示（只有全部在栅格范围内才会正常得到结果）
     * - 若外部坐标不全部在网格范围内，则返回 null
     * @param MBR - 外部经纬度坐标
     */
    ConvertToGridMBR(MBR: MBR): MBR | null{
        // 将四个角点计算行列号索引
        let minLon = MBR[0];
        let minLat = MBR[1];
        let maxLon = MBR[2];
        let maxLat = MBR[3];
        let minCoord = this.getGridCoord([minLon, minLat]);
        let maxCoord = this.getGridCoord([maxLon, maxLat]);
        // 判断是否全部在网格范围内
        if(minCoord === null || maxCoord === null){
            return null;
        }else{
            // 计算网格范围
            let minRow = minCoord[0];
            let minCol = minCoord[1];
            let maxRow = maxCoord[0];
            let maxCol = maxCoord[1];
            return [minRow, minCol, maxRow, maxCol];
        }
    }

    /**
     * 计算输入点的网格坐标（整数行列号坐标）
     * @param Point - 输入点坐标，格式为：[lon, lat]
     * @returns {[number,number] | null} - 返回网格坐标，格式为：[row, col] 若输入点不在网格范围内，则返回 null
     */
    getGridCoord(Point: [number,number]): [number,number] | null{
        // 首先判断输入点是否在网格范围内
        if(PointOutsideMBR(Point, this.MBR)){
            return null;
        }else{
            // 否则根据行列号索引计算网格坐标
            let lon = Point[0];
            let lat = Point[1];
            let minLon = this.MBR[0];
            let minLat = this.MBR[1];
            let maxLon = this.MBR[2];
            let maxLat = this.MBR[3];
            let row = Math.floor((lat - minLat) / (maxLat - minLat) * this.rows);
            let col = Math.floor((lon - minLon) / (maxLon - minLon) * this.cols);
            return [row,col];
        }
    }

    /**
     * 由行列号反算经纬度坐标（栅格中心点）
     * @param GridCoord - 网格坐标，格式为：[row, col]
     * @returns - 返回经纬度坐标，格式为：[lon, lat]
     */
    getCoordByGridCoord(GridCoord: [number,number]): [number,number]{
        let row = GridCoord[0];
        let col = GridCoord[1];
        let minLon = this.MBR[0];
        let minLat = this.MBR[1];
        let maxLon = this.MBR[2];
        let maxLat = this.MBR[3];
        let lon = (col + 0.5) / this.cols * (maxLon - minLon) + minLon;
        let lat = (row + 0.5) / this.rows * (maxLat - minLat) + minLat;
        return [lon, lat];
    }
}