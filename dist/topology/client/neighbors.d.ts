import { GeometryObject } from '../sever/geometry';

interface Object {
    type: string;
    arcs: number[][];
    geometries?: GeometryObject;
}
interface Neighbor {
    [key: number]: number[];
}
export declare function neighbors(objects: Object[]): Neighbor[];
export {};
