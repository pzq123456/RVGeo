/**
 * @module Geometry
 */

// base class for all geometry classes
interface GeoJSONGeometry<T> {
    type: string;
    coordinates: any;
    properties: T;
}

abstract class Geometry<T> {
    constructor(protected properties: T) {}

    abstract toGeoJSON(): GeoJSONGeometry<T>;
    abstract fromGeoJSON(geoJSON: GeoJSONGeometry<T>): void;
}