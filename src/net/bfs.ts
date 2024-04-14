/**
 * Breadth First Search
 */
import { Graph, GridGraph} from './graph';
import { Queue } from './utils';

export function breadthFirstSearch(graph: Graph<any>, start: any): void {
  const frontier = new Queue<any>();
  frontier.put(start);
  const reached: Record<string, boolean> = {};
  reached[start] = true;

  while (!frontier.isEmpty()) {
    const current = frontier.get();
    console.log(`  Visiting ${current}`);
    for (const next of graph.neighbors(current)) {
      if (!reached[next]) {
        frontier.put(next);
        reached[next] = true;
      }
    }
  }
}

export function gridBreadthFirstSearch(graph: GridGraph, start: [number, number], goal?: [number,number]): Map<string, [number, number] | null> {
  const frontier = new Queue<[number, number]>();
  frontier.put(start);
  let cameFrom = new Map<string, [number, number] | null>();
  cameFrom.set(start.join(','), null);

  while (!frontier.isEmpty()) {
    const current = frontier.get() as [number, number];
    if(goal && current.join(',') === goal.join(',')){
      break;
    }
    for (const next of graph.neighbors(current as [number, number])) {
      if(graph.weights!(current as [number, number], next) === Infinity) continue;
      if (!cameFrom.has(next.join(','))) {
        frontier.put(next);
        cameFrom.set(next.join(','), current as [number, number]);
      }
    }
  }


  return cameFrom;
}
