[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / Grid

# Class: Grid

Defined in: src/coverage/grid.ts:13

网格类（本质是三维数组）:
- 三维数组的每一层代表一个波段
- 其中一层为一个二维数组，代表一个波段的值，并与对应的 MBR 对象关联用于挂接地图上的位置
- MBR 统一使用 `WGS84` 坐标系

## Constructors

### new Grid()

> **new Grid**(`MBR`, `data`): [`Grid`](Grid.md)

Defined in: src/coverage/grid.ts:22

#### Parameters

##### MBR

[`MBR`](../type-aliases/MBR.md)

##### data

`number`[][][]

#### Returns

[`Grid`](Grid.md)

## Properties

### bands

> **bands**: `number`

Defined in: src/coverage/grid.ts:19

***

### cols

> **cols**: `number`

Defined in: src/coverage/grid.ts:18

***

### data

> **data**: `number`[][][]

Defined in: src/coverage/grid.ts:15

***

### MBR

> **MBR**: [`MBR`](../type-aliases/MBR.md)

Defined in: src/coverage/grid.ts:14

***

### rows

> **rows**: `number`

Defined in: src/coverage/grid.ts:17

***

### shape

> **shape**: `number`[]

Defined in: src/coverage/grid.ts:16

***

### stasticsCache

> **stasticsCache**: `object`[] = `[]`

Defined in: src/coverage/grid.ts:20

#### max

> **max**: `number`

#### mean

> **mean**: `number`

#### min

> **min**: `number`

## Accessors

### bandCount

#### Get Signature

> **get** **bandCount**(): `number`

Defined in: src/coverage/grid.ts:44

##### Returns

`number`

***

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: src/coverage/grid.ts:40

##### Returns

`number`

***

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: src/coverage/grid.ts:36

##### Returns

`number`

***

### XYZValue

#### Set Signature

> **set** **XYZValue**(`xyzv`): `void`

Defined in: src/coverage/grid.ts:58

##### Parameters

###### xyzv

\[`number`, `number`, `number`, `number`\]

##### Returns

`void`

## Methods

### binarization()

> **binarization**(`band`, `threshold`): `number`[][]

Defined in: src/coverage/grid.ts:278

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

> **ConvertToGridMBR**(`MBR`): `null` \| [`MBR`](../type-aliases/MBR.md)

Defined in: src/coverage/grid.ts:180

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

> **fillInvalidValue**(`band`): `void`

Defined in: src/coverage/grid.ts:121

在内部修改网格数据 使用均值替换0等无效值

#### Parameters

##### band

`number`

波段号

#### Returns

`void`

***

### getBand()

> **getBand**(`band`): `number`[][]

Defined in: src/coverage/grid.ts:32

#### Parameters

##### band

`number`

#### Returns

`number`[][]

***

### getBandStatistics()

> **getBandStatistics**(`band`): `object`

Defined in: src/coverage/grid.ts:245

获取指定波段的最大值、最小值、平均值

#### Parameters

##### band

`number`

波段号

#### Returns

`object`

##### max

> **max**: `number`

##### mean

> **mean**: `number`

##### min

> **min**: `number`

***

### getCoordByGridCoord()

> **getCoordByGridCoord**(`GridCoord`): \[`number`, `number`\]

Defined in: src/coverage/grid.ts:229

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

> **getCoutourCode**(`band`, `threshold`): `number`[][]

Defined in: src/coverage/grid.ts:299

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

> **getGridCoord**(`Point`): `null` \| \[`number`, `number`\]

Defined in: src/coverage/grid.ts:206

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

> **getMean**(`band`): `number`

Defined in: src/coverage/grid.ts:319

#### Parameters

##### band

`number`

#### Returns

`number`

***

### getShape()

> **getShape**(): `number`[]

Defined in: src/coverage/grid.ts:28

#### Returns

`number`[]

***

### getSorted1DArray()

> **getSorted1DArray**(`band`): `number`[]

Defined in: src/coverage/grid.ts:330

#### Parameters

##### band

`number`

#### Returns

`number`[]

***

### getSubGrid()

> **getSubGrid**(`GridMBR`, `band`): `number`[][][]

Defined in: src/coverage/grid.ts:93

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

> **getSubGridObj**(`GridMBR`, `band`): [`Grid`](Grid.md)

Defined in: src/coverage/grid.ts:153

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

> **getXYZValue**(`xy`, `z`): `number`

Defined in: src/coverage/grid.ts:52

#### Parameters

##### xy

\[`number`, `number`\]

##### z

`number` = `0`

#### Returns

`number`

***

### setMBR()

> **setMBR**(`MBR`): `void`

Defined in: src/coverage/grid.ts:48

#### Parameters

##### MBR

[`MBR`](../type-aliases/MBR.md)

#### Returns

`void`

***

### fromFillValue()

> `static` **fromFillValue**(`fillVal`, `shape`): [`Grid`](Grid.md)

Defined in: src/coverage/grid.ts:342

#### Parameters

##### fillVal

`number` = `0`

##### shape

\[`number`, `number`, `number`\]

#### Returns

[`Grid`](Grid.md)
