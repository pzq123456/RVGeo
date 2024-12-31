[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / areaFactors

# Variable: areaFactors

> `const` **areaFactors**: `Record`\<[`AreaUnits`](../type-aliases/AreaUnits.md), `number`\>

Defined in: src/math/factors.ts:105

- Area of measurement factors based on 1 square meter.
- 单位换算关系，以1平方米为基准。

## Example

```ts
var meters = 1; // 1 square meter
var area = meters * areaFactors.acres;
```
