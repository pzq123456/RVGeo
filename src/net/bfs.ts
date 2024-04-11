/**
 * Breadth First Search
 */
import { Graph } from './graph';
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
