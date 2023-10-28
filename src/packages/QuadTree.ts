/**
 * Point quadtree O(nlogn)
 */
// https://www.youtube.com/watch?v=OJxEcs0w_kE
// https://en.wikipedia.org/wiki/Quadtree

/**
 * 四叉树模块（用于支持简单的空间索引，加速计算）
 */
import { Circle, MBR, pointInMBR } from "./Geometry"; 
import { MBRIntersectMBR, PointOutsideMBR } from "./CGUtils";
// 支持不同坐标系的关键点： contains 函数，该函数负责判断一个点是否在当前节点的范围内，将其设计为插件形式，方便扩展

/**
 * 四叉树支持经纬度坐标系（边界会有 Bug， 后续会修复）
 * - 圆形区域查询仅支持平面坐标系
 */
export class QuadTree{
    private capacity: number;
    boundary: MBR;
    private points: [number,number][]; // 三维数组，第一维是点的索引，第二维是点的坐标，第三维是点的属性
    northWest: QuadTree | null;
    northEast: QuadTree | null;
    southWest: QuadTree | null;
    southEast: QuadTree | null;
    private isDivided: boolean;
    depth: number;
    maxDepth: number = 10;

    
    constructor(boundary: MBR, capacity: number, maxDepth: number = 10){
        this.capacity = capacity;
        this.boundary = boundary;
        this.points = [];
        this.isDivided = false;
        // 子节点
        this.northWest = null;
        this.northEast = null;
        this.southWest = null;
        this.southEast = null;
        this.depth = 0;
        this.maxDepth = maxDepth;
    }
    /**
     * 插入一个点
     * @param point - 点的坐标 
     * @returns {boolean} - 是否插入成功
     */
    insert(point: [number,number]): boolean{
        if(PointOutsideMBR(point,this.boundary)){
            // console.log("Point outside of the boundary");
            // console.log(point);
            // console.log(this.boundary);
            return false;
        }

        if(this.points.length < this.capacity && this.depth < this.maxDepth){
            this.points.push(point);
            return true;
        }else {
            if(!this.isDivided){
                this.subdivide();
            }
            this.northEast!.insert(point);
            this.northWest!.insert(point);
            this.southEast!.insert(point);
            this.southWest!.insert(point);

            return true;
        }
    }

    /**
     * 获取当前节点的所有点(若长度为 0 则返回 null)
     */
    get pointsList(){
        if(this.points.length === 0){
            return null;
        }else{
            return this.points;
        }
    }

    /**
     * 剖分当前节点
     */
    subdivide(){
        let x = this.boundary[0];
        let y = this.boundary[1];
        let w = this.boundary[2] - x;
        let h = this.boundary[3] - y;
        let nw = new QuadTree([x,y+h/2,x+w/2,y+h],this.capacity);
        let ne = new QuadTree([x+w/2,y+h/2,x+w,y+h],this.capacity);
        let sw = new QuadTree([x,y,x+w/2,y+h/2],this.capacity);
        let se = new QuadTree([x+w/2,y,x+w,y+h/2],this.capacity);
        this.northWest = nw;
        this.northEast = ne;
        this.southWest = sw;
        this.southEast = se;
        this.isDivided = true;
        this.depth++;
    }
    /**
     * 四叉树范围查询
     * - 输入一个矩形范围，返回范围内的所有点
     * - 同时支持平面坐标系和经纬度坐标系（跨界线、边界、大范围区域会有 BUG）
     * @param range{MBR} - 查询范围矩形
     * @returns {Array<[number,number]>}
     * @example
     * ```ts
     * // 平面坐标系下
     * let quadTree = new QuadTree([0,0,100,100],4);
     * quadTree.insert([10,10]);
     * quadTree.insert([20,20]);
     * quadTree.insert([30,30]);
     * quadTree.insert([40,40]);
     * quadTree.insert([50,50]);
     * quadTree.insert([60,60]);
     * 
     * let range = [0,0,50,50];
     * let pointsInRange = quadTree.queryRange(range);
     * console.log(pointsInRange);
     * // [[10,10],[20,20],[30,30],[40,40],[50,50]]
     * ```
     */
    queryRange(range: MBR): [number,number][]{
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

    /**
     * 四叉树圆形范围查询
     * @param range - 查询范围
     * @param found - 查询结果
     * @returns 
     */
    queryCircle(range: Circle, intrecs: any = []): [number,number][]{
        let pointsInRange: [number,number][] = [];        
        if(!range.intersects(this.boundary)){
            return pointsInRange;
        }else{
            intrecs.push(this.boundary);
        }

        for(let i = 0; i < this.points.length; i++){
            if(range.contains(this.points[i],4500000000)){
                pointsInRange.push(this.points[i]);
            }
        }
        if(this.northWest === null){
            return pointsInRange;
        }
        pointsInRange.push(...this.northWest.queryCircle(range,intrecs));
        pointsInRange.push(...this.northEast!.queryCircle(range,intrecs));
        pointsInRange.push(...this.southWest!.queryCircle(range,intrecs));
        pointsInRange.push(...this.southEast!.queryCircle(range,intrecs));
        return pointsInRange;
    }
}