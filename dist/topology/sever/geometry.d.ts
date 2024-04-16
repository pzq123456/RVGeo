import { GeoJSONFeature, GeoJSONGeometry, GeoJSONFeatureCollection, MBR } from '../../geometry';

export interface GeometryObject {
    type: string | null;
    coordinates?: any;
    geometries?: any;
    arcs?: any;
    bbox?: MBR;
    id?: string | number;
    properties?: any;
}
export interface geometryInputs {
    [key: string]: GeoJSONFeatureCollection | GeoJSONFeature | GeoJSONGeometry;
}
export interface geometryOutputs {
    [key: string]: GeometryObject;
}
export declare function geometry(inputs: geometryInputs): geometryOutputs;
export declare function geomifyObject(input: GeoJSONFeatureCollection | GeoJSONFeature | GeoJSONGeometry): GeometryObject;
