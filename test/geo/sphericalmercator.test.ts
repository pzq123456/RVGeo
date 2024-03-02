import { describe, it, expect } from 'vitest';
import { SphericalMercator } from '../../src/';

let sm = new SphericalMercator();
let antiM = new SphericalMercator({ antimeridian: true });

const MAX_EXTENT_MERC = [-20037508.342789244,-20037508.342789244,20037508.342789244,20037508.342789244];
const MAX_EXTENT_WGS84 = [-180,-85.0511287798066,180,85.0511287798066];

describe('SphericalMercator', () => {
    it('bbox', () => {
        const sm = new SphericalMercator();
        // console.log(sm.bbox(0, 0, 0, true, 'WGS84'));
        expect(sm.bbox(0, 0, 0, true, 'WGS84')).toEqual(
          [-180, -85.05112877980659, 180, 85.0511287798066],
          );
    
        expect(sm.bbox(0, 0, 1, true, 'WGS84')).toEqual(
          [-180, -85.05112877980659, 0, 0],
        );
    });

    it('xyz', () => {
        expect(sm.xyz([-180,-85.05112877980659,180,85.0511287798066],0,true,'WGS84')).toEqual(
          {minX:0,minY:0,maxX:0, maxY:0},
        );
        expect(sm.xyz([-180,-85.05112877980659,0,0],1,true,'WGS84')).toEqual(
          {minX:0,minY:0,maxX:0, maxY:0},
        );
    });

    it('xyz-broken', () => {
        const extent = [ -0.087891, 40.95703, 0.087891, 41.044916 ];
        const xyz = sm.xyz(extent, 3, true, 'WGS84');
        expect(xyz.minX <= xyz.maxX).toBe(true);
        expect(xyz.minY <= xyz.maxY).toBe(true);
    });

    it('xyz-negative', () => {
        const extent = [-112.5, 85.0511, -112.5, 85.0511];
        const xyz = sm.xyz(extent, 0);
        expect(xyz.minY).toBe(0);
    });

    it('xyz-fuzz', () => {
        for (let i = 0; i < 1000; i++) {
            const x = [-180 + (360*Math.random()), -180 + (360*Math.random())];
            const y = [-85 + (170*Math.random()), -85 + (170*Math.random())];
            const z = Math.floor(22*Math.random());
            const extent = [
                Math.min.apply(Math, x),
                Math.min.apply(Math, y),
                Math.max.apply(Math, x),
                Math.max.apply(Math, y)
            ];
            const xyz = sm.xyz(extent, z, true, 'WGS84');
            expect(xyz.minX <= xyz.maxX).toBe(true);
            expect(xyz.minY <= xyz.maxY).toBe(true);
        }
    })

    it('convert', () => {
        expect(sm.convert(MAX_EXTENT_WGS84,'900913')).toEqual(MAX_EXTENT_MERC);
        expect(sm.convert(MAX_EXTENT_MERC,'WGS84')).toEqual(MAX_EXTENT_WGS84);
    });
    
    it('extents', () => {
        expect(sm.convert([-240,-90,240,90],'900913')).toEqual(MAX_EXTENT_MERC);
        expect(sm.xyz([-240,-90,240,90],4,true,'WGS84')).toEqual({minX:0,minY:0,maxX:15,maxY:15});
    });

    it('ll', () => {
        expect(sm.ll([200,200], 9)).toEqual([-179.45068359375, 85.00351401304403]);
        expect(sm.ll([200,200], 8.6574)).toEqual([-179.3034449476476, 84.99067388699072]);
    });

    it('px', () => {
        expect(sm.px([-179,85], 9)).toEqual([364, 215]);
        expect(sm.px([-179,85], 8.6574)).toEqual([287.12734093961626, 169.30444219392666]);
        expect(sm.px([250, 3], 4)).toEqual([4096, 2014]);
        expect(antiM.px([250, 3], 4)).toEqual([4892, 2014]);
        expect(antiM.px([400, 3], 4)).toEqual([6599, 2014]);
        expect(antiM.px([400, 3], 4)).toEqual([6599, 2014]);
    });

    it('high precision float', () => {
        const withInt = sm.ll([200,200], 4);
        const withFloat = sm.ll([200,200], 4.0000000001);
        expect(withInt[0].toFixed(6)).toBe(withFloat[0].toFixed(6));
        expect(withInt[1].toFixed(6)).toBe(withFloat[1].toFixed(6));
    });
});