import {getPointsMBR, getMBRWithAntimeridian,mergeMBR,mergePointMBR} from '../../src'
import { describe, it, expect} from 'vitest';

const points = [
    [-117, -19],
    [-115, 19],
    [118, 19],
    [116, -19],
] as [number, number][];

const points2 = [
    [162.7181954619328,39.826786553485334],
    [-178.76944551876784,29.98649481004857],
    [-193.7315328813238,-8.12086757411494]
] as [number, number][];

const res2 = [162.7181954619328,-8.12086757411494,-178.76944551876784,39.826786553485334]
describe('MBR', () => {
    it('get MBR', () => {
        const mbr = getPointsMBR(points);
        expect(mbr).toEqual([-117, -19, 118, 19]);

        const mbr2 = getMBRWithAntimeridian(points2);
        expect(mbr2).toEqual(res2);
    });
    it('merge MBR', () => {
        const mbr = mergeMBR([-117, -19, 118, 19], [-115, -19, 118, 19]);
        expect(mbr).toEqual([-117, -19, 118, 19]);
        const mbr2 = mergeMBR([117, 19, 117, 19], [-115, -19, -115, -19]);
        expect(mbr2).toEqual([-115, -19, 117, 19]);
    });
    it('merge point MBR', () => {
        const mbr = mergePointMBR([-117, -19, 118, 19], [-118, -19]);
        expect(mbr).toEqual([-118, -19, 118, 19]);
    });
});