[rvgeo](../index.md) / isPotentialGeoObject

# isPotentialGeoObject()

```ts
function isPotentialGeoObject(obj): boolean
```

Defined in: [src/core/utils.ts:11](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/core/utils.ts#L11)

判断一个 object 是否是(潜在的)地理对象（是否含有 X，Y 或者 lon，lat 或者 lng，lat 属性）

## Parameters

### obj

`any`

待判断的对象
@returns{boolean} - 如果是地理对象则返回 true，否则返回 false

## Returns

`boolean`
