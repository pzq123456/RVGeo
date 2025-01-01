[rvgeo](../index.md) / drawQTree2d

# drawQTree2d()

```ts
function drawQTree2d(
   canvas, 
   rect, 
   QTree, 
   grid, 
   colorBand, 
   value?, 
   statistics?): void
```

Defined in: [src/render/renderGrid.ts:376](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/render/renderGrid.ts#L376)

绘制四叉树

## Parameters

### canvas

`HTMLCanvasElement`

### rect

`Rect`

### QTree

[`QTNode`](../type-aliases/QTNode.md)

### grid

[`Grid`](../classes/Grid.md)

### colorBand

(`statistics`, `value`) => `string`

### value?

`number`

### statistics?

#### max

`number`

#### mean

`number`

#### min

`number`

## Returns

`void`
