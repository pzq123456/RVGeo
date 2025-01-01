[rvgeo](../index.md) / extend

# extend()

```ts
function extend(dest, ...args): any
```

Defined in: [src/core/utils.ts:57](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/core/utils.ts#L57)

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
