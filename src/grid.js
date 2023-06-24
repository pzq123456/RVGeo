import {kernel_2Dmatrix_1,kernel_2Dmatrix_2,kernel_2Dmatrix_3} from './kernel.js'
import { MBRect, Point } from './base.js'; 

export class grid {
    /**
     * 栅格类 默认生成的栅格是 0 填充栅格
     * @param {number} row 栅格行数
     * @param {number} column 栅格列数
     * @param {number} filler 填充值（默认为 0 ）
     */
    constructor(row,column, filler = 0){
        this.row = row;
        this.column = column;
        this.gridset = this.#creataGridSet(filler);
    }


    

    /**
     * 创建空白二维栅格(默认填充值为 0)
     * @param {Number} filler 
     * @returns 
     */
    #creataGridSet(filler){       
        const matrix = Array(this.row)
            .fill()
            .map( () =>  Array(this.column).fill(filler));
    return matrix;
    }

    /**
     * 将内部二维数组一维化
     * @returns {array} 返回一维数组 包含所有的栅格值
     */
    get1DArray(){
        let mm = this.gridset;
        let tm = [];
        for(let i = 0; i < this.row ;i++){
            for(let j = 0; j < this.column;j++){
                tm.push(mm[i][j])
            }
        }
        return tm;
    }

    get2DArray(){
        return this.gridset;
    }

    /**
     * **注意：该操作会改变栅格本身 请谨慎操作！**
     * 在原栅格四周缓冲出一个size大小的区域 并填充上 num 值
     * * 示意：
     * * [num  ... num] --- num*(column+2*size)
     * * [num .... sizeth num] + [ori_row_i] + [num .... sizeth num]
     * * .....
     * * [num  ... num] --- num*(column+2*size)
     * @param {number} size - padding区域大小
     * @param {number} num - 填入此区域的值
     */
    padding_(size,num){
        this.paddingsize = size;//记录下paddingsize
        let row = this.row + 2*size;
        let column = this.column + 2*size;

        for(let itm of this.gridset){
            for(let i =0;i<size;i++){
                itm.push(num);
                itm.unshift(num);
            }
        }
        
        for(let i =0;i<size;i++){
            let  tpp = [];
            tpp.length = column;
            tpp.fill(num);

            this.gridset.push(tpp); // 尾部插入
            this.gridset.unshift(tpp); // 头部插入
        }
        this.row = row;
        this.column =column;
    }


 /** 
     * ### 反padding操作 
     * 抵消padding操作的效果
     * 在padding之后调用以抵消padding的效果 只可使用一次！
     */
    depadding_(){
        let row = this.row - 2*this.paddingsize;
        let column = this.column - 2*this.paddingsize;

        for(let itm of this.gridset){
            for(let i =0;i<this.paddingsize;i++){
                itm.pop();
                itm.shift();
            }
        }

        for(let i =0;i<this.paddingsize;i++){
            this.gridset.pop(); // 尾部插入
            this.gridset.shift(); // 头部插入
        }
        this.row = row;
        this.column =column;
    }
   
    /**
     * **需要先根据算子的大小进行padding操作 否则会有NaN错误**
     * 基于拉普拉斯算子的二维边缘提取 
     * @returns {array} 返回卷积结果（二维矩阵）
     */
    default_convolve(){
        let data = this.gridset;
        let row = this.row;
        let column = this.column;
        let size = this.paddingsize;
        let res = [];

        for(let i = size ; i< row - size ; i++ ){
            let tpp =[];
            for(let j = size ; j < column -size ; j++){
                
                let vma = [
                    [data[i-1][j-1],data[i-1][j],data[i-1][j+1]],
                    [data[i][j-1],data[i][j],data[i][j+1]],
                    [data[i+1][j-1],data[i+1][j],data[i+1][j+1]]
                ] // 取附近3x3区域输入拉普拉斯算子

                tpp.push(kernel_2Dmatrix_1(vma));//将计算结果保存在结果矩阵中
            }
            res.push(tpp);
        }
        return res;
    }

    /**
     * ** 需要先根据算子的大小进行padding操作 否则会有NaN错误 **
     * 计算栅格坡度
     * @returns {array} 返回卷积结果（二维矩阵）
     */
     get_Slope(){
        let data = this.gridset;
        let row = this.row;
        let column = this.column;
        let size = this.paddingsize;
        let res = [];

        for(let i = size ; i< row - size ; i++ ){
            let tpp =[];
            for(let j = size ; j < column -size ; j++){
                
                let vma = [
                    [data[i-1][j-1],data[i-1][j],data[i-1][j+1]],
                    [data[i][j-1],data[i][j],data[i][j+1]],
                    [data[i+1][j-1],data[i+1][j],data[i+1][j+1]]
                ] // 取附近3x3区域输入拉普拉斯算子

                tpp.push(kernel_2Dmatrix_2(vma));//将计算结果保存在结果矩阵中
            }
            res.push(tpp);
        }
        return res;
    }

    // 根据阈值进行二值化（也叫重分类）
    // 二值化后的栅格值只有0和1
    // 0表示不属于该类 1表示属于该类
    // 该方法会改变原栅格
    /**
     * 根据阈值进行二值化（也叫重分类）
     * - **该方法不反回新的栅格，而是直接在原栅格上进行修改**
     * @param {number} threshold 阈值
     * @returns - 无返回值(直接在原栅格上进行修改)
     * - 重分类后的栅格值只有0和1，而不是返回一个新的栅格
     */
    reClassify_Binary_(threshold){
        alert("该方法会改变原栅格");
        for(let i = 0; i < this.row ;i++){
            for(let j = 0; j < this.column;j++){
                if(this.gridset[i][j] >= threshold){
                    this.gridset[i][j] = 1;
                }else{
                    this.gridset[i][j] = 0;
                }
            }
        }
        console.log(this.gridset);
    }


     /**
     * **需要先根据算子的大小进行padding操作 否则会有NaN错误**
     * 计算栅格坡度
     * @returns {array} 返回卷积结果（二维矩阵）
     */
      get_Aspect(){
        let data = this.gridset;
        let row = this.row;
        let column = this.column;
        let size = this.paddingsize;
        let res = [];

        for(let i = size ; i< row - size ; i++ ){
            let tpp =[];
            for(let j = size ; j < column -size ; j++){
                let vma = [
                    [data[i-1][j-1],data[i-1][j],data[i-1][j+1]],
                    [data[i][j-1],data[i][j],data[i][j+1]],
                    [data[i+1][j-1],data[i+1][j],data[i+1][j+1]]
                ] // 取附近3x3区域输入拉普拉斯算子
                tpp.push(kernel_2Dmatrix_3(vma));//将计算结果保存在结果矩阵中
            }
            res.push(tpp);
        }
        return res;
    }

    /**
     * 获取栅格采样直线，自动获取对应直线上的栅格采样值
     * @param {number} x1 - 采样直线起始像元行号
     * @param {number} y1 - 采样直线起始像元列号
     * @param {number} x2 - 采样直线终止像元行号
     * @param {number} y2 - 采样直线终止像元列号
     */
    get_SampleLine(x1,y1,x2,y2){
        let det_x = x2 - x1;
        let det_y = y2 - y1;

        let res = [];
        if(Math.abs(det_x)<Math.abs(det_y)){
            let num = Math.abs(det_y);
            let dx = det_x / num;
            let dy = det_y / num;
            
            for(let i=0;i<num;i++){
                let x = Math.round(x1 + i*dx);
                let y = y1 + i*dy;
                res.push([x,y]);
            }

        }
        else{
            let num = Math.abs(det_x);
            let dy = det_y / num;
            let dx = det_x / num;
            
            for(let i=0;i<num;i++){
                let y = Math.round(y1 + i*dy);
                let x = x1 + i*dx;
                res.push([x,y]);
            }

        }
        return res;
    }

    /**
     * 获取对应行列号的栅格值
     * @param {number} row - 所选栅格的行号
     * @param {number} column - 所选栅格的列号
     * @param {number} scale - **（可选）** 栅格值等比率缩放
     * @returns {number} 返回（放缩）后的栅格值
     */
    get_CellValue(row,column,scale){
        if(scale == undefined){
            scale = 1;
        }
       
            let res = this.gridset[row][column];
            return res * scale;
    }

    /**
     * 按照栅格行列号取栅格集合的值
     * * 输入格式：
     * * [ [row1,column1],
     * *   [row2,column2],...]
     * @param {array} list  - 栅格列表
     * @param {number} scale - 栅格值修正比率（可将栅格值整体乘此数值）
     * @returns {array} 返回栅格值
     */
    get_CellValueList(list,scale){
        let res = [];
        for(let itm of list){
            let itt = this.get_CellValue(itm[0],itm[1],scale);
            res.push(itt);
        }
        return res;
    }

    // 以下代码为 空间分析实习（一周）的功能更新。2023.6.20 
    
    /**
     * （单起点）累积表面生成算法
     * - 该算法默认自身包含的栅格为障碍物栅格（目前未实现）
     * @param {*} row 起点行号
     * @param {*} col 起点列号
     * @param {*} value 起点值（一般为0，代表该表面的最低值）
     * @returns {Array} 返回一个二维矩阵
     */
    splash_AccmulationSerface(row,col,value = 0){
        // 首先创建空白累积表面 默认填充值为 -1
        const accSerface = this.#creataGridSet(-1);
        let queue = []; // shift

        // 判断起点是否合法
        if(value === -1) {
            console.log("splash_AccmulationSerface: 起点值为-1,返回空白累积表面");
            return accSerface;
        } 
        if(row < 0 || row >= this.row || col < 0 || col >= this.column) {
            console.log("splash_AccmulationSerface: 起点不在栅格范围内");
            return null;
        } // 起点不在栅格范围内
        if(this.row < 3 || this.column < 3) {
            console.log("splash_AccmulationSerface: 栅格太小，无法生成累积表面");
            return null;
        } // 栅格太小
        
        // 计算dx dy 使得其成为若干八边形
        const dx = [0,0,1,-1,1,1,-1,-1,2,-2,2,-2,1,-1,0,0,1,-1,1,-1];
        const dy = [1,-1,0,0,1,-1,1,-1,0,0,1,-1,2,-2,1,-1,1,-1,0,0];

        const n = this.row;
        const m = this.column;

        queue.push([row,col]);
        accSerface[row][col] = value;
        // 广度优先搜索
        while(queue.length > 0){
            let [x,y] = queue.shift();
            for(let i = 0 ; i < dx.length ; i++){
                let nx = x + dx[i];
                let ny = y + dy[i];
                if(nx >= 0 && nx < n && ny >= 0 && ny < m && accSerface[nx][ny] === -1){
                    accSerface[nx][ny] = accSerface[x][y] + 1;
                    queue.push([nx,ny]);
                }
            }
        }

        return accSerface;
    }

    // === 性能调优 ===
    // 对内含栅格进行四叉树 分割
    // 该算法为递归算法
    // 该算法为私有方法
    /**
     * 对内含栅格进行四叉树分割
     * #### `internal function` 该算法处于内部测试阶段，不建议使用。
     * > - 栅格部分的代码，下一个版本将会进行重构。
     * > - 计算及渲染将引入webworker，以提高性能。同时内部数据将基于四叉树进行管理。
     * - 该算法为递归算法
     * - 该算法为私有方法
     * @param {Array} gridset - 栅格集合
     * @param {number} threshold - 分割阈值
     * @returns {Array} 返回一个二维数组，包含若干个栅格集合
     * @example
     * // 返回一个二维数组，包含若干个栅格集合
     * let res = quadTreeSplit(gridset,threshold);
     * // res = [gridset1,gridset2,gridset3,gridset4];
     */
    #quadTreeSplit(gridset,threshold){
        let res = [];
        let n = gridset.length;
        let m = gridset[0].length;
        let flag = true;
        for(let i = 0 ; i < n ; i++){
            for(let j = 0 ; j < m ; j++){
                // 如果有一个栅格值大于阈值，则不分割
                if(gridset[i][j] > threshold){
                    flag = false;
                    break;
                }
            }
            if(!flag) break;
        }
        if(flag){
            res.push(gridset);
            return res;
        }
        // 递归分割
        let gridset1 = [];
        let gridset2 = [];
        let gridset3 = [];
        let gridset4 = [];
        for(let i = 0 ; i < n/2 ; i++){
            gridset1.push(gridset[i].slice(0,m/2));
            gridset2.push(gridset[i].slice(m/2,m));
        }
        for(let i = n/2 ; i < n ; i++){
            gridset3.push(gridset[i].slice(0,m/2));
            gridset4.push(gridset[i].slice(m/2,m));
        }
        res = res.concat(this.#quadTreeSplit(gridset1,threshold));
        res = res.concat(this.#quadTreeSplit(gridset2,threshold));
        res = res.concat(this.#quadTreeSplit(gridset3,threshold));
        res = res.concat(this.#quadTreeSplit(gridset4,threshold));
        return res;
    }


    /**
     * 将内部栅格转化为整数栅格
     * @returns {Array} 返回一个二维矩阵,该矩阵为整数栅格
     */
    toIntGrid(){
        let res = this.#creataGridSet(0);
        for(let i=0;i<this.row;i++){
            for(let j=0;j<this.column;j++){
                res[i][j] = Math.round(this.gridset[i][j]);
            }
        }
        console.log("转化为整数栅格成功");
        console.log(res);
        return res;
    }

    /**
     * 根据栅格值生成等值线(V_ 代表与矢量图形有关的函数)
     * - 这是一个与矢量图形相耦合的函数，需要传入一个矩形框用于标定等值线的范围
     * - 该函数返回一个二维数组，数组中的每个元素都是一个等值线的点集
     * - #### 这部分代码存在问题，无法完美绘制等值线，在较为复杂的地形上会失效。并且，该部分代码需要和线抽稀算法配合，阈值调试也极为重要。 
     * @param {Array} MBR - 矩形框，格式为 [x1,y1,x2,y2]
     * @param {number} level - 等值线数量
     * @param {Stastic} stastic - 统计类，用于统计栅格值的最大最小值
     * @returns {Array} 返回一个二维数组，数组中的每个元素都是一个等值线的点集
     */
    V_get_Contour(MBR, level ,stastic){
        // 首先 获取栅格值的最大最小值并计算等值线间隔
        let max = stastic.max;
        let min = stastic.min;


        let interval = (max - min) / level;
        // 然后根据等值线间隔，计算出每个等值线的值 并放到一个数组中
        let levels = [];


        for(let i = 0 ; i < level ; i++){
            // 取整
            levels.push(Math.round (min + i * interval));
        }
        console.log("等值线值数组");
        console.log(levels);
        // 然后开始遍历栅格，根据栅格值和等值线值的关系，计算出等值线的点集
        const queue = [];
        // 首先对对栅格进行分类，将连续的栅格放到一个集合中
        // 然后对每个集合进行等值线计算，获取边界点集
        // 最后将边界点集转换为点集
        // 1. 首先对栅格进行分类
        const gridset = this.toIntGrid();
        const row = gridset.length;
        const column = gridset[0].length;
        const dx = [0,0,1,-1,1,1,-1,-1];
        const dy = [1,-1,0,0,1,-1,1,-1];
        const vis = this.#creataGridSet(0);

        
        const contour = [];
        const ValueList = []; // 用于存储每个等值线的值    
        // 根据 栅格值与 value 的关系，将栅格进行分类
        for(let i = 0 ; i < row ; i++){
            for(let j = 0 ; j < column ; j++){
                // 首先判断该栅格是否已经被访问过
                if(vis[i][j] === 1) continue;
                // 然后判断该栅格是否为等值线上的点
                let value = gridset[i][j];
                let flag = false;
                    // 如果该值落在值级别区间中，则认为该栅格为等值线上的点
                    // 为保证区间的完整性，在数组第一个值前加入一个无穷小在数组最后一个值后加入一个无穷大
                    // 无穷大为 Infinity 无穷小为 -Infinity
                    let expLevels = [...levels,Infinity];
                    // for(let k = 0 ; k < expLevels.length - 1 ; k++){
                    //     if(value >= expLevels[k] && value < expLevels[k+1]){
                    //         flag = true;

                    //         // 将该栅格的值放到 ValueList 中
                    //         ValueList.push(value);
                    //         break;
                    //     }
                    // }
                    


                for(let k = 0 ; k < levels.length ; k++){
                    if( value <= expLevels[k+1] && value > expLevels[k]){
                        flag = true;
                        break;
                    }
                }
                if(!flag) continue;

                // 然后对该栅格进行广度优先搜索，将与其相连的栅格放到一个集合中
                let queue = [];
                let set = [];
                queue.push([i,j]);
                vis[i][j] = 1;
                set.push([i,j]);
                // 该集合的值为 value
                while(queue.length > 0){
                    let [x,y] = queue.shift();
                    for(let k = 0 ; k < dx.length ; k++){
                        let nx = x + dx[k];
                        let ny = y + dy[k];
                        if(nx >= 0 && nx < row && ny >= 0 && ny < column && vis[nx][ny] === 0 && gridset[nx][ny] === value){
                            vis[nx][ny] = 1;
                            queue.push([nx,ny]);
                            set.push([nx,ny]);
                        }
                    }
                }
                // 最后将该集合放到 contour 中
                contour.push(set);
                ValueList.push(value);
            }
        }

        //  下面需要对 contour 中每个集合中的点进行顺时针排序
        for(let i = 0 ; i < contour.length ; i++){
            let set = contour[i];
            let center = [0,0];
            for(let j = 0 ; j < set.length ; j++){
                center[0] += set[j][0];
                center[1] += set[j][1];
            }
            center[0] /= set.length;
            center[1] /= set.length;
            
            set.sort((a,b)=>{
                let angle1 = Math.atan2(a[0] - center[0],a[1] - center[1]);
                let angle2 = Math.atan2(b[0] - center[0],b[1] - center[1]);
                return angle1 - angle2;
            });
        }
        // 然后对 contour 中的每个集合进行闭合
        // 对于可以闭合的等值线，将其闭合
        // 所谓可以闭合，指的是起点和终点之间的距离小于一个阈值
        // 首先计算出阈值，我们假设阈值为所有曲线起点和终点之间距离的平均值 
        let threshold = 0;
        for(let i = 0 ; i < contour.length ; i++){
            let set = contour[i];
            let [x1,y1] = set[0];
            let [x2,y2] = set[set.length - 1];
            let dis = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
            threshold += dis;
        }
        threshold /= contour.length;
        threshold *= 0.09;
        // 然后对每个集合进行判断
        for(let i = 0 ; i < contour.length ; i++){
            let set = contour[i];

            let [x1,y1] = set[0];
            let [x2,y2] = set[set.length - 1];
            let dis = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));

             if(dis <= threshold){
                // 说明该集合可以闭合
                set.push(set[0]);
            }

        }


        // 最后将 contour 中的每个集合转换为点集


        let contourList = [];

        // 将栅格行列转换为点集
        for(let i = 0 ; i < contour.length ; i++){
            let points = [];
            for(let j = 0 ; j < contour[i].length ; j++){
               let poi = this.get_CellPoint_in_MBR(MBR,contour[i][j][0],contour[i][j][1]);
                points.push(poi);
            }
            contourList.push(points);
        }

        return {
            "value":ValueList,
            "contour":contourList
        }
                

    }

    /**
     * 
     * @param {Array} reaterlist 三维数组，[ [ [x1,y1],[x2,y2],... ],[ [x1,y1],[x2,y2],... ],...
     * @param {*} MBR 
     */
    V_RasLine2VecLine(reaterlist,MBR){
        let contourList = [];
        for(let i = 0 ; i < reaterlist.length ; i++){
            let points = [];
            for(let j = 0 ; j < reaterlist[i].length ; j++){
                
                let poi = this.get_CellPoint_in_MBR(MBR,reaterlist[i][j][0],reaterlist[i][j][1]);
                points.push(poi);
            }
            contourList.push(points);
        }
        // console.log("V_RasLine2VecLine");
        // console.log(contourList);
        return contourList;

    }

    // 根据输入的分级数，及指定的层次数，获取 DEM 切面栅格 
    /**
     *  根据输入的分级数，及指定的层次数，获取 DEM 切面栅格 
     * @param {Number} levels - 分级数
     * @param {Number} index - 指定获取的层次数（0~levels）
     * @param {Stastic} stastic - 统计信息
     * @returns {Array} - 返回一个二维数组，表示 DEM 切面栅格
     */
    get_DEM_Slice(levels,index,stastic){
        // 首先 获取栅格值的最大最小值并计算间隔
        let max = stastic.max;
        let min = stastic.min;
        let interval = (max - min) / levels;
        // 然后计算出每个等级的值
        let expLevels = [];
        for(let i = 0 ; i <= levels ; i++){
            expLevels.push(min + i * interval);
        }

        // 根据索引获取对应的等级，该等级以下的实体设为1， 空白设为0
        let level = expLevels[index];
        // 新建空白栅格作为结果
        let result = this.#creataGridSet(0); // 0 表示空白栅格
        // 遍历栅格集合，将符合条件的栅格设为1
        for(let i = 0 ; i < this.row ; i++){
            for(let j = 0 ; j < this.column ; j++){
                // 如果该栅格值大于等于指定的等级，则设为1
                if( this.gridset[i][j] <= level ){
                    result[i][j] = 1;
                }
            }
        }

        
        // 返回结果
        let res = {
            "data":result,
            "level":level
        }
        return res;
    }

    V_get_Contour_from_Slice(MBR,levels,stastic){
        let contour = [];
        let value = [];
        for(let i =0; i < levels; i++){
            let sliceobj = this.get_DEM_Slice(levels,i,stastic);
            let data = sliceobj["data"];
            let level = sliceobj["level"];
            let tmp_contour = this.get_BinaryGrid_Boundary(data,false);
            if(tmp_contour.length === 0){
                continue;
            }
            for(let j = 0; j < tmp_contour.length; j++){
                
                value.push(Math.round(level));
                if(tmp_contour[j] === null){
                    continue;
                }
                contour.push(tmp_contour[j]);
            }
        }

        
        Arrange(contour,value);

        // raster to vector
        let contourList = this.V_RasLine2VecLine(contour,MBR);

        // 返回结果
        let res = {
            "contour":contourList,
            "value":value
        }
        return res;

        // 整理点的辅助函数
    function Arrange(contour,ValueList){

        // 整理步骤1 按逆时针排序 （与求点集凸包相似）

        for(let i = 0; i < contour.length; i++){
            if(contour[i].length == 0){continue;}
            let tmp = contour[i]; // [[x1,y1],[x2,y2],...]
            // 顺时针
            // 先找质心
            let center = [0,0];
            for(let j = 0; j < tmp.length; j++){
                center[0] += tmp[j][0];
                center[1] += tmp[j][1];
            }
            center[0] /= tmp.length;
            center[1] /= tmp.length;
            // 然后计算每个点与质心的夹角
            let angle = [];
            for(let j = 0; j < tmp.length; j++){
                let x = tmp[j][0] - center[0];
                let y = tmp[j][1] - center[1];
                let a = Math.atan2(y,x);
                angle.push(a);
            }

            // 然后根据夹角排序顺时针
            // angle 的顺序与 tmp 的顺序一致
            for(let j = 0; j < angle.length; j++){
                for(let k = j + 1; k < angle.length; k++){
                    if(angle[j] > angle[k]){
                        let tmp_angle = angle[j];
                        angle[j] = angle[k];
                        angle[k] = tmp_angle;
                        let tmp_point = tmp[j];
                        tmp[j] = tmp[k];
                        tmp[k] = tmp_point;
                    }
                }
            }
            contour[i] = tmp;
        }
        // 整理步骤1 按逆时针排序 （与求点集凸包相似）
        // 整理步骤二 截断
        // contour [[[x1,y1],[x2,y2],...],...] 表示的栅格行列号且与 ValueList 一一对应
        // 但是 contour 中有一些线需要截断,不是同一条线
        // 例如： [[196, 4], [197, 5], [198, 6], [199, 7], [1, 199],[9, 198], [8, 198], [7, 197], [6, 197]]
        // 就需要截断为两条线： [[196, 4], [197, 5], [198, 6], [199, 7]] 和 [[1, 199],[9, 198], [8, 198], [7, 197], [6, 197]]
        // 但是这两条线的值是一样的，所以需要将 ValueList 也要在对应位置上添加一个值
        // 例如： [1,2,3,4,5,6,7,8,9] -> [1,2,3,4,5,6,6,7,8,9] (第六个位置添加一个值)
        // 整理步骤三 对于起点与终点相邻的线，需要将起点与终点相连
        // contour [[[x1,y1],[x2,y2],...],...] 表示的栅格行列号且与 ValueList 一一对应
        // [[92, 99], [92, 98], [92, 97], [92, 96], [93, 95], [94, 94], [95, 93], [96, 92], [97, 93], [98, 93], [92, 100]]
        // 起点与终点相邻，需要将起点与终点相连
        // [[92, 99], [92, 98], [92, 97], [92, 96], [93, 95], [94, 94], [95, 93], [96, 92], [97, 93], [98, 93], [92, 100], [92, 99]]


        // 遍历 contour
        for(let i = 0; i < contour.length; i++){
            let tmp = contour[i]; // [[x1,y1],[x2,y2],...]
            // let tmp = contour[i]; // [[x1,y1],[x2,y2],...]
            // console.log(tmp);

            if(tmp.length <= 1){
                continue;
            }else{
                // 起点
                let x1 = tmp[0][0];
                let y1 = tmp[0][1];
                // 终点
                let x2 = tmp[tmp.length - 1][0];
                let y2 = tmp[tmp.length - 1][1];

                // 相邻： x 坐标相差 1 或者 y 坐标相差 1
                // 不相邻： x 坐标相差大于 1 或者 y 坐标相差大于 1
                // 由于都是整数，直接相减即可

                // 起点与终点相邻，需要将起点与终点相连
                if( Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1 ){
                    // 将起点与终点相连
                    tmp.push(tmp[0]);
                }
            } 

            // 遍历 tmp
            for(let j = 0; j < tmp.length - 1; j++){
                let x1 = tmp[j][0];
                let y1 = tmp[j][1];
                let x2 = tmp[j+1][0];
                let y2 = tmp[j+1][1];
                // 相邻： x 坐标相差 1 或者 y 坐标相差 1
                // 不相邻： x 坐标相差大于 1 或者 y 坐标相差大于 1
                // 由于都是整数，直接相减即可
                if( Math.abs(x1 - x2) > 20 || Math.abs(y1 - y2) > 20 ){
                // 如果 tmp[j] 与 tmp[j+1] 不相邻，则需要截断
                // 截断后的结果为： [tmp[0],tmp[1],...,tmp[j]] 和 [tmp[j+1],tmp[j+2],...,tmp[tmp.length-1]]
                // 但是这两条线的值是一样的，所以需要将 ValueList 也要在对应位置上添加一个值

                // 截断后的第一条线
                let tmp1 = [];
                for(let k = 0; k <= j; k++){
                    tmp1.push(tmp[k]);
                }
                // 截断后的第二条线
                let tmp2 = [];
                for(let k = j + 1; k < tmp.length; k++){
                    tmp2.push(tmp[k]);
                }

                // 将截断后的两条线添加到 contour 中
                contour.push(tmp1);
                contour.push(tmp2);

                // 将 ValueList 中对应的值也添加到 ValueList 中
                ValueList.push(ValueList[i]);
                ValueList.push(ValueList[i]);
                // 将 contour 中的原来的线删除
                contour.splice(i,1);
                // 将 ValueList 中的原来的值删除
                ValueList.splice(i,1);
                // 由于删除了 contour 中的一条线，所以需要将 i 减 1
                i--;
                // 由于删除了 contour 中的一条线，所以需要将 j 减 1
                j--;
                break;
            }
        }
        }

        // fix bug 对于长度小于3 的线，需要删除
        for(let i = 0; i < contour.length; i++){
            if(contour[i].length < 3){
                contour.splice(i,1);
                ValueList.splice(i,1);
                i--;
            }
        }
    }
        



    }

    /**
     * 获取二值矩阵中所有的分界线
     * @param {Array} data - 二值矩阵
     * @param {Boolean} IsAnimation - 是否开启动画
     */
    get_BinaryGrid_Boundary(data,IsAnimation = false){
        /**
         * input: [[0,0,0,0,0,0,0,0,0,0],[0,0,1,1,1,0,0,0,0,0],...]
         * result: [
         * [ [x1,y1],[x2,y2] ], // 第一条分界线
         * [ [x1,y1],[x2,y2] ], // 第二条分界线
         * ...
         * ]
         */
        //this.get_BinaryGrid_MaxConnected(data,x,y,threshold,value);
        let all_MaxConnected = [];
        let result = [];

        // 首先获取所有的最大连通域
        let vis = this.#creataGridSet(0);
        for(let i = 0 ; i < this.row ; i++){
            for(let j = 0 ; j < this.column ; j++){
                if(vis[i][j] == 0 && data[i][j] == 1){
                    let maxConnected = this.get_BinaryGrid_MaxConnected(data,i,j,4,1);
                    all_MaxConnected.push(maxConnected);
                    // 将该连通域设为已访问
                    vis[i][j] = 1;
                    for(let k = 0 ; k < maxConnected.length ; k++){
                        let [x,y] = maxConnected[k];
                        vis[x][y] = 1;
                    }
                }
            }
        }

        // 然后取每个连通域的边界放入结果中
        for(let i = 0 ; i < all_MaxConnected.length ; i++){
            let maxConnected = all_MaxConnected[i];
            let boundary = this.get_BinaryGrid_MaxConnected_Boundary(data,maxConnected,1);
            result.push(boundary);
        }

        if(IsAnimation){
        helper(data,result);
        }

        // console.log(result);

        return result;

        function helper(data,result){
            for(let i = 0; i < result.length ; i++){
                let set = result[i];
                for(let j = 0 ; j < set.length ; j++){
                    let [x,y] = set[j];
                    data[x][y] = 100;
                }
            }
        }
    }


    /**
     * 获取指定行列号的最大连通域，若连通域小于指定阈值，则返回空集合
     * @param {Array} data - 二值矩阵,若未指定，则默认为当前栅格集合
     * @param {Number} x - 指定的行号
     * @param {Number} y - 指定的列号
     * @param {Number} threshold - 指定的阈值,若连通域小于指定阈值，则返回空集合
     * @param {Number} value - 指定要寻找连通域的值 若不是该值，则返回空集合
     * @returns {Array} - 返回二维数组 [[x1,y1],[x2,y2],...] 表示包含该点的最大连通域 若连通域小于指定阈值，则返回 null
     */
    get_BinaryGrid_MaxConnected(data,x,y,threshold,value){
        if(data === null){
            data = this.gridset; // 若未指定，则默认为当前栅格集合
        }
        // 首先判断该点是否为指定的值
        if(data[x][y] != value){
            return [];
        }
        // 新建一个空白栅格，用于存储已经遍历过的点
        let visited = this.#creataGridSet(0);
        let result = [];
        let dx = [0,0,1,-1,1,-1,1,-1];
        let dy = [1,-1,0,0,1,-1,-1,1];
        let queue = [];
        queue.push([x,y]);
        visited[x][y] = 1;
        while(queue.length > 0){
            let [x,y] = queue.shift();
            result.push([x,y]);
            for(let i = 0 ; i < dx.length ; i++){
                let newx = x + dx[i];
                let newy = y + dy[i];
                if(newx >= 0 && newx < this.row && newy >= 0 && newy < this.column && visited[newx][newy] === 0 && data[newx][newy] === value){
                    queue.push([newx,newy]);
                    visited[newx][newy] = 1;
                }
            }
        }
        if(result.length < threshold){
            return [];
        }
        return result;  
    }
    /**
     * 获取指定行列号的最大连通域的边界点，若连通域小于指定阈值，则返回 null
     * @param {Array} data - 二值矩阵,若未指定，则默认为当前栅格集合
     * @param {Array} max_connected - 二值矩阵
     * @param {Number} value - 指定要寻找连通域的值 若不是该值，则返回 []
     * @returns {Array} - 返回二维数组 [[x1,y1],[x2,y2],...] 表示包含该点的最大连通域 若连通域小于指定阈值，则返回 null
     */
    get_BinaryGrid_MaxConnected_Boundary(data,max_connected,value){
        if(max_connected.length < 1 ){
            return [];
        }
        // 获取所有的边界点的行列号
        let boundary = [];
        // 只需要遍历连通域，找到所有的边界点即可
        let dx = [0,0,1,-1];
        let dy = [1,-1,0,0];
        for(let i = 0 ; i < max_connected.length ; i++){
            let [x,y] = max_connected[i];

            let flag = false;
            for(let j = 0 ; j < 4 ; j++){
                let newx = x + dx[j];
                let newy = y + dy[j];
                if(newx >= 0 && newx < this.row && newy >= 0 && newy < this.column && data[newx][newy] != value){
                    flag = true;
                    break;
                }
            }
            if(flag){
                boundary.push([x,y]);
            }
        }
        return boundary;
    }


    /**
     * 根据给定的MBR及给定栅格的行列号，计算该栅格的中心点在MBR中的位置（坐标）
     * - 该方法是栅格数据与矢量数据结合的关键，相当于在栅格上再加一层矢量数据
     * - 将栅格数据绘制矢量画布上需要指定外包络矩形，并且计算每一个栅格位置都会产生一定的误差，所以需要根据栅格分辨率进行误差控制
     * @param {Array} MBR - 矩形框，格式为 [x1,y1,x2,y2]
     * @param {number} row - 栅格行号
     * @param {number} col - 栅格列号
     * @param {number} resolution - 栅格分辨率（用于控制计算栅格中心点的误差）
     * @returns {Point} 返回一个点（Base.js 中的 Point 类）
     */
    get_CellPoint_in_MBR(MBR,row,col,resolution=0.1){
        // 首先使用总的行列切割MBR
        let [x1,y1,x2,y2] = MBR;
        let xn = this.column;//获取x轴栅格数
        let yn = this.row;//获取y轴栅格数

        let width = Math.abs(x1-x2);
        let height = Math.abs(y1-y2);

        // make the error more small
        // 栅格渲染精度控制在0.1 dx dy 为栅格的宽高
        let dx = Math.round(width/xn/resolution)*resolution;
        let dy = Math.round(height/yn/resolution)*resolution;

        // 计算栅格的中心点 一半的栅格宽度
        let x = x1 + dx/2 + col*dx;
        let y = y1 - dy/2 - row*dy;

        // this.MBR[0]+j*dx,
        // this.MBR[1]-i*dy-dy,
        // dx,dy,

        let point = new Point(x,y);
        return point;
    }    

    /**
     * 计算内部二维矩阵所代表的栅格的表面积
     * - 该方法将对应栅格位置的值取整，视为一个小立方体，计算所有小立方体的表面积之和
     * - 这是一种简化的方法，相较于计算三角形的表面积，该方法的结果会有一定的误差，但是速度会快很多。
     */
    getSerfaceArea(){
        const dr = [0, 1, 0, -1];
        const dc = [1, 0, -1, 0];
        let sum = 0;
        // 首先获取整数化栅格
        let IntGrid = this.toIntGrid();
        for(let i = 0 ; i < IntGrid.length ; i++){
            for(let j = 0 ; j < IntGrid[i].length ; j++){
                let value = IntGrid[i][j];
                if(value > 0){
                    sum += 2;
                    for(let k = 0 ; k < 4 ; k++){
                        let nr = i + dr[k];
                        let nc = j + dc[k];
                        let nv = 0;
                        if(nr >= 0 && nr < IntGrid.length && nc >= 0 && nc < IntGrid[i].length){
                            nv = IntGrid[nr][nc];
                        }
                        sum += Math.max(value - nv,0);
                    }
                }
            }
        }

        // 扣除底面积
        sum -= this.row * this.column;
        return sum;
    }

    // 计算栅格体积
    /**
     * 计算内部二维矩阵所代表的栅格的体积
     * - 仅仅简单的将栅格视为小立方体，值累加
     * @returns {number} 返回栅格体积
     */
    getVolume(){
        let sum = 0;
        for(let i = 0 ; i < this.row ; i++){
            for(let j = 0 ; j < this.column ; j++){
                sum += this.gridset[i][j];
            }
        }
        return sum;
    }




    //静态方法区域
    
    /**
     * 读取 JS 的二维数组，由该二维 Array 生成栅格类
     * @param {array} matrix 
     */
    static fromMatrix(matrix){
        let row = matrix[0];
        let res = new grid(matrix.length,row.length);
        res.gridset = matrix;
        return res;
    }

    /**
     * 生成0-1之间的渐变栅格(用于绘制颜色条带预览)
     * @param {number} level 
     * @returns 
     */
    static getramp(level){ 
        let res = [];
        let dx = 1/level;
        for(let i=0;i<5;i++){
            let ttp = [];
            for(let j = 0;j<level;j++){
                ttp.push(dx*j);
            }
            res.push(ttp);
        }
        return res;
    }

     /**
     * 生成0-360之间的渐变栅格(用于绘制颜色条带预览，坡向颜色渲染)
     * @param {number} level 
     * @returns 
     */
      static get_aspect_ramp(level){ 
        let res = [];
        let dx = 360/level;
        for(let i=0;i<5;i++){
            let ttp = [];
            for(let j = 0;j<level;j++){
                ttp.push(dx*j);
            }
            res.push(ttp);
        }
        return res;
    }

    /**
     * 生成离散值条带[0,1,2,3,4,...level]
     * @param {number} level 
     * @returns 
     */
     static get_dispersed_ramp(level){ 
        let res = [];
        let dx = 1;
        for(let i=0;i<5;i++){
            let ttp = [];
            for(let j = 0;j<level;j++){
                ttp.push(dx*j);
            }
            res.push(ttp);
        }
        return res;
    }

     /**
     * 解析连续字符串为而为数组 数据按行存储
     * @param {number} row - 行数
     * @param {number} column - 列数
     * @param {String} str - 连续字符串（往往由服务器获得）
     * @returns {array} 返回 [row * column] 形状的二维数组
     */
    static parser1(row,column,str){
        let tdata = str.split(',');
        let rres = [];
        for(let i = 0;i < row;i++){
        let ttp = [];

        for(let j=0;j<column;j++){
            ttp.push(parseFloat(tdata[i*255+j])*1000);
        }
        rres.push(ttp);
        }
        return rres;
  }

}


