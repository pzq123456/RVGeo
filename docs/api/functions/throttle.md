[rvgeo](../index.md) / throttle

# throttle()

```ts
function throttle(func, wait): (this, ...args) => void
```

Defined in: [src/core/utils.ts:37](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/core/utils.ts#L37)

节流函数

## Parameters

### func

`Function`

要执行的函数

### wait

`number`

等待时间

## Returns

`Function`

- 返回一个节流函数

### Parameters

#### this

`any`

#### args

...`any`[]

### Returns

`void`
