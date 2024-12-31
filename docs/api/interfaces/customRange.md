[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / customRange

# Interface: customRange

Defined in: src/datastru/quadTree.ts:168

impliment customRange to support custom range query
- make sure your customRange object has correct intersects and contains function
- note: 
 - the boundary of customRange is the boundary of QuadTree
 - the point of customRange is the point of QuadTree

## Example

```ts
// customRange use circle as example
circleRange = {
intersects: (boundary: MBR) => {},
contains: (point: [number,number]) => {}
}
```

## See

`Circle` class in Geometry directory

## Properties

### contains()

> **contains**: (`point`) => `boolean`

Defined in: src/datastru/quadTree.ts:170

#### Parameters

##### point

\[`number`, `number`\]

#### Returns

`boolean`

***

### intersects()

> **intersects**: (`boundary`) => `boolean`

Defined in: src/datastru/quadTree.ts:169

#### Parameters

##### boundary

[`MBR`](../type-aliases/MBR.md)

#### Returns

`boolean`
