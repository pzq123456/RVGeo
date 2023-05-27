/**
 * stactic learning 
 * 处理 聚类、统计学习 等方面的内容
 */
import {kernel_1,kernel_2} from './kernel.js'
import { test_9,test_10} from './test.js';
/**
 * n维向量 代表 一个数据样本 或者是数据列表中的一行
 * 封装了一些求距离的方法（n维情形下）
 * * `functionname_()` 表示对某对象的运算
 */
export class Vector_nD{
    /**
     * 实例化一个n维向量 需要传入一个n维数组
     * @param {array} ndarr - 传入的数组
     * @param {boolean} ISonedim - 输入的是否为一维数组？若不是请跳过 即[1,2,3,4,5...] 
     */
    constructor(ndarr,ISonedim=false){
        this.data = ndarr ;
        this.Dimension = ndarr.length;
        if(ISonedim){
            this.Dimension = 1;
        }
    }

    /**
     * 计算 **n维** 欧氏距离(Euclidean Distance)
     * @param {Vector_nD} Invec - 输入的另一个n维向量
     * @return {number} - 返回欧氏距离
     */
     getEDistance_(Invec) {
        let Inarr = Invec.data;
        let Dimension = this.Dimension;
        if(this.Dimension > Inarr.length){
            Dimension = Inarr.length;
        } // 仅对有效的维度求距离
        let res = 0;
        for(let i=0 ;i < Dimension;i++){
            res = res + kernel_1(this.data[i],Inarr[i]);
        }
        return Math.sqrt(res);
    }

    /**
     * 曼哈顿距离(Manhattan Distance) Chebyshev distance
     * @param {Vector_nD} Invec - 输入
     * @return {number} - 返回曼哈顿距离
     */
     getMDistance_(Invec) {
        let Inarr = Invec.data;
        // return kernel_2(this.x,InPoint.x)+kernel_2(this.y,InPoint.y);
        let Dimension = this.Dimension;
        if(this.Dimension > Inarr.length){
            Dimension = Inarr.length;
        } // 仅对有效的维度求距离

        let res = 0;
        for(let i=0 ;i < Dimension;i++){
            res = res + kernel_2(this.data[i],Inarr[i]);
        }
        return res;
    }

     /**
     * 切比雪夫距离(Chebyshev distance) : max(|a-b|...)
     * @param {Vector_nD} Invec - 输入
     * @return {number} - 返回两点间的切比雪夫距离
     */
      getCDistance_(Invec) {
        let Inarr = Invec.data;
        let Dimension = this.Dimension;
        if(this.Dimension > Inarr.length){
            Dimension = Inarr.length;
        } // 仅对有效的维度求距离
        let res = [];
        for(let i=0 ;i < Dimension;i++){
            res.push(kernel_2(this.data[i],Inarr[i]));
        }
        res.sort((a,b)=> a - b);
        return res[res.length-1];
    }

    /**
     * 闵氏距离(Minkowski Distance) : (｜a-b｜^p+...)^(1/p)
     * @param {Vector_nD} Invec - 输入
     * @param {number} p - 闵氏距离的维度
     * @return {number} - 返回两点间的闵氏距离
     */
     getMKDistance_(Invec,p) {
        let Inarr = Invec.data;
        let Dimension = this.Dimension;
        if(this.Dimension > Inarr.length){
            Dimension = Inarr.length;
        } // 仅对有效的维度求距离
        let res = 0;
        for(let i=0 ;i < Dimension ; i++){
            res = res + Math.pow(kernel_2(this.data[i],Inarr[i]),p);
        }
        return Math.pow(res,Math.pow(p,-1));
        }
}

/**
 * 二维Tensor 每一行是一维vector 用来表示一组数据
 */
export class Tensor_2D{
    /**
     * 创建二维Tensor 可以从二维array构造
     * @param {array} arr2D - 二维array
     */
    constructor(arr2D){
        this.data = arr2D;
        this.row = arr2D.length;
        this.column = arr2D[0].length;
        this.shape=[this.row,this.column];
    }

    get_centroid(){
        let res = [];
        for(let i = 0;i<this.column;i++){
            let sum = 0;
            for(let j=0;j<this.row;j++){
                sum = sum + this.data[j][i];
            }
            res.push(sum/this.row);
        }
        return res;
    }

    // /**
    //  * 
    //  * @param {number} k 
    //  * @returns 
    //  */
    /**
     * k均值聚类
     * @param {number} k - 分类个数
     * @param {number} thresh - 质心间变化距离
     * @param {number} maxtime - 最大迭代次数
     * @returns 
     * * `groups.length = k` :[
     * [group1],
     * [group2],...
     * ]
     */
    K_means(k,thresh,maxtime){

        /*
        1.从样本中选择 K 个点作为初始质心（完全随机）
        2.计算每个样本到各个质心的距离，将样本划分到距离最近的质心所对应的簇中
        3.计算每个簇内所有样本的均值，并使用该均值更新簇的质心
        4.重复步骤 2 与 3 ，直到达到以下条件之一：
            质心的位置变化小于指定的阈值（默认为 0.0001）;
            达到最大迭代次数
         */

        if(k>this.row){
            return [];//若要分类别大于记录数 返回空array
        }

        let list =this.data.slice();
        let sample = test_9(this.row,k);// 随机取k个样本点 作为聚类中心

        let centroid = []; // 按照样本点的索引取值
        for(let itm of sample){
            centroid.push(this.data[itm]);
        }

        let dc = Infinity; // 两次聚类质心的变化距离
        let times = 0; //迭代次数

        let groups = []; //k groups

        while( dc > thresh || times < maxtime ){ //若两次聚类质心距离小于阈值 或 超过最大迭代次数 则退出循环
            groups.length = k;
            for(let i =0;i < k;i++){
                groups[i] = []; //初始化分类数组
            }

            //开始遍历
            for(let j=0; j<list.length; j++){ //每一个向量
                let vec = new Vector_nD(list[j]);
                let min = 99999;
                let tit;
                for(let i =0;i<k;i++){//每一个中心点
                    let centroid_ = new Vector_nD(centroid[i]);
                    let dis = centroid_.getEDistance_(vec);
                    if(dis < min){
                        tit = i;
                        min = dis;
                    }
                    else continue;
                }
                
                groups[tit].push(list[j]);       
            }
            
            let sum = 0;
            for(let i = 0;i<k;i++){// update centroid
                let ten = new Tensor_2D(groups[i]);

                let v1 = new Vector_nD(centroid[i]);
                let v2 = new Vector_nD(ten.get_centroid());
                sum =sum + v1.getEDistance_(v2);
                centroid[i] = ten.get_centroid();
            }
            dc = sum / k;
            times = times + 1;
        }
        return groups;
    }
}


// let ten = new Tensor_2D(test_10(10,3,100));
// console.log(ten.K_means(3,0.01,10));
// console.log(ten.K_means(2));
// console.log(ten.data);
// console.log(ten.row);
// console.log(ten.column);
// console.log(ten.shape);
// let ve = new Vector_nD(arr);
// console.log(ve.getEDistance_(arr2));
// console.log(ve.getMKDistance_(arr2,2));
