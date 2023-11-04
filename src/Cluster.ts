/**
 * 用于实现聚类算法
 */
import { haversine } from "./Distance";
import { Point } from "./Geometry";
import { randomIndexArray } from "./constants/Utils";

/**
 * 获取 centroid 质心
 * @param {array} points - 二维数组
 * @returns {array} - 返回一个一维向量
 */
function get_centroid(
    points : number[][]
){
    let len = points.length;
    let sum_x = 0;
    let sum_y = 0;
    for(let i = 0 ; i < len ; i++){
        sum_x += points[i][0];
        sum_y += points[i][1];
    }
    return [sum_x/len,sum_y/len];
}

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
export function K_means(
    k: number,
    thresh: number = 0.0001,
    maxtime: number = 100,
    points: number[][]
){
    /*
    1.从样本中选择 K 个点作为初始质心（完全随机）
    2.计算每个样本到各个质心的距离，将样本划分到距离最近的质心所对应的簇中
    3.计算每个簇内所有样本的均值，并使用该均值更新簇的质心
    4.重复步骤 2 与 3 ，直到达到以下条件之一：
        质心的位置变化小于指定的阈值（默认为 0.0001）;
        达到最大迭代次数
    */


    // 1.从样本中选择 K 个点作为初始质心（完全随机）
    let centroids: number[][] | (Point | [lon1: number, lat1: number])[] = [];
    let len = points.length;
    if(len < k){
        console.log("样本数量小于分类数量");
        return;
    }
    let indexArray = randomIndexArray(len,k);
    indexArray.forEach((item) => {
        let tmp = points[item] as number[] & (Point | [lon1: number, lat1: number])
        centroids.push(tmp);
        }
    );
    
    let dc = Infinity; // 两次聚类质心的变化距离
    let times = 0; //迭代次数
    let groups = []; //k groups
    while(dc > thresh && times < maxtime){
        
        groups = [];
        for(let i = 0 ; i < k ; i++){
            groups.push([]);
        }
        // 2.计算每个样本到各个质心的距离，将样本划分到距离最近的质心所对应的簇中
        for(let i = 0 ; i < len ; i++){
            let min = Infinity;
            let min_index = 0;
            let tmp = points[i] as never;
            for(let j = 0 ; j < k ; j++){
                let tmp1 = points[i] as number[] & (Point | [lon1: number, lat1: number]);
                let tmp2 = centroids[j] as number[] & (Point | [lon1: number, lat1: number]);
                let dis = haversine(tmp1,tmp2);
                if(dis < min){
                    min = dis;
                    min_index = j;
                }
            }
            groups[min_index].push(tmp);
        }

        // 3.计算每个簇内所有样本的均值，并使用该均值更新簇的质心
        let new_centroids = [];
        for(let i = 0 ; i < k ; i++){
            new_centroids.push(get_centroid(groups[i]));
        }

        // 4.重复步骤 2 与 3 ，直到达到以下条件之一：
            // 质心的位置变化小于指定的阈值（默认为 0.0001）;
            // 达到最大迭代次数

        // 将最大类间距离视作质心变化距离
        dc = 0;
        for(let i = 0 ; i < k ; i++){
            let tmp1 = centroids[i] as number[] & (Point | [lon1: number, lat1: number]);
            let tmp2 = new_centroids[i] as number[] & (Point | [lon1: number, lat1: number]);
            let dis = haversine(tmp1,tmp2);
            if(dis > dc){
                dc = dis;
            }
        }
        
        console.log(dc);
        
        centroids = new_centroids;
        times++;
    }
    return groups;
}
