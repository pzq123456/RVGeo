/**
 * Breadth First Search
 */
import { Graph, GridGraph} from './graph';
import { Queue } from './utils';

export function breadthFirstSearch(graph: Graph<any>, start: any): Map<any, any> {
  const frontier = new Queue<any>();
  frontier.put(start);
  const cameFrom = new Map<any, any>();
  cameFrom.set(start, null);

  while (!frontier.isEmpty()) {
    const current = frontier.get();
    for (const next of graph.neighbors(current)) {
      if(graph.weights!(current, next) === Infinity) continue;
      if (!cameFrom.has(next)) {
        frontier.put(next);
        cameFrom.set(next, current);
      }
    }
  }

  return cameFrom;
}

/** 
 * @param goal - used to stop the search when the goal is reached
 * @note - [num,num] can not be the key of a map, so we use string instead.
 */
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

export function reconstructPath(cameFrom: Map<any, any>, start: any, goal: any): any[] {
  let current = goal;
  let path = [];
  if (!cameFrom.has(goal)) {
    return [];
  }
  while (current !== start) {
    path.push(current);
    current = cameFrom.get(current)!;
  }
  path.push(start);
  path.reverse();
  return path;
}

export function gridReconstructPath(cameFrom: Map<string, [number, number] | null>, start: [number, number], goal: [number, number]): [number, number][] {
  let current = goal;
  let path: [number, number][] = [];
  if (!cameFrom.has(goal.join(','))) {
    return [];
  }
  while (current && current.join(',') !== start.join(',')) {
    path.push(current);
    current = cameFrom.get(current.join(','))!;
  }
  path.push(start);
  path.reverse();
  return path;
}
