/**
 * 数据结构： 图（由节点和边组成）
 */
interface Graph<T> {
  nodes: T[];
  edges: Map<T, T[]>;
  edgesWeights?: Map<T, Map<T, number>>;
  weights?: (from: T, to: T) => number;
  neighbors: (node: T) => T[];
}


/**
  const graph: Graph<T> = {
    nodes,
    edges: new Map(),
    neighbors(node) {
      return graph.edges.get(node) || [];
    },
  };

  for (const [from, to] of edges) {
    if (!graph.edges.has(from)) {
      graph.edges.set(from, []);
    }
    graph.edges.get(from)!.push(to);
  }

  return graph;
 */

/**
 * 创建图
 */
function createGraph<T>(nodes: T[], edges: [T, T][] | [T, T, number][]): Graph<T> {
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

// interface GridGraph{

// }