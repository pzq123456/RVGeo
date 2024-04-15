import { describe, it, expect } from 'vitest';
import { createGraph, createGridGraph, breadthFirstSearch, reconstructPath } from '../../src';

describe('createGraph', () => {
  it('should create a graph', () => {
    const graph = createGraph([1, 2, 3], [
      [1, 2],
      [2, 3],
      [3, 1],
    ]);
    expect(graph.nodes).toEqual([1, 2, 3]);
    expect(graph.neighbors(1)).toEqual([2]);
    expect(graph.neighbors(2)).toEqual([3]);
    expect(graph.neighbors(3)).toEqual([1]);
  });

  it('should create a graph with weights', () => {
    const graph = createGraph([1, 2, 3], [
      [1, 2, 10],
      [2, 3, 20],
      [3, 1, 30],
    ]);
    expect(graph.nodes).toEqual([1, 2, 3]);
    expect(graph.neighbors(1)).toEqual([2]);
    expect(graph.neighbors(2)).toEqual([3]);
    expect(graph.neighbors(3)).toEqual([1]);
    expect(graph.weights!(1, 2)).toBe(10);
    expect(graph.weights!(2, 3)).toBe(20);
    expect(graph.weights!(3, 1)).toBe(30);
  });

  it('should create a graph with weights and infinity', () => {
    const grid = [
      [1, 1, 1, 1],
      [1, 1, 0, 1],
      [1, 0, 1, 1],
      [1, 1, 0, 1],
    ];

    function strategy(from: number, to: number) {
      // 只要 from 或 to 含有 0 的节点，权重就是 Infinity
      if (from === 0 || to === 0) {
        return Infinity;
      }else{
        return 1;
      }
    }

    const GridGraph = createGridGraph(grid, strategy);
    // neighbors
    expect(GridGraph.neighbors([0, 0])).toEqual([[0, 1], [1, 0]]);
    expect(GridGraph.neighbors([1, 1])).toEqual([[1, 2], [1, 0], [0, 1], [2, 1]]);
    // // weights
    expect(GridGraph.weights!([0, 0], [0, 1])).toBe(1);
    expect(GridGraph.weights!([0, 0], [1, 0])).toBe(1);
    expect(GridGraph.weights!([1, 1], [1, 2])).toBe(Infinity);
  });

  // test bfs
  it('should create a graph and do bfs', () => {
    const graph = createGraph([1, 2, 3, 4, 5], [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
    ]);
    const cameFrom = breadthFirstSearch(graph, 1);
    expect(cameFrom.get(5)).toBe(4);
  });

  // test reconstructPath
  it('should create a graph and do bfs and reconstructPath', () => {
    const graph = createGraph([1, 2, 3, 4, 5], [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
    ]);
    const cameFrom = breadthFirstSearch(graph, 1);
    const path = reconstructPath(cameFrom, 1, 5);
    expect(path).toEqual([1,2,3,4,5]);
  });
});