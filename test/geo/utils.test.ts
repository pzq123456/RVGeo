import { isEPSG3857, Earth } from '../../src'
import { describe, it, expect } from 'vitest';

describe('geo utils', () => {
    it('isEPSG3857', () => {
        // no param
        expect(isEPSG3857()).toBe(false);
        // only nums
        expect(isEPSG3857('900913')).toBe(true);
        expect(isEPSG3857('3857')).toBe(true);
        
        expect(isEPSG3857('EPSG:3857')).toBe(true);
        expect(isEPSG3857('EPSG:900913')).toBe(true);
        expect(isEPSG3857('epsg:3857')).toBe(true);
        expect(isEPSG3857('epsg:900913')).toBe(true);
        expect(isEPSG3857('EPSG-3857')).toBe(true);
        expect(isEPSG3857('EPSG-900913')).toBe(true);
        expect(isEPSG3857('epsg-3857')).toBe(true);
        expect(isEPSG3857('epsg-900913')).toBe(true);
        expect(isEPSG3857('EPSG:4326')).toBe(false);
        expect(isEPSG3857('EPSG:32661')).toBe(false);
        expect(isEPSG3857('EPSG:32661')).toBe(false);
        expect(isEPSG3857('EPSG:32661')).toBe(false);
    });
    it('harv distance', () => {
        let dis = Earth.distance([50, 5], [58, 3]);
        console.log(dis);
    });

})