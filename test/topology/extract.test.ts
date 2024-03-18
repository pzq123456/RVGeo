import { describe, it, expect} from 'vitest';
import { geomifyObject } from '../../src/topology/extract';

describe('geomifyObject', () => {
    it('should return a Geometry instance', () => {
        const obj = {
            type: "Point",
            coordinates: [1, 2],
        };
        const geometry = geomifyObject(obj);
        console.log(geometry);

        // obj 2
        const obj2 = {
            type: "FeatureCollection",
            features: [
                {
                    type: "Feature",
                    properties: {
                        name: "test"
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [1, 2]
                    }
                },
                {
                    type: "Feature",
                    properties: {
                        name: "test2"
                    },
                    geometry: {
                        type: "LineString",
                        coordinates: [[1, 2], [3, 4]]
                    }
                },

            ],
            bbox: [1, 2, 3, 4],
        };
        const geometry2 = geomifyObject(obj2);
        console.log(geometry2);
        // obj 3
        const obj3 = {
            type: "Feature",
            properties: {
                name: "test"
            },
            geometry: {
                type: "LineString",
                coordinates: [[1, 2], [3, 4]]
            }

        };
        const geometry3 = geomifyObject(obj3);
        console.log(geometry3);
    });
});