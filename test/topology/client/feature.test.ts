import { describe, it, expect} from 'vitest';
import { feature } from '../../../src/topology/client/feature';

describe('topojson.feature', function() {
    it('the geometry type is preserved', function() {
        var t = simpleTopology({type: "Polygon", arcs: [[0],[-1]]});
        expect(feature(t, t.objects.foo).geometry.type).toBe("Polygon");
        console.log(feature(t, t.objects.foo).geometry.coordinates);
        console.log(`${~0}, ${~-1}, ${~-2}, ${~-3}, ${~-4}`);
        console.log(`${0}, ${-1}, ${-2}, ${-3}, ${-4}`);
    });

    it('Point is a valid geometry type', function() {
        var t = simpleTopology({type: "Point", coordinates: [0, 0]});
        expect(feature(t, t.objects.foo)).toEqual({type: "Feature", properties: {}, geometry: {type: "Point", coordinates: [0, 0]}});
    });

    it('MultiPoint is a valid geometry type', function() {
        var t = simpleTopology({type: "MultiPoint", coordinates: [[0, 0]]});
        expect(feature(t, t.objects.foo)).toEqual({type: "Feature", properties: {}, geometry: {type: "MultiPoint", coordinates: [[0, 0]]}});
    });
});


function simpleTopology(object) {
    return {
        type: "Topology",
        transform: {scale: [1, 1], translate: [0, 0]},
        objects: {foo: object},
        arcs: [
            [[0, 0], [1, 0], [0, 1], [-1, 0], [0, -1]],
            [[0, 0], [1, 0], [0, 1]],
            [[1, 1], [-1, 0], [0, -1]],
            [[1, 1]],
            [[0, 0]]
        ]
    };
}