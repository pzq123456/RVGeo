[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / GridGraph

# Interface: GridGraph

Defined in: src/net/graph.ts:52

二维数组转换为图

## Properties

### cols

> **cols**: `number`

Defined in: src/net/graph.ts:54

***

### grid

> **grid**: `number`[][]

Defined in: src/net/graph.ts:53

***

### neighbors()

> **neighbors**: (`node`) => \[`number`, `number`\][]

Defined in: src/net/graph.ts:57

#### Parameters

##### node

\[`number`, `number`\]

#### Returns

\[`number`, `number`\][]

***

### rows

> **rows**: `number`

Defined in: src/net/graph.ts:55

***

### weights()?

> `optional` **weights**: (`from`, `to`) => `number`

Defined in: src/net/graph.ts:56

#### Parameters

##### from

\[`number`, `number`\]

##### to

\[`number`, `number`\]

#### Returns

`number`
