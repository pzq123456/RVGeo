import { Point } from '../geometry';

/**
 * 凸包算法
 * @param points - 点数组
 * @returns {Point[]} - 凸包点数组
 */
export declare function convexHull(points: Point[]): Point[];
/**
 * Alpha Complex 算法
 * - Alpha shapes are a generalization of Delaunay triangulations.
 * - Given a parameter alpha and a point set, they compute a simplicial complex which covers the point set in simplices whose circum radii are less than 1/alpha.
 * @param points - 点数组
 * @param alpha - alpha 值
 */
export declare function alphaComplex(points: Point[], alpha: number): [number, number, number][];
