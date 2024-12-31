[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / Graph

# Interface: Graph\<T\>

Defined in: src/net/graph.ts:4

数据结构： 图（由节点和边组成）

## Type Parameters

• **T**

## Properties

### edges

> **edges**: `Map`\<`T`, `T`[]\>

Defined in: src/net/graph.ts:6

***

### edgesWeights?

> `optional` **edgesWeights**: `Map`\<`T`, `Map`\<`T`, `number`\>\>

Defined in: src/net/graph.ts:7

***

### neighbors()

> **neighbors**: (`node`) => `T`[]

Defined in: src/net/graph.ts:9

#### Parameters

##### node

`T`

#### Returns

`T`[]

***

### nodes

> **nodes**: `T`[]

Defined in: src/net/graph.ts:5

***

### weights()?

> `optional` **weights**: (`from`, `to`) => `number`

Defined in: src/net/graph.ts:8

#### Parameters

##### from

`T`

##### to

`T`

#### Returns

`number`
