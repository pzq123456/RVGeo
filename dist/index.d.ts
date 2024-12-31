export declare function acos(x: number): number;

/**
 * 计算两个二维笛卡尔坐标系下的向量 a 和 b 的和，返回一个新的向量。
 * This function adds two 2D Cartesian vectors a and b, returning a new vector representing the sum.
 */
export declare function add(a: [number, number], b: [number, number]): [number, number];

/**
 * - Adjust longitude to [-180, 180]
 * - 将超过 360 的经度调整为[-180, 180]
 * @param lon - Longitude
 * @returns {number} Adjusted longitude
 */
export declare function adjust_lon(lon: number): number;

/**
 * Alpha Complex 算法
 * - Alpha shapes are a generalization of Delaunay triangulations.
 * - Given a parameter alpha and a point set, they compute a simplicial complex which covers the point set in simplices whose circum radii are less than 1/alpha.
 * @param points - 点数组
 * @param alpha - alpha 值
 */
export declare function alphaComplex(points: Point[], alpha: number): [number, number, number][];

/**
 * Apply mixins to a class
 * @param derivedCtor - The class to apply the mixins to
 * @param constructors - The mixins to apply
 */
export declare function applyMixins(derivedCtor: any, constructors: any[]): void;

declare interface Arc {
    0: number;
    1: number;
    next?: Arc;
}

/**
 * - Area of measurement factors based on 1 square meter.
 * - 单位换算关系，以1平方米为基准。
 * @example
 * var meters = 1; // 1 square meter
 * var area = meters * areaFactors.acres;
 */
export declare const areaFactors: Record<AreaUnits, number>;

/**
 * - 面积单位内互相转换
 * - Convert area units to each other
 * @param area - 面积
 * @param from - 当前面积单位
 * @param to - 目标面积单位
 * @returns {number} - 转换后面积
 */
export declare function areaToArea(area: number, from: AreaUnits, to: AreaUnits): number;

export declare type AreaUnits = Exclude<Units, "radians" | "degrees"> | "acres" | "hectares" | "squaremeters" | "squaremetres" | "squarekilometers" | "squarekilometres";

export declare function asin(x: number): number;

declare type asyncFunction = (...args: any[]) => Promise<any>;

declare interface AsyncListener extends Listener {
    fn: asyncFunction;
}

export declare const atan2: (y: number, x: number) => number;

export declare function bearing(latlng1: [number, number], latlng2: [number, number]): number;

/**
 * 二值化网格数据，返回二值化后的网格数据
 * @param grid - grid 对象
 * @param band - 波段号
 * @param threshold - 二值化阈值
 * @returns {number[][]} - 返回二值化后的网格数据
 */
export declare function binarization(grid: Grid, band: number, threshold: number): number[][];

export declare function binaryColorBand(value: number, colorList?: string[]): string;

export declare function binDrawGrid2d(canavs: HTMLCanvasElement, grid2D: number[][], Rect: Rect, // {x, y, w, h}
colorBand?: (value: number) => string): void;

export declare function breadthFirstSearch(graph: Graph<any>, start: any): Map<any, any>;

/**
 * 计算数组的形状
 * @param array - 数组
 * @returns {number[]}
 */
export declare function calculateArrayShape(array: any[]): number[];

/**
 * 计算多边形的 MBR
 * @param clipPolygon
 * @returns {MBR}
 */
export declare function calculateMBR(clipPolygon: [number, number][]): MBR;

/**
 * 将球坐标系下的向量 [longitude, latitude]（弧度制）转换为三维笛卡尔坐标系下的向量 [x, y, z]。
 * - This function takes spherical coordinates [longitude, latitude] and converts them to a 3D Cartesian vector [x, y, z].
 * @param spherical
 * @param toRadians - 默认输入为角度，如果输入为弧度，需要设置 toRadians 为 false。
 */
export declare function cartesian(spherical: [number, number], toRadians?: boolean): [number, number, number];

/**
 * 计算两个三维笛卡尔坐标系下的向量 a 和 b 的和，返回一个新的向量。
 * This function adds two 3D Cartesian vectors a and b, returning a new vector representing the sum.
 */
export declare function cartesianAdd(a: [number, number, number], b: [number, number, number]): [number, number, number];

/**
 * 计算两个三维笛卡尔坐标系下的向量 a 和 b 的和，将结果存储在 a 中。
 * This function adds two 3D Cartesian vectors a and b, modifying a in-place to store the result. (Note: This function is incomplete as it doesn't return the sum)
 */
export declare function cartesianAddInPlace(a: [number, number, number], b: [number, number, number]): void;

/**
 * 计算两个三维笛卡尔坐标系下的向量 a 和 b 的夹角。
 * This function calculates the angle between two 3D Cartesian vectors a and b.
 */
export declare function cartesianAngle(a: [number, number, number], b: [number, number, number]): number;

/**
 * 计算两个三维笛卡尔坐标系下的向量 a 和 b 的叉积。
 *  This function calculates the cross product of two 3D Cartesian vectors a and b.
 */
export declare function cartesianCross(a: [number, number, number], b: [number, number, number]): [number, number, number];

/**
 * 计算两个三维笛卡尔坐标系下的向量 a 和 b 的点积。
 * This function calculates the dot product of two 3D Cartesian vectors a and b.
 */
export declare function cartesianDot(a: [number, number, number], b: [number, number, number]): number;

/**
 * 归一化三维笛卡尔坐标系下的向量 d，返回一个新的单位向量。
 * This function normalizes a 3D Cartesian vector d, returning a new unit vector.
 */
export declare function cartesianNormalize(d: [number, number, number]): [number, number, number];

/**
 * 归一化三维笛卡尔坐标系下的向量 d，将 d 修改为指向相同方向的单位向量。
 * This function normalizes a 3D Cartesian vector d in-place, modifying d to represent a unit vector pointing in the same direction. (Note: This function is incomplete and requires implementing square root calculation)
 */
export declare function cartesianNormalizeInPlace(d: [number, number, number]): void;

/**
 * 使用因子 k 缩放三维笛卡尔坐标系下的向量 vector，返回一个新的缩放后的向量。
 * This function scales a 3D Cartesian vector vector by a factor k, returning a new scaled vector.
 */
export declare function cartesianScale(vector: [number, number, number], k: number): [number, number, number];

/**
 * Counter-clockwise (not robust version)
 * ccw 算法的非鲁棒版本
 * - Returns 1 if three points make a counter-clockwise turn
 * - 逆时针返回 1
 * - Returns -1 if three points make a clockwise turn
 * - 顺时针返回 -1
 * - Returns 0 if three points are collinear
 * - 共线返回 0
 * @param p1 - 可以是点类型，也可以是平面坐标数组（墨卡托）
 * @param p2 - 可以是点类型，也可以是平面坐标数组（墨卡托）
 * @param p3 - 可以是点类型，也可以是平面坐标数组（墨卡托）
 * @returns {number} - 1 | 0 | -1
 */
export declare function ccw(p1: Point | [X1: number, Y1: number], p2: Point | [X2: number, Y2: number], p3: Point | [X3: number, Y3: number]): number;

/**
 * robust version of ccw 封装了 robust-predicates 库的 orient2d 函数
 * - `Note:` unlike J. Shewchuk's original code, `all the functions in this library assume y axis is oriented downwards ↓`, so the semantics are different.
 * - `注意:` 与 J. Shewchuk 的原始代码不同，`本库中的所有函数都假设 y 轴向下 ↓`，因此语义不同。刚好与 ccw 相反。
 * - Returns 1 if three points make a counter-clockwise turn
 * - 逆时针返回 1
 * - Returns -1 if three points make a clockwise turn
 * - 顺时针返回 -1
 * - Returns 0 if three points are collinear
 * - 共线返回 0
 * @param p1 - 可以是点类型，也可以是平面坐标数组（墨卡托）
 * @param p2 - 可以是点类型，也可以是平面坐标数组（墨卡托）
 * @param p3 - 可以是点类型，也可以是平面坐标数组（墨卡托）
 * @param isReverse - 是否反转(默认为 true 这样就会保持与 ccw 一致)
 * @returns {number} - 1 | 0 | -1
 */
export declare function ccwRobust(p1: Point | [X1: number, Y1: number], p2: Point | [X2: number, Y2: number], p3: Point | [X3: number, Y3: number], isReverse?: boolean): number;

/**
 * 平面图形：圆形
 */
