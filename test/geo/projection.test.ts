import { SphericalMercator } from '../../src';
import { describe, it, expect } from 'vitest';

const MAX_EXTENT_MERC = [-20037508.342789244,-20037508.342789244,20037508.342789244,20037508.342789244];
const MAX_EXTENT_WGS84 = [-180,-85.0511287798066,180,85.0511287798066];

describe('projections', () => {
    it('SphericalMercator', () => {
        // PROJECT
        SphericalMercator.project([0, 0]); 
        expect(SphericalMercator.project([0, 0])).toEqual([0, 0]);
        expect(SphericalMercator.project([180, 90])).toEqual([20037508.342789244, 20037508.342789244]);
        expect(SphericalMercator.project([-180, -85.0511287798066])).toEqual([-20037508.342789244, -20037508.342789244]);
        expect(SphericalMercator.project([180, -85.0511287798066])).toEqual([20037508.342789244, -20037508.342789244]);
        expect(SphericalMercator.project([-180, 85.0511287798066])).toEqual([-20037508.342789244, 20037508.342789244]);

        // UNPROJECT
        expect(SphericalMercator.unproject([0, 0])).toEqual([0, 0]);
        expect(SphericalMercator.unproject([20037508.342789244, 20037508.342789244])).toEqual([180, 85.0511287798066]);
        expect(SphericalMercator.unproject([-20037508.342789244, -20037508.342789244])).toEqual([-180, -85.0511287798066]);
        expect(SphericalMercator.unproject([20037508.342789244, -20037508.342789244])).toEqual([180, -85.0511287798066]);
        expect(SphericalMercator.unproject([-20037508.342789244, 20037508.342789244])).toEqual([-180, 85.0511287798066]);
    });
})