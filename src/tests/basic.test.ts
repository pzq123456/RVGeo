import { assert, expect, test } from 'vitest'

import { haversine } from '../packages/Distance'

// TEST haversine ([36.12, -86.67], [33.94, -118.40]) --> 2887.26
test('haversine', () => {
  expect(haversine([36.12, -86.67], [33.94, -118.40],"kilometers")).toBe(2887.2599506071106)
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
