import { describe, it, expect} from 'vitest';
import { neighbors } from '../../../src/topology/client/neighbors';

describe('neighbors', () => {
it ('neighbors are returned in sorted order by index', () => {
    const topology = {
        "type": "Topology",
        "objects": {
          "abcd": {"type": "LineString", "arcs": [0, 1, 2]},
          "bcde": {"type": "LineString", "arcs": [1, 2, 3]},
          "cdef": {"type": "LineString", "arcs": [2, 3, 4]},
          "dbca": {"type": "LineString", "arcs": [-3, -2, -1]},
          "edcb": {"type": "LineString", "arcs": [-4, -3, -2]},
          "fedc": {"type": "LineString", "arcs": [-5, -4, -3]}
        },
        "arcs": [
          [[0, 0], [1, 0]],
          [[1, 0], [2, 0]],
          [[2, 0], [3, 0]],
          [[3, 0], [4, 0]],
          [[4, 0], [5, 0]]
        ]
      };

    
    expect(
        neighbors([
        topology.objects.abcd,
        topology.objects.bcde,
        topology.objects.cdef,
        topology.objects.dbca,
        topology.objects.edcb,
        topology.objects.fedc ])
      ).toEqual([
        [1, 2, 3, 4, 5],
        [0, 2, 3, 4, 5],
        [0, 1, 3, 4, 5],
        [0, 1, 2, 4, 5],
        [0, 1, 2, 3, 5],
        [0, 1, 2, 3, 4]
      ]);
});
  // A-----B-----E     G
  // |     |     |     |\
  // |     |     |     | \
  // |     |     |     |  \
  // |     |     |     |   \
  // |     |     |     |    \
  // D-----C-----F     I-----H
  //
it ('neighbors the polygons ABCDA and BEFCB are neighbors, but GHIG is not', () => {
    const topology = {
        "type": "Topology",
        "objects": {
          "abcda": {"type": "Polygon", "arcs": [[0, 1]]},
          "befcb": {"type": "Polygon", "arcs": [[2, -1]]},
          "ghig": {"type": "Polygon", "arcs": [[3]]}
        },
        "arcs": [
          [[1, 0], [1, 1]],
          [[1, 1], [0, 1], [0, 0], [1, 0]],
          [[1, 0], [2, 0], [2, 1], [1, 1]],
          [[3, 0], [4, 1], [3, 1], [3, 0]]
        ]
      };
    expect(neighbors([
        topology.objects.abcda,
        topology.objects.befcb,
        topology.objects.ghig
      ])).toEqual(
        [
            [1],
            [0],
            []
          ]
      );
    })
});