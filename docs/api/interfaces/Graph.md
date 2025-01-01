[rvgeo](../index.md) / Graph

# Graph\<T\>

Defined in: [src/net/graph.ts:4](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/net/graph.ts#L4)

数据结构： 图（由节点和边组成）

## Type Parameters

• **T**

## Properties

### edges

```ts
edges: Map<T, T[]>;
```

Defined in: [src/net/graph.ts:6](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/net/graph.ts#L6)

***

### edgesWeights?

```ts
optional edgesWeights: Map<T, Map<T, number>>;
```

Defined in: [src/net/graph.ts:7](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/net/graph.ts#L7)

***

### neighbors()

```ts
neighbors: (node) => T[];
```

Defined in: [src/net/graph.ts:9](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/net/graph.ts#L9)

#### Parameters

##### node

`T`

#### Returns

`T`[]

***

### nodes

```ts
nodes: T[];
```

Defined in: [src/net/graph.ts:5](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/net/graph.ts#L5)

***

### weights()?

```ts
optional weights: (from, to) => number;
```

Defined in: [src/net/graph.ts:8](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/net/graph.ts#L8)

#### Parameters

##### from

`T`

##### to

`T`

#### Returns

`number`
