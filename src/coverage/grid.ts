/**
 * Coverage 栅格数据模块
 */
import { MBR } from '../geometry';
import { PointOutsideMBR } from '../topology';

/**
 * 网格类（本质是三维数组）:
 * - 三维数组的每一层代表一个波段
 * - 其中一层为一个二维数组，代表一个波段的值，并与对应的 MBR 对象关联用于挂接地图上的位置
 * - MBR 统一使用 `WGS84` 坐标系
 */
export class Grid{
    MBR: MBR; // default
    data: number[][][]; // 三维数组
    shape: number[]; // 三维数组的形状
    rows: number;  // 行数
    cols: number;  // 列数
    bands: number; // 波段数
    stasticsCache: {max: number, min: number, mean: number}[] = [];

    constructor(MBR: MBR, data: number[][][]){
        this.MBR = MBR;
        this.data = data;
        this.shape = [data.length, data[0].length, data[0][0].length];
        [this.bands, this.rows, this.cols] = this.shape;
    }
    getShape(){
        return [this.data.length, this.data[0].length, this.data[0][0].length];
    }

    getBand(band: number): number[][]{
        return this.data[band];
    }

    get width(){
        return this.cols;
    }

    get height(){
        return this.rows;
    }

    get bandCount(){
        return this.bands;
    }

    setMBR(MBR: MBR){
        this.MBR = MBR;
    }

    getXYZValue(xy: [number, number], z: number = 0): number{
        let x = xy[0];
        let y = xy[1];
        return this.data[z][y][x];
    }

    set XYZValue(xyzv: [number, number, number, number]){
        let x = xyzv[0];
        let y = xyzv[1];
        let z = xyzv[2];
        let v = xyzv[3];
        let oriV = this.data[z][y][x];
        this.data[z][y][x] = v;

        if(this.stasticsCache[z]){
            // 更新统计信息
            let max = this.stasticsCache[z].max;
            let min = this.stasticsCache[z].min;
            let mean = this.stasticsCache[z].mean;
            let value = this.data[z][y][x];

            if(value > max){
                max = value;
            }
            if(value < min){
                min = value;
            }
            let sum = mean * this.rows * this.cols;
            sum = sum - oriV + value;
            mean = sum / (this.rows * this.cols);
            this.stasticsCache[z] = {max, min, mean};
        }
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
        let subGrid = [] as number[][][];
        for(let b of band){
            let bandData = [] as number[][];
            for(let row = minRow; row <= maxRow; row++){
                let rowData = [] as number[];
                for(let col = minCol; col <= maxCol; col++){
                    rowData.push(this.data[b][row][col]);
                }
                bandData.push(rowData);
            }
            subGrid.push(bandData);
        }
        return subGrid;
    }

    // 在内部修改网格数据 使用均值替换0等无效值
    // 由于网格数据是三维数组，因此需要指定波段号

    /**
     * 在内部修改网格数据 使用均值替换0等无效值
     * @param band - 波段号
     */
    fillInvalidValue(band: number){
        let bandData = this.data[band];
        let sum = 0;
        let count = 0;
        for(let row = 0; row < this.rows; row++){
            for(let col = 0; col < this.cols; col++){
                let value = bandData[row][col];
                if(value === 0){
                    continue;
                }else{
                    sum += value;
                    count++;
                }
            }
        }
        let mean = sum / count;
        for(let row = 0; row < this.rows; row++){
            for(let col = 0; col < this.cols; col++){
                let value = bandData[row][col];
                if(value === 0 || value === -9999 || value === 999999){
                    bandData[row][col] = mean;
                }
            }
        }
    }

