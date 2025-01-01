[rvgeo](../index.md) / Delaunator

# Delaunator

Defined in: [src/triangulation/Delaunay.ts:16](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/triangulation/Delaunay.ts#L16)

## Constructors

### new Delaunator()

```ts
new Delaunator(coords): Delaunator
```

Defined in: [src/triangulation/Delaunay.ts:30](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/triangulation/Delaunay.ts#L30)

#### Parameters

##### coords

`number`[]

#### Returns

[`Delaunator`](Delaunator.md)

## Methods

### \_addTriangle()

```ts
_addTriangle(
   i0, 
   i1, 
   i2, 
   a, 
   b, 
   c): any
```

Defined in: [src/triangulation/Delaunay.ts:360](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/triangulation/Delaunay.ts#L360)

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

```ts
_hashKey(x, y): number
```

Defined in: [src/triangulation/Delaunay.ts:265](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/triangulation/Delaunay.ts#L265)

#### Parameters

##### x

`any`

##### y

`any`

#### Returns

`number`

***

### \_legalize()

```ts
_legalize(a): number
```

Defined in: [src/triangulation/Delaunay.ts:269](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/triangulation/Delaunay.ts#L269)

#### Parameters

##### a

`any`

#### Returns

`number`

***

### \_link()

```ts
_link(a, b): void
```

Defined in: [src/triangulation/Delaunay.ts:354](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/triangulation/Delaunay.ts#L354)

#### Parameters

##### a

`any`

##### b

`any`

#### Returns

`void`

***

### circumcenter()

```ts
circumcenter(
   ax, 
   ay, 
   bx, 
   by, 
   cx, 
   cy): object
```

Defined in: [src/triangulation/Delaunay.ts:438](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/triangulation/Delaunay.ts#L438)

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

```ts
x: any;
```

##### y

```ts
y: any;
```

***

### getHalfedges()

```ts
getHalfedges(): any
```

Defined in: [src/triangulation/Delaunay.ts:379](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/triangulation/Delaunay.ts#L379)

#### Returns

`any`

***

### getHull()

```ts
getHull(): any
```

Defined in: [src/triangulation/Delaunay.ts:382](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/triangulation/Delaunay.ts#L382)

#### Returns

`any`

***

### getPoints()

```ts
getPoints(): any[][]
```

Defined in: [src/triangulation/Delaunay.ts:385](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/triangulation/Delaunay.ts#L385)

#### Returns

`any`[][]

***

### getTriangleIndices()

```ts
getTriangleIndices(): [number, number, number][]
```

Defined in: [src/triangulation/Delaunay.ts:403](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/triangulation/Delaunay.ts#L403)

- get the indices of triangles as array of array of 3 elements
- 获得三角形的索引，以3个元素的数组的数组的形式

#### Returns

\[`number`, `number`, `number`\][]

***

### getTriangles()

```ts
getTriangles(): any
```

Defined in: [src/triangulation/Delaunay.ts:376](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/triangulation/Delaunay.ts#L376)

#### Returns

`any`

***

### update()

```ts
update(): void
```

Defined in: [src/triangulation/Delaunay.ts:55](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/triangulation/Delaunay.ts#L55)

#### Returns

`void`

***

### circumRadius()

```ts
static circumRadius(
   p1, 
   p2, 
   p3): number
```

Defined in: [src/triangulation/Delaunay.ts:422](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/triangulation/Delaunay.ts#L422)

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

```ts
static from(
   points, 
   getX, 
   getY): Delaunator
```

Defined in: [src/triangulation/Delaunay.ts:17](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/triangulation/Delaunay.ts#L17)

#### Parameters

##### points

`number`[][]

##### getX

(`p`) => `any`

##### getY

(`p`) => `any`

#### Returns

[`Delaunator`](Delaunator.md)
