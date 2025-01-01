[rvgeo](../index.md) / Voronoi

# Voronoi

Defined in: [src/triangulation/Delaunay.ts:649](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/triangulation/Delaunay.ts#L649)

## Constructors

### new Voronoi()

```ts
new Voronoi(
   params?, 
   x?, 
   y?): Voronoi
```

Defined in: [src/triangulation/Delaunay.ts:660](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/triangulation/Delaunay.ts#L660)

- 从点数组构造 Voronoi 图或包装 Delaunator
- Construct Voronoi diagram from points array or wrap Delaunator

#### Parameters

##### params?

点数组或 Delaunator 对象： [[x1, y1], [x2, y2], ... 或 Delaunator 对象

`number`[][] | [`Delaunator`](Delaunator.md)

##### x?

(`p`) => `number`

若 params 为点数组，则为获取 x 坐标的函数（默认规则，取表示点的二维数组中首位）

##### y?

(`p`) => `number`

若 params 为点数组，则为获取 y 坐标的函数（有默认规则，取表示点的二维数组中末位）

#### Returns

[`Voronoi`](Voronoi.md)

## Properties

### delaunay

```ts
delaunay: Delaunator;
```

Defined in: [src/triangulation/Delaunay.ts:650](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/triangulation/Delaunay.ts#L650)

***

### points

```ts
points: number[][];
```

Defined in: [src/triangulation/Delaunay.ts:651](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/triangulation/Delaunay.ts#L651)

## Methods

### cutVoronoiByMBR()

```ts
cutVoronoiByMBR(MBR): Map<any, any>
```

Defined in: [src/triangulation/Delaunay.ts:691](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/triangulation/Delaunay.ts#L691)

使用 MBR 对 Voronoi 图进行裁剪（由于精度问题，极端情况下不可靠）

#### Parameters

##### MBR

\[`number`, `number`, `number`, `number`\]

#### Returns

`Map`\<`any`, `any`\>

***

### getVoronoi()

```ts
getVoronoi(): Map<number, number[][]>
```

Defined in: [src/triangulation/Delaunay.ts:677](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/triangulation/Delaunay.ts#L677)

- 获取 Voronoi cell 的顶点数组

#### Returns

`Map`\<`number`, `number`[][]\>

- Map<编号, 顶点数组>

***

### isInsideMBR()

```ts
isInsideMBR(points, MBR): boolean
```

Defined in: [src/triangulation/Delaunay.ts:724](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/triangulation/Delaunay.ts#L724)

#### Parameters

##### points

`number`[][]

##### MBR

\[`number`, `number`, `number`, `number`\]

#### Returns

`boolean`

***

### robustVoronoi()

```ts
robustVoronoi(MBR): Map<any, any>
```

Defined in: [src/triangulation/Delaunay.ts:712](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/triangulation/Delaunay.ts#L712)

- 更加健壮的 Voronoi 图（将超出 MBR 部分都删去）

#### Parameters

##### MBR

\[`number`, `number`, `number`, `number`\]

#### Returns

`Map`\<`any`, `any`\>
