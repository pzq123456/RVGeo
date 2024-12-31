[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / gridBreadthFirstSearch

# Function: gridBreadthFirstSearch()

> **gridBreadthFirstSearch**(`graph`, `start`, `goal`?): `Map`\<`string`, \[`number`, `number`\] \| `null`\>

Defined in: src/net/bfs.ts:31

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
