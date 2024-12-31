import { topology } from '../../src/topology/';
import { describe, it, expect} from 'vitest';

describe('bounds', () => {
    // tape("topology exact duplicate lines ABC & ABC share the arc ABC", function(test) {
    it('topology exact duplicate lines ABC & ABC share the arc ABC', () => {
        const geojson = {
            foo: {
                type: "LineString",
                coordinates: [[0, 0], [1, 0], [2, 0]]
            },
            bar: {
                type: "LineString",
                coordinates: [[0, 0], [1, 0], [2, 0]]
            }
        };
    
        const topo = {
            type: "Topology",
            bbox: [0, 0, 2, 0],
            arcs: [
              [[0, 0], [1, 0], [2, 0]]
            ],
            objects: {
              foo: {
                type: "LineString",
                arcs: [0]
              },
              bar: {
                type: "LineString",
                arcs: [0]
              }
            }
        }; 
        expect(topology(geojson)).toEqual(topo);
    });

    
    it('topology reversed duplicate lines ABC & CBA share the arc ABC', () => {
        const input = {
            foo: {
                type: "LineString",
                coordinates: [[0, 0], [1, 0], [2, 0]]
            },
            bar: {
                type: "LineString",
                coordinates: [[2, 0], [1, 0], [0, 0]]
            }
            };
        const res = {
            type: "Topology",
            bbox: [0, 0, 2, 0],
            arcs: [
                [[0, 0], [1, 0], [2, 0]]
            ],
            objects: {
                foo: {
                type: "LineString",
                arcs: [0]
                },
                bar: {
                type: "LineString",
                arcs: [~0]
                }
            }
        };
        expect(topology(input)).toEqual(res);
    });

});
