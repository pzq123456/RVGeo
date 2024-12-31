[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / fillIndexArray

# Function: fillIndexArray()

> **fillIndexArray**(`indexArray`, `fillArray`): `any`

Defined in: src/core/utils.ts:125

- 根据 indexArray 中存储的索引 从 fillArray 中取出对应的元素并填充到 indexArray 中
- fill indexArray with elements from fillArray according to the index stored in indexArray
- `注意`： indexArray 的形状未知 但是 fillArray 不论形状如何始终视为一维数组
- Note: the shape of indexArray is unknown, but fillArray is always regarded as a one-dimensional array regardless of its shape

## Parameters

### indexArray

`any`

存储索引的数组（被填充）

### fillArray

`any`

存储元素的数组 （用于填充）

## Returns

`any`
