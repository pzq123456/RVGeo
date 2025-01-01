[rvgeo](../index.md) / GridGraph

# GridGraph

Defined in: [src/net/graph.ts:52](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/net/graph.ts#L52)

二维数组转换为图

## Properties

### cols

```ts
cols: number;
```

Defined in: [src/net/graph.ts:54](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/net/graph.ts#L54)

***

### grid

```ts
grid: number[][];
```

Defined in: [src/net/graph.ts:53](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/net/graph.ts#L53)

***

### neighbors()

```ts
neighbors: (node) => [number, number][];
```

Defined in: [src/net/graph.ts:57](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/net/graph.ts#L57)

#### Parameters

##### node

\[`number`, `number`\]

#### Returns

\[`number`, `number`\][]

***

### rows

```ts
rows: number;
```

Defined in: [src/net/graph.ts:55](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/net/graph.ts#L55)

***

### weights()?

```ts
optional weights: (from, to) => number;
```

Defined in: [src/net/graph.ts:56](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/net/graph.ts#L56)

#### Parameters

##### from

\[`number`, `number`\]

##### to

\[`number`, `number`\]

#### Returns

`number`
