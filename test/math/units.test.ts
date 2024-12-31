import { describe, it, expect } from 'vitest';
import { radiansToLength, lengthToRadians, degreesToRadians, radiansToDegrees,
        toMeters, metersTo, unitToUnit,
        toSquareMeters, squareMetersTo, areaToArea
    } from '../../src/';

const earthRadius = 6371008.8; // meters 地球半径的平均值

describe('units', () => {
    it('radiansToLength', () => {
        expect(radiansToLength(1, 'meters')).toBeCloseTo(earthRadius);
        console.log(radiansToLength(1, 'meters'));
        console.log(earthRadius);
    });

    it('lengthToRadians', () => {
        expect(lengthToRadians(1, 'kilometers')).toBeCloseTo(0.000156961013772);
    });

    it('degreesToRadians', () => {
        expect(degreesToRadians(180)).toBeCloseTo(Math.PI);
    });

    it('radiansToDegrees', () => {
        expect(radiansToDegrees(Math.PI)).toBeCloseTo(180);
    });

    it('toMeters', () => {
        expect(toMeters(1, 'kilometers')).toBeCloseTo(1000);
    });

    it('metersTo', () => {
        expect(metersTo(1000, 'kilometers')).toBeCloseTo(1);
    });

    it('unitToUnit', () => {
        expect(unitToUnit(1, 'kilometers', 'meters')).toBeCloseTo(1000);
    });

    it('toSquareMeters', () => {
        expect(toSquareMeters(1, 'hectares')).toBeCloseTo(10000);
    });

    it('squareMetersTo', () => {
        expect(squareMetersTo(10000, 'hectares')).toBeCloseTo(1);
    });

    it('areaToArea', () => {
        expect(areaToArea(1, 'hectares', 'meters')).toBeCloseTo(10000);
    });
});