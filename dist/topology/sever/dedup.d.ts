import { Arc, Topology } from './extract';

export interface dedupedTopology extends Topology {
    arcs: Arc[] | [number, number][][];
}
export declare function dedup(topology: dedupedTopology): dedupedTopology;
