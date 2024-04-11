import { describe, it, expect } from 'vitest';
import { createGraph } from '../../src';

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
});