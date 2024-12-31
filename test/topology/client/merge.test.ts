import { describe, it, expect} from 'vitest';
import { merge } from '../../../src/topology/client/merge';

// tape("merge stitches together two side-by-side polygons", function(test) {

describe('merge', () => {
 it ('stitches together two side-by-side polygons', () => {
    const res = {
        type: "MultiPolygon",
        coordinates: [[[[1, 0], [0, 0], [0, 1], [1, 1], [2, 1], [2, 0], [1, 0]]]]
    };
    
    const topology = {
        "type": "Topology",
        "objects": {
        "collection": {
            "type": "GeometryCollection",
            "geometries": [
            {"type": "Polygon", "arcs": [[0, 1]]},
            {"type": "Polygon", "arcs": [[-1, 2]]}
            ]
        }
        },
        "arcs": [
        [[1, 1], [1, 0]],
        [[1, 0], [0, 0], [0, 1], [1, 1]],
        [[1, 1], [2, 1], [2, 0], [1, 0]]
        ]
    };

    // expect(merge(topology, topology.objects.collection.geometries)).toEqual(res);
    console.log(merge(topology, topology.objects.collection.geometries));
 });
});


