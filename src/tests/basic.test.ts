// 禁用 TS2304 检查器，因为我们将使用 require 语句
// @ts-nocheck

import { assert, expect, test } from 'vitest'

import { round,ccw,ccwRobust,inCircleRobust, inCircle, fillIndexArray, calculateArrayShape } from '../packages/constants/Utils'

import { haversine, PlanePolygonArea } from '../packages/Distance'

import { toMeters, metersTo, unitTounit } from '../packages/constants/Units'

import { convertToMercator } from '../packages/Referencing'

import { intersection, PointInsidePolygon, PointOutsideMBR, intersectionPolygon,} from "../packages/CGUtils.ts"
test('round', () => {
  expect(round(120.4321, 2)).toBe(120.43)
  expect(round(120.4321)).toBe(120)
})

test('haversine', () => {
  expect(
      round(haversine([-86.67 ,36.12], [-118.40 ,33.94],"kilometers"),2)
    ).toBe(2886.45)
})

// Units test 测试距离单位转换
test('toMeters', () => {
  expect(toMeters(1, "meters")).toBe(1)
  expect(toMeters(1, "kilometers")).toBe(1000)
  expect(toMeters(1, "centimeters")).toBe(0.01)
  expect(toMeters(1, "millimeters")).toBe(0.001)
  expect(toMeters(1, "miles")).toBe(1609.344)
})

test('metersTo', () => {
  expect(metersTo(1, "meters")).toBe(1)
  expect(metersTo(1, "kilometers")).toBe(0.001)
  expect(metersTo(1, "centimeters")).toBe(100)
  expect(metersTo(1, "millimeters")).toBe(1000)
})

test('unitTounit', () => {
  expect(unitTounit(1, "meters", "kilometers")).toBe(0.001)
  expect(unitTounit(1, "kilometers", "meters")).toBe(1000)
  expect(unitTounit(1, "meters", "meters")).toBe(1)
  expect(unitTounit(1, "meters", "centimeters")).toBe(100)
  expect(unitTounit(1, "meters", "millimeters")).toBe(1000)
})


// test 
// [-71, 41] [-7903683.846322, 5012341.663848]
test('convertToMercator', () => {
  expect(convertToMercator([-71, 41])).toEqual([-7903683.846322, 5012341.663848])
})

test('ccw', () => {
  expect(ccw([0,0],[0,1],[1,0])).toBe(-1)    // 顺时针
  expect(ccw([0,0],[1,0],[0,1])).toBe(1)  // 逆时针
  expect(ccw([0,0],[0,1],[0,2])).toBe(0)  // 共线
})

test('ccwRobust', () => {
  expect(ccwRobust([0,0],[0,1],[1,0])).toBe(-1)    // 顺时针
  expect(ccwRobust([0,0],[1,0],[0,1])).toBe(1)  // 逆时针
  expect(ccwRobust([0,0],[0,1],[0,2])).toBe(0)  // 共线
})

test('inCircleRobust', () => {
  // rectange 6,8,10 
  expect(inCircleRobust([0,0],[0,6],[8,0],[4,3])).toBe(-1)   
  expect(inCircleRobust([0,0],[0,6],[8,0],[9,0])).toBe(1)  
  expect(inCircleRobust([0,0],[0,6],[8,0],[8,6])).toBe(0)  
})

test('inCircle', () => {
  // rectange 6,8,10
  expect(inCircle([0,0],[0,6],[8,0],[4,3])).toBe(-1) // 在园内
  expect(inCircle([0,0],[0,6],[8,0],[9,0])).toBe(1) // 在园外
  expect(inCircle([0,0],[0,6],[8,0],[8,6])).toBe(0) // 在园上
})

// test 
// let indexArray = [9,8,7,6,5,4,3,2,1,0];
// let fillArray = [[0],[1],[2],[3],[4],[5],[6],[7],[8],[9]];
// let res = fillIndexArray(indexArray, fillArray);
// [[9],[8],[7],[6],[5],[4],[3],[2],[1],[0]]

test('fillIndexArray', () => {
  let indexArray = [[9,8,7],[6,5,4],[3,2,1]];
  let fillArray = [[0],[1],[2],[3],[4],[5],[6],[7],[8],[9]];
  let res = fillIndexArray(indexArray, fillArray);
  expect(res).toEqual([[[9],[8],[7]],[[6],[5],[4]],[[3],[2],[1]]])
  
})

// calculateArrayShape
test('calculateArrayShape', () => {
  let array = [[1,2,3],[4,5,6],[7,8,9]];
  let res = calculateArrayShape(array);
  expect(res).toEqual([3,3])

  let array2 = [[[1,2,3],[4,5,6],[7,8,9]],[[1,2,3],[4,5,6],[7,8,9]],[[1,2,3],[4,5,6],[7,8,9]],[[1,2,3],[4,5,6],[7,8,9]]];
  let res2 = calculateArrayShape(array2);
  expect(res2).toEqual([4,3,3])
})

// planePolygonArea
test('planePolygonArea', () => {
  let polygon = [[0,0],[0,2],[2,2],[2,0]];
  let res = PlanePolygonArea(polygon,"meters");
  expect(res).toBe(4)
})

// intersection
test('intersection', () => {
  let res = intersection([0,0],[1,1],[0,1],[1,0], null, null);
  expect(res).toEqual([0.5,0.5])
  let res2 = intersection([0,0],[1,1],[0,0],[2,2], null, null);
  expect(res2).toEqual(null)
  let res3 = intersection([0,0],[1,1],[0,1],[1,2], null, null);
  expect(res3).toEqual(null)
})

test('PointOutsideMBR', () => {
  let res3 = PointOutsideMBR([0,0],[0,0,1,1]);
  expect(res3).toBe(false)
  let res4 = PointOutsideMBR([10,0],[0,0,1,1]);
  expect(res4).toBe(true)
})

// test point in polygon
test('point in polygon', () => {
  let polygon = [[0,0],[0,2],[2,2],[2,0]];
  let res = PointInsidePolygon([1,1], polygon);
  expect(res).toBe(true)
})

test('intersectionPolygon', () => {
  let polygon = [[100,150],[200,250],[300,200]];
  let clipPolygon = [[150,150],[150,200],[200,200],[200,150]];
  let res = intersectionPolygon(polygon, clipPolygon);
  expect(res).toEqual([[150,162],[150,200],[200,200],[200,174]])
})