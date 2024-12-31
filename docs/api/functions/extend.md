[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / extend

# Function: extend()

> **extend**(`dest`, ...`args`): `any`

Defined in: src/core/utils.ts:57

Merge the properties

## Parameters

### dest

`any`

The target object

### args

...`any`[]

The objects to be merged

## Returns

`any`

- The merged object

## Example

```ts
extend({a: 1}, {b: 2}, {c: 3}) // {a: 1, b: 2, c: 3}
extend({a: 1}, {a: 2}, {a: 3}) // {a: 3}
```
