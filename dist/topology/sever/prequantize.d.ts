import { geometryOutputs } from './geometry';

export declare function prequantize(objects: geometryOutputs, bbox: [number, number, number, number], n: number): quantized;
export interface quantized {
    scale: [number, number];
    translate: [number, number];
}
