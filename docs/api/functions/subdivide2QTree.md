[rvgeo](../index.md) / subdivide2QTree

# subdivide2QTree()

```ts
function subdivide2QTree(grid, maxDepth): QTNode
```

Defined in: [src/coverage/grid.ts:403](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L403)

（简易四叉树）创建一个 gridMBR 层面的四叉树

## Parameters

### grid

[`Grid`](../classes/Grid.md)

### maxDepth

`number`

|---------->x
| 2 | 3 |
|--------
| 0 | 1 |
|
y

## Returns

[`QTNode`](../type-aliases/QTNode.md)
