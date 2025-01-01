[rvgeo](../index.md) / drawGrid2d

# drawGrid2d()

```ts
function drawGrid2d(
   canavs, 
   grid2D, 
   Rect, 
   statistics, 
   colorBand, 
   GridMBR?): void
```

Defined in: [src/render/renderGrid.ts:57](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/render/renderGrid.ts#L57)

## Parameters

### canavs

`HTMLCanvasElement`

### grid2D

`number`[][]

### Rect

`Rect`

### statistics

#### max

`number`

#### mean

`number`

#### min

`number`

### colorBand

(`statistics`, `value`) => `string`

### GridMBR?

\[`number`, `number`, `number`, `number`\]

## Returns

`void`
