import { Topology } from './extract';

export declare function join(topology: Topology): {
    add: (value: any) => boolean;
    has: (value: any) => boolean;
    values: () => any[];
};