    /**
     * 与 `getSubGrid` 方法类似，但返回的是一个 Grid 对象
     * @param GridMBR - 网格范围 行列号索引表示
     * @param band - 波段号数组
     * @returns - 返回网格数据，格式为：[band][row][col]
     */
    getSubGridObj(GridMBR: MBR, band: number[] = [0]): Grid{
        // 由输入的行列号范围提取网格数据，可以指定行列号范围及波段号
        let minRow = GridMBR[0];
        let minCol = GridMBR[1];
        let maxRow = GridMBR[2];
        let maxCol = GridMBR[3];
        let subGridData = [] as number[][][];
        for(let b of band){
            let bandData = [] as number[][];
            for(let row = minRow; row <= maxRow; row++){
                let rowData = [] as number[];
                for(let col = minCol; col <= maxCol; col++){
                    rowData.push(this.data[b][row][col]);
                }
                bandData.push(rowData);
            }
            subGridData.push(bandData);
        }
        let subGrid = new Grid(GridMBR, subGridData);
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
        if(!this.stasticsCache[band]){
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
            this.stasticsCache[band] = {max, min, mean};
        }
        return this.stasticsCache[band];
    }

    // Binarization a certain band of the grid; get a value, less than which is 0, greater than which is 1
    // 二值化网格数据，返回二值化后的网格数据
    // - threshold: 二值化阈值

    /**
     * 二值化网格数据，返回二值化后的网格数据
     * @param band - 波段号
     * @param threshold - 二值化阈值
     */
    binarization(band: number, threshold: number): number[][]{
        let bandData = this.data[band];
        let binarizationData = [] as number[][];
        for(let row = 0; row < this.rows; row++){
            let rowData = [] as number[];
            for(let col = 0; col < this.cols; col++){
                let value = bandData[row][col];
                if(value < threshold){
                    rowData.push(0);
                }else{
                    rowData.push(1);
                }
            }
            binarizationData.push(rowData);
        }
        return binarizationData;
    }

    /** 
    * the result grid size is [rows - 1, cols - 1], and the render function should move 1/2 grid size to the left and up
    */
    getCoutourCode(band: number, threshold: number): number[][]{
        // 二值化后，依次逆时针拾取相邻四个格网的值，组成四位二进制数，转换为十进制数，即为等值线编码
        let binarizationData = this.binarization(band, threshold);
        let contourCode = [] as number[][];
        for(let row = 0; row < this.rows - 1; row++){
            let rowData = [] as number[];
            for(let col = 0; col < this.cols - 1; col++){
                let code = 0;
                code += binarizationData[row][col] * 8;
                code += binarizationData[row][col + 1] * 4;
                code += binarizationData[row + 1][col + 1] * 2;
                code += binarizationData[row + 1][col] * 1;
                rowData.push(code);
            }
            contourCode.push(rowData);
        }

        return contourCode;
    }

    getMean(band: number): number{
        let bandData = this.data[band];
        let sum = 0;
        for(let row = 0; row < this.rows; row++){
            for(let col = 0; col < this.cols; col++){
                sum += bandData[row][col];
            }
        }
        return sum / (this.rows * this.cols);
    }

    getSorted1DArray(band: number): number[]{
        let bandData = this.data[band];
        let array = [] as number[];
        for(let row = 0; row < this.rows; row++){
            for(let col = 0; col < this.cols; col++){
                array.push(bandData[row][col]);
            }
        }
        array.sort((a,b) => a - b);
        return array;
    }

    static fromFillValue(
        fillVal : number = 0,
        shape : [number, number, number]
    ){
        let data = [] as number[][][];
        for(let i = 0; i < shape[0]; i++){
            let bandData = [] as number[][];
            for(let j = 0; j < shape[1]; j++){
                let rowData = [] as number[];
                for(let k = 0; k < shape[2]; k++){
                    rowData.push(fillVal);
                }
                bandData.push(rowData);
            }
            data.push(bandData);
        }
        // use default MBR
        return new Grid([0,0,0,0], data);
    }
    
}


/**
 * 二值化网格数据，返回二值化后的网格数据
 * @param grid - grid 对象
 * @param band - 波段号
 * @param threshold - 二值化阈值
 * @returns {number[][]} - 返回二值化后的网格数据
 */
