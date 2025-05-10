// Note: GeoJSON types conforming to RFC 7946

import { MBR } from "./MBR";

// Base coordinate type (2D or 3D)
export type GeoJSONPosition = [number, number];
// export type GeoJSONPosition2D = [number, number];
// export type GeoJSONPosition3D = [number, number, number];

// Base interface for all GeoJSON geometry types
export interface GeoJSONGeometry {
    type: string;
    bbox?: MBR;
}

// Interface for GeoJSON point
export interface GeoJSONPoint extends GeoJSONGeometry {
    type: "Point";
    coordinates: GeoJSONPosition;
}

// Interface for GeoJSON multipoint
export interface GeoJSONMultiPoint extends GeoJSONGeometry {
    type: "MultiPoint";
    coordinates: GeoJSONPosition[];
}

// Interface for GeoJSON line string
export interface GeoJSONLineString extends GeoJSONGeometry {
    type: "LineString";
    coordinates: GeoJSONPosition[];
}

// Interface for GeoJSON multi line string
export interface GeoJSONMultiLineString extends GeoJSONGeometry {
    type: "MultiLineString";
    coordinates: GeoJSONPosition[][];
}

// Interface for GeoJSON polygon (first element is exterior ring, subsequent are holes)
export interface GeoJSONPolygon extends GeoJSONGeometry {
    type: "Polygon";
    coordinates: GeoJSONPosition[][];
}

// Interface for GeoJSON multi polygon
export interface GeoJSONMultiPolygon extends GeoJSONGeometry {
    type: "MultiPolygon";
    coordinates: GeoJSONPosition[][][];
}

// Interface for GeoJSON geometry collection
export interface GeoJSONGeometryCollection extends GeoJSONGeometry {
    type: "GeometryCollection";
    geometries: Array<
        GeoJSONPoint | GeoJSONMultiPoint | 
        GeoJSONLineString | GeoJSONMultiLineString |
        GeoJSONPolygon | GeoJSONMultiPolygon
    >;
}

// Type union of all geometry types
export type GeoJSONGeometryObject = 
    | GeoJSONPoint
    | GeoJSONMultiPoint
    | GeoJSONLineString
    | GeoJSONMultiLineString
    | GeoJSONPolygon
    | GeoJSONMultiPolygon
    | GeoJSONGeometryCollection;

// Interface for GeoJSON feature with generic properties type
export interface GeoJSONFeature<Properties = unknown> {
    type: "Feature";
    geometry: GeoJSONGeometryObject; // null allowed per spec
    properties: Properties | null; // null allowed per spec
    bbox?: MBR;
    id?: string | number;
}

// Interface for GeoJSON feature collection with generic properties type
export interface GeoJSONFeatureCollection<Properties = unknown> {
    type: "FeatureCollection";
    features: Array<GeoJSONFeature<Properties>>;
    bbox?: MBR;
}

// Type union of all GeoJSON objects
export type GeoJSONObject = 
    | GeoJSONGeometryObject
    | GeoJSONFeature
    | GeoJSONFeatureCollection;