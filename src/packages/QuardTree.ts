// https://www.youtube.com/watch?v=OJxEcs0w_kE
/**
 * 四叉树模块（用于支持简单的空间索引，加速计算）
 */
import { MBR } from "./Geometry"; 
// 支持不同坐标系的关键点： contains 函数，该函数负责判断一个点是否在当前节点的范围内，将其设计为插件形式，方便扩展
class QuardNode{
    private _mbr: MBR;
    private _points: any[];

}
// class QuardTree{

// }