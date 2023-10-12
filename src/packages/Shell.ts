/**
 * 凸包及凸壳算法
 */
import { Point } from './Geometry.ts';
import { ccw, fillIndexArray, getAngle } from './constants/Utils';
import { Delaunator } from './Delaunay.ts';

/**
 * 凸包算法
 * @param points - 点数组 
 * @returns {Point[]} - 凸包点数组
 */
export function convexHull(points: Point[]): Point[] {
    // 首先转化为平面坐标
    const pointsXY = points.map((item,index) => {
        // 记录原始索引最后还要用
        let tmp = item.toXY();
        return [...tmp, index]
    }); // 得到一个平面坐标及原始索引的数组
    // 找到最低点
    let lowestPoint = pointsXY[0];
    for (let i = 1; i < pointsXY.length; i++) {
        if (pointsXY[i][1] < lowestPoint[1]) {
            lowestPoint = pointsXY[i];
        }
    }
    
    /** 
    let points be the list of points
    let stack = empty_stack()

    find the lowest y-coordinate and leftmost point, called P0
    sort points by polar angle with P0, if several points have the same polar angle then only keep the farthest

    for point in points:
        # pop the last point from the stack if we turn clockwise to reach this point
        while count stack > 1 and ccw(next_to_top(stack), top(stack), point) <= 0:
            pop stack
        push point to stack
    end
    */

    // 按照极角排序
    pointsXY.sort((a, b) => {
        // let angleA = getAngle(lowestPoint, a);
        // let angleB = getAngle(lowestPoint, b);
        // 只取前两个元素计算角度
        let angleA = getAngle([lowestPoint[0], lowestPoint[1]], [a[0], a[1]]);
        let angleB = getAngle([lowestPoint[0], lowestPoint[1]], [b[0], b[1]]);
        if (angleA < angleB) {
            return -1;
        }
        else if (angleA > angleB) {
            return 1;
        }
        else {
            // 角度相同，距离远的在前面
            let distanceA = Math.pow(a[0] - lowestPoint[0], 2) + Math.pow(a[1] - lowestPoint[1], 2);
            let distanceB = Math.pow(b[0] - lowestPoint[0], 2) + Math.pow(b[1] - lowestPoint[1], 2);
            if (distanceA < distanceB) {
                return -1;
            }
            else {
                return 1;
            }
        }
    });
    
    // 凸包算法
    let stack = [];
    stack.push(pointsXY[0]);
    stack.push(pointsXY[1]);
    for (let i = 2; i < pointsXY.length; i++) {
        // ccw 只能取 pointXY 中元素的前两个元素
        while (stack.length > 1 && ccw([stack[stack.length - 2][0], stack[stack.length - 2][1]], [stack[stack.length - 1][0], stack[stack.length - 1][1]], [pointsXY[i][0], pointsXY[i][1]]) <= 0) {
            stack.pop();
        }
        stack.push(pointsXY[i]);
    }

    // 根据stack 中最后一个元素的索引，找到原始的点
    let res = [];
    for (let i = 0; i < stack.length; i++) {
        let index = stack[i][2];
        res.push(points[index]);
    }
    return res;
}

// 基于 Delauney 三角剖分的 Alpha Shape 算法 也叫凹包
// https://graphics.stanford.edu/courses/cs268-11-spring/handouts/AlphaShapes/as_fisher.pdf

/**
 * Alpha Shape 算法
 * @param points - 点数组(可以为二维数组，二维数组需要为平面坐标)
 * @param alpha - alpha 值
 * @returns {Point[]} - alpha shape 点数组
 */
