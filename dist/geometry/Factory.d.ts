import { Geometry, GeometryCollection } from '.';
import { GeoJSONFeature, GeoJSONFeatureCollection, GeoJSONGeometry, GeoJSONGeometryCollection } from './GeoJSON';

/**
 * Factory function for creating geometry objects from GeoJSON Geometry objects
 * - about Geometry objects @see GeoJSONGeometry
 * @param geometry
 * @returns
 */
export declare function fromGeometryObj(geometry: GeoJSONGeometry | GeoJSONGeometryCollection): Geometry | GeometryCollection;
/**
 * Factory function for creating geometry objects from GeoJSON Feature objects
 * - you can use this function to create inner geometry from Features
 * - about Feature objects @see GeoJSONFeature
 * @param geometry
 * @returns
 */
export declare function fromFeatureObj(feature: GeoJSONFeature | GeoJSONFeatureCollection): Geometry | GeometryCollection;
/**
 * Factory function for creating geometryCollection objects from GeoJSON Feature objects
 * @param feature
 * @returns
 */
export declare function collectionFromFeature(feature: GeoJSONFeature | GeoJSONFeatureCollection): GeometryCollection;
/**
 * Factory function for creating geometryCollection objects from GeoJSON Geometry objects
 * @param geometry
 * @returns
 */
export declare function collectionFromGeometry(geometry: GeoJSONGeometryCollection | GeoJSONGeometry): GeometryCollection;
