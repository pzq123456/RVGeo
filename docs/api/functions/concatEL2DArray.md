[rvgeo](../index.md) / concatEL2DArray

# concatEL2DArray()

```ts
function concatEL2DArray(array1, array2): any[]
```

Defined in: [src/core/utils.ts:145](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/core/utils.ts#L145)

拼接等长二维数组

## Parameters

### array1

`any`[]

[ [1,2,3], [4,5,6], [7,8,9] ]

### array2

`any`[]

[ ['a','b','c'], ['d','e','f'], ['g','h','i'] ]

## Returns

`any`[]

[ [1,2,3,'a','b','c'], [4,5,6,'d','e','f'], [7,8,9,'g','h','i'] ]

## Warning

必须为二维数组，必须等长。
