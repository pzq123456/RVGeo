// https://www.youtube.com/watch?v=OJxEcs0w_kE
// https://en.wikipedia.org/wiki/Quadtree
/**
 * 四叉树模块（用于支持简单的空间索引，加速计算）
 */
import { MBR, pointInMBR } from "./Geometry"; 
import { MBRIntersectMBR, PointOutsideMBR } from "./CGUtils";
// 支持不同坐标系的关键点： contains 函数，该函数负责判断一个点是否在当前节点的范围内，将其设计为插件形式，方便扩展
export class QuadTree{
    private capacity: number;
    boundary: MBR;
    private points: [number,number][]; // 三维数组，第一维是点的索引，第二维是点的坐标，第三维是点的属性
    northWest: QuadTree | null;
    northEast: QuadTree | null;
    southWest: QuadTree | null;
    southEast: QuadTree | null;
    private isDivided: boolean;

    constructor(boundary: MBR, capacity: number){
        this.capacity = capacity;
        this.boundary = boundary;
        this.points = [];
        this.isDivided = false;
        // 子节点
        this.northWest = null;
        this.northEast = null;
        this.southWest = null;
        this.southEast = null;
    }
    /**
     * 插入一个点
     * @param point - 点的坐标 
     * @returns {boolean} - 是否插入成功
     */
    insert(point: [number,number]): boolean{
        if(PointOutsideMBR(point,this.boundary)){
            return false;
        }
        if(this.points.length < this.capacity && !this.isDivided){
            this.points.push(point);
            return true;
        }
        if(!this.isDivided){
            this.subdivide();
        }
        if(this.northWest!.insert(point)){
            return true;
        }
        if(this.northEast!.insert(point)){
            return true;
        }
        if(this.southWest!.insert(point)){
            return true;
        }
        if(this.southEast!.insert(point)){
            return true;
        }
        return false;
    }

    /**
     * 剖分当前节点
     */
    subdivide(){
        let x = this.boundary[0];
        let y = this.boundary[1];
        let w = this.boundary[2] - x;
        let h = this.boundary[3] - y;
        let nw = new QuadTree([x,y,x+w/2,y+h/2],this.capacity);
        let ne = new QuadTree([x+w/2,y,x+w,y+h/2],this.capacity);
        let sw = new QuadTree([x,y+h/2,x+w/2,y+h],this.capacity);
        let se = new QuadTree([x+w/2,y+h/2,x+w,y+h],this.capacity);
        this.northWest = nw;
        this.northEast = ne;
        this.southWest = sw;
        this.southEast = se;
        this.isDivided = true;
    }
    queryRange(range: MBR){
        let pointsInRange: [number,number][] = [];        
        if(!MBRIntersectMBR(this.boundary,range)){
            return pointsInRange;
        }
        for(let i = 0; i < this.points.length; i++){
            if(pointInMBR(this.points[i],range)){
                pointsInRange.push(this.points[i]);
            }
        }
        if(this.northWest === null){
            return pointsInRange;
        }
        pointsInRange.push(...this.northWest.queryRange(range));
        pointsInRange.push(...this.northEast!.queryRange(range));
        pointsInRange.push(...this.southWest!.queryRange(range));
        pointsInRange.push(...this.southEast!.queryRange(range));
        return pointsInRange;
    }
}