import { quantized } from './prequantize';
import { geometryOutputs } from './geometry';

export interface Arc {
    0: number;
    1: number;
    next?: Arc;
}
export interface Topology {
    type: string;
    coordinates: [number, number][];
    lines: Arc[];
    rings: Arc[];
    arcs?: any[];
    objects: geometryOutputs;
    bbox?: [number, number, number, number];
    transform?: quantized;
}
export declare function extract(objects: geometryOutputs): Topology;
