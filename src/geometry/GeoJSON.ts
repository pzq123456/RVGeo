// Note: GeoJSON types

import { MBR } from "./MBR";

// Interface for GeoJSON geometry types
export interface GeoJSONGeometry {
    type: string;
    coordinates: any;
}

// Interface for GeoJSON point coordinates
export interface GeoJSONPoint extends GeoJSONGeometry {
    type: "Point";
    coordinates: [number, number, number];
}

// Interface for GeoJSON multipoint coordinates
export interface GeoJSONMultiPoint extends GeoJSONGeometry {
    type: "MultiPoint";
    coordinates: [number, number, number][];
}

// Interface for GeoJSON line string coordinates
export interface GeoJSONLineString extends GeoJSONGeometry {
    type: "LineString";
    coordinates: [number, number][];
}

// Interface for GeoJSON multi line string coordinates
export interface GeoJSONMultiLineString extends GeoJSONGeometry {
    type: "MultiLineString";
    coordinates: [number, number][][];
}

// Interface for GeoJSON polygon coordinates
export interface GeoJSONPolygon extends GeoJSONGeometry {
    type: "Polygon";
    coordinates: [number, number][][];
}

// Interface for GeoJSON multi polygon coordinates
export interface GeoJSONMultiPolygon extends GeoJSONGeometry {
    type: "MultiPolygon";
    coordinates: [number, number[][]][];
}

// Interface for GeoJSON geometry collection
export interface GeoJSONGeometryCollection extends GeoJSONGeometry {
    type: "GeometryCollection";
    geometries: GeoJSONGeometry[];
}

// Interface for GeoJSON feature
export interface GeoJSONFeature<T> {
    type: "Feature";
    geometry: GeoJSONGeometry;
    properties: T;
    bbox?: MBR; // https://datatracker.ietf.org/doc/html/rfc7946#section-5
}

// Interface for GeoJSON feature collection
export interface GeoJSONFeatureCollection {
    type: "FeatureCollection";
    features: GeoJSONFeature<any>[];
}

export interface defaultProperties {}; // 只要不指定字段，用户就可以自定义任意字段