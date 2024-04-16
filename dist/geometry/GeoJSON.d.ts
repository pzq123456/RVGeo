import { MBR } from './MBR';

export interface GeoJSONGeometry {
    type: string;
    coordinates: any;
}
export interface GeoJSONPoint extends GeoJSONGeometry {
    type: "Point";
    coordinates: [number, number];
}
export interface GeoJSONMultiPoint extends GeoJSONGeometry {
    type: "MultiPoint";
    coordinates: [number, number][];
}
export interface GeoJSONLineString extends GeoJSONGeometry {
    type: "LineString";
    coordinates: [number, number][];
}
export interface GeoJSONMultiLineString extends GeoJSONGeometry {
    type: "MultiLineString";
    coordinates: [number, number][][];
}
export interface GeoJSONPolygon extends GeoJSONGeometry {
    type: "Polygon";
    coordinates: [number, number][][];
}
export interface GeoJSONMultiPolygon extends GeoJSONGeometry {
    type: "MultiPolygon";
    coordinates: [number, number][][][];
}
export interface GeoJSONGeometryCollection {
    type: "GeometryCollection";
    geometries: GeoJSONGeometry[];
    bbox?: MBR;
}
export interface GeoJSONFeature {
    type: "Feature";
    geometry: GeoJSONGeometry | GeoJSONGeometryCollection;
    properties: any;
    bbox?: MBR;
    id?: string | number;
}
export interface GeoJSONFeatureCollection {
    type: "FeatureCollection";
    features: GeoJSONFeature[];
    bbox?: MBR;
}
