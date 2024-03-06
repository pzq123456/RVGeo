import { describe, it, expect } from 'vitest';
import { sphericalArea, haversine, bearing, midpoint, intermediatePoint, intersection, radiansToDegrees } from '../../src';

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

    // test haversine
    it('haversine', () => {
        const result = haversine([0, 0], [0, 90], 6378137.0); // 1/4 of the ball
        expect(result).toBeCloseTo(10018754.1713946);

        const result2 = haversine([0, 0], [0, 180], 6378137.0); // 1/2 of the ball
        expect(result2).toBeCloseTo(20037508.3427892);
    });

    // bearing
    it('bearing', () => {
        const result = bearing([0, 0], [0, 90]); // 1/4 of the ball
        expect(result).toBeCloseTo(90);

        const result2 = bearing([0, 0], [0, 180]); // 1/2 of the ball
        expect(result2).toBeCloseTo(90);

        const result3 = bearing([0, 0], [90, 0]); // 1/2 of the ball
        expect(result3).toBeCloseTo(0);
    });

    // the midpoint between 35°N,45°E and 35°N,135°E is around 45°N,90°E.
    it('midpoint', () => {
        const result = midpoint([35, 45], [35, 135]); // 1/4 of the ball
        expect(result).toEqual([44.71911439243896, 90]);
    });

    it('intermediatePoint', () => {
        const result = intermediatePoint([35, 45], [35, 135], 0.5); // 1/4 of the ball
        expect(result).toEqual([44.719114392438954, 90]);
    });

    it('intersection', () => {
        const result = intersection([-90,0], [90,0], [0,90], [0,-90]);
        for(let i = 0; i < 2; i++) {
            expect(result[i]).toBeCloseTo([0, 0][i]); // 在数学上，这种特殊情况无法区分
        }

        const result2 = intersection([-45,0], [45,0], [0,45], [0,-45]);
        for(let i = 0; i < 2; i++) {
            expect(result2[i]).toBeCloseTo([0, 0][i]); // 在数学上，这种特殊情况无法区分
        }
    });
});