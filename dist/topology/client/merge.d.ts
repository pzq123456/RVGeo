import { GeometryObject } from '../sever/geometry';
import { Topology } from '../sever/extract';

export declare function merge(topology: Topology): GeometryObject;
export declare function mergeArcs(topology: Topology, objects: GeometryObject[]): {
    type: string;
    arcs: number[][][];
};
