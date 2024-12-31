import { extract } from '../../src/topology/extract';
import { describe, it, expect} from 'vitest';

const topology = {
    foo: {
        type: "LineString",
        arcs: [[0, 0], [1, 0], [2, 0]]
    },
        bar: {
        type: "LineString",
        arcs: [[0, 0], [1, 0], [2, 0]]
    },
        baz: {
        type: "Polygon",
        arcs: [[[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]]
    }
}

describe('topology/extract', () => {
    it('should return a topology', () => {
        console.log(extract(topology));
    });
});