export function alphaShape(points: Point[] , alpha: number): Point[] {
    /**
     * 1. Compute the Delaunay triangulation of S, knowing that the boundary of
        our-shape is contained in it.
        2. Then we determine C by inspecting all simplices T in DT(S): If the
        T-ball around T is empty and T < ( this is the alpha test ) we
        accept T as a member of C , together with all its faces.
        3. All d-simplices of C make up the interior of S . All simplices on the
        boundary C form S .
     */
    // 首先转化为平面坐标
    let pointsXY = points.map((item) => {
        return item.toXY();
    }); // 得到一个平面坐标及原始索引的数组


    // 1. Compute the Delaunay triangulation of S
    let delaunay = Delaunator.from(pointsXY);
    let triangleIndices = delaunay.getTriangleIndices(); // 得到三角形的索引 [[0,1,2],[1,2,3],...]
    let triangles = fillIndexArray(triangleIndices, pointsXY); // 得到三角形的点数组 [[p1,p2,p3],[p2,p3,p4],...]

    // 2. Then we determine C by inspecting all simplices T in DT(S)
    let c = [];
    for (let i = 0; i < triangles.length; i++) {
        let t = triangles[i];
        // 2.1 If the T-ball around T is empty
        if (tBallIsEmpty(t, alpha)) {
            // 2.2 T < ( this is the alpha test )
            c.push(t);
        }
    }
    

    // 3. All d-simplices of C make up the interior of S . All simplices on the boundary C form S .
    let res = [];
    for (let i = 0; i < c.length; i++) {
        let t = c[i];
        res.push(t[0]);
        res.push(t[1]);
        res.push(t[2]);
    }

    // 去重
    let hash = {} as any;
    let res2 = [];
    for (let i = 0; i < res.length; i++) {
        let key = res[i].join(',');
        if (!hash[key]) {
            res2.push(res[i]);
            hash[key] = true;
        }
    }

    // 根据res2 中的点，找到原始的点
    let res3 = [];
    for (let i = 0; i < res2.length; i++) {
        let index = pointsXY.indexOf(res2[i]);
        res3.push(points[index]);
    }
    return res3;

    // helper function: a test to check whether or not the T-ball is empty
    function tBallIsEmpty(t: [number,number][], alpha: number) {
        // 三角形的三个顶点
        let p1 = t[0];
        let p2 = t[1];
        let p3 = t[2];
        // 三角形的外接圆的圆心
        let center = circumcenter(p1, p2, p3);
        // 三角形的外接圆的半径
        let radius = Math.sqrt(Math.pow(p1[0] - center[0], 2) + Math.pow(p1[1] - center[1], 2));
        // 判断三角形外接圆的半径是否小于 alpha
        if (radius < alpha) {
            return true;
        }
        else {
            return false;
        }
    }

    function circumcenter(p1: number[], p2: number[], p3: number[]) {
        // 三角形的外接圆的圆心
        let x = (p1[0] + p2[0] + p3[0]) / 3;
        let y = (p1[1] + p2[1] + p3[1]) / 3;
        return [x, y];
    }
}

/**
 * Alpha Complex 算法
 * - Alpha shapes are a generalization of Delaunay triangulations. 
 * - Given a parameter alpha and a point set, they compute a simplicial complex which covers the point set in simplices whose circum radii are less than 1/alpha.
 * @param points - 点数组
 * @param alpha - alpha 值
 */
export function alphaComplex(
    points: Point[],
    alpha: number,
)
{
    // 首先转化为平面坐标
    let pointsXY = points.map((item) => {
        return item.toXY();
    }); // 得到一个平面坐标及原始索引的数组

    // 1. Compute the Delaunay triangulation of S
    let delaunay = Delaunator.from(pointsXY);
    let triangleIndices = delaunay.getTriangleIndices() as [number,number,number][]; // 得到三角形的索引 [[0,1,2],[1,2,3],...
    // console.log(triangleIndices);
    let res = triangleIndices.filter((cell: [number,number,number]) => { 
        let triangle = [pointsXY[cell[0]], pointsXY[cell[1]], pointsXY[cell[2]]];
        // console.log(Delaunator.circumRadius(triangle[0], triangle[1], triangle[2]) * alpha < 1);
        return Delaunator.circumRadius(triangle[0], triangle[1], triangle[2]) * alpha < 1;
    });
    return res;
}