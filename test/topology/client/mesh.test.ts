import { describe, it, expect} from 'vitest';
import { mesh } from '../../../src/topology/client/mesh';

describe('mesh', () => {
    it ('mesh ignores null geometries', () => {
        const topology = {
            "type": "Topology",
            "objects": {},
            "arcs": []
        };
        expect(mesh(topology, {type: null})).toEqual({
            type: "MultiLineString",
            coordinates: []
        });
    });

    it ('mesh stitches together two connected line strings', () => {
        const topology = {
            "type": "Topology",
            "objects": {
                "collection": {
                "type": "GeometryCollection",
                "geometries": [
                    {"type": "LineString", "arcs": [0]},
                    {"type": "LineString", "arcs": [1]}
                ]
                }
            },
            "arcs": [
                [[1, 0], [2, 0]],
                [[0, 0], [1, 0]]
            ]
        };
        expect(mesh(topology, topology.objects.collection)).toEqual({
            type: "MultiLineString",
            coordinates: [[[0, 0], [1, 0], [2, 0]]]
        });
    });

    it ('mesh does not stitch together two disconnected line strings', () => {
        const topology = {
            "type": "Topology",
            "objects": {
                "collection": {
                "type": "GeometryCollection",
                "geometries": [
                    {"type": "LineString", "arcs": [0]},
                    {"type": "LineString", "arcs": [1]}
                ]
                }
            },
            "arcs": [
                [[2, 0], [3, 0]],
                [[0, 0], [1, 0]]
            ]
        };
        expect(mesh(topology, topology.objects.collection)).toEqual({
            type: "MultiLineString",
            coordinates: [[[2, 0], [3, 0]], [[0, 0], [1, 0]]]
        });
    });
});
  