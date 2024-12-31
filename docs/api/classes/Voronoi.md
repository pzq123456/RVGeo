[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / Voronoi

# Class: Voronoi

Defined in: src/triangulation/Delaunay.ts:649

## Constructors

### new Voronoi()

> **new Voronoi**(`params`?, `x`?, `y`?): [`Voronoi`](Voronoi.md)

Defined in: src/triangulation/Delaunay.ts:660

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

> **delaunay**: [`Delaunator`](Delaunator.md)

Defined in: src/triangulation/Delaunay.ts:650

***

### points

> **points**: `number`[][]

Defined in: src/triangulation/Delaunay.ts:651

## Methods

### cutVoronoiByMBR()

> **cutVoronoiByMBR**(`MBR`): `Map`\<`any`, `any`\>

Defined in: src/triangulation/Delaunay.ts:691

使用 MBR 对 Voronoi 图进行裁剪（由于精度问题，极端情况下不可靠）

#### Parameters

##### MBR

\[`number`, `number`, `number`, `number`\]

#### Returns

`Map`\<`any`, `any`\>

***

### getVoronoi()

> **getVoronoi**(): `Map`\<`number`, `number`[][]\>

Defined in: src/triangulation/Delaunay.ts:677

- 获取 Voronoi cell 的顶点数组

#### Returns

`Map`\<`number`, `number`[][]\>

- Map<编号, 顶点数组>

***

### isInsideMBR()

> **isInsideMBR**(`points`, `MBR`): `boolean`

Defined in: src/triangulation/Delaunay.ts:724

#### Parameters

##### points

`number`[][]

##### MBR

\[`number`, `number`, `number`, `number`\]

#### Returns

`boolean`

***

### robustVoronoi()

> **robustVoronoi**(`MBR`): `Map`\<`any`, `any`\>

Defined in: src/triangulation/Delaunay.ts:712

- 更加健壮的 Voronoi 图（将超出 MBR 部分都删去）

#### Parameters

##### MBR

\[`number`, `number`, `number`, `number`\]

#### Returns

`Map`\<`any`, `any`\>
