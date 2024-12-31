import { extract } from '../../src/topology/extract';
import { cut } from '../../src/topology/cut';
import { dedup } from '../../src/topology/dedup';
import { describe, it, expect} from 'vitest';

describe('dedup', () => {
    it('exact duplicate lines ABC & ABC share an arc', () => {
        // @ts-ignore
        const topology = dedup(cut(extract({
            abc: {type: "LineString", arcs: [[0, 0], [1, 0], [2, 0]]},
            abc2: {type: "LineString", arcs: [[0, 0], [1, 0], [2, 0]]}
        })));
        expect(topology.objects).toEqual({
            abc: {type: "LineString", arcs: {0: 0, 1: 2}},
            abc2: {type: "LineString", arcs: {0: 0, 1: 2}}
        });
    });

    it('reversed duplicate lines ABC & CBA share an arc', () => {
        // @ts-ignore
        const topology = dedup(cut(extract({
            abc: {type: "LineString", arcs: [[0, 0], [1, 0], [2, 0]]},
            cba: {type: "LineString", arcs: [[2, 0], [1, 0], [0, 0]]}
        })));
        expect(topology.objects).toEqual({
            abc: {type: "LineString", arcs: {0: 0, 1: 2}},
            cba: {type: "LineString", arcs: {0: 2, 1: 0}}
        });
    });

    it('exact duplicate ', () => {
        // @ts-ignore
        const topology = dedup(cut(extract({
            abca: {type: "Polygon", arcs: [[[0, 0], [1, 0], [2, 0], [0, 0]]]},
            abca2: {type: "Polygon", arcs: [[[0, 0], [1, 0], [2, 0], [0, 0]]]}
        })));

        expect(topology.objects).toEqual({
            abca: {type: "Polygon", arcs: [{0: 0, 1: 3}]},
            abca2: {type: "Polygon", arcs: [{0: 0, 1: 3}]}
        });
    });
});
  
