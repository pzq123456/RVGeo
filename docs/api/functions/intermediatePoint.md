[rvgeo](../index.md) / intermediatePoint

# intermediatePoint()

```ts
function intermediatePoint(
   latlng1, 
   latlng2, 
   fraction): [number, number]
```

Defined in: [src/math/measuring.ts:129](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/math/measuring.ts#L129)

An intermediate point at any fraction along the great circle path between two points

## Parameters

### latlng1

\[`number`, `number`\]

### latlng2

\[`number`, `number`\]

### fraction

`number`

f is fraction along great circle route (f=0 is point 1, f=1 is point 2)

## Returns

\[`number`, `number`\]
