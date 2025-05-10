import { describe, it, expect } from 'vitest';
import { 
    collectionFromFeature, 
    collectionFromGeometry, 
    fromGeometryObj, 
    fromFeatureObj,
    GeometryCollection
} from '../../src';
import { 
    Point, 
    LineString, 
    Geometry
} from '../../src/geometry';

import { 
    GeoJSONFeature, 
    GeoJSONFeatureCollection, 
    GeoJSONGeometryCollection, 
    GeoJSONPoint, 
    GeoJSONLineString
} from '../../src/geometry/GeoJSON';

// 测试数据
const pointGeometry: GeoJSONPoint = {
    type: "Point",
    coordinates: [100.0, 0.0]
};

const lineStringGeometry: GeoJSONLineString = {
    type: "LineString",
    coordinates: [
        [101.0, 0.0], 
        [102.0, 1.0]
    ]
};

const geometryCollection: GeoJSONGeometryCollection = {
    type: "GeometryCollection",
    geometries: [pointGeometry, lineStringGeometry]
};

const featureWithGeometryCollection: GeoJSONFeature = {
    type: "Feature",
    geometry: geometryCollection,
    properties: { name: "test feature" }
};

const featureWithPoint: GeoJSONFeature = {
    type: "Feature",
    geometry: pointGeometry,
    properties: { prop0: "value0" }
};

const featureCollection: GeoJSONFeatureCollection = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [102.0, 0.5]
            },
            properties: { prop0: "value0" }
        },
        {
            type: "Feature",
            geometry: {
                type: "LineString",
                coordinates: [
                    [102.0, 0.0], 
                    [103.0, 1.0], 
                    [104.0, 0.0], 
                    [105.0, 1.0]
                ]
            },
            properties: {
                prop0: "value0",
                prop1: 0.0
            }
        }
    ]
};

describe('Geometry Factory Functions', () => {
    describe('fromGeometryObj', () => {
        it('should create Point from GeoJSON Point', () => {
            const result = fromGeometryObj(pointGeometry);
            expect(result).toBeInstanceOf(Point);
            expect(result.toGeoJSON().geometry).toEqual(pointGeometry);
        });

        it('should create LineString from GeoJSON LineString', () => {
            const result = fromGeometryObj(lineStringGeometry);
            expect(result).toBeInstanceOf(LineString);
            expect(result.toGeoJSON().geometry).toEqual(lineStringGeometry);
        });

        it('should throw error for unknown geometry type', () => {
            const invalidGeometry = { type: "InvalidType", coordinates: [] };
            expect(() => fromGeometryObj(invalidGeometry as any)).toThrowError(
                "Unknown geometry type: InvalidType in fromGeometryObj"
            );
        });
    });

    describe('fromFeatureObj', () => {
        it('should create Geometry from Feature with Point', () => {
            const result = fromFeatureObj(featureWithPoint);
            expect(result).toBeInstanceOf(Point);
            expect(result.toGeoJSON().geometry).toEqual(featureWithPoint.geometry);
        });

        it('should create GeometryCollection from FeatureCollection', () => {
            const result = fromFeatureObj(featureCollection);
            expect(result).toBeInstanceOf(GeometryCollection);
            expect(result.geometries).toHaveLength(2);
            console.log(result);
        });

        it('should throw error for unknown GeoJSON type', () => {
            const invalidFeature = { type: "InvalidType" };
            expect(() => fromFeatureObj(invalidFeature as any)).toThrowError(
                "Unknown GeoJSON type"
            );
        });
    });

    describe('collectionFromGeometry', () => {
        it('should create GeometryCollection from GeoJSON GeometryCollection', () => {
            const result = collectionFromGeometry(geometryCollection);
            expect(result).toBeInstanceOf(GeometryCollection);
            expect(result.geometries).toHaveLength(2);
            expect(result.geometries[0].toGeoJSON().geometry).toEqual(pointGeometry);
            expect(result.geometries[1].toGeoJSON().geometry).toEqual(lineStringGeometry);
        });

        it('should throw error for non-GeometryCollection input', () => {
            expect(() => collectionFromGeometry(pointGeometry as any)).toThrowError(
                "The input geometry is not a GeometryCollection"
            );
        });
    });

    describe('collectionFromFeature', () => {
        it('should create GeometryCollection from Feature with GeometryCollection', () => {
            const result = collectionFromFeature(featureWithGeometryCollection);
            expect(result).toBeInstanceOf(GeometryCollection);
            expect(result.geometries).toHaveLength(2);
            expect(result.properties).toEqual(featureWithGeometryCollection.properties);
        });

        it('should create GeometryCollection from FeatureCollection', () => {
            const result = collectionFromFeature(featureCollection);
            expect(result).toBeInstanceOf(GeometryCollection);
            expect(result.geometries).toHaveLength(2);
        });

        it('should throw error for non-GeometryCollection Feature', () => {
            expect(() => collectionFromFeature(featureWithPoint as any)).toThrowError(
                "The input feature is not a GeometryCollection: Point"
            );
        });
    });

    describe('toGeoJSON', () => {
        it('should convert GeometryCollection back to GeoJSON format', () => {
            const collection = collectionFromGeometry(geometryCollection);
            const geoJSON = collection.toGeoJSON();
            expect(geoJSON.geometry).toEqual(geometryCollection);
        });

        it('should preserve properties when converting from Feature', () => {
            const collection = collectionFromFeature(featureWithGeometryCollection);
            const geoJSON = collection.toGeoJSON();
            expect(geoJSON.properties).toEqual(featureWithGeometryCollection.properties);
        });
    });
});