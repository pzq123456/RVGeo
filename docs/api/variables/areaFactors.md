[rvgeo](../index.md) / areaFactors

# areaFactors

```ts
const areaFactors: Record<AreaUnits, number>;
```

Defined in: [src/math/factors.ts:105](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/math/factors.ts#L105)

- Area of measurement factors based on 1 square meter.
- 单位换算关系，以1平方米为基准。

## Example

```ts
var meters = 1; // 1 square meter
var area = meters * areaFactors.acres;
```
