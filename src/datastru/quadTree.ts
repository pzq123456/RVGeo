import { MBR, pointInMBR, intersectsMBR } from "../geometry";

export class QuadTree{ // 四叉树基础类
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

    contains(point:[number,number], boundary: MBR): boolean {
        return pointInMBR(point,boundary);
    }
    
    intersects(boundary: MBR, range: MBR): boolean {
        return intersectsMBR(boundary,range);
    }

    /**
     * 插入一个点
     * @param point - 点的坐标 
     * @returns {boolean} - 是否插入成功
     */
    insert(point: [number,number]): boolean{
        if(!this.contains(point,this.boundary)){
            return false;
        }

        if(this.points.length < this.capacity && this.depth < this.maxDepth){
            this.points.push(point);
            return true;
        }else {
            if(!this.isDivided){
                this.subdivide();
            }
            /**
             * 注意这里的 ! 操作符，它是 TypeScript 的一个非空断言操作符，
             * 用来告诉 TypeScript northEast 属性一定存在，
             * 不会是 null 或 undefined。这样 TypeScript 就不会在这里报错了。
             */
            this.northEast!.insert(point);
            this.northWest!.insert(point);
            this.southEast!.insert(point);
            this.southWest!.insert(point);

            return true;
        }
    }

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
     */
    queryRange(range: MBR): [number,number][]{
        let pointsInRange: [number,number][] = [];        
        if(!this.intersects(this.boundary,range)){
            return pointsInRange;
        }
        for(let i = 0; i < this.points.length; i++){
            if(this.contains(this.points[i],range)){
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
     * you need a customRange object to support custom range query
     * - note : this function has the SAME LOGIC as queryRange.
     * @see customRange
     */
    customQuery(range: customRange): [number,number][]{

        let pointsInRange: [number,number][] = [];        
        if(!range.intersects(this.boundary)){
            return pointsInRange;
        }

        for(let i = 0; i < this.points.length; i++){
            if(range.contains(this.points[i])){
                pointsInRange.push(this.points[i]);
            }
        }

        if(this.northWest === null){
            return pointsInRange;
        }

        pointsInRange.push(...this.northWest.customQuery(range));
        pointsInRange.push(...this.northEast!.customQuery(range));
        pointsInRange.push(...this.southWest!.customQuery(range));
        pointsInRange.push(...this.southEast!.customQuery(range));
        return pointsInRange;
    }
}

/**
 * impliment customRange to support custom range query
 * - make sure your customRange object has correct intersects and contains function
 * - note: 
 *  - the boundary of customRange is the boundary of QuadTree
 *  - the point of customRange is the point of QuadTree
 * @example
 * // customRange use circle as example
 * circleRange = {
 * intersects: (boundary: MBR) => {},
 * contains: (point: [number,number]) => {}
 * }
 * @see `Circle` class in Geometry directory
 * 
 */
export interface customRange{
    intersects: (boundary: MBR) => boolean;
    contains: (point: [number,number]) => boolean;
}

// https://www.youtube.com/watch?v=OJxEcs0w_kE
// https://en.wikipedia.org/wiki/Quadtree