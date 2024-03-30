import { GeometryObject } from '../sever/geometry';
import { Topology } from '../sever/extract';

interface filter {
    (a: GeometryObject, b: GeometryObject): boolean;
}
export declare function mesh(topology: Topology): GeometryObject;
export declare function meshArcs(topology: Topology, object: GeometryObject, filter: filter): {
    type: string;
    arcs: number[][];
};
export {};
