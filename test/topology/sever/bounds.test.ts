import { bounds } from '../../src/topology/bounds';
import { describe, it, expect} from 'vitest';
describe('bounds', () => {
it('bounds computes the bounding box', () => {
    expect(bounds({
        foo: {
        type: "LineString",
        arcs: [[0, 0], [1, 0], [0, 2], [0, 0]]
        }
    })).toEqual([0, 0, 1, 2]);
});

it('bounds considers points as well as arcs', () => {
    expect(bounds({
        foo: {
        type: "MultiPoint",
        coordinates: [[0, 0], [1, 0], [0, 2], [0, 0]]
        }
    })).toEqual([0, 0, 1, 2]);
});
});