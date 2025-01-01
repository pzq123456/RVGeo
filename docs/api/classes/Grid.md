[rvgeo](../index.md) / Grid

# Grid

Defined in: [src/coverage/grid.ts:13](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L13)

网格类（本质是三维数组）:
- 三维数组的每一层代表一个波段
- 其中一层为一个二维数组，代表一个波段的值，并与对应的 MBR 对象关联用于挂接地图上的位置
- MBR 统一使用 `WGS84` 坐标系

## Constructors

### new Grid()

```ts
new Grid(MBR, data): Grid
```

Defined in: [src/coverage/grid.ts:22](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L22)

#### Parameters

##### MBR

[`MBR`](../type-aliases/MBR.md)

##### data

`number`[][][]

#### Returns

[`Grid`](Grid.md)

## Properties

### bands

```ts
bands: number;
```

Defined in: [src/coverage/grid.ts:19](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L19)

***

### cols

```ts
cols: number;
```

Defined in: [src/coverage/grid.ts:18](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L18)

***

### data

```ts
data: number[][][];
```

Defined in: [src/coverage/grid.ts:15](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L15)

***

### MBR

```ts
MBR: MBR;
```

Defined in: [src/coverage/grid.ts:14](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L14)

***

### rows

```ts
rows: number;
```

Defined in: [src/coverage/grid.ts:17](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L17)

***

### shape

```ts
shape: number[];
```

Defined in: [src/coverage/grid.ts:16](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L16)

***

### stasticsCache

```ts
stasticsCache: object[] = [];
```

Defined in: [src/coverage/grid.ts:20](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L20)

#### max

```ts
max: number;
```

#### mean

```ts
mean: number;
```

#### min

```ts
min: number;
```

## Accessors

### bandCount

#### Get Signature

```ts
get bandCount(): number
```

Defined in: [src/coverage/grid.ts:44](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L44)

##### Returns

`number`

***

### height

#### Get Signature

```ts
get height(): number
```

Defined in: [src/coverage/grid.ts:40](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L40)

##### Returns

`number`

***

### width

#### Get Signature

```ts
get width(): number
```

Defined in: [src/coverage/grid.ts:36](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L36)

##### Returns

`number`

***

### XYZValue

#### Set Signature

```ts
set XYZValue(xyzv): void
```

Defined in: [src/coverage/grid.ts:58](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L58)

##### Parameters

###### xyzv

\[`number`, `number`, `number`, `number`\]

##### Returns

`void`

## Methods

### binarization()

```ts
binarization(band, threshold): number[][]
```

Defined in: [src/coverage/grid.ts:278](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L278)

二值化网格数据，返回二值化后的网格数据

#### Parameters

##### band

`number`

波段号

##### threshold

`number`

二值化阈值

#### Returns

`number`[][]

***

### ConvertToGridMBR()

```ts
ConvertToGridMBR(MBR): null | MBR
```

Defined in: [src/coverage/grid.ts:180](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L180)

由外部经纬度坐标获取网格范围，行列号索引表示（只有全部在栅格范围内才会正常得到结果）
- 若外部坐标不全部在网格范围内，则返回 null

#### Parameters

##### MBR

[`MBR`](../type-aliases/MBR.md)

网格行列号范围

#### Returns

`null` \| [`MBR`](../type-aliases/MBR.md)

***

### fillInvalidValue()

```ts
fillInvalidValue(band): void
```

Defined in: [src/coverage/grid.ts:121](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L121)

在内部修改网格数据 使用均值替换0等无效值

#### Parameters

##### band

`number`

波段号

#### Returns

`void`

***

### getBand()

```ts
getBand(band): number[][]
```

Defined in: [src/coverage/grid.ts:32](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L32)

#### Parameters

##### band

`number`

#### Returns

`number`[][]

***

### getBandStatistics()

```ts
getBandStatistics(band): object
```

Defined in: [src/coverage/grid.ts:245](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L245)

获取指定波段的最大值、最小值、平均值