export declare class Circle {
    x: number;
    y: number;
    r: number;
    rSquared: number;
    /**
     * 构造函数
     * @param x - 圆心 x 坐标
     * @param y - 圆心 y 坐标
     * @param r - 半径
     */
    constructor(x: number, y: number, r: number);
    /**
     * 判断点是否在圆内
     * @param point - 点坐标
     * @param threshold - （默认为0）容差（用于修正计算误差）*建议根据实际情况手动调整
     * @returns {boolean} - true if the point is inside the circle
     */
    contains(point: [number, number], threshold?: number): boolean;
    /**
     * （仅平面下保证有效）判断圆是否与 MBR 相交
     * @param range - MBR
     * @returns {boolean} - true if the circle intersects the MBR
     */
    intersects(range: MBR): boolean;
    static isCircle(obj: any): obj is Circle;
}

/**
 * Factory function for creating geometryCollection objects from GeoJSON Feature objects
 * @param feature
 * @returns
 */
export declare function collectionFromFeature(feature: GeoJSONFeature | GeoJSONFeatureCollection): GeometryCollection;

/**
 * Factory function for creating geometryCollection objects from GeoJSON Geometry objects
 * @param geometry
 * @returns
 */
export declare function collectionFromGeometry(geometry: GeoJSONGeometryCollection | GeoJSONGeometry): GeometryCollection;

export declare enum colorListType {
    default = 0
}

export declare function complateMap(allMap: Map<number, number[][]>, cutMap: Map<number, number[][]>): Map<any, any>;

/**
 * 复数类型
 */
export declare type Complex = {
    real: number;
    imag: number;
};

/**
 * 拼接等长二维数组
 * @warning 必须为二维数组，必须等长。
 * @param array1 [ [1,2,3], [4,5,6], [7,8,9] ]
 * @param array2 [ ['a','b','c'], ['d','e','f'], ['g','h','i'] ]
 * @returns [ [1,2,3,'a','b','c'], [4,5,6,'d','e','f'], [7,8,9,'g','h','i'] ]
 */
export declare function concatEL2DArray(array1: any[], array2: any[]): any[];

/**
 * 复数共轭
 * - complex conjugate
 * @param a - 复数
 * @returns - 共轭复数
 */
export declare function conj(a: {
    real: number;
    imag: number;
}): {
    real: number;
    imag: number;
};

export declare function containsMBR(mbr1: MBR, mbr2: MBR): boolean;

/**
 * 凸包算法
 * @param points - 点数组
 * @returns {Point[]} - 凸包点数组
 */
export declare function convexHull(points: Point[]): Point[];

export declare const cos: (x: number) => number;

export declare const CountourColorList: string[];

/**
 * 创建图
 */
export declare function createGraph<T>(nodes: T[], edges: [T, T][] | [T, T, number][]): Graph<T>;

export declare function createGridGraph(grid: number[][], strategy?: gridValueStrategy, mooreNeighborhood?: boolean): GridGraph;

/**
 * 计算两个二维笛卡尔坐标系下的向量 a 和 b 的叉积。
 * This function calculates the cross product of two 2D Cartesian vectors a and b.
 */
export declare function cross(a: [number, number], b: [number, number]): number;

