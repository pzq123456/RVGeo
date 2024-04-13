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

// def breadth_first_search(graph: Graph, start: Location):
//     frontier = Queue()
//     frontier.put(start)
//     came_from: dict[Location, Optional[Location]] = {}
//     came_from[start] = None
    
//     while not frontier.empty():
//         current: Location = frontier.get()
//         for next in graph.neighbors(current):
//             if next not in came_from:
//                 frontier.put(next)
//                 came_from[next] = current
    
//     return came_from

export function gridBreadthFirstSearch(graph: GridGraph, start: [number, number]): Map<[number, number], [number, number] | null> {
  const frontier = new Queue<[number, number]>();
  frontier.put(start);
  let cameFrom = new Map<[number, number], [number, number] | null>();
  cameFrom.set(start, null);
  const reached: Record<string, boolean> = {};
  reached[start.join(',')] = true;

  while (!frontier.isEmpty()) {
    const current = frontier.get();
    for (const next of graph.neighbors(current as [number, number])) {
      if (!reached[next.join(',')]) {
        frontier.put(next);
        cameFrom.set(next, current as [number, number]);
        reached[next.join(',')] = true;
      }
    }
    // break;
  }


  return cameFrom;
}
