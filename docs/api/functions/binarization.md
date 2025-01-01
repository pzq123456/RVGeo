[rvgeo](../index.md) / binarization

# binarization()

```ts
function binarization(
   grid, 
   band, 
   threshold): number[][]
```

Defined in: [src/coverage/grid.ts:372](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/coverage/grid.ts#L372)

二值化网格数据，返回二值化后的网格数据

## Parameters

### grid

[`Grid`](../classes/Grid.md)

grid 对象

### band

`number`

波段号

### threshold

`number`

二值化阈值

## Returns

`number`[][]

- 返回二值化后的网格数据
