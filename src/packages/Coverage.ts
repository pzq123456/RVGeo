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
    constructor(MBR: MBR, data: number[][][]){
        this.MBR = MBR;
        this.data = data;
        this.shape = [data.length, data[0].length, data[0][0].length];
    }

    getShape(){
        return [this.data.length, this.data[0].length, this.data[0][0].length];
    }
}