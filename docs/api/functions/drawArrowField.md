[rvgeo](../index.md) / drawArrowField

# drawArrowField()

```ts
function drawArrowField(
   canavs, 
   colRow, 
   Rect, 
   toDict, 
   color, 
   path?): void
```

Defined in: [src/render/renderGrid.ts:106](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/render/renderGrid.ts#L106)

绘制箭头场，默认为起点为当前格子的中心

## Parameters

### canavs

`HTMLCanvasElement`

### colRow

\[`number`, `number`\]

### Rect

`Rect`

### toDict

`Map`\<`string`, `null` \| \[`number`, `number`\]\>

### color

`string` = `"gray"`

### path?

\[`number`, `number`\][]

## Returns

`void`
