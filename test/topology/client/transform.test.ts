import { describe, it, expect} from 'vitest';
import { transform, untransform } from '../../../src/topology/client/transform';

describe('topojson.transform', () => {
    it('returns the identity function if transform is undefined', () => {
        const transformFn = transform(null);
        const point = {};
        expect(transformFn(point)).toBe(point);
    });

    it('returns a point-transform function if transform is defined', () => {
        const transformFn = transform({scale: [2, 3], translate: [4, 5]});
        expect(transformFn([6, 7])).toEqual([16, 26]);
    });

    it('topojson.untransform(topology) returns the identity function if transform is undefined', () => {
        const untransformFn = untransform(null);
        const point = {};
        expect(untransformFn(point)).toBe(point);
    });

    it('topojson.untransform(topology) returns a point-transform function if transform is defined', () => {
        const untransformFn = untransform({scale: [2, 3], translate: [4, 5]});
        expect(untransformFn([16, 26])).toEqual([6, 7]);
    });
});