import { describe, it, expect} from 'vitest';
import { bbox } from '../../../src/topology/client/bbox';

describe('topojson.bbox', () => {
    it('topojson.bbox(topology) ignores the existing bbox, if any', () => {
        const bbox2 = [1, 2, 3, 4];
        const topology = {type: "Topology", bbox: bbox2, objects: {}, arcs: []};
        expect(bbox(topology)).toEqual([Infinity, Infinity, -Infinity, -Infinity]);
    });

    it('computes the bbox for a quantized topology, if missing', () => {
        const topology = {
            type: "Topology",
            objects: {},
            arcs: []
        };
        expect(bbox(topology)).toEqual([Infinity, Infinity, -Infinity, -Infinity]);
    });
});
