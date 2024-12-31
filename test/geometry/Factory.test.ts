import { describe, it, expect} from 'vitest';
import { collectionFromFeature, collectionFromGeometry, fromGeometryObj, fromFeatureObj, Geometry, GeometryCollection } from '../../src';
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

const geometryExp ={
    "type": "Point",
    "coordinates": [100.0, 0.0]
};

const geometryExp2 ={
    "type": "LineString",
    "coordinates": [
        [101.0, 0.0], [102.0, 1.0]
    ]
};

const featureExp = {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [102.0, 0.5]
    },
    "properties": {
        "prop0": "value0"
    }
};


describe('Geometry', () => {
    it('fromFeature', () => {
        const geometryCollection = collectionFromFeature(GeometryCollectionEXP);
        console.log(geometryCollection);
    });
    it('fromGeometry', () => {
        const geometryCollection = collectionFromGeometry(GeometryCollectionEXP.geometry);
        console.log(geometryCollection);
    });
    it('toGeoJSON', () => {
        const geometryCollection = collectionFromFeature(GeometryCollectionEXP);
        console.log(geometryCollection.toGeoJSON().geometry);
    });
    it('fromFeatureCollection', () => {
        const geometryCollection = collectionFromFeature(FeatureCollectionEXP);
        console.log(geometryCollection);
    });

    it('fromGeometryObj', () => {
        const geometryCollection = fromGeometryObj(geometryExp);
        console.log(geometryCollection);

        const geometryCollection2 = fromGeometryObj(geometryExp2);
        console.log(geometryCollection2.toGeoJSON());
        

    });

    it('fromFeatureObj', () => {
        const geometryCollection = fromFeatureObj(featureExp);
        console.log(geometryCollection);
    });
});
