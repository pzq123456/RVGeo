import { describe, it, expect } from 'vitest';
import { sphericalArea } from '../../src';

const colorado = [ // 269,837 km2
    [
      -109.06237949172429,
      41.01281721154166
    ],
    [
      -109.06237949172429,
      36.98606840770937
    ],
    [
      -102.04877911606194,
      36.98606840770937
    ],
    [
      -102.04877911606194,
      41.01281721154166
    ],
    [
      -109.06237949172429,
      41.01281721154166
    ]
] as [number,number][];

const wyoming =  // 253,600
[
    [
      -111.0549542931636,
      45.00199929676583
    ],
    [
      -111.0416736560446,
      40.99275161616502
    ],
    [
      -104.05153895660108,
      41.0014573691809
    ],
    [
      -104.05813335626081,
      44.99600038130686
    ],
    [
      -111.0549542931636,
      45.00199929676583
    ]
  ] as [number,number][];

describe('sphericalArea', () => {
    it('sphericalArea', () => {
        // S of ball = 4 * PI * R^2
        const result = sphericalArea([[0, 0], [0, 90],  [90, 0]]); // 1/4 of the ball
        expect(result).toBeCloseTo(Math.PI / 2);

        const result2 = sphericalArea([[0, 0], [0, 90],  [90, 0], [0, 0]]); // 1/4 of the ball
        expect(result2).toBeCloseTo(Math.PI / 2);

        const result3 = sphericalArea([[0, 0], [0, 90],  [180, 0]]); // 1/2 of the ball
        expect(result3).toBeCloseTo(Math.PI);
    });

    it('Geo spacial',()=>{
        let area = sphericalArea(colorado,6378137.0);
        console.log(area); 

        let area2 = sphericalArea(wyoming,6378137.0);
        console.log(area2);
    })
});