#### Parameters

##### band

`number`

波段号

#### Returns

`object`

##### max

```ts
max: number;
```

##### mean

```ts
mean: number;
```

##### min

```ts
min: number;
```

***

### getCoordByGridCoord()

```ts
getCoordByGridCoord(GridCoord): [number, number]
```

Defined in: [src/coverage/grid.ts:229](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L229)

由行列号反算经纬度坐标（栅格中心点）

#### Parameters

##### GridCoord

\[`number`, `number`\]

网格坐标，格式为：[row, col]

#### Returns

\[`number`, `number`\]

- 返回经纬度坐标，格式为：[lon, lat]

***

### getCoutourCode()

```ts
getCoutourCode(band, threshold): number[][]
```

Defined in: [src/coverage/grid.ts:299](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L299)

the result grid size is [rows - 1, cols - 1], and the render function should move 1/2 grid size to the left and up

#### Parameters

##### band

`number`

##### threshold

`number`

#### Returns

`number`[][]

***

### getGridCoord()

```ts
getGridCoord(Point): null | [number, number]
```

Defined in: [src/coverage/grid.ts:206](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L206)

计算输入点的网格坐标（整数行列号坐标）

#### Parameters

##### Point

\[`number`, `number`\]

输入点坐标，格式为：[lon, lat]

#### Returns

`null` \| \[`number`, `number`\]

- 返回网格坐标，格式为：[row, col] 若输入点不在网格范围内，则返回 null

***

### getMean()

```ts
getMean(band): number
```

Defined in: [src/coverage/grid.ts:319](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L319)

#### Parameters

##### band

`number`

#### Returns

`number`

***

### getShape()

```ts
getShape(): number[]
```

Defined in: [src/coverage/grid.ts:28](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L28)

#### Returns

`number`[]

***

### getSorted1DArray()

```ts
getSorted1DArray(band): number[]
```

Defined in: [src/coverage/grid.ts:330](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L330)

#### Parameters

##### band

`number`

#### Returns

`number`[]

***

### getSubGrid()

```ts
getSubGrid(GridMBR, band): number[][][]
```

Defined in: [src/coverage/grid.ts:93](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L93)

获取指定范围，指定波段的网格数据
- 建议：先使用 `ConvertToGridMBR` 方法获取网格范围，再使用本方法获取网格数据（为简化代码，没有将这两个方法合并）

#### Parameters

##### GridMBR

[`MBR`](../type-aliases/MBR.md)

网格范围 行列号索引表示

##### band

`number`[] = `...`

波段号数组

#### Returns

`number`[][][]

- 返回网格数据，格式为：[band][row][col]

***

### getSubGridObj()

```ts
getSubGridObj(GridMBR, band): Grid
```

Defined in: [src/coverage/grid.ts:153](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L153)

与 `getSubGrid` 方法类似，但返回的是一个 Grid 对象

#### Parameters

##### GridMBR

[`MBR`](../type-aliases/MBR.md)

网格范围 行列号索引表示

##### band

`number`[] = `...`

波段号数组

#### Returns

[`Grid`](Grid.md)

- 返回网格数据，格式为：[band][row][col]

***

### getXYZValue()

```ts
getXYZValue(xy, z): number
```

Defined in: [src/coverage/grid.ts:52](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L52)

#### Parameters

##### xy

\[`number`, `number`\]

##### z

`number` = `0`

#### Returns

`number`

***

### setMBR()

```ts
setMBR(MBR): void
```

Defined in: [src/coverage/grid.ts:48](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L48)

#### Parameters

##### MBR

[`MBR`](../type-aliases/MBR.md)

#### Returns

`void`

***

### fromFillValue()

```ts
static fromFillValue(fillVal, shape): Grid
```

Defined in: [src/coverage/grid.ts:342](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L342)

#### Parameters

##### fillVal

`number` = `0`

##### shape

\[`number`, `number`, `number`\]

#### Returns

[`Grid`](Grid.md)
