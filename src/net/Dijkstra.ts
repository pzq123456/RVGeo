import { GridGraph, Graph } from './graph';
import { PriorityQueue } from './utils';

export function gridDijkstra(graph: GridGraph, start: [number, number], goal?: [number, number]): Map<string, [number, number] | null>{
    const frontier = new PriorityQueue<[number, number]>();
    frontier.put(start, 0);
    let cameFrom = new Map<string, [number, number] | null>();
    let costSoFar = new Map<string, number>();
    cameFrom.set(start.join(','), null);
    costSoFar.set(start.join(','), 0);
    
    while (!frontier.isEmpty()) {
        const current = frontier.get() as [number, number];
        if(goal && current.join(',') === goal.join(',')){
            break;
        }
        for (const next of graph.neighbors(current as [number, number])) {

            if(graph.weights!(current as [number, number], next) === Infinity) continue;

            const newCost = costSoFar.get(current.join(','))! + graph.weights!(current as [number, number], next);
                if (!costSoFar.has(next.join(',')) || newCost < costSoFar.get(next.join(','))!) {
                    costSoFar.set(next.join(','), newCost);
                    const priority = newCost;
                    frontier.put(next, priority);
                    cameFrom.set(next.join(','), current as [number, number]);
                }
            }
    }
    return cameFrom;
}

export function dijkstra(graph: Graph<any>, start: any): Map<any, any> {
    const frontier = new PriorityQueue<any>();
    frontier.put(start, 0);
    let cameFrom = new Map<any, any>();
    let costSoFar = new Map<any, number>();
    cameFrom.set(start, null);
    costSoFar.set(start, 0);
    
    while (!frontier.isEmpty()) {
        const current = frontier.get() as any;
        for (const next of graph.neighbors(current)) {
            if(graph.weights!(current, next) === Infinity) continue;
            const newCost = costSoFar.get(current)! + graph.weights!(current, next);
            if (!costSoFar.has(next) || newCost < costSoFar.get(next)!) {
                costSoFar.set(next, newCost);
                const priority = newCost;
                frontier.put(next, priority);
                cameFrom.set(next, current);
            }
        }
    }
    return cameFrom;
}
