[rvgeo](../index.md) / QuadTree

# QuadTree

Defined in: [src/datastru/quadTree.ts:3](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/datastru/quadTree.ts#L3)

## Constructors

### new QuadTree()

```ts
new QuadTree(
   boundary, 
   capacity, 
   maxDepth): QuadTree
```

Defined in: [src/datastru/quadTree.ts:15](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/datastru/quadTree.ts#L15)

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

```ts
boundary: MBR;
```

Defined in: [src/datastru/quadTree.ts:5](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/datastru/quadTree.ts#L5)

***

### depth

```ts
depth: number;
```

Defined in: [src/datastru/quadTree.ts:12](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/datastru/quadTree.ts#L12)

***

### maxDepth

```ts
maxDepth: number = 10;
```

Defined in: [src/datastru/quadTree.ts:13](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/datastru/quadTree.ts#L13)

***

### northEast

```ts
northEast: null | QuadTree;
```

Defined in: [src/datastru/quadTree.ts:8](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/datastru/quadTree.ts#L8)

***

### northWest

```ts
northWest: null | QuadTree;
```

Defined in: [src/datastru/quadTree.ts:7](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/datastru/quadTree.ts#L7)

***

### southEast

```ts
southEast: null | QuadTree;
```

Defined in: [src/datastru/quadTree.ts:10](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/datastru/quadTree.ts#L10)

***

### southWest

```ts
southWest: null | QuadTree;
```

Defined in: [src/datastru/quadTree.ts:9](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/datastru/quadTree.ts#L9)

## Accessors

### pointsList

#### Get Signature

```ts
get pointsList(): null | [number, number][]
```

Defined in: [src/datastru/quadTree.ts:68](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/datastru/quadTree.ts#L68)

##### Returns

`null` \| \[`number`, `number`\][]

## Methods

### contains()

```ts
contains(point, boundary): boolean
```

Defined in: [src/datastru/quadTree.ts:29](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/datastru/quadTree.ts#L29)

#### Parameters

##### point

\[`number`, `number`\]

##### boundary

[`MBR`](../type-aliases/MBR.md)

#### Returns

`boolean`

***

### customQuery()

```ts
customQuery(range): [number, number][]
```

Defined in: [src/datastru/quadTree.ts:128](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/datastru/quadTree.ts#L128)

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

```ts
insert(point): boolean
```

Defined in: [src/datastru/quadTree.ts:42](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/datastru/quadTree.ts#L42)

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

```ts
intersects(boundary, range): boolean
```

Defined in: [src/datastru/quadTree.ts:33](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/datastru/quadTree.ts#L33)

#### Parameters

##### boundary

[`MBR`](../type-aliases/MBR.md)

##### range

[`MBR`](../type-aliases/MBR.md)

#### Returns

`boolean`

***

### queryRange()

```ts
queryRange(range): [number, number][]
```

Defined in: [src/datastru/quadTree.ts:103](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/datastru/quadTree.ts#L103)

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

```ts
subdivide(): void
```

Defined in: [src/datastru/quadTree.ts:79](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/datastru/quadTree.ts#L79)

剖分当前节点

#### Returns

`void`
