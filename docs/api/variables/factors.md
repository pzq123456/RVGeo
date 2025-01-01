[rvgeo](../index.md) / factors

# factors

```ts
const factors: Record<Units, number>;
```

Defined in: [src/math/factors.ts:55](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/math/factors.ts#L55)

- Unit of measurement factors using a spherical (non-ellipsoid) earth radius.

## Example

```ts
var radians = 1; // 1 radian
var length = radians * earthRadius;

var length = 1; // 1 meter
var radians = length / earthRadius;
```
