[rvgeo](../index.md) / formatNum

# formatNum()

```ts
function formatNum(num, precision?): number
```

Defined in: [src/math/utils.ts:9](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/math/utils.ts#L9)

这个函数的主要目的是将数字 num 四舍五入到指定的 precision 小数位。

## Parameters

### num

`number`

### precision?

这是一个可选参数，表示要四舍五入到的小数位数。
	- 如果没有提供这个参数，那么默认值为 6。
	- 如果这个参数为 false，那么函数将直接返回 num，不进行任何处理。

`number` | `boolean`

## Returns

`number`

- 返回四舍五入后的数字
