export interface Transform {
    scale: [number, number];
    translate: [number, number];
}
export declare function transform(transform?: Transform): (input: number[], i?: number) => [number, number];
export declare function untransform(transform?: Transform | null): (input: number[], i?: number) => [number, number];