/**
 * 统计类 获取诸如最大最小值、均值方差等的统计信息 便于后期处理
 */
export class Stastic{
    /**
     * 该模块代码将重新设计 ： --v 1.0.23 later (版本更新完毕后将删除！此段说明)
     * `说明` : 起初写该部分代码只是为了服务于栅格的显示功能。故而某些功能过于耦合，无法灵活地与其他已有框架协同工作。
     * 作者前段时间想要使用`chart.js`来绘制某些统计图。在该过程中，就发现一部分通用绘图数据并没有良好地暴露出来，而是埋在了某些函数的处理细节中。
     * 为了使得这部分功能更加灵活好用，作者决定将这部分代码重新整理。
     * 设计方向：
     * - 提取绘制某些统计图所必须的数据，并抽象出与之对应的数据结构。例如：柱状图、折线图可以使用两个数组来分别存储数据和标注。
     * - 将统计图所必须的数据与统计图的生成拆分。
     * - 一个统计图可以拆分成这样几个部分：数据获取、数据统计、统计结果输出、结果可视化
     * - 最后的一个结果可视化将完全放到~view类中，这样能最大限度的保证在调用其他绘图库与调用自带的绘图库体验上的一致性。
     * > !注意:本轮修改后会有一些接口（*方法*）变更，第二位版本号也会增加一位！请留意变更说明。
     * * 实例化该类 可以从一维数组构造(flatten array)
     * @param {array} data - 一维数组 包含所有需要统计的数字
     */
    constructor(data){
        this.data = data;
        this.ori = data.slice(); //未排序的原始数据
        this.data = this.data.sort((a,b)=>a-b); // 排序
        this.n = this.data.length; // 样本容量
        this.max = this.data[this.data.length-1];// 最大值
        this.min =  this.data[0]; //最小值
        this.mean = this.#mean(); //均值

        this.q1i = Math.round((this.n+1)/4); //上四分位数索引
        this.q3i = Math.round(3*(this.n+1)/4);//下四分位数索引

        this.q1 = this.data[this.q1i];
        this.q3 = this.data[this.q3i];

        this.Standard_Deviation = this.#Standard_Deviation(); // 求标准差
    }
    //数据统计部分方法
    /**
     * 求均值
     * @returns 返回均值
     */
    #mean(){
        let da = this.data;
        let sum =0;
        for(let i=0;i<da.length;i++){
            sum = da[i]+sum;
        }
        return sum/da.length;
    }
    /**
     * 求标准差
     * @returns 返回标准差
     */
    #Standard_Deviation(){ // 标准差
        let da = this.data;
        let mean = this.mean;
        let sum =0;
        for(let i=0;i<da.length;i++){
            sum = Math.pow(da[i] - mean ,2)+ sum ;
        }
        return Math.sqrt(sum/this.n);

    }

    /**
     * 归一化公式 ：(x – μ) / σ 
     * * σ 是标准差  μ 是均值
     * @param {number} value 
     * @returns {number} 返回值 [0,1]
     */
    Z_Score_Normalization(value){
        return (value - this.mean)/this.Standard_Deviation;
    }

    /**
     * 线性归一化 
     * * 公式：(x - min) / (max - min)
     * @param {number} value 
     * @returns {number} 返回值 [0,1]
     */
    Linear_Normalization(value){
        return (value - this.min)/(this.max - this.min);
    }

    /**
   * 线性归一化 (仅针对 **主要区域** 的归一化 **这里指盒须图中的盒中区域** )
   * * 公式：(x - min) / (max - min)
   * @param {number} value 
   * @returns {number} 返回值 [0,1]
   */
     Linear_Normalization_main(value){
      let res =(value - this.q1)/(this.q3 - this.q1);
      if(res>1){return 1;}
      else if(res < 0){return 0;}
      else{
        return res;
      }
    }
    
    /**
     * **创建盒须图对象：**
     * 首先定义MBR 外包络矩形 左上角和右下角
     * 考虑到与其他绘图js库的**兼容性** 在其他函数中我们会
     * - 将求出的、绘制某些统计图所必备的数据单独输出以供那些想要使用其他绘图库的用户使用
     * - 对于那些只想使用自带绘图模块的用户，我们会另写解析函数来根据这些数据创建本库自带的统计图。
     * @param {number} x1 - 用以定位盒须图绘制区域的外包络矩形坐标
     * @param {number} y1 
     * @param {number} x2 
     * @param {number} y2 
     * @param {number} yleve - y轴尺度
     * @param {number} xleve - x轴尺度
     * @returns {JSON} 返回一个描述统计图的json对象
     */
    create_box_whisker_plot(x1,y1,x2,y2,yleve,xleve){
        //留出空间
        let width = Math.abs(x2 - x1);
        let height = Math.abs(y2 - y1)-40;
        let blank = 20;

        let midx = (x1+x2)/2;

        let range = Math.abs(this.max - this.min);
        let stratch = height/range;
        let dx = width/xleve;

        if(yleve === 0){
            yleve = 10;
        }
        
        let dy = height/yleve;
        let dyv = Math.round(range/yleve);

        let yaxi = [];
        let yano = [];

        for(let i=1 ; i < yleve;i++ ){
            let itt =[x1,blank+y2 + dy*i,x1-dx,blank+y2+dy * i];
            let iit = [Math.round(this.min+dyv*i),x1-5*dx,blank+y2+dy * i];
            yaxi.push(itt);
            yano.push(iit);
        }

        let max_line = [midx - 2*dx,(this.max - this.min)*stratch+y2+blank,midx+2*dx,(this.max - this.min)*stratch +y2+blank];
        let min_line = [midx - 2*dx,(this.min- this.min)*stratch+y2+blank,midx+2*dx,(this.min- this.min)*stratch +y2+blank];
        
        let whisker = [];
        //let whiskerano = [];

       
        whisker.push([midx,(this.max - this.min)*stratch+y2+blank,midx,(this.min- this.min)*stratch+y2+blank]);
        whisker.push(max_line);
        whisker.push(min_line);

        yano.push([this.max,midx+2*dx,(this.max - this.min)*stratch +y2+blank]);
        yano.push([this.min,midx+2*dx,(this.min- this.min)*stratch +y2+blank]);


        let box = [midx - 4*dx,(this.q1- this.min)*stratch+y2+blank,midx+4*dx,(this.q3- this.min)*stratch +y2+blank];

        yano.push([this.q1,midx + 4*dx,(this.q1- this.min)*stratch+y2+blank]);
        yano.push([this.q3,midx + 4*dx,(this.q3- this.min)*stratch+y2+blank]);
        

        let box_whisker_plot= {
            //边框
            "MBR" : [x1,y1,x2,y2], 
            "YAXI":yaxi,
            "BOX":box,
            "WHISKER":whisker,
            //文字部分
            "YANO":yano,
        }
        
        return box_whisker_plot;
    }

    /**
     * 绘制步长曲线（折线）
     * @param {number} x1 * MBR_X1
     * @param {number} y1 * MBR_Y1
     * @param {number} x2 * MBR_X2
     * @param {number} y2 * MBR_Y1
     * @param {number} yleve * y轴切分尺度
     * @param {number} xleve * x轴采样尺度 
     * * **注意：xleve控制着步长曲线绘制的详尽程度**
     * * 例如：共计100值的序列，若 xleve **小于100** 则会略化线的细节
     * * 但是当 xleve **大于100** 时，会将曲线挤向图的左边。
     * @returns {array} 得到步长点的列表
     */
    create_step_plot(x1,y1,x2,y2,yleve,xleve){

        let blank = 20;//上下留白宽度
        let width = Math.abs(x2 - x1)-2*blank; //绘制区域宽度
        let height = Math.abs(y2 - y1)-2*blank; //绘制区域扣除留白后的高度

        let y_range = this.max - this.min; // 值区间
        let x_range = this.n; // x 轴区间
        let y_scratch = height/y_range;

        let dyv = Math.round( y_range / yleve );//值变量
        let dxv =  Math.round( x_range / xleve );//值变量

        let dx = width/xleve ; // 绘制x变量
        let dy = height/yleve ;// 绘制y变量

        let points = [];

        for(let i = 0; i < xleve ; i++){
            let pox = blank + dx * i + x1;
            let poy_index = dxv*i;
            let poy = y2+blank + this.ori[poy_index]*y_scratch;

            points.push([pox,poy]);
        }
        return points;
    }

     /**
     * 绘制默认数据坐标框
     * @param {number} x1 * MBR_X1
     * @param {number} y1 * MBR_Y1
     * @param {number} x2 * MBR_X2
     * @param {number} y2 * MBR_Y1
     * @param {number} yleve * y轴切分尺度
     * @param {number} xleve * x轴采样尺度 
     * @returns {JSON} 返回一个表示坐标框的json对象
     * */
    create_coordinate_box(x1,y1,x2,y2,yleve,xleve){

        let blank = 20;//上下留白宽度
        let width = Math.abs(x2 - x1)-2*blank; //绘制区域宽度
        let height = Math.abs(y2 - y1)-2*blank; //绘制区域扣除留白后的高度

        let y_range = this.max - this.min; // 值区间
        let x_range = this.n; // x 轴区间

        let dyv = Math.round( y_range / yleve );//值变量
        let dxv =  Math.round( x_range / xleve );//值变量

        let dx = width/xleve ; // 绘制x变量
        let dy = height/yleve ;// 绘制y变量

        let y_scale = []; // 刻度
        let y_mark = [];

        for(let i=1 ; i < yleve;i++ ){
            let itt = [x1,blank+y2 + dy*i,x1-5,blank+y2+dy * i];
            let iit = [Math.round(this.min+dyv*i),x1-50,blank+y2+dy * i];
            y_scale.push(itt);
            y_mark.push(iit);
        }

        let x_scale = [];
        let x_mark = [];
        let count = 0;

        let itm = [0,blank+x1,y2-25];
        x_mark.push(itm);

        for(let i=0 ; i < xleve;i++ ){

            if(count === 5){
                let itt = [blank+x1+dx*i,y2,blank+x1+dx*i,y2-10];
                // let itm = [Math.round(0+dxv*i),blank+x1+dx*i,y2+10];
                x_scale.push(itt);
                //x_mark.push(itm);
            }
            else if(count === 10){
                let itt = [blank+x1+dx*i,y2,blank+x1+dx*i,y2-15];
                let itm = [Math.round(0+dxv*i),blank+x1+dx*i,y2-25];
                x_scale.push(itt);
                x_mark.push(itm);
                count = 0 ;
            }
            else{
                let itt = [blank+x1+dx*i,y2,blank+x1+dx*i,y2-5];
                x_scale.push(itt);
            }
            count=1+count;
        }
        let res = {
            "MBR" : [x1,y1,x2,y2], //外包络矩形
            "y_scale" : y_scale,
            "y_mark" : y_mark,
            "x_scale" : x_scale,
            "x_mark" : x_mark,
        }
        return res;
    }

   // 获取统计数据
   /**
    * 获取统计数据
    * "max" : "最大值", "min" : "最小值", "avg" : "平均值", "std" : "标准差", "volum" : "样本数量
    * @returns {JSON} 返回一个json对象
    */
    get_statistics_info(){


        let max = this.max;// 最大值
        let min =  this.min; //最小值
        let avg = this.mean; //均值
        let std = this.Standard_Deviation ; // 求标准差
        let volum = this.n ; // 样本数量

        let res = {
            "max" : max, 
            "min" : min, 
            "avg" : avg, 
            "std" : std, 
            "volum" : volum
        }

        return res;
    }

}