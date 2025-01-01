[rvgeo](../index.md) / hist

# hist()

```ts
function hist(
   grid2D, 
   stretch, 
   statistics?): number[]
```

Defined in: [src/render/colors.ts:246](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/render/colors.ts#L246)

直方图计算函数

## Parameters

### grid2D

`number`[][]

二维数组

### stretch

[`stretchType`](../enumerations/stretchType.md) = `stretchType.linear`

拉伸类型

### statistics?

波段统计信息

#### max

`number`

#### mean

`number`

#### min

`number`

## Returns

`number`[]

- 直方图数组，长度为 256，每个元素表示对应灰度值的像素个数
