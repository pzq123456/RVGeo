import { describe, it, expect} from 'vitest';
import { geometry } from '../../src/topology/geometry';

describe('geomifyObject', () => {
    it('should return a Geometry instance', () => {
        const obj = {
            foo: {
              type: "Feature",
              geometry: {
                type: "LineString",
                coordinates: [[0, 0]]
              }
            },
            bar: {
              type: "LineString",
              coordinates: [[0, 0]]
            }
          }
        const geometry1 = geometry(obj);
        console.log(geometry1);
    });
});