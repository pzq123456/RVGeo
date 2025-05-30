[rvgeo](../index.md) / radiansToLength

# radiansToLength()

```ts
function radiansToLength(radians, units?): number
```

Defined in: [src/math/units.ts:19](https://github.com/pzq123456/RVGeo/blob/e727f6f6e310621d656b74948bed9956ff45a613/src/math/units.ts#L19)

- Convert a distance measurement (assuming a spherical Earth) from radians to a more friendly unit.
- 将距离测量值（假设地球是球形的）从弧度转换为更友好的单位。
- Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
- 有效单位：英里，海里，英寸，码，米，千米，厘米，英尺

## Parameters

### radians

`number`

in radians across the sphere

### units?

[`Units`](../type-aliases/Units.md) = `"kilometers"`

can be degrees, radians, miles, inches, yards, metres,
meters, kilometres, kilometers.

## Returns

`number`

distance

## Name

radiansToLength
