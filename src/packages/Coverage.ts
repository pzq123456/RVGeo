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
     * - 建议：先使用 `ConvertToGridMBR` 方法获取网格范围，再使用本方法获取网格数据（为简化代码，没有将这两个方法合并）
     * @param GridMBR - 网格范围 行列号索引表示
     * @param band - 波段号数组
     * @returns - 返回网格数据，格式为：[band][row][col]
     */
    getSubGrid(GridMBR: MBR, band: number[] = [0]): number[][][]{
        // 由输入的行列号范围提取网格数据，可以指定行列号范围及波段号
        let minRow = GridMBR[0];
        let minCol = GridMBR[1];
        let maxRow = GridMBR[2];
        let maxCol = GridMBR[3];
        let subGrid = [];
        for(let b of band){
            let bandData = [];
            for(let row = minRow; row <= maxRow; row++){
                let rowData = [];
                for(let col = minCol; col <= maxCol; col++){
                    rowData.push(this.data[b][row][col]);
                }
                bandData.push(rowData);
            }
            subGrid.push(bandData);
        }
        return subGrid;
    }

    /**
     * 由外部经纬度坐标获取网格范围，行列号索引表示（只有全部在栅格范围内才会正常得到结果）
     * - 若外部坐标不全部在网格范围内，则返回 null
     * @param MBR - 网格行列号范围
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
            return null; // 不在网格范围内 则返回 null
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

    /**
     * 获取指定波段的最大值、最小值、平均值
     * @param band - 波段号
     */
    getBandStatistics(band: number): {max: number, min: number, mean: number}{
        let bandData = this.data[band];
        let max = bandData[0][0];
        let min = bandData[0][0];
        let sum = 0;
        for(let row = 0; row < this.rows; row++){
            for(let col = 0; col < this.cols; col++){
                let value = bandData[row][col];
                if(value > max){
                    max = value;
                }
                if(value < min){
                    min = value;
                }
                sum += value;
            }
        }
        let mean = sum / (this.rows * this.cols);
        return {
            max,
            min,
            mean
        };
    }
}