export declare interface CRS {
    projection: Projection | null;
    distance: (latlng1: [number, number], latlng2: [number, number]) => number;
    area?: (latlngs: [number, number][]) => number;
    planeArea?: (latlngs: [number, number][]) => number;
    code?: string;
    R: number;
    wrapLng?: [number, number];
    wrapLat?: [number, number];
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
export declare interface customRange {
    intersects: (boundary: MBR) => boolean;
    contains: (point: [number, number]) => boolean;
}

/**
 * 使用 MBR 裁剪多边形
 * @param polygon - 多边形 [[x1,y1],[x2,y2],...
 * @param mbr - MBR [minx,miny,maxx,maxy]
 * @returns {Array | null} - 裁剪后的多边形 或 null （若多边形与 MBR 相离）
 */
export declare function cutPolygonByMBR(polygon: [number, number][], mbr: MBR): [number, number][] | null;

/**
 * D2R usage: 角度转弧度
 * - PI / 180
 * @example
 * var radians = degrees * D2R;
 */
export declare const D2R: number;

/**
 * https://en.m.wikipedia.org/wiki/Damping#Damped_sine_wave
 * @param x
 * @param y
 * @returns
 */
export declare function dampedSin3D(x: number, y: number): number;

declare interface dedupedTopology extends Topology {
    arcs: Arc[] | [number, number][][];
}

declare function defaultGetX(p: any): any;

declare function defaultGetY(p: any): any;

/**
 * - Converts an angle in degrees to radians
 * - 将角度转换为弧度
 * @name degreesToRadians
 * @param {number} degrees angle between 0 and 360 degrees
 * @returns {number} angle in radians
 */
export declare function degreesToRadians(degrees: number): number;

export declare function degToDMS(deg: number): [number, number, number, string];

export declare class Delaunator {
    static from(points: number[][], getX?: typeof defaultGetX, getY?: typeof defaultGetY): Delaunator;
    constructor(coords: number[]);
    update(): void;
    _hashKey(x: any, y: any): number;
    _legalize(a: any): number;
    _link(a: any, b: any): void;
    _addTriangle(i0: any, i1: any, i2: any, a: any, b: any, c: any): any;
    getTriangles(): any;
    getHalfedges(): any;
    getHull(): any;
    getPoints(): any[][];
    /**
     * - get the indices of triangles as array of array of 3 elements
     * - 获得三角形的索引，以3个元素的数组的数组的形式
     * @returns {[number,number,number]}
     */
    getTriangleIndices(): [number, number, number][];
    /**
     * 计算三点外接圆的半径
     * @param p1
     * @param p2
     * @param p3
     * @returns
     */
    static circumRadius(p1: [number, number], p2: [number, number], p3: [number, number]): number;
    circumcenter(ax: any, ay: any, bx: any, by: any, cx: any, cy: any): {
        x: any;
        y: any;
    };
}

/**
 * 去除最大最小值
 * @param fft - 二维数组
 */
export declare function deMaxMin(fft: number[][]): void;

/**
 * Given a start point, initial bearing, and distance,
 * - this will calculate the destina­tion point and final bearing travelling along a (shortest distance) great circle arc.
 * @param latlng1
 * @param brng
 * @param distance
 * @returns
 */
export declare function destination(latlng1: [number, number], brng: number, distance: number): [number, number];

export declare function dijkstra(graph: Graph<any>, start: any): Map<any, any>;

export declare function dmsToDeg(d: number, m: number, s: number, direction: string): number;

/**
 * 计算两个二维笛卡尔坐标系下的向量 a 和 b 的点积。
 * This function calculates the dot product of two 2D Cartesian vectors a and b.
 */
export declare function dot(a: [number, number], b: [number, number]): number;

/**
 * 绘制箭头场，默认为起点为当前格子的中心
 */
export declare function drawArrowField(canavs: HTMLCanvasElement, colRow: [number, number], Rect: Rect, toDict: Map<string, [number, number] | null>, color?: string, path?: [number, number][]): void;

export declare function drawCountour(canavs: HTMLCanvasElement, countourCodeGrid: number[][], Rect: Rect, // {x, y, w, h}
strokeColor?: string): void;

export declare function drawGrid2d(canavs: HTMLCanvasElement, grid2D: number[][], Rect: Rect, // {x, y, w, h}
statistics: {
    max: number;
    min: number;
    mean: number;
}, colorBand?: (statistics: {
    max: number;
    min: number;
    mean: number;
}, value: number) => string, GridMBR?: [number, number, number, number]): void;

/**
 * 绘制进度条
 * @param canvas - canvas 元素
 * @param rect - 绘制范围
 * @param progress - 进度 0-100
 * @param style - 样式
 */
export declare function drawProgress(canvas: HTMLCanvasElement, rect: Rect, progress: number, style?: {
    color: string;
    width: number;
    backgroundColor: string;
}): void;

/**
 * 绘制四叉树
 * @param canvas
 * @param rect
 * @param QTree
 * @param grid
 * @param colorBand
 * @param value
 * @param statistics
 */
export declare function drawQTree2d(canvas: HTMLCanvasElement, rect: Rect, QTree: QTNode, grid: Grid, colorBand?: (statistics: {
    max: number;
    min: number;
    mean: number;
}, value: number) => string, value?: number, statistics?: {
    max: number;
    min: number;
    mean: number;
}): void;

export declare function drawSample(canvas: HTMLCanvasElement, rect: Rect, sample: number[], style?: {
    color: string;
    backgroundColor: string;
}, // {color, width, backgroundColor}
isText?: boolean, statistics?: {
    max: number;
    min: number;
    mean: number;
}): void;

export declare function drawSample2(canvas: HTMLCanvasElement, rect: Rect, sample: number[], style?: {
    color: string;
    backgroundColor: string;
}, // {color, width, backgroundColor}
statistics?: {
    max: number;
    min: number;
    mean: number;
}, isText?: boolean): void;

export declare function drawText(canvas: HTMLCanvasElement, rect: Rect, text: string, style?: {
    color: string;
    font: string;
}): void;

export declare function drawTrueColorGrid2d(canavs: HTMLCanvasElement, grid: Grid, bands2Draw: number[], // rgb
Rect: Rect, colorBand: (statistics: {
    max: number;
    min: number;
    mean: number;
}[], value: number[]) => string, GridMBR?: [number, number, number, number]): void;

export declare const Earth: CRS;

export declare const earthRadius = 6371008.8;

/**
 * 释放对象
 * @param {Object} obj - 需要释放的对象
 */
export declare function emptyObj(obj: {
    [key: string]: any;
}): void;

/**
 * EPSG:3857
 */
export declare const EPSG3857: CRS;

/**
 * EPSG:900913
 */
export declare const EPSG900913: CRS;

export declare const EPSLN = 1e-10;

/**
 * deep compare two arrays(1D)
 * @param a
 * @param b
 * @param tolerance
 * @returns
 */
export declare function equals(a: number[] | number, b: number[] | number, tolerance?: number): boolean;

export declare function equalsMBR(mbr1: MBR, mbr2: MBR): boolean;

/**
 * 事件基础函数（类，默认构造函数）
 * - 维护两个事件监听器队列（同步、异步）
 * - 提供事件监听、移除、触发等方法
 * - 提供一次性事件监听
 * - 提供获取指定事件类型的监听器
 * - 提供判断是否存在指定事件类型的监听器
 * > 参考 [Leaflet 的事件机制设计](https://github.com/Leaflet/Leaflet/blob/80a42768306c8c2f9f1bd1eb48d529ffcac3072f/src/core/Events.js#L29)
 */
export declare class Evented {
    private _events;
    private _asyncEvents;
    /**
     * 添加事件监听（同步、异步）
     * @param type - 事件名称（类型）
     * @param fn - 事件处理函数（监听器）
     * @param context - 事件处理函数的上下文
     * @returns {this} 返回 EventEmitter 实例
     */
    on(type: string, fn: Function, context?: any): this;
    /**
     * 移除事件监听
     * @param type
     * @param fn
     * @param context
     * @returns
     */
    off(type: string, fn?: Function, context?: any): this;
    /**
     * 添加一次性事件监听
     * @param type
     * @param fn
     * @param context
     * @returns
     */
    once(type: string, fn: Function, context?: any): this;
    /**
     * 只会触发非异步事件
     * @param type
     * @param data
     * @returns
     */
    emit(type: string, data?: any): this;
    /**
     * 异步触发事件
     * - parallel: 并行执行（同时执行所有处理函数）
     * - series: 串行执行（按照添加顺序执行）
     * - ignore: 忽略(在后台异步执行，但无法得知何时执行完毕)
     * @param type - 事件名称
     * @param mode - 事件处理函数的执行模式('parallel' | 'series' | 'ignore')
     * @param args - 事件处理函数的参数
     * @returns {Promise<void>} 返回一个 Promise 对象
     */
    emitAsync(type: string, mode: 'parallel' | 'series' | 'ignore', data?: any): Promise<void>;
    /**
     * 获取指定事件类型的监听器
     * @param type - 事件名称
     * @returns {Listener[]} 返回一个监听器数组
     */
    listeners(type: string): (Listener | AsyncListener)[];
    /**
     * 判断是否存在指定事件类型的监听器
     * @param type - 事件名称
     * @returns {boolean} 返回一个布尔值
     */
    hasListeners(type: string): boolean;
    /**
     * 移除所有事件监听
     * @returns {this} 返回 EventEmitter 实例
     */
    removeAllListeners(): this;
    /**
     * 判断是否为异步监听器
     * @param {Listener | AsyncListener} listener - 监听器
     * @returns {boolean} 返回一个布尔值
     */
    static isAsyncListener(listener: Listener | AsyncListener): listener is AsyncListener;
}

/**
 * Merge the properties
 * @param {object} dest - The target object
 * @param {...any} args - The objects to be merged
 * @returns {object} - The merged object
 * @example
 * extend({a: 1}, {b: 2}, {c: 3}) // {a: 1, b: 2, c: 3}
 * extend({a: 1}, {a: 2}, {a: 3}) // {a: 3}
 */
export declare function extend(dest: any, ...args: any[]): any;

/**
 * - Unit of measurement factors using a spherical (non-ellipsoid) earth radius.
 * @example
 * var radians = 1; // 1 radian
 * var length = radians * earthRadius;
 *
 * var length = 1; // 1 meter
 * var radians = length / earthRadius;
 */
export declare const factors: Record<Units, number>;

/**
 * - Unit of measurement factors based on 1 meter.
 * - 单位换算关系，以1米为基准。
 * @example
 * var meters = 1; // 1 meter
 * var length = meters * factors2.kilometers;
 */
export declare const factors2: Record<Units, number>;

/**
 * 快速傅里叶变换 real to complex
 * - 先对每一行进行傅里叶变换，再对每一列进行傅里叶变换，最后中心化
 * @param X - 采样结果
 * @returns - 傅里叶变换结果,作为复数可同时表示振幅和相位。
 */
export declare function fastFFT2(X: number[][]): Complex[][];

export declare function feature(topology: Topology, o: GeometryObject | string): {
    type: string;
    properties: any;
    geometry: GeometryObject;
    id?: undefined;
    bbox?: undefined;
} | {
    type: string;
    id: string | number | undefined;
    properties: any;
    geometry: GeometryObject;
    bbox?: undefined;
} | {
    type: string;
    id: string | number | undefined;
    bbox: MBR;
    properties: any;
    geometry: GeometryObject;
} | {
    type: string;
    features: any;
};

/**
 * 快速傅里叶变换 real to complex
 * @param X - 采样结果
 * @returns - 傅里叶变换结果,作为复数可同时表示振幅和相位。
 * - real：相位 phase
 * - imag：振幅 amplitude
 */
export declare function FFT(X: number[]): Complex[];

export declare function FFT2(X: number[][], mode?: 'row' | 'column'): Complex[][];

/**
 * 获取傅里叶变换结果的振幅
 * @param fftResult
 * @returns
 */
export declare function FFTImag(fftResult: Complex[]): number[];

export declare function FFTImag2(fftResult: Complex[][], mode?: 'row' | 'column'): number[][];

/**
 * 获取傅里叶变换结果的振幅
 * @param fftResult
 * @returns
 */
export declare function FFTReal(fftResult: Complex[]): number[];

export declare function FFTReal2(fftResult: Complex[][], mode?: 'row' | 'column'): number[][];

export declare function FFTShift(fftResult: Complex[][]): Complex[][];

/**
 * - 根据 indexArray 中存储的索引 从 fillArray 中取出对应的元素并填充到 indexArray 中
 * - fill indexArray with elements from fillArray according to the index stored in indexArray
 * - `注意`： indexArray 的形状未知 但是 fillArray 不论形状如何始终视为一维数组
 * - Note: the shape of indexArray is unknown, but fillArray is always regarded as a one-dimensional array regardless of its shape
 * @param indexArray - 存储索引的数组（被填充）
 * @param fillArray - 存储元素的数组 （用于填充）
 */
export declare function fillIndexArray(indexArray: any, fillArray: any): any;

declare interface filter {
    (a: GeometryObject, b: GeometryObject): boolean;
}

export declare function flattenArray(array: any[]): any[];

/**
 * 这个函数的主要目的是将数字 num 四舍五入到指定的 precision 小数位。
 * @param {Number} num
 * @param {Number} precision - 这是一个可选参数，表示要四舍五入到的小数位数。
 * 	- 如果没有提供这个参数，那么默认值为 6。
 * 	- 如果这个参数为 false，那么函数将直接返回 num，不进行任何处理。
 * @returns {Number} - 返回四舍五入后的数字
 */
export declare function formatNum(num: number, precision?: number | boolean): number;

/**
 * Factory function for creating geometry objects from GeoJSON Feature objects
 * - you can use this function to create inner geometry from Features
 * - about Feature objects @see GeoJSONFeature
 * @param geometry
 * @returns
 */
export declare function fromFeatureObj(feature: GeoJSONFeature | GeoJSONFeatureCollection): Geometry | GeometryCollection;

/**
 * Factory function for creating geometry objects from GeoJSON Geometry objects
 * - about Geometry objects @see GeoJSONGeometry
 * @param geometry
 * @returns
 */
export declare function fromGeometryObj(geometry: GeoJSONGeometry | GeoJSONGeometryCollection): Geometry | GeometryCollection;

export declare interface GeoJSONFeature {
    type: "Feature";
    geometry: GeoJSONGeometry | GeoJSONGeometryCollection;
    properties: any;
    bbox?: MBR;
    id?: string | number;
}

export declare interface GeoJSONFeatureCollection {
    type: "FeatureCollection";
    features: GeoJSONFeature[];
    bbox?: MBR;
}

export declare interface GeoJSONGeometry {
    type: string;
    coordinates: any;
}

export declare interface GeoJSONGeometryCollection {
    type: "GeometryCollection";
    geometries: GeoJSONGeometry[];
    bbox?: MBR;
}

export declare interface GeoJSONLineString extends GeoJSONGeometry {
    type: "LineString";
    coordinates: [number, number][];
}

export declare interface GeoJSONMultiLineString extends GeoJSONGeometry {
    type: "MultiLineString";
    coordinates: [number, number][][];
}

export declare interface GeoJSONMultiPoint extends GeoJSONGeometry {
    type: "MultiPoint";
    coordinates: [number, number][];
}

export declare interface GeoJSONMultiPolygon extends GeoJSONGeometry {
    type: "MultiPolygon";
    coordinates: [number, number][][][];
}

export declare interface GeoJSONPoint extends GeoJSONGeometry {
    type: "Point";
    coordinates: [number, number];
}

export declare interface GeoJSONPolygon extends GeoJSONGeometry {
    type: "Polygon";
    coordinates: [number, number][][];
}

/**
 * Geometry for GeoJSON independent Objects including Point, LineString, Polygon
 * - no GeometryCollection
 * - no MultiPoint, MultiLineString, MultiPolygon
 */
export declare abstract class Geometry {
    bbox: MBR;
    readonly coordinates: any;
    properties: any;
    readonly projection: Projection;
    toXY(): any;
    static fromFeature: any;
    static fromGeometry: any;
    constructor(coordinates: any, properties?: any);
    set Properties(properties: any);
    clone(): Geometry;
    equals(geometry: Geometry): boolean;
    abstract updateBBox(): void;
    toGeoJSON(): GeoJSONFeature;
    static fromGeoJSON(feature: GeoJSONFeature | GeoJSONGeometry): Geometry | GeometryCollection;
}

export declare class GeometryCollection {
    coordinates: any;
    geometries: (Geometry | GeometryCollection)[];
    bbox: MBR;
    properties: any;
    projection: Projection;
    constructor(geometries: (Geometry | GeometryCollection)[], properties?: any);
    toXY(): any;
    updateBBox(geometry: any): void;
    addGeometry(geometry: any): void;
    _update(geometry: any, index: number): void;
    toGeoJSON(): GeoJSONFeature;
}

declare interface geometryInputs {
    [key: string]: GeoJSONFeatureCollection | GeoJSONFeature | GeoJSONGeometry;
}

declare interface GeometryObject {
    type: string | null;
    coordinates?: any;
    geometries?: any;
    arcs?: any;
    bbox?: MBR;
    id?: string | number;
    properties?: any;
}

declare interface geometryOutputs {
    [key: string]: GeometryObject;
}

/**
 * - Returns the angle between two points
 * - 返回两点之间的夹角
 * @param p1 - Point 1
 * @param p2 - Point 2
 * @returns
 */
export declare function getAngle(p1: Point | [X1: number, Y1: number], p2: Point | [X2: number, Y2: number]): number;

/**
 * 计算多点的最小外包矩形（跨越反子午线的情况）
 * - 会自动计算并选择面积最小的情况
 * - get MBR with antimeridian
 * @param points - 多点
 * @returns {MBR}
 */
export declare function getMBRWithAntimeridian(points: [number, number][]): MBR;

/**
 * 计算多点的最小外包矩形（默认情况）
 * @param points - 多点
 * @returns {MBR} 返回最小外包矩形 [minLon, minLat, maxLon, maxLat]
 */
export declare function getPointsMBR(points: [number, number][]): MBR;

/**
 * 数据结构： 图（由节点和边组成）
 */
export declare interface Graph<T> {
    nodes: T[];
    edges: Map<T, T[]>;
    edgesWeights?: Map<T, Map<T, number>>;
    weights?: (from: T, to: T) => number;
    neighbors: (node: T) => T[];
}

/**
 * 网格类（本质是三维数组）:
 * - 三维数组的每一层代表一个波段
 * - 其中一层为一个二维数组，代表一个波段的值，并与对应的 MBR 对象关联用于挂接地图上的位置
 * - MBR 统一使用 `WGS84` 坐标系
 */
export declare class Grid {
    MBR: MBR;
    data: number[][][];
    shape: number[];
    rows: number;
    cols: number;
    bands: number;
    stasticsCache: {
        max: number;
        min: number;
        mean: number;
    }[];
    constructor(MBR: MBR, data: number[][][]);
    getShape(): number[];
    getBand(band: number): number[][];
    get width(): number;
    get height(): number;
    get bandCount(): number;
    setMBR(MBR: MBR): void;
    getXYZValue(xy: [number, number], z?: number): number;
    set XYZValue(xyzv: [number, number, number, number]);
    /**
     * 获取指定范围，指定波段的网格数据
     * - 建议：先使用 `ConvertToGridMBR` 方法获取网格范围，再使用本方法获取网格数据（为简化代码，没有将这两个方法合并）
     * @param GridMBR - 网格范围 行列号索引表示
     * @param band - 波段号数组
     * @returns - 返回网格数据，格式为：[band][row][col]
     */
    getSubGrid(GridMBR: MBR, band?: number[]): number[][][];
    /**
     * 在内部修改网格数据 使用均值替换0等无效值
     * @param band - 波段号
     */
    fillInvalidValue(band: number): void;
    /**
     * 与 `getSubGrid` 方法类似，但返回的是一个 Grid 对象
     * @param GridMBR - 网格范围 行列号索引表示
     * @param band - 波段号数组
     * @returns - 返回网格数据，格式为：[band][row][col]
     */
    getSubGridObj(GridMBR: MBR, band?: number[]): Grid;
    /**
     * 由外部经纬度坐标获取网格范围，行列号索引表示（只有全部在栅格范围内才会正常得到结果）
     * - 若外部坐标不全部在网格范围内，则返回 null
     * @param MBR - 网格行列号范围
     */
    ConvertToGridMBR(MBR: MBR): MBR | null;
    /**
     * 计算输入点的网格坐标（整数行列号坐标）
     * @param Point - 输入点坐标，格式为：[lon, lat]
     * @returns {[number,number] | null} - 返回网格坐标，格式为：[row, col] 若输入点不在网格范围内，则返回 null
     */
    getGridCoord(Point: [number, number]): [number, number] | null;
    /**
     * 由行列号反算经纬度坐标（栅格中心点）
     * @param GridCoord - 网格坐标，格式为：[row, col]
     * @returns - 返回经纬度坐标，格式为：[lon, lat]
     */
    getCoordByGridCoord(GridCoord: [number, number]): [number, number];
    /**
     * 获取指定波段的最大值、最小值、平均值
     * @param band - 波段号
     */
    getBandStatistics(band: number): {
        max: number;
        min: number;
        mean: number;
    };
    /**
     * 二值化网格数据，返回二值化后的网格数据
     * @param band - 波段号
     * @param threshold - 二值化阈值
     */
    binarization(band: number, threshold: number): number[][];
    /**
     * the result grid size is [rows - 1, cols - 1], and the render function should move 1/2 grid size to the left and up
     */
    getCoutourCode(band: number, threshold: number): number[][];
    getMean(band: number): number;
    getSorted1DArray(band: number): number[];
    static fromFillValue(fillVal: number | undefined, shape: [number, number, number]): Grid;
}

export declare function gridAstar(graph: GridGraph, start: [number, number], goal: [number, number]): Map<string, [number, number] | null>;

/**
 * @param goal - used to stop the search when the goal is reached
 * @note - [num,num] can not be the key of a map, so we use string instead.
 */
export declare function gridBreadthFirstSearch(graph: GridGraph, start: [number, number], goal?: [number, number]): Map<string, [number, number] | null>;

export declare function gridDijkstra(graph: GridGraph, start: [number, number], goal?: [number, number]): Map<string, [number, number] | null>;

/**
 * 二维数组转换为图
 */
export declare interface GridGraph {
    grid: number[][];
    cols: number;
    rows: number;
    weights?: (from: [number, number], to: [number, number]) => number;
    neighbors: (node: [number, number]) => [number, number][];
}

export declare function gridReconstructPath(cameFrom: Map<string, [number, number] | null>, start: [number, number], goal: [number, number]): [number, number][];

export declare type gridValueStrategy = (from: number, to: number) => number;

export declare const halfPi: number;

export declare function haversin(x: number): number;

/**
 * 使用 haversine 公式计算球面两点之间的距离
 * @param latlng1
 * @param latlng2
 * @param {number} R - 球体半径
 * @returns
 */
export declare function haversine(latlng1: [number, number], latlng2: [number, number], R?: number): number;

/**
 * 直方图计算函数
 * @param grid2D - 二维数组
 * @param stretch - 拉伸类型
 * @param statistics - 波段统计信息
 * @returns {number[]} - 直方图数组，长度为 256，每个元素表示对应灰度值的像素个数
 */
export declare function hist(grid2D: number[][], stretch?: stretchType, statistics?: {
    max: number;
    min: number;
    mean: number;
}): number[];

/**
 * 快速傅里叶逆变换 complex to real
 * @param X - 傅里叶变换结果（复数）
 * @returns - 逆变换结果
 * - real：函数值
 * - imag：0
 */
export declare function IFFT(X: Complex[]): Complex[];

export declare function IFFT2(X: Complex[][], mode?: 'row' | 'column'): Complex[][];

/**
 * 取 IFFT 结果的实部（也就是原函数值）
 * @param ifftResult
 * @returns
 */
export declare function IFFTReal(ifftResult: Complex[]): number[];

export declare function IFFTReal2(ifftResult: Complex[][], mode?: 'row' | 'column'): number[][];

/**
 * 快速计算最后一点与前三点组成的圆的关系 calculate the relative position of the last point to the circle formed by the first three points
 * - Returns 1 if point d is outside the circle passing through a, b, and c
 * - 返回 1 如果点 d 在通过 a、b 和 c 的圆外
 * - Returns -1 if point d is inside the circle
 * - 返回 -1 如果点 d 在圆内
 * - Returns 0 if the four points are cocircular
 * - 返回 0 如果四个点共圆
 * @param p1
 * @param p2
 * @param p3
 * @param p4
 * @returns {1|-1|0}
 */
export declare function inCircle(p1: Point | [X1: number, Y1: number], p2: Point | [X2: number, Y2: number], p3: Point | [X3: number, Y3: number], p4: Point | [X4: number, Y4: number]): 1 | -1 | 0;

export declare function inCircleRobust(p1: Point | [X1: number, Y1: number], p2: Point | [X2: number, Y2: number], p3: Point | [X3: number, Y3: number], p4: Point | [X4: number, Y4: number]): number;

/**
 * An intermediate point at any fraction along the great circle path between two points
 * @param latlng1
 * @param latlng2
 * @param fraction - f is fraction along great circle route (f=0 is point 1, f=1 is point 2)
 * @returns
 */
export declare function intermediatePoint(latlng1: [number, number], latlng2: [number, number], fraction: number): [number, number];

/**
 * 三维笛卡尔坐标系下的向量插值。
 * This function interpolates between two 3D Cartesian vectors a and b using a parameter t, returning the resulting vector.
 */
export declare function interpolate(a: [number, number, number], b: [number, number, number], t: number): [number, number, number];

/**
 * 二维笛卡尔坐标系下的向量插值。
 * This function interpolates between two 2D Cartesian vectors a and b using a parameter t, returning the resulting vector.
 */
export declare function interpolate2(a: [number, number], b: [number, number], t: number): [number, number];

/**
 * （默认线段求交）内含投影的线段求交函数（计算开销大）
 * @param p1 - 二维向量(x1,y1) 默认认为`经纬度坐标`
 * @param p2 - 二维向量(x2,y2) 默认认为`经纬度坐标`
 * @param p3 - 二维向量(x3,y3) 默认认为`经纬度坐标`
 * @param p4 - 二维向量(x4,y4) 默认认为`经纬度坐标`
 * @param projectionFrom - 投影函数 （在求交之前对输入点投影） 默认为 convertToMercator
 * @param projectionTo - 投影函数 (在求交之后对输出点投影) 默认为 convertToWgs84
 * @param isInfine - 是否视作无穷线段 默认为 false 有限线段
 * @returns {[number,number] | null} - 交点 或 null
 */
export declare function intersection(p1: [number, number], // 第一条线段的起点 
p2: [number, number], // 第一条线段的终点
p3: [number, number], // 第二条线段的起点
p4: [number, number], // 第二条线段的终点
projectionFrom?: (latlng: [number, number]) => [number, number], // 投影函数 （在求交之前对输入点投影）
projectionTo?: (point: [number, number]) => [number, number], // 投影函数 (在求交之后对输出点投影)
isInfine?: boolean): [number, number] | null;

/**
 * 使用 Sutherland-Hodgman 算法计算多边形与多边形的交集
 * @param clipPolygon
 * @param subjectPolygon
 */
export declare function intersectionPolygon(clipPolygon: [number, number][], subjectPolygon: [number, number][]): [number, number][];

export declare function intersectsMBR(mbr1: MBR, mbr2: MBR): boolean;

export declare function isEPSG3857(srsname?: string): boolean;

export declare function isEPSG4326(srsname?: string): boolean;

/**
 * 判断一个数字是否为浮点数
 * @param n
 * @returns
 */
export declare function isFloat(n: number): boolean;

/**
 * @module utils
 * @description 工具函数
 */
/**
 * 判断一个 object 是否是(潜在的)地理对象（是否含有 X，Y 或者 lon，lat 或者 lng，lat 属性）
 * @param obj - 待判断的对象
 * @returns{boolean} - 如果是地理对象则返回 true，否则返回 false
 */
export declare function isPotentialGeoObject(obj: any): boolean;

/**
 * 迭代访问多边形的边（不重复访问）
 * @param polygon - 多边形 [[x1,y1],[x2,y2],...
 * @param callback - 回调函数
 */
export declare function iterPolygonEdge(polygon: [number, number][], callback: (p1: [number, number], p2: [number, number]) => void): void;

/**
 * k均值聚类
 * @param {number} k - 分类个数
 * @param {number} thresh - 质心间变化距离
 * @param {number} maxtime - 最大迭代次数
 * @param {array} points - 二维数组
 * @returns
 * * `groups.length = k` :[
 * [group1],
 * [group2],...
 * ]
 */
export declare function K_means(k: number, thresh: number | undefined, maxtime: number | undefined, points: [number, number][]): [number, number][][] | undefined;

/**
 * - Convert a distance measurement (assuming a spherical Earth) from a real-world unit into radians
 * - 将距离测量值（假设地球是球形的）从现实世界的单位转换为弧度
 * - Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *  - 有效单位：英里，海里，英寸，码，米，千米，厘米，英尺
 * @name lengthToRadians
 * @param {number} distance in real units
 * @param {string} [units="kilometers"] can be degrees, radians, miles, inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} radians
 */
export declare function lengthToRadians(distance: number, units?: Units): number;

export declare class LineString extends Geometry {
    constructor(coordinates: GeoJSONLineString["coordinates"], properties?: any);
    updateBBox(): void;
    toXY(): GeoJSONLineString["coordinates"];
    toMultiPoint(): MultiPoint;
    /**
     * 按照逆时针方向排序点
     */
    static fromGeometry(geometry: GeoJSONLineString): LineString;
    static fromFeature(feature: GeoJSONFeature): LineString;
    static isLineString(lineString: any): lineString is LineString;
}

declare interface Listener {
    fn: Function;
    context?: any;
    once?: boolean;
}

/**
 * MBR (Minimum Bounding Rectangle)
 * y     --------(maxX, maxY)
 * |     |M            |
 * |     |     B       |
 * |     |         R   |
 * |(minX, minY)--------
 * ------------------------> x
 */
/**
 * - MBR 中的 minX, minY, maxX, maxY 的排序在某些情况下会有歧义，尤其是在地理坐标系的语境下。（譬如跨越了反子午圈的情况（斐济群岛））
 * - 所以允许 minX > maxX 遇到这样的情况时，需要进行特殊处理。
 */
export declare type MBR = [number, number, number, number];

/**
 * default projection : SphericalMercator
 * - you can change the projection by passing the second parameter
 */
export declare function MBR2Plane(mbr: MBR, projection?: Projection): MBR;

/**
 * 将 MBR 转化为 逆时针方向的（无孔）多边形数组
 * @param mbr
 */
export declare function mbrToPolygon(mbr: MBR): [number, number][];

/**
 * MBR 转换为 Rectangle
 * @param mbr
 * @returns
 */
export declare function mbrToRectangle(mbr: MBR): Rectangle;

export declare function merge(topology: Topology): GeometryObject;

export declare function mergeArcs(topology: Topology, objects: GeometryObject[]): {
    type: string;
    arcs: number[][][];
};

export declare function mergeMBR(mbr1: MBR, mbr2: MBR): MBR;

export declare function mergePointMBR(mbr: MBR, point: [number, number]): MBR;

export declare function mesh(topology: Topology): GeometryObject;

export declare function meshArcs(topology: Topology, object: GeometryObject, filter: filter): {
    type: string;
    arcs: number[][];
};

/**
 * - 将距离单位米转换为指定单位
 * - Convert distance units from meters to specified units
 * @param distance - 距离（米）
 * @param units - 距离单位
 * @returns {number} - 距离
 */
export declare function metersTo(distance: number, units: Units): number;

export declare function midpoint(latlng1: [number, number], latlng2: [number, number]): [number, number];

export declare class MultiLineString extends GeometryCollection {
    coordinates: GeoJSONMultiLineString["coordinates"];
    constructor(geometries: LineString[] | GeoJSONMultiLineString["coordinates"], properties?: any);
    getCoodinates(): GeoJSONMultiLineString["coordinates"];
    toMultiPoint(): MultiPoint;
    toXY(): GeoJSONMultiLineString["coordinates"];
    addGeometry(geometry: LineString | GeoJSONLineString["coordinates"]): void;
    toGeoJSON(): GeoJSONFeature;
    static fromFeature(feature: GeoJSONFeature): GeometryCollection;
    static fromGeometry(geometry: GeoJSONMultiLineString): GeometryCollection;
}

export declare class MultiPoint extends GeometryCollection {
    readonly coordinates: GeoJSONMultiPoint["coordinates"];
    constructor(geometries: Point[] | GeoJSONMultiPoint["coordinates"], properties?: any);
    toXY(): GeoJSONMultiPoint["coordinates"];
    getCoodinates(): GeoJSONMultiPoint["coordinates"];
    /**
     * - 计算多点的重心
     * - calculate centroid of MultiPoint
     * @param values - 可指定权重数组(可选) 会首先归一化权重数组
     * @returns {Point} 返回重心坐标
     * @see https://en.wikipedia.org/wiki/Centroid
     */
    centroid(values?: number[]): Point;
    /**
     * 将点（类型或数组）、多点类型融合到此 MultiPoint 中
     * @param geometry
     */
    addGeometry(geometry: Point | GeoJSONPoint["coordinates"] | MultiPoint): void;
    toGeoJSON(): GeoJSONFeature;
    static isMultiPoint(geometry: any): geometry is MultiPoint;
    static fromFeature(feature: GeoJSONFeature): GeometryCollection;
    static fromGeometry(geometry: GeoJSONMultiPoint): GeometryCollection;
}

export declare class MultiPolygon extends GeometryCollection {
    readonly coordinates: GeoJSONMultiPolygon["coordinates"];
    constructor(geometries: Polygon[] | GeoJSONMultiPolygon["coordinates"], properties?: any);
    getCoodinates(): GeoJSONMultiPolygon["coordinates"];
    toMultiPoint(): MultiPoint;
    toXY(): GeoJSONMultiPolygon["coordinates"];
    addGeometry(geometry: Polygon | GeoJSONPolygon["coordinates"]): void;
    toGeoJSON(): GeoJSONFeature;
    static fromFeature(feature: GeoJSONFeature): GeometryCollection;
    static fromGeometry(geometry: GeoJSONMultiPolygon): GeometryCollection;
}

declare interface Neighbor {
    [key: number]: number[];
}

export declare function neighbors(objects: Object_2[]): Neighbor[];

/**
 * 归一化二维笛卡尔坐标系下的向量 d，返回一个新的单位向量。
 * This function normalizes a 2D Cartesian vector d, returning a new unit vector.
 */
export declare function normalize(d: [number, number]): [number, number];

export declare function object(topology: Topology, o: GeometryObject): GeometryObject;

declare interface Object_2 {
    type: string;
    arcs: number[][];
    geometries?: GeometryObject;
}

export declare function overlapsMBR(mbr1: MBR, mbr2: MBR): boolean;

/**
 * 2D [Perlin](https://en.wikipedia.org/wiki/Perlin_noise) 噪声
 * @param X - X 坐标 (范围 [0, 1] )
 * @param Y - Y 坐标 (范围 [0, 1] )
 * @returns {number} - 返回值范围在 [-1, 1] 之间
 * @example
 * ```ts
 * const noise = Perlin(0.5, 0.5);
 * console.log(noise);
 * ```
 */
export declare function Perlin(X: number, Y: number): number;

export declare const pi: number;

/**
 * default projection : SphericalMercator
 * - you can change the projection by passing the second parameter
 */
export declare function plane2MBR(plane: MBR, projection?: Projection): MBR;

/**
 * 也可以使用该函数计算两条线段的交点
 * - 现将经纬度坐标投影到平面坐标系下，然后计算交点，最后将交点投影回经纬度坐标系
 * - lonlats -- (projectionFrom) --> XYs -- (planeIntersection) --> XY -- (projectionTo) --> lonlat
 * @param p1 - 二维向量(x1,y1) 默认认为`经纬度坐标`
 * @param p2 - 二维向量(x2,y2) 默认认为`经纬度坐标`
 * @param p3 - 二维向量(x3,y3) 默认认为`经纬度坐标`
 * @param p4 - 二维向量(x4,y4) 默认认为`经纬度坐标`
 * @param projectionFrom - 投影函数 （在求交之前对输入点投影）
 * @param projectionTo - 投影函数 (在求交之后对输出点投影)
 * @param isInfine - 是否视作无穷线段 默认为 false 有限线段
 * @returns {[number,number] | null} - 交点 或 null
 */
export declare function planeIntersection(p1: [number, number], // 第一条线段的起点 
p2: [number, number], // 第一条线段的终点
p3: [number, number], // 第二条线段的起点
p4: [number, number], // 第二条线段的终点
projectionFrom: projectionFun, // 投影函数 （在求交之前对输入点投影）
projectionTo: projectionFun, // 投影函数 (在求交之后对输出点投影)
isInfine?: boolean): [number, number] | null;

/**
 * - 使用 Shoelace Theorem 求多边形面积
 * - calculate the area of a polygon using the Shoelace Theorem
 * @param points - 可以为点类型数组、LineString 类型或者二维数组（需要为墨卡托平面坐标系下）
 * - 需确保点按照顺时针或者逆时针排列
 * - need to ensure that the points are arranged clockwise or counterclockwise
 * @returns
 */
export declare function planePolygonArea(points: Point[] | LineString | [number, number][], radius?: number): number;

/**
 * Point geometry
 */
export declare class Point extends Geometry {
    get lon(): number;
    get lat(): number;
    constructor(coordinates: GeoJSONPoint["coordinates"] | any, properties?: any);
    updateBBox(): void;
    toXY(): GeoJSONPoint["coordinates"];
    static isPoint(geometry: any): geometry is Point;
    static fromGeometry(geometry: GeoJSONPoint): Point;
    static fromFeature(feature: GeoJSONFeature): Point;
}

/**
 * （前提：逆时针多边形的边）判断点是否在当前边的内部(也就是边前进方向的左侧)
 * @param point - 点 [x,y]
 * @param p1 - 边的起点 [x,y]
 * @param p2 - 边的终点 [x,y]
 * @returns
 */
export declare function pointInEdge(point: [number, number], p1: [number, number], p2: [number, number]): boolean;

/**
 * 判断点是否在 MBR 内（默认情况）
 * @param point - 点
 * @param mbr - 最小外包矩形
 * @returns {boolean} 返回是否在 MBR 内 在则返回 true 不在则返回 false
 */
export declare function pointInMBR(point: [number, number], mbr: MBR): boolean;

/**
 * 判断点是否在 MBR 内（跨越了反子午线的情况）
 * - 必须保 MBR 真的跨越了反子午线，否则会出现错误
 * @param point
 * @param mbr
 * @returns
 */
export declare function pointInMBRWithAntimeridian(point: [number, number], mbr: MBR): boolean;

/**
 * 判断点是否在简单多边形内部（平面与经纬度坐标通用，多边形边界算作在内）
 * @param point - [lon,lat]
 * @param polygon - [[lon,lat],[lon,lat],...] （不含空洞）
 * @returns - true if the point is inside the polygon
 */
export declare function PointInsidePolygon(point: [number, number], polygon: [number, number][]): boolean;

/**
 * 判断点是否在 MBR 外（平面与经纬度坐标通用，多边形边界算作在内）
 * determine if a point is outside of a MBR (polygon boundary is considered inside)
 * @param point - [x,y]
 * @param mbr - [minx,miny,maxx,maxy]
 * @param isPlane - 是否需要转换成平面坐标系再进行判断
 * @returns {boolean} - true if the point is outside of the MBR
 * - 如果点在 MBR 外，返回 true
 */
export declare function PointOutsideMBR(point: [number, number], mbr: MBR, isPlane?: boolean): boolean;

export declare class Polygon extends Geometry {
    constructor(coordinates: GeoJSONPolygon["coordinates"], properties?: any);
    toXY(): GeoJSONPolygon["coordinates"];
    toMultiPoint(): MultiPoint;
    updateBBox(): void;
    static isPolygon(geometry: any): geometry is Polygon;
    static fromGeometry(geometry: GeoJSONPolygon): Polygon;
    static fromFeature(feature: GeoJSONFeature): Polygon;
}

/**
 * 返回多边形中 输入索引的前一个点的索引 多边形闭合并按照逆时针方向排列
 * @param index - 索引
 * @param polygon - 多边形 [[x1,y1],[x2,y2],...
 */
export declare function prePointInPolygon(index: number, polygonLength: number): number;

export declare class PriorityQueue<T> {
    private elements;
    empty(): boolean;
    put(item: T, priority: number): void;
    get(): T | undefined;
    isEmpty(): boolean;
}

export declare interface Projection {
    project(latlng: [number, number]): [number, number];
    unproject(point: [number, number]): [number, number];
    bounds: MBR;
    name?: string;
}

/**
 * 投影函数
 */
declare type projectionFun = (latlng: [number, number]) => [number, number];

/**
 * 伪彩色带渲染工厂函数
 * @param type - 拉伸类型
 * @param level - [0, 1] 之间的数组，表示每个颜色的分界点
 * @param colorList - 颜色列表
 * @returns
 */
export declare function pseudoColorBandFactory(type: stretchType, level?: number[], colorList?: string[]): (statistics: {
    max: number;
    min: number;
    mean: number;
}, value: number) => string;

/**
 * 由网格数据生成四叉树(节点)
 */
export declare type QTNode = {
    boundary: MBR;
    children: QTNode[];
    depth: number;
    maxDepth: number;
    isLeaf: boolean;
    isDivided: boolean;
};

export declare class QuadTree {
    private capacity;
    boundary: MBR;
    private points;
    northWest: QuadTree | null;
    northEast: QuadTree | null;
    southWest: QuadTree | null;
    southEast: QuadTree | null;
    private isDivided;
    depth: number;
    maxDepth: number;
    constructor(boundary: MBR, capacity: number, maxDepth?: number);
    contains(point: [number, number], boundary: MBR): boolean;
    intersects(boundary: MBR, range: MBR): boolean;
    /**
     * 插入一个点
     * @param point - 点的坐标
     * @returns {boolean} - 是否插入成功
     */
    insert(point: [number, number]): boolean;
    get pointsList(): [number, number][] | null;
    /**
     * 剖分当前节点
     */
    subdivide(): void;
    /**
     * 四叉树范围查询
     * - 输入一个矩形范围，返回范围内的所有点
     * - 同时支持平面坐标系和经纬度坐标系（跨界线、边界、大范围区域会有 BUG）
     * @param range{MBR} - 查询范围矩形
     * @returns {Array<[number,number]>}
     */
    queryRange(range: MBR): [number, number][];
    /**
     * you need a customRange object to support custom range query
     * - note : this function has the SAME LOGIC as queryRange.
     * @see customRange
     */
    customQuery(range: customRange): [number, number][];
}

declare interface quantized {
    scale: [number, number];
    translate: [number, number];
}

export declare class Queue<T> {
    private data;
    push(item: T): void;
    pop(): T | undefined;
    put(item: T): void;
    get(): T | undefined;
    isEmpty(): boolean;
}

/**
 * R2D usage: 弧度转角度
 * - 180 / PI
 * @example
 * var degrees = radians * R2D;
 */
export declare const R2D: number;

/**
 * - Converts an angle in radians to degrees
 * @name radiansToDegrees
 * @param {number} radians angle in radians
 * @returns {number} degrees between 0 and 360 degrees
 * @example
 * radiansToDegrees(Math.PI / 2); // => 90
 * let resultArray = [Math.PI, Math.PI / 2, 0, -Math.PI / 2, -Math.PI];
 * resultArray.map(radiansToDegrees); // => [180, 90, 0, -90, -180]
 */
export declare function radiansToDegrees(radians: number): number;

/**
 * - Convert a distance measurement (assuming a spherical Earth) from radians to a more friendly unit.
 * - 将距离测量值（假设地球是球形的）从弧度转换为更友好的单位。
 * - Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 * - 有效单位：英里，海里，英寸，码，米，千米，厘米，英尺
 * @name radiansToLength
 * @param {number} radians in radians across the sphere
 * @param {string} [units="kilometers"] can be degrees, radians, miles, inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} distance
 */
export declare function radiansToLength(radians: number, units?: Units): number;

/**
 * 生成随机索引数组（不重复）
 * @param length - 数组长度（自然数）
 * @param num - 随机索引个数（自然数）
 * @returns {number[]} - 随机索引数组
 */
/**
 * 生成随机索引数组（不重复）
 * @param length - 数组长度（自然数）
 * @param num - 随机索引个数（自然数）
 * @returns {number[]} - 随机索引数组
 */
export declare function randomIndexArray(length: number, num: number): number[];

export declare function reactGrid2d(canavs: HTMLCanvasElement, colRow: [number, number], Rect: Rect, // {x, y, w, h}
XY: [number, number] | [null, null], // [x, y]
callback?: (col: number, row: number) => void): void;

export declare function reconstructPath(cameFrom: Map<any, any>, start: any, goal: any): any[];

declare type Rect = {
    x: number;
    y: number;
    w: number;
    h: number;
};

/**
 * Rectangle
 * y  ---------------
 * |  |             |
 * |  |    (x,y)    h
 * |  |             |
 * |  -------w-------
 * ------------------------> x
 */
/**
 * MBR 跨越反子午线的情况
 * |----        ----|
 * | \  |       |\  |
 * | M  |       |B R|
 * |  \ |       |  \|
 * |----        ----|
 * -180     0      180
 * 只有明确知道 MBR 跨越了反子午线的情况下才能使用以下的方法
 * pointInMBRWithAntimeridian()
 * getMBRWithAntimeridian()
 */
/**
 * - Rectangle is a rectangle that bounds a set of points.
 */
export declare type Rectangle = {
    x: number;
    y: number;
    w: number;
    h: number;
};

/**
 * Rectangle 转换为 MBR
 * @param rectangle
 * @returns
 */
export declare function rectangleToMBR(rectangle: Rectangle): MBR;

export declare function reverse(array: any[], n: number): void;

/**
 * - Round number to precision
 * - 将数字四舍五入到指定精度
 * @param {number} num Number
 * @param {number} [precision=0] Precision
 * @returns {number} rounded number
 * @example
 * round(120.4321)
 * //=120
 *
 * round(120.4321, 2)
 * //=120.43
 */
export declare function round(num: number, precision?: number): number;

/**
 * 采样函数
 * @param f - 被采样的函数
 * @param N - 采样点数
 * @param a - 采样区间左端点
 * @param b - 采样区间右端点
 * @param freq - 采样频率
 * @param amp - 采样振幅
 * @returns - 采样结果
 */
export declare function sample(f: (x: number) => number, N: number, a: number, b: number, freq?: number, amp?: number): number[];

/**
 * 使用因子 k 缩放二维笛卡尔坐标系下的向量 vector，返回一个新的缩放后的向量。
 * This function scales a 2D Cartesian vector vector by a factor k, returning a new scaled vector.
 */
export declare function scale(vector: [number, number], k: number): [number, number];

/**
 * - Returns the sign of the input, or zero
 * - 返回输入的符号，或零
 * @param {number} x input
 * @returns {number} -1|0|1 output
 */
export declare function sign(x: number): -1 | 0 | 1;

/**
 * 连续单波段单色带渲染（灰色）
 * @param statistics - 波段统计信息
 * @param value - 当前像素值
 * @param strachFunc - 拉伸函数
 */
export declare function simpleColorBand(statistics: {
    max: number;
    min: number;
    mean: number;
}, value: number, strachFunc?: (value: number, statistics: {
    max: number;
    min: number;
    mean: number;
}) => Number): string;

export declare function simpleColorBandFactory(type: stretchType, isReverse?: boolean): (statistics: {
    max: number;
    min: number;
    mean: number;
}, value: number) => string;

/**
 * 简单离散值颜色计算函数
 * - 离散值范围为整数
 * - 默认与色带索引一一对应
 * @param value
 * @param colorList
 */
export declare function simplePseudoColorBand(value: number, colorList?: string[]): string;

export declare const sin: (x: number) => number;

export declare function Sin3D(x: number, y: number): number;

/**
 * 求解两条球面线段的交点
 * - Given two lines on a sphere, this will return their intersection point.
 * @param latlng11
 * @param latlng12
 * @param latlng21
 * @param latlng22
 * @returns - 返回弧度制的交点坐标[lat, lon]
 * @example
 * intersection([0, 0], [0, 90], [0, 45], [90, 45]); // [1.5707963267948966, 0]
 * // you need to convert the result to degrees if you want to use it in degrees
 * intersection([0, 0], [0, 90], [0, 45], [90, 45]).map(x => x * 180 / Math.PI); // [90, 0]
 */
export declare function sphereIntersection(latlng11: [number, number], latlng12: [number, number], latlng21: [number, number], latlng22: [number, number]): [number, number];

/**
 * 将三维笛卡尔坐标系下的向量 [x, y, z] 转换为球坐标系下的向量 [lat, lon]（弧度制）。
 * This function takes a 3D Cartesian vector [x, y, z] and converts it to spherical coordinates [lat, lon].
 * @example
 * spherical([1, 0, 0]); // [0, 0]
 * spherical([0, 1, 0]); // [1.5707963267948966, 1.5707963267948966]
 * // you need to convert the result to degrees if you want to use it in degrees
 * spherical([0, 1, 0]).map(x => x * 180 / Math.PI); // [90, 90]
 */
export declare function spherical(cartesian: [number, number, number]): [number, number];

export declare function sphericalArea(points: [number, number][], RADIUS?: number): number;

export declare const SphericalMercator: Projection;

/**
 * 将单个跨越了反子午线的 MBR 分割成两个简单的 MBR
 */
export declare function splitMBRWithAntimeridian(mbr: MBR): MBR[];

export declare const sqrt: (x: number) => number;

/**
 * - 将面积单位平方米转换为指定单位
 * - Convert area units from square meters to specified units
 * @param area - 面积（平方米）
 * @param units - 面积单位
 * @returns {number} - 面积
 */
export declare function squareMetersTo(area: number, units: AreaUnits): number;

export declare enum stretchType {
    linear = 0,
    square = 1,
    log = 2,
    power = 3,
    groupStretch = 4
}

/**
 * 抽取二维数组的某一列（或某几列）
 * @param array - 二维数组
 * @param indexArray - 索引数组(或索引)
 */
export declare function subColumnInEL2DArray(array: any[], indexArray: number[] | number): any[];

/**
 * （简易四叉树）创建一个 gridMBR 层面的四叉树
 * @param grid
 * @param band
 * @param maxDepth
 *
 * |---------->x
 * | 2 | 3 |
 * |--------
 * | 0 | 1 |
 * |
 * y
 */
export declare function subdivide2QTree(grid: Grid, maxDepth: number): QTNode;

export declare function testProgress(): void;

/**
 * 节流函数
 * @param func - 要执行的函数
 * @param wait - 等待时间
 * @returns - 返回一个节流函数
 */
export declare function throttle(func: Function, wait: number): (this: any, ...args: any[]) => void;

export declare function toLineString(points: Point[]): LineString;

/**
 * - 将距离单位转换为米
 * - Convert distance units to meters
 * @param distance - 距离
 * @param units - 距离单位
 * @returns {number} - 距离（米）
 */
export declare function toMeters(distance: number, units: Units): number;

export declare function toMultiPoint(points: Point[] | GeoJSONMultiPoint["coordinates"], properties?: any): MultiPoint;

/**
 * the factory function to create a Point(the following ways are equivalent)
 * @example
 * // base usage
 * let point = toPoint(120, 30);
 * // override properties
 * // all properties are optional(可以不传)
 * let point = toPoint(120, 30, { name: 'test' });
 * let point = toPoint([120, 30], { name: 'test' });
 * // lon, lat = X, Y = lng, lat = x, y
 * let point = toPoint({lon: 120, lat: 30}, { name: 'test' });
 */
export declare function toPoint(Lon: number, Lat: number, properties?: any): Point;

export declare function toPoint(coordinates: [number, number], properties?: any): Point;

export declare function toPoint(obj: {
    lon: number;
    lat: number;
} | {
    x: number;
    y: number;
} | {
    lng: number;
    lat: number;
}, properties?: any): Point;

declare interface Topology {
    type: string;
    coordinates: [number, number][];
    lines: Arc[];
    rings: Arc[];
    arcs?: any[];
    objects: geometryOutputs;
    bbox?: [number, number, number, number];
    transform?: quantized;
}

export declare function topology(objects: geometryInputs, quantization: number): dedupedTopology;

/**
 * - 将面积单位转换为平方米
 * - Convert area units to square meters
 * @param area - 面积
 * @param units - 面积单位
 * @returns {number} - 面积（平方米）
 */
export declare function toSquareMeters(area: number, units: AreaUnits): number;

export declare interface Transform {
    scale: [number, number];
    translate: [number, number];
}

export declare function transform(transform?: Transform): (input: number[], i?: number) => [number, number];

/**
 * 计算三角形的外心（对于 Delauany 三角剖分的结果数组）
 * @param points - 原始点数组（墨卡托）
 * @param delaunay - Delauany 三角剖分
 * @param t - 三角形的索引
 * @returns
 */
export declare function triangleCenter(points: any, delaunay: any, t: any, projection?: (point: [number, number]) => [number, number]): [number, number];

/**
 * 真彩色带渲染
 * @param statistics - 波段统计信息列表
 * @param value - 当前像素值
 * @param strachFunc - 拉伸函数
 * @returns
 */
export declare function trueColorBand(statistics: {
    max: number;
    min: number;
    mean: number;
}[], value: number[], strachFunc?: (value: number, statistics: {
    max: number;
    min: number;
    mean: number;
}) => Number): string;

/**
 * 真彩色带渲染工厂函数
 * @param type - 拉伸类型
 * @param isReverse - 是否反转
 * @returns
 */
export declare function trueColorBandFactory(type: stretchType, isReverse?: boolean): (statistics: {
    max: number;
    min: number;
    mean: number;
}[], value: number[]) => string;

export declare type Units = "meters" | "metres" | "millimeters" | "millimetres" | "centimeters" | "centimetres" | "kilometers" | "kilometres" | "miles" | "nauticalmiles" | "inches" | "yards" | "feet" | "radians" | "degrees";

/**
 * - 距离单位内互相转换
 * - Convert distance units to each other
 * @param distance - 距离
 * @param from - 当前距离单位
 * @param to - 目标距离单位
 * @returns {number} - 转换后距离
 */
export declare function unitToUnit(distance: number, from: Units, to: Units): number;

export declare function untransform(transform?: Transform | null): (input: number[], i?: number) => [number, number];

/**
 * 生成UUID
 * @returns - UUID
 */
export declare function UUID(): string;

export declare class Voronoi {
    delaunay: Delaunator;
    points: number[][];
    /**
     * - 从点数组构造 Voronoi 图或包装 Delaunator
     * - Construct Voronoi diagram from points array or wrap Delaunator
     * @param params - 点数组或 Delaunator 对象： [[x1, y1], [x2, y2], ... 或 Delaunator 对象
     * @param x - 若 params 为点数组，则为获取 x 坐标的函数（默认规则，取表示点的二维数组中首位）
     * @param y - 若 params 为点数组，则为获取 y 坐标的函数（有默认规则，取表示点的二维数组中末位）
     */
    constructor(params?: number[][] | Delaunator, x?: (p: number[]) => number, y?: (p: number[]) => number);
    /**
     * - 获取 Voronoi cell 的顶点数组
     * @returns {Map<number, number[][]>} - Map<编号, 顶点数组>
     */
    getVoronoi(): Map<number, number[][]>;
    /**
     * 使用 MBR 对 Voronoi 图进行裁剪（由于精度问题，极端情况下不可靠）
     * @param MBR
     * @returns
     */
    cutVoronoiByMBR(MBR: [number, number, number, number]): Map<any, any>;
    /**
     * - 更加健壮的 Voronoi 图（将超出 MBR 部分都删去）
     * @param MBR
     * @returns
     */
    robustVoronoi(MBR: [number, number, number, number]): Map<any, any>;
    isInsideMBR(points: number[][], MBR: [number, number, number, number]): boolean;
}

/**
 * 生成 Worley 噪声距离场
 * @param row - 行数
 * @param col - 列数
 * @param n - 噪声源数量
 * @returns {number[][]} - 返回值范围
 */
export declare function worleyNoise(row: number, col: number, n: number): number[][];

/**
 * 将屏幕像素坐标转化为对应的行列号
 * @param colRow - 数据行列数
 * @param Rect - 绘制范围
 * @param XY - 屏幕坐标
 */
export declare function XY2ColRow(colRow: [number, number], Rect: Rect, // {x, y, w, h}
XY: [number, number]): number[];

/**
 * 生成 条纹 噪声，可选水平或垂直
 * @param row - 行数
 * @param col - 列数
 * @param n - 条纹数量
 * @param mode - 模式
 */
export declare function zebraNoise(row: number, col: number, n: number, mode?: 'horizontal' | 'vertical' | 'diagonal' | 'all'): number[][];

export { }
