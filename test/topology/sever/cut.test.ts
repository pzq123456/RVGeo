import { extract } from '../../src/topology/extract';
import { cut } from '../../src/topology/cut';
import { describe, it, expect} from 'vitest';

// tape("cut exact duplicate lines ABC & ABC have no cuts", function(test) {
//     var topology = cut(extract({
//       abc: {type: "LineString", arcs: [[0, 0], [1, 0], [2, 0]]},
//       abc2: {type: "LineString", arcs: [[0, 0], [1, 0], [2, 0]]}
//     }));
//     test.deepEqual(topology.objects, {
//       abc: {type: "LineString", arcs: {0: 0, 1: 2}},
//       abc2: {type: "LineString", arcs: {0: 3, 1: 5}}
//     });
//     test.end();
//   });
  
//   tape("cut reversed duplicate lines ABC & CBA have no cuts", function(test) {
//     var topology = cut(extract({
//       abc: {type: "LineString", arcs: [[0, 0], [1, 0], [2, 0]]},
//       cba: {type: "LineString", arcs: [[2, 0], [1, 0], [0, 0]]}
//     }));
//     test.deepEqual(topology.objects, {
//       abc: {type: "LineString", arcs: {0: 0, 1: 2}},
//       cba: {type: "LineString", arcs: {0: 3, 1: 5}}
//     });
//     test.end();
//   });

describe('cut', () => {
    it('exact duplicate lines ABC & ABC have no cuts', () => {
        const topology = cut(extract({
            abc: {type: "LineString", arcs: [[0, 0], [1, 0], [2, 0]]},
            abc2: {type: "LineString", arcs: [[0, 0], [1, 0], [2, 0]]}
        }));
        expect(topology.objects).toEqual({
            abc: {type: "LineString", arcs: {0: 0, 1: 2}},
            abc2: {type: "LineString", arcs: {0: 3, 1: 5}}
        });
    });

    it('reversed duplicate lines ABC & CBA have no cuts', () => {
        const topology = cut(extract({
            abc: {type: "LineString", arcs: [[0, 0], [1, 0], [2, 0]]},
            cba: {type: "LineString", arcs: [[2, 0], [1, 0], [0, 0]]}
        }));
        expect(topology.objects).toEqual({
            abc: {type: "LineString", arcs: {0: 0, 1: 2}},
            cba: {type: "LineString", arcs: {0: 3, 1: 5}}
        });
    });
});