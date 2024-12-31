import { describe, it, expect} from 'vitest';
import { prequantize } from '../../src/topology/prequantize';

describe('prequantize', () => {
    it('returns the quantization transform', () => {
        expect(prequantize({}, [0, 0, 1, 1], 1e4)).toEqual({
            scale: [1 / 9999, 1 / 9999],
            translate: [0, 0]
        });
    });
    it('converts coordinates to fixed precision', () => {
        var objects = {
            foo: {
                type: "LineString",
                arcs: [[0, 0], [1, 0], [0, 1], [0, 0]]
            }
        };
        prequantize(objects, [0, 0, 1, 1], 1e4);
        expect(objects.foo.arcs).toEqual([[0, 0], [9999, 0], [0, 9999], [0, 0]]);
    });
});