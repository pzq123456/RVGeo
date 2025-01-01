[rvgeo](../index.md) / simpleColorBand

# simpleColorBand()

```ts
function simpleColorBand(
   statistics, 
   value, 
   strachFunc): string
```

Defined in: [src/render/colors.ts:112](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/render/colors.ts#L112)

连续单波段单色带渲染（灰色）

## Parameters

### statistics

波段统计信息

#### max

`number`

#### mean

`number`

#### min

`number`

### value

`number`

当前像素值

### strachFunc

(`value`, `statistics`) => `Number`

拉伸函数

## Returns

`string`
