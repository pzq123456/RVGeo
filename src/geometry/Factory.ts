import { 
    GeoJSONFeature, GeoJSONFeatureCollection, 
    GeoJSONGeometry, GeoJSONGeometryCollection,
    GeoJSONPoint, GeoJSONMultiPoint,
    GeoJSONLineString, GeoJSONMultiLineString,
    GeoJSONPolygon, GeoJSONMultiPolygon
} from "./GeoJSON";

import { 
    Geometry, GeometryCollection, 
    Point, LineString, Polygon, 
    MultiPoint, MultiLineString, MultiPolygon 
} from ".";

/**
 * Factory function for creating geometry objects from GeoJSON Geometry objects
 * @param geometry GeoJSON Geometry object
 * @returns Geometry instance
 * @throws Error if geometry is invalid or type is unknown
 */
export function fromGeometryObj(
    geometry: GeoJSONGeometry | GeoJSONGeometryCollection
): Geometry | GeometryCollection {
    if (!geometry || !geometry.type) {
        throw new Error("Invalid geometry object");
    }

    switch (geometry.type) {
        case "Point":
            return Point.fromGeometry(geometry as GeoJSONPoint);
        case "LineString":
            return LineString.fromGeometry(geometry as GeoJSONLineString);
        case "Polygon":
            return Polygon.fromGeometry(geometry as GeoJSONPolygon);
        case "MultiPoint":
            return MultiPoint.fromGeometry(geometry as GeoJSONMultiPoint);
        case "MultiLineString":
            return MultiLineString.fromGeometry(geometry as GeoJSONMultiLineString);
        case "MultiPolygon":
            return MultiPolygon.fromGeometry(geometry as GeoJSONMultiPolygon);
        case "GeometryCollection":
            return collectionFromGeometry(geometry as GeoJSONGeometryCollection);
        default:
            throw new Error(`Unknown geometry type: ${(geometry as any).type} in fromGeometryObj`);
    }
}

/**
 * Factory function for creating geometry objects from GeoJSON Feature objects
 * @param feature GeoJSON Feature or FeatureCollection
 * @returns Geometry or GeometryCollection instance
 * @throws Error if feature is invalid or type is unknown
 */
export function fromFeatureObj(feature: GeoJSONFeature | GeoJSONFeatureCollection): Geometry | GeometryCollection {
    if (!feature || !feature.type) {
        throw new Error("Invalid feature object");
    }

    if (feature.type === "Feature") {
        if (!feature.geometry) {
            throw new Error("Feature geometry is missing");
        }
        return fromGeometryObj(feature.geometry);
    }
    
    if (feature.type === "FeatureCollection") {
        return collectionFromFeature(feature);
    }
    
    throw new Error(`Unknown GeoJSON type: ${(feature as any).type}`);
}

/**
 * Creates GeometryCollection from GeoJSON Feature objects
 * @param feature Feature with GeometryCollection or FeatureCollection
 * @returns GeometryCollection instance
 * @throws Error if input is invalid
 */
export function collectionFromFeature(feature: GeoJSONFeature | GeoJSONFeatureCollection): GeometryCollection {
    if (!feature || !feature.type) {
        throw new Error("Invalid feature object");
    }

    if (feature.type === "Feature") {
        if (feature.geometry?.type === "GeometryCollection") {
            const geometries = feature.geometry.geometries.map(geo => fromGeometryObj(geo));
            return new GeometryCollection(geometries, feature.properties);
        }
        throw new Error(`The input feature is not a GeometryCollection: ${feature.geometry?.type}`);
    }
    
    if (feature.type === "FeatureCollection") {
        const geometries = feature.features.map(f => fromFeatureObj(f));
        return new GeometryCollection(geometries);
    }
    
    throw new Error(`Unknown GeoJSON type: ${(feature as any).type}`);
}

/**
 * Creates GeometryCollection from GeoJSON Geometry objects
 * @param geometry GeometryCollection object
 * @returns GeometryCollection instance
 * @throws Error if input is not a GeometryCollection
 */
export function collectionFromGeometry(geometry: GeoJSONGeometryCollection): GeometryCollection {
    if (!geometry || geometry.type !== "GeometryCollection") {
        throw new Error("The input geometry is not a GeometryCollection");
    }

    const geometries = geometry.geometries.map(geo => fromGeometryObj(geo));
    return new GeometryCollection(geometries);
}