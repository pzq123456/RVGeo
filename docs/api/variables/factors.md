[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / factors

# Variable: factors

> `const` **factors**: `Record`\<[`Units`](../type-aliases/Units.md), `number`\>

Defined in: src/math/factors.ts:55

- Unit of measurement factors using a spherical (non-ellipsoid) earth radius.

## Example

```ts
var radians = 1; // 1 radian
var length = radians * earthRadius;

var length = 1; // 1 meter
var radians = length / earthRadius;
```
