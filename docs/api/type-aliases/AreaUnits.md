[rvgeo](../index.md) / AreaUnits

# AreaUnits

```ts
type AreaUnits = 
  | Exclude<Units, "radians" | "degrees">
  | "acres"
  | "hectares"
  | "squaremeters"
  | "squaremetres"
  | "squarekilometers"
  | "squarekilometres";
```

Defined in: [src/math/factors.ts:36](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/math/factors.ts#L36)