export function binarization(grid: Grid, band: number, threshold: number): number[][]{
    let bandData = grid.data[band];
    let binarizationData = [] as number[][];
    for(let row = 0; row < grid.rows; row++){
        let rowData = [] as number[];
        for(let col = 0; col < grid.cols; col++){
            let value = bandData[row][col];
            if(value < threshold){
                rowData.push(0);
            }else{
                rowData.push(1);
            }
        }
        binarizationData.push(rowData);
    }
    return binarizationData;
}

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
export function subdivide2QTree(
    grid: Grid,
    maxDepth: number,
): QTNode
{   
    let num = grid.rows * grid.cols;
    let maxDepth2 = findMaxDepth(num) + 3;
    
    if(maxDepth > maxDepth2 || maxDepth < 0){
        maxDepth = maxDepth2;
    }

    let boundary = [0,0,grid.rows - 1, grid.cols - 1] as MBR;
    return getQTNode(boundary, 0, maxDepth);
}

function getQTNode(
    boundary: MBR,
    depth: number,
    maxDepth: number,
): QTNode{
    let node: QTNode = {
        boundary,
        children: [],
        depth,
        maxDepth,
        isLeaf: false,
        isDivided: false,
    };
    if(depth === maxDepth - 1){
        node.isLeaf = true;
        return node;
    }else{
        node.isDivided = true;
        let minRow = boundary[0];
        let minCol = boundary[1];
        let maxRow = boundary[2];
        let maxCol = boundary[3];
        let midRow =(minRow + maxRow) / 2;
        // 取整
        midRow = Math.floor(midRow);
        let midCol = (minCol + maxCol) / 2;
        // 取整
        midCol = Math.floor(midCol);
        let topLeftMBR = [minRow, midCol, midRow, maxCol] as MBR;
        let topRightMBR = [midRow, midCol, maxRow, maxCol] as MBR;
        let bottomLeftMBR = [minRow, minCol, midRow, midCol] as MBR;
        let bottomRightMBR = [midRow, minCol, maxRow, midCol] as MBR;
        let topLeftNode = getQTNode(topLeftMBR, depth + 1, maxDepth);
        let topRightNode = getQTNode(topRightMBR, depth + 1, maxDepth);
        let bottomLeftNode = getQTNode(bottomLeftMBR, depth + 1, maxDepth);
        let bottomRightNode = getQTNode(bottomRightMBR, depth + 1, maxDepth);
        node.children.push(topLeftNode);
        node.children.push(topRightNode);
        node.children.push(bottomLeftNode);
        node.children.push(bottomRightNode);
        return node;
    }
}

/**
 * 由网格数据生成四叉树(节点)
 */
export type QTNode = {
    boundary: MBR,
    children: QTNode[],
    depth: number,
    maxDepth: number,
    isLeaf: boolean,
    isDivided: boolean,
}

/**
 * 寻找四的幂次方
 */
function findMaxDepth(
    n: number
){
    // 寻找距离 n 最近的 4 的幂次方
    let maxDepth = 0;
    let num = 1;
    while(num < n){
        num *= 4;
        maxDepth++;
    }
    return maxDepth;
}

/**
 * 去除最大最小值
 * @param fft - 二维数组
 */
export function deMaxMin(
    fft : number[][],
  ){
    let max = -Infinity;
    let min = Infinity;
    for(let i = 0; i < fft.length; i++){
      for(let j = 0; j < fft[0].length; j++){
        if(fft[i][j] > max){
          max = fft[i][j];
        }
        if(fft[i][j] < min){
          min = fft[i][j];
        }
      }
    }
    // 去除最大最小值
    for(let i = 0; i < fft.length; i++){
      for(let j = 0; j < fft[0].length; j++){
        if(fft[i][j] === max || fft[i][j] === min){
          fft[i][j] = 0;
        }
      }
    }
  }