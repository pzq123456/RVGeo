[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / pseudoColorBandFactory

# Function: pseudoColorBandFactory()

> **pseudoColorBandFactory**(`type`, `level`?, `colorList`?): (`statistics`, `value`) => `string`

Defined in: src/render/colors.ts:206

伪彩色带渲染工厂函数

## Parameters

### type

[`stretchType`](../enumerations/stretchType.md)

拉伸类型

### level?

`number`[]

[0, 1] 之间的数组，表示每个颜色的分界点

### colorList?

`string`[] = `defaultColorList`

颜色列表

## Returns

`Function`

### Parameters

#### statistics

##### max

`number`

##### mean

`number`

##### min

`number`

#### value

`number`

### Returns

`string`
