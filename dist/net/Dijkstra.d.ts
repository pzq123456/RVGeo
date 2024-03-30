/**
 * @description Dijkstra算法
 */
export declare class Dijkstra {
    edges: any[][];
    source: number | string;
    /**
     * Djikstra算法
     * @param edges - ["a", "b", 7]
     * @param source - "a" 起点
     */
    constructor(edges: any[][], source: number | string);
    /**
     *dijstra——寻找源点至目标点的路径
     * @param target ：number|string：目标点
     * @returns [paths,length]——源点到目标点的路径和距离(总权重)
     */
    dijkstra: (target: any) => (number | any[])[];
}
