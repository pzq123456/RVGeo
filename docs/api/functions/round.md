[rvgeo](../index.md) / round

# round()

```ts
function round(num, precision?): number
```

Defined in: [src/core/utils.ts:229](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/core/utils.ts#L229)

- Round number to precision
- 将数字四舍五入到指定精度

## Parameters

### num

`number`

Number

### precision?

`number` = `0`

Precision

## Returns

`number`

rounded number

## Example

```ts
round(120.4321)
//=120

round(120.4321, 2)
//=120.43
```
