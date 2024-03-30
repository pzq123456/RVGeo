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
