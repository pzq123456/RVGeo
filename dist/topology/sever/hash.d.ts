type equalfun = (a: any, b: any) => boolean;
export declare function hashset(size: number, hash: (value: any) => number, equal: equalfun, type?: ArrayConstructor, empty?: null): {
    add: (value: any) => boolean;
    has: (value: any) => boolean;
    values: () => any[];
};
export declare function hashmap(size: number, hash: (value: any) => number, equal: equalfun, keyType?: any, keyEmpty?: any, valueType?: any): {
    set: (key: any, value: any) => any;
    maybeSet: (key: any, value: any) => any;
    get: (key: any, missingValue?: any) => any;
    keys: () => any[];
};
export declare function equalPoint(pointA: number[], pointB: number[]): boolean;
export declare function hashPoint(point: [number, number]): number;
export {};
