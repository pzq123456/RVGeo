[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / QuadTree

# Class: QuadTree

Defined in: src/datastru/quadTree.ts:3

## Constructors

### new QuadTree()

> **new QuadTree**(`boundary`, `capacity`, `maxDepth`): [`QuadTree`](QuadTree.md)

Defined in: src/datastru/quadTree.ts:15

#### Parameters

##### boundary

[`MBR`](../type-aliases/MBR.md)

##### capacity

`number`

##### maxDepth

`number` = `10`

#### Returns

[`QuadTree`](QuadTree.md)

## Properties

### boundary

> **boundary**: [`MBR`](../type-aliases/MBR.md)

Defined in: src/datastru/quadTree.ts:5

***

### depth

> **depth**: `number`

Defined in: src/datastru/quadTree.ts:12

***

### maxDepth

> **maxDepth**: `number` = `10`

Defined in: src/datastru/quadTree.ts:13

***

### northEast

> **northEast**: `null` \| [`QuadTree`](QuadTree.md)

Defined in: src/datastru/quadTree.ts:8

***

### northWest

> **northWest**: `null` \| [`QuadTree`](QuadTree.md)

Defined in: src/datastru/quadTree.ts:7

***

### southEast

> **southEast**: `null` \| [`QuadTree`](QuadTree.md)

Defined in: src/datastru/quadTree.ts:10

***

### southWest

> **southWest**: `null` \| [`QuadTree`](QuadTree.md)

Defined in: src/datastru/quadTree.ts:9

## Accessors

### pointsList

#### Get Signature

> **get** **pointsList**(): `null` \| \[`number`, `number`\][]

Defined in: src/datastru/quadTree.ts:68

##### Returns

`null` \| \[`number`, `number`\][]

## Methods

### contains()

> **contains**(`point`, `boundary`): `boolean`

Defined in: src/datastru/quadTree.ts:29

#### Parameters

##### point

\[`number`, `number`\]

##### boundary

[`MBR`](../type-aliases/MBR.md)

#### Returns

`boolean`

***

### customQuery()

> **customQuery**(`range`): \[`number`, `number`\][]

Defined in: src/datastru/quadTree.ts:128

you need a customRange object to support custom range query
- note : this function has the SAME LOGIC as queryRange.

#### Parameters

##### range

[`customRange`](../interfaces/customRange.md)

#### Returns

\[`number`, `number`\][]

#### See

customRange

***

### insert()

> **insert**(`point`): `boolean`

Defined in: src/datastru/quadTree.ts:42

插入一个点

#### Parameters

##### point

\[`number`, `number`\]

点的坐标

#### Returns

`boolean`

- 是否插入成功

***

### intersects()

> **intersects**(`boundary`, `range`): `boolean`

Defined in: src/datastru/quadTree.ts:33

#### Parameters

##### boundary

[`MBR`](../type-aliases/MBR.md)

##### range

[`MBR`](../type-aliases/MBR.md)

#### Returns

`boolean`

***

### queryRange()

> **queryRange**(`range`): \[`number`, `number`\][]

Defined in: src/datastru/quadTree.ts:103

四叉树范围查询
- 输入一个矩形范围，返回范围内的所有点
- 同时支持平面坐标系和经纬度坐标系（跨界线、边界、大范围区域会有 BUG）

#### Parameters

##### range

[`MBR`](../type-aliases/MBR.md)

#### Returns

\[`number`, `number`\][]

***

### subdivide()

> **subdivide**(): `void`

Defined in: src/datastru/quadTree.ts:79

剖分当前节点

#### Returns

`void`
