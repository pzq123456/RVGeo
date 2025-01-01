[rvgeo](../index.md) / gridBreadthFirstSearch

# gridBreadthFirstSearch()

```ts
function gridBreadthFirstSearch(
   graph, 
   start, 
goal?): Map<string, [number, number] | null>
```

Defined in: [src/net/bfs.ts:31](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/net/bfs.ts#L31)

## Parameters

### graph

[`GridGraph`](../interfaces/GridGraph.md)

### start

\[`number`, `number`\]

### goal?

\[`number`, `number`\]

used to stop the search when the goal is reached

## Returns

`Map`\<`string`, \[`number`, `number`\] \| `null`\>

## Note

- [num,num] can not be the key of a map, so we use string instead.
