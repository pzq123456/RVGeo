import { extract } from '../../src/topology/extract';
import { join } from '../../src/topology/join';
import { describe, it, expect} from 'vitest';

describe('join', () => {
    it('reversed duplicate lines ABC & CBA have junctions at their end points', () => {
        const junctions = join(extract({
            abc: {type: "LineString", arcs: [[0, 0], [1, 0], [2, 0]]},
            cba: {type: "LineString", arcs: [[2, 0], [1, 0], [0, 0]]}
        }));
        expect(junctions.values()).toEqual([[0, 0], [2, 0]]);
    });



    it('exact duplicate rings ABCA & ABCA have no junctions', () => {
        const junctions = join(extract({
            abca: {type: "Polygon", arcs: [[[0, 0], [1, 0], [2, 0], [0, 0]]]},
            abca: {type: "Polygon", arcs: [[[0, 0], [1, 0], [2, 0], [0, 0]]]}
        }));
        expect(junctions.values()).toEqual([]);
    });
});