[rvgeo](../index.md) / customRange

# customRange

Defined in: [src/datastru/quadTree.ts:168](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/datastru/quadTree.ts#L168)

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

```ts
contains: (point) => boolean;
```

Defined in: [src/datastru/quadTree.ts:170](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/datastru/quadTree.ts#L170)

#### Parameters

##### point

\[`number`, `number`\]

#### Returns

`boolean`

***

### intersects()

```ts
intersects: (boundary) => boolean;
```

Defined in: [src/datastru/quadTree.ts:169](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/datastru/quadTree.ts#L169)

#### Parameters

##### boundary

[`MBR`](../type-aliases/MBR.md)

#### Returns

`boolean`
