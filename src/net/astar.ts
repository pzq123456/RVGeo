import { GridGraph } from './graph';
import { PriorityQueue } from './utils';

function heuristic(a: [number, number], b: [number, number]): number {
  const [x1, y1] = a;
  const [x2, y2] = b;
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

export function gridAstar(graph: GridGraph, start: [number, number], goal: [number, number]): Map<string, [number, number] | null> {
    const frontier = new PriorityQueue<[number, number]>();
    frontier.put(start, 0);
    let cameFrom = new Map<string, [number, number] | null>();
    let costSoFar = new Map<string, number>();
    cameFrom.set(start.join(','), null);
    costSoFar.set(start.join(','), 0);

    while (!frontier.isEmpty()) {
        const current = frontier.get() as [number, number];
        if (current.join(',') === goal.join(',')) {
            break;
        }

        for (const next of graph.neighbors(current as [number, number])) {
            if (graph.weights!(current as [number, number], next) === Infinity) continue;
            const newCost = costSoFar.get(current.join(','))! + graph.weights!(current as [number, number], next);
            if (!costSoFar.has(next.join(',')) || newCost < costSoFar.get(next.join(','))!) {
                costSoFar.set(next.join(','), newCost);
                const priority = newCost + heuristic(next, goal);
                // const priority = heuristic(next, goal); // Greedy Best-First Search
                frontier.put(next, priority);
                cameFrom.set(next.join(','), current as [number, number]);
            }
        }
    }

    return cameFrom;
}
