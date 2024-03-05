import { describe, it, expect } from 'vitest';
import { spherical, cartesianAngle } from '../../src';

describe('spherical', () => {
    it('spherical', () => {
        const result = spherical([-1, -0, 0]);
        expect(result).toEqual([0, 0]);
    });

    it('cartesianAngle', () => {
        const result = cartesianAngle([1, 0, 0], [0, 1, 0]);
        console.log(result, Math.PI / 2);
        expect(result).toBeCloseTo(Math.PI / 2);
    });
});