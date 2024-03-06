import { MBR, QuadTree } from '../../src'
import { describe, it, expect } from 'vitest';

describe('QuadTree', () => {
    it('should insert a point', () => {
        const boundary = [0,0,100,100] as MBR;
        const capacity = 4;
        const quadTree = new QuadTree(boundary,capacity);
        const point = [10,10] as [number,number];
        const point2 = [0,10] as [number,number];
        const point3 = [0,30] as [number,number];
        const point4 = [20,0] as [number,number];

        expect(quadTree.insert(point)).toBe(true);
        expect(quadTree.insert(point2)).toBe(true);
        expect(quadTree.insert(point3)).toBe(true);
        expect(quadTree.insert(point4)).toBe(true);
    });
});
