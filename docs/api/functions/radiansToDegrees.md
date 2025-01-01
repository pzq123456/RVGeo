[rvgeo](../index.md) / radiansToDegrees

# radiansToDegrees()

```ts
function radiansToDegrees(radians): number
```

Defined in: [src/math/units.ts:74](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/math/units.ts#L74)

- Converts an angle in radians to degrees

## Parameters

### radians

`number`

angle in radians

## Returns

`number`

degrees between 0 and 360 degrees

## Name

radiansToDegrees

## Example

```ts
radiansToDegrees(Math.PI / 2); // => 90
let resultArray = [Math.PI, Math.PI / 2, 0, -Math.PI / 2, -Math.PI];
resultArray.map(radiansToDegrees); // => [180, 90, 0, -90, -180]
```
