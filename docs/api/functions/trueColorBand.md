[rvgeo](../index.md) / trueColorBand

# trueColorBand()

```ts
function trueColorBand(
   statistics, 
   value, 
   strachFunc): string
```

Defined in: [src/render/colors.ts:131](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/render/colors.ts#L131)

真彩色带渲染

## Parameters

### statistics

`object`[]

波段统计信息列表

### value

`number`[]

当前像素值

### strachFunc

(`value`, `statistics`) => `Number`

拉伸函数

## Returns

`string`
