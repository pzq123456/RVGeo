import { describe, it, expect } from 'vitest';
import { spherical, cartesianAngle, cartesian, degreesToRadians, cos, pi, radiansToDegrees } from '../../src';

describe('spherical', () => {
    it('spherical', () => {
        const result = spherical([1, 0, 0]);
        expect(result).toEqual([0, 0]);
    });

    it('cartesianAngle', () => {
        const I = [1,0,0] as [number, number, number];
        const P11 = [0,-1,0] as [number, number, number];
        const P12 = [0,1,0] as [number, number, number];

        const I2 = [-1,0,0] as [number, number, number];
        const P21 = [0,0,1] as [number, number, number];
        const P22 = [0,0,-1] as [number, number, number];

        // const result = cartesianAngle(P11,I);
        // console.log(result);
        // const result2 = cartesianAngle(P12,I);
        // console.log(result2);
        // const result3 = cartesianAngle(P11,P12);
        // console.log(result3);

        const result = cartesianAngle(P21,I2);
        console.log(result);
        const result2 = cartesianAngle(I2,P22);
        console.log(result2);
        const result3 = cartesianAngle(P11,P12);
        console.log(result3);
    });

    it('cartesian', () => {
        let p1 = [0,90] as [number, number];
        let result = cartesian(p1);

        for(let i = 0; i < 3; i++) {
            expect(result[i]).toBeCloseTo([0, 0, 1][i]);
        }

        p1 = [0,0] as [number, number];
        result = cartesian(p1);

        for(let i = 0; i < 3; i++) {
            expect(result[i]).toBeCloseTo([1, 0, 0][i]);
        }

        p1 = [90,0] as [number, number];
        result = cartesian(p1);

        for(let i = 0; i < 3; i++) {
            expect(result[i]).toBeCloseTo([0, 1, 0][i]);
        }
    });

    it('degreesToRadians', () => {
        const result = degreesToRadians(180);
        expect(result).toBe(Math.PI);

        const result2 = degreesToRadians(360);
        expect(result2).toBe(0);

        const result3 = degreesToRadians(0);
        expect(result3).toBe(0);
    });
});