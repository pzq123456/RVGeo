/**
 * Coverage 栅格数据模块
 */
import { MBR } from "./Geometry";
/**
 * 网格类（本质是三维数组）:
 * - 三维数组的每一层代表一个波段
 * - 其中一层为一个二维数组，代表一个波段的值，并与对应的 MBR 对象关联用于挂接地图上的位置
 * - MBR 统一使用 `WGS84` 坐标系
 */

export class Grid{
    MBR: MBR;
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
     * 由外部经纬度坐标获取网格范围，行列号索引表示
     * - 若外部坐标不在网格范围内，则返回 null
     * - 若外部坐标在网格范围内，则返回行列号索引表示的网格范围
     * - *若二者有交集，则返回交集部分的行列号索引表示的网格范围
     * @param MBR - 外部经纬度坐标
     */
    ConvertToGridMBR(MBR: MBR): MBR | null{
        // TODO
        return null;
    }
}