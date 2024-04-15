/**
 * 数据结构： 图（由节点和边组成）
 */
export interface Graph<T> {
  nodes: T[];
  edges: Map<T, T[]>;
  edgesWeights?: Map<T, Map<T, number>>;
  weights?: (from: T, to: T) => number;
  neighbors: (node: T) => T[];
}

/**
 * 创建图
 */
export function createGraph<T>(nodes: T[], edges: [T, T][] | [T, T, number][]): Graph<T> {
  const graph: Graph<T> = {
    nodes,
    edges: new Map(),
    neighbors(node) {
      return graph.edges.get(node) || [];
    },
  };

  for (const [from, to, weight = 1] of edges) {
    if (!graph.edges.has(from)) {
      graph.edges.set(from, []);
    }
    graph.edges.get(from)!.push(to);

    if (!graph.edgesWeights) {
      graph.edgesWeights = new Map();
    }
    if (!graph.edgesWeights.has(from)) {
      graph.edgesWeights.set(from, new Map());
    }
    graph.edgesWeights.get(from)!.set(to, weight);
  }

  if (graph.edgesWeights) {
    graph.weights = (from, to) => {
      return graph.edgesWeights!.get(from)!.get(to) || Infinity;
    };
  }

  return graph;
}


/**
 * 二维数组转换为图
 */
export interface GridGraph{
  grid: number[][];
  cols: number;
  rows: number;
  weights?: (from: [number, number], to: [number, number]) => number;
  neighbors: (node: [number, number]) => [number, number][];
}

export type gridValueStrategy = (from: number, to: number) => number; // 从一个节点到另一个节点的权重计算策略

export function createGridGraph(
  grid: number[][],
  strategy?: gridValueStrategy,
  mooreNeighborhood: boolean = false
): GridGraph {
  const cols = grid[0].length;
  const rows = grid.length;
  const graph: GridGraph = {
    grid,
    cols,
    rows,
    neighbors(node) {
      const [x, y] = node;
      let result = [] as [number, number][];
      
      if (mooreNeighborhood) {
        result = [
          [x - 1, y - 1],
          [x - 1, y + 1],
          [x + 1, y - 1],
          [x + 1, y + 1],
          [x + 1, y],
          [x, y - 1],
          [x - 1, y],
          [x, y + 1],
        ]; // 8个方向
      } else {
        result = [[x + 1, y], [x - 1, y], [x, y - 1], [x, y + 1]]; // 4个方向
      }

      if ((x + y) % 2 === 0) {
        result.reverse();
      }
      return result.filter(([x, y]) => x >= 0 && x < cols && y >= 0 && y < rows);
    },
  };

  if (strategy) {
    graph.weights = (from, to) => {
      return strategy(grid[from[1]][from[0]], grid[to[1]][to[0]]);
    };
  }

  return graph;
}