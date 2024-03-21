import { GeoJSONFeature, GeoJSONGeometry, GeoJSONFeatureCollection, GeoJSONGeometryCollection, MBR } from "../../geometry";

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



export function geometry(inputs : geometryInputs) : geometryOutputs {
    var outputs = {}, key;
    //@ts-ignore
    for (key in inputs) outputs[key] = geomifyObject(inputs[key]);
    return outputs;
}

export function geomifyObject(input: GeoJSONFeatureCollection | GeoJSONFeature | GeoJSONGeometry): GeometryObject {
    if (input == null) {
        return {type: null};
    } else if (input.type === "FeatureCollection") {
        return geomifyFeatureCollection(input as GeoJSONFeatureCollection);
    } else if (input.type === "Feature") {
        return geomifyFeature(input as GeoJSONFeature);
    } else {
        return geomifyGeometry(input as GeoJSONGeometry);
    }
}

/**
 * 将 FeatureCollection 转换为 GeometryCollection
 * - Geometries 中包含 properties
 */
function geomifyFeatureCollection(input: GeoJSONFeatureCollection) : GeometryObject {
    var output = {type: "GeometryCollection", geometries: input.features.map(geomifyFeature)} as GeometryObject;
    if (input.bbox != null) output.bbox = input.bbox;
    return output;
}

function geomifyFeature(input: GeoJSONFeature) : GeometryObject {
    var output = geomifyGeometry(input.geometry), key; // eslint-disable-line no-unused-vars
    if (input.id != null) output.id = input.id;
    if (input.bbox != null) output.bbox = input.bbox;
    for (key in input.properties) { output.properties = input.properties; break; }
    return output;
}

function geomifyGeometry(input: GeoJSONGeometry | GeoJSONGeometryCollection): GeometryObject {
    if (input == null) return {type: null};
    let output = {} as GeometryObject;
    if (input.type === "GeometryCollection") {
        input = input as GeoJSONGeometryCollection;
        // 递归调用
        output = {type: "GeometryCollection", geometries: input.geometries.map(geomifyGeometry)};
        if (input.bbox != null) output.bbox = input.bbox;
    } else if (input.type === "Point" || input.type === "MultiPoint") {
        output = {type: input.type, coordinates: input.coordinates};
    } else if (input.type === "LineString" || input.type === "MultiLineString" || input.type === "Polygon" || input.type === "MultiPolygon") {
        input = input as GeoJSONGeometry;
        output = {type: input.type, arcs: input.coordinates};
    }else {
        throw new Error("Unknown geometry type: " + input.type);
    }

    return output;
}