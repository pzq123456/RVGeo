[**rvgeo**](../README.md)

***

[rvgeo](../globals.md) / toPoint

# Function: toPoint()

## Call Signature

> **toPoint**(`Lon`, `Lat`, `properties`?): [`Point`](../classes/Point.md)

Defined in: src/geometry/Point.ts:203

the factory function to create a Point(the following ways are equivalent)

### Parameters

#### Lon

`number`

#### Lat

`number`

#### properties?

`any`

### Returns

[`Point`](../classes/Point.md)

### Example

```ts
// base usage
let point = toPoint(120, 30);
// override properties
// all properties are optional(可以不传)
let point = toPoint(120, 30, { name: 'test' });
let point = toPoint([120, 30], { name: 'test' });
// lon, lat = X, Y = lng, lat = x, y
let point = toPoint({lon: 120, lat: 30}, { name: 'test' });
```

## Call Signature

> **toPoint**(`coordinates`, `properties`?): [`Point`](../classes/Point.md)

Defined in: src/geometry/Point.ts:204

the factory function to create a Point(the following ways are equivalent)

### Parameters

#### coordinates

\[`number`, `number`\]

#### properties?

`any`

### Returns

[`Point`](../classes/Point.md)

### Example

```ts
// base usage
let point = toPoint(120, 30);
// override properties
// all properties are optional(可以不传)
let point = toPoint(120, 30, { name: 'test' });
let point = toPoint([120, 30], { name: 'test' });
// lon, lat = X, Y = lng, lat = x, y
let point = toPoint({lon: 120, lat: 30}, { name: 'test' });
```

## Call Signature

> **toPoint**(`obj`, `properties`?): [`Point`](../classes/Point.md)

Defined in: src/geometry/Point.ts:205

the factory function to create a Point(the following ways are equivalent)

### Parameters

#### obj

\{ `lat`: `number`; `lon`: `number`; \} | \{ `x`: `number`; `y`: `number`; \} | \{ `lat`: `number`; `lng`: `number`; \}

#### properties?

`any`

### Returns

[`Point`](../classes/Point.md)

### Example

```ts
// base usage
let point = toPoint(120, 30);
// override properties
// all properties are optional(可以不传)
let point = toPoint(120, 30, { name: 'test' });
let point = toPoint([120, 30], { name: 'test' });
// lon, lat = X, Y = lng, lat = x, y
let point = toPoint({lon: 120, lat: 30}, { name: 'test' });
```
