import { assert, expect, test } from 'vitest'

import { round,ccw,ccwRobust,inCircleRobust,inCircle } from '../packages/constants/Utils'

import { haversine } from '../packages/Distance'

import { toMeters, metersTo, unitTounit } from '../packages/constants/Units'

import { convertToMercator } from '../packages/Referencing'

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
// test('Math.sqrt()', () => {
//   expect(Math.sqrt(4)).toBe(2)
//   expect(Math.sqrt(144)).toBe(12)
//   expect(Math.sqrt(2)).toBe(Math.SQRT2)
// })

// test('JSON', () => {
//   const input = {
//     foo: 'hello',
//     bar: 'world',
//   }

//   const output = JSON.stringify(input)
  

//   expect(output).eq('{"foo":"hello","bar":"world"}') // this will fail
//   assert.deepEqual(JSON.parse(output), input, 'matches original') // this will pass
// })
