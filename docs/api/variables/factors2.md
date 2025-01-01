[rvgeo](../index.md) / factors2

# factors2

```ts
const factors2: Record<Units, number>;
```

Defined in: [src/math/factors.ts:80](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/math/factors.ts#L80)

- Unit of measurement factors based on 1 meter.
- 单位换算关系，以1米为基准。

## Example

```ts
var meters = 1; // 1 meter
var length = meters * factors2.kilometers;
```
