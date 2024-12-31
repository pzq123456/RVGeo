[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / factors2

# Variable: factors2

> `const` **factors2**: `Record`\<[`Units`](../type-aliases/Units.md), `number`\>

Defined in: src/math/factors.ts:80

- Unit of measurement factors based on 1 meter.
- 单位换算关系，以1米为基准。

## Example

```ts
var meters = 1; // 1 meter
var length = meters * factors2.kilometers;
```
