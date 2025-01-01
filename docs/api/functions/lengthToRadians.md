[rvgeo](../index.md) / lengthToRadians

# lengthToRadians()

```ts
function lengthToRadians(distance, units?): number
```

Defined in: [src/math/units.ts:41](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/math/units.ts#L41)

- Convert a distance measurement (assuming a spherical Earth) from a real-world unit into radians
- 将距离测量值（假设地球是球形的）从现实世界的单位转换为弧度
- Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 - 有效单位：英里，海里，英寸，码，米，千米，厘米，英尺

## Parameters

### distance

`number`

in real units

### units?

[`Units`](../type-aliases/Units.md) = `"kilometers"`

can be degrees, radians, miles, inches, yards, metres,
meters, kilometres, kilometers.

## Returns

`number`

radians

## Name

lengthToRadians
