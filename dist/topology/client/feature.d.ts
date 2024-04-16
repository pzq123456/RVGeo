import { GeometryObject } from '../sever/geometry';
import { Topology } from '../sever/extract';

export declare function reverse(array: any[], n: number): void;
export declare function feature(topology: Topology, o: GeometryObject | string): {
    type: string;
    properties: any;
    geometry: GeometryObject;
    id?: undefined;
    bbox?: undefined;
} | {
    type: string;
    id: string | number | undefined;
    properties: any;
    geometry: GeometryObject;
    bbox?: undefined;
} | {
    type: string;
    id: string | number | undefined;
    bbox: import('../..').MBR;
    properties: any;
    geometry: GeometryObject;
} | {
    type: string;
    features: any;
};
export declare function object(topology: Topology, o: GeometryObject): GeometryObject;
