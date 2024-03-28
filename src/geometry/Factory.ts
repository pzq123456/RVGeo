import { GeoJSONFeature, GeoJSONFeatureCollection, GeoJSONGeometry, GeoJSONGeometryCollection, GeoJSONLineString, GeoJSONMultiLineString, GeoJSONMultiPoint, GeoJSONMultiPolygon, GeoJSONPoint, GeoJSONPolygon } from "./GeoJSON";

import { 
    Geometry, GeometryCollection, 
    Point, LineString, Polygon, 
    MultiPoint, MultiLineString, MultiPolygon 
} from ".";

/**
 * Factory function for creating geometry objects from GeoJSON Geometry objects
 * - about Geometry objects @see GeoJSONGeometry
 * @param geometry 
 * @returns 
 */
export function fromGeometryObj(
    geometry: GeoJSONGeometry | GeoJSONGeometryCollection
): Geometry | GeometryCollection {
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
            throw new Error("Unknown geometry type: " + geometry.type + " in fromGeometryObj");
    }
}

/**
 * Factory function for creating geometry objects from GeoJSON Feature objects
 * - you can use this function to create inner geometry from Features
 * - about Feature objects @see GeoJSONFeature
 * @param geometry 
 * @returns 
 */
export function fromFeatureObj(feature: GeoJSONFeature | GeoJSONFeatureCollection): Geometry | GeometryCollection {
    if(feature.type === "Feature"){
        const geometry = feature.geometry;
        switch (geometry.type) {
            case "Point":
                return Point.fromFeature(feature);
            case "LineString":
                return LineString.fromFeature(feature);
            case "Polygon":
                return Polygon.fromFeature(feature);
            case "MultiPoint":
                return MultiPoint.fromFeature(feature);
            case "MultiLineString":
                return MultiLineString.fromFeature(feature);
            case "MultiPolygon":
                return MultiPolygon.fromFeature(feature);
            case "GeometryCollection":
                return collectionFromFeature(feature);
            default:
                throw new Error("Unknown geometry type: " + geometry.type + " in fromGeometryObj");
        }
    }else if(feature.type === "FeatureCollection"){
        return collectionFromFeature(feature);
    }else{
        throw new Error("Unknown GeoJSON type");
    }
}

/**
 * Factory function for creating geometryCollection objects from GeoJSON Feature objects
 * @param feature 
 * @returns 
 */
export function collectionFromFeature(feature: GeoJSONFeature | GeoJSONFeatureCollection): GeometryCollection{
    // from feature
    // 1. 带有 GeometryCollection 的 feature
    // 2. FeatureCollection
    if(feature.type === "Feature"){
        const geometry = feature.geometry;
        if(geometry.type === "GeometryCollection"){
            const geometries = (geometry as GeoJSONGeometryCollection).geometries.map(geo => fromGeometryObj(geo));
            return new GeometryCollection(geometries, feature.properties);
        }else{
            throw new Error("The input feature is not a GeometryCollection: " + geometry.type);
        }
    }else if(feature.type === "FeatureCollection"){
        // 递归调用 fromGeometry
        const geometries = (feature as GeoJSONFeatureCollection).features.map(f => fromFeatureObj(f));
        return new GeometryCollection(geometries);
    } else{
        throw new Error("Unknown GeoJSON type");
    }
}

/**
 * Factory function for creating geometryCollection objects from GeoJSON Geometry objects
 * @param geometry 
 * @returns 
 */
export function collectionFromGeometry(geometry: GeoJSONGeometryCollection | GeoJSONGeometry): GeometryCollection{
    // 1. GeometryCollection
    if(geometry.type === "GeometryCollection"){
        const geometries = (geometry as GeoJSONGeometryCollection).geometries.map(geo => fromGeometryObj(geo));
        return new GeometryCollection(geometries);
    }else{
        throw new Error("The input geometry is not a GeometryCollection: " + geometry.type);
    }
}
