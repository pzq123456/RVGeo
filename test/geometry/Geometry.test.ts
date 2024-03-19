import { describe, it, expect} from 'vitest';
import { GeometryCollection } from '../../src/';
// from geometry
// 1. GeometryCollection

// examples
const GeometryCollectionEXP = {
    "type": "Feature",
    "geometry": {
        "type": "GeometryCollection",
        "geometries": [
            {
                "type": "Point",
                "coordinates": [100.0, 0.0]
            },
            {
                "type": "LineString",
                "coordinates": [
                    [101.0, 0.0], [102.0, 1.0]
                ]
            }
        ]
    },
    "properties": undefined
};

// feature collection
const FeatureCollectionEXP = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [102.0, 0.5]
            },
            "properties": {
                "prop0": "value0"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]
                ]
            },
            "properties": {
                "prop0": "value0",
                "prop1": 0.0
            }
        }
    ]
};
describe('Geometry', () => {
    it('fromFeature', () => {
        const geometryCollection = GeometryCollection.fromFeature(GeometryCollectionEXP);
        console.log(geometryCollection);
    });
    it('fromGeometry', () => {
        const geometryCollection = GeometryCollection.fromGeometry(GeometryCollectionEXP.geometry);
        console.log(geometryCollection);
    });
    it('toGeoJSON', () => {
        const geometryCollection = GeometryCollection.fromFeature(GeometryCollectionEXP);
        console.log(geometryCollection.toGeoJSON().geometry);
    });
    it('fromFeatureCollection', () => {
        const geometryCollection = GeometryCollection.fromFeature(FeatureCollectionEXP);
        console.log(geometryCollection);
    });
});
