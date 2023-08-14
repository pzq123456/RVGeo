/**
 * @module distance
 * @description
 * - Returns the distance between two points.(Supports both 2D and 3D points on the Sphere and the Cartesian plane)
 * - 距离模块，返回两点之间的距离（支持球面和笛卡尔平面上的2D和3D点）
 * @see https://en.wikipedia.org/wiki/Haversine_formula
 */

// Path: src\packages\Distance.ts

// 球面坐标系（经纬度）上两点之间的距离，球面形状为正球体
import { sphere } from "./constants/Ellipsoid.ts"
import { Point } from "./Geometry.ts"



