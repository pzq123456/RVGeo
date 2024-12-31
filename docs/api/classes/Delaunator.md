[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / Delaunator

# Class: Delaunator

Defined in: src/triangulation/Delaunay.ts:16

## Constructors

### new Delaunator()

> **new Delaunator**(`coords`): [`Delaunator`](Delaunator.md)

Defined in: src/triangulation/Delaunay.ts:30

#### Parameters

##### coords

`number`[]

#### Returns

[`Delaunator`](Delaunator.md)

## Methods

### \_addTriangle()

> **\_addTriangle**(`i0`, `i1`, `i2`, `a`, `b`, `c`): `any`

Defined in: src/triangulation/Delaunay.ts:360

#### Parameters

##### i0

`any`

##### i1

`any`

##### i2

`any`

##### a

`any`

##### b

`any`

##### c

`any`

#### Returns

`any`

***

### \_hashKey()

> **\_hashKey**(`x`, `y`): `number`

Defined in: src/triangulation/Delaunay.ts:265

#### Parameters

##### x

`any`

##### y

`any`

#### Returns

`number`

***

### \_legalize()

> **\_legalize**(`a`): `number`

Defined in: src/triangulation/Delaunay.ts:269

#### Parameters

##### a

`any`

#### Returns

`number`

***

### \_link()

> **\_link**(`a`, `b`): `void`

Defined in: src/triangulation/Delaunay.ts:354

#### Parameters

##### a

`any`

##### b

`any`

#### Returns

`void`

***

### circumcenter()

> **circumcenter**(`ax`, `ay`, `bx`, `by`, `cx`, `cy`): `object`

Defined in: src/triangulation/Delaunay.ts:438

#### Parameters

##### ax

`any`

##### ay

`any`

##### bx

`any`

##### by

`any`

##### cx

`any`

##### cy

`any`

#### Returns

`object`

##### x

> **x**: `any`

##### y

> **y**: `any`

***

### getHalfedges()

> **getHalfedges**(): `any`

Defined in: src/triangulation/Delaunay.ts:379

#### Returns

`any`

***

### getHull()

> **getHull**(): `any`

Defined in: src/triangulation/Delaunay.ts:382

#### Returns

`any`

***

### getPoints()

> **getPoints**(): `any`[][]

Defined in: src/triangulation/Delaunay.ts:385

#### Returns

`any`[][]

***

### getTriangleIndices()

> **getTriangleIndices**(): \[`number`, `number`, `number`\][]

Defined in: src/triangulation/Delaunay.ts:403

- get the indices of triangles as array of array of 3 elements
- 获得三角形的索引，以3个元素的数组的数组的形式

#### Returns

\[`number`, `number`, `number`\][]

***

### getTriangles()

> **getTriangles**(): `any`

Defined in: src/triangulation/Delaunay.ts:376

#### Returns

`any`

***

### update()

> **update**(): `void`

Defined in: src/triangulation/Delaunay.ts:55

#### Returns

`void`

***

### circumRadius()

> `static` **circumRadius**(`p1`, `p2`, `p3`): `number`

Defined in: src/triangulation/Delaunay.ts:422

计算三点外接圆的半径

#### Parameters

##### p1

\[`number`, `number`\]

##### p2

\[`number`, `number`\]

##### p3

\[`number`, `number`\]

#### Returns

`number`

***

### from()

> `static` **from**(`points`, `getX`, `getY`): [`Delaunator`](Delaunator.md)

Defined in: src/triangulation/Delaunay.ts:17

#### Parameters

##### points

`number`[][]

##### getX

(`p`) => `any`

##### getY

(`p`) => `any`

#### Returns

[`Delaunator`](Delaunator.md)
