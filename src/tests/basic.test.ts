import { assert, expect, test } from 'vitest'

import { round } from '../packages/constants/Units'

import { haversine } from '../packages/Distance'

test('round', () => {
  expect(round(120.4321, 2)).toBe(120.43)
  expect(round(120.4321)).toBe(120)
})

test('haversine', () => {
  expect(
      round(haversine([-86.67 ,36.12], [-118.40 ,33.94],"kilometers"),2)
    ).toBe(2886.44)
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
